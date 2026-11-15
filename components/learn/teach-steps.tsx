"use client";

import { Languages, Lightbulb } from "lucide-react";
import { useState } from "react";

import { GrammarTable } from "@/components/grammar/grammar-table";
import { TappableText } from "@/components/tappable-text";
import { Button } from "@/components/ui/button";
import { useSettingsStore } from "@/lib/stores/settings-store";
import type { GrammarLesson, GrammarRule, GrammarTable as GrammarTableData } from "@/types/content";

export const IntroStep = ({ lesson, stepCount }: { lesson: GrammarLesson; stepCount: number }) => (
  <div className="space-y-6">
    <div className="space-y-1">
      <p className="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Μάθημα γραμματικής · {stepCount} βήματα</p>
      <h1 className="font-es text-4xl leading-tight font-bold">{lesson.titleEs}</h1>
      <p className="text-lg font-bold text-muted-foreground">{lesson.titleEl}</p>
    </div>
    <p className="text-lg leading-relaxed">{lesson.introEl}</p>
    <p className="text-sm text-muted-foreground">Θα δούμε κάθε κανόνα με παραδείγματα, θα τον δοκιμάσεις μόνος σου και στο τέλος θα έχεις ένα μικρό τεστ.</p>
  </div>
);

interface RuleStepProps {
  rule: GrammarRule;
  ruleIndex: number;
  total: number;
}

/** One rule: the explanation first, then the examples arrive one by one. Translations wait for a button. */
export const RuleStep = ({ rule, ruleIndex, total }: RuleStepProps) => {
  const always = useSettingsStore((state) => state.showTranslations);
  const [asked, setAsked] = useState(false);
  const showTranslations = always || asked;

  return (
    <div className="space-y-6">
      <p className="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
        Κανόνας {ruleIndex + 1} από {total}
      </p>
      <p className="text-xl leading-relaxed font-bold">{rule.textEl}</p>

      {rule.examples && rule.examples.length > 0 && (
        <div className="space-y-3">
          <ul className="space-y-3" aria-label="Παραδείγματα">
            {rule.examples.map((example, index) => (
              <li
                key={example.es}
                className="flex items-start gap-2 rounded-2xl border-2 border-border bg-card px-4 py-3 shadow-[0_3px_0_0_var(--border)] motion-safe:animate-rise"
                style={{ animationDelay: `${150 + index * 160}ms` }}
              >
                <div className="min-w-0 flex-1">
                  <TappableText text={example.es} context={example} className="font-es text-2xl leading-snug font-semibold" />
                  {showTranslations && <span className="mt-0.5 block text-sm text-muted-foreground">{example.el}</span>}
                </div>
              </li>
            ))}
          </ul>
          {!showTranslations && (
            <Button type="button" variant="chunky-outline" size="sm" onClick={() => setAsked(true)} icon={<Languages />}>
              Μετάφραση
            </Button>
          )}
        </div>
      )}

    </div>
  );
};

export const TableStep = ({ table }: { table: GrammarTableData }) => (
  <div className="space-y-5">
    <p className="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Ο πίνακας</p>
    <GrammarTable table={table} />
  </div>
);

export const TipsStep = ({ tips }: { tips: string[] }) => (
  <div className="space-y-5">
    <p className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
      <Lightbulb className="size-4" aria-hidden /> Για να μην κάνεις λάθος
    </p>
    <ul className="space-y-3">
      {tips.map((tip, index) => (
        <li
          key={tip}
          className="rounded-2xl border-2 border-sun-edge/50 bg-sun/20 px-4 py-3 leading-relaxed motion-safe:animate-rise"
          style={{ animationDelay: `${index * 140}ms` }}
        >
          {tip}
        </li>
      ))}
    </ul>
  </div>
);
