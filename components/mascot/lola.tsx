import type { ReactNode } from "react";

import { cn } from "@/lib/general/utils";

/** How Lola feels: `teaching` explains, `happy` and `proud` praise, `angry` scolds. */
export type LolaMood = "teaching" | "happy" | "proud" | "angry";

interface LolaProps {
  mood: LolaMood;
  className?: string;
}

export const HAIR = "fill-(--lola-hair)";
const LASH = "stroke-(--lola-hair)";

/** Eyebrows: raised when pleased, slanted down towards the nose when angry. */
const BROWS: Record<LolaMood, ReactNode> = {
  teaching: (
    <g className={cn("fill-none", LASH)} strokeWidth="3.5" strokeLinecap="round">
      <path d="M67 73 Q79 67 92 72" />
      <path d="M108 72 Q121 67 133 73" />
    </g>
  ),
  happy: (
    <g className={cn("fill-none", LASH)} strokeWidth="3.5" strokeLinecap="round">
      <path d="M67 70 Q79 61 92 68" />
      <path d="M108 68 Q121 61 133 70" />
    </g>
  ),
  proud: (
    <g className={cn("fill-none", LASH)} strokeWidth="3.5" strokeLinecap="round">
      <path d="M67 68 Q79 59 92 66" />
      <path d="M108 66 Q121 59 133 68" />
    </g>
  ),
  angry: (
    <g className={cn("fill-none", LASH)} strokeWidth="4.5" strokeLinecap="round">
      <path d="M64 67 L93 77" />
      <path d="M136 67 L107 77" />
    </g>
  ),
};

const OPEN_EYE = (
  <>
    <ellipse cx="80" cy="88" rx="8.5" ry="9.5" className="fill-(--lola-eye)" />
    <circle cx="80.5" cy="89" r="5.6" className="fill-(--lola-iris)" />
    <circle cx="82.6" cy="86.4" r="2" className="fill-white" />
    <ellipse cx="120" cy="88" rx="8.5" ry="9.5" className="fill-(--lola-eye)" />
    <circle cx="119.5" cy="89" r="5.6" className="fill-(--lola-iris)" />
    <circle cx="121.6" cy="86.4" r="2" className="fill-white" />
    <g className={cn("fill-none", LASH)} strokeWidth="3.2" strokeLinecap="round">
      <path d="M69 86 Q80 77 91 86" />
      <path d="M69 86 L65 82" />
      <path d="M109 86 Q120 77 131 86" />
      <path d="M131 86 L135 82" />
    </g>
  </>
);

const EYES: Record<LolaMood, ReactNode> = {
  teaching: OPEN_EYE,
  happy: OPEN_EYE,
  /** Closed, smiling eyes. */
  proud: (
    <g className={cn("fill-none", LASH)} strokeWidth="4" strokeLinecap="round">
      <path d="M70 91 Q80 80 90 91" />
      <path d="M110 91 Q120 80 130 91" />
    </g>
  ),
  /** Narrowed eyes under a heavy lid. */
  angry: (
    <>
      <path d="M71 89 Q80 81 89 88 Q80 96 71 89Z" className="fill-(--lola-eye)" />
      <circle cx="82" cy="89" r="3.6" className="fill-(--lola-iris)" />
      <path d="M111 88 Q120 81 129 89 Q120 96 111 88Z" className="fill-(--lola-eye)" />
      <circle cx="118" cy="89" r="3.6" className="fill-(--lola-iris)" />
      <g className={cn("fill-none", LASH)} strokeWidth="3.6" strokeLinecap="round">
        <path d="M68 85 L91 89" />
        <path d="M132 85 L109 89" />
      </g>
    </>
  ),
};

const SMILE = (
  <>
    <path d="M84 111 Q100 140 116 111 Q100 118 84 111Z" className="fill-(--lola-mouth)" />
    <path d="M88 112.5 Q100 118.5 112 112.5 Q100 121 88 112.5Z" className="fill-white" />
  </>
);

const MOUTHS: Record<LolaMood, ReactNode> = {
  teaching: <path d="M90 115 Q100 122 110 115" className={cn("fill-none stroke-(--lola-lips)")} strokeWidth="4" strokeLinecap="round" />,
  happy: SMILE,
  proud: (
    <>
      <path d="M80 109 Q100 146 120 109 Q100 117 80 109Z" className="fill-(--lola-mouth)" />
      <path d="M85 110.5 Q100 117.5 115 110.5 Q100 121 85 110.5Z" className="fill-white" />
    </>
  ),
  /** Shouting, with the teeth showing. */
  angry: (
    <>
      <path d="M86 120 Q100 112 114 120 Q112 136 100 136 Q88 136 86 120Z" className="fill-(--lola-mouth)" />
      <path d="M88.5 120.6 Q100 114.6 111.5 120.6 L110.6 125 Q100 120.6 89.4 125Z" className="fill-white" />
    </>
  ),
};

