"use client";

import { BookmarkPlus, BookOpen, Check, ExternalLink, Globe, Languages, WifiOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SourceLink } from "@/components/pdf/source-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { withArticle } from "@/lib/content/selectors";
import { cn } from "@/lib/general/utils";
import { lookupLocal, PERSON_EL, type VerbFormMatch, verbOf } from "@/lib/lookup/local-index";
import { lookupRemote, type RemoteLookup } from "@/lib/lookup/remote";
import { aulaPdfPage } from "@/lib/pdf/books";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useProgressStore } from "@/lib/stores/progress-store";
import type { ExampleSentence } from "@/types/content";

export const WORD_LOOKUP_DIALOG = "word-lookup";

interface WordLookupData {
  word: string;
  context?: ExampleSentence;
}

type RemoteState =
  | { status: "loading" }
  | { status: "ready"; data: RemoteLookup }
  | { status: "offline" };

const LOADING: RemoteState = { status: "loading" };

const KIND_LABEL: Record<VerbFormMatch["kind"], string> = {
  infinitive: "απαρέμφατο (η βασική μορφή του ρήματος)",
  present: "ενεστώτας οριστικής",
  participle: "μετοχή παρακειμένου (participio)",
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section className="space-y-2 rounded-2xl border-2 border-border bg-card p-4">
    <h3 className="flex items-center gap-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
      {icon}
      {title}
    </h3>
    {children}
  </section>
);

const VerbFormCard = ({ match }: { match: VerbFormMatch }) => {
  const verb = verbOf(match);
  if (!verb) return null;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-es text-2xl font-semibold">{verb.infinitive}</span>
        <span className="text-muted-foreground">{verb.el}</span>
      </div>
      <p className="text-sm">
        {match.kind === "present" && match.person !== undefined && (
          <>
            <span className="font-bold">{PERSON_EL[match.person]}</span>, {KIND_LABEL.present}
          </>
        )}
        {match.kind !== "present" && <span className="font-bold">{KIND_LABEL[match.kind]}</span>}
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 rounded-xl bg-muted p-3 text-sm sm:grid-cols-3">
        {verb.present.map((form, index) => (
          <span
            key={index}
            className={cn(
              "font-es text-base",
              match.kind === "present" && match.person === index && "rounded bg-primary px-1.5 font-bold text-primary-foreground",
              verb.irregularIndexes.includes(index) && match.person !== index && "text-primary",
            )}
          >
            {form}
          </span>
        ))}
      </div>
      {verb.noteEl && <p className="text-sm text-muted-foreground">{verb.noteEl}</p>}
      <Link href="/verbs" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
        <BookOpen className="size-3.5" /> Δες όλους τους τύπους στα ρήματα
      </Link>
    </div>
  );
};

