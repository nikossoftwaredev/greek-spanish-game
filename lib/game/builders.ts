import { EVERY_LESSON, type FlatLesson, type FlatVocab, lessonByKey, lessonsForUnits, verbsForUnits, vocabForUnits, withArticle } from "@/lib/content/selectors";
import { acceptedForms, sample, shuffle } from "@/lib/game/text";
import type {
  ChoiceExercise,
  Exercise,
  MatchExercise,
  OrderExercise,
  SessionConfig,
  TypeExercise,
} from "@/lib/game/types";
import { isDue, masteryOf, type StoredCard } from "@/lib/srs/fsrs";
import type { SavedWord } from "@/lib/stores/progress-store";
import type { Drill, ExampleSentence, Verb } from "@/types/content";

export interface LearnerSnapshot {
  taughtLessons: string[];
  cards: Record<string, StoredCard>;
  drillStats: Record<string, { right: number; wrong: number }>;
  verbStats: Record<string, { right: number; wrong: number }>;
}

const PERSON_SHORT = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"] as const;
const PERSON_LONG = ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ellos / ellas / ustedes"];

let counter = 0;
const nextId = (prefix: string): string => {
  counter += 1;
  return `${prefix}-${counter}`;
};

const unique = (values: string[]): string[] => [...new Set(values)];

/** Drops words whose Spanish or Greek text already appeared, so a match round never has twins. */
const uniqueByText = (items: FlatVocab[]): FlatVocab[] => {
  const seenEs = new Set<string>();
  const seenEl = new Set<string>();
  return items.filter((item) => {
    const es = withArticle(item);
    if (seenEs.has(es) || seenEl.has(item.el)) return false;
    seenEs.add(es);
    seenEl.add(item.el);
    return true;
  });
};

/** Wrong options for `item`: same group first, then same part of speech, then anything. */
const distractorsFor = ({
  item,
  pool,
  read,
  count = 3,
}: {
  item: FlatVocab;
  pool: FlatVocab[];
  read: (entry: FlatVocab) => string;
  count?: number;
}): string[] => {
  const correct = read(item);
  const others = pool.filter((entry) => entry.id !== item.id && read(entry) !== correct);
  const sameGroup = shuffle(others.filter((entry) => entry.groupId === item.groupId && entry.unitId === item.unitId));
  const samePos = shuffle(others.filter((entry) => entry.pos === item.pos));
  const rest = shuffle(others);
  return unique([...sameGroup, ...samePos, ...rest].map(read)).slice(0, count);
};

const choiceBase = (item: FlatVocab) => ({
  skill: "vocab" as const,
  unitId: item.unitId,
  vocabId: item.id,
});

const esToElChoice = ({ item, pool }: { item: FlatVocab; pool: FlatVocab[] }): ChoiceExercise => ({
  ...choiceBase(item),
  id: nextId("es-el"),
  kind: "choice",
  instructionEl: "Τι σημαίνει;",
  promptText: withArticle(item),
  promptLang: "es",
  options: shuffle([item.el, ...distractorsFor({ item, pool, read: (entry) => entry.el })]),
  optionsLang: "el",
  answer: item.el,
  example: item.example,
});

const elToEsChoice = ({ item, pool }: { item: FlatVocab; pool: FlatVocab[] }): ChoiceExercise => ({
  ...choiceBase(item),
  id: nextId("el-es"),
  kind: "choice",
  instructionEl: "Πώς λέγεται στα ισπανικά;",
  promptText: item.el,
  promptLang: "el",
  options: shuffle([withArticle(item), ...distractorsFor({ item, pool, read: withArticle })]),
  optionsLang: "es",
  answer: withArticle(item),
  example: item.example,
});

const elToEsType = (item: FlatVocab): TypeExercise => ({
  ...choiceBase(item),
  id: nextId("type"),
  kind: "type",
  instructionEl: "Γράψε το στα ισπανικά",
  promptText: item.el,
  promptLang: "el",
  accepted: acceptedForms(item),
  explainEl: item.noteEl,
  example: item.example,
});

const matchRound = ({ items }: { items: FlatVocab[] }): MatchExercise => ({
  id: nextId("match"),
  skill: "vocab",
  kind: "match",
  pairs: shuffle(items).map((item) => ({ id: item.id, es: withArticle(item), el: item.el, vocabId: item.id })),
  elOrder: shuffle(items.map((item) => item.id)),
});

