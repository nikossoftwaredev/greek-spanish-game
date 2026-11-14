import { SourceBadge } from "@/components/play/source-badge";
import type { ExerciseSource } from "@/lib/game/types";

interface PromptHeaderProps {
  /** Where the exercise comes from in the books. */
  source?: ExerciseSource;
  instruction: string;
  prompt?: React.ReactNode;
  /** Greek help shown under the prompt. */
  hint?: string;
}

/** The top of every exercise: what to do, then the thing to do it with. */
export const PromptHeader = ({ source, instruction, prompt, hint }: PromptHeaderProps) => (
  <header className="space-y-3">
    {source && <SourceBadge source={source} />}
    <h2 className="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">{instruction}</h2>
    {prompt && <div className="flex flex-wrap items-center gap-3">{prompt}</div>}
    {hint && <p className="text-base text-muted-foreground">{hint}</p>}
  </header>
);
