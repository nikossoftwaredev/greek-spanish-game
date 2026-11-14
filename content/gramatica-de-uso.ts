import { GU_UNITS } from "./gramatica";

/**
 * How the two course books line up. Every unit of the Gramática de uso (107, two PDF pages each,
 * theory then exercises) is a full lesson in `content/gramatica/`; this file only says which units
 * explain the same grammar as each Aula unit, and the other way round.
 */

export interface GramaticaRef {
  number: number;
  /** The unit's title in Spanish. */
  es: string;
  /** The unit's title in Greek. */
  el: string;
  /** PDF page of the unit's theory. */
  page: number;
}

/** The six parts the book is divided into. */
export const GU_GROUPS: { label: string; from: number; to: number }[] = [
  { label: "Unidad 1 a 19", from: 1, to: 19 },
  { label: "Unidad 20 a 39", from: 20, to: 39 },
  { label: "Unidad 40 a 59", from: 40, to: 59 },
  { label: "Unidad 60 a 79", from: 60, to: 79 },
  { label: "Unidad 80 a 99", from: 80, to: 99 },
  { label: "Unidad 100 a 107", from: 100, to: 107 },
];

/** Gramática de uso unit numbers that explain the grammar of each Aula unit. */
const GU_BY_UNIT: Record<number, number[]> = {
  0: [4, 6, 19],
  1: [1, 14, 28, 33, 41, 44, 19, 20, 21],
  2: [4, 5, 6, 7, 47, 48, 49, 50, 39],
  3: [42, 43, 45, 46, 25, 38],
  4: [12, 15, 16, 17, 18, 27, 29, 37],
  5: [13, 17, 18, 30, 55],
  6: [9, 50, 51, 52, 53, 54, 38],
  7: [29, 32, 25, 98],
  8: [45, 46, 25, 94, 95, 96, 97, 40],
  9: [60, 61, 62, 13, 76],
};

/**
 * Aula grammar lessons (`unitId:lessonId`) that cover a Gramática de uso unit, so a unit like 50
 * can point to the matching Aula practice. Units that Aula Plus 1 does not reach (past tenses,
 * imperative...) have no entry.
 */
export const GU_TO_AULA_LESSONS: Record<number, string[]> = {
  1: ["1:genero"],
  2: ["2:genero-sustantivos"],
  4: ["2:articulos"],
  5: ["2:articulos"],
  6: ["2:articulos"],
  7: ["2:articulos"],
  9: ["6:dias-y-frecuencia"],
  12: ["4:demostrativos"],
  13: ["3:describir-y-definir", "9:genero-adjetivos-caracter"],
  14: ["1:genero"],
  15: ["3:superlativo"],
  16: ["3:superlativo"],
  17: ["5:posesivos"],
  18: ["5:posesivos"],
  19: ["0:abecedario-y-numeros"],
  25: ["3:cuantificadores", "8:cuantificadores"],
  26: ["8:cuantificadores"],
  27: ["3:superlativo"],
  28: ["1:pronombres"],
  29: ["7:pronombres-od"],
  32: ["7:pronombres-od"],
  33: ["6:verbos-pronominales"],
  36: ["3:preguntar-y-responder"],
  37: ["4:que-cual-cuesta"],
  38: ["3:preguntar-y-responder"],
  39: ["2:motivos"],
  41: ["1:ser-tener-llamarse"],
  42: ["3:estar"],
  43: ["3:describir-y-definir", "3:estar"],
  44: ["1:ser-tener-llamarse"],
  45: ["3:hay"],
  46: ["3:hay", "3:estar"],
  47: ["2:presente-regulares"],
  48: ["2:presente-regulares"],
  49: ["2:presente-regulares"],
  50: ["6:irregulares-o-ue-e-ie", "6:irregulares-e-i-g"],
  51: ["6:irregulares-o-ue-e-ie", "6:irregulares-e-i-g"],
  52: ["6:secuenciar-acciones"],
  53: ["6:verbos-pronominales"],
  54: ["6:verbos-pronominales"],
  55: ["5:gustar", "5:contrastar-gustos"],
  60: ["9:preterito-perfecto"],
  61: ["9:preterito-perfecto"],
  62: ["9:preterito-perfecto"],
  67: ["4:preferir-ir"],
  76: ["2:querer-infinitivo"],
  77: ["4:tener-que"],
  82: ["9:participio"],
  87: ["6:dias-y-frecuencia"],
  88: ["3:cuantificadores"],
  94: ["8:pedir-ubicacion", "8:dar-ubicacion"],
  95: ["8:pedir-ubicacion", "8:dar-ubicacion"],
  96: ["8:pedir-ubicacion", "8:dar-ubicacion"],
  97: ["8:pedir-ubicacion", "8:dar-ubicacion"],
  98: ["2:motivos"],
  104: ["2:motivos"],
};

export const gramaticaRefsForUnit = (unitId: number): GramaticaRef[] =>
  (GU_BY_UNIT[unitId] ?? [])
    .map((number) => GU_UNITS.find((unit) => unit.number === number))
    .filter((unit) => unit !== undefined)
    .map((unit) => ({ number: unit.number, es: unit.titleEs, el: unit.titleEl, page: unit.page }))
    .sort((a, b) => a.number - b.number);
