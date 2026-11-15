"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Loader2, Minus, MoveHorizontal, Plus } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { clamp } from "@/lib/general/utils";
import { PDF_BOOKS, type PdfBook } from "@/lib/pdf/books";
import { getPdfBlob, getPdfDocument } from "@/lib/pdf/document";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { usePdfStore } from "@/lib/stores/pdf-store";

import { PdfBookLoader } from "./pdf-book-loader";
import { alignToFocus, canvasPixelRatio, clampZoom, FIT_ZOOM, MAX_ZOOM, measureFocus, MIN_ZOOM, recallZoom, rememberZoom, stepZoom, type ZoomFocus } from "./pdf-zoom";
import { usePdfGestures } from "./use-pdf-gestures";

export const PDF_VIEWER_DIALOG = "pdf-viewer";

interface ViewerData {
  book: PdfBook;
  /** PDF page (1 is the cover). */
  page: number;
}

interface ZoomView {
  zoom: number;
  /** Set by gestures and buttons: the page point that must stay where it was while the page grows or shrinks. */
  focus: ZoomFocus | null;
}

/** The page the canvas currently holds, and its height relative to its width. */
interface ShownPage {
  page: number;
  aspect: number;
}

/** The canvas is redrawn sharply this long after the zoom stops changing. Until then the browser stretches the old bitmap. */
const RENDER_DEBOUNCE_MS = 160;
const PAGE_PADDING = 8;
const ZOOM_EPSILON = 1e-6;

