import type { GuUnit } from "@/types/content";

import { guUnits001To012 } from "./gu-001-012";
import { guUnits013To024 } from "./gu-013-024";
import { guUnits025To036 } from "./gu-025-036";
import { guUnits037To048 } from "./gu-037-048";
import { guUnits049To060 } from "./gu-049-060";
import { guUnits061To072 } from "./gu-061-072";
import { guUnits073To084 } from "./gu-073-084";
import { guUnits085To096 } from "./gu-085-096";
import { guUnits097To107 } from "./gu-097-107";
import { GU_PRACTICE } from "./practice";

/** Tags the unit's drills with the book exercise they practise and adds the exercise-specific ones. */
const withPractice = (unit: GuUnit): GuUnit => {
  const practice = GU_PRACTICE[unit.number];
  if (!practice) return unit;
  return { ...unit, drills: [...unit.drills.map((drill) => ({ ...drill, exercise: practice.tags[drill.id] })), ...practice.extra] };
};

/** All 107 units of the Gramática de uso, in book order. */
export const GU_UNITS: GuUnit[] = [
  ...guUnits001To012,
  ...guUnits013To024,
  ...guUnits025To036,
  ...guUnits037To048,
  ...guUnits049To060,
  ...guUnits061To072,
  ...guUnits073To084,
  ...guUnits085To096,
  ...guUnits097To107,
].map(withPractice).sort((a, b) => a.number - b.number);
