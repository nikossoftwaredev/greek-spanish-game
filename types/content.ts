/**
 * Static course content, modelled on "Aula Internacional Plus 1" (A1), units 0 to 9.
 *
 * Everything the game teaches lives in `content/` as plain typed data. There is no database.
 * Greek (`el`) is the teaching language, Spanish (`es`) is the target language.
 *
 * Writing rules for every string in the content files:
 * - NEVER use an em dash or a double hyphen as a dash. Use a comma, a colon or parentheses.
 * - Greek text uses polytonic-free modern Greek (monotonic), with the correct accents.
 * - Example sentences and drills are ORIGINAL (A1 level), never copied from the book.
 */

/** Part of speech, used by games to pick a sensible exercise type. */
export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "pronoun"
  | "determiner"
  | "number"
  | "conjunction"
  | "phrase"
  | "interjection";

/** `mf` means one form for both genders (el/la estudiante). */
export type Gender = "m" | "f" | "mf";

export interface ExampleSentence {
  es: string;
  el: string;
}

export interface VocabItem {
  /** Globally unique, kebab-case, prefixed with the unit: `u1-cocinero`. Never reused. */
  id: string;
  /**
   * Spanish exactly as the book prints it, but nouns WITHOUT their article (the article comes
   * from `gender`). Keep gender endings written the book's way ("cocinero/a") and keep
   * punctuation for phrases ("¡Hasta luego!", "¿Cómo te llamas?").
   */
  es: string;
  /**
   * Greek translation. Separate alternative meanings with " / ". For numbers `el` is the digit
   * ("21"). For phrases give a natural Greek equivalent, not a word-for-word calque.
   */
  el: string;
  pos: PartOfSpeech;
  /** Nouns only. */
  gender?: Gender;
  /** One emoji that helps memory (professions, food, places, objects). Omit when it does not fit. */
  emoji?: string;
  /** Short Greek note: false friend, usage, memory hook. Optional. */
  noteEl?: string;
  /** An ORIGINAL A1 sentence using the word, with its Greek translation. */
  example?: ExampleSentence;
  /** Extra typed answers that must also be accepted (rare: spelling variants, synonyms). */
  accept?: string[];
}

/** A titled block of vocabulary, mirroring a heading on the book's "Léxico" page. */
export interface VocabGroup {
  /** Unique within the unit, kebab-case: `profesiones`. Page groups use `p<page>`: `p16`. */
  id: string;
  /** Page of the book (the number PRINTED on the page) where these words appear. */
  page?: number;
  /** Section of the unit the page belongs to: "Léxico", "Comprender", "Explorar y reflexionar"... */
  section?: string;
  titleEs: string;
  titleEl: string;
  emoji?: string;
  items: VocabItem[];
}

export interface GrammarTable {
  titleEl: string;
  headers: string[];
  rows: string[][];
}

export interface GrammarRule {
  /** One rule, written in Greek, 1 to 3 sentences. */
  textEl: string;
  examples?: ExampleSentence[];
}

interface DrillBase {
  /** Unique within its lesson: `d1`, `d2`... Extra Gramática de uso drills are `x1`, `x2`... */
  id: string;
  /**
   * Gramática de uso only: the number (1-based, as in `exercisesEl`) of the book exercise this drill
   * practises with new sentences. "50.2" is exercise 2 of unit 50. Set by `content/gramatica/practice/`.
   */
  exercise?: number;
}

/** Multiple choice. `answer` must be one of `options`. */
export interface ChoiceDrill extends DrillBase {
  type: "choice";
  /** Spanish prompt. May contain `___` for a gap. */
  promptEs: string;
  /** Optional Greek help for the prompt. */
  promptEl?: string;
  options: string[];
  answer: string;
  explainEl?: string;
}

/** Fill the gap. `textEs` contains exactly one `___`. */
export interface ClozeDrill extends DrillBase {
  type: "cloze";
  textEs: string;
  /** Greek translation of the full sentence, shown as help. */
  hintEl?: string;
  answer: string;
  /** Other correct answers (for example "eres" and "sos"). */
  alternatives?: string[];
  explainEl?: string;
}

