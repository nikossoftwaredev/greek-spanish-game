/**
 * Understands the way the class writes homework in its chat:
 *
 *   "50.2"                      exercise 2 of unit 50 of the Gramática de uso
 *   "51.2 51.4 51.5"            exercises 2, 4 and 5 of unit 51
 *   "50.2-4"                    exercises 2 to 4 of unit 50
 *   "κεφάλαιο 2", "κεφ. 2"      chapter 2 of Aula Internacional Plus 1
 *   "σελ. 30-32", "σελίδες 28, 31"   pages of the Aula book
 *   "ενότητα 50", "gu 50"       unit 50 of the Gramática de uso, without exercise numbers
 *
 * Whatever is left over is kept as free text.
 */

export interface ParsedExercises {
  unit: number;
  numbers: number[];
}

export interface ParsedNotes {
  /** Chapter of Aula Internacional Plus 1. */
  chapter?: number;
  /** Printed pages of the Aula book. */
  pages: number[];
  /** Units of the Gramática de uso named without exercise numbers. */
  guUnits: number[];
  /** Exercises "unit.number", grouped by unit. */
  exercises: ParsedExercises[];
  /** Text that was not understood. */
  rest: string;
}

/** Everyday words around the numbers ("μάθε λεξιλόγιο", "κάντε ασκήσεις"): alone they are not a task. */
const FILLER = new Set(["μαθε", "μαθετε", "διαβασε", "διαβαστε", "κανε", "κανετε", "λεξιλογιο", "ασκηση", "ασκησεις", "θεωρια", "και", "για", "το", "τα", "την", "τη", "του", "της", "τις", "τους", "στο", "στη", "απο", "μεχρι", "να", "με", "σε", "την", "learn", "study"]);

const stripGreekTonos = (word: string): string => word.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const MAX_GU_UNIT = 107;
const MAX_EXERCISE = 30;
const MAX_SPAN = 40;

const EXERCISE = /(?<![\d.,])(\d{1,3})\.(\d{1,2})(?:\s*[-–]\s*(\d{1,2}))?(?![\d.])/g;
const CHAPTER = /(?:κεφ[άα]λαιο|κεφ\.?|chapter|cap[ií]tulo)\s*(\d{1,2})/gi;
const PAGES = /(?:σελ[ίι]δ(?:α|ες)|σελ\.?|p[áa]g(?:ina|inas)?\.?|pp?\.)\s*(\d{1,3}(?:(?:\s*(?:[,\-–&]|και|y)\s*|\s+)\d{1,3})*)/gi;
const GU_UNITS = /(?:ενότητ(?:α|ες)|ενοτ\.?|gramática de uso|gramatica de uso|gramática|gramatica|gu)\s*(\d{1,3}(?:(?:\s*(?:[,\-–&]|και|y)\s*|\s+)\d{1,3})*)/gi;

/** "28, 30-32 και 35" to [28, 30, 31, 32, 35]. */
const expandNumbers = (list: string): number[] => {
  const result: number[] = [];
  const parts = list.replace(/\s*[-–]\s*/g, "-").split(/\s*(?:,|&|και|y)\s*|\s+/i);
  for (const part of parts) {
    const range = part.match(/^(\d{1,3})\s*[-–]\s*(\d{1,3})$/);
    if (range) {
      const from = Number(range[1]);
      const to = Number(range[2]);
      if (to >= from && to - from <= MAX_SPAN) for (let n = from; n <= to; n++) result.push(n);
      continue;
    }
    const single = part.match(/\d{1,3}/);
    if (single) result.push(Number(single[0]));
  }
  return result;
};

const unique = (values: number[]): number[] => [...new Set(values)].sort((a, b) => a - b);

export const parseNotes = (input: string): ParsedNotes => {
  let text = input;

  const exerciseMap = new Map<number, number[]>();
  text = text.replace(EXERCISE, (whole, unit: string, first: string, last?: string) => {
    const unitNumber = Number(unit);
    const from = Number(first);
    const to = last ? Number(last) : from;
    if (unitNumber < 1 || unitNumber > MAX_GU_UNIT || from < 1 || from > MAX_EXERCISE || to < from || to > MAX_EXERCISE) return whole;
    const list = exerciseMap.get(unitNumber) ?? [];
    for (let n = from; n <= to; n++) list.push(n);
    exerciseMap.set(unitNumber, list);
    return " ";
  });

  let chapter: number | undefined;
  text = text.replace(CHAPTER, (_whole, number: string) => {
    chapter = Number(number);
    return " ";
  });

  const pages: number[] = [];
  text = text.replace(PAGES, (_whole, list: string) => {
    pages.push(...expandNumbers(list));
    return " ";
  });

  const guUnits: number[] = [];
  text = text.replace(GU_UNITS, (_whole, list: string) => {
    guUnits.push(...expandNumbers(list).filter((unit) => unit >= 1 && unit <= MAX_GU_UNIT));
    return " ";
  });

  const rest = text
    .replace(/[,;:.\-–]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const letters = rest.replace(/[^\p{L}]/gu, "");
  const onlyFiller = rest.split(" ").every((word) => FILLER.has(stripGreekTonos(word)));

  return {
    chapter,
    pages: unique(pages),
    guUnits: unique(guUnits),
    exercises: [...exerciseMap.entries()].sort((a, b) => a[0] - b[0]).map(([unit, numbers]) => ({ unit, numbers: unique(numbers) })),
    rest: letters.length >= 3 && !onlyFiller ? rest : "",
  };
};

export const isEmptyNotes = (notes: ParsedNotes): boolean =>
  notes.chapter === undefined && notes.pages.length === 0 && notes.guUnits.length === 0 && notes.exercises.length === 0 && !notes.rest;
