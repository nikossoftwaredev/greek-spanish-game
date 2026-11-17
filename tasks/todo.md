# Vamos: static Spanish study game

Goal: a static project (no database) to learn Spanish with games, split exactly by the units of *Aula Internacional Plus 1*, with progress in localStorage, a homework tracker, and a Vercel deploy for the whole class.

## Research summary (decisions)

- **Source material**: `data/` has two PDFs. The Aula PDF (146 pages) is a scan with no text layer, units 0 to 9, 14 pages per unit, Léxico and Gramática at fixed offsets. The Gramática de uso PDF has a text layer and a 128-entry TOC (107 units, two pages each).
- **Official glossary**: no free official PDF exists. Difusión keeps glossaries on Campus Difusión (needs the hybrid edition or teacher access). Scribd and PDFCoffee copies are unauthorised uploads and were not downloaded. The book's own Léxico pages are the vocabulary source. If the learner downloads the glossary from Campus, drop it into `data/` and extend `content/`.
- **Learning design**: Duolingo-style mixed sessions with retry of mistakes, FSRS spaced repetition for flashcards and word mastery (`ts-fsrs`), typed answers with accent buttons and an accent-tolerant check, listening through the browser's Spanish `speechSynthesis`, conjugation drills with irregular forms highlighted, grammar practice per lesson.
- **Word lookup (user request)**: tap any word. Local index first (book vocabulary, verb forms, function words), then Wiktionary REST (lemma, form description, definitions, example) and MyMemory (Greek machine translation). CORS verified from a browser. Cached in localStorage. `dictionaryapi.dev` has no Spanish data, so it was rejected.
- **Static, no backend**: Next.js 16, every page prerendered, Zustand `persist` to localStorage, JSON backup file, noindex.

## Plan

- [x] Read both PDFs, locate Léxico/Gramática pages, sample unit colours
- [x] Content schema (`types/content.ts`), reference unit 1, four parallel transcription agents (units 0/2/3, 4/5/6, 7/8/9, verbs)
- [x] Strip the template (auth, Prisma, admin, next-intl, S3, reviews, Lenis, GSAP)
- [x] Engine: answer matching, exercise builders, FSRS wrapper, persisted stores
- [x] Game UI: mix, flashcards, match, type, listen, verbs, grammar practice, summary
- [x] Pages: home, units, unit (vocab, grammar, verbs, book), grammar lesson, practice hub, homework, verbs, progress
- [x] Tap-a-word panel (local + Wiktionary + MyMemory) and Spanish TTS
- [x] Homework tracker (kind, unit, page/exercise, due date, practice shortcut)
- [x] Class-unit picker so games only use material the class has covered
- [x] Backup export/import, daily goal, streak, saved words
- [x] `validate:content` and `smoke:game` scripts
- [x] Independent review of all Spanish and Greek content (3 read-only reviewers): ~30 confirmed fixes applied (vos accepted under a «tú» prompt, a false farewell-by-time-of-day table, mistranslated examples, wrong notes, glosses), plus a new `alternatives` field so equally valid word orders are accepted in sentence-building drills
- [x] Docs: CLAUDE.md, README, rules
- [x] Grammar checklist (`/grammar`): tick the lessons the class has been taught, practise exactly those, per-lesson accuracy
- [x] Whole-book vocabulary by page and chapter: every Aula page (Empezar, Comprender, Explorar, Practicar, Vídeo) read, 1,953 words each with its printed page, "Ανά σελίδα" view, per-page flashcards and practice, 2 independent reviews with ~100 fixes applied
- [x] Second book at equal weight: 107 Gramática de uso units (theory, tables, tips, 12 original drills each, paraphrase of every numbered exercise), /gramatica pages, shared "Ύλη" checklist with two tabs, exercise ticks, "Τι κάνατε σήμερα;" chat parser ("50.2" is unit 50 exercise 2). 5 independent reviewers read all 107 units: every table form was correct; ~100 wording, missing-alternative and over-broad-rule fixes applied
- [x] Mobile: manifest + icons (installable), bigger touch targets under `pointer: coarse`, progress transfer («Μεταφορά προόδου»: share sheet / JSON file / import with confirmation), verified end to end between two browser contexts
- [x] Source PDF viewer for both books (the learner loads their own PDFs, stored in IndexedDB) and auto-check of answers (no Check button)
- [x] Numbered exercises of the Gramática de uso playable in the app: 9 agents tagged the 1,284 existing drills and added 873 original ones (2,157 total, every one of the 434 exercises has 4 to 6), 5 independent reviewers read all of them; `?ex=50.2` sessions, auto-tick, homework auto-completes; validate + smoke enforce it
- [x] Step-by-step grammar lessons (`/play/learn`) for both books, with a rebuild-the-example check after each rule and a quiz
- [x] Lola, an original SVG mascot (4 moods) cheering and scolding in the answer feedback and the end screens, with a setting to switch her off
- [x] Two vocabulary games («Μετάφραση» both directions, «Φτιάξε τη λέξη» letter scramble)
- [x] Guided chapter path: sticky vocabulary % and grammar % on chapter and lesson pages, the main buttons say where they lead, «Επόμενο» after every round until the chapter is done, flashcards re-ask missed words, lessons remember the step
- [x] Practice hub section for the Gramática de uso (unit groups), Ask Lola chat redesign without ready-made phrases, easier PDF zoom (pinch, double tap, keys)
- [x] `PlayShell`: locked top and bottom bars for games, lessons and flashcards (fixes the footer floating mid-screen on a real phone), install banner/button for mobile browsers
- [x] One floating, draggable `LolaCompanion` (position remembered, bubble flips to the side with room and stays on screen, stands on top of the game footer), her lines go through `lola-store`
- [x] Right-answer sound (Web Audio) and Lola's voice (free browser voice, only with a Spanish voice), both with settings and in the backup
- [x] Klett Anexo glossary replaces the Aula vocabulary (see the plan below)
- [ ] Underlining the found text in the PDF: not possible for the scanned Aula PDF (images, no text layer); possible for the Gramática PDF (has a text layer) later
- [ ] Learner: push to GitHub and import the repo in Vercel (no env vars needed)
- [ ] `/audit` and `/site-qa` before sharing the URL widely (not run yet)

