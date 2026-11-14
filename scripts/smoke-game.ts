import { UNITS } from "../content";
import { GU_UNITS } from "../content/gramatica";
import { PHRASEBOOK } from "../content/phrasebook";
import { ALL_VOCAB } from "../lib/content/selectors";
import { EVERY_LESSON } from "../lib/content/selectors";
import { buildFlashcards, buildSession } from "../lib/game/builders";
import { buildLessonSteps } from "../lib/game/lesson-steps";
import { acceptedForms, matchAnswer } from "../lib/game/text";
import type { Exercise, SessionMode } from "../lib/game/types";
import { askLocal } from "../lib/lola/ask";

/**
 * Builds many sessions for every mode and unit and checks that each exercise can actually be
 * answered. Run with `pnpm smoke:game`.
 */

const MODES: SessionMode[] = ["mix", "match", "type", "verbs"];
const learner = { cards: {}, drillStats: {}, verbStats: {}, taughtLessons: ['1:genero', '1:pronombres'] };
const problems: string[] = [];
let exercises = 0;

const check = (exercise: Exercise, context: string) => {
  exercises += 1;
  if (!exercise.source) problems.push(`${context}: the exercise does not say where it comes from`);
  if (exercise.kind === "choice") {
    if (!exercise.options.includes(exercise.answer)) problems.push(`${context}: answer missing from options (${exercise.answer})`);
    if (new Set(exercise.options).size !== exercise.options.length) problems.push(`${context}: repeated options ${JSON.stringify(exercise.options)}`);
    if (exercise.options.length < 2) problems.push(`${context}: fewer than 2 options for ${exercise.answer}`);
  }
  if (exercise.kind === "type") {
    if (exercise.accepted.length === 0 || exercise.accepted.some((a) => !a.trim())) problems.push(`${context}: no accepted answers`);
    if (matchAnswer({ typed: exercise.accepted[0], accepted: exercise.accepted }) !== "exact") problems.push(`${context}: first accepted answer does not match itself`);
  }
  if (exercise.kind === "match") {
    if (exercise.pairs.length < 4) problems.push(`${context}: match round with ${exercise.pairs.length} pairs`);
    if (new Set(exercise.pairs.map((p) => p.el)).size !== exercise.pairs.length) problems.push(`${context}: match round has duplicate Greek text`);
    if (new Set(exercise.pairs.map((p) => p.es)).size !== exercise.pairs.length) problems.push(`${context}: match round has duplicate Spanish text`);
  }
  if (exercise.kind === "order") {
    if (exercise.tiles.length < exercise.solution.length) problems.push(`${context}: fewer tiles than solution words`);
  }
};

const unitSets: number[][] = [UNITS.map((u) => u.id), ...UNITS.map((u) => [u.id]), [0, 1], [0, 1, 2, 3]];

for (const unitIds of unitSets) {
  for (const mode of MODES) {
    for (let run = 0; run < 12; run++) {
      const list = buildSession({ config: { mode, unitIds }, learner });
      list.forEach((exercise) => check(exercise, `${mode} units=${unitIds.join(",")}`));
    }
  }
  buildFlashcards({ unitIds, cards: {} });
}

for (let run = 0; run < 12; run++) {
  buildSession({ config: { mode: "grammar", unitIds: [1], taught: true }, learner }).forEach((exercise) => check(exercise, "grammar taught"));
  buildSession({ config: { mode: "mix", unitIds: [0, 1], useTaught: true }, learner }).forEach((exercise) => check(exercise, "mix taught"));
}
const taughtSession = buildSession({ config: { mode: "grammar", unitIds: [1], taught: true }, learner });
if (taughtSession.length === 0) problems.push("The taught-lessons grammar session is empty");
if (taughtSession.some((exercise) => exercise.skill !== "grammar" || !["1:genero", "1:pronombres"].some((key) => exercise.drillKey?.startsWith(key)))) problems.push("The taught session contains drills from lessons that are not ticked");

for (const unit of UNITS) {
  for (const lesson of unit.grammar) {
    const list = buildSession({ config: { mode: "grammar", unitIds: [unit.id], lesson: `${unit.id}:${lesson.id}` }, learner });
    if (list.length === 0) problems.push(`Lesson ${unit.id}:${lesson.id} produced no exercises`);
    list.forEach((exercise) => check(exercise, `grammar ${unit.id}:${lesson.id}`));
  }
}

