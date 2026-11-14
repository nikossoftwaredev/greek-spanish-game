"use client";

import { Check, ClipboardList, GraduationCap, MessageSquareText, Sparkles, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { dayKeyFromNow } from "@/lib/homework/format";
import { parseNotes } from "@/lib/homework/parse";
import { planFromNotes } from "@/lib/homework/plan";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useHomeworkStore } from "@/lib/stores/homework-store";
import { useProgressStore } from "@/lib/stores/progress-store";

export const CLASS_NOTES_DIALOG = "class-notes";

const DATE_SHORTCUTS = [
  { label: "Αύριο", days: 1 },
  { label: "Σε 2 μέρες", days: 2 },
  { label: "Σε 1 εβδομάδα", days: 7 },
];

const EXAMPLES = [
  { label: "50.2 50.4 51.2 51.4 51.5", field: "homework" as const },
  { label: "μάθε λεξιλόγιο κεφάλαιο 2, σελ. 30-32", field: "homework" as const },
  { label: "κεφάλαιο 2, σελ. 30-31, ενότητα 50", field: "done" as const },
];

const Form = () => {
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const [done, setDone] = useState("");
  const [homework, setHomework] = useState("");
  const [dueDate, setDueDate] = useState(() => dayKeyFromNow(1));

  const plan = useMemo(() => planFromNotes({ done: parseNotes(done), homework: parseNotes(homework), dueDate }), [done, homework, dueDate]);
  const hasEffect = plan.classUnit !== undefined || plan.taught.length > 0 || plan.doneExercises.length > 0 || plan.tasks.length > 0;

  const handleApply = () => {
    const progress = useProgressStore.getState();
    if (plan.classUnit !== undefined) progress.setClassUnit(plan.classUnit);
    if (plan.taught.length > 0) progress.setTaught([...progress.taughtLessons, ...plan.taught.map((item) => item.key)]);
    if (plan.doneExercises.length > 0) progress.markExercises(plan.doneExercises);
    const { addTask } = useHomeworkStore.getState();
    for (const task of plan.tasks) addTask(task);
    closeDialog(CLASS_NOTES_DIALOG);
    toast.success(plan.tasks.length > 0 ? `Πρόσθεσα ${plan.tasks.length} ${plan.tasks.length === 1 ? "εργασία" : "εργασίες"}.` : "Ενημερώθηκε η ύλη της τάξης.");
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 font-display text-2xl">
          <MessageSquareText className="size-6 text-primary" aria-hidden /> Τι κάνατε σήμερα;
        </DialogTitle>
        <DialogDescription>
          Γράψε το όπως στο chat της τάξης. Καταλαβαίνω ασκήσεις («50.2» είναι ενότητα 50, άσκηση 2 της Gramática de uso), κεφάλαια και σελίδες του Aula.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-2">
        <Label htmlFor="notes-done">
          <GraduationCap className="inline size-3.5" /> Τι κάνατε στην τάξη;
        </Label>
        <Textarea id="notes-done" rows={2} value={done} onChange={(event) => setDone(event.target.value)} placeholder="π.χ. κεφάλαιο 2, σελ. 30-31, ενότητα 50" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes-homework">
          <ClipboardList className="inline size-3.5" /> Τι έχεις να κάνεις για το σπίτι;
        </Label>
        <Textarea
          id="notes-homework"
          rows={3}
          value={homework}
          onChange={(event) => setHomework(event.target.value)}
          placeholder={"π.χ.\n50.2 50.4\n51.2 51.4 51.5\nμάθε λεξιλόγιο κεφάλαιο 2 σελ. 30-32"}
        />
        <div className="flex flex-wrap gap-1.5">
          {EXAMPLES.map((example) => (
            <button
              key={example.label}
              type="button"
              onClick={() => (example.field === "homework" ? setHomework((current) => `${current}${current ? "\n" : ""}${example.label}`) : setDone((current) => `${current}${current ? "\n" : ""}${example.label}`))}
              className="cursor-pointer rounded-full border-2 border-border bg-card px-2.5 py-1 text-xs font-bold transition-colors hover:bg-muted"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes-due">Μέχρι πότε;</Label>
        <div className="flex flex-wrap items-center gap-2">
          <Input id="notes-due" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} className="w-auto" />
          {DATE_SHORTCUTS.map((shortcut) => (
            <Button key={shortcut.days} type="button" size="sm" variant={dueDate === dayKeyFromNow(shortcut.days) ? "default" : "secondary"} onClick={() => setDueDate(dayKeyFromNow(shortcut.days))}>
              {shortcut.label}
            </Button>
          ))}
        </div>
      </div>

      <section className="space-y-2 rounded-2xl bg-muted p-4" aria-live="polite" aria-label="Τι κατάλαβα">
        <h3 className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
          <Sparkles className="size-3.5" aria-hidden /> Τι κατάλαβα
        </h3>
        {!hasEffect && plan.warnings.length === 0 && <p className="text-sm text-muted-foreground">Γράψε κάτι παραπάνω και θα δεις εδώ τι θα προσθέσω.</p>}
        <ul className="space-y-1.5 text-sm">
          {plan.classUnit !== undefined && (
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden /> Η τάξη είναι στο κεφάλαιο <strong>{plan.classUnit}</strong>
            </li>
          )}
          {plan.taught.map((item) => (
            <li key={item.key} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden /> Τίκαρα ως διδαγμένο: {item.label}
            </li>
          ))}
          {plan.doneExercises.length > 0 && (
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden /> Ασκήσεις που έγιναν: {plan.doneExercises.join(", ")}
            </li>
          )}
          {plan.tasks.map((task, index) => (
            <li key={index} className="flex gap-2">
              <ClipboardList className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                <strong>{task.title}</strong>
                {task.reference && <span className="block text-muted-foreground">{task.reference}</span>}
              </span>
            </li>
          ))}
          {plan.warnings.map((warning) => (
            <li key={warning} className="flex gap-2 text-destructive">
              <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden /> {warning}
            </li>
          ))}
        </ul>
      </section>

      <DialogFooter className="gap-2 sm:justify-between">
        <Button type="button" variant="ghost" onClick={() => closeDialog(CLASS_NOTES_DIALOG)}>
          Άκυρο
        </Button>
        <Button type="button" variant="chunky" size="lg" disabled={!hasEffect} onClick={handleApply}>
          Πρόσθεσέ τα
        </Button>
      </DialogFooter>
    </>
  );
};

export const ClassNotesDialog = () => {
  const open = useDialogStore((state) => state.currentDialog === CLASS_NOTES_DIALOG);
  const closeDialog = useDialogStore((state) => state.closeDialog);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(CLASS_NOTES_DIALOG);
      }}
    >
      <DialogContent className="max-h-[92svh] gap-5 overflow-y-auto sm:max-w-lg">
        <Form />
      </DialogContent>
    </Dialog>
  );
};
