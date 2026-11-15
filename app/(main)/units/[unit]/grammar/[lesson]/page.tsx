import { ArrowRight, Dumbbell } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LearnLessonButton } from "@/components/grammar/learn-lesson-button";
import { LessonBody } from "@/components/grammar/lesson-body";
import { TaughtToggle } from "@/components/grammar/taught-toggle";
import { SourceLink } from "@/components/pdf/source-link";
import { GrammarProgressBar } from "@/components/progress/sticky-progress";
import { Button } from "@/components/ui/button";
import { UNITS, VERBS } from "@/content";
import { getLesson, getUnit, onUnitColor } from "@/lib/content/selectors";
import { aulaPdfPage } from "@/lib/pdf/books";

interface LessonParams {
  unit: string;
  lesson: string;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  UNITS.flatMap((unit) => unit.grammar.map((lesson) => ({ unit: String(unit.id), lesson: lesson.id })));

export const generateMetadata = async ({ params }: { params: Promise<LessonParams> }): Promise<Metadata> => {
  const { unit, lesson } = await params;
  return { title: getLesson({ unitId: Number(unit), lessonId: lesson })?.titleEl ?? "Γραμματική" };
};

const LessonPage = async ({ params }: { params: Promise<LessonParams> }) => {
  const { unit: unitParam, lesson: lessonParam } = await params;
  const unit = getUnit(Number(unitParam));
  const lesson = unit?.grammar.find((candidate) => candidate.id === lessonParam);
  if (!unit || !lesson) notFound();

  const index = unit.grammar.findIndex((candidate) => candidate.id === lesson.id);
  const next = unit.grammar[index + 1];
  const key = `${unit.id}:${lesson.id}`;
  const back = encodeURIComponent(`/units/${unit.id}/grammar/${lesson.id}`);
  const lessonVerbs = unit.verbIds
    .map((id) => VERBS.find((verb) => verb.id === id))
    .filter((verb) => verb !== undefined)
    .filter((verb) => lesson.tables?.some((table) => table.headers.some((header) => header.toLowerCase().includes(verb.infinitive))));

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <GrammarProgressBar lessonKey={key} />

      <nav aria-label="Διαδρομή" className="text-sm font-bold text-muted-foreground">
        <Link href="/units" className="hover:text-foreground hover:underline">
          Aula
        </Link>{" "}
        /{" "}
        <Link href={`/units/${unit.id}`} className="hover:text-foreground hover:underline">
          {unit.titleEs}
        </Link>{" "}
        / <span className="text-foreground">Γραμματική</span>
      </nav>

      <header className="space-y-2">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-extrabold tracking-wide uppercase"
          style={{ background: unit.color, color: onUnitColor(unit.color) }}
        >
          Aula · Κεφάλαιο {unit.id} · Θέμα {index + 1} από {unit.grammar.length}
        </span>
        <h1 className="font-es text-4xl leading-tight font-bold sm:text-5xl">{lesson.titleEs}</h1>
        <p className="text-lg font-bold text-muted-foreground">{lesson.titleEl}</p>
        <p className="pt-2 text-lg leading-relaxed">{lesson.introEl}</p>
        <div className="pt-3">
          <LearnLessonButton lessonKey={key} back={back} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <TaughtToggle lessonKey={key} />
          {unit.pages.gramatica && <SourceLink book="aula" page={aulaPdfPage(unit.pages.gramatica)} label={`Σελίδα γραμματικής στο βιβλίο (${unit.pages.gramatica})`} />}
        </div>
      </header>

      <LessonBody lesson={lesson} verbs={lessonVerbs} />

      <footer className="flex flex-wrap items-center gap-3 border-t-2 border-border pt-6">
        <Button asChild variant="chunky" size="xl">
          <Link href={`/play/grammar?lesson=${key}&back=${back}`}>
            <Dumbbell /> Εξάσκηση ({lesson.drills.length} ασκήσεις)
          </Link>
        </Button>
        {next && (
          <Button asChild variant="chunky-outline" size="xl">
            <Link href={`/units/${unit.id}/grammar/${next.id}`}>
              Επόμενο θέμα <ArrowRight />
            </Link>
          </Button>
        )}
      </footer>
    </article>
  );
};

export default LessonPage;
