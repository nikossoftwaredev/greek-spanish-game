"use client";

import { Dumbbell, Eye, Layers, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { SourceLink } from "@/components/pdf/source-link";
import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHydrated } from "@/hooks/use-hydrated";
import { withArticle } from "@/lib/content/selectors";
import { stripAccents, stripGreekAccents } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { aulaPdfPage, isInAulaPdf } from "@/lib/pdf/books";
import { type Mastery, masteryOf } from "@/lib/srs/fsrs";
import { useProgressStore } from "@/lib/stores/progress-store";
import type { VocabGroup, VocabItem } from "@/types/content";

const MASTERY_STYLE: Record<Mastery, { dot: string; label: string }> = {
  new: { dot: "bg-border", label: "Δεν την έχεις δει ακόμα" },
  learning: { dot: "bg-sun", label: "Τη μαθαίνεις" },
  known: { dot: "bg-success/70", label: "Την ξέρεις" },
  mastered: { dot: "bg-success", label: "Την έχεις κατακτήσει" },
};

/** Which language to hide so the learner can recall it: nothing, the Spanish, or the Greek. */
type Cover = "none" | "es" | "el";

const COVER_OPTIONS: { value: Cover; label: string }[] = [
  { value: "none", label: "Όλα ορατά" },
  { value: "es", label: "Κάλυψε τα ισπανικά" },
  { value: "el", label: "Κάλυψε τα ελληνικά" },
];

const matches = ({ item, query }: { item: VocabItem; query: string }): boolean => {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return stripAccents(item.es.toLowerCase()).includes(stripAccents(needle)) || stripGreekAccents(item.el).includes(stripGreekAccents(needle));
};

/** A covered language, shown as a button that reveals it. */
const RevealButton = ({ label, onReveal }: { label: string; onReveal: () => void }) => (
  <Button type="button" variant="secondary" size="sm" onClick={onReveal} icon={<Eye />}>
    {label}
  </Button>
);

