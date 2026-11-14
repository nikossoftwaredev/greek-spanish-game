import type { ExampleSentence } from "@/types/content";

export type Lang = "es" | "el";

export type SkillArea = "vocab" | "grammar" | "verbs";

/** Where an exercise comes from in the course books. Shown to the learner on the exercise. */
export interface ExerciseSource {
  book: "aula" | "gu";
  /** Aula chapters or Gramática de uso units (several for a matching round). */
  units: number[];
  /** Printed Aula page, when the words all come from one page. */
  page?: number;
  /** The numbered exercise of the Gramática de uso (the 2 of "50.2"). */
  exercise?: number;
  /** PDF page that "open the book" goes to. */
  pdfPage?: number;
}

interface BaseExercise {
  /** Unique within a session. */
  id: string;
  skill: SkillArea;
  unitId?: number;
  source?: ExerciseSource;
  /** Vocabulary card this exercise reviews. */
  vocabId?: string;
  /** Grammar drill this exercise comes from: `unitId:lessonId:drillId`. */
  drillKey?: string;
  /** Verb practised. */
  verbId?: string;
}

/** Pick one of several options. */
export interface ChoiceExercise extends BaseExercise {
  kind: "choice";
  /** Short instruction shown above the prompt. */
  instructionEl: string;
  promptText: string;
  promptLang: Lang;
  /** Greek help shown under a Spanish prompt (grammar drills). */
  promptHintEl?: string;
  options: string[];
  optionsLang: Lang;
  answer: string;
  explainEl?: string;
  example?: ExampleSentence;
}

/** Type the answer. */
export interface TypeExercise extends BaseExercise {
  kind: "type";
  instructionEl: string;
  promptText: string;
  promptLang: Lang;
  promptHintEl?: string;
  /** The language of the typed answer: Spanish unless stated. */
  answerLang?: Lang;
  /** Every correct typed answer. The first one is displayed as the solution. */
  accepted: string[];
  /** When set, the sentence is shown with a gap: `before` [input] `after`. */
  gap?: { before: string; after: string };
  explainEl?: string;
  example?: ExampleSentence;
}

/** Tap Spanish and Greek cards that belong together. */
export interface MatchExercise extends BaseExercise {
  kind: "match";
  /** In the order the Spanish cards are shown. */
  pairs: { id: string; es: string; el: string; vocabId?: string }[];
  /** Pair ids in the (different) order the Greek cards are shown. */
  elOrder: string[];
}

/** Build a sentence from shuffled words. */
export interface OrderExercise extends BaseExercise {
  kind: "order";
  promptEl: string;
  /** Overrides the default instruction ("build the sentence"). */
  instructionEl?: string;
  /** The tiles are single letters: the word is built without spaces. */
  letters?: boolean;
  /** Shuffled tiles, including distractors. */
  tiles: string[];
  solution: string[];
  /** Other accepted word orders. */
  alternatives?: string[][];
  explainEl?: string;
}

export type Exercise = ChoiceExercise | TypeExercise | MatchExercise | OrderExercise;

export interface ExerciseResult {
  correct: boolean;
  /** Right answer but with a missing accent. */
  accentSlip?: boolean;
  /** The solution to show after a wrong answer. */
  solution?: string;
  /** Match exercise: ids of the vocabulary cards answered wrong at least once. */
  missedVocabIds?: string[];
}

export type SessionMode = "mix" | "flashcards" | "match" | "type" | "verbs" | "grammar" | "review" | "learn" | "translate" | "scramble";

export interface SessionConfig {
  mode: SessionMode;
  unitIds: number[];
  /** Only words printed on these pages of the book (empty or missing: all pages). */
  pages?: number[];
  /** Grammar mode: one topic, `unitId:lessonId` for Aula or `gu:50` for the Gramática de uso. */
  lesson?: string;
  /** Grammar mode: one numbered exercise of the Gramática de uso, "50.2" (unit 50, exercise 2). Needs `lesson: "gu:50"`. */
  exercise?: string;
  /** Grammar mode: practise exactly these topics (`1:genero`, `gu:50`). */
  lessons?: string[];
  /** Grammar mode: practise every lesson the class has been taught (the checklist). */
  taught?: boolean;
  /** Mix mode: take grammar drills from the taught lessons, when there are any. */
  useTaught?: boolean;
  /** Homework this session belongs to. */
  homeworkId?: string;
  /** Flashcards of the words the learner saved from the dictionary panel. */
  saved?: boolean;
}
