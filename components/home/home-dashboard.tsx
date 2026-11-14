"use client";

import { ArrowRight, ClipboardList, Flame, Layers, MessageSquareText, Plus, Sparkles, SpellCheck, Star } from "lucide-react";
import Link from "next/link";

import { CLASS_NOTES_DIALOG } from "@/components/homework/class-notes-dialog";
import { DueChip } from "@/components/homework/due-chip";
import { HOMEWORK_DIALOG } from "@/components/homework/homework-dialog";
import { ProgressRing } from "@/components/progress-ring";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UnitCard } from "@/components/unit/unit-card";
import { UNITS } from "@/content";
import { useHydrated } from "@/hooks/use-hydrated";
import { onUnitColor } from "@/lib/content/selectors";
import { masteryForUnits } from "@/lib/game/mastery";
import { todayKey } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { compareByDue } from "@/lib/homework/format";
import { HOMEWORK_KIND_BY_VALUE } from "@/lib/homework/kinds";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useHomeworkStore } from "@/lib/stores/homework-store";
import { computeStreak, useProgressStore } from "@/lib/stores/progress-store";

const TOTAL_LESSONS = UNITS.reduce((sum, unit) => sum + unit.grammar.length, 0);

const ClassUnitPicker = () => {
  const classUnit = useProgressStore((state) => state.classUnit);
  const setClassUnit = useProgressStore((state) => state.setClassUnit);
  const taughtCount = useProgressStore((state) => state.taughtLessons.length);

  return (
    <section className="space-y-3 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]">
      <div>
        <h2 className="text-lg font-extrabold">Σε ποιο κεφάλαιο είναι η τάξη;</h2>
        <p className="text-sm text-muted-foreground">
          Τα παιχνίδια παίρνουν λέξεις και ασκήσεις μόνο μέχρι εδώ, ώστε να μην μαθαίνεις κάτι που δεν έχετε κάνει ακόμα.
        </p>
      </div>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Τρέχον κεφάλαιο της τάξης">
        {UNITS.map((unit) => {
          const selected = unit.id === classUnit;
          return (
            <button
              key={unit.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`Κεφάλαιο ${unit.id}: ${unit.titleEs}`}
              title={unit.titleEs}
              onClick={() => setClassUnit(unit.id)}
              className={cn(
                "grid size-11 cursor-pointer place-items-center rounded-2xl border-2 font-es text-xl font-bold transition-all active:translate-y-0.5",
                selected ? "scale-110 border-foreground shadow-[0_3px_0_0_var(--foreground)]" : "border-transparent opacity-70 hover:opacity-100",
              )}
              style={{ background: unit.color, color: onUnitColor(unit.color) }}
            >
              {unit.id}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-muted px-4 py-3">
        <p className="text-sm">
          <span className="font-extrabold">Γραμματική:</span> έχετε κάνει {taughtCount} από {TOTAL_LESSONS} θέματα.
        </p>
        <Button asChild variant="chunky" size="sm">
          <Link href="/grammar">
            <SpellCheck /> Λίστα γραμματικής
          </Link>
        </Button>
      </div>
    </section>
  );
};

const HomeworkPreview = () => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const tasks = useHomeworkStore((state) => state.tasks);
  const toggleDone = useHomeworkStore((state) => state.toggleDone);

  const open = tasks.filter((task) => !task.done).sort(compareByDue);
  const preview = open.slice(0, 3);

  return (
    <section className="space-y-3 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-lg font-extrabold">
          <ClipboardList className="size-5 text-primary" aria-hidden /> Εργασίες
          {open.length > 0 && <span className="rounded-full bg-primary px-2 text-xs font-extrabold text-primary-foreground">{open.length}</span>}
        </h2>
        <span className="flex gap-1">
          <Button type="button" variant="chunky" size="sm" onClick={() => openDialog(CLASS_NOTES_DIALOG)} icon={<MessageSquareText />}>
            Τι κάνατε σήμερα;
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/homework">
              Όλες <ArrowRight />
            </Link>
          </Button>
        </span>
      </div>

      {preview.length === 0 && (
        <div className="space-y-3 rounded-2xl bg-muted/70 p-4 text-center">
          <p className="text-sm text-muted-foreground">Δεν έχεις εκκρεμείς εργασίες. Όταν η καθηγήτρια ζητήσει κάτι, γράψε το εδώ.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" variant="chunky" onClick={() => openDialog(CLASS_NOTES_DIALOG)} icon={<MessageSquareText />}>
              Τι κάνατε σήμερα;
            </Button>
            <Button type="button" variant="chunky-outline" onClick={() => openDialog(HOMEWORK_DIALOG)} icon={<Plus />}>
              Πρόσθεσε εργασία
            </Button>
          </div>
        </div>
      )}

      <ul className="space-y-2">
        {preview.map((task) => {
          const kind = HOMEWORK_KIND_BY_VALUE.get(task.kind);
          return (
            <li key={task.id} className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background px-3 py-2.5">
              <button
                type="button"
                aria-label={`Σημείωσε ολοκληρωμένο: ${task.title}`}
                onClick={() => toggleDone(task.id)}
                className="size-6 shrink-0 cursor-pointer rounded-full border-2 border-edge bg-card transition-colors hover:border-success hover:bg-success-soft"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{task.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {kind?.label}
                  {task.reference && ` · ${task.reference}`}
                </p>
              </div>
              <DueChip dueDate={task.dueDate} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const HomeDashboard = () => {
  const hydrated = useHydrated();
  const dailyGoal = useProgressStore((state) => state.dailyGoal);
  const xpToday = useProgressStore((state) => state.xpByDay[todayKey()] ?? 0);
  const activeDays = useProgressStore((state) => state.activeDays);
  const cards = useProgressStore((state) => state.cards);
  const classUnit = useProgressStore((state) => state.classUnit);

  const streak = hydrated ? computeStreak(activeDays).current : 0;
  const unitsSoFar = UNITS.filter((unit) => unit.id <= classUnit).map((unit) => unit.id);
  const mastery = masteryForUnits({ unitIds: unitsSoFar, cards: hydrated ? cards : {} });
  const goalPercent = hydrated ? Math.min(100, (xpToday / dailyGoal) * 100) : 0;

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] border-2 border-border bg-card p-6 shadow-[0_5px_0_0_var(--border)] sm:p-8">
        <div className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-primary/10" aria-hidden />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 size-48 rounded-full bg-sun/20" aria-hidden />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          <ProgressRing value={goalPercent} label="Στόχος ημέρας" size={124}>
            <div className="text-center leading-none">
              <Star className="mx-auto mb-1 size-5 fill-sun text-sun-edge" aria-hidden />
              <span className="text-2xl font-extrabold tabular-nums">{hydrated ? xpToday : 0}</span>
              <span className="block text-[0.65rem] font-bold text-muted-foreground">/ {dailyGoal} πόντοι</span>
            </div>
          </ProgressRing>

          <div className="flex-1 space-y-3">
            <div>
              <h1 className="font-es text-4xl leading-tight font-bold italic sm:text-5xl">¡Hola! Ας μάθουμε ισπανικά.</h1>
              <p className="mt-1 text-muted-foreground">
                {streak > 0 ? (
                  <span className="inline-flex items-center gap-1 font-bold text-primary">
                    <Flame className="size-4" aria-hidden /> {streak} {streak === 1 ? "ημέρα" : "ημέρες"} στη σειρά.
                  </span>
                ) : (
                  "Μια μικρή εξάσκηση κάθε μέρα δουλεύει καλύτερα από μια μεγάλη πριν το διαγώνισμα."
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="chunky" size="xl">
                <Link href="/play/mix">
                  <Sparkles /> Ξεκίνα την εξάσκηση
                </Link>
              </Button>
              <Button asChild variant="chunky-outline" size="xl">
                <Link href="/play/flashcards">
                  <Layers /> Επανάληψη
                  {hydrated && mastery.due > 0 && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground tabular-nums">{mastery.due}</span>
                  )}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {!hydrated && <Skeleton className="h-40 rounded-3xl" />}
      {hydrated && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 [&>*]:min-w-0">
          <ClassUnitPicker />
          <HomeworkPreview />
        </div>
      )}

      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <h2 className="font-es text-3xl font-bold">Τα κεφάλαια του βιβλίου</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/units">
              Δες τα όλα <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </section>
    </div>
  );
};