const ViewerBody = ({ book, startPage }: { book: PdfBook; startPage: number }) => {
  const checked = usePdfStore((state) => state.checked);
  const loaded = usePdfStore((state) => state.loaded[book]);
  const [doc, setDoc] = useState<PDFDocumentProxy | null | undefined>(undefined);
  const [page, setPage] = useState(startPage);
  const [jump, setJump] = useState(String(startPage));
  const [view, setView] = useState<ZoomView>(() => ({ zoom: recallZoom(book), focus: null }));
  const [renderZoom, setRenderZoom] = useState(view.zoom);
  const [width, setWidth] = useState(0);
  const [shown, setShown] = useState<ShownPage | null>(null);
  const [failed, setFailed] = useState(false);
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const pageBox = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const zoomRef = useRef(view.zoom);

  const total = doc?.numPages ?? 0;
  const { zoom } = view;
  const hasShown = shown !== null;
  const displayWidth = Math.round(width * zoom);
  const displayHeight = shown ? Math.round(displayWidth * shown.aspect) : 0;
  const loadingPage = doc !== null && !failed && (doc === undefined || shown?.page !== page);

  const goTo = (next: number) => {
    if (!doc) return;
    const clamped = clamp({ value: next, min: 1, max: doc.numPages });
    setPage(clamped);
    setJump(String(clamped));
    setFailed(false);
    scroller?.scrollTo({ top: 0 });
  };

  /** Applies a new zoom synchronously, so the next gesture event measures the page as it is now. */
  const applyZoom = useCallback(
    (next: number, focus: ZoomFocus | null) => {
      const clamped = clampZoom(next);
      zoomRef.current = clamped;
      rememberZoom({ book, zoom: clamped });
      flushSync(() => setView({ zoom: clamped, focus }));
    },
    [book],
  );

  const measure = useCallback((x: number, y: number) => measureFocus({ target: pageBox.current, x, y }), []);

  /** Buttons and keys zoom around the middle of what is on screen. */
  const zoomTo = (next: number) => {
    if (!scroller) return;
    const rect = scroller.getBoundingClientRect();
    applyZoom(next, measure(rect.left + scroller.clientWidth / 2, rect.top + scroller.clientHeight / 2));
  };

  const stepBy = (direction: 1 | -1) => zoomTo(stepZoom({ zoom: zoomRef.current, direction }));

  const handleOpenNative = async () => {
    const blob = await getPdfBlob(book);
    if (!blob) return;
    window.open(`${URL.createObjectURL(blob)}#page=${page}`, "_blank", "noopener");
  };

  usePdfGestures({ scroller, zoomRef, onZoom: applyZoom, measure });

  useLayoutEffect(() => {
    if (view.focus && scroller && pageBox.current) alignToFocus({ scroller, target: pageBox.current, focus: view.focus });
  }, [view, scroller]);

  useLayoutEffect(() => {
    if (hasShown && scroller) scroller.scrollTo({ left: (scroller.scrollWidth - scroller.clientWidth) / 2 });
  }, [hasShown, scroller]);

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
    if (!scroller) return;
    const observer = new ResizeObserver(() => setWidth(Math.round(scroller.clientWidth)));
    observer.observe(scroller);
    return () => observer.disconnect();
  }, [scroller]);

  useEffect(() => {
    const timer = window.setTimeout(() => setRenderZoom(zoom), RENDER_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [zoom]);

  useEffect(() => {
    const target = canvas.current;
    if (!doc || !width || !target) return;
    let isMounted = true;
    let task: { cancel: () => void } | undefined;
    // Drawn off screen first and copied over in one go, so the page never flashes blank while it is redrawn.
    const buffer = document.createElement("canvas");

    doc
      .getPage(clamp({ value: page, min: 1, max: doc.numPages }))
      .then(async (pdfPage) => {
        const base = pdfPage.getViewport({ scale: 1 });
        const cssScale = (width / base.width) * renderZoom;
        const ratio = canvasPixelRatio({ cssWidth: base.width * cssScale, cssHeight: base.height * cssScale });
        const viewport = pdfPage.getViewport({ scale: cssScale * ratio });
        buffer.width = Math.max(1, Math.floor(viewport.width));
        buffer.height = Math.max(1, Math.floor(viewport.height));
        const render = pdfPage.render({ canvas: buffer, viewport });
        task = render;
        await render.promise;
        if (!isMounted) return;
        target.width = buffer.width;
        target.height = buffer.height;
        target.getContext("2d")?.drawImage(buffer, 0, 0);
        setShown({ page, aspect: base.height / base.width });
        setFailed(false);
      })
      .catch((error: unknown) => {
        const name = (error as { name?: string } | null)?.name;
        if (isMounted && name !== "RenderingCancelledException") setFailed(true);
      });

    return () => {
      isMounted = false;
      task?.cancel();
      buffer.width = 0;
    };
  }, [doc, page, width, renderZoom]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key === "ArrowRight") goTo(page + 1);
      if (event.key === "ArrowLeft") goTo(page - 1);
      if (event.key === "+" || event.key === "=") stepBy(1);
      if (event.key === "-" || event.key === "_") stepBy(-1);
      if (event.key === "0") zoomTo(FIT_ZOOM);
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
          <DialogDescription className="sr-only text-xs sm:not-sr-only">Η σελίδα από το δικό σου PDF, μόνο σε αυτή τη συσκευή</DialogDescription>
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
      </header>

      <div className="relative min-h-0 flex-1 bg-muted">
        <div
          ref={setScroller}
          className="size-full cursor-grab touch-none overflow-auto overscroll-contain select-none [scrollbar-gutter:stable] active:cursor-grabbing"
        >
          {doc && (
            <div className="box-border" style={{ width: Math.max(width, displayWidth), height: displayHeight + PAGE_PADDING * 2, paddingTop: PAGE_PADDING }}>
              <div ref={pageBox} className="mx-auto" style={{ width: displayWidth, height: displayHeight }}>
                <canvas ref={canvas} className="block size-full bg-white shadow-md" />
              </div>
            </div>
          )}
        </div>
        {loadingPage && (
          <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center" aria-live="polite">
            <span className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-bold shadow-md">
              <Loader2 className="size-4 animate-spin" aria-hidden /> {doc === undefined ? "Ανοίγω το βιβλίο…" : "Φορτώνει η σελίδα…"}
            </span>
          </div>
        )}
        {(failed || doc === null) && (
          <p className="pointer-events-none absolute inset-x-0 top-0 p-6 text-center text-sm text-destructive">
            Δεν μπόρεσα να ανοίξω αυτή τη σελίδα. Δοκίμασε να φορτώσεις ξανά το βιβλίο από την Πρόοδο.
          </p>
        )}
      </div>

      <footer className="flex items-center justify-center gap-2 border-t-2 border-border bg-card px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <Button type="button" variant="chunky-outline" size="icon-lg" aria-label="Σμίκρυνση" disabled={zoom <= MIN_ZOOM + ZOOM_EPSILON} onClick={() => stepBy(-1)}>
          <Minus />
        </Button>
        <Button
          type="button"
          variant="chunky-outline"
          size="lg"
          className="w-20 tabular-nums"
          aria-label={`Μεγέθυνση ${Math.round(zoom * 100)}%, πάτα για να χωράει στο πλάτος`}
          onClick={() => zoomTo(FIT_ZOOM)}
        >
          {Math.round(zoom * 100)}%
        </Button>
        <Button type="button" variant="chunky-outline" size="icon-lg" aria-label="Μεγέθυνση" disabled={zoom >= MAX_ZOOM - ZOOM_EPSILON} onClick={() => stepBy(1)}>
          <Plus />
        </Button>
        <Button type="button" variant="chunky-outline" size="icon-lg" aria-label="Προσαρμογή στο πλάτος" title="Προσαρμογή στο πλάτος" disabled={Math.abs(zoom - FIT_ZOOM) < ZOOM_EPSILON} onClick={() => zoomTo(FIT_ZOOM)}>
          <MoveHorizontal />
        </Button>
        <Button type="button" variant="ghost" size="icon-lg" aria-label="Άνοιγμα στον δικό σου πρόγραμμα προβολής PDF" title="Άνοιγμα σε νέα καρτέλα" onClick={handleOpenNative}>
          <ExternalLink />
        </Button>
      </footer>
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
      <DialogContent
        className="flex h-[94svh] w-[calc(100vw-1rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-4xl"
        onOpenAutoFocus={(event) => {
          // The page-number field would take focus and swallow the zoom and page keys, so the dialog itself takes it.
          event.preventDefault();
          (event.currentTarget as HTMLElement | null)?.focus();
        }}
      >
        {data && <ViewerBody key={`${data.book}:${data.page}`} book={data.book} startPage={data.page} />}
      </DialogContent>
    </Dialog>
  );
};