const WordRow = ({ item, cover }: { item: VocabItem; cover: Cover }) => {
  const hydrated = useHydrated();
  const stored = useProgressStore((state) => state.cards[item.id]);
  const mastery = MASTERY_STYLE[hydrated ? masteryOf(stored) : "new"];
  const [revealed, setRevealed] = useState(false);
  const hideEs = cover === "es" && !revealed;
  const hideEl = cover === "el" && !revealed;
  const reveal = () => setRevealed(true);

  return (
    <li className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card px-3 py-2.5">
      <span className={cn("mt-2 size-2.5 shrink-0 rounded-full", mastery.dot)} title={mastery.label} aria-label={mastery.label} />
      <div className="min-w-0 flex-1">
        {hideEs ? (
          <RevealButton label="Πάτα για τα ισπανικά" onReveal={reveal} />
        ) : (
          <p className="flex flex-wrap items-baseline gap-x-2">
            <TappableText text={withArticle(item)} context={item.example} className="font-es text-xl leading-snug font-semibold" />
            {item.exercise !== undefined && <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-bold text-muted-foreground">άσκηση {item.exercise}</span>}
          </p>
        )}
        {hideEl ? (
          <RevealButton label="Πάτα για τα ελληνικά" onReveal={reveal} />
        ) : (
          <>
            <p className="text-sm leading-snug font-semibold text-muted-foreground">{item.el}</p>
            {item.noteEl && !hideEs && <p className="mt-1 text-xs text-muted-foreground">{item.noteEl}</p>}
          </>
        )}
        {item.example && (
          <p className="mt-1.5 text-sm">
            {!hideEs && <TappableText text={item.example.es} context={item.example} className="font-es text-base text-foreground/90" />}
            {!hideEl && <span className="block text-xs text-muted-foreground">{item.example.el}</span>}
          </p>
        )}
      </div>
    </li>
  );
};

interface VocabListProps {
  groups: VocabGroup[];
  unitId: number;
  /** The book's main vocabulary page of the chapter («Léxico»), when the glossary has words from it. */
  lexicoPage?: number;
}

export const VocabList = ({ groups, unitId, lexicoPage }: VocabListProps) => {
  const [query, setQuery] = useState("");
  const [cover, setCover] = useState<Cover>("none");

  const back = encodeURIComponent(`/units/${unitId}`);
  const playHref = ({ mode, page }: { mode: string; page: number }): string => `/play/${mode}?units=${unitId}&pages=${page}&back=${back}`;

  const sections = groups
    .map((group) => ({ ...group, items: group.items.filter((item) => matches({ item, query })) }))
    .filter((group) => group.items.length > 0);

  const totalWords = groups.reduce((sum, group) => sum + group.items.length, 0);

  const jumpTo = (page: number) => {
    document.getElementById(`unit${unitId}-page-${page}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hasLexico = lexicoPage !== undefined && groups.some((group) => group.page === lexicoPage);
  const unitLink = (mode: string, pages?: number): string => `/play/${mode}?units=${unitId}${pages ? `&pages=${pages}` : ""}&back=${back}`;

  return (
    <div className="space-y-6">
      <section className="space-y-3 rounded-3xl border-2 border-primary/30 bg-primary/8 p-4" aria-label="Πώς να το μάθεις">
        <h3 className="flex items-center gap-2 text-base font-extrabold">
          <Sparkles className="size-4 text-primary" aria-hidden /> Πώς να μάθεις το λεξιλόγιο αυτού του κεφαλαίου
        </h3>
        <ol className="space-y-2 text-sm">
          {hasLexico && (
            <li className="flex flex-wrap items-center gap-2">
              <span className="font-bold">1. Ξεκίνα από τη βασική σελίδα (σελ. {lexicoPage}).</span>
              <Button asChild variant="chunky" size="sm">
                <Link href={unitLink("flashcards", lexicoPage)}>
                  <Layers /> Κάρτες
                </Link>
              </Button>
            </li>
          )}
          <li className="flex flex-wrap items-center gap-2">
            <span className="font-bold">{hasLexico ? "2" : "1"}. Όλο το κεφάλαιο: 10 νέες λέξεις τη φορά, και τις ξαναβλέπεις όταν χρειάζεται.</span>
            <Button asChild variant="chunky-outline" size="sm">
              <Link href={unitLink("flashcards")}>
                <Layers /> Κάρτες
              </Link>
            </Button>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <span className="font-bold">{hasLexico ? "3" : "2"}. Δοκίμασε τον εαυτό σου με παιχνίδια.</span>
            <Button asChild variant="chunky-outline" size="sm">
              <Link href={unitLink("mix")}>
                <Dumbbell /> Παίξε
              </Link>
            </Button>
          </li>
        </ol>
        <p className="text-xs text-muted-foreground">Ή πάτα «Κάρτες» / «Παίξε» στην κεφαλίδα μιας σελίδας παρακάτω, για να μάθεις μία σελίδα του βιβλίου τη φορά.</p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-60 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ψάξε μια λέξη, στα ισπανικά ή στα ελληνικά"
            aria-label="Αναζήτηση λέξης"
            className="h-11 pl-9"
          />
        </div>
        <div className="flex flex-wrap rounded-2xl bg-muted p-1" role="group" aria-label="Δοκίμασε τον εαυτό σου">
          {COVER_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={cover === option.value}
              onClick={() => setCover(option.value)}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold transition-colors",
                cover === option.value ? "bg-card shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {option.value !== "none" && <Eye className="size-4" aria-hidden />} {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm font-bold text-muted-foreground">
        {totalWords} λέξεις σε {groups.length} σελίδες του βιβλίου
      </p>

      {sections.length > 1 && (
        <nav aria-label="Μετάβαση σε σελίδα" className="-mx-1 flex flex-wrap gap-1.5">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => jumpTo(section.page)}
              title={section.titleEl}
              className="cursor-pointer rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-extrabold tabular-nums transition-colors hover:bg-muted"
            >
              σελ. {section.page}
            </button>
          ))}
        </nav>
      )}

      {sections.length === 0 && <p className="py-10 text-center text-muted-foreground">Δεν βρέθηκε καμία λέξη.</p>}

      {sections.map((section) => (
        <section key={section.id} id={`unit${unitId}-page-${section.page}`} className="scroll-mt-36 space-y-3">
          <header className="flex flex-wrap items-center gap-2 border-b-2 border-border pb-2">
            <h3 className="text-lg font-extrabold">{section.titleEl}</h3>
            {section.section && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">{section.section}</span>}
            <span className="text-xs font-bold text-muted-foreground">{section.items.length} λέξεις</span>
            <span className="ml-auto flex flex-wrap gap-1.5">
              {isInAulaPdf(section.page) && <SourceLink book="aula" page={aulaPdfPage(section.page)} label="Βιβλίο" variant="ghost" />}
              <Button asChild variant="chunky-outline" size="sm">
                <Link href={playHref({ mode: "flashcards", page: section.page })}>
                  <Layers /> Κάρτες
                </Link>
              </Button>
              <Button asChild variant="chunky" size="sm">
                <Link href={playHref({ mode: "mix", page: section.page })}>
                  <Dumbbell /> Παίξε
                </Link>
              </Button>
            </span>
          </header>

          <ul className="grid gap-2 sm:grid-cols-2">
            {section.items.map((item) => (
              <WordRow key={`${item.id}-${cover}`} item={item} cover={cover} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
