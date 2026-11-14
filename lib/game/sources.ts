import { type FlatVocab, getGuUnit, getUnit, lessonByKey, unitOfVerb } from "@/lib/content/selectors";
import type { ExerciseSource } from "@/lib/game/types";
import { aulaPdfPage } from "@/lib/pdf/books";

/** Where a word of the book is: its chapter and printed page. Saved words belong to no book. */
export const vocabSource = (item: FlatVocab): ExerciseSource | undefined => {
  if (item.unitId < 0) return undefined;
  return { book: "aula", units: [item.unitId], page: item.page, pdfPage: item.page === undefined ? undefined : aulaPdfPage(item.page) };
};

/**
 * Where a grammar topic is: the Aula chapter and its grammar page, or the Gramática de uso unit
 * (and, when the drill practises a numbered exercise of the book, the page of those exercises).
 */
export const lessonSource = ({ lessonKey, exercise }: { lessonKey: string; exercise?: number }): ExerciseSource | undefined => {
  const entry = lessonByKey(lessonKey);
  if (!entry) return undefined;

  if (entry.book === "gu") {
    const unit = getGuUnit(entry.unitId);
    const hasExercise = exercise !== undefined;
    return { book: "gu", units: [entry.unitId], exercise, pdfPage: unit && (hasExercise ? unit.page + 1 : unit.page) };
  }
  const page = getUnit(entry.unitId)?.pages.gramatica;
  return { book: "aula", units: [entry.unitId], page, pdfPage: page === undefined ? undefined : aulaPdfPage(page) };
};

/** A verb belongs to the chapter that introduces it. */
export const verbSource = (verbId: string): ExerciseSource => ({ book: "aula", units: [unitOfVerb(verbId)] });

/** A matching round can mix chapters; it only names a page when every word is on the same one. */
export const matchSource = (items: FlatVocab[]): ExerciseSource | undefined => {
  const inBook = items.filter((item) => item.unitId >= 0);
  if (inBook.length === 0) return undefined;
  const units = [...new Set(inBook.map((item) => item.unitId))].sort((a, b) => a - b);
  const pages = new Set(inBook.map((item) => item.page));
  const page = pages.size === 1 ? inBook[0].page : undefined;
  return { book: "aula", units, page, pdfPage: page === undefined ? undefined : aulaPdfPage(page) };
};

const list = (numbers: number[]): string => numbers.join(", ");

/** "Aula · Κεφάλαιο 3 · σελ. 50" or "Gramática de uso · Ενότητα 50 · άσκηση 50.2". */
export const describeSource = (source: ExerciseSource): string => {
  const many = source.units.length > 1;
  if (source.book === "gu") {
    const parts = ["Gramática de uso", `${many ? "Ενότητες" : "Ενότητα"} ${list(source.units)}`];
    if (source.exercise !== undefined && !many) parts.push(`άσκηση ${source.units[0]}.${source.exercise}`);
    return parts.join(" · ");
  }
  const parts = ["Aula", `${many ? "Κεφάλαια" : "Κεφάλαιο"} ${list(source.units)}`];
  if (source.page !== undefined) parts.push(`σελ. ${source.page}`);
  return parts.join(" · ");
};

/** For the end of a session: which chapters of each book it drew from, "Aula: κεφάλαια 1, 3". */
export const summarizeSources = (sources: (ExerciseSource | undefined)[]): string[] => {
  const unitsOf = (book: ExerciseSource["book"]): number[] =>
    [...new Set(sources.flatMap((source) => (source?.book === book ? source.units : [])))].sort((a, b) => a - b);
  const aula = unitsOf("aula");
  const gu = unitsOf("gu");
  const lines: string[] = [];
  if (aula.length > 0) lines.push(`Aula: ${aula.length > 1 ? "κεφάλαια" : "κεφάλαιο"} ${list(aula)}`);
  if (gu.length > 0) lines.push(`Gramática de uso: ${gu.length > 1 ? "ενότητες" : "ενότητα"} ${list(gu)}`);
  return lines;
};
