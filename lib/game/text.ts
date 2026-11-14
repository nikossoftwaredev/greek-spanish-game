import type { VocabItem } from "@/types/content";

const ARTICLES = new Set(["el", "la", "los", "las", "un", "una", "unos", "unas"]);
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

/** Builds a masculine and a feminine form out of "cocinero/a" or "diseñador/a de moda". */
const expandSlashToken = (token: string): string[] => {
  const slash = token.indexOf("/");
  if (slash === -1) return [token];
  const base = token.slice(0, slash);
  const suffix = token.slice(slash + 1);
  const baseEndsWithVowel = /[oa]$/.test(base);
  const feminine = baseEndsWithVowel ? `${base.slice(0, -1)}${suffix}` : `${base}${suffix}`;
  return [base, feminine];
};

/** Every Spanish string that counts as correct when the learner types `item`. */
export const acceptedForms = (item: Pick<VocabItem, "es" | "accept">): string[] => {
  const variants = item.es
    .replace(/\(.*?\)/g, "")
    .split(/\s+\/\s+/)
    .flatMap((part) => {
      const tokens = part.trim().split(/\s+/);
      const slashIndex = tokens.findIndex((t) => t.includes("/"));
      if (slashIndex === -1) return [part.trim()];
      return expandSlashToken(tokens[slashIndex]).map((form) =>
        tokens.map((t, i) => (i === slashIndex ? form : t)).join(" "),
      );
    });
  return [...new Set([...variants, ...(item.accept ?? [])])];
};

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
