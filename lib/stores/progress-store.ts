import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { todayKey } from "@/lib/game/text";
import { type CardRating, reviewCard, type StoredCard } from "@/lib/srs/fsrs";
import type { ExampleSentence } from "@/types/content";

export interface SavedWord {
  id: string;
  es: string;
  el: string;
  lemma?: string;
  example?: ExampleSentence;
  addedAt: string;
}

interface RightWrong {
  right: number;
  wrong: number;
}

/** Where the learner stopped in the step-by-step lesson of one grammar topic. */
export interface LessonProgress {
  /** The step to resume at. 0 when the lesson has not been started or was just finished. */
  step: number;
  /** How many steps the lesson has (before the end screen), to show a percentage. */
  total: number;
  /** The lesson was finished at least once. */
  done: boolean;
}

interface ProgressData {
  xp: number;
  xpByDay: Record<string, number>;
  /** Days with at least one finished exercise, `YYYY-MM-DD`. */
  activeDays: string[];
  dailyGoal: number;
  /** The unit the class is working on now. Games draw from units up to this one by default. */
  classUnit: number;
  /** FSRS state of every vocabulary card, keyed by vocabulary id (or `saved:<id>`). */
  cards: Record<string, StoredCard>;
  /** Whether the last answer to each vocabulary card was right: the chapter's "I know it" percentage. */
  wordResults: Record<string, boolean>;
  /** Step-by-step lesson progress by grammar key (`1:genero`, `gu:50`). */
  lessonProgress: Record<string, LessonProgress>;
  drillStats: Record<string, RightWrong>;
  verbStats: Record<string, RightWrong>;
  sessionsDone: number;
  savedWords: SavedWord[];
  /**
   * Grammar topics the class has been taught: Aula lessons as `unitId:lessonId` (`1:genero`),
   * Gramática de uso units as `gu:<number>` (`gu:50`).
   */
  taughtLessons: string[];
  /** Book exercises the learner has finished, written like the homework: "50.2". */
  doneExercises: string[];
}

interface ProgressActions {
  rateCard: (params: { id: string; rating: CardRating }) => void;
  setLessonStep: (params: { key: string; step: number; total: number }) => void;
  completeLesson: (params: { key: string; total: number }) => void;
  addXp: (amount: number) => void;
  recordDrill: (params: { key: string; correct: boolean }) => void;
  recordVerb: (params: { verbId: string; correct: boolean }) => void;
  finishSession: () => void;
  setClassUnit: (unitId: number) => void;
  setDailyGoal: (goal: number) => void;
  toggleTaught: (key: string) => void;
  setTaught: (keys: string[]) => void;
  toggleExercise: (key: string) => void;
  markExercises: (keys: string[]) => void;
  saveWord: (word: Omit<SavedWord, "id" | "addedAt">) => void;
  removeSavedWord: (id: string) => void;
  importData: (data: Partial<ProgressData>) => void;
  resetAll: () => void;
}

export type ProgressStore = ProgressData & ProgressActions;

const INITIAL: ProgressData = {
  xp: 0,
  xpByDay: {},
  activeDays: [],
  dailyGoal: 50,
  classUnit: 1,
  cards: {},
  wordResults: {},
  lessonProgress: {},
  drillStats: {},
  verbStats: {},
  sessionsDone: 0,
  savedWords: [],
  taughtLessons: [],
  doneExercises: [],
};

