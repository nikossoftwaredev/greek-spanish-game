import { create } from "zustand";

import type { LolaLine } from "@/lib/mascot/lines";

interface LolaStore {
  /** What she is saying now, shown in the speech bubble next to her. */
  line: LolaLine | null;
  /** Changes with every `say`, so the bubble and the voice react even to the same line twice. */
  seq: number;
  /** The height of the game screen's bottom bar, so she can stand right above it instead of over the exercise. 0 outside games. */
  footerHeight: number;
  /** Whether the current line is read aloud (greetings are not). */
  speak: boolean;
  say: (line: LolaLine, options?: { speak?: boolean }) => void;
  clear: () => void;
  setFooterHeight: (value: number) => void;
}

/** Not persisted: it is only what she says right now. */
export const useLolaStore = create<LolaStore>((set) => ({
  line: null,
  seq: 0,
  footerHeight: 0,
  speak: true,
  say: (line, options) => set((state) => ({ line, seq: state.seq + 1, speak: options?.speak ?? true })),
  clear: () => set({ line: null }),
  setFooterHeight: (value) => set({ footerHeight: value }),
}));
