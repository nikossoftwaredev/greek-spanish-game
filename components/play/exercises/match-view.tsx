"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { MatchExercise } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";

import type { ExerciseViewProps } from "../exercise-types";
import { PromptHeader } from "./prompt-header";

type Side = "es" | "el";

interface Pick {
  side: Side;
  id: string;
}

const FLASH_MS = 550;

export const MatchView = ({ exercise, onComplete, onReady }: ExerciseViewProps<MatchExercise>) => {
  const [matched, setMatched] = useState<string[]>([]);
  const [selected, setSelected] = useState<Pick | null>(null);
  const [wrong, setWrong] = useState<Pick[]>([]);
  const [missed, setMissed] = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const byId = new Map(exercise.pairs.map((pair) => [pair.id, pair]));

  const handlePick = (pick: Pick) => {
    if (wrong.length > 0 || matched.includes(pick.id)) return;

    if (!selected || selected.side === pick.side) {
      setSelected(pick);
      return;
    }

    if (selected.id === pick.id) {
      setMatched((current) => [...current, pick.id]);
      setSelected(null);
      return;
    }

    setWrong([selected, pick]);
    setMissed((current) => [...new Set([...current, selected.id, pick.id])]);
    timerRef.current = setTimeout(() => {
      setWrong([]);
      setSelected(null);
    }, FLASH_MS);
  };

  useEffect(() => {
    onReady(null);
  }, [onReady]);

  useEffect(() => {
    if (matched.length > 0 && matched.length === exercise.pairs.length)
      onComplete?.({ correct: missed.length === 0, missedVocabIds: missed });
  }, [matched.length, exercise.pairs.length, missed, onComplete]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const cardClass = ({ side, id }: Pick): string => {
    if (matched.includes(id)) return "border-success bg-success-soft opacity-60";
    if (wrong.some((item) => item.side === side && item.id === id))
      return "border-destructive bg-danger-soft motion-safe:animate-shake";
    if (selected?.side === side && selected.id === id) return "border-sky bg-sky/12 shadow-[0_3px_0_0_var(--sky)]";
    return "border-border bg-card shadow-[0_3px_0_0_var(--border)] hover:bg-muted";
  };

  const renderCard = ({ side, id, text }: { side: Side; id: string; text: string }) => (
    <button
      key={`${side}-${id}`}
      type="button"
      disabled={matched.includes(id)}
      onClick={() => handlePick({ side, id })}
      className={cn(
        "flex min-h-16 w-full cursor-pointer items-center justify-between gap-2 rounded-2xl border-2 px-3 py-2 text-left transition-all enabled:active:translate-y-0.5",
        side === "es" ? "font-es text-lg leading-tight font-semibold" : "text-sm leading-snug font-bold",
        cardClass({ side, id }),
      )}
    >
      <span>{text}</span>
      {matched.includes(id) && <Check className="size-4 shrink-0 text-success" aria-hidden />}
    </button>
  );

  return (
    <div className="flex flex-1 flex-col gap-5">
      <PromptHeader source={exercise.source} instruction="Αντιστοίχισε κάθε λέξη με τη σημασία της" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-0">
        <div className="space-y-2.5">
          {exercise.pairs.map((pair) => renderCard({ side: "es", id: pair.id, text: pair.es }))}
        </div>
        <div className="space-y-2.5">
          {exercise.elOrder.map((id) => renderCard({ side: "el", id, text: byId.get(id)?.el ?? "" }))}
        </div>
      </div>
    </div>
  );
};
