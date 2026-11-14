# CLAUDE.md

Guidance for Claude Code when working in this repository. Detailed rules live in `.claude/rules/` and load automatically when you work on matching files. `.claude/rules/corrections.md`, `.claude/rules/deployment-urls.md` and `.claude/rules/ai-tooling.md` load every session, and they are binding.

## What this project is

**Vamos**: a fully static study game for a Greek speaker learning Spanish with **two course books, treated as equals**: *Aula Internacional Plus 1* (A1, chapters 0 to 9: vocabulary by page, grammar lessons, verbs) and *Gramática de uso del español* (107 units, each with theory and numbered exercises; the class writes homework as "50.2", unit 50 exercise 2). Both books have their own pages, grammar lessons, drills, "taught in class" ticks and practice. There is **no database, no auth, no backend**. Progress, homework and settings live in the browser's `localStorage`. It is deployed to Vercel as a static site.

The course PDFs live in `data/` (git-ignored, copyrighted, never deployed). The content in `content/` is typed data transcribed from them, with original Greek explanations and original drills.

## Commands

```bash
pnpm dev               # Dev server on http://localhost:3000 (Next moves to 3001 if taken: read the Local: line)
pnpm build             # Production build, needs no env vars
pnpm start             # Start production server
pnpm lint              # ESLint
pnpm tsc --noEmit      # TypeScript check
pnpm validate:content  # Unique ids, answerable drills, known verbs, no em dashes in content/
pnpm smoke:game        # Builds thousands of exercises and checks each can be answered
npx shadcn@latest add <component>   # Add shadcn/ui components
```

Exact dependency versions: read `package.json`, don't assume.

## Rules index

| Rule | Loads when you touch | Covers |
| --- | --- | --- |
| `corrections.md` | always | Non-negotiables, incident log |
| `deployment-urls.md` | always | Canonical origin, `NEXT_PUBLIC_SITE_URL`, Vercel |
| `ai-tooling.md` | always | SkillSpector gate, what is installed and what stays out, delivery QA |
| `animation.md` | `components/`, `app/` | CSS motion, reduced motion |
| `code-style.md` | any `.ts`/`.tsx` | Arrow functions, if/else, params, imports |
| `react-nextjs.md` | `app/`, `components/`, `hooks/` | Server/client boundary, useEffect, performance |
| `ui-design.md` | `components/`, `.tsx`, `.css` | shadcn/Lucide, Button, ScrollArea, styling |
| `i18n.md` | `app/`, `content/` | Greek-only UI, Spanish as data, content writing rules |
| `dialog-system.md` | `components/`, `lib/stores/` | Central dialog store |
| `study-engine.md` | `lib/game/`, `lib/srs/`, `lib/stores/`, `lib/lookup/`, `content/` | Content schema, exercises, FSRS, persistence, word lookup |

Rule files use `paths:` frontmatter globs. Never write `app/[locale]/**` in one, because glob reads `[locale]` as a character class and the rule then silently never loads. Use `app/**` instead.

## Architecture

### Tech stack

- **Next.js 16** (App Router, all pages prerendered), **React 19**, **TypeScript strict**
- **Tailwind CSS 4** (CSS variables, oklch) plus **shadcn/ui** (New York style), **Lucide** icons
- **Zustand** with `persist` (localStorage) for progress, homework and settings
- **ts-fsrs** (FSRS spaced repetition) for flashcards and word mastery
- Browser APIs and free key-less web APIs: Wiktionary REST + MyMemory (tap-a-word lookup and Ask Lola)

### Project structure

