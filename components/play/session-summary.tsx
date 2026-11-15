"use client";

import { ArrowRight, BookOpen, Clock, Flame, RotateCcw, Star, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { roundAccuracy } from "@/lib/game/accuracy";
import { nextStepForUnit } from "@/lib/game/progress";
import { todayKey } from "@/lib/game/text";
import { lolaVerdict } from "@/lib/mascot/lines";
import { useLolaStore } from "@/lib/stores/lola-store";
import { computeStreak, useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

const CONFETTI_COLORS = ["var(--primary)", "var(--sun)", "var(--success)", "var(--sky)", "var(--destructive)"];

/** Deterministic pieces: no randomness during render. */
const CONFETTI = Array.from({ length: 28 }, (_, index) => ({
  left: (index * 37) % 100,
  delay: (index % 9) * 0.11,
  duration: 2.4 + (index % 5) * 0.35,
  rotate: (index * 53) % 360,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
}));

interface SessionSummaryProps {
  title: string;
  xpGained: number;
  correct: number;
  wrong: number;
  seconds: number;
  exitHref: string;
  exitLabel: string;
  /** Which chapters of each book the session drew from, one line per book. */
  sources?: string[];
  /** The chapter this guided session belongs to: the end screen then offers its next step. */
  chapter?: number;
  onAgain: () => void;
}

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col items-center gap-1 rounded-2xl border-2 border-border bg-card px-3 py-3 shadow-[0_3px_0_0_var(--border)]">
    <span className="text-muted-foreground">{icon}</span>
    <span className="text-2xl font-extrabold tabular-nums">{value}</span>
    <span className="text-xs font-bold text-muted-foreground uppercase">{label}</span>
  </div>
);

export const SessionSummary = ({ title, xpGained, correct, wrong, seconds, exitHref, exitLabel, sources = [], chapter, onAgain }: SessionSummaryProps) => {
  const dailyGoal = useProgressStore((state) => state.dailyGoal);
  const xpToday = useProgressStore((state) => state.xpByDay[todayKey()] ?? 0);
  const activeDays = useProgressStore((state) => state.activeDays);
  const mascot = useSettingsStore((state) => state.mascot);
  const router = useRouter();
  const cards = useProgressStore((state) => state.cards);
  const wordResults = useProgressStore((state) => state.wordResults);
  const drillStats = useProgressStore((state) => state.drillStats);
  const lessonProgress = useProgressStore((state) => state.lessonProgress);
  const next = chapter === undefined ? undefined : nextStepForUnit({ unitId: chapter, progress: { cards, wordResults, drillStats, lessonProgress }, back: encodeURIComponent(`/units/${chapter}`) });

  const say = useLolaStore((state) => state.say);

  const accuracy = roundAccuracy({ correct, wrong });
  const goalPercent = Math.min(100, Math.round((xpToday / dailyGoal) * 100));
  const streak = computeStreak(activeDays).current;
  const verdict = lolaVerdict(accuracy);
  const plainHeadline = accuracy >= 80 ? "¡Muy bien!" : "¡Sigue así!";
  const minutes = Math.floor(seconds / 60);
  const rest = String(seconds % 60).padStart(2, "0");

  // Lola gives her verdict in her speech bubble
  useEffect(() => {
    if (mascot) say(lolaVerdict(accuracy));
  }, [mascot, accuracy, say]);

  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-lg flex-col items-center justify-center gap-8 px-4 py-10 text-center">
      {accuracy >= 60 && (
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden motion-reduce:hidden">
          {CONFETTI.map((piece, index) => (
            <span
              key={index}
              className="absolute top-0 block h-3 w-2 rounded-[2px] opacity-0 motion-safe:animate-[confetti_var(--d)_ease-in_var(--delay)_forwards]"
              style={
                {
                  left: `${piece.left}%`,
                  background: piece.color,
                  rotate: `${piece.rotate}deg`,
                  "--d": `${piece.duration}s`,
                  "--delay": `${piece.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="space-y-3">
        <span className="mx-auto grid size-24 place-items-center rounded-full bg-sun shadow-[0_5px_0_0_var(--sun-edge)] motion-safe:animate-pop">
          <Trophy className="size-12 text-foreground" aria-hidden />
        </span>
        <h1 className="font-es text-4xl font-bold italic">{mascot ? verdict.es : plainHeadline}</h1>
        <p className="text-muted-foreground">{title}</p>
      </div>

      <div className="grid w-full grid-cols-3 gap-3">
        <Stat icon={<Star className="size-5 fill-sun text-sun-edge" />} label="Πόντοι" value={`+${xpGained}`} />
        <Stat icon={<Target className="size-5 text-success" />} label="Ακρίβεια" value={`${accuracy}%`} />
        <Stat icon={<Clock className="size-5" />} label="Χρόνος" value={`${minutes}:${rest}`} />
      </div>

      {sources.length > 0 && (
        <div className="w-full space-y-1 rounded-2xl border-2 border-border bg-card p-4 text-left shadow-[0_3px_0_0_var(--border)]">
          <p className="flex items-center gap-1.5 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
            <BookOpen className="size-3.5" aria-hidden /> Από πού ήταν αυτός ο γύρος
          </p>
          {sources.map((line) => (
            <p key={line} className="text-sm font-bold">
              {line}
            </p>
          ))}
        </div>
      )}

      <div className="w-full space-y-2 rounded-2xl border-2 border-border bg-card p-4 text-left shadow-[0_3px_0_0_var(--border)]">
        <div className="flex items-center justify-between text-sm font-bold">
          <span>Στόχος της ημέρας</span>
          <span className="tabular-nums">
            {Math.min(xpToday, dailyGoal)} / {dailyGoal}
          </span>
        </div>
        <Progress value={goalPercent} className="h-3" />
        {streak > 0 && (
          <p className="flex items-center gap-1.5 pt-1 text-sm text-muted-foreground">
            <Flame className="size-4 text-primary" aria-hidden /> {streak} {streak === 1 ? "ημέρα" : "ημέρες"} στη σειρά
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-3">
        {next && (
          <Button type="button" variant="chunky" size="xl" className="h-auto w-full flex-col gap-0.5 py-3" onClick={() => router.push(`${next.href}&r=${Date.now()}`)}>
            <span className="flex items-center gap-2">
              Επόμενο: {next.title} <ArrowRight />
            </span>
            <span className="text-xs font-semibold opacity-90">{next.detail}</span>
          </Button>
        )}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" variant="chunky-outline" size="xl" className="sm:flex-1" onClick={onAgain} icon={<RotateCcw />}>
            Άλλος γύρος
          </Button>
          <Button asChild variant={next ? "chunky-outline" : "chunky"} size="xl" className="sm:flex-1">
            <Link href={exitHref}>{exitLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
