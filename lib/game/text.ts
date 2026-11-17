import type { VocabItem } from "@/types/content";

/** Spanish articles, and the Greek ones too, so "ο μάγειρας" is accepted for "μάγειρας". */
const ARTICLES = new Set(["el", "la", "los", "las", "un", "una", "unos", "unas", "ο", "η", "το", "οι", "τα", "ένας", "ενας", "μια", "μία", "ένα", "ενα"]);
const TILDE_N = "\u0001";

/** Lowercase, trimmed, single spaces, without leading/trailing punctuation marks. */
export const normalize = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[¿?¡!.,;:"“”()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Removes accents but keeps "ñ" (año and ano are different words). */
export const stripAccents = (value: string): string =>
  value
    .replace(/ñ/g, TILDE_N)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(new RegExp(TILDE_N, "g"), "ñ");

/** Greek text compared without tonos, so a missing accent never fails a learner. */
export const stripGreekAccents = (value: string): string =>
  value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

export const stripLeadingArticle = (value: string): string => {
  const words = value.split(" ");
  if (words.length > 1 && ARTICLES.has(words[0])) return words.slice(1).join(" ");
  return value;
};

const comparable = (value: string): string => stripLeadingArticle(normalize(value));

export type MatchResult = "exact" | "accent" | "wrong";

/**
 * Compares a typed answer with the accepted forms. A missing accent is "accent": the answer is
 * right, but the learner is reminded of the accent.
 */
export const matchAnswer = ({ typed, accepted }: { typed: string; accepted: string[] }): MatchResult => {
  const typedNorm = comparable(typed);
  if (!typedNorm) return "wrong";
  const forms = accepted.map(comparable);
  if (forms.includes(typedNorm)) return "exact";
  const typedPlain = stripAccents(typedNorm);
  if (forms.some((form) => stripAccents(form) === typedPlain)) return "accent";
  return "wrong";
};

/** Puts an ending after a word: "cocinero" + "a", "alemán" + "ana" (alemana), "inglés" + "esa" (inglesa), "mucho" + "os". */
const withEnding = ({ base, ending }: { base: string; ending: string }): string => {
  for (let overlap = Math.min(base.length, ending.length); overlap >= 2; overlap -= 1) {
    if (stripAccents(base.slice(-overlap)) === ending.slice(0, overlap)) return `${base.slice(0, -overlap)}${ending}`;
  }
  if (ending === "a" && base.endsWith("e")) return `${base.slice(0, -1)}a`;
  if (/[oa]s?$/.test(base)) return `${base.replace(/[oa]s?$/, "")}${ending}`;
  return `${base}${ending}`;
};

/**
 * Every written-out form of a word with slashes: endings ("cocinero/a", "mucho/a/os/as") or whole
 * words ("mi/tu/su", "el/la"). Punctuation around the word ("¿cuánto/a?") stays around every form.
 */
const expandSlashToken = (token: string): string[] => {
  const lead = /^[¿¡"]*/.exec(token)?.[0] ?? "";
  const trail = /[?!.,;:…"]*$/.exec(token)?.[0] ?? "";
  const core = token.slice(lead.length, token.length - trail.length);
  const [base, ...rest] = core.split("/").filter(Boolean);
  if (!base || rest.length === 0) return [token];
  const wholeWords = base.length <= 3 && rest.every((part) => part.length >= 2);
  const forms = [base, ...rest.map((part) => (wholeWords ? part : withEnding({ base, ending: part })))];
  return forms.map((form) => `${lead}${form}${trail}`);
};

/** Every Greek string that counts as correct for a meaning like "θερμός / ζεστός" or "παππούδες (παππούς και γιαγιά)". */
export const greekForms = (el: string): string[] => {
  const forms = el
    .replace(/\(.*?\)/g, "")
    .split(/\s+\/\s+|\s*,\s*/)
    .map((form) => form.replace(/[….]+$/u, "").trim())
    .filter(Boolean);
  return [...new Set(forms)];
};

/** The forms of one phrase, with every word that has slashes written out ("hijo/a único/a" is four forms). */
const phraseForms = (phrase: string): string[] => {
  let forms: string[][] = [[]];
  for (const token of phrase.trim().split(/\s+/)) {
    const options = token.includes("/") ? expandSlashToken(token) : [token];
    forms = forms.flatMap((prefix) => options.map((option) => [...prefix, option]));
  }
  return forms.map((words) => words.join(" "));
};

/** Every Spanish string that counts as correct when the learner types `item`. */
export const acceptedForms = (item: Pick<VocabItem, "es" | "accept">): string[] => {
  const variants = item.es
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .split(/\s+\/\s+/)
    .flatMap(phraseForms);
  return [...new Set([...variants, ...(item.accept ?? [])])];
};

/** The same word spelled the same way (ignoring article, accents and "/a" endings) is one card in the book. */
export const vocabKey = (es: string): string => stripAccents(stripLeadingArticle(normalize(acceptedForms({ es })[0] ?? es)));

export const shuffle = <T,>(input: readonly T[]): T[] => {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const sample = <T,>({ items, count }: { items: readonly T[]; count: number }): T[] =>
  shuffle(items).slice(0, count);

/** `YYYY-MM-DD` in the device's local time. */
export const todayKey = (date: Date = new Date()): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};

/** Splits a sentence into tappable tokens while keeping punctuation and spacing. */
export interface TextToken {
  text: string;
  /** `true` for words that can be looked up. */
  word: boolean;
}

const WORD_PATTERN = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:['’][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)?/g;

export const tokenize = (text: string): TextToken[] => {
  const tokens: TextToken[] = [];
  let last = 0;
  for (const match of text.matchAll(WORD_PATTERN)) {
    const start = match.index ?? 0;
    if (start > last) tokens.push({ text: text.slice(last, start), word: false });
    tokens.push({ text: match[0], word: true });
    last = start + match[0].length;
  }
  if (last < text.length) tokens.push({ text: text.slice(last), word: false });
  return tokens;
};

export type GluedPiece = { kind: "text"; text: string } | { kind: "word"; text: string; before: string; after: string };

/**
 * Like `tokenize`, but the punctuation that touches a word travels with it ("¡Hola!" is one unit),
 * so a line never breaks between a word and its "!" or "?".
 */
export const tokenizeGlued = (text: string): GluedPiece[] => {
  const tokens = tokenize(text).map((token) => ({ ...token }));
  const attached = new Map<number, { before: string; after: string }>();

  tokens.forEach((token, index) => {
    if (!token.word) return;
    let before = "";
    let after = "";
    const previous = tokens[index - 1];
    const next = tokens[index + 1];
    if (previous && !previous.word) {
      before = previous.text.match(/\S+$/)?.[0] ?? "";
      previous.text = previous.text.slice(0, previous.text.length - before.length);
    }
    if (next && !next.word) {
      after = next.text.match(/^\S+/)?.[0] ?? "";
      next.text = next.text.slice(after.length);
    }
    attached.set(index, { before, after });
  });

  const pieces: GluedPiece[] = [];
  tokens.forEach((token, index) => {
    const around = attached.get(index);
    if (token.word && around) pieces.push({ kind: "word", text: token.text, ...around });
    else if (token.text) pieces.push({ kind: "text", text: token.text });
  });
  return pieces;
};
