"use client";

import { ArrowRight, RotateCcw, Star, Trophy, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { PlayFooter, PlayShell } from "@/components/play/play-shell";
import { Button } from "@/components/ui/button";
import { lessonByKey } from "@/lib/content/selectors";
import { roundAccuracy } from "@/lib/game/accuracy";
import { buildLessonSteps, type LessonStep } from "@/lib/game/lesson-steps";
import { lolaNudge, lolaVerdict } from "@/lib/mascot/lines";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useLolaStore } from "@/lib/stores/lola-store";
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
  const say = useLolaStore((state) => state.say);
  const clearLine = useLolaStore((state) => state.clear);
  const entry = lessonByKey(lessonKey);

  const [steps] = useState<LessonStep[]>(() => startSteps(lessonKey));
  const quizStart = steps.findIndex((candidate) => candidate.kind === "quiz");
  /** The step this lesson was left at last time (never past the start of the quiz), 0 when it starts fresh. */
  const [resumeFrom] = useState(() => {
    const saved = useProgressStore.getState().lessonProgress[lessonKey];
    return saved && saved.step > 0 ? Math.min(saved.step, quizStart === -1 ? saved.step : quizStart) : 0;
  });
  const [wasDone] = useState(() => useProgressStore.getState().lessonProgress[lessonKey]?.done === true);
  const [index, setIndex] = useState(resumeFrom);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, xp: 0 });

  const step = steps[index];
  const isExercise = step?.kind === "check" || step?.kind === "quiz";
  const progress = steps.length > 1 ? (index / (steps.length - 1)) * 100 : 0;
  const accuracy = roundAccuracy(stats);

  const goNext = (gained: { correct?: boolean; xp: number }) => {
    const nextIndex = index + 1;
    let xp = gained.xp;
    const store = useProgressStore.getState();
    const lessonSteps = steps.length - 1;
    if (steps[nextIndex]?.kind === "done") {
      store.addXp(XP_FINISH);
      store.finishSession();
      store.completeLesson({ key: lessonKey, total: lessonSteps });
      xp += XP_FINISH;
    } else store.setLessonStep({ key: lessonKey, step: quizStart === -1 ? nextIndex : Math.min(nextIndex, quizStart), total: lessonSteps });
    setStats((previous) => ({
      correct: previous.correct + (gained.correct === true ? 1 : 0),
      wrong: previous.wrong + (gained.correct === false ? 1 : 0),
      xp: previous.xp + xp,
    }));
    setIndex(nextIndex);
  };

  const handleRestart = () => {
    useProgressStore.getState().setLessonStep({ key: lessonKey, step: 0, total: steps.length - 1 });
    setIndex(0);
  };

  const handleExit = () => {
    openDialog(
      CONFIRM_DIALOG,
      { title: "Να σταματήσουμε εδώ;", description: "Μπορείς να ξαναρχίσεις το μάθημα όποτε θες.", actionLabel: "Έξοδος" },
      () => router.push(exitHref),
    );
  };

  // what Lola says at each step, in her speech bubble
  useEffect(() => {
    if (!step || !mascot) return;
    if (step.kind === "intro") say({ es: "¡Hola, mi amor!", el: "Πάμε να το μάθουμε μαζί. Πάτα πάνω μου όποτε θες να ρωτήσεις κάτι.", mood: "wink" }, { speak: false });
    else if (step.kind === "rule") say({ es: "", el: lolaNudge(step.ruleIndex), mood: "teaching" }, { speak: false });
    else if (step.kind === "table") say({ es: "", el: "Πάτα τις λέξεις του πίνακα για να δεις τι σημαίνουν. Δες καλά ποιες μορφές αλλάζουν.", mood: "teaching" }, { speak: false });
    else if (step.kind === "tips") say({ es: "", el: "Αυτά είναι τα λάθη που κάνουν όλοι. Εσύ όχι πια.", mood: "wink" }, { speak: false });
    else if (step.kind === "done") say(lolaVerdict(accuracy));
    else clearLine();
  }, [step, mascot, accuracy, say, clearLine]);

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

  const verdict = lolaVerdict(accuracy);
  let notice: React.ReactNode = null;
  if (resumeFrom > 0 && index === resumeFrom)
    notice = (
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-primary/40 bg-primary/10 px-4 py-3 text-sm font-bold">
        <span>Συνεχίζεις από εκεί που σταμάτησες (βήμα {resumeFrom + 1} από {steps.length - 1}).</span>
        <Button type="button" variant="chunky-outline" size="sm" onClick={handleRestart} icon={<RotateCcw />}>
          Από την αρχή
        </Button>
      </div>
    );
  else if (wasDone && index === 0)
    notice = (
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-success/50 bg-success-soft px-4 py-3 text-sm font-bold">
        <span>Έχεις ήδη τελειώσει αυτό το μάθημα.</span>
        {quizStart !== -1 && (
          <Button type="button" variant="chunky-outline" size="sm" onClick={() => setIndex(quizStart)}>
            Μόνο το τεστ
          </Button>
        )}
      </div>
    );

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
            <span className="grid size-24 place-items-center rounded-full bg-sun shadow-[0_5px_0_0_var(--sun-edge)] motion-safe:animate-pop">
              <Trophy className="size-12" aria-hidden />
            </span>
            <h1 className="font-es text-4xl font-bold italic">{mascot ? verdict.es : "¡Muy bien!"}</h1>
            <p className="text-muted-foreground">Τελείωσες το μάθημα «{entry.lesson.titleEl}».</p>
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
    <PlayShell
      header={
        <>
          <Button type="button" variant="ghost" size="icon" aria-label="Έξοδος" onClick={handleExit}>
            <X />
          </Button>
          <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} className="h-4 flex-1 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-success transition-[width] duration-500 ease-out" style={{ width: `${Math.max(progress, 3)}%` }} />
          </div>
          <span className="min-w-12 text-right text-sm font-extrabold text-sun-edge tabular-nums">+{stats.xp}</span>
        </>
      }
    >
      <div key={index} className="flex flex-1 flex-col motion-safe:animate-rise">
        {notice}
        {renderStep()}
      </div>

      {!isExercise && step.kind !== "done" && (
        <PlayFooter>
          <footer className="safe-bottom relative z-30 shrink-0 border-t-2 border-border bg-background">
            <div className="mx-auto flex w-full max-w-2xl justify-end px-4 py-4">
              <Button type="button" variant="chunky" size="xl" className="min-w-44" onClick={() => goNext({ xp: 0 })}>
                {step.kind === "intro" ? "Ξεκίνα" : "Κατάλαβα"} <ArrowRight />
              </Button>
            </div>
          </footer>
        </PlayFooter>
      )}
    </PlayShell>
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
