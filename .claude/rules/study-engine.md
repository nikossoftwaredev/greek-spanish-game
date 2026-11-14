---
paths:
  - "lib/game/**"
  - "lib/srs/**"
  - "lib/stores/**"
  - "lib/lookup/**"
  - "lib/speech.ts"
  - "content/**"
  - "components/play/**"
  - "components/learn/**"
  - "components/mascot/**"
  - "lib/mascot/**"
---

# Study engine

## Persistence (localStorage, no backend)

- Three persisted Zustand stores: `vamos:progress:v1`, `vamos:homework:v1`, `vamos:settings:v1`. Each uses `skipHydration: true`; `Providers` calls `rehydrateStores()` once, and components that show persisted values gate on `useHydrated()` so the server HTML and the first client render always match.
- Changing the shape of a persisted store means bumping its `version` and writing a `migrate`, because real learners already have data. Content ids are part of that data: never rename or reuse one.
- `lib/backup.ts` exports and imports all three stores as one JSON file. Keep it in sync when a store gains a field (`snapshotProgress` lists every progress field).
- An additive field with a default in `INITIAL` needs no migration: persist merges the defaults over old data. Renaming or reshaping a field does.

## Two books, one model

- Aula chapters live in `content/units/` (`Unit`, with a `vocab` merged from the Léxico page and one group per printed page, `unit-N-pages.ts`). The Gramática de uso lives in `content/gramatica/` as `GuUnit` (a `GrammarLesson` plus `number`, `page` and `exercisesEl`). Both kinds of grammar topic are `FlatLesson`s (`lib/content/selectors.ts`) with a **key**: `1:genero` for Aula, `gu:50` for a Gramática unit. Taught ticks, drill statistics (`<key>:<drillId>`), practice (`/play/grammar?lesson=<key>`, `?lessons=a,b`, `?taught=1`) and the checklist all use keys, so a new feature must work for both books.
- Homework shorthand is parsed in `lib/homework/parse.ts` ("50.2" is Gramática de uso unit 50, exercise 2; "κεφάλαιο 2" and "σελ. 30-32" are Aula) and planned in `lib/homework/plan.ts`. Extend those two files (and their cases) when the class invents a new way of writing homework.
- The numbered exercises of the Gramática de uso are never reproduced (copyright), but each one is **playable in the app**: `exercisesEl` paraphrases what it asks, and `content/gramatica/practice/gu-*.ts` (`GuPractice`, merged by `withPractice` in `content/gramatica/index.ts`) tags every drill of the unit with the exercise it practises (`Drill.exercise`, 1-based) and adds original `x1, x2...` drills, so every exercise has 4 to 6. `/play/grammar?ex=50.2` runs one exercise (`SessionConfig.exercise`), and finishing it ticks `doneExercises` and, through `lib/homework/finish-exercise.ts`, completes the homework task once all its exercises are ticked. `validate:content` fails when an exercise has fewer than 4 drills or a drill has no exercise, so a new unit or drill must be tagged.
- Order drills are auto-checked as soon as the placed words equal any accepted order (`solution` or an `alternatives` entry) or the learner has placed as many words as the longest accepted order. Alternatives may therefore have a different word count than the solution, but every word of an alternative must be among the tiles.

## Class progress (what the learner decides)

- Two independent filters narrow what the games draw from: the **class unit** (vocabulary and verbs up to that chapter) and the **taught-lessons checklist** (`taughtLessons`, `unitId:lessonId` keys, edited on `/grammar`). Grammar drills come from the ticked lessons when a session has no explicit `units` param (`useTaught`), and `/play/grammar?taught=1` practises exactly the ticked lessons. An explicit `units`, `lesson` or `pages` param always wins.
- Vocabulary can also be filtered to the words printed on given book pages (`pages` param, `VocabGroup.page`): this is what the per-page "Κάρτες" and "Παίξε" buttons use.

## Exercises and sessions

