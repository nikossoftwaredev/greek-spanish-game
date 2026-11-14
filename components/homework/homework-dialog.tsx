"use client";

import { CalendarDays, FileText, Hash, Layers, NotebookPen, Save, Tag } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UNITS } from "@/content";
import { cn } from "@/lib/general/utils";
import { dayKeyFromNow } from "@/lib/homework/format";
import { HOMEWORK_KINDS } from "@/lib/homework/kinds";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { type HomeworkDraft, type HomeworkKind, type HomeworkTask, useHomeworkStore } from "@/lib/stores/homework-store";

export const HOMEWORK_DIALOG = "homework";

interface HomeworkDialogData {
  /** Present when editing an existing task. */
  task?: HomeworkTask;
  /** Pre-selected unit when the dialog opens from a unit page. */
  unitId?: number;
}

const NO_UNIT = "none";

const EMPTY_DRAFT: HomeworkDraft = {
  kind: "exercise",
  title: "",
  unitId: null,
  reference: "",
  notes: "",
  dueDate: "",
};


const DATE_SHORTCUTS = [
  { label: "Αύριο", days: 1 },
  { label: "Σε 2 μέρες", days: 2 },
  { label: "Σε 1 εβδομάδα", days: 7 },
];

interface HomeworkFormProps {
  editing?: HomeworkTask;
  initial: HomeworkDraft;
}

/** The form itself. It mounts every time the dialog opens, so its state always starts from `initial`. */
const HomeworkForm = ({ editing, initial }: HomeworkFormProps) => {
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const addTask = useHomeworkStore((state) => state.addTask);
  const updateTask = useHomeworkStore((state) => state.updateTask);

  const [draft, setDraft] = useState<HomeworkDraft>(initial);

  const kindInfo = HOMEWORK_KINDS.find((kind) => kind.value === draft.kind);
  const canSave = draft.title.trim().length > 0;

  const patch = (changes: Partial<HomeworkDraft>) => setDraft((current) => ({ ...current, ...changes }));

  const handleSave = () => {
    if (!canSave) return;
    const cleaned: HomeworkDraft = { ...draft, title: draft.title.trim(), reference: draft.reference.trim(), notes: draft.notes.trim() };
    if (editing) updateTask({ id: editing.id, draft: cleaned });
    else addTask(cleaned);
    closeDialog(HOMEWORK_DIALOG);
  };

  return (
    <>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{editing ? "Αλλαγή εργασίας" : "Νέα εργασία"}</DialogTitle>
          <DialogDescription>Γράψε αυτό που σας είπε η καθηγήτρια, όπως θες να το βλέπεις.</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <Label>
            <Tag className="inline size-3.5" /> Τι είδους εργασία είναι;
          </Label>
          <div className="grid grid-cols-3 gap-2">
            {HOMEWORK_KINDS.map((kind) => (
              <button
                key={kind.value}
                type="button"
                onClick={() => patch({ kind: kind.value as HomeworkKind })}
                aria-pressed={draft.kind === kind.value}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-1 rounded-xl border-2 px-2 py-2.5 text-xs font-bold transition-colors",
                  draft.kind === kind.value ? "border-primary bg-primary/10 text-primary" : "border-border bg-card hover:bg-muted",
                )}
              >
                <kind.icon className="size-5" />
                {kind.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hw-title">
            <NotebookPen className="inline size-3.5" /> Τι ζήτησαν;
          </Label>
          <Input
            id="hw-title"
            value={draft.title}
            placeholder={kindInfo?.hint}
            onChange={(event) => patch({ title: event.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>
              <Layers className="inline size-3.5" /> Ενότητα
            </Label>
            <Select
              value={draft.unitId === null ? NO_UNIT : String(draft.unitId)}
              onValueChange={(value) => patch({ unitId: value === NO_UNIT ? null : Number(value) })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={NO_UNIT}>Καμία συγκεκριμένη</SelectItem>
                {UNITS.map((unit) => (
                  <SelectItem key={unit.id} value={String(unit.id)}>
                    {unit.id}. {unit.titleEs}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hw-ref">
              <Hash className="inline size-3.5" /> Σελίδα / άσκηση
            </Label>
            <Input
              id="hw-ref"
              value={draft.reference}
              placeholder="σελ. 31, άσκηση 5"
              onChange={(event) => patch({ reference: event.target.value })}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hw-due">
            <CalendarDays className="inline size-3.5" /> Μέχρι πότε;
          </Label>
          <div className="flex flex-wrap items-center gap-2">
            <Input
              id="hw-due"
              type="date"
              value={draft.dueDate}
              onChange={(event) => patch({ dueDate: event.target.value })}
              className="w-auto"
            />
            {DATE_SHORTCUTS.map((shortcut) => (
              <Button
                key={shortcut.days}
                type="button"
                size="sm"
                variant={draft.dueDate === dayKeyFromNow(shortcut.days) ? "default" : "secondary"}
                onClick={() => patch({ dueDate: dayKeyFromNow(shortcut.days) })}
              >
                {shortcut.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hw-notes">
            <FileText className="inline size-3.5" /> Σημειώσεις (προαιρετικά)
          </Label>
          <Textarea
            id="hw-notes"
            value={draft.notes}
            rows={2}
            placeholder="π.χ. να φέρω το τετράδιο"
            onChange={(event) => patch({ notes: event.target.value })}
          />
        </div>

        <DialogFooter className="gap-2 sm:justify-between">
          <Button type="button" variant="ghost" onClick={() => closeDialog(HOMEWORK_DIALOG)}>
            Άκυρο
          </Button>
          <Button type="button" variant="chunky" size="lg" disabled={!canSave} onClick={handleSave} icon={<Save />}>
            {editing ? "Αποθήκευση αλλαγών" : "Πρόσθεσε την εργασία"}
          </Button>
        </DialogFooter>
    </>
  );
};

export const HomeworkDialog = () => {
  const open = useDialogStore((state) => state.currentDialog === HOMEWORK_DIALOG);
  const dialogData = useDialogStore((state) => state.dialogData) as HomeworkDialogData | null;
  const closeDialog = useDialogStore((state) => state.closeDialog);

  const editing = dialogData?.task;
  let initial: HomeworkDraft = { ...EMPTY_DRAFT, unitId: dialogData?.unitId ?? null, dueDate: dayKeyFromNow(1) };
  if (editing) {
    const { kind, title, unitId, reference, notes, dueDate } = editing;
    initial = { kind, title, unitId, reference, notes, dueDate };
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(HOMEWORK_DIALOG);
      }}
    >
      <DialogContent className="max-h-[92svh] gap-5 overflow-y-auto sm:max-w-lg">
        <HomeworkForm editing={editing} initial={initial} />
      </DialogContent>
    </Dialog>
  );
};