const drillToExercise = ({ drill, lessonKey, unitId }: { drill: Drill; lessonKey: string; unitId?: number }): Exercise => {
  const drillKey = `${lessonKey}:${drill.id}`;
  const base = { skill: "grammar" as const, unitId, drillKey };

  if (drill.type === "choice")
    return {
      ...base,
      id: nextId("drill"),
      kind: "choice",
      instructionEl: "Διάλεξε τη σωστή απάντηση",
      promptText: drill.promptEs,
      promptLang: "es",
      promptHintEl: drill.promptEl,
      options: shuffle(drill.options),
      optionsLang: "es",
      answer: drill.answer,
      explainEl: drill.explainEl,
    };

  if (drill.type === "cloze") {
    const [before, after = ""] = drill.textEs.split("___");
    return {
      ...base,
      id: nextId("drill"),
      kind: "type",
      instructionEl: "Συμπλήρωσε το κενό",
      promptText: "",
      promptLang: "es",
      promptHintEl: drill.hintEl,
      gap: { before, after },
      accepted: [drill.answer, ...(drill.alternatives ?? [])],
      explainEl: drill.explainEl,
    };
  }

  const tiles = shuffle([...drill.solution, ...(drill.distractors ?? [])]);
  const order: OrderExercise = {
    ...base,
    id: nextId("drill"),
    kind: "order",
    promptEl: drill.promptEl,
    tiles,
    solution: drill.solution,
    alternatives: drill.alternatives,
    explainEl: drill.explainEl,
  };
  return order;
};

/** A rule's example sentence is usable as "rebuild it" when it has 3 to 9 words. */
export const isOrderable = (example: ExampleSentence): boolean => {
  const words = example.es.trim().split(/\s+/);
  return words.length >= 3 && words.length <= 9;
};

/** Rebuild a rule's example sentence from its Greek translation (the check after each rule of a lesson). */
export const exampleOrder = ({ example, unitId }: { example: ExampleSentence; unitId?: number }): OrderExercise => {
  const solution = example.es.trim().split(/\s+/);
  return { id: nextId("example"), skill: "grammar", unitId, kind: "order", promptEl: example.el, tiles: shuffle(solution), solution };
};

const conjugationExercise = ({ verb, person }: { verb: Verb; person: number }): TypeExercise => {
  const form = verb.present[person];
  const withoutPronoun = form.split(" ").slice(-1)[0];
  return {
    id: nextId("conj"),
    skill: "verbs",
    kind: "type",
    verbId: verb.id,
    instructionEl: `Κλίνε το ρήμα «${verb.infinitive}» (${verb.el}) στον ενεστώτα`,
    promptText: "",
    promptLang: "es",
    promptHintEl: PERSON_LONG[person],
    gap: { before: `${PERSON_SHORT[person]} `, after: "" },
    accepted: unique([form, withoutPronoun]),
    explainEl: verb.noteEl,
    example: verb.example,
  };
};

const weakness = (stats: { right: number; wrong: number } | undefined): number => {
  if (!stats) return 0.5;
  return (stats.wrong + 1) / (stats.right + stats.wrong + 2);
};

/** Orders vocabulary for study: due cards, then never-seen words, then the rest. */
const prioritize = ({ pool, cards }: { pool: FlatVocab[]; cards: Record<string, StoredCard> }): FlatVocab[] => {
  const now = new Date();
  const due = shuffle(pool.filter((item) => cards[item.id] && isDue({ stored: cards[item.id], now })));
  const fresh = shuffle(pool.filter((item) => !cards[item.id]));
  const rest = shuffle(pool.filter((item) => cards[item.id] && !isDue({ stored: cards[item.id], now })));
  return [...due, ...fresh, ...rest];
};

