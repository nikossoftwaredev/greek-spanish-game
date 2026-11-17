import type { Unit, UnitBase, VocabGroup } from "@/types/content";

import { unit0 } from "./units/unit-0";
import { unit0Pages } from "./units/unit-0-pages";
import { unit1 } from "./units/unit-1";
import { unit1Pages } from "./units/unit-1-pages";
import { unit2 } from "./units/unit-2";
import { unit2Pages } from "./units/unit-2-pages";
import { unit3 } from "./units/unit-3";
import { unit3Pages } from "./units/unit-3-pages";
import { unit4 } from "./units/unit-4";
import { unit4Pages } from "./units/unit-4-pages";
import { unit5 } from "./units/unit-5";
import { unit5Pages } from "./units/unit-5-pages";
import { unit6 } from "./units/unit-6";
import { unit6Pages } from "./units/unit-6-pages";
import { unit7 } from "./units/unit-7";
import { unit7Pages } from "./units/unit-7-pages";
import { unit8 } from "./units/unit-8";
import { unit8Pages } from "./units/unit-8-pages";
import { unit9 } from "./units/unit-9";
import { unit9Pages } from "./units/unit-9-pages";
import { verbs } from "./verbs";

/** Each chapter with its glossary (one group per book page), in book order. */
const BASE: [UnitBase, VocabGroup[]][] = [
  [unit0, unit0Pages],
  [unit1, unit1Pages],
  [unit2, unit2Pages],
  [unit3, unit3Pages],
  [unit4, unit4Pages],
  [unit5, unit5Pages],
  [unit6, unit6Pages],
  [unit7, unit7Pages],
  [unit8, unit8Pages],
  [unit9, unit9Pages],
];

/** Every unit of "Aula Internacional Plus 1", in book order. A word has one card in the whole book, so the glossary files list it once (`validate:content` checks it). */
export const UNITS: Unit[] = BASE.map(([base, vocab]) => ({ ...base, vocab }));

export const VERBS = verbs;
