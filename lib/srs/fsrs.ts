import { type Card, type CardInput, createEmptyCard, fsrs, type Grade, Rating, State } from "ts-fsrs";

/**
 * A flashcard's memory state as saved in localStorage: the ts-fsrs `Card` with dates as ISO
 * strings, so it survives `JSON.stringify`.
 */
export interface StoredCard {
  due: string;
  stability: number;
  difficulty: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  learning_steps: number;
  state: State;
  last_review?: string;
}

export type CardRating = "again" | "hard" | "good" | "easy";

export type Mastery = "new" | "learning" | "known" | "mastered";

const RATING_MAP: Record<CardRating, Grade> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

/**
 * Learning steps are empty on purpose: a study session already repeats the words a learner got
 * wrong, so FSRS only plans the day-level reviews.
 */
const scheduler = fsrs({ enable_fuzz: true, learning_steps: [], relearning_steps: [] });

const serialize = (card: Card): StoredCard => ({
  due: card.due.toISOString(),
  stability: card.stability,
  difficulty: card.difficulty,
  scheduled_days: card.scheduled_days,
  reps: card.reps,
  lapses: card.lapses,
  learning_steps: card.learning_steps,
  state: card.state,
  last_review: card.last_review?.toISOString(),
});

/** Schedules the next review of `stored` (or of a brand new card) after an answer. */
export const reviewCard = ({
  stored,
  rating,
  now = new Date(),
}: {
  stored?: StoredCard;
  rating: CardRating;
  now?: Date;
}): StoredCard => {
  const base: CardInput | Card = stored ?? createEmptyCard(now);
  const { card } = scheduler.next(base, now, RATING_MAP[rating]);
  return serialize(card);
};

export const isDue = ({ stored, now = new Date() }: { stored: StoredCard; now?: Date }): boolean =>
  new Date(stored.due).getTime() <= now.getTime();

/** How well a word is known, from its FSRS stability (the days a memory is expected to last). */
export const masteryOf = (stored?: StoredCard): Mastery => {
  if (!stored || stored.state === State.New || stored.reps === 0) return "new";
  if (stored.stability >= 21) return "mastered";
  if (stored.reps >= 2 && stored.stability >= 5 && stored.state === State.Review) return "known";
  return "learning";
};
