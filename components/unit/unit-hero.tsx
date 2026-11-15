import { BookOpen, Languages, Layers, PencilLine, Puzzle, Repeat2, Shuffle } from "lucide-react";
import Link from "next/link";

import { SourceLink } from "@/components/pdf/source-link";
import { Button } from "@/components/ui/button";
import { UnitActions } from "@/components/unit/unit-actions";
import { onUnitColor, unitCounts } from "@/lib/content/selectors";
import { aulaPdfPage } from "@/lib/pdf/books";
import type { Unit } from "@/types/content";

const pagesLabel = (unit: Unit): string => {
  const { start, end, lexico, gramatica } = unit.pages;
  const parts = [`Aula σελ. ${start} έως ${end}`];
  if (lexico) parts.push(`Léxico σελ. ${lexico}`);
  if (gramatica) parts.push(`Gramática σελ. ${gramatica}`);
  return parts.join(" · ");
};

export const UnitHero = ({ unit }: { unit: Unit }) => {
  const on = onUnitColor(unit.color);
  const counts = unitCounts(unit);
  const back = encodeURIComponent(`/units/${unit.id}`);
  const link = (mode: string): string => `/play/${mode}?units=${unit.id}&back=${back}`;

  const games = [
    { mode: "flashcards", label: "Φλας κάρτες", icon: Layers },
    { mode: "match", label: "Αντιστοίχιση", icon: Puzzle },
    { mode: "type", label: "Γράψε", icon: PencilLine },
    { mode: "translate", label: "Μετάφραση", icon: Languages },
    { mode: "scramble", label: "Γράμματα", icon: Shuffle },
    { mode: "verbs", label: "Ρήματα", icon: Repeat2 },
  ];

  return (
    <header className="overflow-hidden rounded-[2rem] border-2 border-border bg-card shadow-[0_5px_0_0_var(--border)]">
      <div className="relative px-5 pt-6 pb-8 sm:px-8" style={{ background: unit.color, color: on }}>
        <span className="pointer-events-none absolute -top-6 right-2 font-es text-[11rem] leading-none font-bold opacity-15 select-none" aria-hidden>
          {unit.id}
        </span>
        <p className="relative flex items-center gap-1.5 text-xs font-extrabold tracking-widest uppercase opacity-85">
          <BookOpen className="size-3.5" aria-hidden /> Κεφάλαιο {unit.id}
        </p>
        <h1 className="relative mt-1 font-es text-4xl leading-tight font-bold sm:text-5xl">{unit.titleEs}</h1>
        <p className="relative text-lg font-bold opacity-90">{unit.titleEl}</p>
        <p className="relative mt-3 max-w-2xl text-base opacity-95">{unit.goalEl}</p>
        <div className="relative mt-4 flex flex-wrap items-center gap-2">
          <p className="inline-block rounded-full bg-black/15 px-3 py-1 text-xs font-bold">{pagesLabel(unit)}</p>
          <SourceLink book="aula" page={aulaPdfPage(unit.pages.start)} label="Άνοιγμα κεφαλαίου στο βιβλίο" variant="secondary" size="xs" />
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <ul className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
          {unit.communicativeEl.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: unit.color }} aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-bold text-muted-foreground">
          <span>{counts.words} λέξεις</span>
          <span>{counts.lessons} γραμματικά θέματα</span>
          <span>{counts.drills} ασκήσεις γραμματικής</span>
          <span>{counts.verbs} ρήματα</span>
        </div>

        <UnitActions unitId={unit.id} />

        <div className="flex flex-wrap gap-2.5">
          {games.map((game) => (
            <Button key={game.mode} asChild variant="chunky-outline" size="lg">
              <Link href={link(game.mode)}>
                <game.icon /> {game.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};