/** Build a Spanish sentence from shuffled words. */
export interface OrderDrill extends DrillBase {
  type: "order";
  /** Greek sentence the learner translates. */
  promptEl: string;
  /** The Spanish words in the correct order, punctuation attached to its word ("Daniel."). */
  solution: string[];
  /** Wrong words mixed in as distractors. */
  distractors?: string[];
  /** Other word orders that are equally correct Spanish. Their words must be among the tiles. */
  alternatives?: string[][];
  explainEl?: string;
}

export type Drill = ChoiceDrill | ClozeDrill | OrderDrill;

export interface GrammarLesson {
  /** Unique within the unit, kebab-case: `genero`. */
  id: string;
  titleEs: string;
  titleEl: string;
  /** Short Greek introduction (1 to 3 sentences) written for a Greek speaker. */
  introEl: string;
  rules: GrammarRule[];
  tables?: GrammarTable[];
  /** Tips aimed at Greek speakers: false friends, pronunciation, typical mistakes. */
  tipsEl?: string[];
  /** 5 to 10 ORIGINAL drills that practise exactly this lesson. */
  drills: Drill[];
}

/** Page numbers PRINTED on the book's pages (the PDF page is always one more). */
export interface BookPages {
  start: number;
  end: number;
  lexico?: number;
  gramatica?: number;
}

export interface Unit {
  /** 0 to 9. */
  id: number;
  titleEs: string;
  titleEl: string;
  /** What the learner will be able to do after the unit, in Greek, one sentence. */
  goalEl: string;
  /** Hex colour of the unit in the book. */
  color: string;
  pages: BookPages;
  /** "Recursos comunicativos" rewritten as short Greek bullet points (3 to 6). */
  communicativeEl: string[];
  vocab: VocabGroup[];
  grammar: GrammarLesson[];
  /** Ids from `content/verbs.ts` that this unit practises. */
  verbIds: string[];
}

/** 0 yo, 1 tú, 2 él/ella/usted, 3 nosotros/as, 4 vosotros/as, 5 ellos/ellas/ustedes. */
export type PersonForms = [string, string, string, string, string, string];

export type VerbType = "regular-ar" | "regular-er" | "regular-ir" | "irregular" | "stem-change" | "reflexive";

export interface Verb {
  /** Infinitive without accents tricks, kebab-case: `ser`, `llamarse`, `ir`. Unique. */
  id: string;
  /** Infinitive as written: "ser", "llamarse". */
  infinitive: string;
  /** Greek meaning of the infinitive in the 1st person singular: "είμαι", "έχω". */
  el: string;
  type: VerbType;
  /** Present indicative. Reflexive verbs include the pronoun ("me llamo"). */
  present: PersonForms;
  /** Indexes (0 to 5) of the forms that are irregular, to highlight them. Empty for regular verbs. */
  irregularIndexes: number[];
  /** Past participle, for the pretérito perfecto. */
  participle?: string;
  /** Participle is irregular. */
  participleIrregular?: boolean;
  noteEl?: string;
  example?: ExampleSentence;
}

/**
 * A unit of the second course book, "Gramática de uso del español: Teoría y práctica" (Aragonés y
 * Palencia): 107 units, each with one page of theory and one page of numbered exercises.
 * Homework is written "50.2", meaning exercise 2 of unit 50. It has the same shape as an Aula
 * grammar lesson, so both books are studied, ticked off and practised the same way.
 */
export interface GuUnit extends GrammarLesson {
  /** Unit number in the book, 1 to 107. */
  number: number;
  /** PDF page where the theory starts. The exercises are on the next page. */
  page: number;
  /**
   * One short Greek sentence per numbered exercise of the book, in order: `exercisesEl[1]` says what
   * exercise 50.2 asks the learner to do. Its length is the number of exercises of the unit.
   */
  exercisesEl: string[];
}

/**
 * Interactive version of the numbered exercises of one Gramática de uso unit. The book's own
 * sentences are never copied: each exercise gets original drills that practise the same skill.
 */
export interface GuPractice {
  /** The exercise number (1-based) of every drill the unit already has, by drill id: `{ d1: 1, d2: 1, d3: 2 }`. */
  tags: Record<string, number>;
  /** New drills, each with `exercise` set and an id `x1`, `x2`... Together with the tagged ones: 4 to 6 per exercise. */
  extra: Drill[];
}
