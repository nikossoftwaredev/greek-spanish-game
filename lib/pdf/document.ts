import type { PDFDocumentProxy } from "pdfjs-dist";

import type { PdfBook } from "./books";
import { readPdf } from "./storage";

/**
 * Opens the learner's PDF with pdf.js. pdf.js is imported on demand, so it is downloaded only when
 * someone actually opens a page of a book.
 */

const documents = new Map<PdfBook, Promise<PDFDocumentProxy | null>>();
/** Files that could not be stored (private mode, full disk): kept for this visit only. */
const memoryFiles = new Map<PdfBook, Blob>();

const loadPdfjs = async () => {
  const pdfjs = await import("pdfjs-dist");
  if (!pdfjs.GlobalWorkerOptions.workerPort && !pdfjs.GlobalWorkerOptions.workerSrc)
    pdfjs.GlobalWorkerOptions.workerPort = new Worker(new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url), { type: "module" });
  return pdfjs;
};

export const openBlob = async (blob: Blob): Promise<PDFDocumentProxy> => {
  const pdfjs = await loadPdfjs();
  const data = new Uint8Array(await blob.arrayBuffer());
  return pdfjs.getDocument({ data }).promise;
};

export const rememberInMemory = ({ book, file }: { book: PdfBook; file: Blob }): void => {
  memoryFiles.set(book, file);
};

export const forgetDocument = async (book: PdfBook): Promise<void> => {
  const cached = documents.get(book);
  documents.delete(book);
  memoryFiles.delete(book);
  const doc = await cached?.catch(() => null);
  await doc?.loadingTask.destroy();
};

/** The opened PDF of a book, or `null` when the learner has not loaded it yet. Cached per visit. */
export const getPdfDocument = (book: PdfBook): Promise<PDFDocumentProxy | null> => {
  const cached = documents.get(book);
  if (cached) return cached;

  const pending = (async () => {
    const blob = memoryFiles.get(book) ?? (await readPdf(book).catch(() => null));
    if (!blob) return null;
    return openBlob(blob);
  })();
  documents.set(book, pending);
  pending.then((doc) => {
    if (!doc) documents.delete(book);
  }).catch(() => documents.delete(book));
  return pending;
};

/** The stored file, for opening it in the browser's own PDF viewer. */
export const getPdfBlob = async (book: PdfBook): Promise<Blob | null> => memoryFiles.get(book) ?? (await readPdf(book).catch(() => null));
