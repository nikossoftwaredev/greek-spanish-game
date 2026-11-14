"use client";

import { ArrowRight, RotateCcw, Star, Trophy, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { AskLola } from "@/components/mascot/ask-lola";
import { LolaStanding } from "@/components/mascot/lola-companion";
import { Button } from "@/components/ui/button";
import { lessonByKey } from "@/lib/content/selectors";
import { buildLessonSteps, type LessonStep } from "@/lib/game/lesson-steps";
import { lolaVerdict } from "@/lib/mascot/lines";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

import { ExerciseStep } from "./exercise-step";
import { IntroStep, RuleStep, TableStep, TipsStep } from "./teach-steps";

const XP_CHECK = 3;
const XP_QUIZ = 10;
const XP_FINISH = 10;

interface LessonPlayerProps {
  lessonKey: string;
  exitHref: string;
}

interface LessonRunProps extends LessonPlayerProps {
  onAgain: () => void;
}

const startSteps = (lessonKey: string): LessonStep[] => {
  const entry = lessonByKey(lessonKey);
  if (!entry) return [];
  const { cards, drillStats, verbStats, taughtLessons } = useProgressStore.getState();
  return buildLessonSteps({ entry, learner: { cards, drillStats, verbStats, taughtLessons } });
};

const LessonRun = ({ lessonKey, exitHref, onAgain }: LessonRunProps) => {
  const router = useRouter();
  const openDialog = useDialogStore((state) => state.openDialog);
  const mascot = useSettingsStore((state) => state.mascot);
  const entry = lessonByKey(lessonKey);

  const [steps] = useState<LessonStep[]>(() => startSteps(lessonKey));
  const [index, setIndex] = useState(0);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, xp: 0 });

  const step = steps[index];
  const isExercise = step?.kind === "check" || step?.kind === "quiz";
  const progress = steps.length > 1 ? (index / (steps.length - 1)) * 100 : 0;

  const goNext = (gained: { correct?: boolean; xp: number }) => {
    const nextIndex = index + 1;
    let xp = gained.xp;
    if (steps[nextIndex]?.kind === "done") {
      const store = useProgressStore.getState();
      store.addXp(XP_FINISH);
      store.finishSession();
      xp += XP_FINISH;
    }
    setStats((previous) => ({
      correct: previous.correct + (gained.correct === true ? 1 : 0),
      wrong: previous.wrong + (gained.correct === false ? 1 : 0),
      xp: previous.xp + xp,
    }));
    setIndex(nextIndex);
  };

  const handleExit = () => {
    openDialog(
      CONFIRM_DIALOG,
      { title: "Να σταματήσουμε εδώ;", description: "Μπορείς να ξαναρχίσεις το μάθημα όποτε θες.", actionLabel: "Έξοδος" },
      () => router.push(exitHref),
    );
  };

  useEffect(() => {
    if (!step || isExercise || step.kind === "done") return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;
      if ((event.target as HTMLElement | null)?.tagName === "BUTTON") return;
      event.preventDefault();
      goNext({ xp: 0 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!entry || !step) return null;

  const total = stats.correct + stats.wrong;
  const accuracy = total === 0 ? 100 : Math.round((stats.correct / total) * 100);
  const verdict = lolaVerdict(accuracy);
  const practiceHref = `/play/grammar?lesson=${encodeURIComponent(lessonKey)}&back=${encodeURIComponent(exitHref)}`;

  const renderStep = () => {
    switch (step.kind) {
      case "intro":
        return <IntroStep lesson={entry.lesson} stepCount={steps.length - 1} />;
      case "rule":
        return <RuleStep rule={entry.lesson.rules[step.ruleIndex]} ruleIndex={step.ruleIndex} total={entry.lesson.rules.length} />;
      case "table":
        return <TableStep table={(entry.lesson.tables ?? [])[step.tableIndex]} />;
      case "tips":
        return <TipsStep tips={entry.lesson.tipsEl ?? []} />;
      case "check":
        return (
          <>
            <p className="mb-4 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Θυμάσαι το παράδειγμα;</p>
            <ExerciseStep exercise={step.exercise} position={index} xpCorrect={XP_CHECK} onNext={goNext} />
          </>
        );
      case "quiz":
        return <ExerciseStep exercise={step.exercise} position={index} xpCorrect={XP_QUIZ} onNext={goNext} />;
      case "done":
        return (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            {mascot ? (
              <AskLola body="full" mood={verdict.mood} className="h-60 w-auto" />
            ) : (
              <span className="grid size-24 place-items-center rounded-full bg-sun shadow-[0_5px_0_0_var(--sun-edge)] motion-safe:animate-pop">
                <Trophy className="size-12" aria-hidden />
              </span>
            )}
            <div className="space-y-2">
              <h1 className="font-es text-4xl font-bold italic">{mascot ? verdict.line.es : "¡Muy bien!"}</h1>
              {mascot && <p className="mx-auto max-w-xs text-lg font-bold">{verdict.line.el}</p>}
              <p className="text-muted-foreground">Τελείωσες το μάθημα «{entry.lesson.titleEl}».</p>
            </div>
            <p className="flex items-center gap-2 rounded-full bg-sun/30 px-4 py-1.5 font-extrabold tabular-nums">
              <Star className="size-5 fill-sun text-sun-edge" aria-hidden /> +{stats.xp} πόντοι
            </p>
            <div className="flex w-full max-w-sm flex-col gap-3">
              <Button asChild variant="chunky" size="xl">
                <Link href={practiceHref}>Εξάσκηση τώρα</Link>
              </Button>
              <Button type="button" variant="chunky-outline" size="xl" onClick={onAgain} icon={<RotateCcw />}>
                Ξανά από την αρχή
              </Button>
              <Button asChild variant="ghost">
                <Link href={exitHref}>Πίσω στο μάθημα</Link>
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 pt-4">
        <Button type="button" variant="ghost" size="icon" aria-label="Έξοδος" onClick={handleExit}>
          <X />
        </Button>
        <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} className="h-4 flex-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-success transition-[width] duration-500 ease-out" style={{ width: `${Math.max(progress, 3)}%` }} />
        </div>
        <span className="min-w-12 text-right text-sm font-extrabold text-sun-edge tabular-nums">+{stats.xp}</span>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 pt-8 pb-72">
        <div key={index} className="flex flex-1 flex-col motion-safe:animate-rise">
          {renderStep()}
        </div>
      </main>

      {!isExercise && step.kind !== "done" && (
        <footer className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t-2 border-border bg-background">
          <LolaStanding mood="teaching" animateKey={index} />
          <div className="mx-auto flex w-full max-w-2xl justify-end px-4 py-4">
            <Button type="button" variant="chunky" size="xl" className="min-w-44" onClick={() => goNext({ xp: 0 })}>
              {step.kind === "intro" ? "Ξεκίνα" : "Κατάλαβα"} <ArrowRight />
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
};

/** The step-by-step grammar lesson: teach one rule at a time, check it, then a short quiz. */
export const LessonPlayer = (props: LessonPlayerProps) => {
  const [round, setRound] = useState(0);
  if (!lessonByKey(props.lessonKey))
    return (
      <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-extrabold">Δεν βρέθηκε το μάθημα</h1>
        <Button asChild variant="chunky" size="lg">
          <Link href={props.exitHref}>Πίσω</Link>
        </Button>
      </div>
    );
  return <LessonRun key={round} {...props} onAgain={() => setRound((value) => value + 1)} />;
};