## Review

- `pnpm tsc --noEmit`, `pnpm lint`, `pnpm validate:content` (10 units, 721 words, 540 drills, 53 verbs), `pnpm smoke:game` (8,000+ exercises) and `pnpm build` (75 static pages, no env vars) all pass.
- Driven in the browser at 390 px and 1280 px: home, unit page, grammar lesson, every game type, session summary, homework dialog, verbs, tap-a-word with the live Wiktionary call. Progress verified in `localStorage` after a finished session (xp, cards, sessions, activeDays).
- Review found no wrong verb form among the 53 verbs and no wrong cloze/choice answer; the issues were nuance (see the checklist item above).
- Bugs found by driving it and fixed: serif font not applied (`@theme inline` variable), flag emoji as letters on Windows, twin words in match rounds (found by the smoke test), collapsed buttons on the summary screen, sessions opening with a typed conjugation instead of an easy question.
- Gramática de uso: `pnpm validate:content` now checks 107 units, 1,284 drills; `pnpm smoke:game` builds 10,000+ exercises across both books. Overflow checked at 390 px on 12 pages (none).
- Known limits: the book's own numbered exercises are not reproduced (copyright), only paraphrased; the Aula "Más ejercicios / Más gramática" pages are not in the PDF; /audit and /site-qa were not run; progress is per browser (use the backup file to move it); Wiktionary glosses are in English and the Greek machine translation is marked as such; Spanish voice quality depends on the voices installed on the device.

## Review: floating Lola, sound, guided path (2026-11-16)

