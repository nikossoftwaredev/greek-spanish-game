import type { LolaLine } from "@/lib/mascot/lines";

import { AskLola } from "./ask-lola";
import { SpeechBubble } from "./speech-bubble";

/** The end of a session or lesson: what she says about how it went, in a bubble above the whole figure. */
export const LolaVerdict = ({ line }: { line: LolaLine }) => (
  <div className="flex flex-col items-center gap-5">
    <SpeechBubble tone={line.mood === "angry" ? "loud" : "cheer"} tail="down" className="max-w-xs">
      <h1 className="font-es text-3xl leading-tight font-bold italic">{line.es}</h1>
      <p className="mt-1 text-base font-bold">{line.el}</p>
    </SpeechBubble>
    <AskLola body="full" mood={line.mood} className="h-56 w-auto" />
  </div>
);
