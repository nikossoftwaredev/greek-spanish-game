"use client";

import { Undo2 } from "lucide-react";
import { useState } from "react";

import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { normalize } from "@/lib/game/text";
import type { OrderExercise } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";

import type { ExerciseViewProps } from "../exercise-types";
import { PromptHeader } from "./prompt-header";

export const OrderView = ({ exercise, locked, result, onReady, onComplete }: ExerciseViewProps<OrderExercise>) => {
  /** Indexes into `exercise.tiles`, in the order the learner placed them. */
  const [picked, setPicked] = useState<number[]>([]);

  const orders = [exercise.solution, ...(exercise.alternatives ?? [])];
  const longest = Math.max(...orders.map((order) => order.length));

  const builtText = (next: number[]): string => normalize(next.map((index) => exercise.tiles[index]).join(" "));

  const evaluate = (next: number[]) => {
    const built = builtText(next);
    const correct = orders.some((order) => normalize(order.join(" ")) === built);
    return { correct, solution: exercise.solution.join(" ") };
  };

  /** A sentence is finished when it equals an accepted order, or when it is as long as the longest one. */
  const isFinished = (next: number[]): boolean => next.length >= longest || orders.some((order) => normalize(order.join(" ")) === builtText(next));

  const update = (next: number[]) => {
    const adding = next.length > picked.length;
    setPicked(next);
    if (next.length === 0) {
      onReady(null);
      return;
    }
    // Placing the last word of a complete sentence checks it, with no extra button.
    if (adding && isFinished(next)) {
      onComplete?.(evaluate(next));
      return;
    }
    onReady(() => evaluate(next));
  };

  const handlePick = (index: number) => {
    if (locked || picked.includes(index)) return;
    update([...picked, index]);
  };

  const handleRemove = (index: number) => {
    if (locked) return;
    update(picked.filter((value) => value !== index));
  };

  const answerState = (): string => {
    if (!locked || !result) return "border-border";
    if (result.correct) return "border-success bg-success-soft";
    return "border-destructive bg-danger-soft motion-safe:animate-shake";
  };

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PromptHeader
        source={exercise.source}
        instruction="Φτιάξε την πρόταση στα ισπανικά"
        prompt={<span className="text-2xl leading-snug font-extrabold sm:text-3xl">{exercise.promptEl}</span>}
      />

      <div
        aria-label="Η πρότασή σου"
        className={cn(
          "flex min-h-20 flex-wrap content-start items-center gap-2 rounded-2xl border-2 bg-card p-3 shadow-[0_3px_0_0_var(--border)] transition-colors",
          answerState(),
        )}
      >
        {picked.length === 0 && <span className="px-1 text-sm text-muted-foreground">Πάτησε τις λέξεις με τη σειρά</span>}
        {picked.map((tileIndex) => (
          <button
            key={tileIndex}
            type="button"
            disabled={locked}
            onClick={() => handleRemove(tileIndex)}
            className="cursor-pointer rounded-xl border-2 border-border bg-background px-3 py-1.5 font-es text-xl font-semibold shadow-[0_3px_0_0_var(--border)] transition-all enabled:hover:bg-muted enabled:active:translate-y-0.5 motion-safe:animate-pop"
          >
            {exercise.tiles[tileIndex]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2" aria-label="Διαθέσιμες λέξεις">
        {exercise.tiles.map((tile, index) => {
          const used = picked.includes(index);
          return (
            <button
              key={index}
              type="button"
              disabled={locked || used}
              onClick={() => handlePick(index)}
              className={cn(
                "rounded-xl border-2 px-3 py-1.5 font-es text-xl font-semibold transition-all",
                used
                  ? "border-transparent bg-muted text-transparent shadow-none select-none"
                  : "cursor-pointer border-border bg-card shadow-[0_3px_0_0_var(--border)] hover:bg-muted active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--border)]",
              )}
            >
              {tile}
            </button>
          );
        })}
      </div>

      {!locked && picked.length > 0 && (
        <Button type="button" variant="ghost" size="sm" className="self-center" onClick={() => update([])} icon={<Undo2 />}>
          Ξεκίνα από την αρχή
        </Button>
      )}

      {locked && result && !result.correct && (
        <div className="space-y-1 rounded-xl bg-muted px-3 py-2 text-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase">Σωστή πρόταση</p>
          <TappableText text={exercise.solution.join(" ")} className="font-es text-xl font-semibold" />
          {exercise.explainEl && <p>{exercise.explainEl}</p>}
        </div>
      )}
    </div>
  );
};
