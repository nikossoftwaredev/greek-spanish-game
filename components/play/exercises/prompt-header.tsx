interface PromptHeaderProps {
  instruction: string;
  prompt?: React.ReactNode;
  emoji?: string;
  /** Greek help shown under the prompt. */
  hint?: string;
}

/** The top of every exercise: what to do, then the thing to do it with. */
export const PromptHeader = ({ instruction, prompt, emoji, hint }: PromptHeaderProps) => (
  <header className="space-y-3">
    <h2 className="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">{instruction}</h2>
    <div className="flex flex-col items-start gap-3">
      {emoji && (
        <span className="grid size-24 place-items-center rounded-3xl border-2 border-border bg-card text-6xl shadow-[0_4px_0_0_var(--border)]" aria-hidden>
          {emoji}
        </span>
      )}
      {prompt && <div className="flex flex-wrap items-center gap-3">{prompt}</div>}
    </div>
    {hint && <p className="text-base text-muted-foreground">{hint}</p>}
  </header>
);
