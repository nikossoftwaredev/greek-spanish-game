import { acceptedForms, normalize, stripAccents, stripLeadingArticle } from "@/lib/game/text";
import type { Unit, VocabGroup } from "@/types/content";

import { unit0 } from "./units/unit-0";
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

/** The same word spelled the same way (ignoring article, accents and "/a" endings) is one card. */
const wordKey = (es: string): string => stripAccents(stripLeadingArticle(normalize(acceptedForms({ es })[0] ?? es)));

/**
 * Adds the whole-book vocabulary (one group per printed page) to a unit. A word that already has a
 * card anywhere in the book (the Léxico pages, an earlier unit, an earlier page) is not added twice,
 * because two cards for one word would split a learner's progress.
 */
const withPageVocab = ({ base, pages, seen }: { base: Unit; pages: VocabGroup[]; seen: Set<string> }): Unit => {
  const extra = pages
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const key = wordKey(item.es);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }),
    }))
    .filter((group) => group.items.length > 0);
  return { ...base, vocab: [...base.vocab, ...extra] };
};

const BASE: [Unit, VocabGroup[]][] = [
  [unit0, []],
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

const seenWords = new Set(BASE.flatMap(([unit]) => unit.vocab.flatMap((group) => group.items.map((item) => wordKey(item.es)))));

/** Every unit of "Aula Internacional Plus 1", in book order. */
export const UNITS: Unit[] = BASE.map(([base, pages]) => withPageVocab({ base, pages, seen: seenWords }));

export const VERBS = verbs;
