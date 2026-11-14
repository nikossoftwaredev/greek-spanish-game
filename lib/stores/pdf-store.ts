import { create } from "zustand";

import { PDF_BOOK_IDS, PDF_BOOKS, type PdfBook } from "@/lib/pdf/books";
import { forgetDocument, openBlob, rememberInMemory } from "@/lib/pdf/document";
import { deletePdf, readPdf, savePdf } from "@/lib/pdf/storage";

/** Which of the learner's own PDFs are loaded on this device. Nothing here is persisted by zustand: IndexedDB is the source of truth. */
interface PdfStore {
  /** Whether the first look at IndexedDB has finished. */
  checked: boolean;
  loaded: Record<PdfBook, boolean>;
  pages: Partial<Record<PdfBook, number>>;
  /** The file could not be stored and only lasts until the page is closed. */
  temporary: Partial<Record<PdfBook, boolean>>;
  refresh: () => Promise<void>;
  attach: (params: { book: PdfBook; file: File }) => Promise<{ pages: number; warning?: string }>;
  detach: (book: PdfBook) => Promise<void>;
}

export const usePdfStore = create<PdfStore>((set, get) => ({
  checked: false,
  loaded: { aula: false, gu: false },
  pages: {},
  temporary: {},

  refresh: async () => {
    const loaded = { aula: false, gu: false } as Record<PdfBook, boolean>;
    for (const book of PDF_BOOK_IDS) loaded[book] = Boolean(await readPdf(book).catch(() => null)) || get().temporary[book] === true;
    set({ loaded, checked: true });
  },

  attach: async ({ book, file }) => {
    // Opening it first proves the file is a real PDF and tells us how many pages it has.
    const doc = await openBlob(file);
    const pages = doc.numPages;
    await doc.loadingTask.destroy();
    await forgetDocument(book);

    let temporary = false;
    try {
      await savePdf({ book, file });
    } catch {
      rememberInMemory({ book, file });
      temporary = true;
    }

    set((state) => ({
      loaded: { ...state.loaded, [book]: true },
      pages: { ...state.pages, [book]: pages },
      temporary: { ...state.temporary, [book]: temporary },
    }));

    const expected = PDF_BOOKS[book].expectedPages;
    if (pages === expected) return { pages };
    return { pages, warning: `Αυτό το PDF έχει ${pages} σελίδες, ενώ η εφαρμογή περιμένει ${expected}. Αν είναι άλλη έκδοση, οι σελίδες μπορεί να μην ταιριάζουν.` };
  },

  detach: async (book) => {
    await deletePdf(book).catch(() => undefined);
    await forgetDocument(book);
    set((state) => ({
      loaded: { ...state.loaded, [book]: false },
      pages: { ...state.pages, [book]: undefined },
      temporary: { ...state.temporary, [book]: false },
    }));
  },
}));