const bump = (stats: Record<string, RightWrong>, key: string, correct: boolean): Record<string, RightWrong> => {
  const current = stats[key] ?? { right: 0, wrong: 0 };
  return {
    ...stats,
    [key]: correct ? { ...current, right: current.right + 1 } : { ...current, wrong: current.wrong + 1 },
  };
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      ...INITIAL,

      rateCard: ({ id, rating }) =>
        set((state) => ({
          cards: { ...state.cards, [id]: reviewCard({ stored: state.cards[id], rating }) },
          wordResults: { ...state.wordResults, [id]: rating !== "again" },
        })),

      setLessonStep: ({ key, step, total }) =>
        set((state) => ({ lessonProgress: { ...state.lessonProgress, [key]: { step, total, done: state.lessonProgress[key]?.done ?? false } } })),

      completeLesson: ({ key, total }) => set((state) => ({ lessonProgress: { ...state.lessonProgress, [key]: { step: 0, total, done: true } } })),

      addXp: (amount) =>
        set((state) => {
          const today = todayKey();
          return {
            xp: state.xp + amount,
            xpByDay: { ...state.xpByDay, [today]: (state.xpByDay[today] ?? 0) + amount },
            activeDays: state.activeDays.includes(today) ? state.activeDays : [...state.activeDays, today],
          };
        }),

      recordDrill: ({ key, correct }) => set((state) => ({ drillStats: bump(state.drillStats, key, correct) })),

      recordVerb: ({ verbId, correct }) => set((state) => ({ verbStats: bump(state.verbStats, verbId, correct) })),

      finishSession: () => set((state) => ({ sessionsDone: state.sessionsDone + 1 })),

      setClassUnit: (unitId) => set({ classUnit: unitId }),

      setDailyGoal: (goal) => set({ dailyGoal: goal }),

      toggleTaught: (key) =>
        set((state) => ({
          taughtLessons: state.taughtLessons.includes(key)
            ? state.taughtLessons.filter((value) => value !== key)
            : [...state.taughtLessons, key],
        })),

      setTaught: (keys) => set({ taughtLessons: [...new Set(keys)] }),

      toggleExercise: (key) =>
        set((state) => ({
          doneExercises: state.doneExercises.includes(key)
            ? state.doneExercises.filter((value) => value !== key)
            : [...state.doneExercises, key],
        })),

      markExercises: (keys) => set((state) => ({ doneExercises: [...new Set([...state.doneExercises, ...keys])] })),

      saveWord: (word) =>
        set((state) => {
          const exists = state.savedWords.some((saved) => saved.es.toLowerCase() === word.es.toLowerCase());
          if (exists) return state;
          const saved: SavedWord = {
            ...word,
            id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
            addedAt: new Date().toISOString(),
          };
          return { savedWords: [saved, ...state.savedWords] };
        }),

      removeSavedWord: (id) =>
        set((state) => {
          const cards = { ...state.cards };
          delete cards[`saved:${id}`];
          return { savedWords: state.savedWords.filter((word) => word.id !== id), cards };
        }),

      importData: (data) => set({ ...INITIAL, ...data }),

      resetAll: () => set({ ...INITIAL }),
    }),
    {
      name: "vamos:progress:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

/** Consecutive active days up to today (or up to yesterday, so the streak survives until midnight). */
export const computeStreak = (activeDays: string[]): { current: number; longest: number } => {
  if (activeDays.length === 0) return { current: 0, longest: 0 };
  const days = new Set(activeDays);
  const sorted = [...days].sort();

  let longest = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const previous = new Date(`${sorted[i - 1]}T12:00:00`);
    previous.setDate(previous.getDate() + 1);
    if (todayKey(previous) === sorted[i]) run += 1;
    else run = 1;
    if (run > longest) longest = run;
  }

  const cursor = new Date();
  if (!days.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let current = 0;
  while (days.has(todayKey(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { current, longest };
};

/** Everything the learner has saved, for the backup file. */
export const snapshotProgress = (state: ProgressStore): ProgressData => ({
  xp: state.xp,
  xpByDay: state.xpByDay,
  activeDays: state.activeDays,
  dailyGoal: state.dailyGoal,
  classUnit: state.classUnit,
  cards: state.cards,
  wordResults: state.wordResults,
  lessonProgress: state.lessonProgress,
  drillStats: state.drillStats,
  verbStats: state.verbStats,
  sessionsDone: state.sessionsDone,
  savedWords: state.savedWords,
  taughtLessons: state.taughtLessons,
  doneExercises: state.doneExercises,
});
