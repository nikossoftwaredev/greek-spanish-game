import type { UnitBase } from "@/types/content";

export const unit3: UnitBase = {
  id: 3,
  titleEs: "¿Dónde está Santiago?",
  titleEl: "Πού βρίσκεται το Santiago;",
  goalEl: "Μιλάω για τόπους: λέω πού βρίσκονται, τι υπάρχει εκεί, πώς είναι το κλίμα και ο καιρός, και απαντώ σε ερωτήσεις γνώσεων για τον ισπανόφωνο κόσμο.",
  color: "#833626",
  pages: { start: 42, end: 55, lexico: 50, gramatica: 51, masEjercicios: { start: 155, end: 161 } },
  communicativeEl: [
    "Περιγράφω τόπους (ser + επίθετο) και τους ορίζω (ser + ουσιαστικό)",
    "Λέω ότι κάτι υπάρχει (hay) και πού βρίσκεται (estar)",
    "Μιλάω για τον καιρό, το κλίμα και τις εποχές",
    "Λέω ποιο είναι το μεγαλύτερο, το ψηλότερο, το μακρύτερο (el más… de…)",
    "Ρωτάω και απαντώ για χώρες: πρωτεύουσα, γλώσσα, πληθυσμός, νόμισμα",
  ],
  verbIds: ["ser", "estar", "haber"],
  grammar: [
    {
      id: "describir-y-definir",
      titleEs: "Describir y definir lugares, personas o cosas",
      titleEl: "Περιγράφω και ορίζω με το ser",
      introEl:
        "Για να πεις πώς είναι κάτι («¿Cómo es?») ή τι είναι («¿Qué es?») χρησιμοποιείς το ρήμα ser. Τους τύπους του τους ξέρεις ήδη από τη Μονάδα 1: soy, eres, es, somos, sois, son.",
      rules: [
        {
          textEl: "Για να πεις πώς είναι κάτι, χρησιμοποίησε ser + επίθετο. Το επίθετο συμφωνεί στο γένος και στον αριθμό με το ουσιαστικό. Η ερώτηση είναι «¿Cómo es…?» ή «¿Cómo son…?».",
          examples: [
            { es: "Cuba es muy bonita.", el: "Η Κούβα είναι πολύ όμορφη." },
            { es: "Los cubanos son muy amables.", el: "Οι Κουβανοί είναι πολύ ευγενικοί." },
          ],
        },
        {
          textEl: "Για να πεις τι είναι κάτι (ορισμός), χρησιμοποίησε ser + ουσιαστικό. Όταν το ουσιαστικό έχει και επίθετο ή προσδιορισμό, παίρνει συνήθως άρθρο (un, una). Η ερώτηση είναι «¿Qué es…?» ή «¿Qué son…?».",
          examples: [
            { es: "Cuba es una isla del Caribe.", el: "Η Κούβα είναι ένα νησί της Καραϊβικής." },
            { es: "Los mojitos son bebidas típicas.", el: "Τα μοχίτο είναι παραδοσιακά ποτά." },
          ],
        },
        {
          textEl: "Τα επίθετα σε -o έχουν τέσσερις μορφές (bonito, bonita, bonitos, bonitas). Τα επίθετα σε -e ή σε σύμφωνο έχουν συνήθως μία μορφή για αρσενικό και θηλυκό (amable, grande, fácil) και στον πληθυντικό παίρνουν -s ή -es. Εξαιρέσεις: οι εθνικότητες (español, española) και τα επίθετα σε -or (trabajador, trabajadora).",
          examples: [
            { es: "El lago es grande. La isla es grande.", el: "Η λίμνη είναι μεγάλη. Το νησί είναι μεγάλο." },
            { es: "Los lagos son grandes.", el: "Οι λίμνες είναι μεγάλες." },
          ],
        },
        {
          textEl: "Το muy (πολύ) μπαίνει πριν από το επίθετο και δεν αλλάζει ποτέ, ούτε στον πληθυντικό.",
          examples: [{ es: "Las playas son muy bonitas.", el: "Οι παραλίες είναι πολύ όμορφες." }],
        },
      ],
      tables: [
        {
          titleEl: "ser + επίθετο ή ουσιαστικό",
          headers: ["ser + adjetivo", "ser + sustantivo"],
          rows: [
            ["Cuba es muy bonita.", "Cuba es una isla del Caribe."],
            ["Los cubanos son muy amables.", "Los mojitos son bebidas típicas."],
          ],
        },
        {
          titleEl: "Η συμφωνία του επιθέτου",
          headers: ["Masculino singular", "Femenino singular", "Masculino plural", "Femenino plural"],
          rows: [
            ["bonito", "bonita", "bonitos", "bonitas"],
            ["húmedo", "húmeda", "húmedos", "húmedas"],
            ["turístico", "turística", "turísticos", "turísticas"],
            ["amable", "amable", "amables", "amables"],
            ["grande", "grande", "grandes", "grandes"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά το «είναι» κάνει τα πάντα. Στα ισπανικά το ser περιγράφει και ορίζει, ενώ για την τοποθεσία χρησιμοποιείς το estar (δες το επόμενο μάθημα).",
        "Στα ισπανικά το επίθετο που περιγράφει μπαίνει συνήθως μετά το ουσιαστικό: un país bonito. Στα ελληνικά λέμε «μια όμορφη χώρα».",
        "Στο «¿Cómo es?» απαντάς συνήθως με επίθετο («Es tropical»), ενώ στο «¿Qué es?» με ουσιαστικό («Es un río»).",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Grecia ___ un país muy bonito.", hintEl: "Η Ελλάδα είναι μια πολύ όμορφη χώρα.", answer: "es" },
        { type: "cloze", id: "d2", textEs: "Los peruanos ___ muy amables.", hintEl: "Οι Περουβιανοί είναι πολύ ευγενικοί.", answer: "son" },
        { type: "cloze", id: "d3", textEs: "Las islas griegas son muy ___. (bonito)", hintEl: "Τα ελληνικά νησιά είναι πολύ όμορφα.", answer: "bonitas", explainEl: "Το επίθετο συμφωνεί με το islas: θηλυκό και πληθυντικός." },
        { type: "cloze", id: "d4", textEs: "La selva es muy ___. (húmedo)", hintEl: "Η ζούγκλα είναι πολύ υγρή.", answer: "húmeda" },
        { type: "choice", id: "d5", promptEs: "¿Cómo es el clima de Cuba?", promptEl: "Πώς είναι το κλίμα της Κούβας;", options: ["Es tropical.", "Está tropical.", "Hay tropical."], answer: "Es tropical.", explainEl: "Για να περιγράψουμε το κλίμα χρησιμοποιούμε ser + επίθετο." },
        { type: "choice", id: "d6", promptEs: "¿Qué es el Amazonas?", promptEl: "Τι είναι ο Αμαζόνιος;", options: ["Es un río muy largo.", "Está muy largo.", "Hay un río muy largo."], answer: "Es un río muy largo.", explainEl: "Ο ορισμός γίνεται με ser + ουσιαστικό." },
        { type: "choice", id: "d7", promptEs: "México es ___ país muy grande.", promptEl: "Το Μεξικό είναι μια πολύ μεγάλη χώρα.", options: ["un", "una", "unos"], answer: "un", explainEl: "Το país είναι αρσενικό: un país." },
        { type: "choice", id: "d8", promptEs: "La ciudad es muy ___.", promptEl: "Η πόλη είναι πολύ όμορφη.", options: ["bonito", "bonita", "bonitos", "bonitas"], answer: "bonita" },
        { type: "order", id: "d9", promptEl: "Η Χιλή είναι μια πολύ μακρόστενη χώρα.", solution: ["Chile", "es", "un", "país", "muy", "largo."], distractors: ["está", "una"] },
        { type: "order", id: "d10", promptEl: "Πώς είναι η πόλη σου;", solution: ["¿Cómo", "es", "tu", "ciudad?"], distractors: ["está", "son"] },
        { type: "order", id: "d11", promptEl: "Οι παραλίες της Κούβας είναι πολύ όμορφες.", solution: ["Las", "playas", "de", "Cuba", "son", "muy", "bonitas."], distractors: ["es", "bonito"] },
      ],
    },
    {
      id: "hay",
      titleEs: "Expresar existencia: hay",
      titleEl: "Εκφράζω ύπαρξη: hay",
      introEl:
        "Το hay λέει ότι κάτι υπάρχει κάπου. Είναι η απρόσωπη μορφή του ενεστώτα του ρήματος haber και δεν αλλάζει ποτέ: ίδιο για ενικό και πληθυντικό.",
      rules: [
        {
          textEl: "Το hay σημαίνει «υπάρχει» και «υπάρχουν», και αντιστοιχεί στο καθημερινό ελληνικό «έχει» (έχει ένα στάδιο, έχει σύννεφα). Έχει την ίδια μορφή και για ενικό και για πληθυντικό.",
          examples: [
            { es: "En mi ciudad hay un museo.", el: "Στην πόλη μου υπάρχει ένα μουσείο." },
            { es: "En Grecia hay muchas islas.", el: "Στην Ελλάδα υπάρχουν πολλά νησιά." },
          ],
        },
        {
          textEl: "Το hay δεν συνδυάζεται ποτέ με οριστικό άρθρο (el, la, los, las), γιατί μιλά για κάτι καινούριο. Μετά το hay μπαίνει αόριστο άρθρο, αριθμός, mucho/a/os/as ή τίποτα.",
          examples: [
            { es: "Hay un río en la ciudad.", el: "Υπάρχει ένα ποτάμι στην πόλη." },
            { es: "Hay petróleo en Venezuela.", el: "Υπάρχει πετρέλαιο στη Βενεζουέλα." },
          ],
        },
        {
          textEl: "Ο τόπος μπορεί να μπει πριν ή μετά το hay, χωρίς αλλαγή στο νόημα.",
          examples: [
            { es: "En Perú hay montañas muy altas.", el: "Στο Περού υπάρχουν πολύ ψηλά βουνά." },
            { es: "Hay montañas muy altas en Perú.", el: "Υπάρχουν πολύ ψηλά βουνά στο Περού." },
          ],
        },
        {
          textEl: "Στην άρνηση βάζουμε no πριν από το hay.",
          examples: [{ es: "En Islandia no hay selvas.", el: "Στην Ισλανδία δεν υπάρχουν ζούγκλες." }],
        },
      ],
      tables: [
        {
          titleEl: "Τι μπορεί να ακολουθεί το hay",
          headers: ["Tipo", "Ejemplo"],
          rows: [
            ["Singular", "Hay un lago. / Hay una playa."],
            ["Plural", "Hay dos lagos. / Hay muchas montañas."],
            ["Sin cantidad", "Hay petróleo. / Hay agua."],
            ["Negación", "No hay selvas."],
          ],
        },
      ],
      tipsEl: [
        "Λάθος: «Hay el museo en mi ciudad». Σωστό: «Hay un museo en mi ciudad» ή «El museo está en el centro». Για κάτι γνωστό χρησιμοποιείς estar.",
        "Το hay ακούγεται ίδιο με το «ay» (αχ), αλλά γράφεται με h.",
        "Για τον καιρό το hay δίνει το ελληνικό «έχει»: «Hay nubes» (έχει σύννεφα).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "En mi ciudad ___ un museo muy bonito.", promptEl: "Στην πόλη μου υπάρχει ένα πολύ όμορφο μουσείο.", options: ["hay", "es", "está", "son"], answer: "hay" },
        { type: "choice", id: "d2", promptEs: "En Grecia ___ muchas islas.", promptEl: "Στην Ελλάδα υπάρχουν πολλά νησιά.", options: ["hay", "están", "son", "es"], answer: "hay", explainEl: "Το hay δεν αλλάζει στον πληθυντικό: hay muchas islas." },
        { type: "choice", id: "d3", promptEs: "¿Qué frase es correcta?", promptEl: "Ποια πρόταση είναι σωστή;", options: ["Hay el río en la ciudad.", "Hay un río en la ciudad.", "Hay los ríos en la ciudad."], answer: "Hay un río en la ciudad.", explainEl: "Το hay δεν μπαίνει ποτέ με οριστικό άρθρο." },
        { type: "cloze", id: "d4", textEs: "En España ___ hay selvas.", hintEl: "Στην Ισπανία δεν υπάρχουν ζούγκλες.", answer: "no" },
        { type: "cloze", id: "d5", textEs: "En Suiza ___ cuatro lenguas oficiales.", hintEl: "Στην Ελβετία υπάρχουν τέσσερις επίσημες γλώσσες.", answer: "hay" },
        { type: "cloze", id: "d6", textEs: "En el norte de Chile ___ un desierto muy grande.", hintEl: "Στον βορρά της Χιλής υπάρχει μια πολύ μεγάλη έρημος.", answer: "hay" },
        { type: "cloze", id: "d7", textEs: "En Islandia hay muchos ___. (volcán)", hintEl: "Στην Ισλανδία υπάρχουν πολλά ηφαίστεια.", answer: "volcanes", explainEl: "Στον πληθυντικό το volcán χάνει τον τόνο: volcanes." },
        { type: "order", id: "d8", promptEl: "Υπάρχει μια λίμνη στην πόλη μου.", solution: ["Hay", "un", "lago", "en", "mi", "ciudad."], alternatives: [["En", "mi", "ciudad", "hay", "un", "lago."]], distractors: ["el", "es"] },
        { type: "order", id: "d9", promptEl: "Δεν υπάρχουν ζούγκλες στην Ευρώπη.", solution: ["No", "hay", "selvas", "en", "Europa."], alternatives: [["En", "Europa", "no", "hay", "selvas."]], distractors: ["son", "está"] },
        { type: "order", id: "d10", promptEl: "Ποια σημαντικά προϊόντα υπάρχουν στη χώρα σου;", solution: ["¿Qué", "productos", "importantes", "hay", "en", "tu", "país?"], distractors: ["es", "están"] },
      ],
    },
    {
      id: "estar",
      titleEs: "Expresar ubicación: estar",
      titleEl: "Εκφράζω θέση: estar",
      introEl:
        "Το estar λέει πού βρίσκεται κάτι ή κάποιος. Είναι ανώμαλο στο yo (estoy) και παίρνει τόνο σε τέσσερα πρόσωπα.",
      rules: [
        {
          textEl: "Για να πεις πού είναι κάτι, χρησιμοποίησε estar + en + τόπος. Η ερώτηση είναι «¿Dónde está…?» ή «¿Dónde están…?».",
          examples: [
            { es: "Lima está en Perú.", el: "Η Λίμα είναι στο Περού." },
            { es: "Las islas Canarias están en el océano Atlántico.", el: "Τα Κανάρια Νησιά είναι στον Ατλαντικό Ωκεανό." },
          ],
        },
        {
          textEl: "Με το estar μιλάς για κάτι γνωστό: κύριο όνομα, el / la, mi. Για κάτι καινούριο (νέα πληροφορία) χρησιμοποιείς hay.",
          examples: [
            { es: "El museo está en el centro.", el: "Το μουσείο είναι στο κέντρο." },
            { es: "En el centro hay un museo.", el: "Στο κέντρο υπάρχει ένα μουσείο." },
          ],
        },
        {
          textEl: "Το estar χρησιμοποιείται και για τον καιρό και για καταστάσεις που αλλάζουν.",
          examples: [
            { es: "Hoy está nublado.", el: "Σήμερα έχει συννεφιά." },
            { es: "¿Cómo estás?", el: "Πώς είσαι;" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του estar",
          headers: ["", "estar"],
          rows: [
            ["yo", "estoy"],
            ["tú, vos", "estás"],
            ["él / ella / usted", "está"],
            ["nosotros / nosotras", "estamos"],
            ["vosotros / vosotras", "estáis"],
            ["ellos / ellas / ustedes", "están"],
          ],
        },
        {
          titleEl: "ser, estar ή hay;",
          headers: ["Verbo", "Para…", "Ejemplo"],
          rows: [
            ["ser", "describir y definir", "Perú es un país muy bonito."],
            ["estar", "ubicar algo conocido", "Lima está en Perú."],
            ["hay", "decir que algo existe", "En Perú hay montañas muy altas."],
          ],
        },
      ],
      tipsEl: [
        "Τα ελληνικά λένε «είναι» και για τα τρία: η Λίμα είναι όμορφη (ser), η Λίμα είναι στο Περού (estar), υπάρχει μουσείο (hay). Στα ισπανικά διαλέγεις το σωστό ρήμα.",
        "Λάθος: «Madrid es en España». Σωστό: «Madrid está en España».",
        "Οι τόνοι: estás, está, estáis, están έχουν τόνο. Τα estoy και estamos δεν έχουν.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ en Madrid este fin de semana.", hintEl: "Εγώ είμαι στη Μαδρίτη αυτό το Σαββατοκύριακο.", answer: "estoy" },
        { type: "cloze", id: "d2", textEs: "Tú ___ en la playa.", hintEl: "Εσύ είσαι στην παραλία.", answer: "estás", explainEl: "Το estás έχει τόνο." },
        { type: "cloze", id: "d3", textEs: "Lisboa ___ en Portugal.", hintEl: "Η Λισαβόνα είναι στην Πορτογαλία.", answer: "está" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ en clase de español.", hintEl: "Εμείς είμαστε στο μάθημα ισπανικών.", answer: "estamos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ en el norte de España.", hintEl: "Εσείς είστε στον βορρά της Ισπανίας.", answer: "estáis" },
        { type: "cloze", id: "d6", textEs: "Las islas Baleares ___ en el mar Mediterráneo.", hintEl: "Τα νησιά Βαλεαρίδες είναι στη Μεσόγειο.", answer: "están" },
        { type: "choice", id: "d7", promptEs: "Madrid ___ en España.", promptEl: "Η Μαδρίτη είναι στην Ισπανία.", options: ["es", "está", "hay", "son"], answer: "está", explainEl: "Για θέση χρησιμοποιούμε estar, όχι ser." },
        { type: "choice", id: "d8", promptEs: "¿Dónde ___ el lago Titicaca?", promptEl: "Πού βρίσκεται η λίμνη Τιτικάκα;", options: ["está", "es", "hay", "están"], answer: "está" },
        { type: "choice", id: "d9", promptEs: "En esta ciudad ___ un museo y dos teatros.", promptEl: "Σε αυτή την πόλη υπάρχει ένα μουσείο και δύο θέατρα.", options: ["hay", "está", "están", "es"], answer: "hay", explainEl: "Εδώ λέμε ότι κάτι υπάρχει (νέα πληροφορία): hay." },
        { type: "choice", id: "d10", promptEs: "Hoy ___ nublado.", promptEl: "Σήμερα έχει συννεφιά.", options: ["está", "es", "hay", "hace"], answer: "está" },
        { type: "order", id: "d11", promptEl: "Η Σαγράδα Φαμίλια είναι στη Βαρκελώνη.", solution: ["La", "Sagrada", "Familia", "está", "en", "Barcelona."], distractors: ["es", "hay"] },
        { type: "order", id: "d12", promptEl: "Πού βρίσκεται η έρημος Ατακάμα;", solution: ["¿Dónde", "está", "el", "desierto", "de", "Atacama?"], distractors: ["es", "hay"] },
      ],
    },
    {
      id: "superlativo",
      titleEs: "El superlativo",
      titleEl: "Το υπερθετικό",
      introEl:
        "Με το υπερθετικό λες ότι κάτι είναι το πιο μεγάλο, το πιο ψηλό ή το πιο όμορφο μέσα σε μια ομάδα. Η δομή μοιάζει με την ελληνική («ο πιο ψηλός»), με μία διαφορά: το «από / σε / του» γίνεται de.",
      rules: [
        {
          textEl: "Δομή: οριστικό άρθρο (el, la, los, las) + ουσιαστικό + más + επίθετο + de + ομάδα.",
          examples: [
            { es: "El Teide es la montaña más alta de España.", el: "Το Teide είναι το ψηλότερο βουνό της Ισπανίας." },
            { es: "Rusia es el país más grande del mundo.", el: "Η Ρωσία είναι η μεγαλύτερη χώρα του κόσμου." },
          ],
        },
        {
          textEl: "Το άρθρο και το επίθετο συμφωνούν με το ουσιαστικό στο γένος και στον αριθμό. Το más δεν αλλάζει ποτέ.",
          examples: [
            { es: "Las playas más bonitas de Cuba.", el: "Οι πιο όμορφες παραλίες της Κούβας." },
            { es: "Los lagos más grandes de Chile.", el: "Οι μεγαλύτερες λίμνες της Χιλής." },
          ],
        },
        {
          textEl: "Η ομάδα εισάγεται συνήθως με de, όχι με en: de España, del mundo (de + el = del).",
          examples: [{ es: "Atenas es la ciudad más grande de Grecia.", el: "Η Αθήνα είναι η μεγαλύτερη πόλη της Ελλάδας." }],
        },
        {
          textEl: "Η ίδια δομή δουλεύει και για το αντίθετο: el río más corto, la ciudad más pequeña.",
          examples: [{ es: "Esta isla es la más pequeña de Grecia.", el: "Αυτό το νησί είναι το μικρότερο της Ελλάδας." }],
        },
      ],
      tables: [
        {
          titleEl: "Η δομή του υπερθετικού",
          headers: ["Género y número", "Estructura", "Ejemplo"],
          rows: [
            ["masculino singular", "el + sustantivo + más + adjetivo + de", "el lago más grande del país"],
            ["femenino singular", "la + sustantivo + más + adjetivo + de", "la isla más bonita de Grecia"],
            ["masculino plural", "los + sustantivo + más + adjetivo + de", "los volcanes más altos de América"],
            ["femenino plural", "las + sustantivo + más + adjetivo + de", "las playas más famosas de España"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λες «ο πιο ψηλός του κόσμου» με γενική. Στα ισπανικά χρησιμοποιείς πάντα de: «el más alto del mundo», όχι «en el mundo».",
        "Το más είναι χωριστή λέξη και δεν ενώνεται με το επίθετο: más alto, más grande.",
        "Το αρχικό άρθρο είναι υποχρεωτικό: «la ciudad más grande», όχι «ciudad más grande» όταν θέλεις υπερθετικό.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Rusia es el país ___ grande del mundo.", hintEl: "Η Ρωσία είναι η μεγαλύτερη χώρα του κόσμου.", answer: "más" },
        { type: "cloze", id: "d2", textEs: "El Aconcagua es la montaña más alta ___ América.", hintEl: "Ο Ακονκάγουα είναι το ψηλότερο βουνό της Αμερικής.", answer: "de" },
        { type: "cloze", id: "d3", textEs: "El Pacífico es ___ océano más grande del mundo.", hintEl: "Ο Ειρηνικός είναι ο μεγαλύτερος ωκεανός του κόσμου.", answer: "el" },
        { type: "cloze", id: "d4", textEs: "Santorini es la isla más ___ de Grecia. (bonito)", hintEl: "Η Σαντορίνη είναι το πιο όμορφο νησί της Ελλάδας.", answer: "bonita", explainEl: "Το επίθετο συμφωνεί με το isla: θηλυκό." },
        { type: "choice", id: "d5", promptEs: "Los Andes son ___ cordillera más larga de América.", promptEl: "Οι Άνδεις είναι η μακρύτερη οροσειρά της Αμερικής.", options: ["el", "la", "los", "las"], answer: "la" },
        { type: "choice", id: "d6", promptEs: "Madrid es la ciudad más grande ___ España.", promptEl: "Η Μαδρίτη είναι η μεγαλύτερη πόλη της Ισπανίας.", options: ["de", "en", "del", "a"], answer: "de" },
        { type: "choice", id: "d7", promptEs: "¿Qué opción es correcta?", promptEl: "Ποια επιλογή είναι σωστή;", options: ["el río más largo del mundo", "el río más largo en el mundo", "el río más largo de el mundo"], answer: "el río más largo del mundo", explainEl: "Η ομάδα εισάγεται με de, και de + el = del." },
        { type: "choice", id: "d8", promptEs: "Las playas de Cuba son ___ más bonitas del Caribe.", promptEl: "Οι παραλίες της Κούβας είναι οι πιο όμορφες της Καραϊβικής.", options: ["los", "las", "el", "la"], answer: "las" },
        { type: "order", id: "d9", promptEl: "Το Teide είναι το ψηλότερο βουνό της Ισπανίας.", solution: ["El", "Teide", "es", "la", "montaña", "más", "alta", "de", "España."], distractors: ["el", "en"] },
        { type: "order", id: "d10", promptEl: "Η Σαχάρα είναι η μεγαλύτερη έρημος της Αφρικής.", solution: ["El", "Sáhara", "es", "el", "desierto", "más", "grande", "de", "África."], distractors: ["la", "en"] },
        { type: "order", id: "d11", promptEl: "Η Αθήνα είναι η μεγαλύτερη πόλη της Ελλάδας.", solution: ["Atenas", "es", "la", "ciudad", "más", "grande", "de", "Grecia."], distractors: ["el", "en"] },
      ],
    },
    {
      id: "cuantificadores",
      titleEs: "Cuantificadores: mucho, muy",
      titleEl: "Ποσοτικοί προσδιορισμοί: mucho, muy",
      introEl:
        "Το ελληνικό «πολύ» αντιστοιχεί σε τρεις διαφορετικές μορφές στα ισπανικά. Η επιλογή εξαρτάται από το τι ακολουθεί: ουσιαστικό, επίθετο ή ρήμα.",
      rules: [
        {
          textEl: "Πριν από ουσιαστικό χρησιμοποιούμε mucho / mucha / muchos / muchas και συμφωνεί με το ουσιαστικό στο γένος και στον αριθμό.",
          examples: [
            { es: "En esta ciudad hay mucha gente.", el: "Σε αυτή την πόλη υπάρχει πολύς κόσμος." },
            { es: "En Argentina hay muchas ciudades grandes.", el: "Στην Αργεντινή υπάρχουν πολλές μεγάλες πόλεις." },
          ],
        },
        {
          textEl: "Πριν από επίθετο (ή επίρρημα) χρησιμοποιούμε muy. Δεν αλλάζει ποτέ, ούτε στο γένος ούτε στον αριθμό.",
          examples: [
            { es: "El lago es muy grande.", el: "Η λίμνη είναι πολύ μεγάλη." },
            { es: "Las selvas son muy húmedas.", el: "Οι ζούγκλες είναι πολύ υγρές." },
          ],
        },
        {
          textEl: "Μετά από ρήμα χρησιμοποιούμε mucho. Αυτό το mucho είναι επίρρημα και δεν αλλάζει.",
          examples: [
            { es: "En el norte llueve mucho.", el: "Στον βορρά βρέχει πολύ." },
            { es: "Trabajo mucho.", el: "Δουλεύω πολύ." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ποιο «πολύ» διαλέγω;",
          headers: ["Estructura", "Ejemplo", "Regla"],
          rows: [
            ["mucho/a/os/as + sustantivo", "Hay muchas montañas.", "concuerda con el sustantivo"],
            ["muy + adjetivo", "Es muy alta.", "invariable"],
            ["verbo + mucho", "Nieva mucho.", "invariable"],
          ],
        },
      ],
      tipsEl: [
        "Το ελληνικό «πολύ» κάνει και τις τρεις δουλειές: πολύ μεγάλο (muy grande), πολλά ποτάμια (muchos ríos), βρέχει πολύ (llueve mucho). Στα ισπανικά πρέπει να διαλέξεις.",
        "Λάθη που κάνουν οι Έλληνες: «mucho grande», «llueve muy», «muy ciudades».",
        "Το «hace mucho frío» έχει mucho, γιατί το frío εδώ είναι ουσιαστικό (κάνει «πολύ κρύο»). Το «es muy frío» έχει muy, γιατί το frío είναι επίθετο.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "En Bolivia hay ___ montañas.", promptEl: "Στη Βολιβία υπάρχουν πολλά βουνά.", options: ["muy", "mucho", "muchas", "muchos"], answer: "muchas", explainEl: "Το montañas είναι θηλυκό πληθυντικού: muchas." },
        { type: "choice", id: "d2", promptEs: "El lago es ___ grande.", promptEl: "Η λίμνη είναι πολύ μεγάλη.", options: ["mucho", "muy", "muchos", "muchas"], answer: "muy" },
        { type: "choice", id: "d3", promptEs: "En Londres llueve ___.", promptEl: "Στο Λονδίνο βρέχει πολύ.", options: ["muy", "mucho", "muchos", "mucha"], answer: "mucho", explainEl: "Μετά από ρήμα χρησιμοποιούμε mucho." },
        { type: "choice", id: "d4", promptEs: "En mi país hay ___ turistas.", promptEl: "Στη χώρα μου υπάρχουν πολλοί τουρίστες.", options: ["muchos", "mucho", "muchas", "muy"], answer: "muchos" },
        { type: "choice", id: "d5", promptEs: "Hace ___ frío en invierno.", promptEl: "Τον χειμώνα κάνει πολύ κρύο.", options: ["muy", "mucho", "muchos", "mucha"], answer: "mucho", explainEl: "Το frío εδώ είναι ουσιαστικό (hace frío), γι' αυτό mucho." },
        { type: "cloze", id: "d6", textEs: "En el desierto no hay ___ agua.", hintEl: "Στην έρημο δεν υπάρχει πολύ νερό.", answer: "mucha", explainEl: "Το agua είναι θηλυκό, παρά το «el agua»: mucha agua." },
        { type: "cloze", id: "d7", textEs: "Las selvas de Colombia son ___ bonitas.", hintEl: "Οι ζούγκλες της Κολομβίας είναι πολύ όμορφες.", answer: "muy" },
        { type: "cloze", id: "d8", textEs: "En el norte de España llueve ___.", hintEl: "Στον βορρά της Ισπανίας βρέχει πολύ.", answer: "mucho" },
        { type: "cloze", id: "d9", textEs: "En Argentina hay ___ ciudades grandes.", hintEl: "Στην Αργεντινή υπάρχουν πολλές μεγάλες πόλεις.", answer: "muchas" },
        { type: "order", id: "d10", promptEl: "Το καλοκαίρι κάνει πολλή ζέστη.", solution: ["En", "verano", "hace", "mucho", "calor."], alternatives: [["Hace", "mucho", "calor", "en", "verano."]], distractors: ["muy", "mucha"] },
        { type: "order", id: "d11", promptEl: "Η έρημος είναι πολύ ξηρή.", solution: ["El", "desierto", "es", "muy", "seco."], distractors: ["mucho", "seca"] },
        { type: "order", id: "d12", promptEl: "Στην πόλη μου υπάρχουν πολλά μουσεία.", solution: ["En", "mi", "ciudad", "hay", "muchos", "museos."], alternatives: [["Hay", "muchos", "museos", "en", "mi", "ciudad."]], distractors: ["muy", "mucho"] },
      ],
    },
    {
      id: "preguntar-y-responder",
      titleEs: "Preguntar y responder",
      titleEl: "Ρωτάω και απαντώ",
      introEl:
        "Για να μιλήσεις για χώρες και τόπους χρειάζεσαι πέντε ερωτηματικές λέξεις: cómo, dónde, cuántos/as, qué και cuál/cuáles. Καθεμιά ρωτά κάτι διαφορετικό.",
      rules: [
        {
          textEl: "«¿Cómo es / son…?» ρωτά πώς είναι κάτι. «¿Dónde está / están…?» ρωτά πού βρίσκεται.",
          examples: [
            { es: "¿Cómo es el clima de Costa Rica? Es tropical.", el: "Πώς είναι το κλίμα της Κόστα Ρίκα; Είναι τροπικό." },
            { es: "¿Dónde está Quito? En Ecuador.", el: "Πού είναι το Κίτο; Στον Ισημερινό." },
          ],
        },
        {
          textEl: "«¿Cuántos / Cuántas…?» ρωτά για ποσότητα και συμφωνεί με το ουσιαστικό στο γένος.",
          examples: [
            { es: "¿Cuántos habitantes hay en Chile?", el: "Πόσοι κάτοικοι υπάρχουν στη Χιλή;" },
            { es: "¿Cuántas lenguas oficiales hay en Suiza? Cuatro.", el: "Πόσες επίσημες γλώσσες υπάρχουν στην Ελβετία; Τέσσερις." },
          ],
        },
        {
          textEl: "«¿Qué es / son…?» ζητά ορισμό. Η απάντηση συνήθως αρχίζει με un / una.",
          examples: [{ es: "¿Qué es la paella? Un plato típico de España.", el: "Τι είναι η παέγια; Ένα παραδοσιακό πιάτο της Ισπανίας." }],
        },
        {
          textEl: "«¿Qué + ουσιαστικό…?» ρωτά ποιου είδους. «¿Cuál / Cuáles…?» ζητά να διαλέξεις ένα ή περισσότερα από ένα γνωστό σύνολο και συνήθως ακολουθεί το ser.",
          examples: [
            { es: "¿Qué playas hay en Cuba?", el: "Ποιες παραλίες υπάρχουν στην Κούβα;" },
            { es: "¿Cuál es la moneda de México? El peso.", el: "Ποιο είναι το νόμισμα του Μεξικού; Το πέσο." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Οι ερωτηματικές λέξεις",
          headers: ["Pregunta", "Para preguntar por…", "Ejemplo"],
          rows: [
            ["¿Cómo es / son…?", "características", "¿Cómo es el clima de Chile? Es templado."],
            ["¿Dónde está / están…?", "ubicación", "¿Dónde está Quito? En Ecuador."],
            ["¿Cuántos / Cuántas… hay?", "cantidad", "¿Cuántas lenguas oficiales hay en Suiza? Cuatro."],
            ["¿Qué es / son…?", "definición", "¿Qué es la paella? Un plato típico."],
            ["¿Qué + sustantivo…?", "tipo de cosa", "¿Qué platos típicos hay en Grecia?"],
            ["¿Cuál / Cuáles…?", "elegir entre varios", "¿Cuál es la capital de Perú? Lima."],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά το «ποιος / ποιο» κάνει δύο δουλειές. Στα ισπανικά: qué πριν από ουσιαστικό (¿Qué río…?), cuál πριν από ser (¿Cuál es…?). Λάθος: «¿Cuál río?».",
        "Το «¿Qué es la capital de Perú?» είναι λάθος. Αν ζητάς ονομασία από ένα σύνολο, λες «¿Cuál es la capital de Perú?».",
        "Όλες οι ερωτηματικές λέξεις έχουν τόνο: qué, cuál, cómo, dónde, cuántos. Στον πληθυντικό το cuál γίνεται cuáles.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ está Lima? En Perú.", promptEl: "Πού είναι η Λίμα; Στο Περού.", options: ["Dónde", "Cómo", "Cuál", "Cuántos"], answer: "Dónde" },
        { type: "choice", id: "d2", promptEs: "¿___ es el clima de Costa Rica? Es tropical.", promptEl: "Πώς είναι το κλίμα της Κόστα Ρίκα;", options: ["Cómo", "Dónde", "Cuántas", "Qué"], answer: "Cómo" },
        { type: "choice", id: "d3", promptEs: "¿___ habitantes hay en Chile?", promptEl: "Πόσοι κάτοικοι υπάρχουν στη Χιλή;", options: ["Cuántos", "Cuántas", "Cuál", "Qué"], answer: "Cuántos" },
        { type: "choice", id: "d4", promptEs: "¿___ islas hay en Grecia?", promptEl: "Πόσα νησιά υπάρχουν στην Ελλάδα;", options: ["Cuántas", "Cuántos", "Cuáles", "Dónde"], answer: "Cuántas", explainEl: "Το islas είναι θηλυκό πληθυντικού, άρα cuántas." },
        { type: "choice", id: "d5", promptEs: "¿___ es la capital de Colombia? Bogotá.", promptEl: "Ποια είναι η πρωτεύουσα της Κολομβίας;", options: ["Cuál", "Qué", "Cómo", "Dónde"], answer: "Cuál", explainEl: "Για να βρούμε την ονομασία από ένα γνωστό σύνολο χρησιμοποιούμε cuál." },
        { type: "choice", id: "d6", promptEs: "¿___ son los países más grandes de América del Sur?", promptEl: "Ποιες είναι οι μεγαλύτερες χώρες της Νότιας Αμερικής;", options: ["Cuáles", "Cuál", "Qué", "Cuántos"], answer: "Cuáles" },
        { type: "choice", id: "d7", promptEs: "¿___ es una isla? Es una tierra rodeada de agua.", promptEl: "Τι είναι ένα νησί; Είναι ένα κομμάτι γης που περιβάλλεται από νερό.", options: ["Qué", "Cuál", "Cómo", "Dónde"], answer: "Qué", explainEl: "Ζητάμε ορισμό, άρα «¿Qué es…?»." },
        { type: "choice", id: "d8", promptEs: "¿___ playas hay en Cuba?", promptEl: "Ποιες παραλίες υπάρχουν στην Κούβα;", options: ["Qué", "Cuál", "Cuáles", "Cómo"], answer: "Qué", explainEl: "Πριν από ουσιαστικό χρησιμοποιούμε qué: ¿Qué playas…?" },
        { type: "cloze", id: "d9", textEs: "¿___ es la moneda de México? El peso.", hintEl: "Ποιο είναι το νόμισμα του Μεξικού;", answer: "Cuál" },
        { type: "cloze", id: "d10", textEs: "¿___ habitantes hay en tu ciudad?", hintEl: "Πόσοι κάτοικοι υπάρχουν στην πόλη σου;", answer: "Cuántos" },
        { type: "order", id: "d11", promptEl: "Πόσες μεγάλες πόλεις υπάρχουν στην Αργεντινή;", solution: ["¿Cuántas", "ciudades", "grandes", "hay", "en", "Argentina?"], distractors: ["Cuántos", "está"] },
        { type: "order", id: "d12", promptEl: "Ποιο είναι το νόμισμα της Ελλάδας;", solution: ["¿Cuál", "es", "la", "moneda", "de", "Grecia?"], distractors: ["Qué", "está"] },
      ],
    },
  ],
};
