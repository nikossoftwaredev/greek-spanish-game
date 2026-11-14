export interface LolaLine {
  /** A short Spanish exclamation, set in the serif. */
  es: string;
  /** What she says to the learner, in Greek. */
  el: string;
}

/** After a correct answer: warm and a little proud. */
const PRAISE: LolaLine[] = [
  { es: "¡Eso es!", el: "Έτσι μπράβο, συνέχισε." },
  { es: "¡Qué crack!", el: "Σε καμάρωσα, σοβαρά." },
  { es: "¡Olé!", el: "Σωστό. Ούτε η καθηγήτρια δεν θα είχε παράπονο." },
  { es: "¡Perfecto!", el: "Τέλεια, αυτό ήταν ωραίο." },
  { es: "¡Muy bien!", el: "Έχεις μυαλό, το ήξερα." },
  { es: "¡Genial!", el: "Με κάνεις περήφανη." },
  { es: "¡Así se hace!", el: "Έτσι γίνεται, ακριβώς έτσι." },
  { es: "¡Bravo!", el: "Μπράβο, να το γράψω στο τετράδιο;" },
];

/** After a wrong answer: a playful telling-off, never cruel. */
const SCOLD: LolaLine[] = [
  { es: "¡Madre mía!", el: "Πάλι λάθος; Μάζεψέ το λιγάκι." },
  { es: "¡Ay, no!", el: "Αυτό το είχαμε δει, ρε κεφάλι." },
  { es: "¡Qué desastre!", el: "Πρόσεχε, δεν είναι και δύσκολο." },
  { es: "¡Por Dios!", el: "Σοβαρά τώρα; Ξανακοίτα το." },
  { es: "¡Hombre, por favor!", el: "Έλα, ρε χαζούλη, μπορείς καλύτερα." },
  { es: "¡Ay, ay, ay!", el: "Και οι κότες θα το έκαναν σωστά." },
  { es: "¡No, no, no!", el: "Κοιμόσουν στο μάθημα, ε;" },
  { es: "¡Vaya tela!", el: "Τι ήταν αυτό; Δες τη σωστή απάντηση και θυμήσου την." },
];

/** `position` is the exercise number in the session, so the lines rotate without any randomness. */
export const lolaReaction = ({ correct, position }: { correct: boolean; position: number }): LolaLine => {
  const lines = correct ? PRAISE : SCOLD;
  return lines[position % lines.length];
};

/** The line for the end of a session, by accuracy (0 to 100). */
export const lolaVerdict = (accuracy: number): { mood: "proud" | "happy" | "angry"; line: LolaLine } => {
  if (accuracy >= 85) return { mood: "proud", line: { es: "¡Olé, olé y olé!", el: "Εξαιρετικός γύρος. Αυτό θέλω να βλέπω." } };
  if (accuracy >= 60) return { mood: "happy", line: { es: "¡No está mal!", el: "Όχι κακά. Με λίγη προσοχή θα γίνει τέλειο." } };
  return { mood: "angry", line: { es: "¡Ay, qué horror!", el: "Αυτό δεν ήταν γύρος, ήταν ατύχημα. Ξανά, και προσεκτικά." } };
};

/** Little coaching remarks while a rule is on screen, rotated by the rule's number. */
const NUDGES = [
  "Πρόσεχε αυτό, το μπερδεύουν όλοι.",
  "Πάτα στις λέξεις και κοίτα τι σημαίνουν.",
  "Πάτα όποια λέξη θες για να δεις τι σημαίνει.",
  "Το έχεις σχεδόν!",
  "Αυτό θα σου χρειαστεί στη συζήτηση.",
  "Διάβασε το παράδειγμα φωναχτά, δεν σε ακούει κανείς.",
];

export const lolaNudge = (index: number): string => NUDGES[index % NUDGES.length];
