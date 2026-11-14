import type { ExerciseResult } from "@/lib/game/types";

/** What an exercise gives the runner once the learner has entered an answer that can be checked. */
export type Evaluator = () => ExerciseResult;

export interface ExerciseViewProps<T> {
  exercise: T;
  /** The runner has checked the answer: lock the inputs and show the outcome. */
  locked: boolean;
  /** The outcome, once `locked`. */
  result: ExerciseResult | null;
  /** Reports whether the answer is complete (`evaluator`) or not yet (`null`). */
  onReady: (evaluator: Evaluator | null) => void;
  /** Exercises that check themselves (match) report their outcome directly. */
  onComplete?: (result: ExerciseResult) => void;
}
