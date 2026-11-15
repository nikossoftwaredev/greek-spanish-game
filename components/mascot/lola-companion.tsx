"use client";

import { MessageCircleQuestion, Volume2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Translation } from "@/components/translation";
import { Button } from "@/components/ui/button";
import { clamp, cn } from "@/lib/general/utils";
import { lolaGreeting } from "@/lib/mascot/lines";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useLolaStore } from "@/lib/stores/lola-store";
import { useSettingsStore } from "@/lib/stores/settings-store";
import { speakAsLola, speakLine, subscribeVoices, voiceAvailable } from "@/lib/voice";

import { ASK_LOLA_DIALOG } from "./ask-lola-dialog";
import { Lola } from "./lola";
import { SpeechBubble } from "./speech-bubble";

const ASPECT = 200 / 404;
/** A tap shorter than this many pixels and milliseconds is a tap, not a drag. */
const TAP_DISTANCE = 6;
const TAP_TIME = 600;
/** How long a line stays in her bubble. */
const LINE_MS = 14000;

const subscribeResize = (listener: () => void): (() => void) => {
  window.addEventListener("resize", listener);
  return () => window.removeEventListener("resize", listener);
};

/** The window size as one string, so `useSyncExternalStore` can compare snapshots. */
const useViewport = (): { width: number; height: number } => {
  const size = useSyncExternalStore(
    subscribeResize,
    () => `${window.innerWidth}x${window.innerHeight}`,
    () => "390x800",
  );
  const [width, height] = size.split("x").map(Number);
  return { width, height };
};

interface DragState {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  startedAt: number;
  moved: boolean;
  /** Where she was last put while dragging: the pointer-up handler reads this, not a stale render. */
  last: { x: number; y: number };
}

/**
 * Lola, always on screen: she can be dragged anywhere and stays where she is left (on every page),
 * a tap opens «Ρώτα τη Λόλα», and what she says appears in a speech bubble beside her. The bubble
 * goes to whichever side has room and shrinks to fit, so it never runs off the screen.
 */
