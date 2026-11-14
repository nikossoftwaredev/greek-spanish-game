"use client";

import { useEffect, useState } from "react";

import { TappableText } from "@/components/tappable-text";
import type { ChoiceExercise } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";

import type { ExerciseViewProps } from "../exercise-types";
import { PromptHeader } from "./prompt-header";

export const ChoiceView = ({ exercise, locked, result, onComplete }: ExerciseViewProps<ChoiceExercise>) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (locked) return;
    setSelected(option);
    onComplete?.({ correct: option === exercise.answer, solution: exercise.answer });
  };

  useEffect(() => {
    if (locked) return;
    const onKey = (event: KeyboardEvent) => {
      const option = exercise.options[Number(event.key) - 1];
      if (!option) return;
      setSelected(option);
      onComplete?.({ correct: option === exercise.answer, solution: exercise.answer });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locked, exercise.options, exercise.answer, onComplete]);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PromptHeader
        source={exercise.source}
        instruction={exercise.instructionEl}
        hint={exercise.promptHintEl}
        prompt={
          exercise.promptText && exercise.promptLang === "es" ? (
            <TappableText text={exercise.promptText} className="font-es text-3xl leading-snug font-semibold sm:text-4xl" />
          ) : (
            <span className="text-2xl leading-snug font-extrabold sm:text-3xl">{exercise.promptText}</span>
          )
        }
      />

      <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Επιλογές">
        {exercise.options.map((option, index) => {
          const isSelected = selected === option;
          const isAnswer = option === exercise.answer;
          const showCorrect = locked && isAnswer;
          const showWrong = locked && isSelected && !isAnswer;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={locked}
              onClick={() => handleSelect(option)}
              className={cn(
                "flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-bold shadow-[0_3px_0_0_var(--border)] transition-all",
                "enabled:cursor-pointer enabled:hover:bg-muted enabled:active:translate-y-0.5 enabled:active:shadow-[0_1px_0_0_var(--border)]",
                exercise.optionsLang === "es" ? "font-es text-xl font-semibold" : "text-base",
                !locked && isSelected && "border-sky bg-sky/12 shadow-[0_3px_0_0_var(--sky)]",
                !locked && !isSelected && "border-border bg-card",
                showCorrect && "border-success bg-success-soft text-foreground shadow-[0_3px_0_0_var(--success)] motion-safe:animate-pop",
                showWrong && "border-destructive bg-danger-soft shadow-[0_3px_0_0_var(--destructive)] motion-safe:animate-shake",
                locked && !showCorrect && !showWrong && "border-border bg-card opacity-55",
              )}
            >
              <span
                aria-hidden
                className="hidden size-7 shrink-0 place-items-center rounded-lg border-2 border-border text-xs font-extrabold text-muted-foreground sm:grid"
              >
                {index + 1}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
      {locked && result && !result.correct && exercise.explainEl && (
        <p className="rounded-xl bg-muted px-3 py-2 text-sm">{exercise.explainEl}</p>
      )}
    </div>
  );
};
