import { BookOpen, Globe, Search, WifiOff } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { withArticle } from "@/lib/content/selectors";
import { cn } from "@/lib/general/utils";
import type { LocalAnswer } from "@/lib/lola/ask";

import { Lola, type LolaMood } from "./lola";
import { SpeechBubble } from "./speech-bubble";

export type Remote = { status: "none" } | { status: "loading" } | { status: "ready"; text: string } | { status: "empty" } | { status: "offline" };

/** One question and Lola's answer to it. */
export interface Exchange {
  id: number;
  question: string;
  local: LocalAnswer;
  remote: Remote;
}

const EXACT_INTRO = { el: "¡Claro! Λέγεται:", es: "¡Claro! Σημαίνει:" } as const;
const CLOSE_INTRO = "Δεν το έχω ακριβώς έτσι, αλλά η πιο κοντινή φράση είναι:";

/** Each dot starts a little later than the one before, so they bounce as a wave. */
const DOT_DELAYS = ["", "[animation-delay:150ms]", "[animation-delay:300ms]"] as const;

const isNothingFound = ({ local, remote }: Exchange): boolean => !local.phrase && local.words.length === 0 && (remote.status === "empty" || remote.status === "none");

/** Her face follows the answer: thinking while it loads, smug on an exact phrase, a sigh when she has nothing. */
export const moodOf = (exchange: Exchange): LolaMood => {
  if (exchange.remote.status === "loading" || exchange.remote.status === "offline") return "teaching";
  if (isNothingFound(exchange)) return "annoyed";
  if (exchange.local.match === "exact") return "proud";
  return "happy";
};

interface LolaAvatarProps {
  mood: LolaMood;
  /** Stops her swaying and popping, for messages that are no longer the newest. */
  still?: boolean;
  className?: string;
}

/** Her face in a round badge, cropped from the bust. */
export const LolaAvatar = ({ mood, still = false, className }: LolaAvatarProps) => (
  <span
    className={cn(
      "relative block size-12 shrink-0 overflow-hidden rounded-full border-[3px] border-(--lola-line) bg-(--lola-bubble) shadow-[0_3px_0_0_var(--lola-line)]",
      still && "[&_svg]:animate-none",
      className,
    )}
  >
    <Lola mood={mood} className="absolute -top-[14%] left-1/2 w-[142%] max-w-none -translate-x-1/2" />
  </span>
);

/** Her words on the left, with her face. */
const LolaSays = ({ mood, still, children }: { mood: LolaMood; still: boolean; children: ReactNode }) => (
  <div className="flex items-start gap-3">
    <LolaAvatar mood={mood} still={still} className="mt-1" />
    <SpeechBubble tail="left" className="min-w-0 space-y-3 wrap-break-word">
      {children}
    </SpeechBubble>
  </div>
);

/** What the learner typed, on the right in the primary colour. */
const UserBubble = ({ text }: { text: string }) => (
  <p className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-br-lg bg-primary px-4 py-2.5 font-bold wrap-break-word text-primary-foreground shadow-[0_3px_0_0_var(--primary-edge)] motion-safe:animate-rise">
    {text}
  </p>
);

/** Three bouncing dots: she is typing. Still dots when motion is reduced. */
const TypingDots = () => (
  <div role="status" className="flex items-center gap-1.5 py-1.5">
    <span className="sr-only">Η Λόλα γράφει</span>
    {DOT_DELAYS.map((delay) => (
      <span key={delay} aria-hidden className={cn("size-2.5 rounded-full bg-muted-foreground motion-safe:animate-bounce", delay)} />
    ))}
  </div>
);

const SectionLabel = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-muted-foreground uppercase">
    {icon}
    {children}
  </p>
);

const SpanishLine = ({ text }: { text: string }) => <p className="font-es text-2xl leading-snug font-semibold">{text}</p>;

interface AnswerProps {
  exchange: Exchange;
  onWordDetails: (word: string) => void;
}

