"use client";

import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useHydrated } from "@/hooks/use-hydrated";
import { lessonByKey } from "@/lib/content/selectors";
import { chapterLessonKeys, nextStepForUnit } from "@/lib/game/progress";
import { useProgressStore } from "@/lib/stores/progress-store";

/** The two big buttons of a chapter: carry on where the learner is, and learn the grammar step by step. */
export const UnitActions = ({ unitId }: { unitId: number }) => {
  const hydrated = useHydrated();
  const cards = useProgressStore((state) => state.cards);
  const wordResults = useProgressStore((state) => state.wordResults);
  const drillStats = useProgressStore((state) => state.drillStats);
  const lessonProgress = useProgressStore((state) => state.lessonProgress);
  if (!hydrated) return <Skeleton className="h-24 rounded-3xl" />;

  const back = encodeURIComponent(`/units/${unitId}`);
  const next = nextStepForUnit({ unitId, progress: { cards, wordResults, drillStats, lessonProgress }, back });

  // the first grammar topic of the chapter that is not finished, else the first one
  const lessonKeys = chapterLessonKeys(unitId);
  const lessonKey = lessonKeys.find((key) => !lessonProgress[key]?.done) ?? lessonKeys[0];
  const lesson = lessonKey ? lessonByKey(lessonKey) : undefined;
  const started = lessonKey ? (lessonProgress[lessonKey]?.step ?? 0) > 0 : false;

  return (
    <div className="space-y-2.5">
      <Button asChild variant="chunky" size="xl" className="h-auto w-full flex-col items-start gap-0.5 py-3.5">
        <Link href={next.href}>
          <span className="flex items-center gap-2 text-lg">
            Συνέχισε: {next.title} <ArrowRight />
          </span>
          <span className="text-xs font-semibold opacity-90">{next.detail}</span>
        </Link>
      </Button>
      {lesson && lessonKey && (
        <Button asChild variant="chunky-outline" size="lg" className="h-auto w-full justify-start py-3">
          <Link href={`/play/learn?lesson=${lessonKey}&back=${back}`}>
            <GraduationCap /> {started ? "Συνέχισε το μάθημα" : "Μάθε βήμα βήμα"}: {lesson.lesson.titleEl}
          </Link>
        </Button>
      )}
    </div>
  );
};
