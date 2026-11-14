"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Loader2, Minus, Plus } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PDF_BOOKS, type PdfBook } from "@/lib/pdf/books";
import { getPdfBlob, getPdfDocument } from "@/lib/pdf/document";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { usePdfStore } from "@/lib/stores/pdf-store";

import { PdfBookLoader } from "./pdf-book-loader";

export const PDF_VIEWER_DIALOG = "pdf-viewer";

interface ViewerData {
  book: PdfBook;
  /** PDF page (1 is the cover). */
  page: number;
}

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 3;

const ViewerBody = ({ book, startPage }: { book: PdfBook; startPage: number }) => {
  const checked = usePdfStore((state) => state.checked);
  const loaded = usePdfStore((state) => state.loaded[book]);
  const [doc, setDoc] = useState<PDFDocumentProxy | null | undefined>(undefined);
  const [page, setPage] = useState(startPage);
  const [jump, setJump] = useState(String(startPage));
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(0);
  const [renderedKey, setRenderedKey] = useState("");
  const [failed, setFailed] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const total = doc?.numPages ?? 0;
  const key = `${page}:${zoom}:${width}`;
  const rendering = Boolean(doc) && renderedKey !== key;

  const goTo = (next: number) => {
    if (!doc) return;
    const clamped = Math.min(Math.max(1, next), doc.numPages);
    setPage(clamped);
    setJump(String(clamped));
  };

  const changeZoom = (delta: number) => setZoom((value) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round((value + delta) * 10) / 10)));

  const handleOpenNative = async () => {
    const blob = await getPdfBlob(book);
    if (!blob) return;
    window.open(`${URL.createObjectURL(blob)}#page=${page}`, "_blank", "noopener");
  };

  useEffect(() => {
    if (!loaded) return;
    let isMounted = true;
    getPdfDocument(book)
      .then((opened) => {
        if (isMounted) setDoc(opened);
      })
      .catch(() => {
        if (isMounted) setDoc(null);
      });
    return () => {
      isMounted = false;
    };
  }, [book, loaded]);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setWidth(Math.round(element.clientWidth)));
    observer.observe(element);
    return () => observer.disconnect();
  }, [doc]);

  useEffect(() => {
    if (!doc || !width || !canvas.current) return;
    const target = canvas.current;
    let isMounted = true;
    let task: { cancel: () => void } | undefined;

    doc
      .getPage(Math.min(Math.max(1, page), doc.numPages))
      .then(async (pdfPage) => {
        const base = pdfPage.getViewport({ scale: 1 });
        const scale = (width / base.width) * zoom;
        const ratio = window.devicePixelRatio || 1;
        const viewport = pdfPage.getViewport({ scale: scale * ratio });
        target.width = Math.floor(viewport.width);
        target.height = Math.floor(viewport.height);
        target.style.width = `${Math.floor(viewport.width / ratio)}px`;
        target.style.height = `${Math.floor(viewport.height / ratio)}px`;
        const render = pdfPage.render({ canvas: target, viewport });
        task = render;
        await render.promise;
        if (isMounted) setRenderedKey(`${page}:${zoom}:${width}`);
      })
      .catch((error: unknown) => {
        const name = (error as { name?: string } | null)?.name;
        if (isMounted && name !== "RenderingCancelledException") setFailed(true);
      });

    return () => {
      isMounted = false;
      task?.cancel();
    };
  }, [doc, page, zoom, width]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement | null)?.tagName === "INPUT") return;
      if (event.key === "ArrowRight") goTo(page + 1);
      if (event.key === "ArrowLeft") goTo(page - 1);
      if (event.key === "+" || event.key === "=") changeZoom(0.2);
      if (event.key === "-") changeZoom(-0.2);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (checked && !loaded)
    return (
      <div className="space-y-4 p-6">
        <DialogTitle className="font-display text-2xl">{PDF_BOOKS[book].title}</DialogTitle>
        <DialogDescription>Για να ανοίγει η σελίδα {page} εδώ, φόρτωσε το βιβλίο σου.</DialogDescription>
        <PdfBookLoader book={book} explain />
      </div>
    );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex flex-wrap items-center gap-2 border-b-2 border-border bg-card px-4 py-3 pr-12">
        <div className="min-w-0 flex-1">
          <DialogTitle className="truncate text-base font-extrabold">{PDF_BOOKS[book].shortTitle}</DialogTitle>
          <DialogDescription className="text-xs">Η σελίδα από το δικό σου PDF, μόνο σε αυτή τη συσκευή</DialogDescription>
        </div>
        <div className="flex items-center gap-1">
          <Button type="button" variant="chunky-outline" size="icon-sm" aria-label="Προηγούμενη σελίδα" disabled={!doc || page <= 1} onClick={() => goTo(page - 1)}>
            <ChevronLeft />
          </Button>
          <form
            className="flex items-center gap-1 text-sm font-bold"
            onSubmit={(event) => {
              event.preventDefault();
              goTo(Number(jump));
            }}
          >
            <input
              value={jump}
              onChange={(event) => setJump(event.target.value.replace(/\D/g, ""))}
              inputMode="numeric"
              aria-label="Αριθμός σελίδας του PDF"
              className="h-8 w-12 rounded-lg border-2 border-border bg-background px-1 text-center tabular-nums"
            />
            <span className="text-muted-foreground tabular-nums">/ {total || "…"}</span>
          </form>
          <Button type="button" variant="chunky-outline" size="icon-sm" aria-label="Επόμενη σελίδα" disabled={!doc || page >= total} onClick={() => goTo(page + 1)}>
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Σμίκρυνση" disabled={zoom <= MIN_ZOOM} onClick={() => changeZoom(-0.2)}>
            <Minus />
          </Button>
          <span className="w-10 text-center text-xs font-bold tabular-nums">{Math.round(zoom * 100)}%</span>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Μεγέθυνση" disabled={zoom >= MAX_ZOOM} onClick={() => changeZoom(0.2)}>
            <Plus />
          </Button>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Άνοιγμα στον δικό σου πρόγραμμα προβολής PDF" title="Άνοιγμα σε νέα καρτέλα" onClick={handleOpenNative}>
            <ExternalLink />
          </Button>
        </div>
      </header>

      <div ref={container} className="relative min-h-0 flex-1 overflow-auto overscroll-contain bg-muted">
        {(doc === undefined || rendering) && !failed && (
          <div className="pointer-events-none absolute inset-x-0 top-4 z-10 flex justify-center" aria-live="polite">
            <span className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-bold shadow-md">
              <Loader2 className="size-4 animate-spin" aria-hidden /> {doc === undefined ? "Ανοίγω το βιβλίο…" : "Φορτώνει η σελίδα…"}
            </span>
          </div>
        )}
        {(failed || doc === null) && (
          <p className="p-6 text-center text-sm text-destructive">Δεν μπόρεσα να ανοίξω αυτή τη σελίδα. Δοκίμασε να φορτώσεις ξανά το βιβλίο από την Πρόοδο.</p>
        )}
        {doc && <canvas ref={canvas} className="mx-auto block bg-white shadow-md" />}
      </div>
    </div>
  );
};

export const PdfViewerDialog = () => {
  const open = useDialogStore((state) => state.currentDialog === PDF_VIEWER_DIALOG);
  const data = useDialogStore((state) => state.dialogData) as ViewerData | null;
  const closeDialog = useDialogStore((state) => state.closeDialog);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(PDF_VIEWER_DIALOG);
      }}
    >
      <DialogContent className="flex h-[94svh] w-[calc(100vw-1rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-4xl">
        {data && <ViewerBody key={`${data.book}:${data.page}`} book={data.book} startPage={data.page} />}
      </DialogContent>
    </Dialog>
  );
};