/** What she found: a phrase of the phrasebook, words of the book, a machine translation, or a note that she is offline. */
const Answer = ({ exchange, onWordDetails }: AnswerProps) => {
  const { local, remote, question } = exchange;
  const answeredInSpanish = local.language === "el";
  const isOneSpanishWord = local.language === "es" && !question.trim().includes(" ");

  return (
    <>
      {local.phrase && (
        <div className="space-y-2">
          <p className="font-bold">{local.match === "exact" ? EXACT_INTRO[local.language] : CLOSE_INTRO}</p>
          {answeredInSpanish ? (
            <div className="space-y-1">
              {local.phrase.es.map((line) => (
                <SpanishLine key={line} text={line} />
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-xl font-bold">{local.phrase.el[0]}</p>
              <p className="text-sm text-muted-foreground">Πιο σωστά στα ισπανικά: {local.phrase.es.join(" / ")}</p>
            </div>
          )}
          {local.phrase.noteEl && <p className="rounded-xl bg-muted px-3 py-2 text-sm">{local.phrase.noteEl}</p>}
        </div>
      )}

      {local.words.length > 0 && (
        <div className="space-y-1.5">
          <SectionLabel icon={<BookOpen className="size-3.5" aria-hidden />}>Στο βιβλίο</SectionLabel>
          <ul className="space-y-1.5">
            {local.words.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-es text-xl font-semibold">{withArticle(item)}</span>
                <span className="text-muted-foreground">{item.el}</span>
                <Badge variant="outline">Κεφ. {item.unitId}</Badge>
              </li>
            ))}
          </ul>
        </div>
      )}

      {remote.status === "ready" && (
        <div className="space-y-1.5">
          <SectionLabel icon={<Globe className="size-3.5" aria-hidden />}>Αυτόματη μετάφραση</SectionLabel>
          {answeredInSpanish ? <SpanishLine text={remote.text} /> : <p className="text-xl font-bold">{remote.text}</p>}
          <p className="text-xs text-muted-foreground">Την έφτιαξε πρόγραμμα (MyMemory), όχι δασκάλα. Μπορεί να έχει λάθη, οπότε έλεγξέ την πριν τη χρησιμοποιήσεις.</p>
        </div>
      )}

      {remote.status === "offline" && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <WifiOff className="size-4 shrink-0" aria-hidden /> Δεν υπάρχει σύνδεση στο ίντερνετ. Χωρίς ίντερνετ ξέρω μόνο τις έτοιμες φράσεις και τις λέξεις του βιβλίου.
        </p>
      )}

      {isOneSpanishWord && (
        <Button type="button" variant="chunky" size="sm" onClick={() => onWordDetails(question.trim())} icon={<Search />}>
          Δες τη λέξη αναλυτικά
        </Button>
      )}
    </>
  );
};

/** The words inside her bubble: typing dots while it loads, a shrug when she has nothing, otherwise the answer. */
const Reply = ({ exchange, onWordDetails }: AnswerProps) => {
  if (exchange.remote.status === "loading") return <TypingDots />;

  if (isNothingFound(exchange))
    return (
      <>
        <p className="font-bold">Χμ, αυτό δεν το ξέρω.</p>
        <p className="text-sm text-muted-foreground">Δοκίμασε να το γράψεις πιο απλά ή με άλλα λόγια, π.χ. μία πρόταση τη φορά.</p>
      </>
    );

  return <Answer exchange={exchange} onWordDetails={onWordDetails} />;
};

interface ExchangeViewProps {
  exchange: Exchange;
  /** Only the newest answer keeps its face moving. */
  latest: boolean;
  onWordDetails: (word: string) => void;
}

/** The learner's message and Lola's reply to it. */
export const ExchangeView = ({ exchange, latest, onWordDetails }: ExchangeViewProps) => (
  <div className="space-y-3">
    <UserBubble text={exchange.question} />
    <LolaSays mood={moodOf(exchange)} still={!latest}>
      <Reply exchange={exchange} onWordDetails={onWordDetails} />
    </LolaSays>
  </div>
);
