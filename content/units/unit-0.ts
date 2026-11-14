import type { Unit, VocabItem } from "@/types/content";

/** Numbers 1 to 10 as the book's alphabet page lists them. `el` is the digit. */
const NUMBERS: [number, string][] = [
  [1, "uno"], [2, "dos"], [3, "tres"], [4, "cuatro"], [5, "cinco"],
  [6, "seis"], [7, "siete"], [8, "ocho"], [9, "nueve"], [10, "diez"],
];

const NUMBER_NOTES: Record<number, string> = {
  1: "Πριν από ουσιαστικό γίνεται un / una: un libro, una mesa (θα το δεις στη Μονάδα 2).",
  4: "Προφέρεται περίπου «κουάτρο».",
  5: "Στην Ισπανία το c ακούγεται σαν θ: «θίνκο».",
  7: "Το ie ακούγεται σαν «γιε»: «σιέτε».",
  9: "Περίπου «νουέβε». Το v ακούγεται σαν το b.",
  10: "Στην Ισπανία το z ακούγεται σαν θ: «διέθ».",
};

const numberItems: VocabItem[] = NUMBERS.map(([n, es]): VocabItem => ({
  id: `u0-num-${n}`,
  es,
  el: String(n),
  pos: "number",
  ...(NUMBER_NOTES[n] ? { noteEl: NUMBER_NOTES[n] } : {}),
}));

interface LetterRow {
  letter: string;
  name: string;
  word: string;
  noteEl: string;
  accept?: string[];
}

/** The Spanish alphabet as the book's table lists it: letter, name, example word. */
const LETTERS: LetterRow[] = [
  { letter: "A", name: "a", word: "Alberto", noteEl: "Ήχος α, όπως στο «αλφάβητο»." },
  { letter: "B", name: "be", word: "Buenos Aires", noteEl: "Στην αρχή της λέξης σαν «μπ», αλλιώς σαν ήπιο β. Ακούγεται ίδιο με το v. Στη Λατινική Αμερική λένε και «be larga»." },
  { letter: "C", name: "ce", word: "Cuba", noteEl: "Πριν από a, o, u ακούγεται κ (Cuba). Πριν από e, i ακούγεται θ στην Ισπανία (cena) και σ στη Λατινική Αμερική." },
  { letter: "D", name: "de", word: "Diego", noteEl: "Στην αρχή της λέξης σαν «ντ». Ανάμεσα σε φωνήεντα σαν το ελληνικό δ." },
  { letter: "E", name: "e", word: "Elena", noteEl: "Σαν ε, πάντα καθαρό, ποτέ σαν «ι»." },
  { letter: "F", name: "efe", word: "Federico", noteEl: "Σαν φ." },
  { letter: "G", name: "ge", word: "García", noteEl: "Πριν από a, o, u ακούγεται γκ ή γ (García). Πριν από e, i ακούγεται χ (gente)." },
  { letter: "H", name: "hache", word: "Honduras", noteEl: "Δεν προφέρεται ποτέ: Honduras ≈ «Οντούρας»." },
  { letter: "I", name: "i", word: "Ignacio", noteEl: "Σαν ι. Λέγεται και «i latina».", accept: ["i latina"] },
  { letter: "J", name: "jota", word: "Javier", noteEl: "Σαν δυνατό χ, όπως στο «χάρη»: Javier ≈ «Χαβιέρ»." },
  { letter: "K", name: "ca", word: "Kenia", noteEl: "Σαν κ. Το βιβλίο γράφει «ca», η RAE προτιμά «ka». Σπάνιο γράμμα, σε ξένες λέξεις." },
  { letter: "L", name: "ele", word: "Luis", noteEl: "Σαν λ." },
  { letter: "M", name: "eme", word: "María", noteEl: "Σαν μ." },
  { letter: "N", name: "ene", word: "Natalia", noteEl: "Σαν ν." },
  { letter: "Ñ", name: "eñe", word: "España", noteEl: "Ξεχωριστό γράμμα: ακούγεται σαν «νι», όπως στο «νιάτα». España ≈ «Εσπάνια»." },
  { letter: "O", name: "o", word: "Óscar", noteEl: "Σαν ο, πάντα καθαρό." },
  { letter: "P", name: "pe", word: "Pérez", noteEl: "Σαν π, χωρίς φύσημα." },
  { letter: "Q", name: "cu", word: "Quito", noteEl: "Πάντα με u (que, qui) και ακούγεται κ: Quito ≈ «Κίτο»." },
  { letter: "R", name: "erre", word: "Ramón", noteEl: "Σαν ρ. Στην αρχή της λέξης και ως rr ακούγεται πιο δυνατό, με πολλά χτυπήματα της γλώσσας." },
  { letter: "S", name: "ese", word: "Sara", noteEl: "Πάντα σαν σ, ποτέ σαν ζ: Sara ≈ «Σάρα»." },
  { letter: "T", name: "te", word: "Teresa", noteEl: "Σαν τ." },
  { letter: "U", name: "u", word: "Uruguay", noteEl: "Σαν ου. Στα que, qui, gue, gui δεν ακούγεται." },
  { letter: "V", name: "uve", word: "Venezuela", noteEl: "Ακούγεται ίδιο με το b. Στη Λατινική Αμερική λένε «ve» ή «ve corta».", accept: ["ve", "ve corta"] },
  { letter: "W", name: "uve doble", word: "Walter", noteEl: "Μόνο σε ξένες λέξεις και ονόματα, σαν «ου» + φωνήεν: Walter ≈ «Ουάλτερ». Στη Λατινική Αμερική λένε «doble ve».", accept: ["doble ve", "doble u"] },
  { letter: "X", name: "equis", word: "Álex", noteEl: "Συνήθως σαν κς: Álex ≈ «Άλεκς»." },
  { letter: "Y", name: "ye", word: "Yalta", noteEl: "Σαν «γι», όπως στο «γιατρός». Λέγεται και «i griega».", accept: ["i griega"] },
  { letter: "Z", name: "zeta", word: "Zaragoza", noteEl: "Στην Ισπανία σαν θ (Zaragoza ≈ «Θαραγόθα»), στη Λατινική Αμερική σαν σ." },
];

