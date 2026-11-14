"use client";

import { useCallback, useState } from "react";

import type { Evaluator } from "@/components/play/exercise-types";
import { ExerciseView, solutionOf } from "@/components/play/exercise-view";
import { SessionFooter } from "@/components/play/session-footer";
import { useEnterKey } from "@/components/play/use-enter-key";
import type { Exercise, ExerciseResult } from "@/lib/game/types";
import { useProgressStore } from "@/lib/stores/progress-store";

interface ExerciseStepProps {
  exercise: Exercise;
  /** Shown to the learner in the footer rotation, and the XP for a right answer. */
  position: number;
  xpCorrect: number;
  onNext: (outcome: { correct: boolean; xp: number }) => void;
}

/** One exercise inside the lesson player: the same views, auto-check and feedback as a play session. */
export const ExerciseStep = ({ exercise, position, xpCorrect, onNext }: ExerciseStepProps) => {
  const [evaluator, setEvaluator] = useState<Evaluator | null>(null);
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const checked = result !== null;

  const handleReady = useCallback((next: Evaluator | null) => {
    setEvaluator(() => next);
  }, []);

  const applyResult = (outcome: ExerciseResult) => {
    if (result) return;
    setResult(outcome);
    const store = useProgressStore.getState();
    if (exercise.drillKey) store.recordDrill({ key: exercise.drillKey, correct: outcome.correct });
    if (outcome.correct) store.addXp(xpCorrect);
  };

  const handleCheck = () => {
    if (evaluator) applyResult(evaluator());
  };

  const handleSkip = () => applyResult({ correct: false, solution: solutionOf(exercise) });

  const handleContinue = () => {
    if (result) onNext({ correct: result.correct, xp: result.correct ? xpCorrect : 0 });
  };

  useEnterKey({ enabled: true, checked, canCheck: evaluator !== null, onCheck: handleCheck, onContinue: handleContinue });

  return (
    <>
      <div className="flex flex-1 flex-col">
        <ExerciseView exercise={exercise} locked={checked} result={result} onReady={handleReady} onComplete={applyResult} />
      </div>
      <SessionFooter
        exercise={exercise}
        result={result}
        canCheck={evaluator !== null}
        isLast={false}
        position={position}
        onCheck={handleCheck}
        onSkip={handleSkip}
        onContinue={handleContinue}
      />
    </>
  );
};
