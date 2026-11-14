"use client";

import { ClipboardCheck, Play } from "lucide-react";
import Link from "next/link";

import { SourceLink } from "@/components/pdf/source-link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";
import type { GuUnit } from "@/types/content";

interface GuExerciseListProps {
  unit: Pick<GuUnit, "number" | "page" | "exercisesEl">;
  /** How many interactive drills each numbered exercise has, in order. */
  drillCounts: number[];
}

/** The numbered exercises of the book for one unit ("50.1", "50.2"...): do each one here, or tick it. */
export const GuExerciseList = ({ unit, drillCounts }: GuExerciseListProps) => {
  const hydrated = useHydrated();
  const done = useProgressStore((state) => state.doneExercises);
  const toggleExercise = useProgressStore((state) => state.toggleExercise);
  const back = encodeURIComponent(`/gramatica/${unit.number}`);

  return (
    <section className="space-y-3" aria-label="Ασκήσεις του βιβλίου">
      <h2 className="flex flex-wrap items-center gap-2 text-lg font-extrabold">
        <ClipboardCheck className="size-5 text-primary" aria-hidden /> Οι ασκήσεις του βιβλίου
        <span className="text-xs font-bold text-muted-foreground">σελίδα PDF {unit.page + 1}</span>
        <SourceLink book="gu" page={unit.page + 1} label="Άνοιγμα στο βιβλίο" size="xs" />
      </h2>
      <p className="text-sm text-muted-foreground">
        Κάνε κάθε άσκηση εδώ, χωρίς γράψιμο: έχει το ίδιο είδος ερωτήσεων με το βιβλίο αλλά με νέες προτάσεις, και τικάρεται μόνη της όταν την τελειώσεις. Μπορείς και να τικάρεις χειροκίνητα όσες έκανες στο βιβλίο.
      </p>
      <ul className="space-y-2">
        {unit.exercisesEl.map((description, index) => {
          const key = `${unit.number}.${index + 1}`;
          const checked = hydrated && done.includes(key);
          const count = drillCounts[index] ?? 0;
          return (
            <li
              key={key}
              className={cn(
                "flex flex-col gap-3 rounded-2xl border-2 px-3 py-2.5 transition-colors sm:flex-row sm:items-center",
                checked ? "border-success bg-success-soft" : "border-border bg-card",
              )}
            >
              <label className="flex min-w-0 flex-1 cursor-pointer items-start gap-3">
                <Checkbox checked={checked} onCheckedChange={() => toggleExercise(key)} className="mt-0.5 size-5 rounded-md border-2 border-edge" aria-label={`Έκανα την άσκηση ${key}`} />
                <span className="font-es text-lg font-bold tabular-nums">{key}</span>
                <span className="text-sm leading-snug">{description}</span>
              </label>
              {count > 0 && (
                <Button asChild variant={checked ? "chunky-outline" : "chunky"} size="sm" className="shrink-0 self-start sm:self-auto">
                  <Link href={`/play/grammar?ex=${key}&back=${back}`}>
                    <Play /> {checked ? "Ξανά" : "Κάν' την εδώ"} ({count})
                  </Link>
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
