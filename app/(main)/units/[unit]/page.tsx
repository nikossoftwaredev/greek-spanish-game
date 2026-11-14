import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { UnitHero } from "@/components/unit/unit-hero";
import { UnitTabs } from "@/components/unit/unit-tabs";
import { UNITS, VERBS } from "@/content";
import { gramaticaRefsForUnit } from "@/content/gramatica-de-uso";
import { getUnit } from "@/lib/content/selectors";

export const dynamicParams = false;

export const generateStaticParams = () => UNITS.map((unit) => ({ unit: String(unit.id) }));

export const generateMetadata = async ({ params }: { params: Promise<{ unit: string }> }): Promise<Metadata> => {
  const { unit } = await params;
  const found = getUnit(Number(unit));
  return { title: found ? `${found.id}. ${found.titleEs}` : "Κεφάλαιο" };
};

const UnitPage = async ({ params }: { params: Promise<{ unit: string }> }) => {
  const { unit: unitParam } = await params;
  const unit = getUnit(Number(unitParam));
  if (!unit) notFound();

  const verbs = unit.verbIds.map((id) => VERBS.find((verb) => verb.id === id)).filter((verb) => verb !== undefined);
  const tabsData = {
    id: unit.id,
    color: unit.color,
    pages: unit.pages,
    vocab: unit.vocab,
    grammar: unit.grammar.map(({ id, titleEs, titleEl, drills }) => ({ id, titleEs, titleEl, drillCount: drills.length })),
  };
  const previous = getUnit(unit.id - 1);
  const next = getUnit(unit.id + 1);

  return (
    <div className="space-y-6">
      <nav aria-label="Διαδρομή" className="text-sm font-bold text-muted-foreground">
        <Link href="/units" className="hover:text-foreground hover:underline">
          Κεφάλαια
        </Link>{" "}
        / <span className="text-foreground">{unit.titleEs}</span>
      </nav>

      <UnitHero unit={unit} />
      <UnitTabs unit={tabsData} verbs={verbs} gramatica={gramaticaRefsForUnit(unit.id)} />

      <nav className="flex justify-between gap-3 pt-2" aria-label="Άλλα κεφάλαια">
        {previous ? (
          <Link href={`/units/${previous.id}`} className="rounded-2xl border-2 border-border bg-card px-4 py-2 text-sm font-bold shadow-[0_3px_0_0_var(--border)] hover:bg-muted">
            ← {previous.id}. {previous.titleEs}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/units/${next.id}`} className="rounded-2xl border-2 border-border bg-card px-4 py-2 text-sm font-bold shadow-[0_3px_0_0_var(--border)] hover:bg-muted">
            {next.id}. {next.titleEs} →
          </Link>
        )}
      </nav>
    </div>
  );
};

export default UnitPage;
