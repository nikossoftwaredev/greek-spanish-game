"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { LessonPlayer } from "@/components/learn/lesson-player";
import { UNITS } from "@/content";
import { useHydrated } from "@/hooks/use-hydrated";
import { lessonByKey } from "@/lib/content/selectors";
import { MODE_TITLES } from "@/lib/game/modes";
import type { SessionConfig, SessionMode } from "@/lib/game/types";
import { useProgressStore } from "@/lib/stores/progress-store";

import { FlashcardSession } from "./flashcard-session";
import { SessionRunner } from "./session-runner";

const parseUnits = (raw: string | null): number[] | null => {
  if (!raw) return null;
  const ids = raw
    .split(",")
    .map(Number)
    .filter((id) => Number.isInteger(id) && UNITS.some((unit) => unit.id === id));
  return ids.length > 0 ? ids : null;
};

const safeBackHref = (raw: string | null): string => {
  if (raw && raw.startsWith("/") && !raw.startsWith("//")) return raw;
  return "/";
};

/** Turns the URL (`/play/mix?units=1,2&back=/units/1`) into a running session. */
export const PlayClient = ({ mode }: { mode: SessionMode }) => {
  const params = useSearchParams();
  const hydrated = useHydrated();
  const classUnit = useProgressStore((state) => state.classUnit);

  const unitsParam = params.get("units");
  const exerciseParam = params.get("ex");
  const exercise = exerciseParam && /^\d{1,3}\.\d{1,2}$/.test(exerciseParam) ? exerciseParam : undefined;
  const lesson = exercise ? `gu:${exercise.split(".")[0]}` : (params.get("lesson") ?? undefined);
  const homeworkId = params.get("hw") ?? undefined;
  const saved = params.get("saved") === "1";
  const focus = params.get("focus") === "1";
  const chapterParam = Number(params.get("ch"));
  const chapter = Number.isInteger(chapterParam) && chapterParam >= 0 ? chapterParam : undefined;
  const taught = params.get("taught") === "1";
  const pagesParam = params.get("pages");
  const lessonsParam = params.get("lessons");
  const exitHref = safeBackHref(params.get("back"));

  const config = useMemo<SessionConfig>(() => {
    const fromUrl = parseUnits(unitsParam);
    const upToClass = UNITS.filter((unit) => unit.id <= classUnit).map((unit) => unit.id);
    const lessonUnit = lesson && !lesson.startsWith("gu:") ? Number(lesson.split(":")[0]) : null;
    let unitIds = fromUrl ?? upToClass;
    if (lessonUnit !== null && Number.isInteger(lessonUnit)) unitIds = [lessonUnit];
    const lessons = lessonsParam ? lessonsParam.split(",").filter(Boolean) : undefined;
    const pages = pagesParam
      ?.split(",")
      .map(Number)
      .filter((page) => Number.isInteger(page));
    const useTaught = !fromUrl && !lesson && !lessons;
    return { mode, unitIds, pages, lesson, exercise, lessons, homeworkId, saved, taught, useTaught, chapter, focus };
  }, [mode, unitsParam, pagesParam, lesson, exercise, lessonsParam, homeworkId, saved, taught, classUnit, chapter, focus]);

  if (!hydrated)
    return (
      <div className="flex min-h-svh items-center justify-center text-muted-foreground" aria-busy="true">
        Φορτώνει…
      </div>
    );

  let title = MODE_TITLES[mode];
  if (mode === "grammar" && lesson) {
    title = lessonByKey(lesson)?.lesson.titleEl ?? title;
    if (exercise) title = `Άσκηση ${exercise}: ${title}`;
  }
  const exitLabel = exitHref === "/" ? "Αρχική" : "Πίσω";

  if (mode === "learn") return <LessonPlayer key={params.toString()} lessonKey={lesson ?? ""} exitHref={exitHref} />;

  if (mode === "flashcards" || mode === "review")
    return <FlashcardSession key={params.toString()} config={config} title={title} exitHref={exitHref} exitLabel={exitLabel} />;

  return <SessionRunner key={params.toString()} config={config} title={title} exitHref={exitHref} exitLabel={exitLabel} />;
};
