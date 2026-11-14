import { UNITS } from "@/content";
import { getGuUnit, guKey } from "@/lib/content/selectors";
import type { HomeworkDraft } from "@/lib/stores/homework-store";

import { isEmptyNotes, type ParsedNotes } from "./parse";

export interface PlannedTask extends HomeworkDraft {
  /** Where "Εξάσκηση" leads. */
  practiceHref?: string;
  /** Exercises of the Gramática de uso that the task asks for. */
  gu?: { unit: number; exercises: number[] };
}

export interface ClassNotesPlan {
  /** New chapter of the class. */
  classUnit?: number;
  /** Grammar topics to tick as taught, with a label for the preview. */
  taught: { key: string; label: string }[];
  /** Exercises written as done ("50.2"). */
  doneExercises: string[];
  tasks: PlannedTask[];
  /** Things the app could not place. */
  warnings: string[];
  empty: boolean;
}

/** The Aula unit that a printed page belongs to. */
const unitOfPage = (page: number) => UNITS.find((unit) => page >= unit.pages.start && page <= unit.pages.end);

const pagesLabel = (pages: number[]): string => {
  const ranges: string[] = [];
  let start = pages[0];
  for (let i = 0; i < pages.length; i++) {
    const current = pages[i];
    const next = pages[i + 1];
    if (next !== current + 1) {
      ranges.push(start === current ? String(start) : `${start}-${current}`);
      start = next;
    }
  }
  return ranges.join(", ");
};

const back = "&back=%2Fhomework";

const guLabel = (unit: number): string => {
  const found = getGuUnit(unit);
  return found ? `Gramática de uso ${unit}: ${found.titleEl}` : `Gramática de uso, ενότητα ${unit}`;
};

const guPractice = (unit: number): string | undefined => (getGuUnit(unit) ? `/play/grammar?lesson=${guKey(unit)}${back}` : undefined);

/** Turns "what we did" and "what is homework" into ticks, a new class chapter and homework tasks. */
export const planFromNotes = ({ done, homework, dueDate }: { done: ParsedNotes; homework: ParsedNotes; dueDate: string }): ClassNotesPlan => {
  const plan: ClassNotesPlan = { taught: [], doneExercises: [], tasks: [], warnings: [], empty: isEmptyNotes(done) && isEmptyNotes(homework) };
  const taughtKeys = new Set<string>();

  // ---- What the class did
  const doneUnits = [...done.guUnits, ...done.exercises.map((entry) => entry.unit)];
  for (const unit of doneUnits) {
    if (!getGuUnit(unit)) {
      plan.warnings.push(`Η ενότητα ${unit} της Gramática de uso δεν υπάρχει στην εφαρμογή.`);
      continue;
    }
    if (!taughtKeys.has(guKey(unit))) {
      taughtKeys.add(guKey(unit));
      plan.taught.push({ key: guKey(unit), label: guLabel(unit) });
    }
  }
  for (const entry of done.exercises) for (const number of entry.numbers) plan.doneExercises.push(`${entry.unit}.${number}`);

  const doneChapter = done.chapter ?? (done.pages.length > 0 ? unitOfPage(done.pages[done.pages.length - 1])?.id : undefined);
  if (doneChapter !== undefined) plan.classUnit = doneChapter;
  for (const page of done.pages) {
    const unit = unitOfPage(page);
    if (!unit) {
      plan.warnings.push(`Η σελίδα ${page} δεν ανήκει σε κεφάλαιο του Aula (σελίδες 10 έως 139).`);
      continue;
    }
    if (page === unit.pages.gramatica) {
      for (const lesson of unit.grammar) {
        const key = `${unit.id}:${lesson.id}`;
        if (taughtKeys.has(key)) continue;
        taughtKeys.add(key);
        plan.taught.push({ key, label: `Aula ${unit.id}: ${lesson.titleEl}` });
      }
    }
  }
  if (done.rest) plan.warnings.push(`Δεν κατάλαβα το «${done.rest}» στο «τι κάνατε».`);

  // ---- Homework
  for (const entry of homework.exercises) {
    const unit = getGuUnit(entry.unit);
    if (!unit) {
      plan.warnings.push(`Η ενότητα ${entry.unit} της Gramática de uso δεν υπάρχει στην εφαρμογή.`);
      continue;
    }
    const unknown = entry.numbers.filter((number) => number > unit.exercisesEl.length);
    if (unknown.length > 0) plan.warnings.push(`Η ενότητα ${entry.unit} έχει ${unit.exercisesEl.length} ασκήσεις, όχι ${unknown.map((n) => `${entry.unit}.${n}`).join(", ")}.`);
    plan.tasks.push({
      kind: "exercise",
      title: guLabel(entry.unit),
      unitId: null,
      reference: `ασκήσεις ${entry.numbers.map((n) => `${entry.unit}.${n}`).join(", ")} · σελ. PDF ${unit.page + 1}`,
      notes: "",
      dueDate,
      practiceHref: guPractice(entry.unit),
      gu: { unit: entry.unit, exercises: entry.numbers },
      source: { book: "gu", page: unit.page + 1 },
    });
  }

  for (const unit of homework.guUnits) {
    if (homework.exercises.some((entry) => entry.unit === unit)) continue;
    if (!getGuUnit(unit)) {
      plan.warnings.push(`Η ενότητα ${unit} της Gramática de uso δεν υπάρχει στην εφαρμογή.`);
      continue;
    }
    plan.tasks.push({
      kind: "read",
      title: `Διάβασε: ${guLabel(unit)}`,
      unitId: null,
      reference: `σελ. PDF ${getGuUnit(unit)?.page}`,
      notes: "",
      dueDate,
      practiceHref: guPractice(unit),
      source: { book: "gu", page: getGuUnit(unit)?.page ?? 1 },
    });
  }

  const pagesByUnit = new Map<number, number[]>();
  for (const page of homework.pages) {
    const unit = unitOfPage(page);
    if (!unit) {
      plan.warnings.push(`Η σελίδα ${page} δεν ανήκει σε κεφάλαιο του Aula (σελίδες 10 έως 139).`);
      continue;
    }
    pagesByUnit.set(unit.id, [...(pagesByUnit.get(unit.id) ?? []), page]);
  }
  if (homework.chapter !== undefined && pagesByUnit.size === 0 && UNITS.some((unit) => unit.id === homework.chapter)) pagesByUnit.set(homework.chapter, []);

  for (const [unitId, pages] of pagesByUnit) {
    const unit = UNITS.find((candidate) => candidate.id === unitId);
    if (!unit) continue;
    const reference = pages.length > 0 ? `σελίδες ${pagesLabel(pages)}` : "";
    plan.tasks.push({
      kind: pages.length > 0 ? "vocab" : "read",
      title: pages.length > 0 ? `Μάθε το λεξιλόγιο: κεφάλαιο ${unitId}, ${reference}` : `Διάβασε και μάθε το κεφάλαιο ${unitId}: ${unit.titleEs}`,
      unitId,
      reference,
      notes: "",
      dueDate,
      practiceHref:
        pages.length > 0 ? `/play/flashcards?units=${unitId}&pages=${pages.join(",")}${back}` : `/play/mix?units=${unitId}${back}`,
      source: { book: "aula", page: (pages[0] ?? unit.pages.start) + 1 },
    });
  }

  if (homework.rest) {
    plan.tasks.push({ kind: "other", title: homework.rest, unitId: null, reference: "", notes: "", dueDate });
  }

  return plan;
};
