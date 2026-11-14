"use client";

import { BookOpen, Dumbbell } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GU_UNITS } from "@/content/gramatica";
import { GU_GROUPS } from "@/content/gramatica-de-uso";
import { useHydrated } from "@/hooks/use-hydrated";
import { guKey } from "@/lib/content/selectors";
import { accuracyOf, accuracyTone } from "@/lib/game/accuracy";
import { stripAccents, stripGreekAccents } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";
import type { GuUnit } from "@/types/content";

const matches = ({ unit, query }: { unit: GuUnit; query: string }): boolean => {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  if (/^\d+$/.test(needle)) return String(unit.number) === needle;
  return stripAccents(unit.titleEs.toLowerCase()).includes(stripAccents(needle)) || stripGreekAccents(unit.titleEl).includes(stripGreekAccents(needle));
};

interface GuUnitListProps {
  query?: string;
}

/** The 107 units of the Gramática de uso, in the book's six parts, each with its "done in class" tick. */
export const GuUnitList = ({ query = "" }: GuUnitListProps) => {
  const hydrated = useHydrated();
  const taught = useProgressStore((state) => state.taughtLessons);
  const toggleTaught = useProgressStore((state) => state.toggleTaught);
  const drillStats = useProgressStore((state) => state.drillStats);

  const groups = GU_GROUPS.map((group) => ({
    ...group,
    units: GU_UNITS.filter((unit) => unit.number >= group.from && unit.number <= group.to && matches({ unit, query })),
  })).filter((group) => group.units.length > 0);

  if (groups.length === 0) return <p className="py-10 text-center text-muted-foreground">Δεν βρέθηκε καμία ενότητα.</p>;

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <section key={group.label} className="overflow-hidden rounded-3xl border-2 border-border bg-card shadow-[0_4px_0_0_var(--border)]">
          <h2 className="flex items-center justify-between bg-accent px-4 py-2.5 font-es text-xl font-bold">
            {group.label}
            <span className="text-xs font-bold text-muted-foreground">{group.units.length} ενότητες</span>
          </h2>
          <ul className="divide-y-2 divide-border">
            {group.units.map((unit) => {
              const key = guKey(unit.number);
              const checked = hydrated && taught.includes(key);
              const accuracy = hydrated ? accuracyOf({ stats: drillStats, lessonKey: key }) : null;
              return (
                <li key={unit.number} className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 transition-colors", checked && "bg-success-soft/50")}>
                  <label className="flex min-w-0 basis-full cursor-pointer items-start gap-3 sm:flex-1 sm:basis-0">
                    <Checkbox checked={checked} onCheckedChange={() => toggleTaught(key)} className="mt-1.5 size-6 rounded-lg border-2 border-edge" aria-label={`Το κάναμε: ενότητα ${unit.number}`} />
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/12 font-es text-lg font-bold text-primary tabular-nums">{unit.number}</span>
                    <span className="min-w-0">
                      <span className="block font-es text-lg leading-snug font-bold">{unit.titleEs}</span>
                      <span className="block text-sm text-muted-foreground">{unit.titleEl}</span>
                      <span className="mt-0.5 flex flex-wrap gap-x-3 text-xs font-bold text-muted-foreground">
                        <span>{unit.exercisesEl.length} ασκήσεις βιβλίου</span>
                        <span>{unit.drills.length} εδώ</span>
                        {accuracy !== null && <span className={accuracyTone(accuracy)}>{accuracy}% σωστές</span>}
                      </span>
                    </span>
                  </label>
                  <span className="flex gap-1.5">
                    <Button asChild variant="chunky-outline" size="sm">
                      <Link href={`/gramatica/${unit.number}`}>
                        <BookOpen /> Διάβασε
                      </Link>
                    </Button>
                    <Button asChild variant="chunky" size="sm">
                      <Link href={`/play/grammar?lesson=${key}&back=%2Fgramatica`}>
                        <Dumbbell /> Εξάσκηση
                      </Link>
                    </Button>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};
