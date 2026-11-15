import { clamp } from "@/lib/general/utils";
import type { PdfBook } from "@/lib/pdf/books";

/**
 * Zoom maths for the PDF viewer. Zoom is relative to "fit to width": 1 fills the viewer, 2 is twice as wide.
 */

export const MIN_ZOOM = 0.5;
export const MAX_ZOOM = 4;
export const ZOOM_STEP = 0.25;
export const FIT_ZOOM = 1;
export const DOUBLE_TAP_ZOOM = 2.5;
/** The longest side the page canvas may have, in device pixels. Keeps phones from running out of memory. */
const MAX_CANVAS_SIDE = 4096;
const EPSILON = 1e-6;

/** A page point (as a fraction of the page) that has to stay under a screen point while the zoom changes. */
export interface ZoomFocus {
  ax: number;
  ay: number;
  x: number;
  y: number;
}

export const clampZoom = (zoom: number): number => clamp({ value: zoom, min: MIN_ZOOM, max: MAX_ZOOM });

/** The next multiple of the step above or below the current zoom, so a pinch to 137% steps to 150%, not 162%. */
export const stepZoom = ({ zoom, direction }: { zoom: number; direction: 1 | -1 }): number => {
  const steps = zoom / ZOOM_STEP;
  const next = direction === 1 ? Math.floor(steps + EPSILON) + 1 : Math.ceil(steps - EPSILON) - 1;
  return clampZoom(next * ZOOM_STEP);
};

/** Canvas pixels per CSS pixel: sharp on dense screens, but never past the safe canvas size. */
export const canvasPixelRatio = ({ cssWidth, cssHeight }: { cssWidth: number; cssHeight: number }): number =>
  Math.min(window.devicePixelRatio || 1, MAX_CANVAS_SIDE / Math.max(cssWidth, cssHeight, 1));

export const measureFocus = ({ target, x, y }: { target: HTMLElement | null; x: number; y: number }): ZoomFocus | null => {
  if (!target) return null;
  const rect = target.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return null;
  return { ax: (x - rect.left) / rect.width, ay: (y - rect.top) / rect.height, x, y };
};

/** Scrolls so that the page point of `focus` sits under its screen point again, after the page changed size. */
export const alignToFocus = ({ scroller, target, focus }: { scroller: HTMLElement; target: HTMLElement; focus: ZoomFocus }): void => {
  const rect = target.getBoundingClientRect();
  scroller.scrollLeft += rect.left + focus.ax * rect.width - focus.x;
  scroller.scrollTop += rect.top + focus.ay * rect.height - focus.y;
};

/** The last zoom, kept for the visit. A different book starts at fit-to-width again. */
const remembered: { book: PdfBook | null; zoom: number } = { book: null, zoom: FIT_ZOOM };

export const recallZoom = (book: PdfBook): number => (remembered.book === book ? remembered.zoom : FIT_ZOOM);

export const rememberZoom = ({ book, zoom }: { book: PdfBook; zoom: number }): void => {
  remembered.book = book;
  remembered.zoom = zoom;
};
