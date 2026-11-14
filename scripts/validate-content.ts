import { UNITS, VERBS } from "../content";
import { GU_UNITS } from "../content/gramatica";
import { GU_PRACTICE } from "../content/gramatica/practice";
import { PHRASEBOOK } from "../content/phrasebook";

/**
 * Sanity checks for the course content: unique ids, drills that can be answered, verbs that exist,
 * and the project's "no em dash" writing rule. Run with `pnpm validate:content`.
 */

const errors: string[] = [];
const fail = (message: string) => errors.push(message);

const seenVocab = new Set<string>();
const verbIds = new Set<string>();

for (const verb of VERBS) {
  if (verbIds.has(verb.id)) fail(`Duplicate verb id: ${verb.id}`);
  verbIds.add(verb.id);
  if (verb.present.length !== 6) fail(`Verb ${verb.id} must have 6 present forms`);
  if (verb.present.some((form) => !form.trim())) fail(`Verb ${verb.id} has an empty form`);
}

const unitIds = new Set<number>();
for (const unit of UNITS) {
  if (unitIds.has(unit.id)) fail(`Duplicate unit id: ${unit.id}`);
  unitIds.add(unit.id);

  const groupIds = new Set<string>();
  for (const group of unit.vocab) {
    if (groupIds.has(group.id)) fail(`Unit ${unit.id}: duplicate group id ${group.id}`);
    groupIds.add(group.id);
    if (group.page !== undefined) {
      if (group.page < unit.pages.start || group.page > unit.pages.end) fail(`Unit ${unit.id}: group ${group.id} has page ${group.page} outside ${unit.pages.start}-${unit.pages.end}`);
      if (/^p\d+$/.test(group.id) && group.id !== `p${group.page}`) fail(`Unit ${unit.id}: group ${group.id} does not match its page ${group.page}`);
    }
    if (/^p\d+$/.test(group.id) && group.page === undefined) fail(`Unit ${unit.id}: page group ${group.id} has no page`);
    for (const item of group.items) {
      if (seenVocab.has(item.id)) fail(`Duplicate vocabulary id: ${item.id}`);
      seenVocab.add(item.id);
      if (!item.id.startsWith(`u${unit.id}-`)) fail(`Vocabulary id ${item.id} should start with u${unit.id}-`);
      if (!item.es.trim() || !item.el.trim()) fail(`Vocabulary ${item.id} has empty text`);
    }
  }

  const lessonIds = new Set<string>();
  for (const lesson of unit.grammar) {
    if (lessonIds.has(lesson.id)) fail(`Unit ${unit.id}: duplicate lesson id ${lesson.id}`);
    lessonIds.add(lesson.id);
    const drillIds = new Set<string>();
    for (const drill of lesson.drills) {
      const where = `Unit ${unit.id} / ${lesson.id} / ${drill.id}`;
      if (drillIds.has(drill.id)) fail(`${where}: duplicate drill id`);
      drillIds.add(drill.id);
      if (drill.type === "choice" && !drill.options.includes(drill.answer)) fail(`${where}: answer is not one of the options`);
      if (drill.type === "choice" && new Set(drill.options).size !== drill.options.length) fail(`${where}: repeated option`);
      if (drill.type === "cloze" && drill.textEs.split("___").length !== 2) fail(`${where}: cloze needs exactly one ___`);
      if (drill.type === "order" && drill.solution.length < 2) fail(`${where}: order solution is too short`);
      if (drill.type === "order") {
        const pool = [...drill.solution, ...(drill.distractors ?? [])].map((word) => word.toLowerCase().replace(/[¿?¡!.,]/g, ""));
        for (const order of drill.alternatives ?? []) {
          const left = [...pool];
          for (const word of order.map((w) => w.toLowerCase().replace(/[¿?¡!.,]/g, ""))) {
            const at = left.indexOf(word);
            if (at === -1) fail(`${where}: alternative uses "${word}" which is not among the tiles`);
            else left.splice(at, 1);
          }
        }
      }
    }
  }

  for (const verbId of unit.verbIds) if (!verbIds.has(verbId)) fail(`Unit ${unit.id}: unknown verb id "${verbId}"`);
}

