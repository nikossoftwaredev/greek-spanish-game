---
paths:
  - "components/**"
  - "app/**"
---

<!-- Do NOT write `app/[locale]/**` here: glob treats `[locale]` as a character class. -->

# Motion

- Motion is **CSS only**: keyframes and `--animate-*` tokens live in `app/globals.css` (`shake`, `pop`, `rise`, `float-up`, `confetti`), applied with Tailwind's `motion-safe:animate-*`. GSAP, Lenis and framer-motion are deliberately not installed: a study app with nested scrollers and a bottom sheet does not need smooth-scroll hijacking.
- **Reduced motion is mandatory.** Use `motion-safe:` for every animation and `motion-reduce:hidden` for purely decorative motion (the confetti). The reduced state must show the same final content.
- **Animate `transform` and `opacity` only.** Feedback (press, shake, pop) stays under 500 ms; the card flip is a 3D `rotateY` transform. The progress bar width is the one allowed exception, as it is a data display.
- A press effect is a transform, never a layout change: chunky buttons and cards move down 2 to 3 px and lose their lower edge shadow.
- **Every keyframe ends in `transform: none`** (and `opacity: 1`) when it uses `animation-fill-mode: both`. A transform left behind by the last frame makes the element the containing block of any `position: fixed` descendant and drags the bar off the screen. Game bars are not fixed anyway (see `PlayShell` in `.claude/rules/study-engine.md`).
- Nothing may run randomness during render (React 19 purity lint): derive confetti and other decorations from the index.
