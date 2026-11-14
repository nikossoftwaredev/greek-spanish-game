"use client";

import { memo, useMemo } from "react";

import { tokenize } from "@/lib/game/text";
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
  const tokens = useMemo(() => tokenize(text), [text]);

  return (
    <span className={className}>
      {tokens.map((token, index) => {
        if (!token.word) return <span key={index}>{token.text}</span>;
        return (
          <button
            key={index}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openDialog(WORD_LOOKUP_DIALOG, { word: token.text, context: context ?? { es: text, el: "" } });
            }}
            className={cn(
              "cursor-pointer rounded-sm underline decoration-primary/35 decoration-dotted decoration-2 underline-offset-[5px]",
              "transition-colors hover:bg-primary/10 hover:decoration-primary focus-visible:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary",
            )}
          >
            {token.text}
          </button>
        );
      })}
    </span>
  );
};

export const TappableText = memo(TappableTextBase);