const exerciseForWord = ({ item, pool, card }: { item: FlatVocab; pool: FlatVocab[]; card?: StoredCard }): Exercise => {
  const mastery = masteryOf(card);
  const canType = item.es.length <= 28;
  const options: Exercise[] = [];

  if (mastery === "new") {
    options.push(esToElChoice({ item, pool }));
    options.push(elToEsChoice({ item, pool }));
  } else if (mastery === "learning") {
    options.push(elToEsChoice({ item, pool }), esToElChoice({ item, pool }));
    if (canType) options.push(elToEsType(item));
  } else {
    if (canType) options.push(elToEsType(item));
    options.push(elToEsChoice({ item, pool }));
  }

  return options[Math.floor(Math.random() * options.length)];
};

export interface BuildParams {
  config: SessionConfig;
  learner: LearnerSnapshot;
  size?: number;
}

const buildMix = ({ config, learner, size = 12 }: BuildParams): Exercise[] => {
  const pageOnly = Boolean(config.pages && config.pages.length > 0);
  const pool = vocabForUnits(config.unitIds, config.pages);
  const taught = config.useTaught && learner.taughtLessons.length > 0 ? lessonsFromKeys(learner.taughtLessons) : [];
  let lessons = lessonsForUnits(config.unitIds);
  if (taught.length > 0) lessons = taught;
  if (pageOnly) lessons = [];
  const verbs = pageOnly ? [] : verbsForUnits(config.unitIds);

  const grammarCount = lessons.length > 0 ? Math.min(4, Math.round(size / 3)) : 0;
  const verbCount = verbs.length > 0 ? 2 : 0;
  const wordCount = Math.max(4, size - grammarCount - verbCount);

  const words = prioritize({ pool, cards: learner.cards }).slice(0, wordCount);
  const exercises: Exercise[] = words.map((item) => exerciseForWord({ item, pool, card: learner.cards[item.id] }));

  const rankedDrills = rankDrills({ lessons, learner });
  sample({ items: rankedDrills.slice(0, grammarCount * 3), count: grammarCount }).forEach((entry) =>
    exercises.push(drillToExercise(entry)),
  );

  sample({ items: verbs, count: verbCount }).forEach((verb) =>
    exercises.push(conjugationExercise({ verb, person: Math.floor(Math.random() * 6) })),
  );

  const mixed = shuffle(exercises);
  // Start gently: the first exercise is always a vocabulary question the learner can answer by tapping.
  const gentleStart = mixed.findIndex((exercise) => exercise.kind === "choice" && exercise.skill === "vocab");
  if (gentleStart > 0) [mixed[0], mixed[gentleStart]] = [mixed[gentleStart], mixed[0]];
  const matchItems = sample({ items: uniqueByText(pool.filter((item) => item.es.length <= 24 && item.el.length <= 28)), count: 5 });
  if (matchItems.length >= 4) mixed.splice(Math.floor(mixed.length / 2), 0, matchRound({ items: matchItems }));
  return mixed;
};

const buildMatch = ({ config, learner }: BuildParams): Exercise[] => {
  const pool = vocabForUnits(config.unitIds, config.pages).filter((item) => item.es.length <= 24 && item.el.length <= 28);
  const ordered = uniqueByText(prioritize({ pool, cards: learner.cards }));
  const rounds: Exercise[] = [];
  for (let start = 0; start + 4 <= ordered.length && rounds.length < 4; start += 6)
    rounds.push(matchRound({ items: ordered.slice(start, start + 6) }));
  return rounds;
};

const buildType = ({ config, learner, size = 12 }: BuildParams): Exercise[] => {
  const pool = vocabForUnits(config.unitIds, config.pages).filter((item) => item.es.length <= 28);
  return prioritize({ pool, cards: learner.cards })
    .slice(0, size)
    .map((item) => elToEsType(item));
};

const buildVerbs = ({ config, learner, size = 12 }: BuildParams): Exercise[] => {
  const verbs = verbsForUnits(config.unitIds);
  if (verbs.length === 0) return [];
  const weights = verbs.map((verb) => weakness(learner.verbStats[verb.id]));
  const exercises: Exercise[] = [];
  for (let i = 0; i < size; i++) {
    let roll = Math.random() * weights.reduce((sum, w) => sum + w, 0);
    let picked = verbs[0];
    for (let v = 0; v < verbs.length; v++) {
      roll -= weights[v];
      if (roll <= 0) {
        picked = verbs[v];
        break;
      }
    }
    exercises.push(conjugationExercise({ verb: picked, person: Math.floor(Math.random() * 6) }));
  }
  return exercises;
};

