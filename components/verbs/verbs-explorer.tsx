"use client";

import { Repeat2, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VERBS } from "@/content";
import { unitOfVerb } from "@/lib/content/selectors";
import { stripAccents, stripGreekAccents } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import type { VerbType } from "@/types/content";

import { ConjugationTable } from "./conjugation-table";

type Filter = "all" | "regular" | "irregular" | "stem-change" | "reflexive";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Όλα" },
  { value: "regular", label: "Κανονικά" },
  { value: "irregular", label: "Ανώμαλα" },
  { value: "stem-change", label: "Αλλαγή ρίζας" },
  { value: "reflexive", label: "Αυτοπαθή" },
];

const REGULAR: VerbType[] = ["regular-ar", "regular-er", "regular-ir"];

export const VerbsExplorer = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const needle = query.trim().toLowerCase();
  const visible = VERBS.filter((verb) => {
    if (filter === "regular" && !REGULAR.includes(verb.type)) return false;
    if (filter !== "all" && filter !== "regular" && verb.type !== filter) return false;
    if (!needle) return true;
    return (
      stripAccents(verb.infinitive.toLowerCase()).includes(stripAccents(needle)) ||
      stripGreekAccents(verb.el).includes(stripGreekAccents(needle)) ||
      verb.present.some((form) => stripAccents(form.toLowerCase()) === stripAccents(needle))
    );
  });

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Ρήματα</h1>
          <p className="max-w-xl text-muted-foreground">
            Όλα τα ρήματα του βιβλίου με τον ενεστώτα. Με <span className="font-bold text-primary">χρώμα</span> οι ανώμαλοι τύποι. Πάτα οποιαδήποτε
            λέξη για να τη δεις στο λεξικό.
          </p>
        </div>
        <Button asChild variant="chunky" size="xl">
          <Link href="/play/verbs?back=%2Fverbs">
            <Repeat2 /> Εξάσκηση στην κλίση
          </Link>
        </Button>
      </header>

      <div className="space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ψάξε ρήμα (π.χ. tener, έχω, tengo)"
            aria-label="Αναζήτηση ρήματος"
            className="h-11 pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Φίλτρο ρημάτων">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
              className={cn(
                "cursor-pointer rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors",
                filter === item.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 && <p className="py-10 text-center text-muted-foreground">Δεν βρέθηκε κανένα ρήμα.</p>}

      <div className="grid gap-5 lg:grid-cols-2">
        {visible.map((verb) => (
          <div key={verb.id} className="space-y-1.5">
            <ConjugationTable verb={verb} />
            <p className="px-2 text-xs font-bold text-muted-foreground">Πρωτοεμφανίζεται στο κεφάλαιο {unitOfVerb(verb.id)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
