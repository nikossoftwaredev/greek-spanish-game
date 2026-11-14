import { CalendarClock } from "lucide-react";

import { cn } from "@/lib/general/utils";
import { dueLabel, dueTone } from "@/lib/homework/format";
import type { DueState } from "@/lib/stores/homework-store";

const TONE_CLASS: Record<DueState, string> = {
  overdue: "bg-danger-soft text-destructive",
  today: "bg-primary/15 text-primary",
  soon: "bg-sun/30 text-foreground",
  later: "bg-muted text-muted-foreground",
  none: "bg-muted text-muted-foreground",
};

/** A small badge saying when a homework task is due, coloured by urgency. */
export const DueChip = ({ dueDate, done }: { dueDate: string; done?: boolean }) => {
  const tone = done ? "none" : dueTone({ dueDate });
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold", TONE_CLASS[tone])}>
      <CalendarClock className="size-3.5" aria-hidden />
      {dueLabel({ dueDate })}
    </span>
  );
};
