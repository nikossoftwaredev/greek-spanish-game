"use client";

import { ArrowLeftRight, Layers, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { LolaStanding } from "@/components/mascot/lola-companion";
import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { type FlatVocab, withArticle } from "@/lib/content/selectors";
import { buildFlashcards, buildSavedFlashcards } from "@/lib/game/builders";
import type { SessionConfig } from "@/lib/game/types";
import { cn } from "@/lib/general/utils";
import { type CardRating, previewIntervals } from "@/lib/srs/fsrs";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { useProgressStore } from "@/lib/stores/progress-store";

import { SessionSummary } from "./session-summary";

const XP_PER_CARD: Record<CardRating, number> = { again: 2, hard: 5, good: 8, easy: 10 };

const RATINGS: { value: CardRating; label: string; variant: "danger" | "chunky-outline" | "success" | "chunky"; key: string }[] = [
  { value: "again", label: "Ξανά", variant: "danger", key: "1" },
  { value: "hard", label: "Δύσκολο", variant: "chunky-outline", key: "2" },
  { value: "good", label: "Καλά", variant: "success", key: "3" },
  { value: "easy", label: "Εύκολο", variant: "chunky", key: "4" },
];

const formatInterval = (days: number): string => {
  if (days <= 0) return "σήμερα";
  if (days === 1) return "1 ημέρα";
  if (days < 30) return `${days} ημέρες`;
  const months = Math.round(days / 30);
  return `${months} ${months === 1 ? "μήνας" : "μήνες"}`;
};

type Direction = "es-el" | "el-es";

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
  const { cards, savedWords } = useProgressStore.getState();
  if (config.saved) return buildSavedFlashcards({ saved: savedWords, cards });
  return buildFlashcards({ unitIds: config.unitIds, pages: config.pages, cards });
};

/** One round of flashcards. The parent remounts it (new `key`) to start a fresh round. */
const FlashcardRound = ({ config, title, exitHref, exitLabel, onAgain }: FlashcardRoundProps) => {
  const router = useRouter();
  const openDialog = useDialogStore((state) => state.openDialog);

  const [deck] = useState<FlatVocab[]>(() => startDeck(config));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState<Direction>("es-el");
  const [xp, setXp] = useState(0);
  const [again, setAgain] = useState(0);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startedAt] = useState(() => Date.now());

  const card = deck[index];
  const total = deck.length;
  const progress = (index / total) * 100;
  const previews = card && flipped ? previewIntervals({ stored: useProgressStore.getState().cards[card.id] }) : null;

  const handleFlip = () => setFlipped((value) => !value);

  const handleRate = (rating: CardRating) => {
    if (!card) return;
    const store = useProgressStore.getState();
    store.rateCard({ id: card.id, rating });
    store.addXp(XP_PER_CARD[rating]);
    setXp((value) => value + XP_PER_CARD[rating]);
    if (rating === "again") setAgain((value) => value + 1);

    if (index + 1 >= total) {
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
        correct={total - again}
        wrong={again}
        seconds={seconds}
        exitHref={exitHref}
        exitLabel={exitLabel}
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
    <div className="flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 pt-4">
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
          variant="ghost"
          size="icon"
          aria-label="Αλλαγή κατεύθυνσης: ισπανικά ή ελληνικά πρώτα"
          title={frontIsSpanish ? "Τώρα: ισπανικά → ελληνικά" : "Τώρα: ελληνικά → ισπανικά"}
          onClick={() => {
            setDirection(frontIsSpanish ? "el-es" : "es-el");
            setFlipped(false);
          }}
        >
          <ArrowLeftRight />
        </Button>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-6 px-4 pt-6 pb-56">
        {card && (
          <>
            <p className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-muted-foreground uppercase">
              <Layers className="size-3.5" aria-hidden /> {card.groupTitleEl}
              {card.unitId >= 0 && ` · Κεφάλαιο ${card.unitId}`}
              {card.page !== undefined && ` · Σελίδα ${card.page}`}
            </p>

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
                  {card.emoji && (
                    <span className="text-7xl" aria-hidden>
                      {card.emoji}
                    </span>
                  )}
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
      </main>

      <footer className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t-2 border-border bg-background">
        <LolaStanding mood="teaching" animateKey={index} />
        <div className="mx-auto w-full max-w-2xl px-4 py-4">
          {!flipped && (
            <Button type="button" variant="chunky" size="xl" className="w-full" onClick={handleFlip}>
              Δείξε την απάντηση
            </Button>
          )}
          {flipped && (
            <div className="space-y-2">
              <p className="text-center text-xs font-bold text-muted-foreground">Πόσο εύκολα το θυμήθηκες;</p>
              <div className="grid grid-cols-4 gap-2">
                {RATINGS.map((rating) => (
                  <Button
                    key={rating.value}
                    type="button"
                    variant={rating.variant}
                    onClick={() => handleRate(rating.value)}
                    className="h-auto flex-col gap-0 py-2.5"
                  >
                    <span className="text-sm">{rating.label}</span>
                    <span className="text-[0.65rem] font-semibold opacity-80">{previews ? formatInterval(previews[rating.value]) : ""}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export const FlashcardSession = (props: FlashcardSessionProps) => {
  const [round, setRound] = useState(0);
  return <FlashcardRound key={round} {...props} onAgain={() => setRound((value) => value + 1)} />;
};
