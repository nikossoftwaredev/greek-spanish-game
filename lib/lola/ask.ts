import { type Phrase,PHRASEBOOK } from "@/content/phrasebook";
import { ALL_VOCAB, type FlatVocab } from "@/lib/content/selectors";
import { normalize, stripAccents, stripGreekAccents, stripLeadingArticle } from "@/lib/game/text";

/** What Lola can answer without going online. */
export interface LocalAnswer {
  language: "el" | "es";
  /** The phrase that was looked up, after removing wrappers like «πώς λέμε». */
  query: string;
  /** What to send for an online translation: the learner's own text unless a wrapper had to go. */
  remoteText: string;
  phrase?: Phrase;
  /** How well the phrase matched: `exact`, or `close` for the nearest phrase. */
  match?: "exact" | "close";
  /** Words of the course book that match. */
  words: FlatVocab[];
  /** True when a local answer is good enough that no online translation is needed. */
  confident: boolean;
}

const GREEK_LETTER = /[Ͱ-Ͽἀ-῿]/;
const PUNCTUATION = /[¿?¡!.,;:"“”«»'’()·;…]/g;

const isGreek = (text: string): boolean => GREEK_LETTER.test(text);

const cleanGreek = (text: string): string => stripGreekAccents(text).replace(PUNCTUATION, " ").replace(/\s+/g, " ").trim();
const cleanSpanish = (text: string): string => stripAccents(normalize(text)).replace(/\s+/g, " ").trim();
const clean = (text: string): string => (isGreek(text) ? cleanGreek(text) : cleanSpanish(text));

/** «πώς είναι το ...», «πώς λέμε ... στα ισπανικά», «τι σημαίνει ...»: the question around the phrase. */
const GREEK_WRAPPERS: RegExp[] = [
  /^πως (λεμε|λεγεται|λενε|ειναι|γραφεται|θα πω|να πω|λεω|μπορω να πω|μπορουμε να πουμε)\s+/,
  /\s+(στα ισπανικα|στην ισπανικη|στα ελληνικα)$/,
  /^(το|τη|την|τον|οτι|για το|για τη|για την)\s+/,
];
const MEANING_WRAPPER = /^τι (σημαινει|θα πει|σημαινει η λεξη|σημαινει η φραση)\s+/;

/** Removes the question around a phrase, repeatedly. Returns the phrase and whether it asks for a meaning. */
const unwrap = (cleaned: string): { phrase: string; asksMeaning: boolean } => {
  let phrase = cleaned;
  const asksMeaning = MEANING_WRAPPER.test(phrase);
  if (asksMeaning) phrase = phrase.replace(MEANING_WRAPPER, "");
  for (let pass = 0; pass < 3; pass++) {
    const before = phrase;
    for (const wrapper of GREEK_WRAPPERS) phrase = phrase.replace(wrapper, "");
    if (phrase === before) break;
  }
  return { phrase: phrase || cleaned, asksMeaning };
};

const tokens = (value: string): string[] => value.split(" ").filter(Boolean);

/** 1 for equal text, otherwise the larger of the shared-word ratio and a "contains the other" score. */
const similarity = (a: string, b: string): number => {
  if (a === b) return 1;
  const left = new Set(tokens(a));
  const right = new Set(tokens(b));
  const shared = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  const contains = (a.includes(b) || b.includes(a)) && Math.min(left.size, right.size) >= 2 ? 0.85 : 0;
  return Math.max(union === 0 ? 0 : shared / union, contains);
};

interface IndexedPhrase {
  phrase: Phrase;
  el: string[];
  es: string[];
}

let phraseIndex: IndexedPhrase[] | undefined;

const indexedPhrases = (): IndexedPhrase[] => {
  phraseIndex ??= PHRASEBOOK.map((phrase) => ({ phrase, el: phrase.el.map(cleanGreek), es: phrase.es.map(cleanSpanish) }));
  return phraseIndex;
};

const MATCH_THRESHOLD = 0.6;

/** The phrase of the phrasebook closest to `query`, written in `language`. */
const findPhrase = ({ query, language }: { query: string; language: "el" | "es" }): { phrase: Phrase; score: number } | undefined => {
  let best: { phrase: Phrase; score: number } | undefined;
  for (const entry of indexedPhrases()) {
    const variants = language === "el" ? entry.el : entry.es;
    const score = Math.max(...variants.map((variant) => similarity(query, variant)));
    if (score >= MATCH_THRESHOLD && (!best || score > best.score)) best = { phrase: entry.phrase, score };
  }
  return best;
};

const matchKind = (found: { score: number } | undefined): "exact" | "close" | undefined => {
  if (!found) return undefined;
  if (found.score === 1) return "exact";
  return "close";
};

const GREEK_ARTICLE = /^(ο|η|το|οι|τα|ενας|μια|ενα)\s+/;

/** Words of the book whose Greek meaning is `query` (or starts with it). Best matches first. */
const wordsFromGreek = (query: string): FlatVocab[] => {
  const ranked: { item: FlatVocab; rank: number }[] = [];
  for (const item of ALL_VOCAB) {
    const meanings = item.el.split(/\s*[/,]\s*/).map((meaning) => cleanGreek(meaning).replace(GREEK_ARTICLE, ""));
    const target = query.replace(GREEK_ARTICLE, "");
    if (meanings.some((meaning) => meaning === target)) ranked.push({ item, rank: 2 });
    else if (target.length >= 4 && meanings.some((meaning) => meaning.startsWith(`${target} `) || meaning.startsWith(target))) ranked.push({ item, rank: 1 });
  }
  return ranked.sort((a, b) => b.rank - a.rank).slice(0, 5).map((entry) => entry.item);
};

/** Words of the book written like `query` in Spanish (with or without their article). */
const wordsFromSpanish = (query: string): FlatVocab[] => {
  const target = stripLeadingArticle(query);
  return ALL_VOCAB.filter((item) => cleanSpanish(item.es.split("/")[0]) === target).slice(0, 5);
};

/** One entry per Spanish word, and none that the phrasebook answer already shows. */
const withoutRepeats = ({ words, phrase }: { words: FlatVocab[]; phrase?: Phrase }): FlatVocab[] => {
  const seen = new Set((phrase?.es ?? []).map(cleanSpanish));
  return words.filter((item) => {
    const spanish = cleanSpanish(item.es);
    if (seen.has(spanish)) return false;
    seen.add(spanish);
    return true;
  });
};

/** Answers from the phrasebook and the course vocabulary, with no network. Pure, so it is easy to test. */
export const askLocal = (raw: string): LocalAnswer => {
  const greek = isGreek(raw);
  const cleaned = clean(raw);

  if (!greek) {
    const found = findPhrase({ query: cleaned, language: "es" });
    const words = withoutRepeats({ words: wordsFromSpanish(cleaned), phrase: found?.phrase });
    return {
      language: "es",
      query: cleaned,
      remoteText: raw.trim(),
      phrase: found?.phrase,
      match: matchKind(found),
      words,
      confident: Boolean(found) || (tokens(stripLeadingArticle(cleaned)).length === 1 && words.length > 0),
    };
  }

  const direct = findPhrase({ query: cleaned, language: "el" });
  const { phrase: unwrapped, asksMeaning } = unwrap(cleaned);
  const wrappedFound = unwrapped === cleaned ? undefined : findPhrase({ query: unwrapped, language: "el" });
  const found = wrappedFound && (!direct || wrappedFound.score > direct.score) ? wrappedFound : direct;
  const words = withoutRepeats({ words: wordsFromGreek(unwrapped), phrase: found?.phrase });

  // «τι σημαίνει estoy listo»: the rest is Spanish, so answer in the other direction.
  if (asksMeaning && !isGreek(unwrapped)) return { ...askLocal(unwrapped) };

  return {
    language: "el",
    query: unwrapped,
    remoteText: unwrapped === cleaned ? raw.trim() : unwrapped,
    phrase: found?.phrase,
    match: matchKind(found),
    words,
    confident: Boolean(found) || (tokens(unwrapped.replace(GREEK_ARTICLE, "")).length === 1 && words.length > 0),
  };
};
