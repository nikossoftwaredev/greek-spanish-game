import { cn } from "@/lib/general/utils";

type Tone = "calm" | "loud";
type Tail = "left" | "left-low" | "right" | "down" | "down-left";

/** `calm` is cream with dark ink; `loud` is for when she shouts: red, white text, and it shakes. */
const TONES: Record<Tone, string> = {
  calm: "lola-bubble motion-safe:animate-pop",
  loud: "bg-destructive text-white motion-safe:animate-shake",
};

const TAIL_FILL: Record<Tone, string> = { calm: "bg-(--lola-bubble)", loud: "bg-destructive" };

/** A rotated square half hidden in the bubble's edge: its two outer borders make the pointer. */
const TAILS: Record<Tail, string> = {
  left: "top-5 -left-2 border-b-[3px] border-l-[3px]",
  "left-low": "bottom-6 -left-2 border-b-[3px] border-l-[3px]",
  right: "top-5 -right-2 border-t-[3px] border-r-[3px]",
  down: "-bottom-2 left-1/2 -ml-2 border-r-[3px] border-b-[3px]",
  "down-left": "-bottom-2 left-10 border-r-[3px] border-b-[3px]",
};

interface SpeechBubbleProps {
  tone?: Tone;
  /** Where the pointer sits, towards whoever is speaking. */
  tail?: Tail;
  className?: string;
  children: React.ReactNode;
}

/** A comic speech bubble with a thick outline. Appears with a pop, or a shake when it is loud. */
export const SpeechBubble = ({ tone = "calm", tail = "left", className, children }: SpeechBubbleProps) => (
  <div className={cn("relative rounded-3xl border-[3px] border-(--lola-line) px-4 py-3 shadow-[0_4px_0_0_var(--lola-line)]", TONES[tone], className)}>
    {children}
    <span aria-hidden className={cn("absolute size-4 rotate-45 border-(--lola-line)", TAIL_FILL[tone], TAILS[tail])} />
  </div>
);
