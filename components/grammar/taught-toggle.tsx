"use client";

import { Check } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";

/** "We have done this in class": ticks a grammar topic of either book in the shared checklist. */
export const TaughtToggle = ({ lessonKey }: { lessonKey: string }) => {
  const hydrated = useHydrated();
  const taught = useProgressStore((state) => state.taughtLessons.includes(lessonKey));
  const toggleTaught = useProgressStore((state) => state.toggleTaught);
  const checked = hydrated && taught;

  return (
    <label
      className={cn(
        "mt-3 inline-flex cursor-pointer items-center gap-2.5 rounded-2xl border-2 px-4 py-2 text-sm font-bold transition-colors",
        checked ? "border-success bg-success-soft" : "border-border bg-card hover:bg-muted",
      )}
    >
      <Checkbox checked={checked} onCheckedChange={() => toggleTaught(lessonKey)} className="size-5 rounded-md border-2 border-edge" />
      {checked && <Check className="size-4 text-success" aria-hidden />}
      {checked ? "Το έχουμε κάνει στην τάξη" : "Το κάναμε στην τάξη;"}
    </label>
  );
};
