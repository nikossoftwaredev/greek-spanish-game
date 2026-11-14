import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { PlayClient } from "@/components/play/play-client";
import { MODE_TITLES, SESSION_MODES as MODES } from "@/lib/game/modes";
import type { SessionMode } from "@/lib/game/types";

export const dynamicParams = false;

export const generateStaticParams = () => MODES.map((mode) => ({ mode }));

export const generateMetadata = async ({ params }: { params: Promise<{ mode: string }> }): Promise<Metadata> => {
  const { mode } = await params;
  return { title: MODE_TITLES[mode as SessionMode] ?? "Παιχνίδι" };
};

const PlayPage = async ({ params }: { params: Promise<{ mode: string }> }) => {
  const { mode } = await params;
  if (!MODES.includes(mode as SessionMode)) notFound();

  return (
    <Suspense fallback={<div className="flex min-h-svh items-center justify-center text-muted-foreground">Φορτώνει…</div>}>
      <PlayClient mode={mode as SessionMode} />
    </Suspense>
  );
};

export default PlayPage;
