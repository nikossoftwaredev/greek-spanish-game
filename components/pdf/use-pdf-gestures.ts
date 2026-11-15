import { type RefObject, useEffect } from "react";

import { clamp } from "@/lib/general/utils";

import { clampZoom, DOUBLE_TAP_ZOOM, FIT_ZOOM, type ZoomFocus } from "./pdf-zoom";

/**
 * Touch, mouse and trackpad gestures for the PDF scroller: one-finger and mouse-drag panning (with momentum on touch),
 * two-finger pinch, double-tap or double-click to toggle zoom, and Ctrl + wheel (also a trackpad pinch) to zoom.
 * The scroller has `touch-action: none`, so every touch arrives as pointer events and the browser never pans or
 * zooms the page itself. Plain wheel scrolling stays native.
 */

interface Point {
  x: number;
  y: number;
}

interface Sample extends Point {
  time: number;
}

interface PanState {
  id: number;
  start: Point;
  scrollLeft: number;
  scrollTop: number;
  startTime: number;
  /** False while the pointer could still turn out to be a tap. */
  moved: boolean;
  samples: Sample[];
}

interface PinchState {
  distance: number;
  zoom: number;
  focus: ZoomFocus | null;
}

interface PdfGesturesOptions {
  scroller: HTMLElement | null;
  zoomRef: RefObject<number>;
  onZoom: (zoom: number, focus: ZoomFocus | null) => void;
  measure: (x: number, y: number) => ZoomFocus | null;
}

const TAP_SLOP = 8;
const TAP_MAX_MS = 400;
const DOUBLE_TAP_MS = 320;
const DOUBLE_TAP_DISTANCE = 32;
/** Only the last stretch of a drag decides how fast the flick was. */
const VELOCITY_WINDOW_MS = 100;
const MOMENTUM_TIME_CONSTANT_MS = 250;
const MOMENTUM_MIN_SPEED = 0.02;
const WHEEL_LINE_PX = 16;
const WHEEL_MAX_DELTA = 25;
const WHEEL_SENSITIVITY = 0.01;
/** Within this much of fit-to-width counts as "fitted" for the double-tap toggle. */
const FIT_TOLERANCE = 0.05;

