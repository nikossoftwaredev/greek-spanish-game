import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type HomeworkKind = "read" | "exercise" | "vocab" | "grammar" | "verbs" | "other";

export interface HomeworkTask {
  id: string;
  kind: HomeworkKind;
  /** What the teacher asked for, in the learner's words. */
  title: string;
  /** Unit of the book (0 to 9) when the task belongs to one. */
  unitId: number | null;
  /** Where in the book: "σελ. 31, άσκηση 5". */
  reference: string;
  notes: string;
  /** Where "Εξάσκηση" leads, when the task knows (a Gramática de uso unit, the words of some pages). */
  practiceHref?: string;
  /** The page of the book the task is about, for the "see it in the book" button (PDF page). */
  source?: { book: "aula" | "gu"; page: number };
  /** Exercises of the Gramática de uso the task asks for: unit 50, exercises 2 and 4 is `{ unit: 50, exercises: [2, 4] }`. */
  gu?: { unit: number; exercises: number[] };
  /** Due date `YYYY-MM-DD`, or empty when there is none. */
  dueDate: string;
  done: boolean;
  createdAt: string;
  doneAt?: string;
}

export type HomeworkDraft = Omit<HomeworkTask, "id" | "done" | "createdAt" | "doneAt">;

interface HomeworkStore {
  tasks: HomeworkTask[];
  addTask: (draft: HomeworkDraft) => void;
  updateTask: (params: { id: string; draft: HomeworkDraft }) => void;
  toggleDone: (id: string) => void;
  /** Marks a task done (never undoes it), used when its exercises were finished in a game. */
  markDone: (id: string) => void;
  removeTask: (id: string) => void;
  clearDone: () => void;
  replaceAll: (tasks: HomeworkTask[]) => void;
}

const newId = (): string => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

export const useHomeworkStore = create<HomeworkStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (draft) =>
        set((state) => ({
          tasks: [{ ...draft, id: newId(), done: false, createdAt: new Date().toISOString() }, ...state.tasks],
        })),

      updateTask: ({ id, draft }) =>
        set((state) => ({ tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...draft } : task)) })),

      toggleDone: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id !== id) return task;
            if (task.done) return { ...task, done: false, doneAt: undefined };
            return { ...task, done: true, doneAt: new Date().toISOString() };
          }),
        })),

      markDone: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id && !task.done ? { ...task, done: true, doneAt: new Date().toISOString() } : task)),
        })),

      removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),

      clearDone: () => set((state) => ({ tasks: state.tasks.filter((task) => !task.done) })),

      replaceAll: (tasks) => set({ tasks }),
    }),
    {
      name: "vamos:homework:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

export type DueState = "overdue" | "today" | "soon" | "later" | "none";

/** Where a task's due date sits relative to today, comparing `YYYY-MM-DD` keys. */
export const dueStateOf = ({ dueDate, today }: { dueDate: string; today: string }): DueState => {
  if (!dueDate) return "none";
  if (dueDate < today) return "overdue";
  if (dueDate === today) return "today";
  const soon = new Date(`${today}T12:00:00`);
  soon.setDate(soon.getDate() + 3);
  const soonKey = `${soon.getFullYear()}-${String(soon.getMonth() + 1).padStart(2, "0")}-${String(soon.getDate()).padStart(2, "0")}`;
  if (dueDate <= soonKey) return "soon";
  return "later";
};
