"use client";

import { Languages, Send, ShieldCheck, X } from "lucide-react";
import { type RefObject, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { WORD_LOOKUP_DIALOG } from "@/components/word-lookup-dialog";
import { askLocal } from "@/lib/lola/ask";
import { translateText } from "@/lib/lola/translate";
import { useDialogStore } from "@/lib/stores/dialog-store";

import { type Exchange, ExchangeView, LolaAvatar, moodOf, type Remote } from "./ask-lola-reply";
import { Lola } from "./lola";
import { SpeechBubble } from "./speech-bubble";

export const ASK_LOLA_DIALOG = "ask-lola";

/** How many exchanges the conversation keeps. */
const MAX_EXCHANGES = 20;

/**
 * The conversation. It lives above the sheet, so closing and reopening the panel keeps the thread.
 * Each exchange has its own id: a slow online translation can only settle the exchange it belongs to,
 * never a newer one.
 */
const useLolaChat = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const lastId = useRef(0);

  const ask = async (raw: string) => {
    const question = raw.trim();
    if (!question) return;
    const local = askLocal(question);
    lastId.current += 1;
    const id = lastId.current;

    const settle = (remote: Remote) => setExchanges((current) => current.map((exchange) => (exchange.id === id ? { ...exchange, remote } : exchange)));
    const append = (remote: Remote) => setExchanges((current) => [...current, { id, question, local, remote }].slice(-MAX_EXCHANGES));

    if (local.confident) {
      append({ status: "none" });
      return;
    }
    append({ status: "loading" });
    try {
      const text = await translateText({ text: local.remoteText, direction: local.language === "el" ? "el-es" : "es-el" });
      settle(text ? { status: "ready", text } : { status: "empty" });
    } catch {
      settle({ status: "offline" });
    }
  };

  return { exchanges, ask };
};

/** Lola greets before the first question. Nothing here is clickable. */
const Greeting = () => (
  <div className="m-auto flex w-full max-w-sm flex-col items-center gap-4 py-2 text-center">
    <SpeechBubble tail="down" className="space-y-2 px-5 py-4">
      <p className="font-es text-3xl leading-none font-semibold italic">¡Hola, mi amor!</p>
      <p className="text-base leading-snug">Πες μου τι θες να πεις στα ισπανικά και θα σου πω πώς λέγεται. Ή γράψε μια ισπανική φράση και θα σου πω τι σημαίνει.</p>
    </SpeechBubble>
    <Lola mood="wink" className="size-32" />
  </div>
);

interface AskLolaBodyProps {
  exchanges: Exchange[];
  onAsk: (question: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

const AskLolaBody = ({ exchanges, onAsk, inputRef }: AskLolaBodyProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const [value, setValue] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const latest = exchanges.at(-1);
  const canSend = value.trim().length > 0;

  const handleSubmit = () => {
    if (!canSend) return;
    onAsk(value);
    setValue("");
  };

  // follow the conversation: the newest message, and the answer that replaces the typing dots, stay in view
  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTo({ top: list.scrollHeight });
  }, [exchanges]);

  return (
    <>
      <SheetHeader className="flex-row items-center gap-3 space-y-0 border-b-2 border-border bg-card px-4 py-3 text-left">
        <LolaAvatar mood={latest ? moodOf(latest) : "wink"} className="size-14" />
        <div className="min-w-0 flex-1">
          <SheetTitle className="font-es text-2xl leading-none font-semibold italic">Ρώτα τη Λόλα</SheetTitle>
          <SheetDescription className="mt-1 text-sm leading-snug">Ελληνικά στα ισπανικά και πίσω.</SheetDescription>
        </div>
        <SheetClose asChild>
          <Button type="button" variant="chunky-outline" size="icon-lg" aria-label="Κλείσιμο" icon={<X />} />
        </SheetClose>
      </SheetHeader>

      <div ref={listRef} role="log" aria-live="polite" aria-label="Η συζήτηση" className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-4 py-5 motion-safe:scroll-smooth">
        {exchanges.length === 0 ? (
          <Greeting />
        ) : (
          <div className="mt-auto space-y-5">
            {exchanges.map((exchange) => (
              <ExchangeView key={exchange.id} exchange={exchange} latest={exchange.id === latest?.id} onWordDetails={(word) => openDialog(WORD_LOOKUP_DIALOG, { word })} />
            ))}
          </div>
        )}
      </div>

      <div className="border-t-2 border-border bg-card px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {/* the Enter key must not reach the game or lesson behind this panel */}
        <form
          className="flex items-center gap-2"
          onKeyDown={(event) => event.stopPropagation()}
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="relative min-w-0 flex-1">
            <Languages className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Γράψε ελληνικά ή ισπανικά"
              aria-label="Η ερώτησή σου"
              maxLength={200}
              enterKeyHint="send"
              autoComplete="off"
              className="h-12 rounded-full border-2 bg-background pr-4 pl-11 text-base md:text-base"
            />
          </div>
          <Button type="submit" variant="chunky" size="icon-lg" className="size-12 shrink-0 rounded-full" disabled={!canSend} aria-label="Ρώτα" icon={<Send className="size-5" />} />
        </form>
        <p className="mt-2 flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
          <ShieldCheck className="size-3 shrink-0" aria-hidden />
          Όταν δεν ξέρω, μόνο το κείμενό σου πάει στο MyMemory.
        </p>
      </div>
    </>
  );
};

/** «Ρώτα τη Λόλα»: a chat. Type what you want to say in Greek (or a Spanish phrase) and she answers. */
export const AskLolaDialog = () => {
  const currentDialog = useDialogStore((state) => state.currentDialog);
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const { exchanges, ask } = useLolaChat();
  const inputRef = useRef<HTMLInputElement>(null);

  // with a mouse and keyboard she is ready for the question at once, on a phone the keyboard stays down until the learner taps
  const handleOpenAutoFocus = (event: Event) => {
    event.preventDefault();
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
    else if (event.target instanceof HTMLElement) event.target.focus();
  };

  return (
    <Sheet
      open={currentDialog === ASK_LOLA_DIALOG}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(ASK_LOLA_DIALOG);
      }}
    >
      <SheetContent
        side="bottom"
        showCloseButton={false}
        onOpenAutoFocus={handleOpenAutoFocus}
        className="mx-auto h-[88svh] w-full max-w-xl gap-0 overflow-hidden rounded-t-3xl outline-none border-2 border-b-0 bg-background p-0 sm:bottom-6 sm:h-[min(44rem,86svh)] sm:rounded-3xl sm:border-b-2"
      >
        <AskLolaBody exchanges={exchanges} onAsk={ask} inputRef={inputRef} />
      </SheetContent>
    </Sheet>
  );
};
