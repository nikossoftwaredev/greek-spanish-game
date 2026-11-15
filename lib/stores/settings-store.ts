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
  /** A "ding" when an answer is right. */
  sounds: boolean;
  /** Lola says her lines aloud, with a Spanish voice of the device (silent when it has none). */
  lolaVoice: boolean;
  /** Where the learner left Lola on the screen, as fractions (0 to 1) of the free space; null is her default corner. */
  lolaPosition: { x: number; y: number } | null;
  setMascot: (value: boolean) => void;
  setSounds: (value: boolean) => void;
  setLolaVoice: (value: boolean) => void;
  setLolaPosition: (value: { x: number; y: number } | null) => void;
  setShowTranslations: (value: boolean) => void;
  setCardDirection: (value: CardDirection) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      mascot: true,
      showTranslations: false,
      cardDirection: "el-es",
      sounds: true,
      lolaVoice: true,
      lolaPosition: null,
      setMascot: (value) => set({ mascot: value }),
      setSounds: (value) => set({ sounds: value }),
      setLolaVoice: (value) => set({ lolaVoice: value }),
      setLolaPosition: (value) => set({ lolaPosition: value }),
      setShowTranslations: (value) => set({ showTranslations: value }),
      setCardDirection: (value) => set({ cardDirection: value }),
    }),
    {
      name: "vamos:settings:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      // Older versions also stored the speech settings, which no longer exist: only keep what is used.
      partialize: (state) => ({
        mascot: state.mascot,
        showTranslations: state.showTranslations,
        cardDirection: state.cardDirection,
        sounds: state.sounds,
        lolaVoice: state.lolaVoice,
        lolaPosition: state.lolaPosition,
      }),
    },
  ),
);
