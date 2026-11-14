"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import { GuUnitList } from "./gu-unit-list";

/** Search box plus the list of units: type a number ("50") or a topic ("irregulares", "γερούνδιο"). */
export const GuBrowser = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ψάξε ενότητα: αριθμό (50) ή θέμα (irregulares, προστακτική)"
          aria-label="Αναζήτηση ενότητας"
          inputMode="search"
          className="h-11 pl-9"
        />
      </div>
      <GuUnitList query={query} />
    </div>
  );
};
