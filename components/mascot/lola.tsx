import type { ReactNode } from "react";

import { cn } from "@/lib/general/utils";
import type { LolaMood } from "@/lib/mascot/lines";

export type { LolaMood };

interface LolaProps {
  mood: LolaMood;
  className?: string;
  /** `bust` is head and shoulders, `full` is the whole figure. */
  body?: "bust" | "full";
}

const LINE = "fill-none stroke-(--lola-line)";
const HAIR = "fill-(--lola-hair)";
const SKIN = "fill-(--lola-skin)";
const OUTLINED = "stroke-(--lola-line)";

const SPARKLE = "M0 -9 L2.4 -2.4 L9 0 L2.4 2.4 L0 9 L-2.4 2.4 L-9 0 L-2.4 -2.4Z";
const HEART = "M0 4 C-10 -3 -6 -11 0 -6 C6 -11 10 -3 0 4Z";

/** The same drawing, flipped around the middle: the face is drawn for the viewer's left side only. */
const Mirror = ({ children }: { children: ReactNode }) => <g transform="translate(200 0) scale(-1 1)">{children}</g>;

interface EyeProps {
  /** How far the upper lid is down, 0 (open) to 1 (shut). */
  lid?: number;
  /** Looking up, for an eye roll. */
  up?: boolean;
  /** Wide open, for rage. */
  wide?: boolean;
}

/** The eye on the viewer's left, with winged liner and lashes. The other eye is this one mirrored. */
const Eye = ({ lid = 0, up = false, wide = false }: EyeProps) => {
  const lidY = 83 + lid * 12;
  const irisY = up ? 86 : 89.5;
  const white = wide ? "M65 90 Q79 75 96 87 Q81 103 65 90Z" : "M67 90 Q79 79 94 88 Q81 99 67 90Z";
  const linerStart = lid > 0 ? `62 ${lidY + 4}` : "64 92";

  return (
    <>
      <path d={white} className="fill-(--lola-eye)" />
      <circle cx="81" cy={irisY} r={wide ? 4.6 : 5.8} className="fill-(--lola-iris)" />
      <circle cx="81" cy={irisY} r={wide ? 1.7 : 2.6} className="fill-(--lola-line)" />
      <circle cx="83" cy={irisY - 2.6} r="1.6" className="fill-white" />
      {lid > 0 && <path d={`M60 74 H99 V${lidY + 2} Q80 ${lidY - 6} 60 ${lidY + 4}Z`} className={SKIN} />}
      <path d={lid > 0 ? `M${linerStart} Q80 ${lidY - 6} 97 ${lidY + 2}` : "M64 92 Q79 76 96 88"} className={LINE} strokeWidth="4.2" strokeLinecap="round" />
      <path d={lid > 0 ? `M${linerStart} L55 ${lidY - 1}` : "M64 92 L56 86"} className={LINE} strokeWidth="3.4" strokeLinecap="round" />
      {lid === 0 && <path d="M72 83 L70 78 M78 80.5 L77 75.5 M85 81 L86 76" className={LINE} strokeWidth="2" strokeLinecap="round" />}
    </>
  );
};

/** A shut, smiling eye, for winking. */
const ClosedEye = () => (
  <>
    <path d="M66 90 Q80 100 95 89" className={LINE} strokeWidth="4.2" strokeLinecap="round" />
    <path d="M66 90 L57 87" className={LINE} strokeWidth="3.2" strokeLinecap="round" />
  </>
);

const Brow = ({ d, width = 4.8 }: { d: string; width?: number }) => <path d={d} className={LINE} strokeWidth={width} strokeLinecap="round" />;

/** Both eyes, the right one mirrored from the left. */
const Eyes = ({ left, right }: { left: ReactNode; right: ReactNode }) => (
  <>
    {left}
    <Mirror>{right}</Mirror>
  </>
);

const EYES: Record<LolaMood, ReactNode> = {
  teaching: <Eyes left={<Eye />} right={<Eye />} />,
  happy: <Eyes left={<Eye />} right={<Eye />} />,
  wink: <Eyes left={<Eye />} right={<ClosedEye />} />,
  proud: <Eyes left={<Eye lid={0.5} />} right={<Eye lid={0.5} />} />,
  annoyed: <Eyes left={<Eye lid={0.55} up />} right={<Eye lid={0.55} up />} />,
  angry: <Eyes left={<Eye wide />} right={<Eye wide />} />,
};

