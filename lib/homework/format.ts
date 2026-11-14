import { todayKey } from "@/lib/game/text";
import { type DueState, dueStateOf } from "@/lib/stores/homework-store";

const DAY_MS = 86_400_000;

/** `YYYY-MM-DD` for today plus `days`. */
export const dayKeyFromNow = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return todayKey(date);
};

const dayNumber = (key: string): number => Math.round(new Date(`${key}T12:00:00`).getTime() / DAY_MS);

const WEEKDAYS = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];

/** "Σήμερα", "Αύριο", "Σε 3 ημέρες", "Εκπρόθεσμο (2 ημέρες)". Empty when there is no due date. */
export const dueLabel = ({ dueDate, today = todayKey() }: { dueDate: string; today?: string }): string => {
  if (!dueDate) return "Χωρίς προθεσμία";
  const diff = dayNumber(dueDate) - dayNumber(today);
  if (diff === 0) return "Σήμερα";
  if (diff === 1) return "Αύριο";
  if (diff === -1) return "Εκπρόθεσμο (χθες)";
  if (diff < 0) return `Εκπρόθεσμο (${-diff} ημέρες)`;
  if (diff < 7) return `${WEEKDAYS[new Date(`${dueDate}T12:00:00`).getDay()]} (σε ${diff} ημέρες)`;
  const [year, month, day] = dueDate.split("-");
  return `${day}/${month}/${year}`;
};

export const dueTone = ({ dueDate, today = todayKey() }: { dueDate: string; today?: string }): DueState =>
  dueStateOf({ dueDate, today });

/** Sorts open tasks by how soon they are due: overdue first, no due date last. */
export const compareByDue = (a: { dueDate: string; createdAt: string }, b: { dueDate: string; createdAt: string }): number => {
  if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
  if (a.dueDate) return -1;
  if (b.dueDate) return 1;
  return b.createdAt.localeCompare(a.createdAt);
};
