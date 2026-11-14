"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { Button } from "@/components/ui/button";
import { buildSession } from "@/lib/game/builders";
import type { Exercise, ExerciseResult, SessionConfig } from "@/lib/game/types";
import { finishExercise } from "@/lib/homework/finish-exercise";
import type { CardRating } from "@/lib/srs/fsrs";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useProgressStore } from "@/lib/stores/progress-store";

import type { Evaluator } from "./exercise-types";
import { ExerciseView, solutionOf } from "./exercise-view";
import { SessionFooter } from "./session-footer";
import { SessionSummary } from "./session-summary";
import { useEnterKey } from "./use-enter-key";

const XP_FIRST_TRY = 10;
const XP_RETRY = 5;
const XP_COMPLETE_BONUS = 10;

interface QueueItem {
  exercise: Exercise;
  /** A repeat of an exercise answered wrong earlier in the session. */
  retry: boolean;
}

interface SessionRunnerProps {
  config: SessionConfig;
  title: string;
  exitHref: string;
  exitLabel: string;
}

interface SessionRoundProps extends SessionRunnerProps {
  onAgain: () => void;
}

const startQueue = (config: SessionConfig): QueueItem[] => {
  const { cards, drillStats, verbStats, taughtLessons } = useProgressStore.getState();
  return buildSession({ config, learner: { cards, drillStats, verbStats, taughtLessons } }).map((exercise) => ({ exercise, retry: false }));
};

/** One round of a session. The parent remounts it (new `key`) to start a fresh round. */
const SessionRound = ({ config, title, exitHref, exitLabel, onAgain }: SessionRoundProps) => {
  const router = useRouter();
  const openDialog = useDialogStore((state) => state.openDialog);

  const [queue, setQueue] = useState<QueueItem[]>(() => startQueue(config));
  const [index, setIndex] = useState(0);
  const [evaluator, setEvaluator] = useState<Evaluator | null>(null);
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, xp: 0 });
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startedAt] = useState(() => Date.now());
  const ratedIds = useRef(new Set<string>());

  const current = queue[index];
  const total = queue.length;
  const isLast = index + 1 >= total;
  const checked = result !== null;
  const progress = ((index + (checked ? 1 : 0)) / total) * 100;

  const handleReady = useCallback((next: Evaluator | null) => {
    setEvaluator(() => next);
  }, []);

  const rateOnce = (id: string, rating: CardRating) => {
    if (ratedIds.current.has(id)) return;
    ratedIds.current.add(id);
    useProgressStore.getState().rateCard({ id, rating });
  };

  const record = ({ item, outcome }: { item: QueueItem; outcome: ExerciseResult }) => {
    const store = useProgressStore.getState();
    const { exercise, retry } = item;

    if (exercise.kind === "match") {
      exercise.pairs.forEach((pair) =>
        rateOnce(pair.id, outcome.missedVocabIds?.includes(pair.id) ? "again" : "good"),
      );
    } else if (exercise.vocabId) {
      let rating: CardRating = "again";
      if (outcome.correct) rating = outcome.accentSlip ? "hard" : "good";
      rateOnce(exercise.vocabId, rating);
    }

    if (exercise.drillKey && !retry) store.recordDrill({ key: exercise.drillKey, correct: outcome.correct });
    if (exercise.verbId && !retry) store.recordVerb({ verbId: exercise.verbId, correct: outcome.correct });

    let gained = 0;
    if (outcome.correct) gained = retry ? XP_RETRY : XP_FIRST_TRY;
    if (gained > 0) store.addXp(gained);
    setStats((previous) => ({
      correct: previous.correct + (outcome.correct ? 1 : 0),
      wrong: previous.wrong + (outcome.correct ? 0 : 1),
      xp: previous.xp + gained,
    }));

    if (!outcome.correct && !retry && exercise.kind !== "match")
      setQueue((previous) => [...previous, { exercise: { ...exercise, id: `${exercise.id}-retry` }, retry: true }]);
  };

  const applyResult = (outcome: ExerciseResult) => {
    if (!current || result) return;
    setResult(outcome);
    record({ item: current, outcome });
  };

  const handleCheck = () => {
    if (evaluator) applyResult(evaluator());
  };

  const handleSkip = () => {
    if (!current) return;
    applyResult({ correct: false, solution: solutionOf(current.exercise) });
  };

  const handleContinue = () => {
    if (!isLast) {
      setIndex((value) => value + 1);
      setResult(null);
      setEvaluator(null);
      return;
    }
    const store = useProgressStore.getState();
    const bonus = stats.wrong === 0 ? XP_COMPLETE_BONUS : 0;
    if (bonus > 0) {
      store.addXp(bonus);
      setStats((previous) => ({ ...previous, xp: previous.xp + bonus }));
    }
    store.finishSession();
    if (config.exercise) finishExercise({ exercise: config.exercise, homeworkId: config.homeworkId });
    setSeconds(Math.round((Date.now() - startedAt) / 1000));
    setFinished(true);
  };

  const handleExit = () => {
    openDialog(
      CONFIRM_DIALOG,
      { title: "Να σταματήσουμε εδώ;", description: "Η πρόοδος των απαντήσεων που έδωσες έχει ήδη αποθηκευτεί.", actionLabel: "Έξοδος" },
      () => router.push(exitHref),
    );
  };

  useEnterKey({ enabled: !finished && current !== undefined, checked, canCheck: evaluator !== null, onCheck: handleCheck, onContinue: handleContinue });

  if (finished)
    return (
      <SessionSummary
        title={title}
        xpGained={stats.xp}
        correct={stats.correct}
        wrong={stats.wrong}
        seconds={seconds}
        exitHref={exitHref}
        exitLabel={exitLabel}
        onAgain={onAgain}
      />
    );

  if (queue.length === 0)
    return (
      <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-5xl" aria-hidden>
          🤔
        </p>
        <h1 className="text-2xl font-extrabold">Δεν βρέθηκε υλικό</h1>
        <p className="text-muted-foreground">Σε αυτές τις ενότητες δεν υπάρχουν ασκήσεις για αυτό το παιχνίδι. Δοκίμασε άλλο είδος ή άλλη ενότητα.</p>
        <Button asChild variant="chunky" size="lg">
          <a href={exitHref}>{exitLabel}</a>
        </Button>
      </div>
    );

  return (
    <div className="flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 pt-4">
        <Button type="button" variant="ghost" size="icon" aria-label="Έξοδος" onClick={handleExit}>
          <X />
        </Button>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          className="h-4 flex-1 overflow-hidden rounded-full bg-muted"
        >
          <div className="h-full rounded-full bg-success transition-[width] duration-500 ease-out" style={{ width: `${Math.max(progress, 3)}%` }} />
        </div>
        <span className="min-w-12 text-right text-sm font-extrabold text-sun-edge tabular-nums">+{stats.xp}</span>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 pt-8 pb-72">
        <div key={current.exercise.id} className="flex flex-1 flex-col motion-safe:animate-rise">
          <ExerciseView exercise={current.exercise} locked={checked} result={result} onReady={handleReady} onComplete={applyResult} />
        </div>
      </main>

      <SessionFooter
          exercise={current.exercise}
          result={result}
          canCheck={evaluator !== null}
          isLast={isLast}
          position={index}
          onCheck={handleCheck}
          onSkip={handleSkip}
          onContinue={handleContinue}
      />
    </div>
  );
};

export const SessionRunner = (props: SessionRunnerProps) => {
  const [round, setRound] = useState(0);
  return <SessionRound key={round} {...props} onAgain={() => setRound((value) => value + 1)} />;
};
