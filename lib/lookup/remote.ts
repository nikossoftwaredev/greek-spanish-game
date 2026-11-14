/**
 * Free, key-less dictionary lookups straight from the browser (no backend):
 * - Wiktionary REST API: the lemma of a form ("tengo" is a form of "tener"), definitions, examples.
 * - MyMemory: machine translation Spanish to Greek, used only when the book has no Greek for a word.
 * Both send `Access-Control-Allow-Origin: *`. Only the tapped word (never anything about the
 * learner) leaves the device, and every answer is cached in localStorage.
 */

export interface RemoteExample {
  es: string;
  /** English translation from Wiktionary, if any. */
  en?: string;
  /** Greek machine translation of the example. */
  el?: string;
}

export interface RemoteEntry {
  /** Part of speech in Greek: "ρήμα", "ουσιαστικό"... */
  posEl: string;
  /** Plain English meanings. */
  glosses: string[];
  /** The dictionary form this word comes from ("tener" for "tengo"). */
  lemma?: string;
  /** What kind of form it is, in Greek: "1ο πρόσωπο ενικού, ενεστώτας οριστικής". */
  formEl?: string;
  examples: RemoteExample[];
}

export interface RemoteLookup {
  word: string;
  entries: RemoteEntry[];
  /** Greek machine translation of the lemma (or of the word when it is its own lemma). */
  greek?: string;
  fetchedAt: number;
}

const CACHE_KEY = "vamos:lookup:v1";
const CACHE_LIMIT = 200;
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

const memory = new Map<string, RemoteLookup>();

const readStorage = (): Record<string, RemoteLookup> => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? "{}") as Record<string, RemoteLookup>;
  } catch {
    return {};
  }
};

const writeStorage = (cache: Record<string, RemoteLookup>) => {
  try {
    const entries = Object.entries(cache).sort((a, b) => b[1].fetchedAt - a[1].fetchedAt).slice(0, CACHE_LIMIT);
    localStorage.setItem(CACHE_KEY, JSON.stringify(Object.fromEntries(entries)));
  } catch {
    // Storage full or blocked: the in-memory cache still works.
  }
};

const cachedLookup = (word: string): RemoteLookup | undefined => {
  const fromMemory = memory.get(word);
  if (fromMemory) return fromMemory;
  const stored = readStorage()[word];
  if (stored && Date.now() - stored.fetchedAt < CACHE_TTL_MS) {
    memory.set(word, stored);
    return stored;
  }
  return undefined;
};

const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const POS_EL: Record<string, string> = {
  Verb: "ρήμα",
  Noun: "ουσιαστικό",
  Adjective: "επίθετο",
  Adverb: "επίρρημα",
  Preposition: "πρόθεση",
  Pronoun: "αντωνυμία",
  Conjunction: "σύνδεσμος",
  Interjection: "επιφώνημα",
  Determiner: "οριστικό/αόριστο άρθρο",
  Article: "άρθρο",
  Numeral: "αριθμητικό",
  Phrase: "έκφραση",
  Participle: "μετοχή",
  Contraction: "συναίρεση",
};

const PERSON_WORDS: Record<string, string> = { first: "1ο", second: "2ο", third: "3ο" };
const NUMBER_WORDS: Record<string, string> = { singular: "ενικού", plural: "πληθυντικού" };
const TENSE_WORDS: [RegExp, string][] = [
  [/present/, "ενεστώτας"],
  [/preterite|past/, "αόριστος"],
  [/imperfect/, "παρατατικός"],
  [/future/, "μέλλοντας"],
  [/conditional/, "υποθετική"],
];
const MOOD_WORDS: [RegExp, string][] = [
  [/subjunctive/, "υποτακτικής"],
  [/imperative/, "προστακτικής"],
  [/indicative/, "οριστικής"],
];