export const LolaCompanion = () => {
  const mascot = useSettingsStore((state) => state.mascot);
  const stored = useSettingsStore((state) => state.lolaPosition);
  const setLolaPosition = useSettingsStore((state) => state.setLolaPosition);
  const line = useLolaStore((state) => state.line);
  const seq = useLolaStore((state) => state.seq);
  const speak = useLolaStore((state) => state.speak);
  const footerHeight = useLolaStore((state) => state.footerHeight);
  const say = useLolaStore((state) => state.say);
  const clear = useLolaStore((state) => state.clear);
  const openDialog = useDialogStore((state) => state.openDialog);
  const pathname = usePathname();
  const { width: viewWidth, height: viewHeight } = useViewport();
  const hasVoice = useSyncExternalStore(subscribeVoices, voiceAvailable, () => false);

  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const drag = useRef<DragState | null>(null);

  const onPlayScreen = pathname.startsWith("/play");
  const figureHeight = viewWidth >= 640 ? 144 : 128;
  const figureWidth = figureHeight * ASPECT;
  const freeWidth = Math.max(viewWidth - figureWidth, 1);
  const freeHeight = Math.max(viewHeight - figureHeight, 1);

  // Where she is: being dragged, else where she was left, else her corner (higher on game screens, above their bottom bar).
  let position = { x: freeWidth - 8, y: viewHeight - figureHeight - (viewWidth >= 768 ? 16 : 84) };
  if (onPlayScreen) position = { x: freeWidth - 8, y: viewHeight - figureHeight - (footerHeight || 232) - 8 };
  if (stored) position = { x: stored.x * freeWidth, y: stored.y * freeHeight };
  if (dragPosition) position = dragPosition;
  const x = clamp({ value: position.x, min: 0, max: freeWidth });
  const y = clamp({ value: position.y, min: 0, max: freeHeight });

  const bubbleOnLeft = x + figureWidth / 2 > viewWidth / 2;
  const room = bubbleOnLeft ? x - 14 : viewWidth - (x + figureWidth) - 14;
  const bubbleWidth = clamp({ value: room, min: 120, max: 280 });

  // she greets each page, quietly; the lines she says while you practise come from the game itself
  useEffect(() => {
    if (!onPlayScreen) say(lolaGreeting(pathname), { speak: false });
  }, [pathname, onPlayScreen, say]);

  // her voice, and the bubble clearing by itself
  useEffect(() => {
    if (!line) return;
    if (speak) speakLine({ text: line.es, mood: line.mood });
    const timer = setTimeout(clear, LINE_MS);
    return () => clearTimeout(timer);
  }, [line, seq, speak, clear]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, originX: x, originY: y, startedAt: Date.now(), moved: false, last: { x, y } };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || state.pointerId !== event.pointerId) return;
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (!state.moved && Math.hypot(dx, dy) < TAP_DISTANCE) return;
    state.moved = true;
    state.last = { x: clamp({ value: state.originX + dx, min: 0, max: freeWidth }), y: clamp({ value: state.originY + dy, min: 0, max: freeHeight }) };
    setDragPosition(state.last);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || state.pointerId !== event.pointerId) return;
    drag.current = null;
    if (state.moved) {
      setLolaPosition({ x: state.last.x / freeWidth, y: state.last.y / freeHeight });
      setDragPosition(null);
      return;
    }
    if (Date.now() - state.startedAt < TAP_TIME) openDialog(ASK_LOLA_DIALOG);
  };

  if (!mascot) return null;

  return (
    <div
      className={cn("pointer-events-none fixed top-0 left-0 z-40", !dragPosition && "transition-transform duration-200 motion-reduce:transition-none")}
      style={{ transform: `translate(${x}px, ${y}px)`, width: figureWidth, height: figureHeight }}
    >
      {line && (
        <div
          key={seq}
          className="pointer-events-auto absolute top-0"
          style={bubbleOnLeft ? { right: figureWidth + 10, width: bubbleWidth } : { left: figureWidth + 10, width: bubbleWidth }}
        >
          <SpeechBubble tone={line.mood === "angry" || line.mood === "annoyed" ? "loud" : "calm"} tail={bubbleOnLeft ? "right" : "left"} className="space-y-1 px-3 py-2.5">
            {line.es ? (
              <>
                <p className="font-es text-lg leading-tight font-bold wrap-break-word italic">{line.es}</p>
                {line.el && <Translation text={line.el} className="text-sm leading-snug font-bold wrap-break-word text-inherit" />}
              </>
            ) : (
              <p className="text-sm leading-snug font-bold wrap-break-word">{line.el}</p>
            )}
            {hasVoice && line.es && (
              <Button type="button" variant="ghost" size="xs" className="-ml-1 text-inherit" onClick={() => speakAsLola({ text: line.es, mood: line.mood })} icon={<Volume2 />}>
                Άκουσέ τη
              </Button>
            )}
          </SpeechBubble>
        </div>
      )}

      <div
        role="button"
        tabIndex={0}
        aria-label="Ρώτα τη Λόλα. Σύρε με για να με μετακινήσεις."
        title="Πάτα με για να με ρωτήσεις κάτι. Σύρε με όπου θέλεις."
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          drag.current = null;
          setDragPosition(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openDialog(ASK_LOLA_DIALOG);
          }
        }}
        className="pointer-events-auto relative size-full cursor-grab touch-none select-none focus-visible:outline-2 focus-visible:outline-primary active:cursor-grabbing"
      >
        <Lola mood={line?.mood ?? "teaching"} body="full" className="size-full" />
        <span className="absolute top-0 right-0 grid size-6 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-sm" aria-hidden>
          <MessageCircleQuestion className="size-3.5" />
        </span>
      </div>
    </div>
  );
};
