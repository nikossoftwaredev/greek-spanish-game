interface PromptHeaderProps {
  instruction: string;
  prompt?: React.ReactNode;
  /** Greek help shown under the prompt. */
  hint?: string;
}

/** The top of every exercise: what to do, then the thing to do it with. */
export const PromptHeader = ({ instruction, prompt, hint }: PromptHeaderProps) => (
  <header className="space-y-3">
    <h2 className="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">{instruction}</h2>
    {prompt && <div className="flex flex-wrap items-center gap-3">{prompt}</div>}
    {hint && <p className="text-base text-muted-foreground">{hint}</p>}
  </header>
);