/** Turns Wiktionary's English description of a form into Greek, or returns `undefined`. */
const describeFormEl = (english: string): string | undefined => {
  const text = english.toLowerCase();
  const person = text.match(/(first|second|third)-person (singular|plural)/);
  const parts: string[] = [];

  if (person) parts.push(`${PERSON_WORDS[person[1]]} πρόσωπο ${NUMBER_WORDS[person[2]]}`);
  const tense = TENSE_WORDS.find(([pattern]) => pattern.test(text));
  const mood = MOOD_WORDS.find(([pattern]) => pattern.test(text));
  if (tense && (person || /indicative|subjunctive|imperative/.test(text)))
    parts.push(mood ? `${tense[1]} ${mood[1]}` : tense[1]);
  else if (mood) parts.push(`προστακτική`);

  if (/past participle/.test(text)) parts.push("μετοχή παρακειμένου (participio)");
  if (/gerund/.test(text)) parts.push("γερούνδιο (gerundio)");
  if (/feminine (singular )?(equivalent|form)/.test(text)) parts.push("θηλυκό");
  if (/masculine (singular )?(equivalent|form)/.test(text)) parts.push("αρσενικό");
  if (/(^|\s)plural of/.test(text) || /feminine plural of/.test(text)) parts.push("πληθυντικός");

  if (parts.length === 0) return undefined;
  return parts.join(", ");
};

interface WiktionaryDefinition {
  definition: string;
  parsedExamples?: { example: string; translation?: string }[];
}

interface WiktionaryEntry {
  partOfSpeech: string;
  definitions: WiktionaryDefinition[];
}

const FORM_OF = /\b(form|person|participle|plural|feminine|masculine|equivalent|inflection|gerund|imperative|indicative|subjunctive)\b.*\bof\b/i;

const parseEntries = (spanish: WiktionaryEntry[]): RemoteEntry[] =>
  spanish.slice(0, 3).map((entry) => {
    const definitions = entry.definitions.filter((definition) => stripHtml(definition.definition));
    const formDefinition = definitions.find((definition) => FORM_OF.test(stripHtml(definition.definition)));
    const lemmaMatch = formDefinition?.definition.match(/href="\/wiki\/([^"#?]+)#Spanish"/);
    const lemma = lemmaMatch ? decodeURIComponent(lemmaMatch[1]).replace(/_/g, " ") : undefined;

    const examples: RemoteExample[] = definitions
      .flatMap((definition) => definition.parsedExamples ?? [])
      .slice(0, 2)
      .map((example) => ({ es: stripHtml(example.example), en: example.translation ? stripHtml(example.translation) : undefined }))
      .filter((example) => example.es);

    return {
      posEl: POS_EL[entry.partOfSpeech] ?? entry.partOfSpeech.toLowerCase(),
      glosses: definitions.slice(0, 3).map((definition) => stripHtml(definition.definition)),
      lemma,
      formEl: formDefinition ? describeFormEl(stripHtml(formDefinition.definition)) : undefined,
      examples,
    };
  });

const fetchJson = async <T,>(url: string): Promise<T | null> => {
  const response = await fetch(url);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Lookup failed with status ${response.status}`);
  return (await response.json()) as T;
};

/** Machine translation Spanish to Greek. Returns `undefined` when nothing useful comes back. */
const translateToGreek = async (text: string): Promise<string | undefined> => {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|el`;
  const data = await fetchJson<{ responseStatus?: number | string; quotaFinished?: boolean; responseData?: { translatedText?: string } }>(url);
  if (!data || data.quotaFinished || Number(data.responseStatus) !== 200) return undefined;
  const translated = data.responseData?.translatedText?.trim();
  if (!translated) return undefined;
  if (translated.toLowerCase() === text.toLowerCase()) return undefined;
  if (/MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(translated)) return undefined;
  return translated;
};

/**
 * Looks `word` up online. Throws on a network failure (the caller shows an offline message);
 * resolves with no entries when Wiktionary does not know the word.
 */
export const lookupRemote = async (word: string): Promise<RemoteLookup> => {
  const key = word.toLowerCase();
  const hit = cachedLookup(key);
  if (hit) return hit;

  const data = await fetchJson<{ es?: WiktionaryEntry[] }>(
    `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(key)}`,
  );
  const entries = data?.es ? parseEntries(data.es) : [];

  const target = entries.find((entry) => entry.lemma)?.lemma ?? key;
  const greek = await translateToGreek(target).catch(() => undefined);

  const firstExample = entries.flatMap((entry) => entry.examples)[0];
  if (firstExample) firstExample.el = await translateToGreek(firstExample.es).catch(() => undefined);

  const result: RemoteLookup = { word: key, entries, greek, fetchedAt: Date.now() };
  memory.set(key, result);
  writeStorage({ ...readStorage(), [key]: result });
  return result;
};
