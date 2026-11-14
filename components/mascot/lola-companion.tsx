"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/general/utils";
import { lolaGreeting } from "@/lib/mascot/lines";
import { useSettingsStore } from "@/lib/stores/settings-store";

import { AskLola } from "./ask-lola";
import type { LolaMood } from "./lola";
import { SpeechBubble } from "./speech-bubble";

interface LolaFooterStageProps {
  mood: LolaMood;
  /** Changes with every answer so her pose animates again. */
  animateKey: string | number;
  className?: string;
  children: React.ReactNode;
}

/**
 * The content of a fixed footer (answer feedback, lesson steps, flashcards) with Lola standing at
 * its left, feet on the bottom of the screen. Her head can rise above the footer; the content makes
 * room for her. With the mascot switched off it is just the centred container.
 */
export const LolaFooterStage = ({ mood, animateKey, className, children }: LolaFooterStageProps) => {
  const mascot = useSettingsStore((state) => state.mascot);

  return (
    <div className={cn("relative mx-auto w-full max-w-2xl px-4 py-4", mascot && "pl-24", className)}>
      {mascot && (
        <div className="pointer-events-none absolute bottom-0 left-3">
          <AskLola key={animateKey} body="full" mood={mood} badge className="h-32 w-auto sm:h-36" />
        </div>
      )}
      {children}
    </div>
  );
};

/**
 * Lola waiting in the bottom corner of the app pages, above the phone navigation bar. When a page
 * opens she says something about it in a speech bubble that fades away by itself.
 */
export const LolaCorner = () => {
  const mascot = useSettingsStore((state) => state.mascot);
  const pathname = usePathname();
  if (!mascot) return null;
  const greeting = lolaGreeting(pathname);

  return (
    <div className="pointer-events-none fixed right-2 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 flex items-start gap-3 md:right-6 md:bottom-4">
      <div key={pathname} className="mt-2 max-w-48 motion-reduce:hidden motion-safe:animate-bubble-life">
        <SpeechBubble tone={greeting.mood === "annoyed" ? "loud" : "calm"} tail="right" className="px-3 py-2">
          <p className="font-es text-lg leading-tight font-bold italic">{greeting.es}</p>
          {greeting.el && <p className="text-xs leading-snug font-bold">{greeting.el}</p>}
        </SpeechBubble>
      </div>
      <AskLola body="full" mood={greeting.mood} badge className="h-32 w-auto md:h-44" />
    </div>
  );
};
