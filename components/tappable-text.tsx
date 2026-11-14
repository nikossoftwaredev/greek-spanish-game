"use client";

import { memo, useMemo } from "react";

import { tokenizeGlued } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { useDialogStore } from "@/lib/stores/dialog-store";
import type { ExampleSentence } from "@/types/content";

import { WORD_LOOKUP_DIALOG } from "./word-lookup-dialog";

interface TappableTextProps {
  /** Spanish text. Every word becomes a button that opens the dictionary panel. */
  text: string;
  /** The full sentence and its Greek translation, shown in the panel. Defaults to `text` alone. */
  context?: ExampleSentence;
  className?: string;
}

/** Spanish text where tapping any word shows its dictionary form, meaning and an example. */
const TappableTextBase = ({ text, context, className }: TappableTextProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const pieces = useMemo(() => tokenizeGlued(text), [text]);

  return (
    <span className={className}>
      {pieces.map((piece, index) => {
        if (piece.kind === "text") return <span key={index}>{piece.text}</span>;
        return (
          <span key={index} className="whitespace-nowrap">
            {piece.before}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                openDialog(WORD_LOOKUP_DIALOG, { word: piece.text, context: context ?? { es: text, el: "" } });
              }}
              className={cn(
                "cursor-pointer rounded-sm underline decoration-primary/35 decoration-dotted decoration-2 underline-offset-[5px]",
                "transition-colors hover:bg-primary/10 hover:decoration-primary focus-visible:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary",
              )}
            >
              {piece.text}
            </button>
            {piece.after}
          </span>
        );
      })}
    </span>
  );
};

export const TappableText = memo(TappableTextBase);