for (const unit of GU_UNITS) {
  const list = buildSession({ config: { mode: "grammar", unitIds: [], lesson: `gu:${unit.number}` }, learner });
  if (list.length === 0) problems.push(`Gramática de uso ${unit.number} produced no exercises`);
  list.forEach((exercise) => check(exercise, `gu ${unit.number}`));
}
if (GU_UNITS.length > 0) {
  const both = buildSession({ config: { mode: "grammar", unitIds: [], lessons: ["1:genero", `gu:${GU_UNITS[0].number}`] }, learner });
  if (both.length === 0) problems.push("A grammar session over two books is empty");
}

// Every numbered exercise of the Gramática de uso is playable on its own, and only holds its own drills.
for (const unit of GU_UNITS) {
  unit.exercisesEl.forEach((_, index) => {
    const exercise = `${unit.number}.${index + 1}`;
    const list = buildSession({ config: { mode: "grammar", unitIds: [], lesson: `gu:${unit.number}`, exercise }, learner });
    if (list.length < 4) problems.push(`Exercise ${exercise} has only ${list.length} playable drills`);
    const own = unit.drills.filter((drill) => drill.exercise === index + 1).map((drill) => `gu:${unit.number}:${drill.id}`);
    for (const item of list) {
      check(item, `exercise ${exercise}`);
      if (!item.drillKey || !own.includes(item.drillKey)) problems.push(`Exercise ${exercise} contains a drill of another exercise (${item.drillKey})`);
    }
  });
}

// Every lesson of both books builds a step-by-step lesson: intro, rules, a quiz and the end screen.
for (const entry of EVERY_LESSON) {
  const steps = buildLessonSteps({ entry, learner });
  const kinds = steps.map((step) => step.kind);
  if (kinds[0] !== "intro" || kinds[kinds.length - 1] !== "done") problems.push(`Lesson ${entry.key}: steps must start with the intro and end with done`);
  if (kinds.filter((kind) => kind === "rule").length !== entry.lesson.rules.length) problems.push(`Lesson ${entry.key}: not every rule has a step`);
  if (!kinds.includes("quiz")) problems.push(`Lesson ${entry.key}: no quiz step`);
  for (const step of steps) if (step.kind === "check" || step.kind === "quiz") check(step.exercise, `lesson ${entry.key}`);
}

// «Ρώτα τη Λόλα»: every phrase of the phrasebook is found from each way of writing it, and the
// question around a phrase is ignored.
for (const phrase of PHRASEBOOK) {
  for (const text of phrase.el) {
    const found = askLocal(text).phrase;
    if (!found || found.es[0] !== phrase.es[0]) problems.push(`Phrasebook: "${text}" does not find its own phrase (${found?.es[0] ?? "nothing"})`);
  }
  const reverse = askLocal(phrase.es[0]).phrase;
  if (!reverse) problems.push(`Phrasebook: "${phrase.es[0]}" is not found when typed in Spanish`);
  if (phrase.el.length === 0 || phrase.es.length === 0) problems.push(`Phrasebook: an entry has no Greek or no Spanish (${phrase.es[0]})`);
}
if (askLocal("πως ειναι το «ειμαι ετοιμος»").phrase?.es[0] !== "Estoy listo.") problems.push("Ask Lola: the question around a phrase is not ignored");
if (askLocal("πως ειναι το «ειμαι ετοιμος»").match !== "exact") problems.push("Ask Lola: a wrapped question should be an exact match");
if (askLocal("τι σημαίνει tengo hambre").language !== "es") problems.push("Ask Lola: «τι σημαίνει ...» with a Spanish phrase should answer in the other direction");

// Every vocabulary item must produce at least one accepted typed form.
for (const item of ALL_VOCAB) if (acceptedForms(item).length === 0) problems.push(`No accepted forms for ${item.id}`);

console.log(`${exercises} exercises checked`);
if (problems.length > 0) {
  const unique = [...new Set(problems)];
  console.error(`${unique.length} distinct problem(s):`);
  unique.slice(0, 40).forEach((problem) => console.error(` - ${problem}`));
  process.exit(1);
}
console.log("All exercises are answerable.");
