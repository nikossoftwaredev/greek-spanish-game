"use client";

import { BookOpen } from "lucide-react";

import { SourceLink } from "@/components/pdf/source-link";
import { describeSource } from "@/lib/game/sources";
import type { ExerciseSource } from "@/lib/game/types";

/** Where the thing being practised comes from ("Aula · Κεφάλαιο 3 · σελ. 50"), with a button to the book page. */
export const SourceBadge = ({ source }: { source: ExerciseSource }) => (
  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold text-muted-foreground">
    <span className="inline-flex items-center gap-1.5">
      <BookOpen className="size-3.5" aria-hidden /> {describeSource(source)}
    </span>
    {source.pdfPage !== undefined && <SourceLink book={source.book} page={source.pdfPage} label="Βιβλίο" size="xs" variant="secondary" />}
  </p>
);