/** Lessons of either book for a list of keys (`1:genero`, `gu:50`), in book order. */
const lessonsFromKeys = (keys: string[]) => EVERY_LESSON.filter((entry) => keys.includes(entry.key));

/** Every drill of the lessons, the ones the learner gets wrong most often first. */
const rankDrills = ({ lessons, learner }: { lessons: FlatLesson[]; learner: LearnerSnapshot }) => {
  const drills = lessons.flatMap((entry) =>
    entry.lesson.drills.map((drill) => ({
      drill,
      lessonKey: entry.key,
      unitId: entry.book === "aula" ? entry.unitId : undefined,
    })),
  );
  return shuffle(drills).sort(
    (a, b) =>
      weakness(learner.drillStats[`${b.lessonKey}:${b.drill.id}`]) - weakness(learner.drillStats[`${a.lessonKey}:${a.drill.id}`]),
  );
};

const buildGrammar = ({ config, learner }: BuildParams): Exercise[] => {
  if (config.lesson) {
    const entry = lessonByKey(config.lesson);
    if (!entry) return [];
    const exercise = config.exercise ? Number(config.exercise.split(".")[1]) : undefined;
    const drills = exercise === undefined ? entry.lesson.drills : entry.lesson.drills.filter((drill) => drill.exercise === exercise);
    return shuffle(drills)
      .slice(0, 12)
      .map((drill) => drillToExercise({ drill, lessonKey: entry.key, unitId: entry.book === "aula" ? entry.unitId : undefined }));
  }

  let source: FlatLesson[] = lessonsForUnits(config.unitIds);
  if (config.lessons && config.lessons.length > 0) source = lessonsFromKeys(config.lessons);
  else if (config.taught) source = lessonsFromKeys(learner.taughtLessons);

  return shuffle(rankDrills({ lessons: source, learner }).slice(0, 24))
    .slice(0, 12)
    .map((entry) => drillToExercise(entry));
};

/** Builds the exercise list for a session. Flashcards use their own queue, see `buildFlashcards`. */
export const buildSession = (params: BuildParams): Exercise[] => {
  switch (params.config.mode) {
    case "match":
      return buildMatch(params);
    case "type":
      return buildType(params);
    case "verbs":
      return buildVerbs(params);
    case "grammar":
      return buildGrammar(params);
    default:
      return buildMix(params);
  }
};

/** Vocabulary ids for a flashcard session: due reviews first, then a few new words. */
export const buildFlashcards = ({
  unitIds,
  pages,
  cards,
  limitNew = 10,
  limitTotal = 30,
}: {
  unitIds: number[];
  pages?: number[];
  cards: Record<string, StoredCard>;
  limitNew?: number;
  limitTotal?: number;
}): FlatVocab[] => {
  const pool = vocabForUnits(unitIds, pages);
  const now = new Date();
  const due = pool
    .filter((item) => cards[item.id] && isDue({ stored: cards[item.id], now }))
    .sort((a, b) => new Date(cards[a.id].due).getTime() - new Date(cards[b.id].due).getTime());
  const fresh = shuffle(pool.filter((item) => !cards[item.id])).slice(0, limitNew);
  return [...due, ...fresh].slice(0, limitTotal);
};

/** A word saved from the dictionary panel, shaped like book vocabulary so flashcards can show it. */
const savedToVocab = (word: SavedWord): FlatVocab => ({
  id: `saved:${word.id}`,
  es: word.es,
  el: word.el,
  pos: "phrase",
  example: word.example,
  unitId: -1,
  groupId: "saved",
  groupTitleEs: "Mis palabras",
  groupTitleEl: "Οι λέξεις μου",
});

/** Flashcards for the saved words: due ones first, then new ones. */
export const buildSavedFlashcards = ({
  saved,
  cards,
  limit = 30,
}: {
  saved: SavedWord[];
  cards: Record<string, StoredCard>;
  limit?: number;
}): FlatVocab[] => {
  const now = new Date();
  const items = saved.map(savedToVocab);
  const due = items.filter((item) => cards[item.id] && isDue({ stored: cards[item.id], now }));
  const fresh = items.filter((item) => !cards[item.id]);
  return [...due, ...fresh].slice(0, limit);
};
