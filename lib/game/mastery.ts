import { vocabForUnits } from "@/lib/content/selectors";
import { isDue, type Mastery, masteryOf, type StoredCard } from "@/lib/srs/fsrs";

export interface MasteryCounts {
  total: number;
  new: number;
  learning: number;
  known: number;
  mastered: number;
  due: number;
  /** Share of words that are known or mastered, 0 to 100. */
  percent: number;
}

/** How many of the words in `unitIds` the learner has met, is learning, knows or has mastered. */
export const masteryForUnits = ({
  unitIds,
  cards,
}: {
  unitIds: number[];
  cards: Record<string, StoredCard>;
}): MasteryCounts => {
  const counts: Record<Mastery, number> = { new: 0, learning: 0, known: 0, mastered: 0 };
  const now = new Date();
  let due = 0;
  const items = vocabForUnits(unitIds);

  for (const item of items) {
    const stored = cards[item.id];
    counts[masteryOf(stored)] += 1;
    if (stored && isDue({ stored, now })) due += 1;
  }

  const total = items.length;
  const percent = total === 0 ? 0 : Math.round(((counts.known + counts.mastered) / total) * 100);
  return { total, ...counts, due, percent };
};
