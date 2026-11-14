"use client";

import { CircleCheck, FileUp, Loader2, Trash2, TriangleAlert } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { PDF_BOOKS, type PdfBook } from "@/lib/pdf/books";
import { usePdfStore } from "@/lib/stores/pdf-store";

interface PdfBookLoaderProps {
  book: PdfBook;
  /** Shown above the button when the book is not loaded yet. */
  explain?: boolean;
}

/** Lets the learner pick their own copy of a book. The file is read and kept on this device only. */
export const PdfBookLoader = ({ book, explain = false }: PdfBookLoaderProps) => {
  const loaded = usePdfStore((state) => state.loaded[book]);
  const pages = usePdfStore((state) => state.pages[book]);
  const temporary = usePdfStore((state) => state.temporary[book]);
  const attach = usePdfStore((state) => state.attach);
  const detach = usePdfStore((state) => state.detach);
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ tone: "warning" | "error"; text: string } | null>(null);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setMessage(null);
    try {
      const result = await attach({ book, file });
      if (result.warning) setMessage({ tone: "warning", text: result.warning });
    } catch {
      setMessage({ tone: "error", text: "Δεν μπόρεσα να διαβάσω αυτό το αρχείο. Βεβαιώσου ότι είναι το PDF του βιβλίου." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2">
      {!loaded && explain && (
        <p className="text-sm text-muted-foreground">
          Το βιβλίο έχει πνευματικά δικαιώματα, γι αυτό δεν είναι μέσα στην εφαρμογή. Διάλεξε το δικό σου PDF: μένει μόνο σε αυτή τη συσκευή και δεν ανεβαίνει πουθενά.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {loaded && (
          <span className="flex items-center gap-1.5 text-sm font-bold text-success">
            <CircleCheck className="size-4" aria-hidden /> Φορτωμένο{pages ? ` (${pages} σελίδες)` : ""}
          </span>
        )}
        <Button type="button" variant={loaded ? "chunky-outline" : "chunky"} size="sm" disabled={busy} onClick={() => input.current?.click()} icon={busy ? <Loader2 className="animate-spin" /> : <FileUp />}>
          {loaded ? "Άλλο αρχείο" : `Φόρτωσε το ${PDF_BOOKS[book].shortTitle}`}
        </Button>
        {loaded && (
          <Button type="button" variant="ghost" size="sm" onClick={() => detach(book)} icon={<Trash2 />}>
            Αφαίρεση
          </Button>
        )}
        <input ref={input} type="file" accept="application/pdf,.pdf" className="hidden" onChange={(event) => {
          handleFile(event.target.files?.[0]);
          event.target.value = "";
        }} />
      </div>

      {busy && <p className="text-xs text-muted-foreground">Διαβάζω το αρχείο, μπορεί να πάρει λίγα δευτερόλεπτα αν είναι μεγάλο…</p>}
      {temporary && loaded && <p className="text-xs text-muted-foreground">Η συσκευή δεν επέτρεψε αποθήκευση, οπότε το βιβλίο θα χρειαστεί να φορτωθεί ξανά την επόμενη φορά.</p>}
      {message && (
        <p className={message.tone === "error" ? "flex gap-1.5 text-sm text-destructive" : "flex gap-1.5 text-sm text-foreground"}>
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden /> {message.text}
        </p>
      )}
    </div>
  );
};
