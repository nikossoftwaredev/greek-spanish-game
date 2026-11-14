import { TappableText } from "@/components/tappable-text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/general/utils";
import type { Verb, VerbType } from "@/types/content";

const PERSONS = ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ellos / ellas / ustedes"];

export const VERB_TYPE_LABEL: Record<VerbType, string> = {
  "regular-ar": "κανονικό -ar",
  "regular-er": "κανονικό -er",
  "regular-ir": "κανονικό -ir",
  irregular: "ανώμαλο",
  "stem-change": "αλλαγή ρίζας",
  reflexive: "αυτοπαθές",
};

/** The present tense of one verb. Irregular forms are highlighted. */
export const ConjugationTable = ({ verb }: { verb: Verb }) => (
  <article className="space-y-3 rounded-3xl border-2 border-border bg-card p-4 shadow-[0_4px_0_0_var(--border)] sm:p-5">
    <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <h3 className="font-es text-3xl leading-none font-bold">{verb.infinitive}</h3>
      <span className="font-bold text-muted-foreground">{verb.el}</span>
      <Badge variant={verb.type === "irregular" ? "default" : "secondary"} className="ml-auto">
        {VERB_TYPE_LABEL[verb.type]}
      </Badge>
    </header>

    <dl className="grid overflow-hidden rounded-2xl border-2 border-border sm:grid-cols-2">
      {PERSONS.map((person, index) => {
        const irregular = verb.irregularIndexes.includes(index);
        return (
          <div
            key={person}
            className={cn("flex items-center justify-between gap-3 px-3 py-2", index % 2 === 0 && "sm:border-r-2 sm:border-border", index > 1 && "border-t-2 border-border", index === 1 && "border-t-2 border-border sm:border-t-0")}
          >
            <dt className="text-xs font-bold text-muted-foreground">{person}</dt>
            <dd className={cn("flex items-center gap-1 font-es text-xl font-semibold", irregular && "text-primary")}>
              {verb.present[index]}
              {irregular && <span className="size-1.5 rounded-full bg-primary" aria-label="ανώμαλος τύπος" />}
            </dd>
          </div>
        );
      })}
    </dl>

    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      {verb.participle && (
        <p>
          <span className="font-bold text-muted-foreground">Μετοχή:</span>{" "}
          <span className={cn("font-es text-lg font-semibold", verb.participleIrregular && "text-primary")}>{verb.participle}</span>
        </p>
      )}
      {verb.noteEl && <p className="text-muted-foreground">{verb.noteEl}</p>}
    </div>

    {verb.example && (
      <p className="rounded-xl bg-muted px-3 py-2 text-sm">
        <TappableText text={verb.example.es} context={verb.example} className="font-es text-lg" />
        <span className="block text-muted-foreground">{verb.example.el}</span>
      </p>
    )}
  </article>
);
