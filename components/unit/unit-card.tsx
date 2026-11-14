"use client";

import { Lock } from "lucide-react";
import Link from "next/link";

import { useHydrated } from "@/hooks/use-hydrated";
import { onUnitColor, unitCounts } from "@/lib/content/selectors";
import { masteryForUnits } from "@/lib/game/mastery";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";
import type { Unit } from "@/types/content";

interface UnitCardProps {
  unit: Unit;
}

export const UnitCard = ({ unit }: UnitCardProps) => {
  const hydrated = useHydrated();
  const cards = useProgressStore((state) => state.cards);
  const classUnit = useProgressStore((state) => state.classUnit);

  const counts = unitCounts(unit);
  const mastery = masteryForUnits({ unitIds: [unit.id], cards: hydrated ? cards : {} });
  const ahead = hydrated && unit.id > classUnit;
  const isCurrent = hydrated && unit.id === classUnit;
  const on = onUnitColor(unit.color);

  return (
    <Link
      href={`/units/${unit.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border-2 border-border bg-card shadow-[0_4px_0_0_var(--border)] transition-all",
        "hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--border)] active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--border)]",
        ahead && "opacity-75",
      )}
    >
      <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-5" style={{ background: unit.color, color: on }}>
        <span className="font-es text-6xl leading-none font-bold" aria-hidden>
          {unit.id}
        </span>
        <div className="flex flex-col items-end gap-1 text-right">
          {isCurrent && (
            <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide uppercase" style={{ color: on }}>
              Εδώ είμαστε
            </span>
          )}
          {ahead && (
            <span className="flex items-center gap-1 rounded-full bg-black/15 px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide uppercase" style={{ color: on }}>
              <Lock className="size-3" aria-hidden /> Δεν φτάσαμε
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-es text-xl leading-tight font-bold">{unit.titleEs}</h3>
          <p className="text-sm text-muted-foreground">{unit.titleEl}</p>
        </div>

        <div className="mt-auto space-y-1.5">
          <div className="flex h-2 overflow-hidden rounded-full bg-muted" role="img" aria-label={`Γνωρίζεις το ${mastery.percent}% των λέξεων`}>
            <span className="bg-success transition-[width]" style={{ width: `${mastery.total ? (mastery.mastered / mastery.total) * 100 : 0}%` }} />
            <span className="bg-success/70" style={{ width: `${mastery.total ? (mastery.known / mastery.total) * 100 : 0}%` }} />
            <span className="bg-sun" style={{ width: `${mastery.total ? (mastery.learning / mastery.total) * 100 : 0}%` }} />
          </div>
          <p className="text-xs font-semibold text-muted-foreground">
            {counts.words} λέξεις · {counts.lessons} γραμματικά θέματα · {mastery.percent}% γνωστές
          </p>
        </div>
      </div>
    </Link>
  );
};