const BROWS: Record<LolaMood, ReactNode> = {
  teaching: (
    <>
      <Brow d="M64 77 Q78 68 95 73" />
      <Brow d="M105 67 Q121 59 136 66" />
    </>
  ),
  happy: (
    <>
      <Brow d="M64 73 Q78 64 95 69" />
      <Brow d="M105 69 Q122 64 136 73" />
    </>
  ),
  wink: (
    <>
      <Brow d="M64 72 Q78 63 95 69" />
      <Brow d="M105 75 Q121 70 136 77" />
    </>
  ),
  proud: (
    <>
      <Brow d="M64 76 Q78 69 95 74" />
      <Brow d="M105 66 Q121 58 136 70" />
    </>
  ),
  annoyed: (
    <>
      <Brow d="M64 75 L95 78" />
      <Brow d="M105 77 L136 73" />
    </>
  ),
  angry: (
    <>
      <Brow d="M60 66 L96 82" width={6.2} />
      <Brow d="M140 66 L104 82" width={6.2} />
    </>
  ),
};

const LIP_OUTLINE = "fill-none stroke-(--lola-lips)";

const MOUTHS: Record<LolaMood, ReactNode> = {
  /** Talking: a small open mouth. */
  teaching: (
    <>
      <path d="M89 115 Q100 111 111 115 Q112 128 100 130 Q88 128 89 115Z" className="fill-(--lola-mouth)" />
      <path d="M92 116 Q100 113 108 116 L107 120 Q100 118 93 120Z" className="fill-white" />
      <path d="M92 125 Q100 121 108 125 Q104 129 100 129 Q96 129 92 125Z" className="fill-(--lola-tongue)" />
      <path d="M89 115 Q100 111 111 115 Q112 128 100 130 Q88 128 89 115Z" className={LIP_OUTLINE} strokeWidth="3.2" strokeLinejoin="round" />
    </>
  ),
  /** A big open grin. */
  happy: (
    <>
      <path d="M84 113 Q100 110 116 113 Q112 135 100 135 Q88 135 84 113Z" className="fill-(--lola-mouth)" />
      <path d="M87 114.5 Q100 112 113 114.5 L112 121 Q100 118 88 121Z" className="fill-white" />
      <path d="M92 128 Q100 124 108 128 Q104 134 100 134 Q96 134 92 128Z" className="fill-(--lola-tongue)" />
      <path d="M84 113 Q100 110 116 113 Q112 135 100 135 Q88 135 84 113Z" className={LIP_OUTLINE} strokeWidth="3.4" strokeLinejoin="round" />
    </>
  ),
  /** A crooked smirk. */
  wink: (
    <>
      <path d="M86 118 Q99 126 116 111" className={LIP_OUTLINE} strokeWidth="6" strokeLinecap="round" />
      <path d="M92 119 Q100 123 108 118" className="fill-none stroke-(--lola-lip-shine)" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  /** Full glossy lips, closed, very pleased with herself. */
  proud: (
    <>
      <path d="M86 116 Q93 111 100 114 Q107 111 114 116 Q100 121 86 116Z" className="fill-(--lola-lips)" />
      <path d="M88 117 Q100 129 112 117 Q100 122 88 117Z" className="fill-(--lola-lips)" />
      <path d="M93 122 Q100 126 107 122" className="fill-none stroke-(--lola-lip-shine)" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  /** A flat line: not impressed. */
  annoyed: <path d="M90 122 Q100 119 111 123" className={LIP_OUTLINE} strokeWidth="5.5" strokeLinecap="round" />,
  /** Shouting, teeth bared. */
  angry: (
    <>
      <path d="M82 114 Q100 106 118 114 Q116 139 100 139 Q84 139 82 114Z" className="fill-(--lola-mouth)" />
      <path d="M85 115 Q100 109 115 115 L114 123 Q100 119 86 123Z" className="fill-white" />
      <path d="M88 134 Q100 138 112 134 L111 129 Q100 133 89 129Z" className="fill-white" />
      <path d="M82 114 Q100 106 118 114 Q116 139 100 139 Q84 139 82 114Z" className={LIP_OUTLINE} strokeWidth="3.4" strokeLinejoin="round" />
    </>
  ),
};

/** Marks around her head that say how she feels. */
const EXTRAS: Record<LolaMood, ReactNode> = {
  teaching: null,
  happy: (
    <g className="fill-(--lola-gold)">
      <path d={SPARKLE} transform="translate(26 50)" />
      <path d={SPARKLE} transform="translate(176 40) scale(0.8)" />
      <path d={SPARKLE} transform="translate(166 92) scale(0.55)" />
    </g>
  ),
  wink: (
    <g className="fill-(--lola-anger)">
      <path d={HEART} transform="translate(168 60) scale(1.2)" />
      <path d={HEART} transform="translate(180 34) scale(0.7)" />
    </g>
  ),
  proud: (
    <g className="fill-(--lola-gold)">
      <path d={SPARKLE} transform="translate(30 44) scale(0.9)" />
      <path d={SPARKLE} transform="translate(172 52)" />
    </g>
  ),
  annoyed: <path d="M158 52 C158 52 148 66 158 74 C168 66 158 52 158 52Z" className="fill-(--lola-drop) stroke-(--lola-line)" strokeWidth="2" />,
  angry: (
    <>
      <g className="fill-none stroke-(--lola-anger)" strokeWidth="4" strokeLinecap="round">
        <path d="M148 30 Q156 30 156 38" />
        <path d="M168 30 Q160 30 160 38" />
        <path d="M148 54 Q156 54 156 46" />
        <path d="M168 54 Q160 54 160 46" />
      </g>
      <g className="fill-white stroke-(--lola-line)" strokeWidth="2">
        <circle cx="30" cy="46" r="7" />
        <circle cx="20" cy="62" r="5" />
      </g>
    </>
  ),
};

/** Cheeks, nose, eyes, brows, mouth, the side-swept fringe and the marks around the head. */
const Features = ({ mood }: { mood: LolaMood }) => (
  <>
    <path d="M62 104 Q66 121 82 131 M138 104 Q134 121 118 131" className="fill-none stroke-(--lola-skin-shade)" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    <ellipse cx="72" cy="108" rx="9" ry="5.5" className={cn("fill-(--lola-blush)", mood === "angry" ? "opacity-90" : "opacity-50")} />
    <ellipse cx="128" cy="108" rx="9" ry="5.5" className={cn("fill-(--lola-blush)", mood === "angry" ? "opacity-90" : "opacity-50")} />
    <path d="M97 103 Q100 107 103 103" className="fill-none stroke-(--lola-skin-shade)" strokeWidth="2.6" strokeLinecap="round" />

    {EYES[mood]}
    {BROWS[mood]}
    {MOUTHS[mood]}

    {/* side-parted fringe with a blue streak */}
    <path d="M98 22 C60 22 46 54 50 100 C54 78 62 60 80 50 C92 58 118 62 134 78 C142 86 146 94 148 100 C152 54 136 22 98 22Z" className={HAIR} />
    <path d="M68 38 C78 32 90 30 102 33 M120 42 C131 48 139 58 143 74" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="3" strokeLinecap="round" />

    {EXTRAS[mood]}
  </>
);

/** One arm in a jacket sleeve with a hand at the end, outlined like the rest of the drawing. */
const Arm = ({ path, hand }: { path: string; hand: [number, number] }) => (
  <>
    <path d={path} className={cn("fill-none", OUTLINED)} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
    <path d={path} className="fill-none stroke-(--lola-jacket)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={hand[0]} cy={hand[1]} r="9" className={cn(SKIN, OUTLINED)} strokeWidth="2.5" />
  </>
);

const HIP_LEFT = <Arm path="M62 190 L42 226 L66 262" hand={[68, 266]} />;
const HIP_RIGHT = <Arm path="M138 190 L158 226 L134 262" hand={[132, 266]} />;

/** The pose matches the mood: explaining, cheering, waving, hands on hips, arms crossed, wagging a finger. */
const ARMS: Record<LolaMood, ReactNode> = {
  teaching: (
    <>
      {HIP_LEFT}
      <Arm path="M138 190 L160 220 L168 180" hand={[169, 172]} />
    </>
  ),
  happy: (
    <>
      <Arm path="M62 190 L36 158 L26 118" hand={[25, 110]} />
      <Arm path="M138 190 L164 158 L174 118" hand={[175, 110]} />
    </>
  ),
  wink: (
    <>
      {HIP_LEFT}
      <Arm path="M138 190 L164 176 L172 134" hand={[172, 126]} />
    </>
  ),
  proud: (
    <>
      {HIP_LEFT}
      {HIP_RIGHT}
    </>
  ),
  annoyed: (
    <>
      <Arm path="M138 190 L154 232 L78 250" hand={[74, 251]} />
      <Arm path="M62 190 L46 232 L122 238" hand={[126, 238]} />
    </>
  ),
  angry: (
    <>
      {HIP_LEFT}
      <path d="M174 144 L174 122" className={cn("fill-none", OUTLINED)} strokeWidth="12" strokeLinecap="round" />
      <Arm path="M138 190 L168 200 L174 158" hand={[174, 150]} />
      <path d="M174 144 L174 122" className="fill-none stroke-(--lola-skin)" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
};

/**
 * Lola, the class mascot: a confident, stylish, comic-book girl who cheers when the answer is right
 * and loses her temper when it is wrong. An original drawing, coloured by the `--lola-*` tokens in
 * `app/globals.css`. The bust is the top of the full figure, so there is one drawing to keep.
 */
export const Lola = ({ mood, className, body = "bust" }: LolaProps) => (
  <svg
    viewBox={body === "full" ? "0 0 200 404" : "0 0 200 226"}
    className={cn(
      "origin-bottom",
      (mood === "teaching" || mood === "annoyed") && "motion-safe:animate-sway",
      (mood === "happy" || mood === "wink" || mood === "proud") && "motion-safe:animate-pop",
      mood === "angry" && "motion-safe:animate-shake",
      className,
    )}
    aria-hidden
  >
    {body === "full" && <ellipse cx="100" cy="397" rx="56" ry="5" className="fill-foreground/10" />}

    {/* long hair behind her back, with blue streaks */}
    <path d="M98 12 C54 12 30 52 32 100 C34 150 24 200 12 266 L172 266 C162 210 168 150 168 100 C168 50 142 12 98 12Z" className={HAIR} />
    <path d="M38 120 C34 170 28 214 22 252 M164 118 C168 168 166 214 160 250 M52 60 C44 90 42 112 44 140" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

    {body === "full" && (
      <>
        {/* jeans and sneakers */}
        <path d="M56 256 H144 L142 372 H106 L100 298 L94 372 H58 Z" className={cn("fill-(--lola-pants)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M56 256 H144 V268 H56 Z" className={cn("fill-(--lola-pants-shade)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M56 372 H98 L99 384 Q99 394 86 394 H60 Q48 394 50 384 Z" className={cn("fill-(--lola-shoe)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M50 388 H99 Q99 394 86 394 H60 Q50 394 50 388Z" className="fill-(--lola-sole)" />
        <path d="M102 372 H144 L150 384 Q152 394 140 394 H114 Q101 394 101 384 Z" className={cn("fill-(--lola-shoe)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M101 388 H150 Q152 394 140 394 H114 Q101 394 101 388Z" className="fill-(--lola-sole)" />
        {/* a strip of midriff between the top and the jeans */}
        <path d="M57 238 Q100 248 143 238 L141 262 H59Z" className={cn(SKIN, OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
      </>
    )}

    {/* neck, bare shoulders, choker */}
    <path d="M86 124 L86 164 C92 174 108 174 114 164 L114 124Z" className={SKIN} />
    <path d="M86 136 C94 148 106 148 114 136 L114 124 L86 124Z" className="fill-(--lola-skin-shade)" />
    <path d="M54 192 C54 172 70 162 86 158 L114 158 C130 162 146 172 146 192Z" className={cn(SKIN, OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />

    {/* jacket hanging open at her sides, and the off-shoulder yellow top */}
    <path d="M56 188 L48 274 L68 280 L72 192Z" className={cn("fill-(--lola-jacket)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M144 188 L152 274 L132 280 L128 192Z" className={cn("fill-(--lola-jacket)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M60 188 Q80 182 100 188 Q120 182 140 188 L144 238 Q100 248 56 238Z" className={cn("fill-(--lola-top)", OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M66 202 Q82 214 96 204 M104 204 Q118 214 134 202" className="fill-none stroke-(--lola-top-shade)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M85 154 C93 162 107 162 115 154 L115 160 C107 168 93 168 85 160Z" className={cn("fill-(--lola-jacket)", OUTLINED)} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="100" cy="164" r="2.6" className="fill-(--lola-gold)" />

    {ARMS[mood]}

    {/* locks of hair over the shoulders */}
    <path d="M40 96 C32 130 34 176 42 218 C56 212 64 194 62 164 C58 130 52 108 40 96Z" className={HAIR} />
    <path d="M160 96 C168 130 166 176 158 218 C144 212 136 194 138 164 C142 130 148 108 160 96Z" className={HAIR} />
    <path d="M45 126 C41 150 43 178 47 200 M155 126 C159 150 157 178 153 200" className="fill-none stroke-(--lola-hair-shine)" strokeWidth="2.6" strokeLinecap="round" />

    {/* face */}
    <path d="M58 82 C58 46 78 30 100 30 C122 30 142 46 142 82 C142 112 126 138 100 142 C74 138 58 112 58 82Z" className={cn(SKIN, OUTLINED)} strokeWidth="2.5" strokeLinejoin="round" />
    <Features mood={mood} />

    {/* big gold hoops */}
    <circle cx="50" cy="122" r="13" className="fill-none stroke-(--lola-gold)" strokeWidth="4.5" />
    <circle cx="150" cy="122" r="13" className="fill-none stroke-(--lola-gold)" strokeWidth="4.5" />
    <path d="M42 112 Q38 122 42 132 M142 112 Q138 122 142 132" className="fill-none stroke-white" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
  </svg>
);