```
app/layout.tsx          # Root: fonts (Alegreya for Spanish, Manrope for UI), providers
app/(main)/             # Shell with header + bottom nav: home, units, practice, homework, verbs, progress
app/play/[mode]/        # Full-screen game sessions (no shell)
app/globals.css         # All tokens, keyframes, the .font-es utility
components/             # app-shell/ home/ unit/ play/ learn/ (step-by-step lessons) mascot/ (Lola) homework/ progress/ verbs/ grammar/ (checklist) gramatica/ pdf/ practice/ + ui/ (shadcn ONLY)
content/                # units/unit-0..9.ts (+ unit-N-pages.ts), verbs.ts, gramatica/ (107 GuUnit files + practice/ = drills per numbered exercise), gramatica-de-uso.ts (how the books line up)
lib/game/               # text.ts (answer matching), builders.ts (exercise generators), lesson-steps.ts (step-by-step lessons), mastery.ts
lib/mascot/             # Lola's lines (praise, scolding, verdicts)
lib/lola/               # Ask Lola: local phrase search + MyMemory translation (content/phrasebook.ts holds the phrases)
lib/srs/fsrs.ts         # FSRS wrapper and mastery levels
lib/lookup/             # Tap-a-word: local index, function words, remote (Wiktionary, MyMemory)
lib/homework/           # parse.ts + plan.ts: understands "50.2 51.4 κεφάλαιο 2 σελ. 30-32" and turns it into ticks and tasks
lib/stores/             # progress, homework, settings, dialog stores
lib/content/selectors.ts# Flattened content, lookups
scripts/                # validate-content.ts, smoke-game.ts
types/content.ts        # The content schema and its writing rules
data/                   # Course PDFs. Git-ignored. Never commit, never deploy.
```

## Definition of Done

Work is complete only when all of these hold. Run them, don't assume:

1. `pnpm tsc --noEmit` and `pnpm lint` show zero new errors, with output never filtered.
2. `pnpm validate:content` and `pnpm smoke:game` pass whenever `content/`, `lib/game/` or the exercise types changed.
3. The change was **driven, not just compiled**. UI: screenshot the running app (mobile 390 px and desktop) and inspect it. Persistence: reload and read the data back from `localStorage`.
4. `pnpm build` succeeds with no environment variables set.
5. The abstracted lesson from any correction was written into `.claude/rules/`.

## Workflow

- **Plan first.** Enter plan mode for anything non-trivial (3+ steps or an architectural decision). Write the plan to `tasks/todo.md` with checkable items, confirm it, then track progress there and add a review section at the end. If something goes sideways, stop and re-plan instead of pushing.
- **Use subagents** for research, exploration and parallel analysis to keep the main context clean, one task per subagent.
- **Self-improvement loop.** After ANY correction from the user, update `.claude/rules/corrections.md` (or the relevant scoped rule) with the pattern that prevents a repeat.
- **Verify before "done".** Never mark a task complete without proving it works. Would a staff engineer approve this?
- **Demand elegance (balanced).** For non-trivial changes, ask whether there is a cleaner way; if a fix feels hacky, redo it properly. Skip this for simple, obvious fixes.
- **Autonomous bug fixing.** Given a bug report, a log, or a failing check: just fix it, with no hand-holding round-trips.

## Core Principles

- **Simplicity first.** Every change as simple as it can be, touching minimal code.
- **No laziness.** Root causes, not temporary patches. Senior-engineer standards.
- **Minimal impact.** Only touch what's necessary, and don't introduce collateral bugs.

## Writing Style

- **Em dashes are never allowed.** Do not use the `—` character, and do not use `--` as a substitute for one.
- This applies everywhere: UI copy, `content/` files, code comments, JSDoc, variable names, commit messages, PR descriptions, documentation, and chat responses.
- Rewrite with a comma, a colon, parentheses, or two separate sentences instead. Spanish dialogues are written without dash marks ("¿Cómo te llamas? Me llamo Ana.").

## Screenshot Workflow

Puppeteer is a devDependency with bundled Chromium. Always screenshot from localhost with `pnpm dev` running.

```bash
node screenshot.mjs http://localhost:3000                 # -> screenshots/screenshot-N.png
node screenshot.mjs http://localhost:3000/units/1 unit1   # -> screenshot-N-unit1.png
```

Screenshots auto-increment and are never overwritten. After capturing, read the PNG with the Read tool and inspect it. Check mobile (390 px wide) as well as desktop, because the game is mostly used on phones. When comparing against a reference, be specific about differences: spacing, font sizes, colors (hex), alignment, border-radius, shadows.

**Auto-verification:** after each meaningful UI change (a section, component or layout adjustment), screenshot, inspect, fix, and re-screenshot until correct, then move on. Do NOT batch every change and screenshot once at the end.