export const usePdfGestures = ({ scroller, zoomRef, onZoom, measure }: PdfGesturesOptions) => {
  useEffect(() => {
    if (!scroller) return;
    const element = scroller;
    const pointers = new Map<number, Point>();
    let pan: PanState | null = null;
    let pinch: PinchState | null = null;
    let lastTap: (Point & { time: number }) | null = null;
    let momentumFrame = 0;
    let pinchFrame = 0;
    let pendingPinch: { zoom: number; focus: ZoomFocus | null } | null = null;

    const stopMomentum = () => {
      cancelAnimationFrame(momentumFrame);
      momentumFrame = 0;
    };

    const flushPinch = () => {
      pinchFrame = 0;
      if (!pendingPinch) return;
      const { zoom, focus } = pendingPinch;
      pendingPinch = null;
      onZoom(zoom, focus);
    };

    /** At most one zoom update per frame, however fast the fingers report. */
    const schedulePinch = (zoom: number, focus: ZoomFocus | null) => {
      pendingPinch = { zoom, focus };
      if (!pinchFrame) pinchFrame = requestAnimationFrame(flushPinch);
    };

    const pinchPair = () => {
      const [first, second] = [...pointers.values()];
      return { distance: Math.hypot(first.x - second.x, first.y - second.y), x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
    };

    const startPan = ({ id, point, isTap }: { id: number; point: Point; isTap: boolean }) => {
      pan = { id, start: { ...point }, scrollLeft: element.scrollLeft, scrollTop: element.scrollTop, startTime: performance.now(), moved: !isTap, samples: [] };
    };

    const startPinch = () => {
      const { distance, x, y } = pinchPair();
      pan = null;
      lastTap = null;
      pinch = { distance: Math.max(distance, 1), zoom: zoomRef.current, focus: measure(x, y) };
    };

    const startMomentum = (samples: Sample[]) => {
      const last = samples.at(-1);
      const first = samples.find((sample) => last && last.time - sample.time <= VELOCITY_WINDOW_MS);
      if (!last || !first || last.time <= first.time) return;
      let velocityX = (last.x - first.x) / (last.time - first.time);
      let velocityY = (last.y - first.y) / (last.time - first.time);
      let previous = performance.now();

      const tick = (now: number) => {
        const elapsed = now - previous;
        previous = now;
        element.scrollLeft -= velocityX * elapsed;
        element.scrollTop -= velocityY * elapsed;
        const decay = Math.exp(-elapsed / MOMENTUM_TIME_CONSTANT_MS);
        velocityX *= decay;
        velocityY *= decay;
        if (Math.hypot(velocityX, velocityY) < MOMENTUM_MIN_SPEED) momentumFrame = 0;
        else momentumFrame = requestAnimationFrame(tick);
      };
      momentumFrame = requestAnimationFrame(tick);
    };

    const toggleZoomAt = (point: Point) => {
      const fitted = zoomRef.current <= FIT_ZOOM + FIT_TOLERANCE;
      onZoom(fitted ? DOUBLE_TAP_ZOOM : FIT_ZOOM, measure(point.x, point.y));
    };

    const handleTap = (event: PointerEvent) => {
      const point = { x: event.clientX, y: event.clientY };
      const previous = lastTap;
      if (previous && event.timeStamp - previous.time < DOUBLE_TAP_MS && Math.hypot(point.x - previous.x, point.y - previous.y) < DOUBLE_TAP_DISTANCE) {
        lastTap = null;
        toggleZoomAt(point);
      } else {
        lastTap = { ...point, time: event.timeStamp };
      }
    };

    /** A mouse press on the native scrollbar belongs to the scrollbar. */
    const isOnScrollbar = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      return event.clientX - rect.left - element.clientLeft > element.clientWidth || event.clientY - rect.top - element.clientTop > element.clientHeight;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && (event.button !== 0 || isOnScrollbar(event))) return;
      stopMomentum();
      const point = { x: event.clientX, y: event.clientY };
      pointers.set(event.pointerId, point);
      element.setPointerCapture(event.pointerId);
      if (pointers.size === 1) startPan({ id: event.pointerId, point, isTap: true });
      else startPinch();
    };

    const onPointerMove = (event: PointerEvent) => {
      const point = pointers.get(event.pointerId);
      if (!point) return;
      point.x = event.clientX;
      point.y = event.clientY;

      if (pinch) {
        const { distance, x, y } = pinchPair();
        schedulePinch(clampZoom(pinch.zoom * (distance / pinch.distance)), pinch.focus && { ...pinch.focus, x, y });
        return;
      }
      if (!pan || pan.id !== event.pointerId) return;

      const deltaX = event.clientX - pan.start.x;
      const deltaY = event.clientY - pan.start.y;
      if (!pan.moved && Math.hypot(deltaX, deltaY) < TAP_SLOP) return;
      pan.moved = true;
      element.scrollLeft = pan.scrollLeft - deltaX;
      element.scrollTop = pan.scrollTop - deltaY;
      pan.samples.push({ x: event.clientX, y: event.clientY, time: event.timeStamp });
      while (pan.samples.length > 2 && event.timeStamp - pan.samples[0].time > VELOCITY_WINDOW_MS) pan.samples.shift();
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (!pointers.delete(event.pointerId)) return;

      if (pinch) {
        flushPinch();
        if (pointers.size >= 2) {
          startPinch();
          return;
        }
        pinch = null;
        const [rest] = [...pointers.entries()];
        if (rest) startPan({ id: rest[0], point: rest[1], isTap: false });
        return;
      }

      const finished = pan;
      if (!finished || finished.id !== event.pointerId) return;
      pan = null;
      if (event.type === "pointercancel") return;
      if (finished.moved) {
        if (event.pointerType !== "mouse") startMomentum(finished.samples);
      } else if (performance.now() - finished.startTime < TAP_MAX_MS) {
        handleTap(event);
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      const delta = event.deltaY * (event.deltaMode === WheelEvent.DOM_DELTA_LINE ? WHEEL_LINE_PX : 1);
      const clamped = clamp({ value: delta, min: -WHEEL_MAX_DELTA, max: WHEEL_MAX_DELTA });
      onZoom(clampZoom(zoomRef.current * Math.exp(-clamped * WHEEL_SENSITIVITY)), measure(event.clientX, event.clientY));
    };

    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerup", onPointerEnd);
    element.addEventListener("pointercancel", onPointerEnd);
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerup", onPointerEnd);
      element.removeEventListener("pointercancel", onPointerEnd);
      element.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(momentumFrame);
      cancelAnimationFrame(pinchFrame);
    };
  }, [scroller, zoomRef, onZoom, measure]);
};
