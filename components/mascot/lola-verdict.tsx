import { TappableText } from "@/components/tappable-text";
import { Translation } from "@/components/translation";
import type { LolaLine } from "@/lib/mascot/lines";

import { AskLola } from "./ask-lola";
import { SpeechBubble } from "./speech-bubble";

/** The end of a session or lesson: what she says about how it went, in a bubble above the whole figure. */
export const LolaVerdict = ({ line }: { line: LolaLine }) => (
  <div className="flex flex-col items-center gap-5">
    <SpeechBubble tone={line.mood === "angry" ? "loud" : "calm"} tail="down" className="max-w-xs">
      <h1 className="font-es text-3xl leading-tight font-bold italic">
        <TappableText text={line.es} />
      </h1>
      {line.el && <Translation text={line.el} className="mt-1 text-base font-bold text-inherit" />}
    </SpeechBubble>
    <AskLola body="full" mood={line.mood} className="h-56 w-auto" />
  </div>
);