const letterItems: VocabItem[] = LETTERS.map(({ letter, name, word, noteEl, accept }): VocabItem => ({
  id: `u0-letra-${letter === "Ñ" ? "enie" : letter.toLowerCase()}`,
  es: name,
  el: letter,
  pos: "noun",
  gender: "f",
  noteEl,
  example: { es: `${letter} de ${word}.`, el: `${letter} όπως ${word}.` },
  ...(accept ? { accept } : {}),
}));

export const unit0: Unit = {
  id: 0,
  titleEs: "En el aula",
  titleEl: "Στην τάξη",
  goalEl: "Συστήνομαι, χαιρετώ και αποχαιρετώ, και ρωτάω ή ζητάω βοήθεια στην τάξη των ισπανικών.",
  color: "#ee657f",
  pages: { start: 10, end: 13 },
  communicativeEl: [
    "Συστήνομαι και ρωτάω πώς λέγεται ο άλλος (Me llamo… ¿Y tú?)",
    "Χαιρετώ και αποχαιρετώ ανάλογα με την ώρα",
    "Λέω τα γράμματα του αλφαβήτου και δηλώνω πώς γράφεται μια λέξη",
    "Μετράω από το 1 έως το 10",
    "Ονομάζω τα αντικείμενα της τάξης",
    "Ζητάω βοήθεια: ¿Cómo se dice…? ¿Puedes repetir, por favor?",
  ],
  verbIds: ["llamarse"],
  vocab: [
    {
      id: "presentarse",
      page: 10,
      section: "En el aula",
      titleEs: "Presentarse",
      titleEl: "Συστάσεις",
      items: [
        { id: "u0-me-llamo", es: "Me llamo…", el: "Με λένε…", pos: "phrase", noteEl: "Κυριολεκτικά «ονομάζομαι…». Το ρήμα llamarse θα το μάθεις στη Μονάδα 1.", example: { es: "Hola, me llamo Elena.", el: "Γεια, με λένε Elena." } },
        { id: "u0-como-te-llamas", es: "¿Cómo te llamas?", el: "Πώς σε λένε;", pos: "phrase", noteEl: "Το ερωτηματικό ανοίγει ανάποδα στην αρχή της ερώτησης.", example: { es: "¿Cómo te llamas? Me llamo Sara.", el: "Πώς σε λένε; Με λένε Sara." } },
        { id: "u0-y-tu", es: "¿Y tú?", el: "Κι εσύ;", pos: "phrase", noteEl: "Το tú (εσύ) γράφεται με τόνο.", example: { es: "Me llamo Pablo. ¿Y tú?", el: "Με λένε Pablo. Κι εσύ;" } },
      ],
    },
    {
      id: "saludos",
      page: 11,
      section: "En el aula",
      titleEs: "Saludos",
      titleEl: "Χαιρετισμοί",
      items: [
        { id: "u0-hola", es: "¡Hola!", el: "Γεια!", pos: "interjection", noteEl: "Το h δεν προφέρεται: «όλα».", example: { es: "¡Hola, Pablo!", el: "Γεια σου, Pablo!" } },
        { id: "u0-buenos-dias", es: "Buenos días.", el: "Καλημέρα.", pos: "phrase", noteEl: "Στα ισπανικά είναι στον πληθυντικό. Σε ορισμένες χώρες της Λατινικής Αμερικής ακούς και «buen día».", example: { es: "Buenos días, Marta.", el: "Καλημέρα, Marta." } },
        { id: "u0-buenas-tardes", es: "Buenas tardes.", el: "Καλησπέρα. / Καλό απόγευμα.", pos: "phrase", noteEl: "Χρησιμοποιείται από το μεσημέρι μέχρι να βραδιάσει.", example: { es: "Buenas tardes, señora López.", el: "Καλησπέρα, κυρία López." } },
        { id: "u0-buenas-noches", es: "Buenas noches.", el: "Καλησπέρα (βράδυ). / Καληνύχτα.", pos: "phrase", noteEl: "Λέγεται και ως χαιρετισμός το βράδυ και ως ευχή πριν τον ύπνο.", example: { es: "Buenas noches, mamá.", el: "Καληνύχτα, μαμά." } },
        { id: "u0-que-tal", es: "¿Qué tal?", el: "Τι κάνεις;", pos: "phrase", noteEl: "Φιλικός χαιρετισμός, όπως το ελληνικό «τι κάνεις;». Δεν ρωτά για τη δουλειά σου.", example: { es: "¿Qué tal, Pablo?", el: "Τι κάνεις, Pablo;" } },
        { id: "u0-como-estas", es: "¿Cómo estás?", el: "Πώς είσαι;", pos: "phrase", noteEl: "Ευγενική μορφή: ¿Cómo está usted?", example: { es: "Hola, Ana. ¿Cómo estás?", el: "Γεια, Ana. Πώς είσαι;" } },
      ],
    },
    {
      id: "despedidas",
      page: 11,
      section: "En el aula",
      titleEs: "Despedidas",
      titleEl: "Αποχαιρετισμοί",
      items: [
        { id: "u0-adios", es: "¡Adiós!", el: "Αντίο!", pos: "interjection", noteEl: "Γενικός αποχαιρετισμός, και όταν δεν θα ξαναδείτε σύντομα τον άλλον.", example: { es: "¡Adiós, profesora!", el: "Αντίο, κυρία καθηγήτρια!" } },
        { id: "u0-hasta-luego", es: "¡Hasta luego!", el: "Τα λέμε! / Τα λέμε αργότερα!", pos: "interjection", example: { es: "¡Hasta luego, Pablo!", el: "Τα λέμε, Pablo!" } },
        { id: "u0-hasta-pronto", es: "¡Hasta pronto!", el: "Τα λέμε σύντομα!", pos: "interjection", noteEl: "Το pronto σημαίνει «σύντομα».", example: { es: "Adiós, ¡hasta pronto!", el: "Αντίο, τα λέμε σύντομα!" } },
        { id: "u0-chau", es: "Chau", el: "Γεια! / Τσάο!", pos: "interjection", noteEl: "Φιλικό και άτυπο, από το ιταλικό ciao. Γράφεται και «chao».", example: { es: "¡Chau, Laura!", el: "Γεια, Laura!" }, accept: ["chao"] },
      ],
    },
    {
      id: "numeros",
      page: 11,
      section: "En el aula",
      titleEs: "Los números del 1 al 10",
      titleEl: "Αριθμοί 1 έως 10",
      items: numberItems,
    },
    {
      id: "abecedario",
      page: 11,
      section: "En el aula",
      titleEs: "El abecedario",
      titleEl: "Το αλφάβητο",
      items: letterItems,
    },
    {
      id: "cosas-de-la-clase",
      page: 12,
      section: "En el aula",
      titleEs: "Las cosas de la clase",
      titleEl: "Τα πράγματα της τάξης",
      items: [
        { id: "u0-silla", es: "silla", el: "καρέκλα", pos: "noun", gender: "f", example: { es: "Mi silla es nueva.", el: "Η καρέκλα μου είναι καινούρια." } },
        { id: "u0-mesa", es: "mesa", el: "τραπέζι / θρανίο", pos: "noun", gender: "f", noteEl: "Στο ελληνικό «τραπέζι» (ουδέτερο) αντιστοιχεί θηλυκό: la mesa.", example: { es: "La mesa es grande.", el: "Το τραπέζι είναι μεγάλο." } },
        { id: "u0-pizarra", es: "pizarra", el: "πίνακας (τάξης)", pos: "noun", gender: "f", example: { es: "La profesora escribe en la pizarra.", el: "Η καθηγήτρια γράφει στον πίνακα." } },
        { id: "u0-proyector", es: "proyector", el: "προτζέκτορας", pos: "noun", gender: "m", example: { es: "El proyector es nuevo.", el: "Ο προτζέκτορας είναι καινούριος." } },
        { id: "u0-ordenador", es: "ordenador", el: "υπολογιστής", pos: "noun", gender: "m", noteEl: "Στην Ισπανία «ordenador», στη Λατινική Αμερική «computadora» ή «computador».", example: { es: "Mi ordenador es pequeño.", el: "Ο υπολογιστής μου είναι μικρός." }, accept: ["computadora", "computador"] },
        { id: "u0-tableta", es: "tableta", el: "τάμπλετ", pos: "noun", gender: "f", noteEl: "Η tableta σημαίνει και «πλάκα»: tableta de chocolate.", example: { es: "Leo libros en la tableta.", el: "Διαβάζω βιβλία στο τάμπλετ." } },
        { id: "u0-libro", es: "libro", el: "βιβλίο", pos: "noun", gender: "m", noteEl: "Προσοχή: librería = βιβλιοπωλείο, biblioteca = βιβλιοθήκη.", example: { es: "Tengo un libro de español.", el: "Έχω ένα βιβλίο ισπανικών." } },
        { id: "u0-cuaderno", es: "cuaderno", el: "τετράδιο", pos: "noun", gender: "m", example: { es: "Escribo en el cuaderno.", el: "Γράφω στο τετράδιο." } },
        { id: "u0-boligrafo", es: "bolígrafo", el: "στυλό", pos: "noun", gender: "m", noteEl: "Στην καθημερινή γλώσσα λένε και «boli». Ο τόνος πέφτει στο lí.", example: { es: "Mi bolígrafo es azul.", el: "Το στυλό μου είναι μπλε." } },
        { id: "u0-estuche", es: "estuche", el: "κασετίνα", pos: "noun", gender: "m", example: { es: "Tengo bolígrafos en el estuche.", el: "Έχω στυλό στην κασετίνα." } },
        { id: "u0-mochila", es: "mochila", el: "σακίδιο / τσάντα πλάτης", pos: "noun", gender: "f", noteEl: "Το ch ακούγεται σαν «τσ»: «μοτσίλα».", example: { es: "Mi mochila es grande.", el: "Το σακίδιό μου είναι μεγάλο." } },
        { id: "u0-hoja-de-papel", es: "hoja de papel", el: "φύλλο χαρτιού", pos: "noun", gender: "f", example: { es: "Escribo mi nombre en una hoja de papel.", el: "Γράφω το όνομά μου σε ένα φύλλο χαρτιού." } },
        { id: "u0-papelera", es: "papelera", el: "καλάθι αχρήστων / κάδος", pos: "noun", gender: "f", noteEl: "Βγαίνει από το papel (χαρτί): το καλάθι για τα χαρτιά.", example: { es: "La papelera es pequeña.", el: "Το καλάθι αχρήστων είναι μικρό." } },
        { id: "u0-ventana", es: "ventana", el: "παράθυρο", pos: "noun", gender: "f", noteEl: "Εμφανίζεται στην εικόνα της σελίδας 13. Το v ακούγεται σαν b: ventana ≈ «μπεντάνα».", example: { es: "La ventana es muy grande.", el: "Το παράθυρο είναι πολύ μεγάλο." } },
      ],
    },
    {
      id: "en-clase",
      page: 13,
      section: "En el aula",
      titleEs: "Para comunicar en clase",
      titleEl: "Εκφράσεις για την τάξη",
      items: [
        { id: "u0-como-se-dice", es: "¿Cómo se dice esto en español?", el: "Πώς λέγεται αυτό στα ισπανικά;", pos: "phrase", noteEl: "Δείχνεις ένα αντικείμενο και ρωτάς πώς λέγεται.", example: { es: "¿Cómo se dice «mochila» en griego?", el: "Πώς λέγεται το «mochila» στα ελληνικά;" } },
        { id: "u0-que-significa", es: "¿Qué significa «ordenador»?", el: "Τι σημαίνει «ordenador»;", pos: "phrase", noteEl: "Ρωτάς το νόημα μιας λέξης που άκουσες ή διάβασες.", example: { es: "¿Qué significa «silla»?", el: "Τι σημαίνει «silla»;" }, accept: ["¿Qué significa ordenador?"] },
        { id: "u0-como-se-pronuncia", es: "¿Cómo se pronuncia «pizarra»?", el: "Πώς προφέρεται το «pizarra»;", pos: "phrase", example: { es: "¿Cómo se pronuncia «bolígrafo»?", el: "Πώς προφέρεται το «bolígrafo»;" }, accept: ["¿Cómo se pronuncia pizarra?"] },
        { id: "u0-como-se-escribe", es: "¿Cómo se escribe «ventana»?", el: "Πώς γράφεται το «ventana»;", pos: "phrase", example: { es: "¿Cómo se escribe «mochila»?", el: "Πώς γράφεται το «mochila»;" }, accept: ["¿Cómo se escribe ventana?"] },
        { id: "u0-con-be-o-con-uve", es: "¿Con be o con uve?", el: "Με be ή με uve;", pos: "phrase", noteEl: "Τα b και v ακούγονται ίδια, γι' αυτό ρωτάμε ποιο από τα δύο γράφεται.", example: { es: "Cuba se escribe con be.", el: "Το Cuba γράφεται με be." } },
        { id: "u0-como-dices", es: "¿Cómo dices?", el: "Πώς; / Συγγνώμη, τι είπες;", pos: "phrase", noteEl: "Το λες όταν δεν άκουσες ή δεν κατάλαβες. Ευγενικά: ¿Cómo dice?" },
        { id: "u0-puedes-repetir", es: "¿Puedes repetir, por favor?", el: "Μπορείς να το επαναλάβεις, παρακαλώ;", pos: "phrase", example: { es: "Hablas muy rápido. ¿Puedes repetir, por favor?", el: "Μιλάς πολύ γρήγορα. Μπορείς να το επαναλάβεις, παρακαλώ;" } },
        { id: "u0-hablar-mas-alto", es: "¿Puedes hablar más alto, por favor?", el: "Μπορείς να μιλήσεις πιο δυνατά, παρακαλώ;", pos: "phrase", noteEl: "Το alto σημαίνει «ψηλός», αλλά με το hablar σημαίνει «δυνατά»." },
        { id: "u0-hablar-mas-despacio", es: "¿Puedes hablar más despacio, por favor?", el: "Μπορείς να μιλήσεις πιο αργά, παρακαλώ;", pos: "phrase", noteEl: "Από το despacio βγαίνει το «despacito» του γνωστού τραγουδιού." },
        { id: "u0-lo-siento", es: "Lo siento, no hablo japonés.", el: "Λυπάμαι, δεν μιλάω ιαπωνικά.", pos: "phrase", noteEl: "Οι γλώσσες γράφονται με μικρό αρχικό γράμμα: japonés, inglés, griego.", example: { es: "Lo siento, no hablo alemán.", el: "Λυπάμαι, δεν μιλάω γερμανικά." } },
        { id: "u0-vale", es: "Vale.", el: "Εντάξει.", pos: "interjection", noteEl: "Πολύ συχνό στην Ισπανία. Στη Λατινική Αμερική λένε «bueno», «está bien» ή «dale» (Αργεντινή).", example: { es: "¿Escribimos el nombre? Vale.", el: "Να γράψουμε το όνομα; Εντάξει." } },
        { id: "u0-por-favor", es: "Por favor.", el: "Παρακαλώ. (όταν ζητάμε κάτι)", pos: "phrase", noteEl: "Το ελληνικό «παρακαλώ» ως απάντηση στο «ευχαριστώ» λέγεται «de nada».", example: { es: "Un bolígrafo, por favor.", el: "Ένα στυλό, παρακαλώ." } },
        { id: "u0-gracias", es: "Gracias.", el: "Ευχαριστώ.", pos: "interjection", example: { es: "Gracias, profesora.", el: "Ευχαριστώ, κυρία καθηγήτρια." } },
        { id: "u0-pagina-actividad", es: "Página 16, actividad 7.", el: "Σελίδα 16, άσκηση 7.", pos: "phrase", noteEl: "Έτσι λέει ο καθηγητής σε ποια σελίδα και άσκηση δουλεύετε. Το actividad σημαίνει και «δραστηριότητα»." },
      ],
    },
  ],
  grammar: [
    {
      id: "saludar-y-presentarse",
      titleEs: "Saludar, despedirse y presentarse",
      titleEl: "Χαιρετισμοί, αποχαιρετισμοί και συστάσεις",
      introEl:
        "Τα πρώτα πράγματα που θα πεις στα ισπανικά: χαιρετάς, συστήνεσαι και αποχαιρετάς. Δεν χρειάζεσαι ακόμη γραμματική, μόνο μερικές έτοιμες φράσεις.",
      rules: [
        {
          textEl: "Ο χαιρετισμός αλλάζει ανάλογα με την ώρα: «Buenos días» το πρωί, «Buenas tardes» από το μεσημέρι μέχρι να βραδιάσει, «Buenas noches» το βράδυ. Το «Hola» ταιριάζει σε κάθε ώρα.",
          examples: [
            { es: "Buenos días, profesora.", el: "Καλημέρα, κυρία καθηγήτρια." },
            { es: "Buenas tardes, Pablo.", el: "Καλησπέρα, Pablo." },
          ],
        },
        {
          textEl: "Για να ρωτήσεις πώς είναι κάποιος λες «¿Qué tal?» ή «¿Cómo estás?». Και τα δύο είναι φιλικά.",
          examples: [{ es: "Hola, Pablo. ¿Qué tal?", el: "Γεια, Pablo. Τι κάνεις;" }],
        },
        {
          textEl: "Για να συστηθείς λες «Me llamo» και το όνομά σου. Για να ρωτήσεις τον άλλον λες «¿Cómo te llamas?». Με το «¿Y tú?» γυρίζεις την ερώτηση πίσω.",
          examples: [
            { es: "Me llamo Elena. ¿Y tú?", el: "Με λένε Elena. Κι εσύ;" },
            { es: "¿Cómo te llamas? Me llamo Pablo.", el: "Πώς σε λένε; Με λένε Pablo." },
          ],
        },
        {
          textEl: "Για να αποχαιρετήσεις: «¡Adiós!» (γενικά), «¡Hasta luego!» (τα λέμε αργότερα), «¡Hasta pronto!» (τα λέμε σύντομα) και «Chau» (φιλικά και άτυπα).",
          examples: [{ es: "¡Hasta luego, Marta!", el: "Τα λέμε, Marta!" }],
        },
      ],
      tables: [
        {
          titleEl: "Χαιρετισμοί ανάλογα με τη στιγμή της ημέρας",
          headers: ["Στιγμή", "Χαιρετισμός"],
          rows: [
            ["Πρωί", "Buenos días."],
            ["Μεσημέρι και απόγευμα", "Buenas tardes."],
            ["Βράδυ", "Buenas noches."],
            ["Οποιαδήποτε ώρα", "¡Hola!"],
          ],
        },
        {
          titleEl: "Αποχαιρετισμοί (δεν εξαρτώνται από την ώρα)",
          headers: ["Αποχαιρετισμός", "Σημασία"],
          rows: [
            ["¡Adiós!", "Αντίο (γενικά)"],
            ["¡Hasta luego!", "Τα λέμε αργότερα"],
            ["¡Hasta pronto!", "Τα λέμε σύντομα"],
            ["Chau", "Γεια (φιλικά, άτυπα)"],
            ["Buenas noches.", "Καληνύχτα (μόνο το βράδυ)"],
          ],
        },
      ],
      tipsEl: [
        "Το «Buenos días» και το «Buenas tardes» είναι στον πληθυντικό, ενώ στα ελληνικά λέμε «καλημέρα» στον ενικό.",
        "Το h του «hola» είναι βουβό: ακούγεται σαν «όλα».",
        "Το tú (εσύ) έχει τόνο, ενώ το tu (δικός σου) δεν έχει.",
        "Το ερωτηματικό (¿) και το θαυμαστικό (¡) ανοίγουν ανάποδα στην αρχή της πρότασης: ¿Cómo te llamas? ¡Hola!",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Son las nueve de la mañana. Dices: ___", promptEl: "Είναι εννιά το πρωί. Λες:", options: ["Buenos días.", "Buenas tardes.", "Buenas noches."], answer: "Buenos días." },
        { type: "choice", id: "d2", promptEs: "Son las cuatro de la tarde. Dices: ___", promptEl: "Είναι τέσσερις το απόγευμα. Λες:", options: ["Buenos días.", "Buenas tardes.", "Buenas noches."], answer: "Buenas tardes." },
        { type: "choice", id: "d3", promptEs: "Te vas a dormir. Dices: ___", promptEl: "Πας για ύπνο. Λες:", options: ["Buenos días.", "Buenas tardes.", "Buenas noches."], answer: "Buenas noches.", explainEl: "Το «Buenas noches» χρησιμοποιείται και σαν «καληνύχτα»." },
        { type: "choice", id: "d4", promptEs: "Alguien te pregunta: «¿Cómo te llamas?». Respondes: ___", promptEl: "Κάποιος σε ρωτά πώς σε λένε. Απαντάς:", options: ["Me llamo Ana.", "Hasta luego.", "Buenos días, ¿y tú?"], answer: "Me llamo Ana." },
        { type: "choice", id: "d5", promptEs: "Te vas y vas a ver a tu amigo dentro de unas horas. Dices: ___", promptEl: "Φεύγεις και θα δεις τον φίλο σου σε λίγες ώρες. Λες:", options: ["¡Hasta luego!", "¡Hola!", "¿Cómo te llamas?"], answer: "¡Hasta luego!" },
        { type: "cloze", id: "d6", textEs: "Hola, ___ llamo Pablo.", hintEl: "Γεια, με λένε Pablo.", answer: "me" },
        { type: "cloze", id: "d7", textEs: "¿Cómo ___ llamas?", hintEl: "Πώς σε λένε;", answer: "te" },
        { type: "cloze", id: "d8", textEs: "Me llamo Sara. ¿Y ___?", hintEl: "Με λένε Sara. Κι εσύ;", answer: "tú", explainEl: "Το tú (εσύ) γράφεται με τόνο. Χωρίς τόνο το tu σημαίνει «δικός σου»." },
        { type: "order", id: "d9", promptEl: "Πώς σε λένε;", solution: ["¿Cómo", "te", "llamas?"], distractors: ["me", "tú"] },
        { type: "order", id: "d10", promptEl: "Γεια, με λένε Elena.", solution: ["Hola,", "me", "llamo", "Elena."], distractors: ["te", "soy"] },
        { type: "order", id: "d11", promptEl: "Τα λέμε σύντομα!", solution: ["¡Hasta", "pronto!"], distractors: ["buenas"] },
      ],
    },
    {
      id: "pedir-ayuda",
      titleEs: "Preguntar y pedir ayuda en clase",
      titleEl: "Ρωτάω και ζητάω βοήθεια στην τάξη",
      introEl:
        "Στην τάξη χρειάζεσαι λίγες χρήσιμες ερωτήσεις: για να μάθεις μια λέξη, να ζητήσεις επανάληψη ή να σου μιλήσουν πιο αργά. Έτσι δεν χρειάζεται να καταφεύγεις στα ελληνικά.",
      rules: [
        {
          textEl: "Για να μάθεις πώς λέγεται κάτι ρωτάς «¿Cómo se dice…?». Για το νόημα μιας λέξης ρωτάς «¿Qué significa…?». Για την προφορά «¿Cómo se pronuncia…?» και για την ορθογραφία «¿Cómo se escribe…?».",
          examples: [
            { es: "¿Cómo se dice «silla» en inglés?", el: "Πώς λέγεται το «silla» στα αγγλικά;" },
            { es: "¿Qué significa «mochila»?", el: "Τι σημαίνει «mochila»;" },
          ],
        },
        {
          textEl: "Το se στα «se dice», «se escribe», «se pronuncia» κάνει τη φράση απρόσωπη, σαν το ελληνικό «λέγεται, γράφεται, προφέρεται». Μπαίνει πριν από το ρήμα.",
          examples: [{ es: "¿Cómo se escribe «mesa»?", el: "Πώς γράφεται το «mesa»;" }],
        },
        {
          textEl: "Για να ζητήσεις βοήθεια χρησιμοποίησε «¿Puedes…, por favor?» και ένα ρήμα στο απαρέμφατο: repetir, hablar más despacio, hablar más alto. Αν δεν άκουσες, λες απλά «¿Cómo dices?».",
          examples: [
            { es: "¿Puedes repetir, por favor?", el: "Μπορείς να το επαναλάβεις, παρακαλώ;" },
            { es: "¿Puedes hablar más despacio, por favor?", el: "Μπορείς να μιλήσεις πιο αργά, παρακαλώ;" },
          ],
        },
        {
          textEl: "Στις ερωτήσεις με ερωτηματική λέξη (cómo, qué…) η φωνή πέφτει στο τέλος, όπως και στην απάντηση. Μόνο στις ερωτήσεις «ναι ή όχι» η φωνή ανεβαίνει.",
          examples: [
            { es: "¿Cómo se dice esto en español? Pizarra.", el: "Πώς λέγεται αυτό στα ισπανικά; Pizarra." },
            { es: "¿Hablas español?", el: "Μιλάς ισπανικά;" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Τι θέλω να μάθω και τι ρωτάω",
          headers: ["Θέλω να μάθω…", "Ρωτάω"],
          rows: [
            ["πώς λέγεται κάτι", "¿Cómo se dice esto en español?"],
            ["τι σημαίνει μια λέξη", "¿Qué significa «mochila»?"],
            ["πώς προφέρεται", "¿Cómo se pronuncia «mochila»?"],
            ["πώς γράφεται", "¿Cómo se escribe «mochila»?"],
            ["κάτι ξανά ή πιο αργά", "¿Puedes repetir, por favor? / ¿Puedes hablar más despacio, por favor?"],
          ],
        },
      ],
      tipsEl: [
        "Οι ερωτηματικές λέξεις έχουν πάντα τόνο: cómo, qué.",
        "Το «por favor» σημαίνει «παρακαλώ» όταν ζητάς κάτι. Όταν απαντάς σε ένα «ευχαριστώ», το ελληνικό «παρακαλώ» είναι «de nada».",
        "Το «vale» σημαίνει «εντάξει» και ακούγεται συνέχεια στην Ισπανία.",
        "Με το «lo siento, no hablo…» λες ευγενικά ότι δεν μιλάς μια γλώσσα. Οι γλώσσες γράφονται με μικρό: japonés, alemán.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Quieres saber cómo se llama un objeto. Preguntas: ___", promptEl: "Θέλεις να μάθεις πώς λέγεται ένα αντικείμενο. Ρωτάς:", options: ["¿Cómo se dice esto en español?", "¿Qué significa esto?", "¿Cómo te llamas?"], answer: "¿Cómo se dice esto en español?" },
        { type: "choice", id: "d2", promptEs: "No entiendes la palabra «mochila». Preguntas: ___", promptEl: "Δεν καταλαβαίνεις τη λέξη «mochila». Ρωτάς:", options: ["¿Qué significa «mochila»?", "¿Cómo se escribe «mochila»?", "¿Cómo te llamas?"], answer: "¿Qué significa «mochila»?" },
        { type: "choice", id: "d3", promptEs: "Quieres saber qué letras tiene una palabra. Preguntas: ___", promptEl: "Θέλεις να μάθεις ποια γράμματα έχει μια λέξη. Ρωτάς:", options: ["¿Cómo se escribe «ventana»?", "¿Cómo se pronuncia «ventana»?", "¿Qué significa «ventana»?"], answer: "¿Cómo se escribe «ventana»?" },
        { type: "choice", id: "d4", promptEs: "El profesor habla muy rápido. Dices: ___", promptEl: "Ο καθηγητής μιλά πολύ γρήγορα. Λες:", options: ["¿Puedes hablar más despacio, por favor?", "¿Puedes hablar más alto, por favor?", "¿Cómo te llamas?"], answer: "¿Puedes hablar más despacio, por favor?" },
        { type: "choice", id: "d5", promptEs: "No oyes bien porque el profesor habla bajo. Dices: ___", promptEl: "Δεν ακούς καλά γιατί ο καθηγητής μιλά χαμηλά. Λες:", options: ["¿Puedes hablar más alto, por favor?", "¿Puedes hablar más despacio, por favor?", "Buenos días."], answer: "¿Puedes hablar más alto, por favor?", explainEl: "Το alto σημαίνει «ψηλός», αλλά με το hablar σημαίνει «δυνατά»." },
        { type: "cloze", id: "d6", textEs: "¿Puedes ___, por favor?", hintEl: "Μπορείς να το επαναλάβεις, παρακαλώ;", answer: "repetir" },
        { type: "cloze", id: "d7", textEs: "¿Cómo se ___ esto en español?", hintEl: "Πώς λέγεται αυτό στα ισπανικά;", answer: "dice" },
        { type: "cloze", id: "d8", textEs: "¿Qué ___ «mochila»?", hintEl: "Τι σημαίνει «mochila»;", answer: "significa" },
        { type: "cloze", id: "d9", textEs: "Lo siento, no ___ japonés.", hintEl: "Λυπάμαι, δεν μιλάω ιαπωνικά.", answer: "hablo" },
        { type: "order", id: "d10", promptEl: "Πώς λέγεται το «silla» στα αγγλικά;", solution: ["¿Cómo", "se", "dice", "«silla»", "en", "inglés?"], distractors: ["significa", "español"] },
        { type: "order", id: "d11", promptEl: "Μπορείς να το επαναλάβεις, παρακαλώ;", solution: ["¿Puedes", "repetir,", "por", "favor?"], distractors: ["hablar", "dice"] },
      ],
    },
    {
      id: "abecedario-y-numeros",
      titleEs: "El abecedario y los números del 1 al 10",
      titleEl: "Το αλφάβητο και οι αριθμοί 1 έως 10",
      introEl:
        "Το ισπανικό αλφάβητο έχει 27 γράμματα: τα 26 του λατινικού συν το ñ. Κάθε γράμμα έχει όνομα, που το χρειάζεσαι για να πεις πώς γράφεται μια λέξη (deletrear).",
      rules: [
        {
          textEl: "Για να σου πουν πώς γράφεται μια λέξη, λένε τα ονόματα των γραμμάτων ένα ένα: Sara = ese, a, erre, a.",
          examples: [{ es: "¿Cómo se escribe «Sara»? Ese, a, erre, a.", el: "Πώς γράφεται το «Sara»; Ese, a, erre, a." }],
        },
        {
          textEl: "Τα b και v ακούγονται ίδια, γι' αυτό ρωτάμε «¿Con be o con uve?». Το h δεν προφέρεται ποτέ.",
          examples: [
            { es: "Cuba se escribe con be.", el: "Το Cuba γράφεται με be." },
            { es: "Venezuela se escribe con uve.", el: "Το Venezuela γράφεται με uve." },
          ],
        },
        {
          textEl: "Τα c και g αλλάζουν ήχο πριν από e και i: c = κ πριν από a, o, u (casa) αλλά θ στην Ισπανία πριν από e, i (cena). g = γκ πριν από a, o, u (gato) αλλά χ πριν από e, i (gente).",
          examples: [
            { es: "casa, cena", el: "σπίτι, δείπνο" },
            { es: "gato, gente", el: "γάτα, άνθρωποι" },
          ],
        },
        {
          textEl: "Οι αριθμοί από το 1 έως το 10 είναι: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.",
          examples: [{ es: "Página siete, actividad cinco.", el: "Σελίδα εφτά, άσκηση πέντε." }],
        },
      ],
      tables: [
        {
          titleEl: "Γράμματα που θέλουν προσοχή για έναν Έλληνα",
          headers: ["Γράμμα", "Πώς ακούγεται", "Παράδειγμα"],
          rows: [
            ["b, v", "ίδιος ήχος: «μπ» στην αρχή, ήπιο β αλλού", "Buenos Aires, Venezuela"],
            ["c (πριν a, o, u)", "κ", "Cuba"],
            ["c (πριν e, i)", "θ στην Ισπανία, σ στη Λατινική Αμερική", "cena, ciudad"],
            ["g (πριν e, i), j", "χ", "gente, Javier"],
            ["h", "δεν ακούγεται", "Honduras"],
            ["ñ", "«νι»", "España"],
            ["q (πάντα με u)", "κ", "Quito"],
            ["s", "πάντα σ, ποτέ ζ", "Sara"],
            ["z", "θ στην Ισπανία, σ στη Λατινική Αμερική", "Zaragoza"],
          ],
        },
        {
          titleEl: "Αριθμοί 1 έως 10",
          headers: ["Αριθμός", "Ισπανικά"],
          rows: [
            ["1", "uno"], ["2", "dos"], ["3", "tres"], ["4", "cuatro"], ["5", "cinco"],
            ["6", "seis"], ["7", "siete"], ["8", "ocho"], ["9", "nueve"], ["10", "diez"],
          ],
        },
      ],
      tipsEl: [
        "Το ñ δεν είναι ένα n με στολίδι: είναι ξεχωριστό γράμμα και αλλάζει τη λέξη (año = έτος, ενώ το ano σημαίνει κάτι εντελώς διαφορετικό και αμήχανο).",
        "Στη Λατινική Αμερική λένε συχνά «be larga» για το b, «ve corta» για το v και «doble ve» για το w.",
        "Τα ονόματα των γραμμάτων είναι θηλυκά: la be, la jota, la eñe.",
        "Το cero (0) δεν υπάρχει στη λίστα αυτής της σελίδας. Θα το δεις με τους μεγαλύτερους αριθμούς στη Μονάδα 1.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿Cómo se llama la letra «h»?", promptEl: "Πώς λέγεται το γράμμα h;", options: ["hache", "jota", "ache", "ge"], answer: "hache", explainEl: "Το h λέγεται «hache» και δεν προφέρεται ποτέ." },
        { type: "choice", id: "d2", promptEs: "¿Cómo se llama la letra «j»?", promptEl: "Πώς λέγεται το γράμμα j;", options: ["jota", "hache", "ge", "ye"], answer: "jota" },
        { type: "choice", id: "d3", promptEs: "¿Qué letra suena igual que la «b»?", promptEl: "Ποιο γράμμα ακούγεται ίδιο με το b;", options: ["v", "p", "d", "f"], answer: "v", explainEl: "Τα b και v ακούγονται ίδια στα ισπανικά. Γι' αυτό ρωτάμε «¿Con be o con uve?»." },
        { type: "cloze", id: "d4", textEs: "Sara se escribe: ese, a, ___, a.", hintEl: "Το Sara γράφεται: ese, a, erre, a.", answer: "erre" },
        { type: "cloze", id: "d5", textEs: "Luis se escribe: ele, u, i, ___.", hintEl: "Το Luis γράφεται: ele, u, i, ese.", answer: "ese" },
        { type: "cloze", id: "d6", textEs: "España se escribe: e, ese, pe, a, ___, a.", hintEl: "Το España έχει το ξεχωριστό γράμμα ñ.", answer: "eñe" },
        { type: "choice", id: "d7", promptEs: "siete, ocho, ___, diez", promptEl: "Συνέχισε τη σειρά: 7, 8, ;, 10", options: ["nueve", "seis", "cinco", "uno"], answer: "nueve" },
        { type: "cloze", id: "d8", textEs: "Página ___, actividad cinco.", hintEl: "Σελίδα 7, άσκηση 5.", answer: "siete" },
        { type: "choice", id: "d9", promptEs: "¿Cómo se escribe «Cuba»? ¿Con be o con uve?", promptEl: "Το «Cuba» γράφεται με be ή με uve;", options: ["Con be.", "Con uve.", "Con jota."], answer: "Con be.", explainEl: "Cuba γράφεται με b. Το Venezuela αρχίζει με v, αν και ακούγεται σαν b: πρέπει να μάθεις ποιες λέξεις γράφονται με b και ποιες με v." },
        { type: "choice", id: "d10", promptEs: "casa", promptEl: "Πώς ακούγεται το c στη λέξη casa;", options: ["σαν κ", "σαν θ", "σαν χ"], answer: "σαν κ", explainEl: "Πριν από a, o, u το c ακούγεται κ. Μόνο πριν από e, i ακούγεται θ (ή σ)." },
        { type: "choice", id: "d11", promptEs: "gente", promptEl: "Πώς ακούγεται το g στη λέξη gente;", options: ["σαν χ", "σαν γκ", "σαν κ"], answer: "σαν χ", explainEl: "Πριν από e, i το g ακούγεται χ: gente ≈ «χέντε»." },
        { type: "order", id: "d12", promptEl: "Πώς γράφεται το όνομά σου;", solution: ["¿Cómo", "se", "escribe", "tu", "nombre?"], distractors: ["dice", "te"] },
      ],
    },
  ],
};
