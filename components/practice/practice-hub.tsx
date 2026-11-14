"use client";

import { Layers, PencilLine, Puzzle, Repeat2, Sparkles, SpellCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { UNITS } from "@/content";
import { useHydrated } from "@/hooks/use-hydrated";
import { onUnitColor } from "@/lib/content/selectors";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";

const GAMES: { mode: string; title: string; text: string; icon: typeof Sparkles; tone: string; href?: string }[] = [
  { mode: "mix", title: "Μάθημα", text: "Ανάμεικτες ασκήσεις: λέξεις, γραμματική και ρήματα. Το καλύτερο για καθημερινή εξάσκηση.", icon: Sparkles, tone: "bg-primary text-primary-foreground" },
  { mode: "flashcards", title: "Φλας κάρτες", text: "Επανάληψη με έξυπνο χρονοδιάγραμμα (FSRS): ξαναβλέπεις κάθε λέξη ακριβώς πριν τη ξεχάσεις.", icon: Layers, tone: "bg-sky text-white" },
  { mode: "match", title: "Αντιστοίχιση", text: "Ταίριαξε τις ισπανικές λέξεις με τα ελληνικά τους, όσο πιο γρήγορα μπορείς.", icon: Puzzle, tone: "bg-success text-white" },
  { mode: "type", title: "Γράψε τη λέξη", text: "Δες τη σημασία και γράψε τη λέξη στα ισπανικά, με τόνους και ñ.", icon: PencilLine, tone: "bg-sun text-foreground" },
  { mode: "verbs", title: "Κλίση ρημάτων", text: "Κλίνε τα ρήματα του κεφαλαίου σε όλα τα πρόσωπα του ενεστώτα.", icon: Repeat2, tone: "bg-foreground text-background" },
  { mode: "grammar", title: "Γραμματική", text: "Τίκαρε όσα έχετε διδαχθεί και κάνε εξάσκηση με τις ασκήσεις αυτών των θεμάτων.", icon: SpellCheck, tone: "bg-sky text-white", href: "/grammar" },
];

export const PracticeHub = () => {
  const hydrated = useHydrated();
  const classUnit = useProgressStore((state) => state.classUnit);
  const [custom, setCustom] = useState<number[] | null>(null);

  const selected = custom ?? UNITS.filter((unit) => unit.id <= classUnit).map((unit) => unit.id);
  const unitsQuery = selected.join(",");

  const toggle = (id: number) => {
    const base = custom ?? selected;
    setCustom(base.includes(id) ? base.filter((value) => value !== id) : [...base, id].sort((a, b) => a - b));
  };

  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Παιχνίδια</h1>
        <p className="max-w-2xl text-muted-foreground">Διάλεξε από ποια κεφάλαια θα παίξεις και μετά το είδος του παιχνιδιού.</p>
      </header>

      <section className="space-y-3 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Κεφάλαια">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold">Από ποια κεφάλαια;</h2>
          <div className="flex gap-2">
            <Button type="button" size="sm" variant="secondary" onClick={() => setCustom(null)}>
              Μέχρι την τάξη ({classUnit})
            </Button>
            <Button type="button" size="sm" variant="secondary" onClick={() => setCustom(UNITS.map((unit) => unit.id))}>
              Όλα
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {UNITS.map((unit) => {
            const active = selected.includes(unit.id);
            return (
              <button
                key={unit.id}
                type="button"
                aria-pressed={active}
                title={unit.titleEs}
                onClick={() => toggle(unit.id)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-2xl border-2 px-3 py-2 text-sm font-bold transition-all active:translate-y-0.5",
                  active ? "border-transparent shadow-[0_3px_0_0_rgb(0_0_0/0.25)]" : "border-border bg-card text-muted-foreground opacity-80 hover:opacity-100",
                )}
                style={active ? { background: unit.color, color: onUnitColor(unit.color) } : undefined}
              >
                <span className="font-es text-lg font-bold">{unit.id}</span>
                <span className="hidden sm:inline">{unit.titleEs}</span>
              </button>
            );
          })}
        </div>
        {hydrated && selected.length === 0 && <p className="text-sm font-bold text-destructive">Διάλεξε τουλάχιστον ένα κεφάλαιο.</p>}
      </section>

      <section className="grid gap-4 sm:grid-cols-2" aria-label="Είδη παιχνιδιών">
        {GAMES.map((game) => (
          <Link
            key={game.mode}
            href={game.href ?? (selected.length === 0 ? "#" : `/play/${game.mode}?units=${unitsQuery}&back=%2Fpractice`)}
            aria-disabled={!game.href && selected.length === 0}
            className="group flex gap-4 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--border)] aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            <span className={cn("grid size-14 shrink-0 place-items-center rounded-2xl shadow-[0_3px_0_0_rgb(0_0_0/0.2)]", game.tone)}>
              <game.icon className="size-7" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-extrabold">{game.title}</h3>
              <p className="text-sm text-muted-foreground">{game.text}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
