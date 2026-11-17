import { gramaticaRefsForUnit } from "@/content/gramatica-de-uso";
import { ALL_LESSONS, guKey, lessonByKey, vocabForUnits } from "@/lib/content/selectors";
import type { SessionConfig } from "@/lib/game/types";
import type { StoredCard } from "@/lib/srs/fsrs";
import type { LessonProgress } from "@/lib/stores/progress-store";

/** What the progress calculations need from the learner's stored data. */
export interface LearnerProgress {
  cards: Record<string, StoredCard>;
  wordResults: Record<string, boolean>;
  drillStats: Record<string, { right: number; wrong: number }>;
  lessonProgress: Record<string, LessonProgress>;
}

/** A word counts as learned when the last answer to it was right (older saves fall back to the FSRS stability). */
export const isWordLearned = ({ stored, result }: { stored?: StoredCard; result?: boolean }): boolean => {
  if (result !== undefined) return result;
  return stored !== undefined && stored.reps >= 1 && stored.stability >= 2;
};

/** A drill counts as learned once it was answered right at least once, and right at least as often as wrong. */
export const isDrillLearned = (stats?: { right: number; wrong: number }): boolean => stats !== undefined && stats.right >= 1 && stats.right >= stats.wrong;

export interface Share {
  done: number;
  total: number;
  /** 0 to 100. */
  percent: number;
}

const share = (done: number, total: number): Share => ({ done, total, percent: total === 0 ? 0 : Math.round((done / total) * 100) });

/** How many of the words of these chapters the learner knows. */
export const vocabProgress = ({ unitIds, progress }: { unitIds: number[]; progress: LearnerProgress }): Share => {
  const words = vocabForUnits(unitIds);
  const learned = words.filter((word) => isWordLearned({ stored: progress.cards[word.id], result: progress.wordResults[word.id] })).length;
  return share(learned, words.length);
};

/** How many of the drills of these grammar topics (`1:genero`, `gu:50`) the learner has answered right. */
export const grammarProgress = ({ lessonKeys, progress }: { lessonKeys: string[]; progress: LearnerProgress }): Share => {
  let total = 0;
  let done = 0;
  for (const key of lessonKeys) {
    const entry = lessonByKey(key);
    if (!entry) continue;
    for (const drill of entry.lesson.drills) {
      total += 1;
      if (isDrillLearned(progress.drillStats[`${key}:${drill.id}`])) done += 1;
    }
  }
  return share(done, total);
};

/** The grammar of a chapter: its own Aula lessons and the Gramática de uso units that explain the same grammar. */
export const chapterLessonKeys = (unitId: number): string[] => [
  ...ALL_LESSONS.filter((entry) => entry.unitId === unitId).map((entry) => entry.key),
  ...gramaticaRefsForUnit(unitId).map((ref) => guKey(ref.number)),
];

export interface NextStep {
  href: string;
  /** What the button says it will do, in a few words. */
  title: string;
  /** Where it goes and how much is left. */
  detail: string;
}

const LAST_UNIT = 9;

/** The chapter a session belongs to, when it is about exactly one (a page of it counts): the "next" button of its end screen continues there. */
export const chapterOf = (config: SessionConfig): number | undefined => {
  if (config.chapter !== undefined) return config.chapter;
  const single = config.unitIds.length === 1 && !config.lesson && !config.lessons && !config.saved;
  return single ? config.unitIds[0] : undefined;
};

/**
 * Where to go next in a chapter, so the learner never has to choose: first the words that are not
 * known yet, then the grammar drills that are not answered right yet, then the next chapter. Each
 * finished round asks this again, so the path goes on until everything in the chapter is right.
 */
export const nextStepForUnit = ({ unitId, progress, back }: { unitId: number; progress: LearnerProgress; back: string }): NextStep => {
  const vocab = vocabProgress({ unitIds: [unitId], progress });
  if (vocab.total > 0 && vocab.percent < 100)
    return {
      href: `/play/flashcards?units=${unitId}&focus=1&ch=${unitId}&back=${back}`,
      title: `Λεξιλόγιο, κεφάλαιο ${unitId}`,
      detail: `${vocab.total - vocab.done} λέξεις ακόμα, το ξέρεις ${vocab.percent}%`,
    };

  const lessonKeys = chapterLessonKeys(unitId);
  const grammar = grammarProgress({ lessonKeys, progress });
  if (grammar.total > 0 && grammar.percent < 100)
    return {
      href: `/play/grammar?lessons=${lessonKeys.join(",")}&ch=${unitId}&back=${back}`,
      title: `Γραμματική, κεφάλαιο ${unitId}`,
      detail: `${grammar.total - grammar.done} ασκήσεις ακόμα, το ξέρεις ${grammar.percent}%`,
    };

  if (unitId < LAST_UNIT)
    return { href: `/units/${unitId + 1}`, title: `Κεφάλαιο ${unitId + 1}`, detail: `Τέλειωσες το κεφάλαιο ${unitId}. Πάμε στο επόμενο.` };
  return { href: "/practice", title: "Παιχνίδια", detail: "Τέλειωσες όλα τα κεφάλαια. Κάνε επανάληψη με παιχνίδια." };
};
