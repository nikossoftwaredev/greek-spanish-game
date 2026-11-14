"use client";

import { MessageCircleQuestion } from "lucide-react";

import { cn } from "@/lib/general/utils";
import { useDialogStore } from "@/lib/stores/dialog-store";

import { ASK_LOLA_DIALOG } from "./ask-lola-dialog";
import { Lola, type LolaMood } from "./lola";
import { LolaFull } from "./lola-full";

interface AskLolaProps {
  mood: LolaMood;
  /** Sizes the drawing. For the full body set the height and the width follows. */
  className?: string;
  /** `bust` is head and shoulders, `full` is the whole figure. */
  body?: "bust" | "full";
  /** A small question mark that tells the learner she can be tapped. */
  badge?: boolean;
}

/** Lola as a button: tapping her opens «Ρώτα τη Λόλα». */
export const AskLola = ({ mood, className, body = "bust", badge = false }: AskLolaProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const Drawing = body === "full" ? LolaFull : Lola;

  return (
    <button
      type="button"
      aria-label="Ρώτα τη Λόλα"
      title="Πάτα με και ρώτα με πώς λέγεται κάτι στα ισπανικά"
      onClick={() => openDialog(ASK_LOLA_DIALOG)}
      className={cn(
        "pointer-events-auto relative block shrink-0 cursor-pointer rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary active:scale-95",
        body === "full" && "origin-bottom rounded-3xl",
      )}
    >
      <Drawing mood={mood} className={className} />
      {badge && (
        <span className="absolute top-0 right-0 grid size-6 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-sm" aria-hidden>
          <MessageCircleQuestion className="size-3.5" />
        </span>
      )}
    </button>
  );
};
