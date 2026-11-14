"use client";

import { ArrowRight, Check, SkipForward, X } from "lucide-react";

import { LolaFooterStage } from "@/components/mascot/lola-companion";
import { SpeechBubble } from "@/components/mascot/speech-bubble";
import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import type { Exercise, ExerciseResult } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";
import { lolaReaction } from "@/lib/mascot/lines";
import { useSettingsStore } from "@/lib/stores/settings-store";

const PRAISE = ["Μπράβο!", "Σωστά!", "Τέλεια!", "Εξαιρετικά!", "Ακριβώς!"];

interface SessionFooterProps {
  exercise: Exercise;
  result: ExerciseResult | null;
  canCheck: boolean;
  isLast: boolean;
  /** Changes with every exercise so the praise rotates. */
  position: number;
  onCheck: () => void;
  onSkip: () => void;
  onContinue: () => void;
}

export const SessionFooter = ({
  exercise,
  result,
  canCheck,
  isLast,
  position,
  onCheck,
  onSkip,
  onContinue,
}: SessionFooterProps) => {
  const mascot = useSettingsStore((state) => state.mascot);
  const checked = result !== null;
  /** Choice and match exercises check themselves; typing and ordering keep the button for wrong answers. */
  const hasCheck = exercise.kind === "type" || exercise.kind === "order";
  const canSkip = exercise.kind !== "match";
  const showSolution = checked && !result.correct && result.solution;
  const example = "example" in exercise ? exercise.example : undefined;
  const reaction = lolaReaction({ correct: result?.correct ?? false, position });
  const plainTitle = result?.correct ? PRAISE[position % PRAISE.length] : "Όχι ακριβώς";

  /** The right answer and the helpful extras, shown inside Lola's bubble or, without her, on their own. */
  const details = result && (
    <>
      {showSolution && (
        <p className="text-sm">
          Σωστή απάντηση: <TappableText text={result.solution ?? ""} className="font-es text-lg font-bold" />
        </p>
      )}
      {!result.correct && example && (
        <p className="text-sm opacity-85">
          Παράδειγμα: <TappableText text={example.es} context={example} className="font-es text-base" /> ({example.el})
        </p>
      )}
      {exercise.kind === "match" && !result.correct && <p className="text-sm opacity-85">Έκανες μερικά λάθη στο ταίριασμα, θα τα ξαναδείς.</p>}
    </>
  );

  return (
    <footer
      className={cn(
        "safe-bottom fixed inset-x-0 bottom-0 z-30 border-t-2 transition-colors",
        !checked && "border-border bg-background",
        checked && result.correct && "border-success/40 bg-success-soft",
        checked && !result.correct && "border-destructive/40 bg-danger-soft",
      )}
    >
      <LolaFooterStage mood={checked ? reaction.mood : "teaching"} animateKey={`${position}-${checked}`} className="flex flex-col gap-3">
        {checked && mascot && (
          <SpeechBubble tone={result.correct ? "cheer" : "loud"} tail="left-low" className="space-y-1">
            <p role="status" className="font-es text-xl leading-tight font-bold italic">
              {reaction.es}
              <span className="sr-only">{result.correct ? " Σωστά." : " Λάθος."}</span>
            </p>
            <p className="text-sm leading-snug font-bold">{reaction.el}</p>
            {details}
          </SpeechBubble>
        )}

        {checked && !mascot && (
          <div className="flex items-start gap-3 motion-safe:animate-rise" role="status">
            <span
              className={cn(
                "mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-white",
                result.correct ? "bg-success" : "bg-destructive",
              )}
            >
              {result.correct ? <Check className="size-5" aria-hidden /> : <X className="size-5" aria-hidden />}
            </span>
            <div className="min-w-0 space-y-0.5">
              <p className={cn("text-lg font-extrabold", result.correct ? "text-success" : "text-destructive")}>{plainTitle}</p>
              {details}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          {!checked && canSkip && (
            <Button type="button" variant="ghost" onClick={onSkip} icon={<SkipForward />}>
              Δεν ξέρω
            </Button>
          )}
          {!checked && exercise.kind === "match" && <span className="text-sm text-muted-foreground">Βρες όλα τα ζευγάρια</span>}
          {!checked && exercise.kind === "choice" && <span className="text-sm text-muted-foreground">Διάλεξε μια απάντηση</span>}
          {checked && <span />}
          {!checked && hasCheck && (
            <Button type="button" variant="chunky" size="xl" disabled={!canCheck} onClick={onCheck}>
              Έλεγχος
            </Button>
          )}
          {checked && (
            <Button
              type="button"
              variant={result.correct ? "success" : "danger"}
              size="xl"
              onClick={onContinue}
              className="min-w-40"
            >
              {isLast ? "Τέλος" : "Συνέχεια"} <ArrowRight />
            </Button>
          )}
        </div>
      </LolaFooterStage>
    </footer>
  );
};