- **Every exercise and flashcard says where it comes from** (`Exercise.source`, built in `lib/game/sources.ts` and shown by `SourceBadge` in `PromptHeader` and on the card: "Aula · Κεφάλαιο 3 · σελ. 50", "Gramática de uso · Ενότητα 50 · άσκηση 50.2", with a «Βιβλίο» button to that page). The end screen lists the chapters of each book the round used. A new exercise builder must set `source`; the smoke test fails on an exercise without one.
- **Greek to Spanish is the hard direction, so it is easy to practise**: flashcards start with the Greek (`cardDirection` setting, default `el-es`, a labelled «ΕΛ → ES» button that remembers the choice), the typing game asks for the Spanish from the Greek meaning, and the vocabulary list has «Κάλυψε τα ισπανικά / τα ελληνικά» to test yourself (the notes stay hidden while Spanish is covered, they can contain the answer).
- **Flashcards have two buttons**, «Δεν το ήξερα» (`again`) and «Το ήξερα» (`good`), not four.

- **The Greek translation under an exercise sentence is always visible** (the learner wants it there). Lola's speech (praise, insults, verdicts) and the lesson examples keep their Greek behind a «Μετάφραση» button (`components/translation.tsx`), so the Spanish is read first; the `showTranslations` setting shows those too. A new place that shows Lola's Greek or a lesson translation must use `Translation`; the task itself (the Greek sentence of an order drill, vocabulary meanings, reference pages) is never hidden.

- **The app has no sound, on purpose.** The browser's speech voices pronounce Spanish wrongly, so `speechSynthesis`, speak buttons, auto-speak, the speed setting and the listening games (`listen`, dictation) were removed. Do not bring audio back unless real recordings are supplied.

- Answers are checked **without a "Check" button** wherever the answer is unambiguous: a tapped option in a choice exercise is final, a typed answer that matches exactly is accepted 450 ms after the last key (an accent-less or wrong answer waits for Enter or the "Έλεγχος" button), and an ordered sentence is checked when its last word is placed. Every exercise view finishes by calling `onComplete(result)`; `onReady(evaluator)` is only for the manual button. A new exercise kind must follow the same rule.

- Randomness lives only in the builders (`lib/game/builders.ts`) and `shuffle`. React 19's purity lint forbids `Math.random()` and `Date.now()` during render, and `setState` inside an effect is an error: build a session with a lazy `useState(() => ...)` and restart a round by remounting with a new `key`.
- Typed answers go through `matchAnswer()`: leading articles are ignored, a missing accent is `accent` (correct, with a reminder), a missing `ñ` is wrong. Every new exercise kind must work with it and with the footer's "I don't know" button (`solutionOf`).
- `pnpm smoke:game` builds thousands of exercises and checks each can be answered. Run it after touching builders or content.

## Step-by-step lessons and Lola

