export type PdfBook = "aula" | "gu";

export interface PdfBookInfo {
  title: string;
  shortTitle: string;
  /** Page count of the PDF the course uses, to warn when someone loads a different edition. */
  expectedPages: number;
}

export const PDF_BOOKS: Record<PdfBook, PdfBookInfo> = {
  aula: { title: "Aula Internacional Plus 1", shortTitle: "Aula", expectedPages: 146 },
  gu: { title: "Gramática de uso del español: Teoría y práctica", shortTitle: "Gramática de uso", expectedPages: 259 },
};

export const PDF_BOOK_IDS: PdfBook[] = ["aula", "gu"];

/**
 * The PDF page of a page printed in Aula. The PDF starts with the cover, so the printed number 22 is
 * PDF page 23. (The Gramática de uso is always addressed by PDF page.)
 */
export const aulaPdfPage = (printedPage: number): number => printedPage + 1;

/** The last page printed in the Aula PDF. The «Más ejercicios» pages (141 and up) are a separate booklet, not in it. */
const AULA_LAST_PRINTED_PAGE = 139;

export const isInAulaPdf = (printedPage: number): boolean => printedPage <= AULA_LAST_PRINTED_PAGE;
