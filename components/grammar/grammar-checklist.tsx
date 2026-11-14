"use client";

import { BookOpen, CheckCheck, Dumbbell, Eraser, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { GuUnitList } from "@/components/gramatica/gu-unit-list";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UNITS } from "@/content";
import { GU_UNITS } from "@/content/gramatica";
import { useHydrated } from "@/hooks/use-hydrated";
import { EVERY_LESSON, guKey, onUnitColor } from "@/lib/content/selectors";
import { accuracyOf, accuracyTone } from "@/lib/game/accuracy";
import { cn } from "@/lib/general/utils";
import { useProgressStore } from "@/lib/stores/progress-store";

const AULA_KEYS = UNITS.flatMap((unit) => unit.grammar.map((lesson) => `${unit.id}:${lesson.id}`));
const GU_KEYS = GU_UNITS.map((unit) => guKey(unit.number));
const ALL_KEYS = EVERY_LESSON.map((entry) => entry.key);

const AulaPanel = () => {
  const taught = useProgressStore((state) => state.taughtLessons);
  const toggleTaught = useProgressStore((state) => state.toggleTaught);
  const setTaught = useProgressStore((state) => state.setTaught);
  const classUnit = useProgressStore((state) => state.classUnit);
  const drillStats = useProgressStore((state) => state.drillStats);

  const handleUpToClass = () =>
    setTaught([
      ...taught.filter((key) => !AULA_KEYS.includes(key)),
      ...UNITS.filter((unit) => unit.id <= classUnit).flatMap((unit) => unit.grammar.map((lesson) => `${unit.id}:${lesson.id}`)),
    ]);

  const setUnit = ({ unitId, on }: { unitId: number; on: boolean }) => {
    const unitKeys = AULA_KEYS.filter((key) => key.startsWith(`${unitId}:`));
    if (on) setTaught([...taught, ...unitKeys]);
    else setTaught(taught.filter((key) => !unitKeys.includes(key)));
  };

  return (
    <div className="space-y-5">
      <Button type="button" variant="chunky-outline" size="lg" onClick={handleUpToClass} icon={<Target />}>
        Τίκαρε όλα μέχρι το κεφάλαιο {classUnit}
      </Button>

      {UNITS.filter((unit) => unit.grammar.length > 0).map((unit) => {
        const keys = unit.grammar.map((lesson) => `${unit.id}:${lesson.id}`);
        const done = keys.filter((key) => taught.includes(key)).length;
        const allDone = done === keys.length;
        return (
          <section key={unit.id} className="overflow-hidden rounded-3xl border-2 border-border bg-card shadow-[0_4px_0_0_var(--border)]">
            <header className="flex flex-wrap items-center gap-3 px-4 py-3" style={{ background: unit.color, color: onUnitColor(unit.color) }}>
              <span className="font-es text-4xl leading-none font-bold" aria-hidden>
                {unit.id}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-es text-xl leading-tight font-bold">{unit.titleEs}</h2>
                <p className="text-xs font-bold opacity-85">
                  {done} από {keys.length} θέματα
                </p>
              </div>
              <button
                type="button"
                onClick={() => setUnit({ unitId: unit.id, on: !allDone })}
                className="flex cursor-pointer items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5 text-xs font-extrabold transition-colors hover:bg-black/30"
                style={{ color: onUnitColor(unit.color) }}
              >
                <CheckCheck className="size-4" aria-hidden /> {allDone ? "Ξετίκαρε όλα" : "Τίκαρε όλα"}
              </button>
            </header>

            <ul className="divide-y-2 divide-border">
              {unit.grammar.map((lesson) => {
                const key = `${unit.id}:${lesson.id}`;
                const checked = taught.includes(key);
                const accuracy = accuracyOf({ stats: drillStats, lessonKey: key });
                return (
                  <li key={lesson.id} className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 transition-colors", checked && "bg-success-soft/50")}>
                    <label className="flex min-w-0 basis-full cursor-pointer items-start gap-3 sm:flex-1 sm:basis-0">
                      <Checkbox checked={checked} onCheckedChange={() => toggleTaught(key)} className="mt-1 size-6 rounded-lg border-2 border-edge" aria-label={`Έχουμε κάνει: ${lesson.titleEl}`} />
                      <span className="min-w-0">
                        <span className="block font-es text-lg leading-snug font-bold">{lesson.titleEs}</span>
                        <span className="block text-sm text-muted-foreground">{lesson.titleEl}</span>
                        <span className="mt-0.5 flex flex-wrap gap-x-3 text-xs font-bold text-muted-foreground">
                          <span>{lesson.drills.length} ασκήσεις</span>
                          {accuracy !== null && <span className={accuracyTone(accuracy)}>{accuracy}% σωστές</span>}
                        </span>
                      </span>
                    </label>
                    <span className="flex gap-1.5">
                      <Button asChild variant="chunky-outline" size="sm">
                        <Link href={`/units/${unit.id}/grammar/${lesson.id}`}>
                          <BookOpen /> Διάβασε
                        </Link>
                      </Button>
                      <Button asChild variant="chunky" size="sm">
                        <Link href={`/play/grammar?lesson=${key}&back=%2Fgrammar`}>
                          <Dumbbell /> Εξάσκηση
                        </Link>
                      </Button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

const GuPanel = () => {
  const taught = useProgressStore((state) => state.taughtLessons);
  const setTaught = useProgressStore((state) => state.setTaught);
  const [upTo, setUpTo] = useState("");

  const limit = Number(upTo);
  const canApply = Number.isInteger(limit) && limit >= 1 && limit <= 107;

  const handleUpTo = () => {
    if (!canApply) return;
    setTaught([...taught.filter((key) => !GU_KEYS.includes(key)), ...GU_UNITS.filter((unit) => unit.number <= limit).map((unit) => guKey(unit.number))]);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="gu-upto" className="text-sm font-bold">
          Τίκαρε όλες τις ενότητες μέχρι την
        </label>
        <Input id="gu-upto" value={upTo} onChange={(event) => setUpTo(event.target.value)} inputMode="numeric" placeholder="51" className="h-10 w-24" />
        <Button type="button" variant="chunky-outline" onClick={handleUpTo} disabled={!canApply} icon={<Target />}>
          Τίκαρε
        </Button>
      </div>
      <GuUnitList />
    </div>
  );
};

export const GrammarChecklist = () => {
  const hydrated = useHydrated();
  const taught = useProgressStore((state) => state.taughtLessons);
  const setTaught = useProgressStore((state) => state.setTaught);

  const taughtCount = taught.filter((key) => ALL_KEYS.includes(key)).length;
  const aulaCount = taught.filter((key) => AULA_KEYS.includes(key)).length;
  const guCount = taught.filter((key) => GU_KEYS.includes(key)).length;
  const percent = Math.round((taughtCount / ALL_KEYS.length) * 100);

  if (!hydrated)
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-40 rounded-3xl" />
        <Skeleton className="h-64 rounded-3xl" />
      </div>
    );

  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Τι έχουμε κάνει</h1>
        <p className="max-w-2xl text-muted-foreground">
          Τίκαρε τα θέματα που έχετε διδαχθεί, και στα δύο βιβλία. Τα παιχνίδια και η εξάσκηση θα σου δίνουν ασκήσεις μόνο από αυτά.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Σύνοψη">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-extrabold">Όσα έχουμε διδαχθεί</h2>
            <span className="text-sm font-extrabold tabular-nums">
              {taughtCount} από {ALL_KEYS.length} θέματα
            </span>
          </div>
          <Progress value={percent} className="h-3" />
          <p className="text-xs font-bold text-muted-foreground">
            Aula: {aulaCount} από {AULA_KEYS.length} · Gramática de uso: {guCount} από {GU_KEYS.length}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {taughtCount > 0 && (
            <Button asChild variant="chunky" size="xl">
              <Link href="/play/grammar?taught=1&back=%2Fgrammar">
                <Dumbbell /> Εξάσκηση σε όσα έχουμε κάνει
              </Link>
            </Button>
          )}
          {taughtCount === 0 && (
            <Button type="button" variant="chunky" size="xl" disabled icon={<Dumbbell />}>
              Εξάσκηση σε όσα έχουμε κάνει
            </Button>
          )}
          <Button type="button" variant="ghost" size="lg" onClick={() => setTaught([])} disabled={taughtCount === 0} icon={<Eraser />}>
            Καθάρισε όλα
          </Button>
        </div>
        {taughtCount === 0 && <p className="text-sm text-muted-foreground">Δεν έχεις τικάρει κανένα θέμα ακόμα.</p>}
      </section>

      <Tabs defaultValue="aula" className="gap-5">
        <TabsList className="h-auto w-full justify-start gap-1 rounded-2xl bg-muted p-1.5">
          <TabsTrigger value="aula" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
            Aula Internacional Plus 1
          </TabsTrigger>
          <TabsTrigger value="gu" className="gap-1.5 rounded-xl px-4 py-2 font-bold">
            Gramática de uso
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aula">
          <AulaPanel />
        </TabsContent>
        <TabsContent value="gu">
          <GuPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
};
