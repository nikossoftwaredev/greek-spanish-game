"use client";

import { useHydrated } from "@/hooks/use-hydrated";
import { chapterLessonKeys, grammarProgress, type LearnerProgress, vocabProgress } from "@/lib/game/progress";
import { useProgressStore } from "@/lib/stores/progress-store";

/** What `useProgressStore` holds that the progress calculations read, empty until the browser data is loaded. */
const useLearnerProgress = (): LearnerProgress => {
  const hydrated = useHydrated();
  const cards = useProgressStore((state) => state.cards);
  const wordResults = useProgressStore((state) => state.wordResults);
  const drillStats = useProgressStore((state) => state.drillStats);
  const lessonProgress = useProgressStore((state) => state.lessonProgress);
  if (!hydrated) return { cards: {}, wordResults: {}, drillStats: {}, lessonProgress: {} };
  return { cards, wordResults, drillStats, lessonProgress };
};

/** Stays under the app header while the page scrolls, so the learner always sees how far they are. */
const STICKY = "sticky top-14 z-30 -mx-4 border-b-2 border-border bg-background/95 px-4 py-2.5 backdrop-blur-md";

const Meter = ({ label, percent, detail }: { label: string; percent: number; detail: string }) => (
  <div className="min-w-0 flex-1 space-y-1" title={detail}>
    <div className="flex items-baseline justify-between gap-2 text-xs font-extrabold">
      <span className="truncate">{label}</span>
      <span className="tabular-nums">{percent}%</span>
    </div>
    <div role="progressbar" aria-label={label} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} className="h-2.5 overflow-hidden rounded-full bg-muted">
      <div className="h-full rounded-full bg-success transition-[width] duration-500" style={{ width: `${Math.max(percent, 2)}%` }} />
    </div>
  </div>
);

/** The chapter's progress, fixed at the top of the chapter page: how much of the words and the grammar is known. */
export const UnitProgressBar = ({ unitId }: { unitId: number }) => {
  const progress = useLearnerProgress();
  const vocab = vocabProgress({ unitIds: [unitId], progress });
  const grammar = grammarProgress({ lessonKeys: chapterLessonKeys(unitId), progress });

  return (
    <div className={STICKY}>
      <div className="mx-auto flex max-w-5xl items-center gap-4">
        <span className="hidden shrink-0 text-sm font-extrabold sm:block">Κεφάλαιο {unitId}</span>
        <Meter label="Λεξιλόγιο" percent={vocab.percent} detail={`Ξέρεις ${vocab.done} από ${vocab.total} λέξεις`} />
        <Meter label="Γραμματική" percent={grammar.percent} detail={`Έχεις απαντήσει σωστά ${grammar.done} από ${grammar.total} ασκήσεις`} />
      </div>
    </div>
  );
};

/** The progress of one grammar topic, fixed at the top of its page: the drills and the step-by-step lesson. */
export const GrammarProgressBar = ({ lessonKey }: { lessonKey: string }) => {
  const progress = useLearnerProgress();
  const drills = grammarProgress({ lessonKeys: [lessonKey], progress });
  const lesson = progress.lessonProgress[lessonKey];
  let lessonPercent = 0;
  if (lesson?.done) lessonPercent = 100;
  else if (lesson && lesson.total > 0) lessonPercent = Math.round((lesson.step / lesson.total) * 100);

  return (
    <div className={STICKY}>
      <div className="mx-auto flex max-w-3xl items-center gap-4">
        <Meter label="Ασκήσεις" percent={drills.percent} detail={`Έχεις απαντήσει σωστά ${drills.done} από ${drills.total} ασκήσεις`} />
        <Meter label="Μάθημα με τη Λόλα" percent={lessonPercent} detail={lesson?.done ? "Έχεις τελειώσει το μάθημα" : "Πόσο από το μάθημα έχεις δει"} />
      </div>
    </div>
  );
};
