"use client";

import { useSettingsStore } from "@/lib/stores/settings-store";

import { AskLola } from "./ask-lola";
import type { LolaMood } from "./lola";

/**
 * Lola standing on the top edge of a fixed footer (answer feedback, lesson steps, flashcards).
 * Put it inside the `fixed` footer: `bottom-full` then rests her feet on the footer's border.
 * `animateKey` changes with every answer so her pose animates again.
 */
export const LolaStanding = ({ mood, animateKey }: { mood: LolaMood; animateKey: string | number }) => {
  const mascot = useSettingsStore((state) => state.mascot);
  if (!mascot) return null;

  return (
    <div className="pointer-events-none absolute bottom-full right-3 z-10 -mb-px">
      <AskLola key={animateKey} body="full" mood={mood} badge className="h-32 w-auto sm:h-40" />
    </div>
  );
};

/** Lola waiting in the bottom corner of the app pages, above the phone navigation bar. */
export const LolaCorner = () => {
  const mascot = useSettingsStore((state) => state.mascot);
  if (!mascot) return null;

  return (
    <div className="pointer-events-none fixed right-2 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 md:right-6 md:bottom-4">
      <AskLola body="full" mood="teaching" badge className="h-32 w-auto md:h-44" />
    </div>
  );
};
