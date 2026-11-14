/** How Lola feels, which decides her face and pose. `teaching` is her talking and explaining. */
export type LolaMood = "teaching" | "happy" | "wink" | "proud" | "annoyed" | "angry";

export interface LolaLine {
  /** A short Spanish exclamation, set in the serif. */
  es: string;
  /** What she says in Greek. Left out when she is swearing: the insults are Spanish only, a free vocabulary lesson. */
  el?: string;
  /** The face she makes while saying it. */
  mood: LolaMood;
}

/*
 * Lola is the learner's Latina girlfriend, as a joke: when he gets it right she is proud of him and
 * flirts, when he gets it wrong she yells like a girlfriend who has had enough. Playful and
 * over the top, never about who he really is.
 */

/** After a correct answer: admiring and flirty. Greek is only the translation (behind a button). */
const PRAISE: LolaLine[] = [
  { es: "¡Mi amor, qué bien lo haces!", el: "Αγάπη μου, πόσο καλά τα πας!", mood: "wink" },
  { es: "¡Eso es, papacito!", el: "Έτσι μπράβο, όμορφε μου!", mood: "wink" },
  { es: "¡Ay, mi vida, qué inteligente eres!", el: "Αχ, ζωή μου, τι έξυπνος που είσαι!", mood: "proud" },
  { es: "¡Me encantas cuando aciertas!", el: "Με τρελαίνεις όταν τα βρίσκεις σωστά!", mood: "wink" },
  { es: "¡Olé, mi rey! ¡Estoy orgullosa de ti!", el: "Ολέ, βασιλιά μου! Είμαι περήφανη για σένα!", mood: "proud" },
  { es: "¡Uy, qué bien, cariño!", el: "Ουάου, τι ωραία, αγάπη μου!", mood: "happy" },
  { es: "¡Ven aquí, que te doy un beso!", el: "Έλα εδώ να σε φιλήσω!", mood: "wink" },
  { es: "¡Mmm, sigue así, papacito!", el: "Μμμ, συνέχισε έτσι, μωρό μου!", mood: "wink" },
  { es: "¡Eres el mejor, mi amor!", el: "Είσαι ο καλύτερος, αγάπη μου!", mood: "happy" },
  { es: "¡Por eso eres mi novio favorito!", el: "Γι' αυτό είσαι ο αγαπημένος μου!", mood: "proud" },
];

/** After a wrong answer: a girlfriend at the end of her patience, in Spanish only (no Greek, no mercy). */
const SCOLD: LolaLine[] = [
  { es: "¡Joder, mi amor, otra vez mal!", mood: "angry" },
  { es: "¡Coño, qué burro eres!", mood: "angry" },
  { es: "¿Me estás escuchando o qué?", mood: "annoyed" },
  { es: "¡Esta noche duermes en el sofá!", mood: "angry" },
  { es: "¡Me estás volviendo loca, hostia!", mood: "angry" },
  { es: "¡Venga ya, cariño! ¡Eso lo vimos ayer!", mood: "annoyed" },
  { es: "¡No me lo puedo creer! ¡Qué cabeza hueca!", mood: "angry" },
  { es: "¡Hasta mi gato lo sabe, joder!", mood: "angry" },
  { es: "¡Estoy muy enfadada contigo!", mood: "annoyed" },
  { es: "¡Ay, qué vergüenza me das, mi amor!", mood: "annoyed" },
];

/** `position` is the exercise number in the session, so the lines rotate without any randomness. */
export const lolaReaction = ({ correct, position }: { correct: boolean; position: number }): LolaLine => {
  const lines = correct ? PRAISE : SCOLD;
  return lines[position % lines.length];
};

/** The line for the end of a session, by accuracy (0 to 100). */
export const lolaVerdict = (accuracy: number): LolaLine => {
  if (accuracy >= 85) return { es: "¡Olé, mi amor! ¡Qué ronda tan perfecta! ¡Te mereces un beso!", el: "Ολέ, αγάπη μου! Τι τέλειος γύρος! Σου αξίζει ένα φιλί!", mood: "proud" };
  if (accuracy >= 60) return { es: "¡No está mal, papacito! Un poquito más y me enamoro otra vez.", el: "Όχι κακά, όμορφε! Λίγο ακόμα και ξαναερωτεύομαι.", mood: "wink" };
  return { es: "¡Ay, qué horror, mi amor! ¡Eso no fue una ronda, fue un accidente! ¡Esta noche duermes en el sofá!", mood: "angry" };
};

/** Little coaching remarks while a rule is on screen, rotated by the rule's number. */
const NUDGES = [
  "Μωρό μου, πρόσεχε αυτό, το μπερδεύουν όλοι.",
  "Πάτα στις λέξεις και κοίτα τι σημαίνουν, αγάπη μου.",
  "Διάβασέ το δυνατά, δεν σε ακούει κανείς.",
  "Το έχεις σχεδόν, όμορφε!",
  "Αυτό θα σου χρειαστεί όταν γνωρίσεις τους γονείς μου.",
  "Μη με κοιτάς εμένα, κοίτα το παράδειγμα.",
];

export const lolaNudge = (index: number): string => NUDGES[index % NUDGES.length];

/** What she says when you open a page: a greeting by section. */
const GREETINGS: { prefix: string; line: LolaLine }[] = [
  { prefix: "/units", line: { es: "¡Vamos, cariño!", el: "Διάλεξε κεφάλαιο και πάμε.", mood: "happy" } },
  { prefix: "/gramatica", line: { es: "¡Ojo, amor!", el: "Διάβασε προσεκτικά, μετά θα σε εξετάσω.", mood: "teaching" } },
  { prefix: "/grammar", line: { es: "¿Y esto, cariño?", el: "Τίκαρε τι κάνατε στην τάξη. Μην λες ψέματα.", mood: "annoyed" } },
  { prefix: "/practice", line: { es: "¡A jugar, mi vida!", el: "Διάλεξε παιχνίδι. Μη με απογοητεύσεις.", mood: "wink" } },
  { prefix: "/homework", line: { es: "¿Y los deberes, mi amor?", el: "Ελπίζω να τις έκανες. Δεν θα το ξαναπώ.", mood: "annoyed" } },
  { prefix: "/verbs", line: { es: "¡Qué lío, cariño!", el: "Τα ρήματα θέλουν υπομονή. Και εσύ έχεις;", mood: "teaching" } },
  { prefix: "/progress", line: { es: "A ver, a ver...", el: "Δες πόσο έχεις προχωρήσει. Ή όχι.", mood: "proud" } },
];

const HOME_GREETING: LolaLine = { es: "¡Hola, mi amor!", el: "Έτοιμος να μάθεις; Πάτα με αν θες να ρωτήσεις κάτι.", mood: "wink" };

export const lolaGreeting = (pathname: string): LolaLine => GREETINGS.find((entry) => pathname.startsWith(entry.prefix))?.line ?? HOME_GREETING;
