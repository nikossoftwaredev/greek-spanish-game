import { ArrowLeft, ArrowRight, BookOpen, Dumbbell, Link2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuExerciseList } from "@/components/gramatica/gu-exercise-list";
import { LessonBody } from "@/components/grammar/lesson-body";
import { TaughtToggle } from "@/components/grammar/taught-toggle";
import { SourceLink } from "@/components/pdf/source-link";
import { Button } from "@/components/ui/button";
import { GU_UNITS } from "@/content/gramatica";
import { GU_TO_AULA_LESSONS } from "@/content/gramatica-de-uso";
import { getGuUnit, guKey, lessonByKey } from "@/lib/content/selectors";

export const dynamicParams = false;

export const generateStaticParams = () => GU_UNITS.map((unit) => ({ unit: String(unit.number) }));

export const generateMetadata = async ({ params }: { params: Promise<{ unit: string }> }): Promise<Metadata> => {
  const { unit } = await params;
  const found = getGuUnit(Number(unit));
  return { title: found ? `Gramática ${found.number}: ${found.titleEl}` : "Gramática de uso" };
};

const GramaticaUnitPage = async ({ params }: { params: Promise<{ unit: string }> }) => {
  const { unit: unitParam } = await params;
  const unit = getGuUnit(Number(unitParam));
  if (!unit) notFound();

  const key = guKey(unit.number);
  const back = encodeURIComponent(`/gramatica/${unit.number}`);
  const previous = getGuUnit(unit.number - 1);
  const next = getGuUnit(unit.number + 1);
  const related = (GU_TO_AULA_LESSONS[unit.number] ?? []).map((lessonKey) => lessonByKey(lessonKey)).filter((entry) => entry !== undefined);

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <nav aria-label="Διαδρομή" className="text-sm font-bold text-muted-foreground">
        <Link href="/gramatica" className="hover:text-foreground hover:underline">
          Gramática de uso
        </Link>{" "}
        / <span className="text-foreground">Ενότητα {unit.number}</span>
      </nav>

      <header className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-extrabold tracking-wide text-primary-foreground uppercase">
          <BookOpen className="size-3.5" aria-hidden /> Gramática de uso · Ενότητα {unit.number} · σελ. PDF {unit.page}
        </span>
        <h1 className="font-es text-4xl leading-tight font-bold sm:text-5xl">{unit.titleEs}</h1>
        <p className="text-lg font-bold text-muted-foreground">{unit.titleEl}</p>
        <p className="pt-2 text-lg leading-relaxed">{unit.introEl}</p>
        <div className="pt-3">
          <Button asChild variant="chunky" size="xl">
            <Link href={`/play/learn?lesson=${key}&back=${back}`}>
              <Sparkles /> Μάθε το βήμα βήμα με τη Λόλα
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <TaughtToggle lessonKey={key} />
          <SourceLink book="gu" page={unit.page} label={`Θεωρία στο βιβλίο (σελ. ${unit.page})`} />
          <SourceLink book="gu" page={unit.page + 1} label={`Ασκήσεις στο βιβλίο (σελ. ${unit.page + 1})`} />
        </div>
      </header>

      <LessonBody lesson={unit} />

      <GuExerciseList unit={unit} drillCounts={unit.exercisesEl.map((_, index) => unit.drills.filter((drill) => drill.exercise === index + 1).length)} />

      {related.length > 0 && (
        <section className="space-y-2 rounded-3xl border-2 border-border bg-card p-5" aria-label="Σχετικά θέματα στο Aula">
          <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-wide uppercase">
            <Link2 className="size-4" aria-hidden /> Το ίδιο θέμα στο Aula
          </h2>
          <ul className="space-y-1.5">
            {related.map((entry) => (
              <li key={entry.key}>
                <Link href={`/units/${entry.unitId}/grammar/${entry.lesson.id}`} className="font-bold text-primary hover:underline">
                  Κεφάλαιο {entry.unitId}: {entry.lesson.titleEl}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="space-y-4 border-t-2 border-border pt-6">
        <Button asChild variant="chunky" size="xl">
          <Link href={`/play/grammar?lesson=${key}&back=${back}`}>
            <Dumbbell /> Εξάσκηση ({unit.drills.length} ασκήσεις)
          </Link>
        </Button>
        <nav className="flex justify-between gap-3" aria-label="Άλλες ενότητες">
          {previous ? (
            <Link href={`/gramatica/${previous.number}`} className="flex items-center gap-1.5 rounded-2xl border-2 border-border bg-card px-4 py-2 text-sm font-bold shadow-[0_3px_0_0_var(--border)] hover:bg-muted">
              <ArrowLeft className="size-4" aria-hidden /> {previous.number}. {previous.titleEl}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/gramatica/${next.number}`} className="flex items-center gap-1.5 rounded-2xl border-2 border-border bg-card px-4 py-2 text-sm font-bold shadow-[0_3px_0_0_var(--border)] hover:bg-muted">
              {next.number}. {next.titleEl} <ArrowRight className="size-4" aria-hidden />
            </Link>
          )}
        </nav>
      </footer>
    </article>
  );
};

export default GramaticaUnitPage;
