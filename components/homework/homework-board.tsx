"use client";

import { ArrowRight, Check, CheckCheck, ClipboardList, MessageSquareText, Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { SourceLink } from "@/components/pdf/source-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { useHydrated } from "@/hooks/use-hydrated";
import { getGuUnit, getUnit, onUnitColor } from "@/lib/content/selectors";
import { todayKey } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { compareByDue } from "@/lib/homework/format";
import { HOMEWORK_KIND_BY_VALUE } from "@/lib/homework/kinds";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { dueStateOf, type HomeworkTask, useHomeworkStore } from "@/lib/stores/homework-store";
import { useProgressStore } from "@/lib/stores/progress-store";

import { CLASS_NOTES_DIALOG } from "./class-notes-dialog";
import { DueChip } from "./due-chip";
import { HOMEWORK_DIALOG } from "./homework-dialog";

interface TaskCardProps {
  task: HomeworkTask;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const toggleDone = useHomeworkStore((state) => state.toggleDone);
  const removeTask = useHomeworkStore((state) => state.removeTask);

  const kind = HOMEWORK_KIND_BY_VALUE.get(task.kind);
  const unit = task.unitId === null ? undefined : getUnit(task.unitId);
  const unitsParam = unit ? `units=${unit.id}&` : "";
  const practiceHref = task.practiceHref ?? `/play/${kind?.mode ?? "mix"}?${unitsParam}hw=${task.id}&back=%2Fhomework`;
  const guUnit = task.gu ? getGuUnit(task.gu.unit) : undefined;
  const doneExercises = useProgressStore((state) => state.doneExercises);

  const handleDelete = () =>
    openDialog(
      CONFIRM_DIALOG,
      { title: "Διαγραφή εργασίας;", description: `Η εργασία «${task.title}» θα σβηστεί οριστικά.`, actionLabel: "Διαγραφή" },
      () => removeTask(task.id),
    );

  return (
    <li
      className={cn(
        "flex gap-3 rounded-3xl border-2 border-border bg-card p-4 shadow-[0_3px_0_0_var(--border)] transition-opacity",
        task.done && "opacity-60",
      )}
    >
      <Checkbox
        checked={task.done}
        onCheckedChange={() => toggleDone(task.id)}
        aria-label={`Ολοκληρώθηκε: ${task.title}`}
        className="mt-1 size-6 rounded-full border-2 border-edge"
      />
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {kind && (
            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-muted-foreground uppercase">
              <kind.icon className="size-3.5" aria-hidden /> {kind.label}
            </span>
          )}
          {unit && (
            <Badge style={{ background: unit.color, color: onUnitColor(unit.color) }} className="border-transparent">
              Κεφ. {unit.id}
            </Badge>
          )}
          <DueChip dueDate={task.dueDate} done={task.done} />
        </div>
        <p className={cn("text-lg leading-snug font-extrabold", task.done && "line-through")}>{task.title}</p>
        {task.reference && <p className="text-sm font-bold text-primary">{task.reference}</p>}
        {task.gu && guUnit && (
          <ul className="space-y-1 rounded-xl bg-muted px-3 py-2 text-sm">
            {task.gu.exercises.map((number) => {
              const exerciseKey = `${task.gu?.unit}.${number}`;
              const exerciseDone = doneExercises.includes(exerciseKey);
              const hasDrills = guUnit.drills.some((drill) => drill.exercise === number);
              return (
                <li key={number} className="flex items-center gap-2">
                  <span className={cn("font-es font-bold tabular-nums", exerciseDone && "text-success")}>{exerciseKey}</span>
                  <span className="min-w-0 flex-1 text-muted-foreground">{guUnit.exercisesEl[number - 1] ?? "Άσκηση του βιβλίου"}</span>
                  {exerciseDone && <Check className="size-4 shrink-0 text-success" aria-label="Έγινε" />}
                  {hasDrills && (
                    <Button asChild variant={exerciseDone ? "chunky-outline" : "chunky"} size="xs" className="shrink-0">
                      <Link href={`/play/grammar?ex=${exerciseKey}&hw=${task.id}&back=%2Fhomework`}>{exerciseDone ? "Ξανά" : "Κάν' την"}</Link>
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {task.notes && <p className="text-sm text-muted-foreground">{task.notes}</p>}

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {!task.done && (
            <Button asChild variant="chunky" size="sm">
              <Link href={practiceHref}>
                Εξάσκηση <ArrowRight />
              </Link>
            </Button>
          )}
          {unit && (
            <Button asChild variant="chunky-outline" size="sm">
              <Link href={`/units/${unit.id}`}>Άνοιγμα κεφαλαίου</Link>
            </Button>
          )}
          {task.gu && (
            <Button asChild variant="chunky-outline" size="sm">
              <Link href={`/gramatica/${task.gu.unit}`}>Θεωρία</Link>
            </Button>
          )}
          {task.source && <SourceLink book={task.source.book} page={task.source.page} label={task.gu ? "Άσκηση στο βιβλίο" : "Σελίδα στο βιβλίο"} />}
          <span className="ml-auto flex gap-1">
            <Button type="button" variant="ghost" size="icon-sm" aria-label="Αλλαγή" onClick={() => openDialog(HOMEWORK_DIALOG, { task })}>
              <Pencil />
            </Button>
            <Button type="button" variant="ghost" size="icon-sm" aria-label="Διαγραφή" onClick={handleDelete}>
              <Trash2 />
            </Button>
          </span>
        </div>
      </div>
    </li>
  );
};

const Group = ({ title, tone, tasks }: { title: string; tone?: string; tasks: HomeworkTask[] }) => {
  if (tasks.length === 0) return null;
  return (
    <section className="space-y-3">
      <h2 className={cn("text-sm font-extrabold tracking-wide uppercase", tone ?? "text-muted-foreground")}>
        {title} <span className="ml-1 rounded-full bg-muted px-2 py-0.5 text-xs text-foreground">{tasks.length}</span>
      </h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export const HomeworkBoard = () => {
  const hydrated = useHydrated();
  const openDialog = useDialogStore((state) => state.openDialog);
  const tasks = useHomeworkStore((state) => state.tasks);
  const clearDone = useHomeworkStore((state) => state.clearDone);

  const today = todayKey();
  const open = tasks.filter((task) => !task.done).sort(compareByDue);
  const done = tasks.filter((task) => task.done).sort((a, b) => (b.doneAt ?? "").localeCompare(a.doneAt ?? ""));
  const byState = (state: ReturnType<typeof dueStateOf>) => open.filter((task) => dueStateOf({ dueDate: task.dueDate, today }) === state);

  const handleClearDone = () =>
    openDialog(
      CONFIRM_DIALOG,
      { title: "Καθαρισμός ολοκληρωμένων;", description: `Θα σβηστούν ${done.length} ολοκληρωμένες εργασίες.`, actionLabel: "Καθαρισμός" },
      clearDone,
    );

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Εργασίες</h1>
          <p className="max-w-xl text-muted-foreground">
            Όταν η καθηγήτρια πει «διαβάστε το κεφάλαιο 3» ή «κάντε την άσκηση 5», γράψε το εδώ και πάτα «Εξάσκηση» για να το δουλέψεις παίζοντας.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Button type="button" variant="chunky" size="xl" onClick={() => openDialog(CLASS_NOTES_DIALOG)} icon={<MessageSquareText />}>
            Τι κάνατε σήμερα;
          </Button>
          <Button type="button" variant="chunky-outline" size="xl" onClick={() => openDialog(HOMEWORK_DIALOG)} icon={<Plus />}>
            Νέα εργασία
          </Button>
        </div>
      </header>

      {!hydrated && (
        <div className="space-y-3">
          <Skeleton className="h-28 rounded-3xl" />
          <Skeleton className="h-28 rounded-3xl" />
        </div>
      )}

      {hydrated && tasks.length === 0 && (
        <div className="flex flex-col items-center gap-4 rounded-[2rem] border-2 border-dashed border-border px-6 py-14 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-primary/12 text-primary">
            <ClipboardList className="size-8" aria-hidden />
          </span>
          <h2 className="text-xl font-extrabold">Δεν έχεις γράψει εργασίες ακόμα</h2>
          <p className="max-w-sm text-muted-foreground">Πρόσθεσε την πρώτη και θα τη βλέπεις στην αρχική με την προθεσμία της.</p>
          <Button type="button" variant="chunky" size="lg" onClick={() => openDialog(HOMEWORK_DIALOG)} icon={<Plus />}>
            Πρόσθεσε εργασία
          </Button>
        </div>
      )}

      {hydrated && tasks.length > 0 && (
        <>
          <Group title="Εκπρόθεσμες" tone="text-destructive" tasks={byState("overdue")} />
          <Group title="Σήμερα" tone="text-primary" tasks={byState("today")} />
          <Group title="Τις επόμενες μέρες" tasks={byState("soon")} />
          <Group title="Αργότερα" tasks={byState("later")} />
          <Group title="Χωρίς προθεσμία" tasks={byState("none")} />

          {open.length === 0 && (
            <p className="flex items-center justify-center gap-2 rounded-3xl bg-success-soft px-4 py-6 text-center font-bold">
              <CheckCheck className="size-5 text-success" aria-hidden /> Όλες οι εργασίες έγιναν. Μπράβο!
            </p>
          )}

          {done.length > 0 && (
            <div className="space-y-3">
              <Group title="Ολοκληρωμένες" tasks={done} />
              <Button type="button" variant="ghost" size="sm" onClick={handleClearDone} icon={<Trash2 />}>
                Καθάρισε τις ολοκληρωμένες
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
