import type { PdfBook } from "./books";

/**
 * The learner's own copy of each course book, kept in the browser's IndexedDB. The books are
 * copyrighted, so they are never uploaded anywhere: the file stays on the device it was chosen on.
 */

const DB_NAME = "vamos-pdf";
const STORE = "files";

const openDb = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not available"));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Could not open the PDF storage"));
  });

const run = async <T>({ mode, action }: { mode: IDBTransactionMode; action: (store: IDBObjectStore) => IDBRequest<T> }): Promise<T> => {
  const db = await openDb();
  try {
    return await new Promise<T>((resolve, reject) => {
      const request = action(db.transaction(STORE, mode).objectStore(STORE));
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error("PDF storage request failed"));
    });
  } finally {
    db.close();
  }
};

export const savePdf = async ({ book, file }: { book: PdfBook; file: Blob }): Promise<void> => {
  await run({ mode: "readwrite", action: (store) => store.put(file, book) });
};

export const readPdf = async (book: PdfBook): Promise<Blob | null> => {
  const value = await run<unknown>({ mode: "readonly", action: (store) => store.get(book) });
  return value instanceof Blob ? value : null;
};

export const deletePdf = async (book: PdfBook): Promise<void> => {
  await run({ mode: "readwrite", action: (store) => store.delete(book) });
};
