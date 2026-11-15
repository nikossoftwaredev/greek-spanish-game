"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useLolaStore } from "@/lib/stores/lola-store";

const FooterSlot = createContext<HTMLElement | null>(null);

/**
 * Puts `children` into the footer zone of the surrounding `PlayShell`. Use it for the bottom bar
 * (answer feedback, the "Continue" button) wherever its state lives, instead of a fixed footer.
 */
export const PlayFooter = ({ children }: { children: React.ReactNode }) => {
  const slot = useContext(FooterSlot);
  return slot ? createPortal(children, slot) : null;
};

interface PlayShellProps {
  /** The top bar: the exit button, the progress. It never scrolls away. */
  header: React.ReactNode;
  /** The scrolling middle. The bottom bar goes in a `PlayFooter` somewhere in here. */
  children: React.ReactNode;
}

/**
 * The frame of every full-screen game, lesson and flashcard screen, built like a phone app: the top
 * bar and the bottom bar are fixed in place and only the middle scrolls. It fills the visible screen
 * (`dvh`, so a browser's address bar or an installed app's status bar never hides a button) and uses
 * normal flow instead of `position: fixed`, so no transform or animation can drag the bar off the
 * bottom of the screen.
 */
export const PlayShell = ({ header, children }: PlayShellProps) => {
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  // the floating Lola stands on top of this bar, so tell her how tall it is as it changes
  useEffect(() => {
    if (!slot) return;
    const observer = new ResizeObserver(() => useLolaStore.getState().setFooterHeight(slot.offsetHeight));
    observer.observe(slot);
    return () => {
      observer.disconnect();
      useLolaStore.getState().setFooterHeight(0);
    };
  }, [slot]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <header className="safe-top shrink-0">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 pt-4 pb-3">{header}</div>
      </header>
      <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <FooterSlot value={slot}>
          <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-4 pt-5 pb-12">{children}</div>
        </FooterSlot>
      </main>
      <div ref={setSlot} className="shrink-0" />
    </div>
  );
};
