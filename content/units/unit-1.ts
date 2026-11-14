import type { Unit, VocabItem } from "@/types/content";

/** Numbers 0 to 100 as the book's Léxico page lists them. `el` is the digit. */
const NUMBERS: [number, string][] = [
  [0, "cero"], [1, "uno"], [2, "dos"], [3, "tres"], [4, "cuatro"], [5, "cinco"],
  [6, "seis"], [7, "siete"], [8, "ocho"], [9, "nueve"], [10, "diez"], [11, "once"],
  [12, "doce"], [13, "trece"], [14, "catorce"], [15, "quince"], [16, "dieciséis"],
  [17, "diecisiete"], [18, "dieciocho"], [19, "diecinueve"], [20, "veinte"],
  [21, "veintiuno"], [22, "veintidós"], [23, "veintitrés"], [24, "veinticuatro"],
  [25, "veinticinco"], [26, "veintiséis"], [27, "veintisiete"], [28, "veintiocho"],
  [29, "veintinueve"], [30, "treinta"], [31, "treinta y uno"], [40, "cuarenta"],
  [50, "cincuenta"], [60, "sesenta"], [70, "setenta"], [80, "ochenta"], [90, "noventa"],
  [99, "noventa y nueve"], [100, "cien"],
];

const numberItems: VocabItem[] = NUMBERS.map(([n, es]) => ({
  id: `u1-num-${n}`,
  es,
  el: String(n),
  pos: "number",
}));