- `pnpm tsc --noEmit`, `pnpm exec eslint .`, `pnpm validate:content` (10 units, 1,953 words, 540 drills, 53 verbs; 107 Gramática units, 2,157 drills), `pnpm smoke:game` (14,892 exercises) and `pnpm build` (no env vars) all pass.
- Driven in the browser at 390 px and 1280 px: dragging Lola (lands where released, a drag does not open Ask Lola, a tap does), her position after navigation and reload (`lolaPosition` in `vamos:settings:v1`), the bubble flipping to the side with room in all four corners and staying inside the screen, her bubble above the game footer on wrong answers, lesson steps and the end screen, the right-answer sound (2 notes per right answer, 0 for wrong ones, 0 with the setting off), backup round trip with `wordResults` and `lessonProgress`, PDF zoom (all checks pass), install banner (Android, iPhone, desktop), the guided path end to end.
- Bugs found by driving it: the default spot of Lola covered an answer option on game screens (now anchored above the footer), a drag stored a position one pointer step short (stale closure, now a ref), two test scripts targeted removed UI (four flashcard buttons, the old tappable Lola).
- Known limits: the voice and the sound were verified through the code paths (headless Chrome has no Spanish voice and no speakers), so check them once on the real phone; the real-phone Safari behaviour of PDF zoom and the keyboard was not verified; `/audit` and `/site-qa` were not run; nothing is deployed yet.

## Plan: the Klett glossary (data/Α1.pdf) as the only Aula vocabulary source (2026-11-17)

The learner added the Greek Anexo of Aula Internacional Plus 1 (54 scanned pages, no text layer). Its «Γλωσσάριο» lists, per chapter, every word with its Greek meaning under a «Página N» header and an exercise number in the margin. Goal: the Aula vocabulary comes only from it, so opening chapter 3 shows each word with its book page.

- [x] Transcribe the glossary tables (not the grammar notes or the extra «Αξιολόγιο» lists) per chapter: 9 agents read the rendered pages, one JSON per chapter in the scratchpad (page header as printed, exercise number carried forward, Spanish and Greek exactly as printed)
- [x] Independent review: a second, independent reading of every page (the readers never saw the first one), compared row by row by a script; the 4 differing rows were judged on the page image
- [x] Merge: new `content/units/unit-N-pages.ts` (one group per printed page, for chapters 0 to 9) built from the glossary; keep the id, part of speech, gender, note and original example of a word the old data already had (progress is stored by id), new ids for new words, drop old words the glossary does not list; remove the old Léxico groups from the unit files
- [x] `VocabItem.exercise`, page ranges like «Páginas 18 y 19», the «Más ejercicios» pages (141+, not in the Aula PDF, so no «Βιβλίο» button for them)
- [x] UI: the vocabulary list loses the «Βασικό λεξιλόγιο» view (there are no topic groups any more), rows and sources show «σελ. N · άσκηση M»
- [x] `validate:content`, `smoke:game`, `tsc`, `eslint`, `build`, browser check at 390 px and desktop, docs and rules updated
- Known trade-off: a word keeps one card for the whole book (first chapter that prints it), so progress is not split; a word the glossary repeats in a later chapter is not listed twice.

### Review: the glossary as the Aula vocabulary (2026-11-17)

- `data/Α1.pdf` (54 scanned pages, no text layer) was read visually by 9 readers, then again by 9 independent readers; 1,587 glossary rows in total, the two readings agree on all but 4 rows (judged on the page image: two accent readings of a Greek word, two spaces after a slash).
- Result: 1,496 words (the old data had 1,953, of which 988 were already in the glossary and kept their id, part of speech, gender, note and example when the Greek meaning still agrees; 509 are new; 966 old words are not in the glossary and are gone, as asked). About 90 glossary rows repeat a word printed in an earlier chapter and stay in the first one (one card per word).
- Print errors fixed in the generator, never silently: `grafico/a` (accent), `υπομονητικός` (spelling) and a few spaces after a slash; `compartir | συνήθεια` is a print error that disappears because `compartir` is already in chapter 0.
- `acceptedForms` now writes out every slash in a phrase (`hijo/a único/a`, `mucho/a/os/as`, `mi/tu/su`, `alemán/ana` is `alemana`, `inglés/esa` is `inglesa`); 17 cases checked.
- Checked: `tsc`, `eslint`, `validate:content` (1,496 words), `smoke:game` (14,892 exercises), `pnpm build`, the vocabulary tab at 390 px and desktop, a flashcard round with its «σελ. N · άσκηση M» source, backup round trip, guided path.
- Not done on purpose: the Anexo's extra thematic boxes («ΑΞΙΟΛΟΓΙΟ», «ΛΕΞΙΛΟΓΙΟ»: colours, days, family, food, professions...) and its Greek grammar notes have no book page and are not part of the vocabulary; they could become a separate «Θεματικό λεξιλόγιο» section later.
