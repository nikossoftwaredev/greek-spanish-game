"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useHydrated } from "@/hooks/use-hydrated";
import { useProgressStore } from "@/lib/stores/progress-store";

/** Starts the step-by-step lesson with Lola, or carries on from the step where the learner stopped. */
export const LearnLessonButton = ({ lessonKey, back }: { lessonKey: string; back: string }) => {
  const hydrated = useHydrated();
  const progress = useProgressStore((state) => state.lessonProgress[lessonKey]);
  const saved = hydrated ? progress : undefined;

  let label = "Μάθε το βήμα βήμα με τη Λόλα";
  if (saved && saved.step > 0) label = `Συνέχισε το μάθημα (βήμα ${saved.step + 1} από ${saved.total})`;
  else if (saved?.done) label = "Ξανά το μάθημα με τη Λόλα";

  return (
    <Button asChild variant="chunky" size="xl">
      <Link href={`/play/learn?lesson=${lessonKey}&back=${back}`}>
        <Sparkles /> {label}
      </Link>
    </Button>
  );
};
