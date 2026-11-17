import type { UnitBase } from "@/types/content";

export const unit0: UnitBase = {
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
