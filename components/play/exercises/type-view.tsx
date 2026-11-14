"use client";

import { useEffect, useRef, useState } from "react";

import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { matchAnswer } from "@/lib/game/text";
import type { TypeExercise } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";

import type { ExerciseViewProps } from "../exercise-types";
import { PromptHeader } from "./prompt-header";

const SPECIAL_CHARS = ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"];

export const TypeView = ({ exercise, locked, result, onReady, onComplete }: ExerciseViewProps<TypeExercise>) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const completeRef = useRef(onComplete);

  const report = (typed: string) => {
    if (!typed.trim()) {
      onReady(null);
      return;
    }
    onReady(() => {
      const outcome = matchAnswer({ typed, accepted: exercise.accepted });
      return { correct: outcome !== "wrong", accentSlip: outcome === "accent", solution: exercise.accepted[0] };
    });
  };

  const handleChange = (next: string) => {
    if (locked) return;
    setValue(next);
    report(next);
  };

  const insertChar = (char: string) => {
    const input = inputRef.current;
    if (!input || locked) return;
    const start = input.selectionStart ?? value.length;
    const end = input.selectionEnd ?? value.length;
    const next = `${value.slice(0, start)}${char}${value.slice(end)}`;
    handleChange(next);
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + 1, start + 1);
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    completeRef.current = onComplete;
  });

  // An exactly right answer is checked on its own, a moment after the last key, so the learner can
  // still keep typing. A wrong or accent-less answer waits for "Έλεγχος" or Enter.
  useEffect(() => {
    if (locked || !value.trim()) return;
    if (matchAnswer({ typed: value, accepted: exercise.accepted }) !== "exact") return;
    const timer = setTimeout(() => completeRef.current?.({ correct: true, solution: exercise.accepted[0] }), 450);
    return () => clearTimeout(timer);
  }, [value, locked, exercise.accepted]);

  const stateClass = (): string => {
    if (!locked || !result) return "border-border focus-within:border-sky focus-within:shadow-[0_3px_0_0_var(--sky)]";
    if (result.correct) return "border-success bg-success-soft";
    return "border-destructive bg-danger-soft motion-safe:animate-shake";
  };

  let promptNode: React.ReactNode = null;
  if (exercise.promptText && exercise.promptLang === "es")
    promptNode = <TappableText text={exercise.promptText} className="font-es text-3xl font-semibold" />;
  else if (exercise.promptText)
    promptNode = <span className="text-2xl leading-snug font-extrabold sm:text-3xl">{exercise.promptText}</span>;

  const field = (
    <input
      ref={inputRef}
      value={value}
      disabled={locked}
      onChange={(event) => handleChange(event.target.value)}
      lang="es"
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      spellCheck={false}
      aria-label="Η απάντησή σου"
      placeholder={exercise.gap ? "…" : "Γράψε στα ισπανικά"}
      size={exercise.gap ? Math.max(6, Math.min(16, (exercise.accepted[0]?.length ?? 6) + 2)) : undefined}
      className={cn(
        "min-w-0 bg-transparent px-1 font-es text-2xl font-semibold outline-none placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:text-muted-foreground/70",
        !exercise.gap && "w-full",
      )}
    />
  );

  return (
    <div className="flex flex-1 flex-col gap-6">
      <PromptHeader
        instruction={exercise.instructionEl}
        hint={exercise.promptHintEl}
        prompt={promptNode}
      />

      {exercise.gap ? (
        <p className="flex flex-wrap items-center gap-x-1 gap-y-2 font-es text-2xl leading-relaxed font-semibold sm:text-3xl">
          {exercise.gap.before && <span>{exercise.gap.before}</span>}
          <span className={cn("inline-flex rounded-xl border-2 px-2 py-0.5 shadow-[0_3px_0_0_var(--border)] transition-all", stateClass())}>
            {field}
          </span>
          {exercise.gap.after && <span>{exercise.gap.after}</span>}
        </p>
      ) : (
        <div className={cn("flex rounded-2xl border-2 px-3 py-3 shadow-[0_3px_0_0_var(--border)] transition-all", stateClass())}>{field}</div>
      )}

      <div className="flex flex-wrap gap-1.5" aria-label="Ειδικοί χαρακτήρες">
        {SPECIAL_CHARS.map((char) => (
          <Button
            key={char}
            type="button"
            variant="chunky-outline"
            size="icon"
            disabled={locked}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => insertChar(char)}
            className="font-es text-lg"
          >
            {char}
          </Button>
        ))}
      </div>

      {locked && result?.accentSlip && (
        <p className="rounded-xl bg-sun/25 px-3 py-2 text-sm font-bold">
          Σωστά! Πρόσεξε όμως τους τόνους και το ñ: <span className="font-es text-lg">{result.solution}</span>
        </p>
      )}
      {locked && result && !result.correct && exercise.explainEl && (
        <p className="rounded-xl bg-muted px-3 py-2 text-sm">{exercise.explainEl}</p>
      )}
    </div>
  );
};
