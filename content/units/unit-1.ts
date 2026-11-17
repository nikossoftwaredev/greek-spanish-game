import type { UnitBase } from "@/types/content";

export const unit1: UnitBase = {
  id: 1,
  titleEs: "Nosotros y nosotras",
  titleEl: "Εμείς",
  goalEl: "Γνωρίζω τους άλλους στην τάξη: λέω το όνομά μου, από πού είμαι, την ηλικία και το επάγγελμά μου.",
  color: "#f39000",
  pages: { start: 14, end: 27, lexico: 22, gramatica: 23, masEjercicios: { start: 141, end: 147 } },
  communicativeEl: [
    "Δίνω και ζητώ προσωπικά στοιχεία (όνομα, ηλικία, τηλέφωνο, email)",
    "Χαιρετώ και αποχαιρετώ",
    "Λέω τι δουλειά κάνω και πού δουλεύω",
    "Λέω τους αριθμούς και τις εθνικότητες",
  ],
  verbIds: ["ser", "tener", "llamarse"],
  grammar: [
    {
      id: "genero",
      titleEs: "El género en nacionalidades y profesiones",
      titleEl: "Το γένος σε εθνικότητες και επαγγέλματα",
      introEl:
        "Τα επίθετα εθνικότητας και πολλά επαγγέλματα αλλάζουν κατάληξη ανάλογα με το αν μιλάμε για άντρα ή για γυναίκα. Ο κανόνας είναι απλός, αρκεί να δεις με τι τελειώνει η λέξη.",
      rules: [
        {
          textEl: "Αν το αρσενικό τελειώνει σε -o, το θηλυκό τελειώνει σε -a.",
          examples: [
            { es: "Marco es italiano.", el: "Ο Marco είναι Ιταλός." },
            { es: "Marta es italiana.", el: "Η Marta είναι Ιταλίδα." },
          ],
        },
        {
          textEl: "Αν το αρσενικό τελειώνει σε σύμφωνο, προσθέτουμε -a στο θηλυκό. Στα -án, -és, -ín χάνεται ο τόνος.",
          examples: [
            { es: "Hans es alemán. Anna es alemana.", el: "Ο Hans είναι Γερμανός. Η Anna είναι Γερμανίδα." },
            { es: "Él es inglés. Ella es inglesa.", el: "Αυτός είναι Άγγλος. Αυτή είναι Αγγλίδα." },
          ],
        },
        {
          textEl: "Λέξεις σε -a, -e, -í και πολλές σε -ista ή -ense έχουν την ίδια μορφή για άντρα και γυναίκα. Αλλάζει μόνο το άρθρο.",
          examples: [
            { es: "El periodista es belga. La periodista es belga.", el: "Ο δημοσιογράφος είναι Βέλγος. Η δημοσιογράφος είναι Βελγίδα." },
          ],
        },
        {
          textEl: "Μερικά επαγγέλματα έχουν την ίδια μορφή και στα δύο γένη: comercial, chófer, policía, agente, modelo.",
          examples: [{ es: "Ella es policía.", el: "Εκείνη είναι αστυνομικός." }],
        },
      ],
      tables: [
        {
          titleEl: "Οι τρεις κατηγορίες",
          headers: ["Masculino", "Femenino", "Masculino y femenino"],
          rows: [
            ["italiano", "italiana", "belga"],
            ["brasileño", "brasileña", "marroquí"],
            ["argentino", "argentina", "estadounidense"],
            ["alemán", "alemana", "canadiense"],
            ["inglés", "inglesa", "periodista"],
            ["francés", "francesa", "estudiante"],
            ["español", "española", "comercial"],
          ],
        },
      ],
      tipsEl: [
        "Οι εθνικότητες στα ισπανικά γράφονται με μικρό αρχικό γράμμα: español, griego (όχι Español).",
        "Έλληνας / Ελληνίδα: griego / griega.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Carlos es italiano. Carla es ___.", hintEl: "Η Carla είναι Ιταλίδα.", answer: "italiana" },
        { type: "cloze", id: "d2", textEs: "Hans es alemán. Anna es ___.", hintEl: "Η Anna είναι Γερμανίδα.", answer: "alemana", explainEl: "Στο θηλυκό προσθέτουμε -a και χάνεται ο τόνος: alemán, alemana." },
        { type: "cloze", id: "d3", textEs: "Pierre es francés. Marie es ___.", hintEl: "Η Marie είναι Γαλλίδα.", answer: "francesa" },
        { type: "choice", id: "d4", promptEs: "Laura es ___.", promptEl: "Η Laura είναι σερβιτόρα.", options: ["camarero", "camarera", "camareras"], answer: "camarera" },
        { type: "choice", id: "d5", promptEs: "Mi amigo es ___.", promptEl: "Ο φίλος μου είναι Μαροκινός.", options: ["marroquío", "marroquí", "marroquía"], answer: "marroquí", explainEl: "Οι λέξεις σε -í έχουν την ίδια μορφή για άντρα και γυναίκα." },
        { type: "choice", id: "d6", promptEs: "Ella es ___ de moda.", promptEl: "Εκείνη είναι σχεδιάστρια μόδας.", options: ["diseñador", "diseñadora", "diseñadoras"], answer: "diseñadora" },
        { type: "order", id: "d7", promptEl: "Η Ana είναι Πορτογαλίδα.", solution: ["Ana", "es", "portuguesa."], distractors: ["portugués", "son"] },
        { type: "order", id: "d8", promptEl: "Ο Pedro είναι Ισπανός.", solution: ["Pedro", "es", "español."], distractors: ["española", "soy"] },
      ],
    },
    {
      id: "pronombres",
      titleEs: "Pronombres personales de sujeto",
      titleEl: "Προσωπικές αντωνυμίες υποκειμένου",
      introEl:
        "Στα ισπανικά το ρήμα δείχνει ήδη το πρόσωπο, γι' αυτό η αντωνυμία συχνά παραλείπεται. Τη βάζουμε για έμφαση ή για αντίθεση.",
      rules: [
        {
          textEl: "Ενικός: yo (εγώ), tú (εσύ), usted (εσείς, ευγενικά), él (αυτός), ella (αυτή). Πληθυντικός: nosotros/nosotras (εμείς), vosotros/vosotras (εσείς), ustedes (εσείς, ευγενικά), ellos/ellas (αυτοί/αυτές).",
        },
        {
          textEl: "Το usted και το ustedes είναι ευγενικοί τύποι. Παίρνουν το ρήμα στο τρίτο πρόσωπο: usted es, ustedes son.",
          examples: [{ es: "¿De dónde es usted, señor Gómez?", el: "Από πού είστε, κύριε Gómez;" }],
        },
        {
          textEl: "Στη Λατινική Αμερική δεν χρησιμοποιούν vosotros. Για κάθε πληθυντικό «εσείς» λένε ustedes. Σε ορισμένες χώρες (π.χ. Αργεντινή) λένε vos αντί για tú.",
          examples: [{ es: "Ustedes son de México, ¿verdad?", el: "Εσείς είστε από το Μεξικό, σωστά;" }],
        },
        {
          textEl: "Η αντωνυμία υποκειμένου παραλείπεται συνήθως. Τη βάζουμε όταν θέλουμε έμφαση.",
          examples: [
            { es: "Soy griego.", el: "Είμαι Έλληνας." },
            { es: "Yo soy griego, ¿y tú?", el: "Εγώ είμαι Έλληνας, κι εσύ;" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Οι αντωνυμίες",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["1.ª persona", "yo", "nosotros / nosotras"],
            ["2.ª persona", "tú, vos", "vosotros / vosotras"],
            ["3.ª persona", "él / ella, usted", "ellos / ellas, ustedes"],
          ],
        },
      ],
      tipsEl: [
        "Προσοχή στον τόνο: tú (εσύ) έχει τόνο, tu (δικός σου) όχι. Το ίδιο και él (αυτός) απέναντι στο el (το άρθρο).",
        "Το «nosotras», «vosotras», «ellas» χρησιμοποιούνται όταν όλα τα πρόσωπα είναι γυναίκες. Αν υπάρχει έστω ένας άντρας, λέμε nosotros, vosotros, ellos.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ somos estudiantes.", promptEl: "Εμείς είμαστε φοιτητές.", options: ["Nosotros", "Vosotros", "Ellos", "Yo"], answer: "Nosotros" },
        { type: "choice", id: "d2", promptEs: "___ sois de Italia.", promptEl: "Εσείς είστε από την Ιταλία.", options: ["Vosotros", "Nosotros", "Ellos", "Tú"], answer: "Vosotros" },
        { type: "choice", id: "d3", promptEs: "Ana es mi amiga. ___ tiene 25 años.", options: ["Ella", "Ellas", "Yo", "Tú"], answer: "Ella" },
        { type: "choice", id: "d4", promptEs: "¿De dónde es ___, señora?", promptEl: "Από πού είστε, κυρία;", options: ["usted", "ustedes", "tú", "vosotros"], answer: "usted" },
        { type: "choice", id: "d5", promptEs: "Marta y Pablo son amigos. ___ son de Madrid.", options: ["Ellos", "Ellas", "Nosotros", "Vosotros"], answer: "Ellos", explainEl: "Marta (γυναίκα) και Pablo (άντρας) μαζί: χρησιμοποιούμε το αρσενικό ellos." },
        { type: "choice", id: "d6", promptEs: "Ana y Laura son profesoras. ___ trabajan en la universidad.", options: ["Ellas", "Ellos", "Vosotras", "Nosotras"], answer: "Ellas" },
        { type: "cloze", id: "d7", textEs: "Yo soy griego, ¿y ___?", hintEl: "Εγώ είμαι Έλληνας, κι εσύ;", answer: "tú", alternatives: ["vos", "usted"], explainEl: "Το tú (εσύ) γράφεται με τόνο." },
      ],
    },
    {
      id: "ser-tener-llamarse",
      titleEs: "Los verbos ser, tener y llamarse",
      titleEl: "Τα ρήματα ser, tener και llamarse",
      introEl:
        "Τρία βασικά ρήματα για να συστηθείς: ser (είμαι), tener (έχω) και llamarse (ονομάζομαι). Είναι ανώμαλα ή ιδιαίτερα, οπότε τα μαθαίνεις απέξω.",
      rules: [
        {
          textEl: "Το ser λέει ποιος είσαι: όνομα, καταγωγή, εθνικότητα, επάγγελμα.",
          examples: [
            { es: "Soy Daniel.", el: "Είμαι ο Daniel." },
            { es: "Soy de Atenas.", el: "Είμαι από την Αθήνα." },
            { es: "Soy estudiante.", el: "Είμαι φοιτητής." },
          ],
        },
        {
          textEl: "Την ηλικία τη λέμε με το tener, όχι με το ser: «έχω 23 χρόνια».",
          examples: [{ es: "Tengo 23 años.", el: "Είμαι 23 χρονών." }],
        },
        {
          textEl: "Το llamarse είναι αυτοπαθές: πριν από το ρήμα μπαίνει η αντωνυμία me, te, se, nos, os, se.",
          examples: [
            { es: "Me llamo Daniel.", el: "Με λένε Daniel." },
            { es: "¿Cómo te llamas?", el: "Πώς σε λένε;" },
          ],
        },
        {
          textEl: "Στην άρνηση το no μπαίνει μπροστά από το ρήμα.",
          examples: [
            { es: "No soy español.", el: "Δεν είμαι Ισπανός." },
            { es: "No tengo móvil.", el: "Δεν έχω κινητό." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας",
          headers: ["", "ser", "tener", "llamarse"],
          rows: [
            ["yo", "soy", "tengo", "me llamo"],
            ["tú", "eres", "tienes", "te llamas"],
            ["él / ella / usted", "es", "tiene", "se llama"],
            ["nosotros / nosotras", "somos", "tenemos", "nos llamamos"],
            ["vosotros / vosotras", "sois", "tenéis", "os llamáis"],
            ["ellos / ellas / ustedes", "son", "tienen", "se llaman"],
          ],
        },
      ],
      tipsEl: [
        "Το tener αλλάζει ρίζα e → ie στα tienes, tiene, tienen, και έχει ανώμαλο yo: tengo. Τα tenemos και tenéis είναι κανονικά.",
        "Μην πεις «Soy 23 años». Στα ισπανικά η ηλικία είναι πάντα με tener.",
        "Στην Αργεντινή και αλλού: vos sos, vos tenés (αντί tú eres, tú tienes).",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ de Atenas.", hintEl: "Εγώ είμαι από την Αθήνα.", answer: "soy" },
        { type: "cloze", id: "d2", textEs: "Tú ___ estudiante.", hintEl: "Εσύ είσαι φοιτητής.", answer: "eres" },
        { type: "cloze", id: "d3", textEs: "Ella ___ profesora.", hintEl: "Εκείνη είναι καθηγήτρια.", answer: "es" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ griegos.", hintEl: "Εμείς είμαστε Έλληνες.", answer: "somos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ de Italia.", hintEl: "Εσείς είστε από την Ιταλία.", answer: "sois" },
        { type: "cloze", id: "d6", textEs: "Ellos ___ camareros.", hintEl: "Εκείνοι είναι σερβιτόροι.", answer: "son" },
        { type: "cloze", id: "d7", textEs: "Yo ___ 23 años.", hintEl: "Είμαι 23 χρονών.", answer: "tengo" },
        { type: "cloze", id: "d8", textEs: "Tú ___ un móvil nuevo.", hintEl: "Έχεις καινούριο κινητό.", answer: "tienes" },
        { type: "cloze", id: "d9", textEs: "Nosotros ___ clase de español.", hintEl: "Έχουμε μάθημα ισπανικών.", answer: "tenemos" },
        { type: "cloze", id: "d10", textEs: "Me ___ Daniel.", hintEl: "Με λένε Daniel.", answer: "llamo" },
        { type: "cloze", id: "d11", textEs: "¿Cómo te ___?", hintEl: "Πώς σε λένε;", answer: "llamas" },
        { type: "choice", id: "d12", promptEs: "¿Cuántos años ___ (tú)?", promptEl: "Πόσων χρονών είσαι;", options: ["eres", "tienes", "tengo", "tiene"], answer: "tienes" },
        { type: "choice", id: "d13", promptEs: "Mi hermana ___ cocinera.", promptEl: "Η αδερφή μου είναι μαγείρισσα.", options: ["es", "tiene", "se llama", "son"], answer: "es" },
        { type: "order", id: "d14", promptEl: "Με λένε Daniel.", solution: ["Me", "llamo", "Daniel."], distractors: ["soy"] },
        { type: "order", id: "d15", promptEl: "Είμαι 25 χρονών.", solution: ["Tengo", "25", "años."], distractors: ["soy"] },
        { type: "order", id: "d16", promptEl: "Εμείς δεν είμαστε Ισπανοί.", solution: ["Nosotros", "no", "somos", "españoles."], distractors: ["tenemos", "soy"] },
      ],
    },
    {
      id: "datos-personales",
      titleEs: "Hablar de datos personales",
      titleEl: "Μιλώντας για προσωπικά στοιχεία",
      introEl:
        "Οι ερωτήσεις και απαντήσεις που χρειάζεσαι για να γνωρίσεις κάποιον: όνομα, καταγωγή, ηλικία, επάγγελμα, στοιχεία επικοινωνίας.",
      rules: [
        {
          textEl: "Όνομα: ρωτάμε «¿Cómo te llamas?» και απαντάμε «Me llamo…». Ευγενικά: «¿Cómo se llama usted?».",
          examples: [{ es: "¿Cómo te llamas? Me llamo Daniel.", el: "Πώς σε λένε; Με λένε Daniel." }],
        },
        {
          textEl: "Καταγωγή: «¿De dónde eres?». Απαντάμε με de + πόλη ή χώρα, ή με την εθνικότητα.",
          examples: [
            { es: "Soy de Atenas.", el: "Είμαι από την Αθήνα." },
            { es: "Soy griego.", el: "Είμαι Έλληνας." },
          ],
        },
        {
          textEl: "Ηλικία: «¿Cuántos años tienes?» και απάντηση «Tengo… años».",
          examples: [{ es: "Tengo 23 años.", el: "Είμαι 23 χρονών." }],
        },
        {
          textEl: "Επάγγελμα: «¿En qué trabajas?» ή «¿A qué te dedicas?». Μετά το ser το επάγγελμα δεν παίρνει άρθρο.",
          examples: [
            { es: "Soy estudiante.", el: "Είμαι φοιτητής." },
            { es: "Trabajo en un banco.", el: "Δουλεύω σε μια τράπεζα." },
            { es: "Trabajo de camarero.", el: "Δουλεύω ως σερβιτόρος." },
          ],
        },
        {
          textEl: "Επικοινωνία: «¿Tienes móvil?», «¿Tienes correo electrónico?».",
          examples: [{ es: "Sí, es el 612 345 678.", el: "Ναι, είναι το 612 345 678." }],
        },
      ],
      tables: [
        {
          titleEl: "Ερωτηματικές λέξεις",
          headers: ["Ισπανικά", "Ελληνικά", "Παράδειγμα"],
          rows: [
            ["¿Cómo?", "Πώς;", "¿Cómo te llamas?"],
            ["¿De dónde?", "Από πού;", "¿De dónde eres?"],
            ["¿Cuántos años?", "Πόσων χρονών;", "¿Cuántos años tienes?"],
            ["¿En qué?", "Σε τι;", "¿En qué trabajas?"],
            ["¿Cuál?", "Ποιο;", "¿Cuál es tu apellido?"],
          ],
        },
      ],
      tipsEl: [
        "Το ερωτηματικό και το θαυμαστικό ανοίγουν ανάποδα στην αρχή της πρότασης: ¿Cómo te llamas? ¡Hola!",
        "Μετά το ser το επάγγελμα δεν παίρνει άρθρο: «Soy profesora», όχι «Soy una profesora».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿Cómo te llamas?", options: ["Me llamo Ana.", "Soy de Ana.", "Tengo Ana."], answer: "Me llamo Ana." },
        { type: "choice", id: "d2", promptEs: "¿De dónde eres?", options: ["Soy de Grecia.", "Tengo Grecia.", "Me llamo Grecia."], answer: "Soy de Grecia." },
        { type: "choice", id: "d3", promptEs: "¿Cuántos años tienes?", options: ["Tengo 30 años.", "Soy 30 años.", "Me llamo 30."], answer: "Tengo 30 años." },
        { type: "choice", id: "d4", promptEs: "¿En qué trabajas?", options: ["Trabajo en un banco.", "Tengo en un banco.", "Me llamo en un banco."], answer: "Trabajo en un banco." },
        { type: "cloze", id: "d5", textEs: "¿___ te llamas?", hintEl: "Πώς σε λένε;", answer: "Cómo" },
        { type: "cloze", id: "d6", textEs: "¿___ años tienes?", hintEl: "Πόσων χρονών είσαι;", answer: "Cuántos" },
        { type: "cloze", id: "d7", textEs: "¿De ___ eres?", hintEl: "Από πού είσαι;", answer: "dónde" },
        { type: "order", id: "d8", promptEl: "Πώς σε λένε;", solution: ["¿Cómo", "te", "llamas?"], distractors: ["eres"] },
        { type: "order", id: "d9", promptEl: "Από πού είσαι;", solution: ["¿De", "dónde", "eres?"], distractors: ["tienes"] },
        { type: "order", id: "d10", promptEl: "Είμαι φοιτήτρια και δουλεύω σε μια εταιρεία.", solution: ["Soy", "estudiante", "y", "trabajo", "en", "una", "empresa."], distractors: ["tengo", "de"] },
      ],
    },
  ],
};