- `/play/learn?lesson=<key>` (`mode: "learn"`, `components/learn/`) teaches one grammar lesson of either book as a flow: intro, each rule on its own screen with tappable examples, a "rebuild the example" check after the rule (`exampleOrder`), the tables and tips, a 4-drill quiz, and a verdict. The steps are built by the pure `buildLessonSteps` (`lib/game/lesson-steps.ts`); exercise steps reuse `ExerciseView` and `SessionFooter`, so auto-check and feedback behave exactly as in a game. Both lesson pages carry the «Μάθε το βήμα βήμα» button.
- **Lola** (`components/mascot/lola.tsx`) is the mascot: one original comic-style SVG (navy hair with blue streaks, big gold hoops, choker, yellow off-shoulder top, teal jacket, jeans) with six moods that change her face and pose: `teaching` (talking), `happy`, `wink`, `proud`, `annoyed`, `angry`. `body="bust"` is the top of the same drawing, so there is a single drawing to maintain. Colours are the `--lola-*` tokens in `globals.css` (the one place illustration colours are allowed). She plays the learner's Latina girlfriend, as a joke (admires and flirts when he is right, yells like a girlfriend at the end of her patience when he is wrong). Her lines live in `lib/mascot/lines.ts`, each with the mood she makes while saying it (rotated by position, no randomness): praise is flirty and smug, scolding is furious and swears **in Spanish only, with no Greek line** (`¡Joder, otra vez mal!`, `¡Qué burro!`: the learner asked for it, and the words are tappable so it doubles as vocabulary) but never attacks who the learner is. The `mascot` setting turns her off. Never base her on a real person's likeness.
- **She is on screen all the time and she talks** in a `SpeechBubble` (`components/mascot/speech-bubble.tsx`: tones `calm` (always cream with dark ink, in both themes: the `lola-bubble` utility) and `loud` (red, shaking), tails `left`, `left-low`, `right`, `down`, `down-left`). `LolaFooterStage` wraps the content of every fixed footer (answer feedback, lesson steps, flashcards: new footers must use it) with her standing at the left, feet on the bottom of the screen; the reaction, the right answer and the example live in her bubble inside the footer, so nothing covers the exercise. `LolaCorner` keeps her in the bottom corner of the app pages (`app/(main)/layout.tsx`) with a greeting bubble per page (`lolaGreeting`) that fades by itself. End screens use `LolaVerdict`. `AskLola` is the tappable wrapper (`body="full"` for the whole figure).
- **Ask Lola** (`components/mascot/ask-lola-dialog.tsx`, key `ASK_LOLA_DIALOG`; open it with `<AskLola mood />`, a tappable Lola, or the header button): the learner types Greek (or a Spanish phrase) and she answers. `askLocal` (`lib/lola/ask.ts`) answers offline from `content/phrasebook.ts` (about 100 hand-written phrases, matched ignoring accents, punctuation and wrappers like «πώς λέμε ... στα ισπανικά», plus «τι σημαίνει ...») and from the book vocabulary; only when that is not `confident` does `translateText` (`lib/lola/translate.ts`) send **the typed text and nothing else** to MyMemory, cached in `vamos:ask:v1`, and the answer is labelled as machine translation. Keep that boundary: never send anything else about the learner, and add a phrase to the phrasebook (smoke test checks every wording finds its own phrase) instead of trusting a machine translation for common phrases. Keydown inside her panel must `stopPropagation`, because games and lessons listen for Enter on `window`.

## Spaced repetition

- FSRS through `ts-fsrs` (`lib/srs/fsrs.ts`), one card per vocabulary id, with empty learning steps (a session already repeats wrong answers). Game answers rate a card once per session: wrong is `again`, right is `good`, a missing accent is `hard`. Flashcards use all four ratings.
- Mastery (`new`, `learning`, `known`, `mastered`) is derived from FSRS stability. Do not store it.

## Tap-a-word lookup

- `lookupLocal` (book vocabulary, verb forms, function words) answers instantly and offline. `lookupRemote` adds Wiktionary (lemma, form description, definitions, example) and MyMemory (Greek machine translation, only when the book has no Greek). Both are free, key-less and CORS-open, and are called straight from the browser. Only the tapped word leaves the device. Every answer is cached in `vamos:lookup:v1`.
- Never send anything else about the learner to these services, and do not add another third-party request without recording it in the README.

## Next.js gotchas hit in this project

- Do not import a non-component value (a constant, a map) from a `"use client"` module into a server component: it arrives as a client reference, not as the value. Shared constants live in plain modules (`lib/game/modes.ts`).
- Do not use `@theme inline` variables inside `var()` in custom CSS: `inline` does not emit them. Reference the font variable (`--font-alegreya`) directly.
- Vocabulary carries **no emoji**, on purpose (the learner asked for it to be removed everywhere): there is no `emoji` field on words or groups and no picture-matching exercise. Do not add them back.

## Copyright

- `data/` holds the learner's own copyrighted PDFs and is git-ignored. Never commit or deploy it. Vocabulary words and verb tables are factual and transcribed; everything else in `content/` (examples, drills, explanations) is original.
