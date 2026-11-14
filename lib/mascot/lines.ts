/** How Lola feels, which decides her face and pose. `teaching` is her talking and explaining. */
export type LolaMood = "teaching" | "happy" | "wink" | "proud" | "annoyed" | "angry";

export interface LolaLine {
  /** A short Spanish exclamation, set in the serif. */
  es: string;
  /** What she says to the learner, in Greek. */
  el: string;
  /** The face she makes while saying it. */
  mood: LolaMood;
}

/** After a correct answer: pleased, flirty, a little smug. */
const PRAISE: LolaLine[] = [
  { es: "¡Eso es!", el: "Έτσι μπράβο, συνέχισε.", mood: "happy" },
  { es: "¡Olé!", el: "Σωστό. Για να δούμε αν το κάνεις και δεύτερη φορά.", mood: "wink" },
  { es: "¡Así me gusta!", el: "Έτσι σε θέλω, με μυαλό.", mood: "wink" },
  { es: "¡Qué crack!", el: "Σε καμάρωσα, σοβαρά.", mood: "proud" },
  { es: "¡Perfecto!", el: "Τέλεια, αυτό ήταν ωραίο.", mood: "happy" },
  { es: "¡Muy bien!", el: "Έχεις μυαλό, το ήξερα.", mood: "proud" },
  { es: "¡Genial!", el: "Με κάνεις περήφανη.", mood: "happy" },
  { es: "¡Bravo!", el: "Μπράβο, δεν μου χαλάς τη φήμη.", mood: "wink" },
];

/** After a wrong answer: furious or fed up, and not shy about it (but never cruel about who you are). */
const SCOLD: LolaLine[] = [
  { es: "¡Joder!", el: "Πάλι λάθος, ρε χαζέ;", mood: "angry" },
  { es: "¡Coño!", el: "Σοβαρά τώρα; Τόσο δύσκολο είναι;", mood: "angry" },
  { es: "¡Qué burro!", el: "Μα καλά, γάιδαρος γεννήθηκες;", mood: "angry" },
  { es: "¡Ay, por Dios!", el: "Έλα ρε βλάκα, το είδαμε αυτό χθες.", mood: "annoyed" },
  { es: "¡Madre mía!", el: "Κοιμόσουν στο μάθημα, ε; Ξύπνα!", mood: "annoyed" },
  { es: "¡Hostia!", el: "Τόσο λάθος που πόνεσαν τα μάτια μου.", mood: "angry" },
  { es: "¡No me lo puedo creer!", el: "Τι μαλακία ήταν αυτή; Ξανακοίτα το.", mood: "angry" },
  { es: "¡Vaya tela!", el: "Πάρε το χαζό κεφάλι σου και σκέψου πάλι.", mood: "annoyed" },
];

/** `position` is the exercise number in the session, so the lines rotate without any randomness. */
export const lolaReaction = ({ correct, position }: { correct: boolean; position: number }): LolaLine => {
  const lines = correct ? PRAISE : SCOLD;
  return lines[position % lines.length];
};

/** The line for the end of a session, by accuracy (0 to 100). */
export const lolaVerdict = (accuracy: number): LolaLine => {
  if (accuracy >= 85) return { es: "¡Olé, olé y olé!", el: "Εξαιρετικός γύρος. Αυτό θέλω να βλέπω.", mood: "proud" };
  if (accuracy >= 60) return { es: "¡No está mal!", el: "Όχι κακά. Με λίγη προσοχή θα γίνει τέλειο.", mood: "wink" };
  return { es: "¡Ay, qué horror!", el: "Αυτό δεν ήταν γύρος, ήταν ατύχημα. Ξανά, και προσεκτικά, ρε.", mood: "angry" };
};

/** Little coaching remarks while a rule is on screen, rotated by the rule's number. */
const NUDGES = [
  "Πρόσεχε αυτό, το μπερδεύουν όλοι.",
  "Πάτα στις λέξεις και κοίτα τι σημαίνουν.",
  "Διάβασέ το δυνατά, δεν σε ακούει κανείς.",
  "Το έχεις σχεδόν!",
  "Αυτό θα σου χρειαστεί στη συζήτηση.",
  "Μη με κοιτάς εμένα, κοίτα το παράδειγμα.",
];

export const lolaNudge = (index: number): string => NUDGES[index % NUDGES.length];

/** What she says when you open a page: a greeting by section. */
const GREETINGS: { prefix: string; line: LolaLine }[] = [
  { prefix: "/units", line: { es: "¡Vamos!", el: "Διάλεξε κεφάλαιο και πάμε.", mood: "happy" } },
  { prefix: "/gramatica", line: { es: "¡Ojo!", el: "Διάβασε προσεκτικά, μετά θα σε εξετάσω.", mood: "teaching" } },
  { prefix: "/grammar", line: { es: "¿Y esto?", el: "Τίκαρε τι κάνατε στην τάξη. Μην λες ψέματα.", mood: "annoyed" } },
  { prefix: "/practice", line: { es: "¡A jugar!", el: "Διάλεξε παιχνίδι. Μη με απογοητεύσεις.", mood: "wink" } },
  { prefix: "/homework", line: { es: "¿Deberes?", el: "Ελπίζω να τις έκανες. Δεν θα το ξαναπώ.", mood: "annoyed" } },
  { prefix: "/verbs", line: { es: "¡Qué lío!", el: "Τα ρήματα θέλουν υπομονή. Και εσύ έχεις;", mood: "teaching" } },
  { prefix: "/progress", line: { es: "A ver...", el: "Δες πόσο έχεις προχωρήσει. Ή όχι.", mood: "proud" } },
];

const HOME_GREETING: LolaLine = { es: "¡Hola!", el: "Έτοιμος να μάθεις; Πάτα με αν θες να ρωτήσεις κάτι.", mood: "wink" };

export const lolaGreeting = (pathname: string): LolaLine => GREETINGS.find((entry) => pathname.startsWith(entry.prefix))?.line ?? HOME_GREETING;