const SPARKLE = "M0 -9 L2.4 -2.4 L9 0 L2.4 2.4 L0 9 L-2.4 2.4 L-9 0 L-2.4 -2.4Z";
const HEART = "M0 4 C-10 -3 -6 -11 0 -6 C6 -11 10 -3 0 4Z";

/** Little extras around her head that say how she feels. */
const EXTRAS: Record<LolaMood, ReactNode> = {
  teaching: null,
  happy: (
    <g className="fill-(--lola-gold)">
      <path d={SPARKLE} transform="translate(28 46)" />
      <path d={SPARKLE} transform="translate(172 38) scale(0.8)" />
      <path d={SPARKLE} transform="translate(160 84) scale(0.55)" />
    </g>
  ),
  proud: (
    <g className="fill-(--lola-anger)">
      <path d={HEART} transform="translate(26 44) scale(1.2)" />
      <path d={HEART} transform="translate(174 36)" />
      <path d={HEART} transform="translate(168 78) scale(0.7)" />
    </g>
  ),
  angry: (
    <g className={cn("fill-none stroke-(--lola-anger)")} strokeWidth="4" strokeLinecap="round">
      <path d="M150 34 Q158 34 158 42" />
      <path d="M170 34 Q162 34 162 42" />
      <path d="M150 58 Q158 58 158 50" />
      <path d="M170 58 Q162 58 162 50" />
    </g>
  ),
};

/** Cheeks, nose, eyes, brows, mouth, the centre-parted fringe and the mood marks: everything on and around the face. */
export const LolaFeatures = ({ mood }: { mood: LolaMood }) => (
  <>
    <ellipse cx="72" cy="106" rx="9" ry="5.5" className={cn("fill-(--lola-blush)", mood === "angry" ? "opacity-90" : "opacity-55")} />
    <ellipse cx="128" cy="106" rx="9" ry="5.5" className={cn("fill-(--lola-blush)", mood === "angry" ? "opacity-90" : "opacity-55")} />
    <path d="M97 101 Q100 105 103 101" className="fill-none stroke-(--lola-skin-shade)" strokeWidth="2.6" strokeLinecap="round" />

    {EYES[mood]}
    {BROWS[mood]}
    {MOUTHS[mood]}

    {/* centre-parted fringe */}
    <path d="M100 24 C64 24 50 54 53 96 C58 76 70 56 100 43 C130 56 142 76 147 96 C150 54 136 24 100 24Z" className={HAIR} />
    <path d="M76 38 C84 33 92 32 98 33" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.5" strokeLinecap="round" />

    {EXTRAS[mood]}
  </>
);

/**
 * Lola, the class mascot: she cheers when the answer is right and scolds when it is wrong.
 * An original drawing in flat shapes, coloured by the `--lola-*` tokens in `app/globals.css`.
 */
export const Lola = ({ mood, className }: LolaProps) => (
  <svg
    viewBox="0 0 200 200"
    className={cn(
      "shrink-0",
      (mood === "happy" || mood === "proud") && "motion-safe:animate-pop",
      mood === "angry" && "motion-safe:animate-shake",
      className,
    )}
    aria-hidden
  >
    {/* long hair behind the shoulders */}
    <path d="M100 14 C58 14 38 46 38 88 C38 122 30 152 20 200 L180 200 C170 152 162 122 162 88 C162 46 142 14 100 14Z" className={HAIR} />

    {/* neck and shoulders */}
    <path d="M84 124 L84 160 C92 174 108 174 116 160 L116 124Z" className="fill-(--lola-skin)" />
    <path d="M84 134 C92 146 108 146 116 134 L116 124 L84 124Z" className="fill-(--lola-skin-shade)" />
    <path d="M26 200 C26 170 56 158 78 154 C86 168 114 168 122 154 C144 158 174 170 174 200Z" className="fill-(--lola-top)" />
    <path d="M78 154 C86 168 114 168 122 154 C114 172 86 172 78 154Z" className="fill-(--lola-top-shade)" />

    {/* locks of hair falling over the shoulders */}
    <path d="M42 96 C34 128 36 164 40 190 C56 186 64 170 64 150 C60 128 52 110 42 96Z" className={HAIR} />
    <path d="M158 96 C166 128 164 164 160 190 C144 186 136 170 136 150 C140 128 148 110 158 96Z" className={HAIR} />
    <path d="M46 120 C42 140 44 160 46 174" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M154 120 C158 140 156 160 154 174" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.5" strokeLinecap="round" />

    {/* gold hoop earrings */}
    <circle cx="56" cy="110" r="7" className="fill-none stroke-(--lola-gold)" strokeWidth="3" />
    <circle cx="144" cy="110" r="7" className="fill-none stroke-(--lola-gold)" strokeWidth="3" />

    {/* face */}
    <path d="M56 82 C56 46 76 30 100 30 C124 30 144 46 144 82 C144 114 124 138 100 138 C76 138 56 114 56 82Z" className="fill-(--lola-skin)" />
    <LolaFeatures mood={mood} />
  </svg>
);
