import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** Which language a flashcard shows first: Spanish then Greek, or Greek then Spanish (the harder way round). */
export type CardDirection = "es-el" | "el-es";

interface SettingsStore {
  /** Lola reacts to every answer (cheers when right, scolds when wrong). */
  mascot: boolean;
  /** Greek translations of Spanish sentences are always visible. Off: they appear when the learner asks. */
  showTranslations: boolean;
  /** The side of a flashcard shown first. Remembered, so the learner picks it once. */
  cardDirection: CardDirection;
  setMascot: (value: boolean) => void;
  setShowTranslations: (value: boolean) => void;
  setCardDirection: (value: CardDirection) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      mascot: true,
      showTranslations: false,
      cardDirection: "el-es",
      setMascot: (value) => set({ mascot: value }),
      setShowTranslations: (value) => set({ showTranslations: value }),
      setCardDirection: (value) => set({ cardDirection: value }),
    }),
    {
      name: "vamos:settings:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      // Older versions also stored the speech settings, which no longer exist: only keep what is used.
      partialize: (state) => ({ mascot: state.mascot, showTranslations: state.showTranslations, cardDirection: state.cardDirection }),
    },
  ),
);
