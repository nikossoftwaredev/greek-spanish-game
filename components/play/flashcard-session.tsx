"use client";

import { ArrowLeftRight, Layers, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { type FlatVocab, withArticle } from "@/lib/content/selectors";
import { buildFlashcards, buildSavedFlashcards } from "@/lib/game/builders";
import { chapterOf } from "@/lib/game/progress";
import { summarizeSources, vocabSource } from "@/lib/game/sources";
import type { SessionConfig } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";
import { playCorrect } from "@/lib/sound";
import { type CardRating } from "@/lib/srs/fsrs";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

import { PlayFooter, PlayShell } from "./play-shell";
import { SessionSummary } from "./session-summary";
import { SourceBadge } from "./source-badge";

/** Two buttons are enough: you knew it or you did not. */
type Rating = Extract<CardRating, "again" | "good">;

const XP_PER_CARD: Record<Rating, number> = { again: 2, good: 8 };

const RATINGS: { value: Rating; label: string; variant: "danger" | "success"; key: string }[] = [
  { value: "again", label: "Δεν το ήξερα", variant: "danger", key: "1" },
  { value: "good", label: "Το ήξερα", variant: "success", key: "2" },
];

interface FlashcardSessionProps {
  config: SessionConfig;
  title: string;
  exitHref: string;
  exitLabel: string;
}

interface FlashcardRoundProps extends FlashcardSessionProps {
  onAgain: () => void;
}

const startDeck = (config: SessionConfig): FlatVocab[] => {
  const { cards, savedWords, wordResults } = useProgressStore.getState();
  if (config.saved) return buildSavedFlashcards({ saved: savedWords, cards });
  return buildFlashcards({ unitIds: config.unitIds, pages: config.pages, cards, wordResults, focus: config.focus });
};

/** One round of flashcards. The parent remounts it (new `key`) to start a fresh round. */
const FlashcardRound = ({ config, title, exitHref, exitLabel, onAgain }: FlashcardRoundProps) => {
  const router = useRouter();
  const openDialog = useDialogStore((state) => state.openDialog);

  const [deck, setDeck] = useState<FlatVocab[]>(() => startDeck(config));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const direction = useSettingsStore((state) => state.cardDirection);
  const setDirection = useSettingsStore((state) => state.setCardDirection);
  const [xp, setXp] = useState(0);
  const [again, setAgain] = useState(0);
  const [good, setGood] = useState(0);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startedAt] = useState(() => Date.now());

  const card = deck[index];
  const source = card ? vocabSource(card) : undefined;
  const total = deck.length;
  const progress = (index / total) * 100;

  const handleFlip = () => setFlipped((value) => !value);

  const handleRate = (rating: Rating) => {
    if (!card) return;
    const store = useProgressStore.getState();
    store.rateCard({ id: card.id, rating });
    if (rating === "good") playCorrect();
    store.addXp(XP_PER_CARD[rating]);
    setXp((value) => value + XP_PER_CARD[rating]);
    // A word that was not known comes back at the end of the round, until it is known.
    if (rating === "again") {
      setAgain((value) => value + 1);
      setDeck((current) => [...current, card]);
    } else setGood((value) => value + 1);

    const roundLength = rating === "again" ? total + 1 : total;
    if (index + 1 >= roundLength) {
      store.finishSession();
      setSeconds(Math.round((Date.now() - startedAt) / 1000));
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setFlipped(false);
  };

  const handleExit = () => {
    openDialog(
      CONFIRM_DIALOG,
      { title: "Να σταματήσουμε εδώ;", description: "Οι κάρτες που βαθμολόγησες έχουν ήδη αποθηκευτεί.", actionLabel: "Έξοδος" },
      () => router.push(exitHref),
    );
  };

  useEffect(() => {
    if (finished || !card) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        if ((event.target as HTMLElement | null)?.tagName === "BUTTON") return;
        event.preventDefault();
        handleFlip();
        return;
      }
      const rating = RATINGS.find((item) => item.key === event.key);
      if (rating && flipped) handleRate(rating.value);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (finished)
    return (
      <SessionSummary
        title={title}
        xpGained={xp}
        correct={good}
        wrong={again}
        chapter={chapterOf(config)}
        seconds={seconds}
        exitHref={exitHref}
        exitLabel={exitLabel}
        sources={summarizeSources(deck.map(vocabSource))}
        onAgain={onAgain}
      />
    );

  if (deck.length === 0)
    return (
      <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-5xl" aria-hidden>
          🎉
        </p>
        <h1 className="text-2xl font-extrabold">Τίποτα για επανάληψη τώρα!</h1>
        <p className="text-muted-foreground">Όλες οι λέξεις αυτών των ενοτήτων είναι ήδη προγραμματισμένες για αργότερα. Έλα πάλι αύριο ή παίξε ένα παιχνίδι.</p>
        <Button asChild variant="chunky" size="lg">
          <a href={exitHref}>{exitLabel}</a>
        </Button>
      </div>
    );

  const frontIsSpanish = direction === "es-el";

  return (
    <PlayShell
      header={
        <>
        <Button type="button" variant="ghost" size="icon" aria-label="Έξοδος" onClick={handleExit}>
          <X />
        </Button>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-success transition-[width] duration-500 ease-out" style={{ width: `${Math.max(progress, 3)}%` }} />
        </div>
        <span className="min-w-12 text-right text-sm font-bold text-muted-foreground tabular-nums">
          {Math.min(index + 1, total)}/{total}
        </span>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-label="Αλλαγή κατεύθυνσης: ισπανικά ή ελληνικά πρώτα"
          title={frontIsSpanish ? "Τώρα: ισπανικά → ελληνικά. Πάτα για ελληνικά → ισπανικά." : "Τώρα: ελληνικά → ισπανικά. Πάτα για ισπανικά → ελληνικά."}
          onClick={() => {
            setDirection(frontIsSpanish ? "el-es" : "es-el");
            setFlipped(false);
          }}
          icon={<ArrowLeftRight />}
        >
          {frontIsSpanish ? "ES → ΕΛ" : "ΕΛ → ES"}
        </Button>
        </>
      }
    >
      <div className="flex w-full flex-1 flex-col items-center gap-6">
        {card && (
          <>
            <div className="space-y-1.5 text-center">
              {source && (
                <div className="flex justify-center">
                  <SourceBadge source={source} />
                </div>
              )}
              <p className="flex items-center justify-center gap-1.5 text-xs font-extrabold tracking-wider text-muted-foreground uppercase">
                <Layers className="size-3.5" aria-hidden /> {card.groupTitleEl}
              </p>
            </div>

            <div
              key={card.id}
              role="button"
              tabIndex={0}
              aria-label={flipped ? "Δες το μπροστινό μέρος" : "Δες τη μετάφραση"}
              onClick={handleFlip}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") event.preventDefault();
              }}
              className="w-full max-w-md [perspective:1200px] motion-safe:animate-rise"
            >
              <div
                className={cn(
                  "relative grid min-h-80 w-full cursor-pointer rounded-[2rem] transition-transform duration-500 [transform-style:preserve-3d]",
                  flipped && "[transform:rotateY(180deg)]",
                )}
              >
                <div className="col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-border bg-card p-6 text-center shadow-[0_6px_0_0_var(--border)] [backface-visibility:hidden]">
                  <p className="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">{frontIsSpanish ? "Τι σημαίνει;" : "Πώς λέγεται στα ισπανικά;"}</p>
                  {frontIsSpanish && <p className="font-es text-4xl leading-tight font-semibold sm:text-5xl">{withArticle(card)}</p>}
                  {!frontIsSpanish && <p className="text-3xl leading-tight font-extrabold">{card.el}</p>}
                  <p className="text-sm text-muted-foreground">Πάτησε για να γυρίσει η κάρτα</p>
                </div>

                <div className="col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-primary/40 bg-card p-6 text-center shadow-[0_6px_0_0_var(--primary-edge)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {frontIsSpanish && <p className="text-3xl leading-tight font-extrabold">{card.el}</p>}
                  {!frontIsSpanish && (
                    <p className="font-es text-4xl leading-tight font-semibold">{withArticle(card)}</p>
                  )}
                  {card.noteEl && <p className="rounded-xl bg-muted px-3 py-2 text-sm">{card.noteEl}</p>}
                  {card.example && (
                    <p className="text-sm" onClick={(event) => event.stopPropagation()}>
                      <TappableText text={card.example.es} context={card.example} className="font-es text-lg" />
                      <span className="block text-muted-foreground">{card.example.el}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <PlayFooter>
      <footer className="safe-bottom relative z-30 shrink-0 border-t-2 border-border bg-background">
        <div className="mx-auto w-full max-w-2xl px-4 py-4">
          {!flipped && (
            <Button type="button" variant="chunky" size="xl" className="w-full" onClick={handleFlip}>
              Δείξε την απάντηση
            </Button>
          )}
          {flipped && (
            <div className="space-y-2">
              <p className="text-center text-xs font-bold text-muted-foreground">Το ήξερες;</p>
              <div className="grid grid-cols-2 gap-2">
                {RATINGS.map((rating) => (
                  <Button
                    key={rating.value}
                    type="button"
                    variant={rating.variant}
                    onClick={() => handleRate(rating.value)}
                    className="h-auto flex-col gap-0 py-2.5"
                  >
                    <span className="text-sm">{rating.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </footer>
      </PlayFooter>
    </PlayShell>
  );
};

export const FlashcardSession = (props: FlashcardSessionProps) => {
  const [round, setRound] = useState(0);
  return <FlashcardRound key={round} {...props} onAgain={() => setRound((value) => value + 1)} />;
};
