import { VERBS } from "@/content";
import { ALL_VOCAB, type FlatVocab,VERB_BY_ID } from "@/lib/content/selectors";
import { acceptedForms, normalize, stripAccents, stripLeadingArticle } from "@/lib/game/text";
import { FUNCTION_WORDS, type FunctionWord } from "@/lib/lookup/function-words";
import type { Verb } from "@/types/content";

export type VerbFormKind = "infinitive" | "present" | "participle";

export interface VerbFormMatch {
  verbId: string;
  kind: VerbFormKind;
  /** Index 0 to 5 for the present tense. */
  person?: number;
}

export interface LocalLookup {
  vocab: FlatVocab[];
  verbForms: VerbFormMatch[];
  functionWord?: FunctionWord;
}

export const PERSON_EL = [
  "1ο ενικό (εγώ)",
  "2ο ενικό (εσύ)",
  "3ο ενικό (αυτός, αυτή, usted)",
  "1ο πληθυντικό (εμείς)",
  "2ο πληθυντικό (εσείς, vosotros)",
  "3ο πληθυντικό (αυτοί, αυτές, ustedes)",
];

type Index<T> = Map<string, T[]>;

interface Indexes {
  vocabStrict: Index<FlatVocab>;
  vocabLoose: Index<FlatVocab>;
  verbStrict: Index<VerbFormMatch>;
  verbLoose: Index<VerbFormMatch>;
}

let cached: Indexes | undefined;

const add = <T,>({ index, key, value }: { index: Index<T>; key: string; value: T }) => {
  if (!key) return;
  const list = index.get(key);
  if (list) {
    if (!list.includes(value)) list.push(value);
  } else index.set(key, [value]);
};

const addVerbForm = ({ indexes, verb, form, match }: { indexes: Indexes; verb: Verb; form: string; match: VerbFormMatch }) => {
  const key = normalize(form);
  add({ index: indexes.verbStrict, key, value: match });
  add({ index: indexes.verbLoose, key: stripAccents(key), value: match });
  const last = key.split(" ").pop();
  if (last && last !== key) {
    add({ index: indexes.verbStrict, key: last, value: match });
    add({ index: indexes.verbLoose, key: stripAccents(last), value: match });
  }
  void verb;
};

const build = (): Indexes => {
  const indexes: Indexes = { vocabStrict: new Map(), vocabLoose: new Map(), verbStrict: new Map(), verbLoose: new Map() };

  for (const item of ALL_VOCAB) {
    for (const form of acceptedForms(item)) {
      const key = stripLeadingArticle(normalize(form));
      add({ index: indexes.vocabStrict, key, value: item });
      add({ index: indexes.vocabLoose, key: stripAccents(key), value: item });
    }
  }

  for (const verb of VERBS) {
    addVerbForm({ indexes, verb, form: verb.infinitive, match: { verbId: verb.id, kind: "infinitive" } });
    verb.present.forEach((form, person) =>
      addVerbForm({ indexes, verb, form, match: { verbId: verb.id, kind: "present", person } }),
    );
    if (verb.participle)
      addVerbForm({ indexes, verb, form: verb.participle, match: { verbId: verb.id, kind: "participle" } });
  }

  return indexes;
};

/** Finds what the book itself knows about a tapped word, instantly and offline. */
export const lookupLocal = (word: string): LocalLookup => {
  cached ??= build();
  const key = normalize(word);
  const loose = stripAccents(key);

  const vocab = cached.vocabStrict.get(key) ?? cached.vocabLoose.get(loose) ?? [];
  const verbForms = cached.verbStrict.get(key) ?? cached.verbLoose.get(loose) ?? [];
  const functionWord = FUNCTION_WORDS[key];

  return { vocab, verbForms, functionWord };
};

export const verbOf = (match: VerbFormMatch): Verb | undefined => VERB_BY_ID.get(match.verbId);
