"use client";

import { ArrowRight, BookMarked, ClipboardPlus, Languages, ListChecks, SpellCheck } from "lucide-react";
import Link from "next/link";

import { HOMEWORK_DIALOG } from "@/components/homework/homework-dialog";
import { SourceLink } from "@/components/pdf/source-link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConjugationTable } from "@/components/verbs/conjugation-table";
import type { GramaticaRef } from "@/content/gramatica-de-uso";
import { aulaPdfPage } from "@/lib/pdf/books";
import { useDialogStore } from "@/lib/stores/dialog-store";
import type { Unit, Verb } from "@/types/content";

import { VocabList } from "./vocab-list";

/** Only what the tabs show: the lessons' drills stay on the server. */
export interface UnitTabsData extends Pick<Unit, "id" | "color" | "pages" | "vocab"> {
  grammar: { id: string; titleEs: string; titleEl: string; drillCount: number }[];
}

interface UnitTabsProps {
  unit: UnitTabsData;
  verbs: Verb[];
  gramatica: GramaticaRef[];
}

export const UnitTabs = ({ unit, verbs, gramatica }: UnitTabsProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const back = encodeURIComponent(`/units/${unit.id}`);

  return (
    <Tabs defaultValue="vocab" className="gap-5">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-muted p-1.5">
        <TabsTrigger value="vocab" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
          <Languages className="size-4" aria-hidden /> Λεξιλόγιο
        </TabsTrigger>
        <TabsTrigger value="grammar" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
          <SpellCheck className="size-4" aria-hidden /> Γραμματική
        </TabsTrigger>
        <TabsTrigger value="verbs" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
          <ListChecks className="size-4" aria-hidden /> Ρήματα
        </TabsTrigger>
        <TabsTrigger value="book" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
          <BookMarked className="size-4" aria-hidden /> Στο βιβλίο
        </TabsTrigger>
      </TabsList>

      <TabsContent value="vocab">
        <VocabList groups={unit.vocab} unitId={unit.id} lexicoPage={unit.pages.lexico} />
      </TabsContent>

      <TabsContent value="grammar" className="space-y-3">
        {unit.grammar.length === 0 && <p className="py-8 text-center text-muted-foreground">Αυτό το κεφάλαιο δεν έχει γραμματική.</p>}
        {unit.grammar.map((lesson, index) => (
          <Link
            key={lesson.id}
            href={`/units/${unit.id}/grammar/${lesson.id}`}
            className="group flex items-center gap-4 rounded-3xl border-2 border-border bg-card p-4 shadow-[0_4px_0_0_var(--border)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--border)]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl font-es text-2xl font-bold text-white" style={{ background: unit.color }} aria-hidden>
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-es text-xl leading-tight font-bold">{lesson.titleEs}</h3>
              <p className="text-sm text-muted-foreground">{lesson.titleEl}</p>
              <p className="mt-0.5 text-xs font-bold text-muted-foreground">{lesson.drillCount} ασκήσεις</p>
            </div>
            <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        ))}
      </TabsContent>

      <TabsContent value="verbs" className="space-y-4">
        {verbs.length === 0 && <p className="py-8 text-center text-muted-foreground">Σε αυτό το κεφάλαιο δεν υπάρχουν νέα ρήματα.</p>}
        {verbs.map((verb) => (
          <ConjugationTable key={verb.id} verb={verb} />
        ))}
        {verbs.length > 0 && (
          <Button asChild variant="chunky" size="lg">
            <Link href={`/play/verbs?units=${unit.id}&back=${back}`}>Εξάσκηση στα ρήματα</Link>
          </Button>
        )}
      </TabsContent>

      <TabsContent value="book" className="space-y-5">
        <section className="space-y-2 rounded-3xl border-2 border-border bg-card p-5">
          <h3 className="text-lg font-extrabold">Aula Internacional Plus 1</h3>
          <ul className="space-y-1 text-sm">
            <li>
              Ολόκληρο το κεφάλαιο: σελίδες <strong>{unit.pages.start}</strong> έως <strong>{unit.pages.end}</strong>
            </li>
            {unit.pages.lexico && (
              <li>
                Σελίδα λεξιλογίου (Léxico): <strong>{unit.pages.lexico}</strong>
              </li>
            )}
            {unit.pages.gramatica && (
              <li>
                Σελίδα γραμματικής (Gramática y comunicación): <strong>{unit.pages.gramatica}</strong>
              </li>
            )}
          </ul>
          <p className="text-xs text-muted-foreground">Οι αριθμοί είναι αυτοί που είναι τυπωμένοι στις σελίδες του βιβλίου. Στο PDF είναι μία σελίδα παραπάνω.</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <SourceLink book="aula" page={aulaPdfPage(unit.pages.start)} label="Αρχή κεφαλαίου" />
            {unit.pages.lexico && <SourceLink book="aula" page={aulaPdfPage(unit.pages.lexico)} label={`Σελίδα λεξιλογίου (${unit.pages.lexico})`} />}
            {unit.pages.gramatica && <SourceLink book="aula" page={aulaPdfPage(unit.pages.gramatica)} label={`Σελίδα γραμματικής (${unit.pages.gramatica})`} />}
          </div>
        </section>

        <section className="space-y-3 rounded-3xl border-2 border-border bg-card p-5">
          <h3 className="text-lg font-extrabold">Το ίδιο θέμα στη Gramática de uso (δεύτερο βιβλίο)</h3>
          {gramatica.length === 0 && <p className="text-sm text-muted-foreground">Δεν έχει αντιστοιχηθεί ενότητα.</p>}
          <ul className="space-y-2">
            {gramatica.map((ref) => (
              <li key={ref.number}>
                <Link href={`/gramatica/${ref.number}`} className="flex items-baseline gap-3 rounded-xl bg-muted px-3 py-2 text-sm transition-colors hover:bg-accent">
                  <span className="rounded-lg bg-background px-2 py-0.5 font-extrabold tabular-nums">U{ref.number}</span>
                  <span className="flex-1">
                    <span className="font-es text-base font-semibold">{ref.es}</span>
                    <span className="block text-muted-foreground">{ref.el}</span>
                  </span>
                  <span className="shrink-0 text-xs font-bold text-muted-foreground">σελ. PDF {ref.page}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Button type="button" variant="chunky-outline" size="lg" onClick={() => openDialog(HOMEWORK_DIALOG, { unitId: unit.id })} icon={<ClipboardPlus />}>
          Πρόσθεσε εργασία για αυτό το κεφάλαιο
        </Button>
      </TabsContent>
    </Tabs>
  );
};
