"use client";

import { BookOpen, Globe, Languages, Search, Send, WifiOff } from "lucide-react";
import { useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { WORD_LOOKUP_DIALOG } from "@/components/word-lookup-dialog";
import { withArticle } from "@/lib/content/selectors";
import { askLocal, type LocalAnswer } from "@/lib/lola/ask";
import { translateText } from "@/lib/lola/translate";
import { useDialogStore } from "@/lib/stores/dialog-store";

import { Lola, type LolaMood } from "./lola";
import { SpeechBubble } from "./speech-bubble";

export const ASK_LOLA_DIALOG = "ask-lola";

type Remote =
  | { status: "none" }
  | { status: "loading" }
  | { status: "ready"; text: string }
  | { status: "empty" }
  | { status: "offline" };

interface Asked {
  question: string;
  local: LocalAnswer;
  remote: Remote;
}

const EXACT_INTRO = { el: "¡Claro! Λέγεται:", es: "¡Claro! Σημαίνει:" } as const;
const CLOSE_INTRO = "Δεν το έχω ακριβώς έτσι, αλλά η πιο κοντινή φράση είναι:";

const EXAMPLES = ["είμαι έτοιμος", "δεν καταλαβαίνω", "πού είναι η τουαλέτα;", "πώς σε λένε;", "τι σημαίνει tengo hambre"];

/** Lola's words on the left, with her face. */
const Bubble = ({ mood, children }: { mood: LolaMood; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <Lola mood={mood} className="size-14 shrink-0" />
    <SpeechBubble tail="left" className="min-w-0 flex-1 space-y-3">
      {children}
    </SpeechBubble>
  </div>
);

const SpanishLine = ({ text }: { text: string }) => <p className="font-es text-2xl leading-snug font-semibold">{text}</p>;

const Reply = ({ asked, onWordDetails }: { asked: Asked; onWordDetails: (word: string) => void }) => {
  const { local, remote } = asked;
  const answeredInSpanish = local.language === "el";
  const isOneSpanishWord = local.language === "es" && !asked.question.trim().includes(" ");
  const nothingFound = !local.phrase && local.words.length === 0 && (remote.status === "empty" || remote.status === "none");

  if (remote.status === "loading")
    return (
      <Bubble mood="teaching">
        <p className="font-bold">Μισό λεπτό, το ψάχνω…</p>
        <div className="space-y-2" aria-busy="true" aria-label="Φόρτωση">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      </Bubble>
    );

  if (nothingFound)
    return (
      <Bubble mood="teaching">
        <p className="font-bold">Χμ, αυτό δεν το ξέρω.</p>
        <p className="text-sm text-muted-foreground">Δοκίμασε να το γράψεις πιο απλά ή με άλλα λόγια, π.χ. μία πρόταση τη φορά.</p>
      </Bubble>
    );

  return (
    <Bubble mood="happy">
      {local.phrase && (
        <div className="space-y-2">
          <p className="font-bold">{local.match === "exact" ? EXACT_INTRO[local.language] : CLOSE_INTRO}</p>
          {answeredInSpanish ? (
            <div className="space-y-1">
              {local.phrase.es.map((line) => (
                <SpanishLine key={line} text={line} />
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-xl font-bold">{local.phrase.el[0]}</p>
              <p className="text-sm text-muted-foreground">Πιο σωστά στα ισπανικά: {local.phrase.es.join(" / ")}</p>
            </div>
          )}
          {local.phrase.noteEl && <p className="rounded-xl bg-muted px-3 py-2 text-sm">{local.phrase.noteEl}</p>}
        </div>
      )}

      {local.words.length > 0 && (
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-muted-foreground uppercase">
            <BookOpen className="size-3.5" aria-hidden /> Στο βιβλίο
          </p>
          <ul className="space-y-1.5">
            {local.words.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-es text-xl font-semibold">
                  {withArticle(item)}
                </span>
                <span className="text-muted-foreground">{item.el}</span>
                <Badge variant="secondary">Κεφ. {item.unitId}</Badge>
              </li>
            ))}
          </ul>
        </div>
      )}

      {remote.status === "ready" && (
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-muted-foreground uppercase">
            <Globe className="size-3.5" aria-hidden /> Αυτόματη μετάφραση
          </p>
          {answeredInSpanish ? <SpanishLine text={remote.text} /> : <p className="text-xl font-bold">{remote.text}</p>}
          <p className="text-xs text-muted-foreground">Την έφτιαξε πρόγραμμα (MyMemory), όχι δασκάλα. Μπορεί να έχει λάθη, οπότε έλεγξέ την πριν τη χρησιμοποιήσεις.</p>
        </div>
      )}

      {remote.status === "offline" && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <WifiOff className="size-4 shrink-0" aria-hidden /> Δεν υπάρχει σύνδεση στο ίντερνετ. Χωρίς ίντερνετ ξέρω μόνο τις έτοιμες φράσεις και τις λέξεις του βιβλίου.
        </p>
      )}

      {isOneSpanishWord && (
        <Button type="button" variant="chunky-outline" size="sm" onClick={() => onWordDetails(asked.question.trim())} icon={<Search />}>
          Δες τη λέξη αναλυτικά
        </Button>
      )}
    </Bubble>
  );
};

const AskLolaBody = () => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const [value, setValue] = useState("");
  const [asked, setAsked] = useState<Asked | null>(null);
  const latestRequest = useRef(0);

  const ask = async (raw: string) => {
    const question = raw.trim();
    if (!question) return;
    const local = askLocal(question);
    latestRequest.current += 1;
    const request = latestRequest.current;

    if (local.confident) {
      setAsked({ question, local, remote: { status: "none" } });
      return;
    }
    setAsked({ question, local, remote: { status: "loading" } });
    try {
      const text = await translateText({ text: local.remoteText, direction: local.language === "el" ? "el-es" : "es-el" });
      if (request !== latestRequest.current) return;
      setAsked({ question, local, remote: text ? { status: "ready", text } : { status: "empty" } });
    } catch {
      if (request !== latestRequest.current) return;
      setAsked({ question, local, remote: { status: "offline" } });
    }
  };

  const handleExample = (example: string) => {
    setValue(example);
    ask(example);
  };

  const loading = asked?.remote.status === "loading";

  return (
    <>
      <SheetHeader className="space-y-1 border-b-2 border-border bg-card px-5 pt-5 pb-4 text-left">
        <SheetTitle className="font-es text-3xl leading-none font-semibold italic">Ρώτα τη Λόλα</SheetTitle>
        <SheetDescription className="text-base">Γράψε στα ελληνικά τι θες να πεις, ή μια ισπανική φράση που δεν καταλαβαίνεις.</SheetDescription>
      </SheetHeader>

      <div className="space-y-4 overflow-y-auto overscroll-contain px-5 py-4">
        {/* the Enter key must not reach the game or lesson behind this panel */}
        <form
          className="flex gap-2"
          onKeyDown={(event) => event.stopPropagation()}
          onSubmit={(event) => {
            event.preventDefault();
            ask(value);
          }}
        >
          <div className="relative flex-1">
            <Languages className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="π.χ. πώς λέμε «είμαι έτοιμος»;"
              aria-label="Η ερώτησή σου"
              maxLength={200}
              enterKeyHint="send"
              autoComplete="off"
              className="h-11 pl-9 text-base"
            />
          </div>
          <Button type="submit" variant="chunky" size="lg" loading={loading} icon={<Send />}>
            Ρώτα
          </Button>
        </form>

        {asked ? (
          <div className="space-y-3">
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2 font-bold text-primary-foreground">{asked.question}</p>
            <Reply asked={asked} onWordDetails={(word) => openDialog(WORD_LOOKUP_DIALOG, { word })} />
          </div>
        ) : (
          <Bubble mood="teaching">
            <p>
              <span className="font-es text-xl font-semibold italic">¡Hola, mi amor!</span> Ρώτα με πώς λέγεται κάτι στα ισπανικά, ή τι σημαίνει μια ισπανική φράση. Ξέρω έτοιμες φράσεις της τάξης και της καθημερινότητας.
            </p>
          </Bubble>
        )}

        <div className="flex flex-wrap gap-2" aria-label="Παραδείγματα ερωτήσεων">
          {EXAMPLES.map((example) => (
            <Button key={example} type="button" variant="secondary" size="sm" onClick={() => handleExample(example)}>
              {example}
            </Button>
          ))}
        </div>

        <p className="pb-2 text-xs text-muted-foreground">Όταν δεν έχω έτοιμη απάντηση, στέλνω μόνο αυτό που έγραψες στο MyMemory για αυτόματη μετάφραση. Τίποτα άλλο.</p>
      </div>
    </>
  );
};

/** «Ρώτα τη Λόλα»: type what you want to say in Greek (or a Spanish phrase) and she answers. */
export const AskLolaDialog = () => {
  const currentDialog = useDialogStore((state) => state.currentDialog);
  const closeDialog = useDialogStore((state) => state.closeDialog);

  return (
    <Sheet
      open={currentDialog === ASK_LOLA_DIALOG}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(ASK_LOLA_DIALOG);
      }}
    >
      <SheetContent side="bottom" className="mx-auto max-h-[88svh] w-full max-w-xl gap-0 overflow-hidden rounded-t-3xl border-2 border-b-0 bg-background p-0">
        <AskLolaBody />
      </SheetContent>
    </Sheet>
  );
};