// ---- Gramática de uso: 107 units, each a lesson with drills and exercise descriptions
const guNumbers = new Set<number>();
for (const unit of GU_UNITS) {
  const where = `Gramática de uso ${unit.number}`;
  if (guNumbers.has(unit.number)) fail(`${where}: duplicate unit`);
  guNumbers.add(unit.number);
  if (unit.id !== `u${unit.number}`) fail(`${where}: id should be u${unit.number}`);
  if (unit.page !== 10 + 2 * unit.number) fail(`${where}: page should be ${10 + 2 * unit.number}`);
  if (unit.exercisesEl.length === 0) fail(`${where}: no exercise descriptions`);
  if (unit.rules.length < 2) fail(`${where}: fewer than 2 rules`);
  if (unit.drills.length < 6) fail(`${where}: fewer than 6 drills`);
  const drillIds = new Set<string>();
  for (const drill of unit.drills) {
    const here = `${where} / ${drill.id}`;
    if (drillIds.has(drill.id)) fail(`${here}: duplicate drill id`);
    drillIds.add(drill.id);
    if (drill.type === "choice" && !drill.options.includes(drill.answer)) fail(`${here}: answer is not one of the options`);
    if (drill.type === "choice" && new Set(drill.options).size !== drill.options.length) fail(`${here}: repeated option`);
    if (drill.type === "cloze" && drill.textEs.split("___").length !== 2) fail(`${here}: cloze needs exactly one ___`);
    if (drill.type === "order" && drill.solution.length < 2) fail(`${here}: order solution is too short`);
    if (drill.type === "order") {
      const pool = [...drill.solution, ...(drill.distractors ?? [])].map((word) => word.toLowerCase().replace(/[¿?¡!.,]/g, ""));
      for (const order of drill.alternatives ?? []) {
        const left = [...pool];
        for (const word of order.map((w) => w.toLowerCase().replace(/[¿?¡!.,]/g, ""))) {
          const at = left.indexOf(word);
          if (at === -1) fail(`${here}: alternative uses "${word}" which is not among the tiles`);
          else left.splice(at, 1);
        }
      }
    }
  }

  // every numbered exercise of the book must be playable on its own: at least 4 drills each
  const perExercise = new Array<number>(unit.exercisesEl.length + 1).fill(0);
  for (const drill of unit.drills) {
    const here = `${where} / ${drill.id}`;
    if (drill.exercise === undefined) fail(`${here}: not assigned to a book exercise`);
    else if (drill.exercise < 1 || drill.exercise > unit.exercisesEl.length) fail(`${here}: exercise ${drill.exercise} does not exist (the unit has ${unit.exercisesEl.length})`);
    else perExercise[drill.exercise]++;
  }
  for (let n = 1; n <= unit.exercisesEl.length; n++) if (perExercise[n] < 4) fail(`${where}.${n}: only ${perExercise[n]} drills, needs at least 4`);

  const practice = GU_PRACTICE[unit.number];
  if (practice) {
    for (const id of Object.keys(practice.tags)) if (!unit.drills.some((drill) => drill.id === id)) fail(`${where}: practice tags an unknown drill "${id}"`);
    for (const drill of practice.extra) if (!/^x\d+$/.test(drill.id)) fail(`${where} / ${drill.id}: extra drill ids must be x1, x2...`);
  }
}
for (let n = 1; n <= 107; n++) if (GU_UNITS.length > 0 && !guNumbers.has(n)) fail(`Gramática de uso: unit ${n} is missing`);

const everything = JSON.stringify({ UNITS, VERBS, GU_UNITS, PHRASEBOOK });
if (everything.includes("—")) fail("An em dash was found in the content");
if (/\s--\s/.test(everything)) fail("A double hyphen used as a dash was found in the content");

const words = seenVocab.size;
const drills = UNITS.reduce((sum, unit) => sum + unit.grammar.reduce((s, lesson) => s + lesson.drills.length, 0), 0);
const guDrills = GU_UNITS.reduce((sum, unit) => sum + unit.drills.length, 0);
console.log(`Aula: ${UNITS.length} units, ${words} words, ${drills} grammar drills, ${VERBS.length} verbs`);
console.log(`Gramática de uso: ${GU_UNITS.length} units, ${guDrills} drills`);

if (errors.length > 0) {
  console.error(`\n${errors.length} problem(s):`);
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}
console.log("Content is valid.");