export const unit1: Unit = {
  id: 1,
  titleEs: "Nosotros y nosotras",
  titleEl: "Εμείς",
  goalEl: "Γνωρίζω τους άλλους στην τάξη: λέω το όνομά μου, από πού είμαι, την ηλικία και το επάγγελμά μου.",
  color: "#f39000",
  pages: { start: 14, end: 27, lexico: 22, gramatica: 23 },
  communicativeEl: [
    "Δίνω και ζητώ προσωπικά στοιχεία (όνομα, ηλικία, τηλέφωνο, email)",
    "Χαιρετώ και αποχαιρετώ",
    "Λέω τι δουλειά κάνω και πού δουλεύω",
    "Λέω τους αριθμούς και τις εθνικότητες",
  ],
  verbIds: ["ser", "tener", "llamarse"],
  vocab: [
    {
      id: "saludar-y-despedirse",
      page: 22,
      section: "Léxico",
      titleEs: "Saludar y despedirse",
      titleEl: "Χαιρετισμοί",
      emoji: "👋",
      items: [
        { id: "u1-buenos-dias", es: "Buenos días.", el: "Καλημέρα.", pos: "phrase", emoji: "🌞", example: { es: "Buenos días, profesora.", el: "Καλημέρα, κυρία καθηγήτρια." } },
        { id: "u1-buenas-tardes", es: "Buenas tardes.", el: "Καλό απόγευμα. / Καλησπέρα.", pos: "phrase", emoji: "🌤️", noteEl: "Χρησιμοποιείται από το μεσημέρι μέχρι να βραδιάσει." },
        { id: "u1-buenas-noches", es: "Buenas noches.", el: "Καλησπέρα (βράδυ). / Καληνύχτα.", pos: "phrase", emoji: "🌙", noteEl: "Λέγεται και ως χαιρετισμός το βράδυ και ως ευχή πριν τον ύπνο." },
        { id: "u1-hola", es: "¡Hola!", el: "Γεια!", pos: "interjection", emoji: "👋", noteEl: "Το h δεν προφέρεται: «όλα»." },
        { id: "u1-hola-que-tal", es: "Hola, ¿qué tal?", el: "Γεια, τι κάνεις;", pos: "phrase", example: { es: "Hola, ¿qué tal? Bien, gracias.", el: "Γεια, τι κάνεις; Καλά, ευχαριστώ." } },
        { id: "u1-hola-como-estas", es: "Hola, ¿cómo estás?", el: "Γεια, πώς είσαι;", pos: "phrase" },
        { id: "u1-adios", es: "¡Adiós!", el: "Αντίο!", pos: "interjection", emoji: "👋" },
        { id: "u1-hasta-luego", es: "¡Hasta luego!", el: "Τα λέμε! / Τα λέμε αργότερα!", pos: "interjection", example: { es: "Tengo clase. ¡Hasta luego!", el: "Έχω μάθημα. Τα λέμε!" } },
      ],
    },
    {
      id: "numeros",
      page: 22,
      section: "Léxico",
      titleEs: "Números",
      titleEl: "Αριθμοί 0 έως 100",
      emoji: "🔢",
      items: numberItems,
    },
    {
      id: "profesiones",
      page: 22,
      section: "Léxico",
      titleEs: "Profesiones",
      titleEl: "Επαγγέλματα",
      emoji: "💼",
      items: [
        { id: "u1-cientifico", es: "científico/a", el: "επιστήμονας", pos: "noun", gender: "m", emoji: "🔬", example: { es: "Mi hermana es científica.", el: "Η αδερφή μου είναι επιστήμονας." } },
        { id: "u1-cocinero", es: "cocinero/a", el: "μάγειρας / μαγείρισσα", pos: "noun", gender: "m", emoji: "🧑‍🍳", example: { es: "Mi padre es cocinero.", el: "Ο πατέρας μου είναι μάγειρας." } },
        { id: "u1-estudiante", es: "estudiante", el: "φοιτητής / φοιτήτρια, μαθητής / μαθήτρια", pos: "noun", gender: "mf", emoji: "🎓", noteEl: "Ίδια μορφή για άντρα και γυναίκα: el estudiante, la estudiante.", example: { es: "Soy estudiante de español.", el: "Είμαι φοιτητής ισπανικών." } },
        { id: "u1-disenador", es: "diseñador/a de moda", el: "σχεδιαστής / σχεδιάστρια μόδας", pos: "noun", gender: "m", emoji: "👗", example: { es: "Mi tía es diseñadora de moda.", el: "Η θεία μου είναι σχεδιάστρια μόδας." } },
        { id: "u1-periodista", es: "periodista", el: "δημοσιογράφος", pos: "noun", gender: "mf", emoji: "📰", example: { es: "Es periodista en un periódico.", el: "Είναι δημοσιογράφος σε μια εφημερίδα." } },
        { id: "u1-profesor", es: "profesor/a", el: "καθηγητής / καθηγήτρια", pos: "noun", gender: "m", emoji: "👩‍🏫", example: { es: "La profesora es de Madrid.", el: "Η καθηγήτρια είναι από τη Μαδρίτη." } },
        { id: "u1-traductor", es: "traductor/a", el: "μεταφραστής / μεταφράστρια", pos: "noun", gender: "m", emoji: "🌐", example: { es: "Soy traductora de inglés.", el: "Είμαι μεταφράστρια αγγλικών." } },
        { id: "u1-enfermero", es: "enfermero/a", el: "νοσηλευτής / νοσηλεύτρια", pos: "noun", gender: "m", emoji: "🧑‍⚕️", example: { es: "Mi amigo es enfermero.", el: "Ο φίλος μου είναι νοσηλευτής." } },
        { id: "u1-camarero", es: "camarero/a", el: "σερβιτόρος / σερβιτόρα", pos: "noun", gender: "m", emoji: "🍽️", example: { es: "Trabajo de camarero.", el: "Δουλεύω ως σερβιτόρος." } },
        { id: "u1-secretario", es: "secretario/a", el: "γραμματέας", pos: "noun", gender: "m", emoji: "🗂️" },
        { id: "u1-deportista", es: "deportista", el: "αθλητής / αθλήτρια", pos: "noun", gender: "mf", emoji: "🏃", example: { es: "Ella es deportista.", el: "Εκείνη είναι αθλήτρια." } },
        { id: "u1-comercial", es: "comercial", el: "πωλητής / εμπορικός αντιπρόσωπος", pos: "noun", gender: "mf", emoji: "💼", noteEl: "Ίδια μορφή για άντρα και γυναίκα." },
      ],
    },
    {
      id: "lugares-de-trabajo",
      page: 22,
      section: "Léxico",
      titleEs: "Lugares de trabajo",
      titleEl: "Χώροι εργασίας",
      emoji: "🏢",
      items: [
        { id: "u1-universidad", es: "universidad", el: "πανεπιστήμιο", pos: "noun", gender: "f", emoji: "🏛️", example: { es: "Trabajo en una universidad.", el: "Δουλεύω σε ένα πανεπιστήμιο." } },
        { id: "u1-gimnasio", es: "gimnasio", el: "γυμναστήριο", pos: "noun", gender: "m", emoji: "🏋️" },
        { id: "u1-laboratorio", es: "laboratorio", el: "εργαστήριο", pos: "noun", gender: "m", emoji: "🔬" },
        { id: "u1-hospital", es: "hospital", el: "νοσοκομείο", pos: "noun", gender: "m", emoji: "🏥", example: { es: "Mi madre trabaja en un hospital.", el: "Η μητέρα μου δουλεύει σε ένα νοσοκομείο." } },
        { id: "u1-periodico", es: "periódico", el: "εφημερίδα", pos: "noun", gender: "m", emoji: "🗞️" },
        { id: "u1-bar", es: "bar", el: "μπαρ, καφενείο", pos: "noun", gender: "m", emoji: "🍻" },
        { id: "u1-restaurante", es: "restaurante", el: "εστιατόριο", pos: "noun", gender: "m", emoji: "🍽️", example: { es: "Trabajo en un restaurante.", el: "Δουλεύω σε ένα εστιατόριο." } },
        { id: "u1-taller", es: "taller", el: "συνεργείο, εργαστήριο", pos: "noun", gender: "m", emoji: "🔧" },
        { id: "u1-banco", es: "banco", el: "τράπεζα", pos: "noun", gender: "m", emoji: "🏦", noteEl: "Το banco σημαίνει και «παγκάκι».", example: { es: "Trabaja en un banco.", el: "Δουλεύει σε μια τράπεζα." } },
        { id: "u1-empresa", es: "empresa", el: "εταιρεία", pos: "noun", gender: "f", emoji: "🏢" },
        { id: "u1-despacho", es: "despacho", el: "γραφείο (δικηγορικό, αρχιτεκτονικό κ.ά.)", pos: "noun", gender: "m", emoji: "⚖️" },
        { id: "u1-agencia", es: "agencia", el: "πρακτορείο, γραφείο", pos: "noun", gender: "f", emoji: "✈️", noteEl: "Παράδειγμα: agencia de viajes (ταξιδιωτικό γραφείο)." },
        { id: "u1-tienda", es: "tienda", el: "κατάστημα, μαγαζί", pos: "noun", gender: "f", emoji: "🛍️" },
        { id: "u1-supermercado", es: "supermercado", el: "σούπερ μάρκετ", pos: "noun", gender: "m", emoji: "🛒" },
        { id: "u1-escuela", es: "escuela", el: "σχολείο", pos: "noun", gender: "f", emoji: "🏫", noteEl: "Παράδειγμα: escuela de idiomas (σχολή ξένων γλωσσών)." },
      ],
    },
    {
      id: "datos-personales",
      page: 22,
      section: "Léxico",
      titleEs: "Datos personales",
      titleEl: "Προσωπικά στοιχεία",
      emoji: "🪪",
      items: [
        { id: "u1-nombre", es: "nombre", el: "όνομα", pos: "noun", gender: "m", emoji: "🏷️", example: { es: "Mi nombre es Daniel.", el: "Το όνομά μου είναι Daniel." } },
        { id: "u1-apellido", es: "apellido", el: "επώνυμο", pos: "noun", gender: "m", noteEl: "Συνήθως οι Ισπανοί έχουν δύο επώνυμα: του πατέρα και της μητέρας.", example: { es: "Mi apellido es García.", el: "Το επώνυμό μου είναι García." } },
        { id: "u1-edad", es: "edad", el: "ηλικία", pos: "noun", gender: "f", emoji: "🎂", example: { es: "¿Cuál es tu edad? Tengo 23 años.", el: "Ποια είναι η ηλικία σου; Είμαι 23 χρονών." } },
        { id: "u1-movil", es: "móvil / celular", el: "κινητό τηλέφωνο", pos: "noun", gender: "m", emoji: "📱", noteEl: "«Móvil» στην Ισπανία, «celular» στη Λατινική Αμερική.", accept: ["móvil", "celular"] },
        { id: "u1-correo", es: "correo electrónico", el: "ηλεκτρονικό ταχυδρομείο (email)", pos: "noun", gender: "m", emoji: "📧" },
        { id: "u1-telefono", es: "número de teléfono", el: "αριθμός τηλεφώνου", pos: "noun", gender: "m", emoji: "☎️" },
      ],
    },
    {
      id: "preguntas",
      page: 22,
      section: "Léxico",
      titleEs: "Preguntas personales",
      titleEl: "Προσωπικές ερωτήσεις",
      emoji: "💬",
      items: [
        { id: "u1-como-te-llamas", es: "¿Cómo te llamas?", el: "Πώς σε λένε;", pos: "phrase", noteEl: "Ευγενικά: ¿Cómo se llama usted?" },
        { id: "u1-cual-es-tu-nombre", es: "¿Cuál es tu nombre?", el: "Ποιο είναι το όνομά σου;", pos: "phrase" },
        { id: "u1-cual-es-tu-apellido", es: "¿Cuál es tu apellido?", el: "Ποιο είναι το επώνυμό σου;", pos: "phrase" },
        { id: "u1-de-donde-eres", es: "¿De dónde eres?", el: "Από πού είσαι;", pos: "phrase", example: { es: "¿De dónde eres? Soy de Atenas.", el: "Από πού είσαι; Είμαι από την Αθήνα." } },
        { id: "u1-cuantos-anos", es: "¿Cuántos años tienes?", el: "Πόσων χρονών είσαι;", pos: "phrase", noteEl: "Κυριολεκτικά: «Πόσα χρόνια έχεις;»." },
        { id: "u1-en-que-trabajas", es: "¿En qué trabajas?", el: "Τι δουλειά κάνεις;", pos: "phrase" },
        { id: "u1-a-que-te-dedicas", es: "¿A qué te dedicas?", el: "Με τι ασχολείσαι (επαγγελματικά);", pos: "phrase" },
      ],
    },
    {
      id: "nacionalidades",
      page: 22,
      section: "Léxico",
      titleEs: "Nacionalidades",
      titleEl: "Εθνικότητες",
      emoji: "🌍",
      items: [
        { id: "u1-italiano", es: "italiano/a", el: "Ιταλός / Ιταλίδα", pos: "adjective", example: { es: "Marco es italiano.", el: "Ο Marco είναι Ιταλός." } },
        { id: "u1-brasileno", es: "brasileño/a", el: "Βραζιλιάνος / Βραζιλιάνα", pos: "adjective", },
        { id: "u1-argentino", es: "argentino/a", el: "Αργεντινός / Αργεντινή", pos: "adjective", },
        { id: "u1-aleman", es: "alemán / alemana", el: "Γερμανός / Γερμανίδα", pos: "adjective", noteEl: "Το θηλυκό χάνει τον τόνο: alemana." },
        { id: "u1-ingles", es: "inglés / inglesa", el: "Άγγλος / Αγγλίδα", pos: "adjective", },
        { id: "u1-frances", es: "francés / francesa", el: "Γάλλος / Γαλλίδα", pos: "adjective", },
        { id: "u1-portugues", es: "portugués / portuguesa", el: "Πορτογάλος / Πορτογαλίδα", pos: "adjective", },
        { id: "u1-espanol", es: "español/a", el: "Ισπανός / Ισπανίδα", pos: "adjective", noteEl: "Οι εθνικότητες γράφονται με μικρό αρχικό γράμμα." },
        { id: "u1-belga", es: "belga", el: "Βέλγος / Βελγίδα", pos: "adjective", noteEl: "Ίδια μορφή για άντρα και γυναίκα." },
        { id: "u1-marroqui", es: "marroquí", el: "Μαροκινός / Μαροκινή", pos: "adjective", noteEl: "Ίδια μορφή για άντρα και γυναίκα." },
        { id: "u1-estadounidense", es: "estadounidense", el: "Αμερικανός / Αμερικανίδα (από τις ΗΠΑ)", pos: "adjective", },
        { id: "u1-canadiense", es: "canadiense", el: "Καναδός / Καναδή", pos: "adjective", },
      ],
    },
  ],
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
