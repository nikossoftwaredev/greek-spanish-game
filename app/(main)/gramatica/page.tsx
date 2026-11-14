import { ListChecks } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { GuBrowser } from "@/components/gramatica/gu-browser";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Gramática de uso" };

const GramaticaPage = () => (
  <div className="space-y-6">
    <header className="space-y-2">
      <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Gramática de uso</h1>
      <p className="max-w-2xl text-muted-foreground">
        Το δεύτερο βιβλίο της τάξης: 107 ενότητες, καθεμία με θεωρία και ασκήσεις. Όταν η καθηγήτρια δίνει «50.2», εννοεί την ενότητα 50, άσκηση 2. Βρες την, διάβασε τη θεωρία και κάνε εξάσκηση.
      </p>
      <Button asChild variant="chunky-outline" size="sm">
        <Link href="/grammar">
          <ListChecks /> Τι έχουμε κάνει (και στα δύο βιβλία)
        </Link>
      </Button>
    </header>
    <GuBrowser />
  </div>
);

export default GramaticaPage;
