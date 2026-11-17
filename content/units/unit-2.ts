import type { UnitBase } from "@/types/content";

export const unit2: UnitBase = {
  id: 2,
  titleEs: "Quiero aprender español",
  titleEl: "Θέλω να μάθω ισπανικά",
  goalEl: "Μιλάω για τη σχέση μου με τα ισπανικά και την ισπανόφωνη κουλτούρα: λέω τι θέλω να κάνω, γιατί το κάνω και τι κάνω στον ελεύθερο χρόνο μου.",
  color: "#e30713",
  pages: { start: 28, end: 41, lexico: 36, gramatica: 37, masEjercicios: { start: 148, end: 154 } },
  communicativeEl: [
    "Εκφράζω προθέσεις και σχέδια (quiero + απαρέμφατο)",
    "Εξηγώ τους λόγους για όσα κάνω (por, porque, para)",
    "Μιλάω για όσα ξέρω να κάνω σε διάφορες γλώσσες",
    "Λέω τι κάνω στον ελεύθερο χρόνο μου και στο μάθημα γλώσσας",
    "Μιλάω για την ισπανική και ισπανόφωνη κουλτούρα",
  ],
  verbIds: ["hablar", "comprender", "escribir", "hacer", "querer"],
  grammar: [
    {
      id: "genero-sustantivos",
      titleEs: "El género de algunos sustantivos",
      titleEl: "Το γένος μερικών ουσιαστικών",
      introEl:
        "Στα ισπανικά κάθε ουσιαστικό είναι αρσενικό ή θηλυκό (δεν υπάρχει ουδέτερο, όπως στα ελληνικά). Η κατάληξη βοηθά στο να μαντέψεις το γένος, αλλά υπάρχουν εξαιρέσεις που πρέπει να μάθεις.",
      rules: [
        {
          textEl: "Τα περισσότερα ουσιαστικά σε -o είναι αρσενικά: el curso, el libro. Εξαιρέσεις: la mano, la moto, la foto. Τα δύο τελευταία είναι συντομογραφίες των motocicleta και fotografía.",
          examples: [
            { es: "Mi mano es pequeña.", el: "Το χέρι μου είναι μικρό." },
            { es: "La foto es muy bonita.", el: "Η φωτογραφία είναι πολύ όμορφη." },
          ],
        },
        {
          textEl: "Τα περισσότερα ουσιαστικά σε -a είναι θηλυκά: la playa, la comida. Εξαιρέσεις: el idioma, el pijama, el sofá, el clima, el sistema.",
          examples: [
            { es: "El idioma de mi país es el griego.", el: "Η γλώσσα της χώρας μου είναι τα ελληνικά." },
            { es: "El clima de Cuba es tropical.", el: "Το κλίμα της Κούβας είναι τροπικό." },
          ],
        },
        {
          textEl: "Τα ουσιαστικά σε -e μπορεί να είναι αρσενικά ή θηλυκά και δεν υπάρχει κανόνας: el cine, el mensaje, la gente, la serie. Μάθε τη λέξη μαζί με το άρθρο της.",
          examples: [
            { es: "Voy al cine con mis amigos.", el: "Πηγαίνω στο σινεμά με τους φίλους μου." },
            { es: "La gente es muy amable.", el: "Ο κόσμος είναι πολύ ευγενικός." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Η κατάληξη και το γένος",
          headers: ["Κατάληξη", "Συνήθως", "Εξαιρέσεις και παραδείγματα"],
          rows: [
            ["-o", "masculino: el curso, el libro", "la mano, la moto, la foto"],
            ["-a", "femenino: la playa, la comida", "el idioma, el pijama, el sofá, el clima, el sistema"],
            ["-e", "masculino o femenino", "el cine, el mensaje / la gente, la serie"],
          ],
        },
      ],
      tipsEl: [
        "Μάθε κάθε νέα λέξη μαζί με το άρθρο της: el idioma, la mano. Το γένος στα ελληνικά δεν σε βοηθά: το «χέρι» (ουδέτερο) είναι la mano, η «έρημος» (θηλυκό) είναι el desierto.",
        "Καλή είδηση: οι λέξεις ελληνικής προέλευσης σε -ma (el clima, el idioma, el sistema, el problema, el tema, el programa) είναι αρσενικές, όπως τα ελληνικά τους ουδέτερα σε -μα.",
        "Άλλες γνωστές εξαιρέσεις με -a: el día, el mapa (αρσενικά).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ mano", promptEl: "το χέρι", options: ["el", "la", "los", "las"], answer: "la", explainEl: "Παρά το -o, η λέξη mano είναι θηλυκή: la mano." },
        { type: "choice", id: "d2", promptEs: "___ moto de Pablo es nueva.", promptEl: "Η μηχανή του Pablo είναι καινούρια.", options: ["El", "La", "Los", "Las"], answer: "La", explainEl: "Το moto είναι συντομογραφία του la motocicleta, γι' αυτό είναι θηλυκό." },
        { type: "choice", id: "d3", promptEs: "___ clima de Cuba es tropical.", promptEl: "Το κλίμα της Κούβας είναι τροπικό.", options: ["El", "La", "Los", "Las"], answer: "El", explainEl: "Οι λέξεις ελληνικής προέλευσης σε -ma είναι αρσενικές: el clima, el idioma, el sistema." },
        { type: "choice", id: "d4", promptEs: "___ idioma de mi país es el griego.", promptEl: "Η γλώσσα της χώρας μου είναι τα ελληνικά.", options: ["El", "La", "Los", "Las"], answer: "El" },
        { type: "choice", id: "d5", promptEs: "¿Qué opción es correcta?", promptEl: "Ποια επιλογή είναι σωστή;", options: ["la playa", "el playa", "la idioma"], answer: "la playa" },
        { type: "cloze", id: "d6", textEs: "___ sofá de mi casa es grande.", hintEl: "Ο καναπές του σπιτιού μου είναι μεγάλος.", answer: "El", explainEl: "Το sofá είναι αρσενικό, παρά το -a." },
        { type: "cloze", id: "d7", textEs: "___ gente de este pueblo es muy amable.", hintEl: "Ο κόσμος σε αυτό το χωριό είναι πολύ ευγενικός.", answer: "La" },
        { type: "cloze", id: "d8", textEs: "___ foto de mi familia es bonita.", hintEl: "Η φωτογραφία της οικογένειάς μου είναι όμορφη.", answer: "La" },
        { type: "choice", id: "d9", promptEs: "¿Cuál de estas palabras es masculina?", promptEl: "Ποια από αυτές τις λέξεις είναι αρσενική;", options: ["mano", "moto", "sistema", "foto"], answer: "sistema", explainEl: "Οι λέξεις mano, moto και foto είναι οι θηλυκές εξαιρέσεις σε -o. Το sistema είναι αρσενικό." },
        { type: "order", id: "d10", promptEl: "Η φωτογραφία είναι πολύ όμορφη.", solution: ["La", "foto", "es", "muy", "bonita."], distractors: ["El", "bonito"] },
      ],
    },
    {
      id: "articulos",
      titleEs: "El artículo determinado e indeterminado",
      titleEl: "Το οριστικό και το αόριστο άρθρο",
      introEl:
        "Τα άρθρα στα ισπανικά συμφωνούν με το ουσιαστικό στο γένος και στον αριθμό, όπως και στα ελληνικά. Υπάρχουν όμως δύο διαφορές: δεν υπάρχει ουδέτερο, και το αόριστο άρθρο έχει πληθυντικό (unos, unas).",
      rules: [
        {
          textEl: "Το οριστικό άρθρο είναι el (αρσενικό ενικού), la (θηλυκό ενικού), los (αρσενικό πληθυντικού), las (θηλυκό πληθυντικού). Το χρησιμοποιούμε για κάτι συγκεκριμένο και γνωστό.",
          examples: [
            { es: "El mensaje es de mi profesora.", el: "Το μήνυμα είναι από την καθηγήτριά μου." },
            { es: "Las series españolas son muy buenas.", el: "Οι ισπανικές σειρές είναι πολύ καλές." },
          ],
        },
        {
          textEl: "Το αόριστο άρθρο είναι un, una, unos, unas και μιλά για κάτι καινούριο ή άγνωστο. Τα unos και unas σημαίνουν «κάποιοι, μερικοί». Στα ελληνικά δεν υπάρχει αόριστο άρθρο στον πληθυντικό.",
          examples: [
            { es: "Tengo un curso de teatro.", el: "Έχω ένα μάθημα θεάτρου." },
            { es: "Veo unas series en inglés.", el: "Βλέπω κάποιες σειρές στα αγγλικά." },
          ],
        },
        {
          textEl: "Στον πληθυντικό προσθέτουμε -s στις λέξεις που τελειώνουν σε φωνήεν (curso → cursos, playa → playas) και -es σε αυτές που τελειώνουν σε σύμφωνο (ciudad → ciudades).",
          examples: [
            { es: "un curso, dos cursos", el: "ένα μάθημα, δύο μαθήματα" },
            { es: "una ciudad, muchas ciudades", el: "μία πόλη, πολλές πόλεις" },
          ],
        },
        {
          textEl: "Όταν η πρόθεση a ή de συναντά το el, γίνονται al και del: ir al cine, la playa del pueblo.",
          examples: [
            { es: "Voy al teatro.", el: "Πηγαίνω στο θέατρο." },
            { es: "La playa del pueblo es muy grande.", el: "Η παραλία του χωριού είναι πολύ μεγάλη." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Το οριστικό άρθρο",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["Masculino", "el curso / el mensaje", "los cursos / los mensajes"],
            ["Femenino", "la playa / la serie", "las playas / las series"],
          ],
        },
        {
          titleEl: "Το αόριστο άρθρο",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["Masculino", "un curso / un mensaje", "unos cursos / unos mensajes"],
            ["Femenino", "una playa / una serie", "unas playas / unas series"],
          ],
        },
      ],
      tipsEl: [
        "Προσοχή στις λέξεις σε -e: το mensaje είναι αρσενικό (el mensaje) και το serie θηλυκό (la serie).",
        "Στα ελληνικά λέμε «τα ισπανικά είναι ωραία», αλλά στα ισπανικά, μετά από hablar, aprender και estudiar συνήθως δεν βάζουμε άρθρο: «Hablo español», «Aprendo inglés».",
        "Το un / una / unos / unas δεν μεταφράζεται πάντα με το «ένα». Το unos amigos είναι «κάποιοι φίλοι», όχι «ένας φίλος».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ curso de español es muy interesante.", promptEl: "Το μάθημα ισπανικών είναι πολύ ενδιαφέρον.", options: ["El", "La", "Los", "Las"], answer: "El" },
        { type: "choice", id: "d2", promptEs: "___ series españolas son muy buenas.", promptEl: "Οι ισπανικές σειρές είναι πολύ καλές.", options: ["El", "La", "Los", "Las"], answer: "Las" },
        { type: "choice", id: "d3", promptEs: "Quiero ver ___ película esta noche.", promptEl: "Θέλω να δω μια ταινία απόψε.", options: ["un", "una", "unos", "unas"], answer: "una", explainEl: "Η película είναι θηλυκή (-a), άρα una." },
        { type: "choice", id: "d4", promptEs: "Tengo ___ mensajes de mi amigo.", promptEl: "Έχω κάποια μηνύματα από τον φίλο μου.", options: ["unas", "un", "unos", "una"], answer: "unos", explainEl: "Το mensaje είναι αρσενικό και εδώ είναι πληθυντικός: unos mensajes." },
        { type: "cloze", id: "d5", textEs: "___ amigos de Ana son españoles.", hintEl: "Οι φίλοι της Ana είναι Ισπανοί.", answer: "Los" },
        { type: "cloze", id: "d6", textEs: "Mi ciudad tiene ___ museo muy bonito.", hintEl: "Η πόλη μου έχει ένα πολύ όμορφο μουσείο.", answer: "un" },
        { type: "cloze", id: "d7", textEs: "Voy ___ cine con mis amigos.", hintEl: "Πηγαίνω στο σινεμά με τους φίλους μου.", answer: "al", explainEl: "a + el = al. Δεν λέμε «a el cine»." },
        { type: "cloze", id: "d8", textEs: "una ciudad, dos ___", hintEl: "μία πόλη, δύο πόλεις", answer: "ciudades", explainEl: "Οι λέξεις που τελειώνουν σε σύμφωνο παίρνουν -es στον πληθυντικό." },
        { type: "order", id: "d9", promptEl: "Οι παραλίες της Ισπανίας είναι όμορφες.", solution: ["Las", "playas", "de", "España", "son", "bonitas."], distractors: ["Los", "es"] },
        { type: "order", id: "d10", promptEl: "Έχω ένα μήνυμα.", solution: ["Tengo", "un", "mensaje."], distractors: ["una", "unos"] },
        { type: "order", id: "d11", promptEl: "Πηγαίνω στο θέατρο με κάποιους φίλους.", solution: ["Voy", "al", "teatro", "con", "unos", "amigos."], distractors: ["el", "unas"] },
      ],
    },
    {
      id: "motivos",
      titleEs: "Hablar de motivos",
      titleEl: "Εξηγώ τους λόγους",
      introEl:
        "Για να εξηγήσεις γιατί κάνεις κάτι, τα ισπανικά έχουν διαφορετικές λέξεις ανάλογα με το αν ρωτάς, αν απαντάς, ή αν μιλάς για σκοπό. Στα ελληνικά το «γιατί» τα κάνει όλα, στα ισπανικά πρέπει να διαλέξεις.",
      rules: [
        {
          textEl: "Για να ρωτήσεις τον λόγο λες «¿Por qué…?» (δύο λέξεις, με τόνο στο qué) και ένα ρήμα σε προσωπικό τύπο.",
          examples: [{ es: "¿Por qué aprendes alemán?", el: "Γιατί μαθαίνεις γερμανικά;" }],
        },
        {
          textEl: "Για να απαντήσεις με παρόντα λόγο χρησιμοποίησε «por + ουσιαστικό» (λόγω αυτού) ή «porque + ρήμα σε προσωπικό τύπο» (επειδή). Το porque γράφεται μία λέξη, χωρίς τόνο.",
          examples: [
            { es: "Aprendo alemán por mi trabajo.", el: "Μαθαίνω γερμανικά λόγω της δουλειάς μου." },
            { es: "Aprendo alemán porque tengo amigos alemanes.", el: "Μαθαίνω γερμανικά επειδή έχω Γερμανούς φίλους." },
          ],
        },
        {
          textEl: "Για να πεις τον σκοπό ή ένα σχέδιο για το μέλλον χρησιμοποίησε «para + απαρέμφατο» (για να). Ή «porque quiero + απαρέμφατο».",
          examples: [
            { es: "Estudio español para viajar por Perú.", el: "Μαθαίνω ισπανικά για να ταξιδέψω στο Περού." },
            { es: "Estudio español porque quiero vivir en Madrid.", el: "Μαθαίνω ισπανικά επειδή θέλω να ζήσω στη Μαδρίτη." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Πώς εξηγώ έναν λόγο",
          headers: ["Tipo de motivo", "Estructura", "Ejemplo"],
          rows: [
            ["Motivo actual", "Por + sustantivo", "Por mi trabajo."],
            ["Motivo actual", "Porque + verbo conjugado", "Porque tengo amigos mexicanos."],
            ["Plan de futuro", "Para + infinitivo", "Para viajar por Perú."],
            ["Plan de futuro", "Porque quiero / quieres… + infinitivo", "Porque quiero vivir en Madrid."],
          ],
        },
      ],
      tipsEl: [
        "Μην μπερδεύεις τα τέσσερα: por qué (ερώτηση, δύο λέξεις), porque (απάντηση, μία λέξη), por (λόγω + ουσιαστικό), para (σκοπός + απαρέμφατο).",
        "Μετά το para έρχεται απαρέμφατο, όχι προσωπικός τύπος: «para viajar», όχι «para viajo». Το ελληνικό «για να ταξιδεύω» γίνεται para viajar.",
        "Μετά το porque έρχεται ρήμα σε προσωπικό τύπο: «porque trabajo», «porque quiero viajar».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ estudias español? Porque quiero viajar.", promptEl: "Γιατί μαθαίνεις ισπανικά; Επειδή θέλω να ταξιδέψω.", options: ["Por qué", "Porque", "Por que", "Porqué"], answer: "Por qué", explainEl: "Στην ερώτηση γράφουμε «por qué», δύο λέξεις και με τόνο στο qué." },
        { type: "choice", id: "d2", promptEs: "¿Por qué estudias alemán?", promptEl: "Διάλεξε τη σωστή απάντηση.", options: ["Porque quiero vivir en Berlín.", "Porque vivir en Berlín.", "Para quiero vivir en Berlín."], answer: "Porque quiero vivir en Berlín.", explainEl: "Μετά το porque χρειάζεται ρήμα σε προσωπικό τύπο: quiero." },
        { type: "choice", id: "d3", promptEs: "¿Qué frase es correcta?", promptEl: "Ποια πρόταση είναι σωστή;", options: ["Estudio español para trabajo.", "Estudio español para trabajar.", "Estudio español para trabajo con españoles."], answer: "Estudio español para trabajar.", explainEl: "Μετά το para χρησιμοποιούμε απαρέμφατο: para trabajar." },
        { type: "cloze", id: "d4", textEs: "Estudio español ___ mi trabajo.", hintEl: "Μαθαίνω ισπανικά λόγω της δουλειάς μου.", answer: "por", alternatives: ["para"], explainEl: "Για αιτία με ουσιαστικό χρησιμοποιούμε por (mi trabajo). Το para μετατοπίζει το νόημα σε σκοπό («για τη δουλειά μου»)." },
        { type: "cloze", id: "d5", textEs: "Aprendo español ___ viajar por Perú.", hintEl: "Μαθαίνω ισπανικά για να ταξιδέψω στο Περού.", answer: "para" },
        { type: "cloze", id: "d6", textEs: "Estudio español ___ mi amigo es mexicano.", hintEl: "Μαθαίνω ισπανικά επειδή ο φίλος μου είναι Μεξικανός.", answer: "porque" },
        { type: "order", id: "d7", promptEl: "Μαθαίνω ισπανικά επειδή θέλω να ταξιδέψω.", solution: ["Estudio", "español", "porque", "quiero", "viajar."], distractors: ["para", "por"] },
        { type: "order", id: "d8", promptEl: "Μαθαίνω ισπανικά για να ταξιδέψω στη Λατινική Αμερική.", solution: ["Aprendo", "español", "para", "viajar", "por", "Latinoamérica."], distractors: ["porque", "qué"] },
        { type: "order", id: "d9", promptEl: "Γιατί μαθαίνεις ισπανικά;", solution: ["¿Por", "qué", "estudias", "español?"], distractors: ["Porque", "hablas"] },
      ],
    },
    {
      id: "presente-regulares",
      titleEs: "Presente de indicativo: verbos regulares en -ar, -er e -ir",
      titleEl: "Ενεστώτας: κανονικά ρήματα σε -ar, -er και -ir",
      introEl:
        "Τα κανονικά ρήματα χωρίζονται σε τρεις ομάδες ανάλογα με το απαρέμφατο: -ar, -er, -ir. Κάθε ομάδα έχει σταθερές καταλήξεις, οπότε όταν μάθεις ένα ρήμα, ξέρεις όλα τα υπόλοιπα της ίδιας ομάδας.",
      rules: [
        {
          textEl: "Αφαιρείς την κατάληξη του απαρεμφάτου και κρατάς τη ρίζα: habl-, comprend-, escrib-. Μετά προσθέτεις τις καταλήξεις του προσώπου.",
          examples: [
            { es: "Hablo inglés y griego.", el: "Μιλάω αγγλικά και ελληνικά." },
            { es: "Escribimos un texto en clase.", el: "Γράφουμε ένα κείμενο στην τάξη." },
          ],
        },
        {
          textEl: "Το πρώτο πρόσωπο ενικού (yo) τελειώνει πάντα σε -o: hablo, comprendo, escribo.",
        },
        {
          textEl: "Οι ομάδες -er και -ir έχουν τις ίδιες καταλήξεις, εκτός από δύο πρόσωπα: nosotros (-emos / -imos) και vosotros (-éis / -ís).",
          examples: [
            { es: "Comemos juntos. Vivimos juntos.", el: "Τρώμε μαζί. Ζούμε μαζί." },
            { es: "¿Comprendéis? ¿Escribís?", el: "Καταλαβαίνετε; Γράφετε;" },
          ],
        },
        {
          textEl: "Η αντωνυμία υποκειμένου συνήθως παραλείπεται, γιατί η κατάληξη δείχνει το πρόσωπο. Τη βάζουμε μόνο για έμφαση ή αντίθεση.",
          examples: [
            { es: "Hablo español.", el: "Μιλάω ισπανικά." },
            { es: "Yo hablo español, ¿y tú?", el: "Εγώ μιλάω ισπανικά, κι εσύ;" },
          ],
        },
        {
          textEl: "Στη Λατινική Αμερική (π.χ. Αργεντινή) το vos αντικαθιστά το tú και έχει δικούς του τύπους: hablás, comprendés, escribís.",
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας: hablar, comprender, escribir",
          headers: ["", "hablar", "comprender", "escribir"],
          rows: [
            ["yo", "hablo", "comprendo", "escribo"],
            ["tú, vos", "hablas, hablás", "comprendes, comprendés", "escribes, escribís"],
            ["él / ella / usted", "habla", "comprende", "escribe"],
            ["nosotros / nosotras", "hablamos", "comprendemos", "escribimos"],
            ["vosotros / vosotras", "habláis", "comprendéis", "escribís"],
            ["ellos / ellas / ustedes", "hablan", "comprenden", "escriben"],
          ],
        },
      ],
      tipsEl: [
        "Προσοχή στους τόνους του vosotros: habláis, comprendéis, escribís. Οι τύποι hablamos, comprendemos, escribimos δεν έχουν τόνο.",
        "Η ιδέα σού είναι γνώριμη: και στα ελληνικά κάθε πρόσωπο έχει δική του κατάληξη (-ω, -εις, -ει, -ουμε, -ετε, -ουν).",
        "Μην ξεχνάς ότι το ρήμα δείχνει το πρόσωπο: «Hablo» είναι ήδη «εγώ μιλάω». Η αντωνυμία yo δεν χρειάζεται.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ (hablar) inglés y español.", hintEl: "Εγώ μιλάω αγγλικά και ισπανικά.", answer: "hablo" },
        { type: "cloze", id: "d2", textEs: "Tú ___ (comprender) muy bien.", hintEl: "Εσύ καταλαβαίνεις πολύ καλά.", answer: "comprendes" },
        { type: "cloze", id: "d3", textEs: "Ana ___ (escribir) un mensaje.", hintEl: "Η Ana γράφει ένα μήνυμα.", answer: "escribe" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ (hablar) con nativos.", hintEl: "Εμείς μιλάμε με φυσικούς ομιλητές.", answer: "hablamos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ (comprender) la lección.", hintEl: "Εσείς καταλαβαίνετε το μάθημα.", answer: "comprendéis", explainEl: "Το vosotros στα ρήματα -er τελειώνει σε -éis, με τόνο." },
        { type: "cloze", id: "d6", textEs: "Ellos ___ (escribir) un diario.", hintEl: "Εκείνοι γράφουν ημερολόγιο.", answer: "escriben" },
        { type: "cloze", id: "d7", textEs: "Vosotros ___ (escribir) textos en clase.", hintEl: "Εσείς γράφετε κείμενα στην τάξη.", answer: "escribís", explainEl: "Στα ρήματα -ir το vosotros τελειώνει σε -ís, με τόνο." },
        { type: "cloze", id: "d8", textEs: "Yo ___ (aprender) alemán.", hintEl: "Εγώ μαθαίνω γερμανικά.", answer: "aprendo" },
        { type: "cloze", id: "d9", textEs: "Mis padres ___ (vivir) en Sevilla.", hintEl: "Οι γονείς μου ζουν στη Σεβίλλη.", answer: "viven" },
        { type: "choice", id: "d10", promptEs: "Nosotros ___ en un banco.", promptEl: "Εμείς δουλεύουμε σε μια τράπεζα.", options: ["trabajamos", "trabajáis", "trabajan", "trabajo"], answer: "trabajamos" },
        { type: "choice", id: "d11", promptEs: "Vosotros ___ español.", promptEl: "Εσείς μιλάτε ισπανικά.", options: ["habláis", "hablamos", "hablan", "hablas"], answer: "habláis" },
        { type: "order", id: "d12", promptEl: "Εκείνη γράφει ένα κείμενο.", solution: ["Ella", "escribe", "un", "texto."], distractors: ["escribo", "escriben"] },
      ],
    },
    {
      id: "hacer",
      titleEs: "Presente de indicativo: el verbo hacer",
      titleEl: "Ενεστώτας: το ρήμα hacer",
      introEl:
        "Το hacer σημαίνει «κάνω» και «φτιάχνω». Είναι σχεδόν κανονικό, με μία μόνο εξαίρεση: το πρώτο πρόσωπο ενικού, hago.",
      rules: [
        {
          textEl: "Το yo έχει g: hago. Όλα τα άλλα πρόσωπα είναι κανονικά, όπως στα ρήματα -er: haces, hace, hacemos, hacéis, hacen.",
          examples: [{ es: "Hago ejercicios de gramática.", el: "Κάνω ασκήσεις γραμματικής." }],
        },
        {
          textEl: "Χρησιμοποιείται με πολλές δραστηριότητες: hacer fotos, hacer ejercicios, hacer un curso, hacer un intercambio.",
          examples: [
            { es: "Mi hermana hace fotos muy bonitas.", el: "Η αδερφή μου βγάζει πολύ όμορφες φωτογραφίες." },
            { es: "Hacemos un curso de teatro.", el: "Κάνουμε μάθημα θεάτρου." },
          ],
        },
        {
          textEl: "Προσοχή: το «¿Qué haces?» ρωτά τι κάνεις ως δραστηριότητα. Για το «τι κάνεις;» με την έννοια «πώς είσαι;» λες «¿Qué tal?».",
          examples: [
            { es: "¿Qué haces los sábados?", el: "Τι κάνεις τα Σάββατα;" },
            { es: "Hola, ¿qué tal?", el: "Γεια, τι κάνεις; (πώς είσαι)" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του hacer",
          headers: ["", "hacer"],
          rows: [
            ["yo", "hago"],
            ["tú, vos", "haces, hacés"],
            ["él / ella / usted", "hace"],
            ["nosotros / nosotras", "hacemos"],
            ["vosotros / vosotras", "hacéis"],
            ["ellos / ellas / ustedes", "hacen"],
          ],
        },
      ],
      tipsEl: [
        "Το h του hacer δεν προφέρεται: hago ≈ «άγο».",
        "Το hacer χρησιμοποιείται και για τον καιρό: «hace calor», «hace frío» (όπως το ελληνικό «κάνει ζέστη, κάνει κρύο»). Θα το δεις στη Μονάδα 3.",
        "Το hago είναι ανώμαλο μόνο στο yo. Το hacemos και το hacéis είναι ίδια με τα -er ρήματα, αλλά με τόνο στο hacéis.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ ejercicios de gramática.", hintEl: "Εγώ κάνω ασκήσεις γραμματικής.", answer: "hago", explainEl: "Στο yo προστίθεται g: hago." },
        { type: "cloze", id: "d2", textEs: "Tú ___ un curso de teatro.", hintEl: "Εσύ κάνεις μάθημα θεάτρου.", answer: "haces" },
        { type: "cloze", id: "d3", textEs: "Mi hermana ___ fotos muy bonitas.", hintEl: "Η αδερφή μου βγάζει πολύ όμορφες φωτογραφίες.", answer: "hace" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ un intercambio con una nativa.", hintEl: "Εμείς κάνουμε ανταλλαγή γλωσσών με μια φυσική ομιλήτρια.", answer: "hacemos" },
        { type: "cloze", id: "d5", textEs: "¿Qué ___ vosotros este fin de semana?", hintEl: "Τι κάνετε εσείς αυτό το Σαββατοκύριακο;", answer: "hacéis", explainEl: "Το vosotros έχει τόνο: hacéis." },
        { type: "cloze", id: "d6", textEs: "Mis amigos ___ fotos de la ciudad.", hintEl: "Οι φίλοι μου βγάζουν φωτογραφίες της πόλης.", answer: "hacen" },
        { type: "choice", id: "d7", promptEs: "¿Qué ___ tú los sábados?", promptEl: "Τι κάνεις εσύ τα Σάββατα;", options: ["haces", "hago", "hace", "hacemos"], answer: "haces" },
        { type: "choice", id: "d8", promptEs: "Quieres saber cómo está tu amigo. Preguntas: ___", promptEl: "Θέλεις να μάθεις πώς είναι ο φίλος σου. Ρωτάς:", options: ["¿Qué tal?", "¿Qué haces?", "¿Cómo te llamas?"], answer: "¿Qué tal?", explainEl: "Το «¿Qué haces?» ρωτά τι δραστηριότητα κάνεις, όχι πώς είσαι." },
        { type: "order", id: "d9", promptEl: "Κάνω ασκήσεις γραμματικής.", solution: ["Hago", "ejercicios", "de", "gramática."], distractors: ["hace", "hacemos"] },
        { type: "order", id: "d10", promptEl: "Εμείς κάνουμε μάθημα θεάτρου.", solution: ["Nosotros", "hacemos", "un", "curso", "de", "teatro."], distractors: ["hago", "unos"] },
      ],
    },
    {
      id: "querer-infinitivo",
      titleEs: "Expresar intenciones y planes: querer + infinitivo",
      titleEl: "Εκφράζω προθέσεις και σχέδια: querer + απαρέμφατο",
      introEl:
        "Για να πεις τι θέλεις να κάνεις, χρησιμοποιείς το ρήμα querer και ένα δεύτερο ρήμα στο απαρέμφατο. Το «θέλω να μάθω» γίνεται απλά «quiero aprender».",
      rules: [
        {
          textEl: "Το querer + απαρέμφατο εκφράζει πρόθεση ή σχέδιο. Το δεύτερο ρήμα μένει πάντα στο απαρέμφατο: δεν υπάρχει «να», ούτε προσωπικός τύπος.",
          examples: [
            { es: "Quiero aprender español.", el: "Θέλω να μάθω ισπανικά." },
            { es: "Queremos viajar a México.", el: "Θέλουμε να ταξιδέψουμε στο Μεξικό." },
          ],
        },
        {
          textEl: "Το querer αλλάζει e → ie στα yo, tú, él και ellos: quiero, quieres, quiere, quieren. Στα nosotros και vosotros μένει e: queremos, queréis.",
          examples: [{ es: "¿Queréis ir al teatro?", el: "Θέλετε να πάτε στο θέατρο;" }],
        },
        {
          textEl: "Μπορείς να βάλεις περισσότερα από ένα απαρέμφατα με το y.",
          examples: [{ es: "Quiero ver una película y cenar.", el: "Θέλω να δω μια ταινία και να φάω βραδινό." }],
        },
        {
          textEl: "Το querer μπορεί να ακολουθείται και από ουσιαστικό: «Quiero un café».",
          examples: [{ es: "Quiero un libro de español.", el: "Θέλω ένα βιβλίο ισπανικών." }],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του querer + απαρέμφατο",
          headers: ["", "querer", "+ infinitivo"],
          rows: [
            ["yo", "quiero", "viajar"],
            ["tú, vos", "quieres, querés", "aprender idiomas"],
            ["él / ella / usted", "quiere", "vivir en España"],
            ["nosotros / nosotras", "queremos", "hacer fotos"],
            ["vosotros / vosotras", "queréis", "ir al cine"],
            ["ellos / ellas / ustedes", "quieren", "leer libros"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λες «θέλω να + υποτακτική» (θέλω να μάθω). Στα ισπανικά, αν το υποκείμενο είναι το ίδιο, χρησιμοποιείς απλό απαρέμφατο: «Quiero aprender», ποτέ «Quiero que aprendo».",
        "Το «quiero» έχει και δεύτερο νόημα: «te quiero» = σ' αγαπώ. Εδώ όμως σημαίνει «θέλω».",
        "Το queréis (vosotros) δεν έχει ie: κρατά το e γιατί ο τόνος δεν πέφτει στη ρίζα.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ aprender español.", hintEl: "Εγώ θέλω να μάθω ισπανικά.", answer: "quiero" },
        { type: "cloze", id: "d2", textEs: "Tú ___ viajar a México.", hintEl: "Εσύ θέλεις να ταξιδέψεις στο Μεξικό.", answer: "quieres" },
        { type: "cloze", id: "d3", textEs: "Ella ___ vivir en España.", hintEl: "Εκείνη θέλει να ζήσει στην Ισπανία.", answer: "quiere" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ hacer un curso de teatro.", hintEl: "Εμείς θέλουμε να κάνουμε μάθημα θεάτρου.", answer: "queremos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ ir al cine.", hintEl: "Εσείς θέλετε να πάτε στο σινεμά.", answer: "queréis", explainEl: "Στο vosotros δεν υπάρχει ie: queréis, με τόνο." },
        { type: "cloze", id: "d6", textEs: "Mis amigos ___ aprender francés.", hintEl: "Οι φίλοι μου θέλουν να μάθουν γαλλικά.", answer: "quieren" },
        { type: "choice", id: "d7", promptEs: "Quiero ___ español.", promptEl: "Θέλω να μάθω ισπανικά.", options: ["aprendo", "aprender", "aprendes", "que aprender"], answer: "aprender", explainEl: "Μετά το querer το δεύτερο ρήμα μένει στο απαρέμφατο." },
        { type: "choice", id: "d8", promptEs: "¿Qué ___ hacer vosotros esta noche?", promptEl: "Τι θέλετε να κάνετε εσείς απόψε;", options: ["queréis", "quieres", "queremos", "quieren"], answer: "queréis" },
        { type: "choice", id: "d9", promptEs: "Marta ___ aprender a tocar la guitarra.", promptEl: "Η Marta θέλει να μάθει να παίζει κιθάρα.", options: ["queremos", "quiere", "quieres", "querer"], answer: "quiere" },
        { type: "order", id: "d10", promptEl: "Θέλω να δω μια ταινία και να φάω βραδινό.", solution: ["Quiero", "ver", "una", "película", "y", "cenar."], distractors: ["veo", "quieres"] },
        { type: "order", id: "d11", promptEl: "Τι θέλεις να κάνεις απόψε;", solution: ["¿Qué", "quieres", "hacer", "esta", "noche?"], distractors: ["quiero", "haces"] },
        { type: "order", id: "d12", promptEl: "Δεν θέλουμε να ταξιδέψουμε σήμερα.", solution: ["No", "queremos", "viajar", "hoy."], distractors: ["quieren", "viajamos"] },
      ],
    },
  ],
};
