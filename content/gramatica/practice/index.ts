import type { GuPractice } from "@/types/content";

import { guPractice001To012 } from "./gu-001-012";
import { guPractice013To024 } from "./gu-013-024";
import { guPractice025To036 } from "./gu-025-036";
import { guPractice037To048 } from "./gu-037-048";
import { guPractice049To060 } from "./gu-049-060";
import { guPractice061To072 } from "./gu-061-072";
import { guPractice073To084 } from "./gu-073-084";
import { guPractice085To096 } from "./gu-085-096";
import { guPractice097To107 } from "./gu-097-107";

/** Practice for every unit that has it, by unit number. */
export const GU_PRACTICE: Record<number, GuPractice> = {
  ...guPractice001To012,
  ...guPractice013To024,
  ...guPractice025To036,
  ...guPractice037To048,
  ...guPractice049To060,
  ...guPractice061To072,
  ...guPractice073To084,
  ...guPractice085To096,
  ...guPractice097To107,
};
