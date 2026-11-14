"use client";

import type { Exercise } from "@/lib/game/types";
import type { ExerciseResult } from "@/lib/game/types";

import type { Evaluator } from "./exercise-types";
import { ChoiceView } from "./exercises/choice-view";
import { MatchView } from "./exercises/match-view";
import { OrderView } from "./exercises/order-view";
import { TypeView } from "./exercises/type-view";

interface ExerciseViewSwitchProps {
  exercise: Exercise;
  locked: boolean;
  result: ExerciseResult | null;
  onReady: (evaluator: Evaluator | null) => void;
  onComplete: (result: ExerciseResult) => void;
}

/** Renders the right interactive view for an exercise. */
export const ExerciseView = ({ exercise, locked, result, onReady, onComplete }: ExerciseViewSwitchProps) => {
  switch (exercise.kind) {
    case "choice":
      return <ChoiceView exercise={exercise} locked={locked} result={result} onReady={onReady} onComplete={onComplete} />;
    case "type":
      return <TypeView exercise={exercise} locked={locked} result={result} onReady={onReady} onComplete={onComplete} />;
    case "order":
      return <OrderView exercise={exercise} locked={locked} result={result} onReady={onReady} onComplete={onComplete} />;
    case "match":
      return <MatchView exercise={exercise} locked={locked} result={result} onReady={onReady} onComplete={onComplete} />;
  }
};

/** What to show as "the answer" when the learner skips or gets it wrong. */
export const solutionOf = (exercise: Exercise): string => {
  switch (exercise.kind) {
    case "choice":
      return exercise.answer;
    case "type":
      return exercise.accepted[0] ?? "";
    case "order":
      return exercise.solution.join(exercise.letters ? "" : " ");
    case "match":
      return "";
  }
};
