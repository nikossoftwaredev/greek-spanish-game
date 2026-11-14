import type { Metadata } from "next";

import { UnitCard } from "@/components/unit/unit-card";
import { UNITS } from "@/content";

export const metadata: Metadata = { title: "Κεφάλαια" };

const UnitsPage = () => (
  <div className="space-y-6">
    <header className="space-y-1">
      <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Τα κεφάλαια</h1>
      <p className="max-w-2xl text-muted-foreground">
        Ακριβώς όπως στο βιβλίο Aula Internacional Plus 1: λεξιλόγιο, γραμματική και ρήματα κάθε κεφαλαίου, με παιχνίδια για να τα μάθεις.
      </p>
    </header>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {UNITS.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </div>
  </div>
);

export default UnitsPage;
