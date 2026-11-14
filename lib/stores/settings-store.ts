import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsStore {
  /** Lola reacts to every answer (cheers when right, scolds when wrong). */
  mascot: boolean;
  setMascot: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      mascot: true,
      setMascot: (value) => set({ mascot: value }),
    }),
    {
      name: "vamos:settings:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      // Older versions also stored the speech settings, which no longer exist: only keep what is used.
      partialize: (state) => ({ mascot: state.mascot }),
    },
  ),
);