export const WordLookupDialog = () => {
  const open = useDialogStore((state) => state.currentDialog === WORD_LOOKUP_DIALOG);
  const dialogData = useDialogStore((state) => state.dialogData) as WordLookupData | null;
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const savedWords = useProgressStore((state) => state.savedWords);
  const saveWord = useProgressStore((state) => state.saveWord);

  const [lookup, setLookup] = useState<{ word: string; state: RemoteState } | null>(null);

  const word = dialogData?.word ?? "";
  const context = dialogData?.context;
  const local = word ? lookupLocal(word) : { vocab: [], verbForms: [] };
  const remote: RemoteState = lookup?.word === word ? lookup.state : LOADING;
  const remoteData = remote.status === "ready" ? remote.data : undefined;

  const remoteLemma = remoteData?.entries.find((entry) => entry.lemma)?.lemma;
  const lemmaLocal = remoteLemma ? lookupLocal(remoteLemma) : undefined;
  const lemmaVerb = lemmaLocal?.verbForms.find((form) => form.kind === "infinitive");
  const lemmaVocab = lemmaLocal?.vocab[0];

  const bookGreek = local.vocab[0]?.el ?? (local.verbForms[0] ? verbOf(local.verbForms[0])?.el : undefined) ?? local.functionWord?.el;
  const lemmaGreek = lemmaVocab?.el ?? (lemmaVerb ? verbOf(lemmaVerb)?.el : undefined);
  const greek = bookGreek ?? lemmaGreek ?? remoteData?.greek;
  const greekIsMachine = !bookGreek && !lemmaGreek && Boolean(remoteData?.greek);

  const saveTarget = local.verbForms[0] ? (verbOf(local.verbForms[0])?.infinitive ?? word) : (remoteLemma ?? word);
  const alreadySaved = savedWords.some((saved) => saved.es.toLowerCase() === saveTarget.toLowerCase());
  const inBook = local.vocab.length > 0;
  const firstExample = remoteData?.entries.flatMap((entry) => entry.examples)[0];

  const handleSave = () => {
    const fallback = remoteData?.entries[0]?.glosses[0] ?? "";
    saveWord({
      es: saveTarget,
      el: greek ?? fallback,
      lemma: remoteLemma,
      example: context?.el ? context : undefined,
    });
  };

  useEffect(() => {
    if (!open || !word) return;
    let isMounted = true;
    lookupRemote(word)
      .then((data) => {
        if (isMounted) setLookup({ word, state: { status: "ready", data } });
      })
      .catch(() => {
        if (isMounted) setLookup({ word, state: { status: "offline" } });
      });
    return () => {
      isMounted = false;
    };
  }, [open, word]);

  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(WORD_LOOKUP_DIALOG);
      }}
    >
      <SheetContent
        side="bottom"
        className="mx-auto max-h-[88svh] w-full max-w-xl gap-0 overflow-hidden rounded-t-3xl border-2 border-b-0 bg-background p-0"
      >
        <SheetHeader className="space-y-1 border-b-2 border-border bg-card px-5 pt-5 pb-4 text-left">
          <div className="flex items-center gap-2 pr-8">
            <SheetTitle className="font-es text-3xl leading-none font-semibold">{word}</SheetTitle>
          </div>
          <SheetDescription className="text-base">
            {greek ? (
              <span className="font-bold text-foreground">{greek}</span>
            ) : (
              <span>{remote.status === "loading" ? "Ψάχνω τη σημασία…" : "Δεν βρέθηκε μετάφραση"}</span>
            )}
            {greekIsMachine && <span className="ml-2 text-xs">(αυτόματη μετάφραση)</span>}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-3 overflow-y-auto overscroll-contain px-5 py-4">
          {context?.es && (
            <p className="rounded-xl bg-muted px-3 py-2 text-sm">
              <span className="font-es text-base">{context.es}</span>
              {context.el && <span className="mt-0.5 block text-muted-foreground">{context.el}</span>}
            </p>
          )}

          {local.verbForms.length > 0 && (
            <Section icon={<Languages className="size-3.5" />} title="Από ποιο ρήμα προέρχεται">
              <div className="space-y-4">
                {local.verbForms.slice(0, 2).map((match, index) => (
                  <VerbFormCard key={index} match={match} />
                ))}
              </div>
            </Section>
          )}

          {local.vocab.map((item) => (
            <Section key={item.id} icon={<BookOpen className="size-3.5" />} title={`Στο βιβλίο, κεφάλαιο ${item.unitId}${item.page === undefined ? "" : `, σελίδα ${item.page}`}`}>
              <div className="space-y-1">
                <p className="font-es text-xl font-semibold">
                  {withArticle(item)}
                </p>
                <p>{item.el}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{item.groupTitleEl}</Badge>
                  {item.page !== undefined && <SourceLink book="aula" page={aulaPdfPage(item.page)} label={`Σελίδα ${item.page} στο βιβλίο`} size="xs" />}
                </div>
                {item.noteEl && <p className="pt-1 text-sm text-muted-foreground">{item.noteEl}</p>}
                {item.example && (
                  <p className="pt-2 text-sm">
                    <span className="font-es text-base">{item.example.es}</span>
                    <span className="block text-muted-foreground">{item.example.el}</span>
                  </p>
                )}
              </div>
            </Section>
          ))}

          {local.functionWord && (
            <Section icon={<BookOpen className="size-3.5" />} title={local.functionWord.kindEl}>
              <p className="font-bold">{local.functionWord.el}</p>
              {local.functionWord.noteEl && <p className="text-sm text-muted-foreground">{local.functionWord.noteEl}</p>}
            </Section>
          )}

          <Section icon={<Globe className="size-3.5" />} title="Λεξικό (Wiktionary)">
            {remote.status === "loading" && (
              <div className="space-y-2" aria-busy="true" aria-label="Φόρτωση">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            )}

            {remote.status === "offline" && (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="size-4 shrink-0" /> Δεν υπάρχει σύνδεση στο ίντερνετ. Βλέπεις μόνο ό,τι ξέρει το βιβλίο.
              </p>
            )}

            {remoteData && remoteData.entries.length === 0 && (
              <p className="text-sm text-muted-foreground">Το λεξικό δεν βρήκε αυτή τη λέξη. Έλεγξε την ορθογραφία και τους τόνους.</p>
            )}

            {remoteData?.entries.map((entry, index) => (
              <div key={index} className="space-y-1.5 border-t border-border pt-2 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{entry.posEl}</Badge>
                  {entry.lemma && (
                    <span className="text-sm">
                      από το <span className="font-es text-lg font-bold">{entry.lemma}</span>
                      {(lemmaVerb ?? lemmaVocab) && greek && <span className="text-muted-foreground"> ({greek})</span>}
                    </span>
                  )}
                </div>
                {entry.formEl && <p className="text-sm font-bold">{entry.formEl}</p>}
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-muted-foreground">
                  {entry.glosses.map((gloss, glossIndex) => (
                    <li key={glossIndex}>{gloss}</li>
                  ))}
                </ul>
              </div>
            ))}

            {firstExample && (
              <div className="space-y-0.5 rounded-xl bg-muted px-3 py-2 text-sm">
                <p className="text-xs font-bold text-muted-foreground uppercase">Παράδειγμα</p>
                <p className="font-es text-base">{firstExample.es}</p>
                {firstExample.el && <p className="text-muted-foreground">{firstExample.el} <span className="text-xs">(αυτόματη μετάφραση)</span></p>}
                {!firstExample.el && firstExample.en && <p className="text-muted-foreground">{firstExample.en}</p>}
              </div>
            )}
          </Section>

          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {!inBook && (
              <Button type="button" variant="chunky" disabled={alreadySaved} onClick={handleSave} icon={alreadySaved ? <Check /> : <BookmarkPlus />}>
                {alreadySaved ? `Αποθηκεύτηκε: ${saveTarget}` : `Αποθήκευση «${saveTarget}»`}
              </Button>
            )}
            <Button asChild variant="chunky-outline">
              <a href={`https://en.wiktionary.org/wiki/${encodeURIComponent(word.toLowerCase())}#Spanish`} target="_blank" rel="noopener noreferrer">
                <ExternalLink /> Wiktionary
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
