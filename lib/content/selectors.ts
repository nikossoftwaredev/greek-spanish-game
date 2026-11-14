import { UNITS, VERBS } from "@/content";
import { GU_UNITS } from "@/content/gramatica";
import type { GrammarLesson, GuUnit, Unit, Verb, VocabItem } from "@/types/content";

/** A vocabulary item together with where it lives in the book. */
export interface FlatVocab extends VocabItem {
  unitId: number;
  /** Page of the book (printed number) where the word appears. */
  page?: number;
  section?: string;
  groupId: string;
  groupTitleEs: string;
  groupTitleEl: string;
}

export type Book = "aula" | "gu";

/** A grammar lesson of either course book. */
export interface FlatLesson {
  book: Book;
  /** The Aula unit id, or the Gramática de uso unit number. */
  unitId: number;
  /** `1:genero` for an Aula lesson, `gu:50` for a Gramática de uso unit. Stored in the progress. */
  key: string;
  lesson: GrammarLesson;
}

export const ALL_VOCAB: FlatVocab[] = UNITS.flatMap((unit) =>
  unit.vocab.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      unitId: unit.id,
      page: group.page,
      section: group.section,
      groupId: group.id,
      groupTitleEs: group.titleEs,
      groupTitleEl: group.titleEl,
    })),
  ),
);

export const VERB_BY_ID = new Map<string, Verb>(VERBS.map((verb) => [verb.id, verb]));

/** Aula Internacional Plus 1 lessons. */
export const ALL_LESSONS: FlatLesson[] = UNITS.flatMap((unit) =>
  unit.grammar.map((lesson) => ({ book: "aula" as const, unitId: unit.id, key: `${unit.id}:${lesson.id}`, lesson })),
);

export const guKey = (number: number): string => `gu:${number}`;

/** Gramática de uso units, shaped like lessons. */
export const GU_LESSONS: FlatLesson[] = GU_UNITS.map((unit) => ({ book: "gu" as const, unitId: unit.number, key: guKey(unit.number), lesson: unit }));

/** Every grammar topic of both books. */
export const EVERY_LESSON: FlatLesson[] = [...ALL_LESSONS, ...GU_LESSONS];

export const lessonByKey = (key: string): FlatLesson | undefined => EVERY_LESSON.find((entry) => entry.key === key);

export const getGuUnit = (number: number): GuUnit | undefined => GU_UNITS.find((unit) => unit.number === number);

export const getUnit = (id: number): Unit | undefined => UNITS.find((unit) => unit.id === id);

export const getLesson = ({ unitId, lessonId }: { unitId: number; lessonId: string }): GrammarLesson | undefined =>
  getUnit(unitId)?.grammar.find((lesson) => lesson.id === lessonId);

/** Words of the given units. With `pages`, only words printed on those pages of the book. */
export const vocabForUnits = (unitIds: number[], pages?: number[]): FlatVocab[] =>
  ALL_VOCAB.filter(
    (item) => unitIds.includes(item.unitId) && (!pages || pages.length === 0 || (item.page !== undefined && pages.includes(item.page))),
  );

export const lessonsForUnits = (unitIds: number[]): FlatLesson[] =>
  ALL_LESSONS.filter((entry) => unitIds.includes(entry.unitId));

/** The unit where a verb is first practised. Verbs no unit lists belong to the last unit's tables. */
export const unitOfVerb = (verbId: string): number => {
  const unit = UNITS.find((candidate) => candidate.verbIds.includes(verbId));
  return unit?.id ?? UNITS[UNITS.length - 1].id;
};

export const verbsForUnits = (unitIds: number[]): Verb[] =>
  VERBS.filter((verb) => unitIds.includes(unitOfVerb(verb.id)));

export const unitCounts = (unit: Unit): { words: number; lessons: number; drills: number; verbs: number } => ({
  words: unit.vocab.reduce((sum, group) => sum + group.items.length, 0),
  lessons: unit.grammar.length,
  drills: unit.grammar.reduce((sum, lesson) => sum + lesson.drills.length, 0),
  verbs: unit.verbIds.length,
});

/** Text colour that stays readable on top of a unit colour. */
export const onUnitColor = (hex: string): string => {
  const value = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance > 0.62) return "#1c1917";
  return "#ffffff";
};

/** `el casa`-style display of a noun: article from its gender, nothing for other words. */
export const withArticle = (item: Pick<VocabItem, "es" | "gender" | "pos">): string => {
  if (item.pos !== "noun" || !item.gender) return item.es;
  if (item.gender === "m") return `el ${item.es}`;
  if (item.gender === "f") return `la ${item.es}`;
  return `el/la ${item.es}`;
};
