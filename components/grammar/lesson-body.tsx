import { Lightbulb } from "lucide-react";

import { GrammarTable } from "@/components/grammar/grammar-table";
import { TappableText } from "@/components/tappable-text";
import { ConjugationTable } from "@/components/verbs/conjugation-table";
import type { GrammarLesson, Verb } from "@/types/content";

interface LessonBodyProps {
  lesson: GrammarLesson;
  /** Verbs whose present-tense table is shown under the lesson's own tables. */
  verbs?: Verb[];
}

/** The reading part of a grammar lesson, shared by the Aula lessons and the Gramática de uso units. */
export const LessonBody = ({ lesson, verbs = [] }: LessonBodyProps) => (
  <>
    <section aria-label="Κανόνες">
      <ol className="space-y-4">
        {lesson.rules.map((rule, ruleIndex) => (
          <li key={ruleIndex} className="flex gap-4 rounded-3xl border-2 border-border bg-card p-4 shadow-[0_3px_0_0_var(--border)] sm:p-5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground" aria-hidden>
              {ruleIndex + 1}
            </span>
            <div className="min-w-0 flex-1 space-y-3">
              <p className="leading-relaxed">{rule.textEl}</p>
              {rule.examples && (
                <ul className="space-y-2">
                  {rule.examples.map((example) => (
                    <li key={example.es} className="rounded-xl bg-muted px-3 py-2">
                      <TappableText text={example.es} context={example} className="font-es text-xl font-semibold" />
                      <span className="block text-sm text-muted-foreground">{example.el}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>

    {lesson.tables && lesson.tables.length > 0 && (
      <section className="space-y-5" aria-label="Πίνακες">
        {lesson.tables.map((table) => (
          <GrammarTable key={table.titleEl} table={table} />
        ))}
      </section>
    )}

    {verbs.length > 0 && (
      <section className="space-y-4" aria-label="Ρήματα">
        {verbs.map((verb) => (
          <ConjugationTable key={verb.id} verb={verb} />
        ))}
      </section>
    )}

    {lesson.tipsEl && lesson.tipsEl.length > 0 && (
      <aside className="space-y-2 rounded-3xl border-2 border-sun-edge/50 bg-sun/20 p-5" aria-label="Συμβουλές">
        <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-wide uppercase">
          <Lightbulb className="size-4" aria-hidden /> Για να μην κάνεις λάθος
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          {lesson.tipsEl.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </aside>
    )}
  </>
);
