import type { ReactNode } from "react";

import { cn } from "@/lib/general/utils";

import { HAIR, LolaFeatures, type LolaMood } from "./lola";

interface LolaFullProps {
  mood: LolaMood;
  className?: string;
}

const SKIN = "fill-(--lola-skin)";
const ARM = "fill-none stroke-(--lola-skin)";
const SLEEVE = "fill-none stroke-(--lola-top)";

/** One arm: skin from shoulder to wrist, a short sleeve over the top, and a hand. */
const Arm = ({ path, sleeve, hand }: { path: string; sleeve: string; hand: [number, number] }) => (
  <>
    <path d={path} className={ARM} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    <path d={sleeve} className={SLEEVE} strokeWidth="19" strokeLinecap="round" />
    <circle cx={hand[0]} cy={hand[1]} r="8.5" className={SKIN} />
  </>
);

const RELAXED_LEFT = <Arm path="M64 178 L54 224 L58 262" sleeve="M64 178 L59 198" hand={[58, 266]} />;
const HIP_LEFT = <Arm path="M64 178 L40 220 L66 260" sleeve="M64 178 L52 198" hand={[68, 264]} />;
const HIP_RIGHT = <Arm path="M136 178 L160 220 L134 260" sleeve="M136 178 L148 198" hand={[132, 264]} />;

/** The pose says as much as the face: explaining, cheering, hands on hips, or wagging a finger. */
const ARMS: Record<LolaMood, ReactNode> = {
  teaching: (
    <>
      {RELAXED_LEFT}
      <Arm path="M136 178 L158 214 L166 176" sleeve="M136 178 L146 196" hand={[167, 168]} />
    </>
  ),
  happy: (
    <>
      <Arm path="M64 178 L38 150 L26 112" sleeve="M64 178 L52 164" hand={[25, 106]} />
      <Arm path="M136 178 L162 150 L174 112" sleeve="M136 178 L148 164" hand={[175, 106]} />
    </>
  ),
  proud: (
    <>
      {HIP_LEFT}
      {HIP_RIGHT}
    </>
  ),
  angry: (
    <>
      {HIP_LEFT}
      <Arm path="M136 178 L166 196 L172 150" sleeve="M136 178 L152 188" hand={[172, 144]} />
      <path d="M172 138 L172 118" className={ARM} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
};

/**
 * Lola from head to sneakers, for the places where she stays on screen. Same face and colours as
 * the bust (`Lola`); the pose follows the mood. An original drawing in flat shapes.
 */
export const LolaFull = ({ mood, className }: LolaFullProps) => (
  <svg
    viewBox="0 0 200 404"
    className={cn(
      "origin-bottom",
      mood === "teaching" && "motion-safe:animate-sway",
      (mood === "happy" || mood === "proud") && "motion-safe:animate-pop",
      mood === "angry" && "motion-safe:animate-shake",
      className,
    )}
    aria-hidden
  >
    <ellipse cx="100" cy="397" rx="56" ry="5" className="fill-foreground/10" />

    {/* long hair behind her back */}
    <path d="M100 14 C58 14 38 46 38 88 C38 124 32 180 22 252 L178 252 C168 180 162 124 162 88 C162 46 142 14 100 14Z" className={HAIR} />

    {/* jeans and sneakers */}
    <path d="M52 262 H148 L142 372 H106 L100 304 L94 372 H58 Z" className="fill-(--lola-pants)" />
    <path d="M52 262 H148 V274 H52 Z" className="fill-(--lola-pants-shade)" />
    <path d="M56 372 H98 L99 384 Q99 394 86 394 H60 Q48 394 50 384 Z" className="fill-(--lola-shoe)" />
    <path d="M50 388 H99 Q99 394 86 394 H60 Q50 394 50 388Z" className="fill-(--lola-sole)" />
    <path d="M102 372 H144 L150 384 Q152 394 140 394 H114 Q101 394 101 384 Z" className="fill-(--lola-shoe)" />
    <path d="M101 388 H150 Q152 394 140 394 H114 Q101 394 101 388Z" className="fill-(--lola-sole)" />

    {/* neck and top */}
    <path d="M84 124 L84 162 C92 176 108 176 116 162 L116 124Z" className="fill-(--lola-skin)" />
    <path d="M84 134 C92 146 108 146 116 134 L116 124 L84 124Z" className="fill-(--lola-skin-shade)" />
    <path d="M58 202 C58 174 70 160 82 156 C88 170 112 170 118 156 C130 160 142 174 142 202 L146 270 H54 Z" className="fill-(--lola-top)" />
    <path d="M82 156 C88 170 112 170 118 156 C112 176 88 176 82 156Z" className="fill-(--lola-top-shade)" />

    {ARMS[mood]}

    {/* locks of hair over the shoulders */}
    <path d="M42 96 C34 128 36 164 42 202 C54 198 62 184 62 162 C58 130 52 110 42 96Z" className={HAIR} />
    <path d="M158 96 C166 128 164 164 158 202 C146 198 138 184 138 162 C142 130 148 110 158 96Z" className={HAIR} />
    <path d="M46 124 C42 144 44 166 47 182" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M154 124 C158 144 156 166 153 182" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.5" strokeLinecap="round" />

    {/* gold hoop earrings */}
    <circle cx="56" cy="110" r="7" className="fill-none stroke-(--lola-gold)" strokeWidth="3" />
    <circle cx="144" cy="110" r="7" className="fill-none stroke-(--lola-gold)" strokeWidth="3" />

    {/* face */}
    <path d="M56 82 C56 46 76 30 100 30 C124 30 144 46 144 82 C144 114 124 138 100 138 C76 138 56 114 56 82Z" className="fill-(--lola-skin)" />
    <LolaFeatures mood={mood} />
  </svg>
);
