import type { GuUnit } from "@/types/content";

export const guUnits013To024: GuUnit[] = [
  {
    id: "u13",
    number: 13,
    page: 36,
    titleEs: "Adjetivos calificativos",
    titleEl: "Επίθετα ιδιότητας",
    introEl:
      "Τα επίθετα όπως pequeño, alta ή cansados περιγράφουν ένα πρόσωπο, ένα ζώο ή ένα πράγμα. Στα ισπανικά συμφωνούν σε γένος και αριθμό με το ουσιαστικό και συνήθως μπαίνουν μετά από αυτό.",
    rules: [
      {
        textEl: "Τα επίθετα σε -o έχουν θηλυκό σε -a και πληθυντικό σε -os / -as.",
        examples: [
          { es: "Un vestido blanco y una falda blanca.", el: "Ένα λευκό φόρεμα και μια λευκή φούστα." },
          { es: "Tengo unos amigos simpáticos.", el: "Έχω μερικούς συμπαθητικούς φίλους." },
        ],
      },
      {
        textEl:
          "Τα περισσότερα επίθετα σε -e ή σε σύμφωνο έχουν την ίδια μορφή για το αρσενικό και το θηλυκό. Στον πληθυντικό τα επίθετα σε -e παίρνουν -s (amable, amables) και αυτά σε σύμφωνο -es (joven, jóvenes). Εξαίρεση: τα επίθετα σε -or, -án, -ón, -és και οι εθνικότητες σε σύμφωνο παίρνουν -a στο θηλυκό (trabajadora, española).",
        examples: [
          { es: "Mi hermana es muy amable.", el: "Η αδερφή μου είναι πολύ ευγενική." },
          { es: "Tengo dos amigas jóvenes.", el: "Έχω δύο νεαρές φίλες." },
        ],
      },
      {
        textEl:
          "Τα επίθετα σε -or παίρνουν -a στο θηλυκό. Στον πληθυντικό γίνονται -ores (αρσενικό) και -oras (θηλυκό).",
        examples: [
          { es: "Mi padre es trabajador y mi madre es trabajadora.", el: "Ο πατέρας μου είναι εργατικός και η μητέρα μου είναι εργατική." },
          { es: "Son unas chicas encantadoras.", el: "Είναι μερικές γοητευτικές κοπέλες." },
        ],
      },
      {
        textEl:
          "Στον πληθυντικό το -z γίνεται -ces (feliz, felices). Ο τόνος προσαρμόζεται: το marrón χάνει τον τόνο (marrones), ενώ το joven τον παίρνει (jóvenes).",
        examples: [
          { es: "Los niños están muy felices.", el: "Τα παιδιά είναι πολύ χαρούμενα." },
          { es: "Tengo unas botas marrones.", el: "Έχω μερικές καφέ μπότες." },
        ],
      },
      {
        textEl:
          "Όταν ένα αρσενικό και ένα θηλυκό ουσιαστικό μπαίνουν μαζί, το επίθετο μπαίνει στο αρσενικό πληθυντικό.",
        examples: [
          { es: "Mi hermano y mi hermana son altos.", el: "Ο αδερφός μου και η αδερφή μου είναι ψηλοί." },
          { es: "Compré un abrigo y una bufanda grises.", el: "Αγόρασα ένα παλτό και ένα κασκόλ γκρι." },
        ],
      },
      {
        textEl:
          "Το επίθετο μπαίνει μετά το ser / estar και μετά το ουσιαστικό. Τα bueno και malo συνήθως μπαίνουν πριν από το ουσιαστικό και πριν από αρσενικό ενικού γίνονται buen και mal.",
        examples: [
          { es: "Tu hermano es muy simpático.", el: "Ο αδερφός σου είναι πολύ συμπαθητικός." },
          { es: "Es un buen restaurante.", el: "Είναι ένα καλό εστιατόριο." },
          { es: "Es una mala idea.", el: "Είναι κακή ιδέα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Θηλυκό και πληθυντικός των επιθέτων",
        headers: ["Terminación", "Masc. singular", "Fem. singular", "Masc. plural", "Fem. plural"],
        rows: [
          ["-o", "pequeño", "pequeña", "pequeños", "pequeñas"],
          ["-e", "inteligente", "inteligente", "inteligentes", "inteligentes"],
          ["-consonante", "joven", "joven", "jóvenes", "jóvenes"],
          ["-z", "feliz", "feliz", "felices", "felices"],
          ["-or", "encantador", "encantadora", "encantadores", "encantadoras"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το επίθετο μπαίνει συνήθως πριν από το ουσιαστικό («ένα μικρό αυτοκίνητο»). Στα ισπανικά μπαίνει συνήθως μετά: un coche pequeño.",
      "Μην προσθέτεις -a σε επίθετα σε -e ή σε σύμφωνο: una casa grande, una chica joven.",
      "Το επίθετο συμφωνεί με το ουσιαστικό που περιγράφει, όχι με τη λέξη που βρίσκεται δίπλα του: los ojos azules, las flores verdes.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi madre es muy ___ (trabajador).", hintEl: "Η μητέρα μου είναι πολύ εργατική.", answer: "trabajadora", explainEl: "Τα επίθετα σε -or παίρνουν -a στο θηλυκό." },
      { type: "cloze", id: "d2", textEs: "Los zapatos son ___ (negro).", hintEl: "Τα παπούτσια είναι μαύρα.", answer: "negros" },
      { type: "cloze", id: "d3", textEs: "Mis primas son muy ___ (simpático).", hintEl: "Οι ξαδέρφες μου είναι πολύ συμπαθητικές.", answer: "simpáticas" },
      { type: "cloze", id: "d4", textEs: "Me gustan las chaquetas ___ (marrón).", hintEl: "Μου αρέσουν οι καφέ ζακέτες.", answer: "marrones", explainEl: "Στον πληθυντικό το marrón χάνει τον τόνο: marrones." },
      { type: "cloze", id: "d5", textEs: "Mis profesores son ___ (joven).", hintEl: "Οι καθηγητές μου είναι νέοι.", answer: "jóvenes", explainEl: "Στον πληθυντικό το joven παίρνει τόνο: jóvenes." },
      { type: "cloze", id: "d6", textEs: "Tengo un abrigo y una bufanda ___ (rojo).", hintEl: "Έχω ένα κόκκινο παλτό και ένα κόκκινο κασκόλ.", answer: "rojos", explainEl: "Αρσενικό και θηλυκό ουσιαστικό μαζί: το επίθετο μπαίνει στο αρσενικό πληθυντικό." },
      { type: "cloze", id: "d7", textEs: "Los niños están muy ___ (feliz).", hintEl: "Τα παιδιά είναι πολύ χαρούμενα.", answer: "felices", explainEl: "Το -z γίνεται -c πριν από -es: feliz, felices." },
      { type: "choice", id: "d8", promptEs: "Hoy es un ___ día para pasear.", promptEl: "Σήμερα είναι μια καλή μέρα για βόλτα.", options: ["buen", "bueno", "buena", "buenos"], answer: "buen", explainEl: "Πριν από αρσενικό ενικού το bueno γίνεται buen." },
      { type: "choice", id: "d9", promptEs: "Tengo una ___ noticia para ti.", promptEl: "Έχω μια κακή είδηση για σένα.", options: ["mal", "mala", "malo", "malas"], answer: "mala" },
      { type: "choice", id: "d10", promptEs: "Marta y Pedro son muy ___.", promptEl: "Η Marta και ο Pedro είναι πολύ ψηλοί.", options: ["alto", "alta", "altos", "altas"], answer: "altos", explainEl: "Γυναίκα και άντρας μαζί: αρσενικό πληθυντικό." },
      { type: "order", id: "d11", promptEl: "Η αδερφή μου είναι ψηλή και ξανθιά.", solution: ["Mi", "hermana", "es", "alta", "y", "rubia."], distractors: ["alto", "rubio"], alternatives: [["Mi", "hermana", "es", "rubia", "y", "alta."]] },
      { type: "order", id: "d12", promptEl: "Έχω ένα κόκκινο αυτοκίνητο.", solution: ["Tengo", "un", "coche", "rojo."], distractors: ["roja", "rojos"], explainEl: "Το επίθετο μπαίνει μετά το ουσιαστικό και συμφωνεί μαζί του." },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τη σωστή μορφή των επιθέτων που βρίσκονται σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις με τα επίθετα του πλαισίου στη σωστή μορφή.",
      "Συμπλήρωσε τις προτάσεις με ένα ουσιαστικό και ένα επίθετο από τα πλαίσια.",
    ],
  },
  {
    id: "u14",
    number: 14,
    page: 38,
    titleEs: "Adjetivos de nacionalidad",
    titleEl: "Επίθετα εθνικότητας",
    introEl:
      "Τα επίθετα εθνικότητας (chileno, belga, alemán...) συμφωνούν σε γένος και αριθμό με το ουσιαστικό. Ο σχηματισμός του θηλυκού και του πληθυντικού εξαρτάται από την κατάληξη.",
    rules: [
      {
        textEl:
          "Τα επίθετα σε -o αλλάζουν σε -a στο θηλυκό και παίρνουν -s στον πληθυντικό: chileno, chilena, chilenos, chilenas.",
        examples: [
          { es: "Mi vecino es peruano y mi vecina es peruana.", el: "Ο γείτονάς μου είναι Περουβιανός και η γειτόνισσά μου είναι Περουβιανή." },
          { es: "Tengo dos amigos peruanos.", el: "Έχω δύο Περουβιανούς φίλους." },
        ],
      },
      {
        textEl:
          "Τα επίθετα σε -a, -e, -í, -ú έχουν την ίδια μορφή για άντρα και γυναίκα. Πληθυντικός: -s (belgas), -es (canadienses), και στα -í, -ú: -ís ή -íes, -ús ή -úes (marroquís / marroquíes).",
        examples: [
          { es: "Mi profesor y mi profesora son canadienses.", el: "Ο καθηγητής μου και η καθηγήτριά μου είναι Καναδοί." },
          { es: "Tengo dos amigas belgas.", el: "Έχω δύο Βελγίδες φίλες." },
        ],
      },
      {
        textEl:
          "Τα επίθετα που τελειώνουν σε σύμφωνο παίρνουν -a στο θηλυκό και -es / -as στον πληθυντικό. Στα -és, -án, -ín, -ón χάνεται ο τόνος: francés, francesa, franceses.",
        examples: [
          { es: "Un cantante francés y una cantante francesa.", el: "Ένας Γάλλος τραγουδιστής και μια Γαλλίδα τραγουδίστρια." },
          { es: "Mis vecinos alemanes son muy amables.", el: "Οι Γερμανοί γείτονές μου είναι πολύ ευγενικοί." },
        ],
      },
      {
        textEl:
          "Όταν μιλάμε για έναν άντρα και μια γυναίκα μαζί, το επίθετο μπαίνει στο αρσενικό πληθυντικό.",
        examples: [{ es: "Pablo es argentino y Lucía es argentina: son argentinos.", el: "Ο Pablo είναι Αργεντινός και η Lucía είναι Αργεντινή: είναι Αργεντινοί." }],
      },
      {
        textEl:
          "Το επίθετο εθνικότητας μπαίνει μετά το ser ή μετά το ουσιαστικό και γράφεται με μικρό αρχικό γράμμα.",
        examples: [
          { es: "La música brasileña me encanta.", el: "Λατρεύω τη βραζιλιάνικη μουσική." },
          { es: "Los vinos españoles son muy buenos.", el: "Τα ισπανικά κρασιά είναι πολύ καλά." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Θηλυκό και πληθυντικός ανά κατάληξη",
        headers: ["Terminación", "Masculino", "Femenino", "Masculino plural", "Femenino plural"],
        rows: [
          ["-o", "chileno", "chilena", "chilenos", "chilenas"],
          ["-a", "belga", "belga", "belgas", "belgas"],
          ["-e", "canadiense", "canadiense", "canadienses", "canadienses"],
          ["-í", "marroquí", "marroquí", "marroquís / marroquíes", "marroquís / marroquíes"],
          ["-ú", "hindú", "hindú", "hindús / hindúes", "hindús / hindúes"],
          ["-consonante", "alemán", "alemana", "alemanes", "alemanas"],
          ["-consonante", "portugués", "portuguesa", "portugueses", "portuguesas"],
          ["-consonante", "español", "española", "españoles", "españolas"],
        ],
      },
      {
        titleEl: "Μερικές εθνικότητες",
        headers: ["País", "Masculino", "Femenino"],
        rows: [
          ["Grecia", "griego", "griega"],
          ["Francia", "francés", "francesa"],
          ["Japón", "japonés", "japonesa"],
          ["Brasil", "brasileño", "brasileña"],
          ["Marruecos", "marroquí", "marroquí"],
          ["Bélgica", "belga", "belga"],
          ["Irán", "iraní", "iraní"],
          ["Canadá", "canadiense", "canadiense"],
        ],
      },
    ],
    tipsEl: [
      "Στα ισπανικά οι εθνικότητες γράφονται με μικρό γράμμα, ακόμα και όταν είναι ουσιαστικά: es griego, los españoles (όχι Griego, Españoles).",
      "Το γαλλικό francés, το ιαπωνικό japonés κ.ά. χάνουν τον τόνο στο θηλυκό και στον πληθυντικό: francesa, franceses.",
      "Οι λέξεις σε -ense (canadiense, costarricense, estadounidense) έχουν μία μορφή για άντρα και γυναίκα. Δεν υπάρχει «canadienso» ή «canadiensa».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Carlos es portugués y Marta es ___.", hintEl: "Ο Carlos είναι Πορτογάλος και η Marta είναι Πορτογαλίδα.", answer: "portuguesa", explainEl: "Στο θηλυκό προσθέτουμε -a και χάνεται ο τόνος: portugués, portuguesa." },
      { type: "cloze", id: "d2", textEs: "Tengo dos amigos ___ (alemán).", hintEl: "Έχω δύο Γερμανούς φίλους.", answer: "alemanes", explainEl: "Στον πληθυντικό προσθέτουμε -es και χάνεται ο τόνος: alemán, alemanes." },
      { type: "cloze", id: "d3", textEs: "Las ciudades ___ (marroquí) son muy bonitas.", hintEl: "Οι μαροκινές πόλεις είναι πολύ όμορφες.", answer: "marroquíes", alternatives: ["marroquís"] },
      { type: "cloze", id: "d4", textEs: "La comida ___ (japonés) me encanta.", hintEl: "Λατρεύω το ιαπωνικό φαγητό.", answer: "japonesa" },
      { type: "cloze", id: "d5", textEs: "Nikos es griego y Elena es griega: son ___.", hintEl: "Ο Nikos είναι Έλληνας και η Elena είναι Ελληνίδα: είναι Έλληνες.", answer: "griegos", explainEl: "Άντρας και γυναίκα μαζί: αρσενικό πληθυντικό." },
      { type: "cloze", id: "d6", textEs: "Las actrices ___ (canadiense) son famosas.", hintEl: "Οι Καναδές ηθοποιοί είναι διάσημες.", answer: "canadienses" },
      { type: "choice", id: "d7", promptEs: "Elena es ___.", promptEl: "Η Elena είναι Ελληνίδα.", options: ["griega", "griego", "griegas"], answer: "griega" },
      { type: "choice", id: "d8", promptEs: "Ellos son ___.", promptEl: "Αυτοί (οι άντρες) είναι Σκωτσέζοι.", options: ["escocés", "escoceses", "escocesas"], answer: "escoceses" },
      { type: "choice", id: "d9", promptEs: "Fez y Rabat son ciudades ___.", promptEl: "Η Φεζ και το Ραμπάτ είναι μαροκινές πόλεις.", options: ["marroquí", "marroquíes", "marroquía"], answer: "marroquíes" },
      { type: "choice", id: "d10", promptEs: "Mi vecina es ___.", promptEl: "Η γειτόνισσά μου είναι από την Κόστα Ρίκα.", options: ["costarricense", "costarricensa", "costarricenso"], answer: "costarricense", explainEl: "Οι λέξεις σε -ense έχουν την ίδια μορφή για άντρα και γυναίκα." },
      { type: "order", id: "d11", promptEl: "Η φίλη μου είναι Βελγίδα.", solution: ["Mi", "amiga", "es", "belga."], distractors: ["belgo", "belgas"] },
      { type: "order", id: "d12", promptEl: "Έχω δύο Γάλλους φίλους.", solution: ["Tengo", "dos", "amigos", "franceses."], distractors: ["francés", "francesas"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τον πίνακα με το θηλυκό και τον πληθυντικό των επιθέτων εθνικότητας.",
      "Συμπλήρωσε τις προτάσεις με τα επίθετα εθνικότητας του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με ένα ουσιαστικό και ένα επίθετο εθνικότητας από τα δύο πλαίσια.",
    ],
  },
  {
    id: "u15",
    number: 15,
    page: 40,
    titleEs: "Forma comparativa de los adjetivos (1)",
    titleEl: "Συγκριτικός βαθμός των επιθέτων (1)",
    introEl:
      "Με τον συγκριτικό συγκρίνουμε δύο πρόσωπα, ζώα ή πράγματα. Στα ισπανικά ο συγκριτικός υπεροχής και κατωτερότητας σχηματίζεται με más ή menos πριν από το επίθετο και με que πριν από τον δεύτερο όρο.",
    rules: [
      {
        textEl:
          "Για υπεροχή βάζουμε más πριν από το επίθετο, για κατωτερότητα menos. Ο δεύτερος όρος της σύγκρισης εισάγεται με que.",
        examples: [
          { es: "Mi casa es más grande que tu casa.", el: "Το σπίτι μου είναι μεγαλύτερο από το σπίτι σου." },
          { es: "Este libro es menos caro que ese.", el: "Αυτό το βιβλίο είναι λιγότερο ακριβό από εκείνο." },
        ],
      },
      {
        textEl:
          "Τα bueno και malo έχουν ειδικό συγκριτικό: bueno, mejor · malo, peor. Συνήθως δεν λέμε «más bueno» ή «más malo». Για ηλικία χρησιμοποιούμε τα mayor (μεγαλύτερος, από το grande) και menor (μικρότερος, από το pequeño). Το joven έχει κανονικό συγκριτικό: más joven.",
        examples: [
          { es: "Esta pizza es mejor que la de ayer.", el: "Αυτή η πίτσα είναι καλύτερη από τη χθεσινή." },
          { es: "El tiempo hoy es peor que ayer.", el: "Ο καιρός σήμερα είναι χειρότερος από χθες." },
          { es: "Mi hermano es mayor que yo.", el: "Ο αδερφός μου είναι μεγαλύτερος από μένα." },
        ],
      },
      {
        textEl:
          "Το επίθετο συμφωνεί με το πρόσωπο ή το πράγμα που περιγράφουμε. Τα mejor, peor, mayor, menor έχουν την ίδια μορφή στο αρσενικό και το θηλυκό, και στον πληθυντικό παίρνουν -es.",
        examples: [
          { es: "Mis hermanas son más altas que yo.", el: "Οι αδερφές μου είναι πιο ψηλές από μένα." },
          { es: "Mis primos son mayores que mis primas.", el: "Οι ξάδερφοί μου είναι μεγαλύτεροι από τις ξαδέρφες μου." },
        ],
      },
      {
        textEl:
          "Όταν ρωτάμε ποιος από έναν άντρα και μια γυναίκα έχει μια ιδιότητα, το επίθετο μπαίνει στο αρσενικό.",
        examples: [{ es: "¿Quién es más alto, Pablo o Ana?", el: "Ποιος είναι πιο ψηλός, ο Pablo ή η Ana;" }],
      },
      {
        textEl:
          "Μετά το que χρησιμοποιούμε τις αντωνυμίες υποκειμένου: que yo, que tú, que él (όχι «que mí»).",
        examples: [
          { es: "Ellos son más rápidos que nosotros.", el: "Αυτοί είναι πιο γρήγοροι από εμάς." },
          { es: "Tú eres menos paciente que yo.", el: "Εσύ είσαι λιγότερο υπομονετικός από μένα." },
        ],
      },
      {
        textEl:
          "Όταν είναι σαφές με τι συγκρίνουμε, δεν χρειάζεται να πούμε τον δεύτερο όρο.",
        examples: [{ es: "Esta mesa es baja. Necesito una más alta.", el: "Αυτό το τραπέζι είναι χαμηλό. Χρειάζομαι ένα πιο ψηλό." }],
      },
    ],
    tables: [
      {
        titleEl: "Ο κανονικός συγκριτικός",
        headers: ["Tipo", "Estructura", "Ejemplo"],
        rows: [
          ["Superioridad (+)", "más + adjetivo (+ que)", "Eva es más alta que Luis."],
          ["Inferioridad (-)", "menos + adjetivo (+ que)", "Luis es menos alto que Eva."],
        ],
      },
      {
        titleEl: "Ανώμαλοι συγκριτικοί",
        headers: ["Adjetivo", "Comparativo", "Significado"],
        rows: [
          ["bueno", "mejor", "καλύτερος"],
          ["malo", "peor", "χειρότερος"],
          ["grande (edad)", "mayor", "μεγαλύτερος σε ηλικία"],
          ["pequeño (edad)", "menor", "μικρότερος σε ηλικία"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά ο συγκριτικός έχει συχνά κατάληξη (ψηλότερος). Στα ισπανικά το επίθετο δεν αλλάζει: πάντα más / menos + επίθετο. Το «από» είναι que, όχι de.",
      "Τα mayor και menor αφορούν ηλικία. Για μέγεθος λέμε más grande, más pequeño: Madrid es más grande que Toledo.",
      "Μετά το que μπαίνει yo, tú, él, όχι mí, ti: más alto que yo.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Este coche es ___ caro que aquel.", hintEl: "Αυτό το αυτοκίνητο είναι πιο ακριβό από εκείνο.", answer: "más" },
      { type: "cloze", id: "d2", textEs: "Mi hermano es ___ trabajador que yo. Es un poco vago.", hintEl: "Ο αδερφός μου είναι λιγότερο εργατικός από μένα. Είναι λίγο τεμπέλης.", answer: "menos" },
      { type: "cloze", id: "d3", textEs: "Esta pizza es ___ que la otra.", hintEl: "Αυτή η πίτσα είναι καλύτερη από την άλλη.", answer: "mejor", explainEl: "Το bueno έχει ανώμαλο συγκριτικό: mejor (όχι «más bueno»)." },
      { type: "cloze", id: "d4", textEs: "Este hotel es ___ que el de la playa.", hintEl: "Αυτό το ξενοδοχείο είναι χειρότερο από εκείνο της παραλίας.", answer: "peor", explainEl: "Το malo έχει ανώμαλο συγκριτικό: peor (όχι «más malo»)." },
      { type: "cloze", id: "d5", textEs: "Mi hermano tiene 30 años y yo tengo 25. Él es ___ que yo.", hintEl: "Ο αδερφός μου είναι 30 και εγώ 25. Αυτός είναι μεγαλύτερος από μένα.", answer: "mayor" },
      { type: "cloze", id: "d6", textEs: "Mi prima tiene 15 años y yo tengo 18. Ella es ___ que yo.", hintEl: "Η ξαδέρφη μου είναι 15 και εγώ 18. Εκείνη είναι μικρότερη από μένα.", answer: "menor" },
      { type: "cloze", id: "d7", textEs: "Tú eres más alta que ___.", hintEl: "Εσύ είσαι πιο ψηλή από μένα.", answer: "yo", explainEl: "Μετά το que χρησιμοποιούμε αντωνυμία υποκειμένου: que yo, όχι «que mí»." },
      { type: "choice", id: "d8", promptEs: "Mis hermanas son ___ que yo.", promptEl: "Οι αδερφές μου είναι πιο ψηλές από μένα.", options: ["más altas", "más alto", "más altos", "más alta"], answer: "más altas", explainEl: "Το επίθετο συμφωνεί με το hermanas: θηλυκό πληθυντικό." },
      { type: "choice", id: "d9", promptEs: "Mis primos son ___ que yo.", promptEl: "Οι ξάδερφοί μου είναι μεγαλύτεροι από μένα.", options: ["mayores", "mayor", "mayora"], answer: "mayores", explainEl: "Το mayor δεν έχει θηλυκό και στον πληθυντικό παίρνει -es." },
      { type: "choice", id: "d10", promptEs: "Madrid es ___ que mi pueblo.", promptEl: "Η Μαδρίτη είναι μεγαλύτερη από το χωριό μου.", options: ["más grande", "mayor", "más grandes", "mejor"], answer: "más grande", explainEl: "Για μέγεθος χρησιμοποιούμε más grande. Το mayor αναφέρεται σε ηλικία." },
      { type: "order", id: "d11", promptEl: "Ο Pablo είναι πιο ψηλός από την αδερφή του.", solution: ["Pablo", "es", "más", "alto", "que", "su", "hermana."], distractors: ["menos", "alta"] },
      { type: "order", id: "d12", promptEl: "Η αδερφή μου είναι λιγότερο ψηλή από μένα.", solution: ["Mi", "hermana", "es", "menos", "alta", "que", "yo."], distractors: ["más", "alto", "mí"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις ερωτήσεις με τον κατάλληλο συγκριτικό τύπο, ανάλογα με το + ή το - σε παρένθεση.",
      "Γράψε συγκρίσεις όπως στο παράδειγμα, με τα δεδομένα σε παρένθεση και τις λέξεις του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με τον κατάλληλο συγκριτικό του επιθέτου σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις με τον συγκριτικό των επιθέτων του πλαισίου.",
    ],
  },
  {
    id: "u16",
    number: 16,
    page: 42,
    titleEs: "Forma comparativa de los adjetivos (2)",
    titleEl: "Συγκριτικός βαθμός των επιθέτων (2)",
    introEl:
      "Με την έκφραση tan + επίθετο + como δείχνουμε ότι δύο πρόσωπα ή πράγματα είναι ίσα ως προς μια ιδιότητα. Στην άρνηση (no es tan ... como) λέμε ότι το ένα δεν φτάνει το άλλο.",
    rules: [
      {
        textEl: "Για ισότητα χρησιμοποιούμε tan + επίθετο + como, που σημαίνει «τόσο ... όσο».",
        examples: [
          { es: "Lisboa es tan bonita como Sevilla.", el: "Η Λισαβόνα είναι τόσο όμορφη όσο η Σεβίλλη." },
          { es: "Luis es tan alto como su padre.", el: "Ο Luis είναι τόσο ψηλός όσο ο πατέρας του." },
        ],
      },
      {
        textEl:
          "Στην άρνηση λέμε no es tan ... como: το πρώτο πρόσωπο ή πράγμα έχει την ιδιότητα σε μικρότερο βαθμό από το δεύτερο.",
        examples: [
          { es: "La película no es tan buena como el libro.", el: "Η ταινία δεν είναι τόσο καλή όσο το βιβλίο." },
          { es: "Mi pueblo no es tan grande como tu ciudad.", el: "Το χωριό μου δεν είναι τόσο μεγάλο όσο η πόλη σου." },
        ],
      },
      {
        textEl:
          "Το tan δεν αλλάζει ποτέ. Το επίθετο συμφωνεί σε γένος και αριθμό με το πρόσωπο ή το πράγμα που περιγράφουμε.",
        examples: [{ es: "Mis primas son tan simpáticas como mi hermana.", el: "Οι ξαδέρφες μου είναι τόσο συμπαθητικές όσο η αδερφή μου." }],
      },
      {
        textEl: "Μετά το como χρησιμοποιούμε αντωνυμία υποκειμένου: como yo, como tú, como él.",
        examples: [
          { es: "Tú no eres tan rápido como yo.", el: "Εσύ δεν είσαι τόσο γρήγορος όσο εγώ." },
          { es: "Pedro es tan trabajador como ellos.", el: "Ο Pedro είναι τόσο εργατικός όσο εκείνοι." },
        ],
      },
      {
        textEl:
          "Συχνά προτιμάμε no tan + θετικό επίθετο αντί για más + αρνητικό ή menos + θετικό. Ακούγεται πιο ευγενικό.",
        examples: [
          { es: "Mi hermano es menos paciente que yo.", el: "Ο αδερφός μου είναι λιγότερο υπομονετικός από μένα." },
          { es: "Mi hermano no es tan paciente como yo.", el: "Ο αδερφός μου δεν είναι τόσο υπομονετικός όσο εγώ." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι τρεις τύποι σύγκρισης",
        headers: ["Tipo", "Estructura", "Ejemplo"],
        rows: [
          ["Igualdad (=)", "tan + adjetivo + como", "Ana es tan alta como Eva."],
          ["Superioridad (+)", "más + adjetivo + que", "Ana es más alta que Eva."],
          ["Inferioridad (-)", "menos + adjetivo + que", "Ana es menos alta que Eva."],
          ["Negación", "no es tan + adjetivo + como", "Ana no es tan alta como Eva."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «τόσο ... όσο». Στα ισπανικά είναι tan ... como. Μην χρησιμοποιείς que εδώ: tan ... que σημαίνει «τόσο ... ώστε» (Es tan alto que no cabe en el coche).",
      "Θυμήσου τη διαφορά: más ... que (πιο ... από), αλλά tan ... como (τόσο ... όσο).",
      "Το tan μένει πάντα ίδιο, ενώ το επίθετο αλλάζει: tan altas, tan altos.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi hermano es ___ alto como mi padre.", hintEl: "Ο αδερφός μου είναι τόσο ψηλός όσο ο πατέρας μου.", answer: "tan" },
      { type: "cloze", id: "d2", textEs: "Madrid es tan bonita ___ Barcelona.", hintEl: "Η Μαδρίτη είναι τόσο όμορφη όσο η Βαρκελώνη.", answer: "como" },
      { type: "cloze", id: "d3", textEs: "El autobús no es tan rápido ___ el tren.", hintEl: "Το λεωφορείο δεν είναι τόσο γρήγορο όσο το τρένο.", answer: "como" },
      { type: "cloze", id: "d4", textEs: "Esta casa no es ___ grande como esa.", hintEl: "Αυτό το σπίτι δεν είναι τόσο μεγάλο όσο εκείνο.", answer: "tan" },
      { type: "cloze", id: "d5", textEs: "Yo mido 1,80 y tú mides 1,80. Tú eres tan alto como ___.", hintEl: "Εγώ είμαι 1,80 και εσύ 1,80. Εσύ είσαι τόσο ψηλός όσο εγώ.", answer: "yo", explainEl: "Μετά το como χρησιμοποιούμε αντωνυμία υποκειμένου: como yo, όχι «como mí»." },
      { type: "cloze", id: "d6", textEs: "Lola y Ana son tan ___ (guapo) como su madre.", hintEl: "Η Lola και η Ana είναι τόσο όμορφες όσο η μητέρα τους.", answer: "guapas", explainEl: "Το tan δεν αλλάζει, αλλά το επίθετο συμφωνεί με το υποκείμενο." },
      { type: "cloze", id: "d7", textEs: "Mis hijos no son tan ___ (trabajador) como los hijos de Pedro.", hintEl: "Τα παιδιά μου δεν είναι τόσο εργατικά όσο τα παιδιά του Pedro.", answer: "trabajadores" },
      { type: "choice", id: "d8", promptEs: "Pedro mide 1,80 m y Juan mide 1,80 m. Pedro es ___ Juan.", promptEl: "Ο Pedro και ο Juan έχουν το ίδιο ύψος.", options: ["tan alto como", "más alto que", "menos alto que", "tan alto que"], answer: "tan alto como" },
      { type: "choice", id: "d9", promptEs: "El teatro es menos divertido que el cine. Es lo mismo que decir: El teatro ___ el cine.", promptEl: "Το θέατρο είναι λιγότερο διασκεδαστικό από τον κινηματογράφο.", options: ["no es tan divertido como", "es tan divertido como", "es más divertido que", "es tan divertido que"], answer: "no es tan divertido como" },
      { type: "choice", id: "d10", promptEs: "Mis primas son ___ elegantes como mi tía.", promptEl: "Οι ξαδέρφες μου είναι τόσο κομψές όσο η θεία μου.", options: ["tan", "tanto", "tantas", "más"], answer: "tan", explainEl: "Πριν από επίθετο χρησιμοποιούμε πάντα tan, που δεν αλλάζει." },
      { type: "order", id: "d11", promptEl: "Η αδερφή μου είναι τόσο ψηλή όσο εγώ.", solution: ["Mi", "hermana", "es", "tan", "alta", "como", "yo."], distractors: ["que", "alto", "mí"] },
      { type: "order", id: "d12", promptEl: "Το τρένο δεν είναι τόσο φτηνό όσο το λεωφορείο.", solution: ["El", "tren", "no", "es", "tan", "barato", "como", "el", "autobús."], distractors: ["más", "que"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις συγκρίσεις ισότητας με τα επίθετα του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με τον συγκριτικό ισότητας και τις λέξεις του πλαισίου, με βάση τα δεδομένα σε παρένθεση.",
      "Συμπλήρωσε τους διαλόγους με τον συγκριτικό ισότητας.",
      "Ξαναγράψε τις προτάσεις με τον συγκριτικό ισότητας.",
    ],
  },
  {
    id: "u17",
    number: 17,
    page: 44,
    titleEs: "Posesivos (1)",
    titleEl: "Κτητικά (1): mi, tu, su...",
    introEl:
      "Τα mi, tu, su, nuestro, vuestro μπαίνουν πριν από το ουσιαστικό και δείχνουν ότι κάτι ανήκει σε κάποιον ή συνδέεται μαζί του (οικογένεια, καταγωγή, δουλειά). Συμφωνούν με το ουσιαστικό που συνοδεύουν, όχι με τον κάτοχο.",
    rules: [
      {
        textEl:
          "Τα κτητικά δηλώνουν ιδιοκτησία, αλλά και συγγένεια, καταγωγή ή άλλη σχέση με πρόσωπα, ζώα και πράγματα.",
        examples: [
          { es: "Mi madre trabaja en un hospital.", el: "Η μητέρα μου δουλεύει σε ένα νοσοκομείο." },
          { es: "Mi pueblo está cerca del mar.", el: "Το χωριό μου είναι κοντά στη θάλασσα." },
        ],
      },
      {
        textEl: "Το κτητικό μπαίνει πριν από το ουσιαστικό και δεν παίρνει άρθρο: mi casa, όχι «la mi casa».",
        examples: [
          { es: "Elena, ¿dónde está tu bolso?", el: "Elena, πού είναι η τσάντα σου;" },
          { es: "¿Cómo se llaman tus padres?", el: "Πώς λένε τους γονείς σου;" },
        ],
      },
      {
        textEl:
          "Τα mi, tu, su αλλάζουν μόνο στον πληθυντικό (mis, tus, sus). Τα nuestro και vuestro αλλάζουν και σε γένος: nuestro, nuestra, nuestros, nuestras.",
        examples: [
          { es: "Mis hermanos viven en Sevilla.", el: "Τα αδέρφια μου μένουν στη Σεβίλλη." },
          { es: "Vuestra casa y vuestro jardín son preciosos.", el: "Το σπίτι σας και ο κήπος σας είναι υπέροχα." },
        ],
      },
      {
        textEl:
          "Το su / sus σημαίνει «δικός του, της, σας (ευγενικά), τους». Από την κατάσταση καταλαβαίνουμε ποιον εννοούμε.",
        examples: [
          { es: "Ana vive con su abuela.", el: "Η Ana μένει με τη γιαγιά της." },
          { es: "Señor Ramos, ¿es esta su maleta?", el: "Κύριε Ramos, αυτή είναι η βαλίτσα σας;" },
          { es: "Los vecinos y sus hijos juegan en el parque.", el: "Οι γείτονες και τα παιδιά τους παίζουν στο πάρκο." },
        ],
      },
      {
        textEl:
          "Με μέρη του σώματος, ρούχα και προσωπικά αντικείμενα χρησιμοποιούμε άρθρο (el, la, los, las) ή un, una και όχι κτητικό, όταν είναι σαφές σε ποιον ανήκουν.",
        examples: [
          { es: "Me duele la espalda.", el: "Με πονάει η πλάτη μου." },
          { es: "Ponte el gorro, hace frío.", el: "Βάλε το σκουφάκι σου, κάνει κρύο." },
          { es: "Lávate las manos.", el: "Πλύνε τα χέρια σου." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Τα κτητικά πριν από ουσιαστικό",
        headers: ["", "Singular (masc. y fem.)", "Plural (masc. y fem.)"],
        rows: [
          ["yo", "mi", "mis"],
          ["tú", "tu", "tus"],
          ["usted, él, ella", "su", "sus"],
          ["nosotros, nosotras", "nuestro / nuestra", "nuestros / nuestras"],
          ["vosotros, vosotras", "vuestro / vuestra", "vuestros / vuestras"],
          ["ustedes, ellos, ellas", "su", "sus"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το κτητικό μπαίνει μετά («το σπίτι μου»). Στα ισπανικά μπαίνει πριν από το ουσιαστικό και χωρίς άρθρο: mi casa.",
      "Στα ελληνικά λέμε «με πονάει το κεφάλι μου», στα ισπανικά με άρθρο: me duele la cabeza (όχι «mi cabeza»).",
      "Το su μπορεί να αναφέρεται σε άντρα, γυναίκα, σε εσάς (ευγενικά) ή σε αυτούς. Το tu (δικός σου) δεν έχει τόνο, ενώ το tú (εσύ) έχει.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo vivo con ___ padres.", hintEl: "Μένω με τους γονείς μου.", answer: "mis" },
      { type: "cloze", id: "d2", textEs: "Elena, ¿dónde está ___ móvil?", hintEl: "Elena, πού είναι το κινητό σου;", answer: "tu", explainEl: "Το κτητικό tu (δικός σου) γράφεται χωρίς τόνο." },
      { type: "cloze", id: "d3", textEs: "Nosotros queremos mucho a ___ profesora.", hintEl: "Αγαπάμε πολύ την καθηγήτριά μας.", answer: "nuestra", explainEl: "Το nuestro συμφωνεί με το ουσιαστικό: profesora, άρα nuestra." },
      { type: "cloze", id: "d4", textEs: "Chicos, ¿dónde está ___ profesor?", hintEl: "Παιδιά, πού είναι ο καθηγητής σας;", answer: "vuestro" },
      { type: "cloze", id: "d5", textEs: "Pablo vive con ___ abuela.", hintEl: "Ο Pablo μένει με τη γιαγιά του.", answer: "su" },
      { type: "cloze", id: "d6", textEs: "Ana y Luis hablan con ___ hijos.", hintEl: "Η Ana και ο Luis μιλούν με τα παιδιά τους.", answer: "sus" },
      { type: "cloze", id: "d7", textEs: "Me duele ___ cabeza.", hintEl: "Με πονάει το κεφάλι μου.", answer: "la", explainEl: "Με μέρη του σώματος χρησιμοποιούμε άρθρο, όχι κτητικό." },
      { type: "choice", id: "d8", promptEs: "Nosotros hablamos con ___ vecinos.", promptEl: "Μιλάμε με τους γείτονές μας.", options: ["nuestros", "nuestro", "vuestros", "nuestras"], answer: "nuestros", explainEl: "Συμφωνεί με το ουσιαστικό: vecinos είναι αρσενικό πληθυντικού." },
      { type: "choice", id: "d9", promptEs: "Señor Ramos, ¿es esta ___ maleta?", promptEl: "Κύριε Ramos, αυτή είναι η βαλίτσα σας;", options: ["su", "tu", "sus", "suya"], answer: "su", explainEl: "Με το usted χρησιμοποιούμε su (όχι tu)." },
      { type: "choice", id: "d10", promptEs: "Me duelen ___ pies.", promptEl: "Με πονάνε τα πόδια μου.", options: ["los", "mis", "unos", "sus"], answer: "los", explainEl: "Με μέρη του σώματος: άρθρο (los pies), όχι κτητικό." },
      { type: "order", id: "d11", promptEl: "Οι φίλοι μας μένουν στη Σεβίλλη.", solution: ["Nuestros", "amigos", "viven", "en", "Sevilla."], distractors: ["Nuestras", "Vuestros"] },
      { type: "order", id: "d12", promptEl: "Πού είναι τα κλειδιά σας; (σε φίλους)", solution: ["¿Dónde", "están", "vuestras", "llaves?"], distractors: ["vuestros", "tus"] },
    ],
    exercisesEl: [
      "Κοίτα τα γενεαλογικά δέντρα και συμπλήρωσε τις προτάσεις με mi, tu, su κ.λπ.",
      "Συμπλήρωσε τις προτάσεις με mi, tu, su κ.λπ.",
      "Κύκλωσε τη σωστή μορφή σε κάθε περίπτωση (κτητικό ή άρθρο).",
    ],
  },
  {
    id: "u18",
    number: 18,
    page: 46,
    titleEs: "Posesivos (2)",
    titleEl: "Κτητικά (2): mío, tuyo, suyo...",
    introEl:
      "Οι τύποι mío, tuyo, suyo, nuestro, vuestro δεν μπαίνουν ποτέ πριν από ουσιαστικό (δεν λέμε «mío coche»). Τους χρησιμοποιούμε μετά το ser, με άρθρο (el mío) ή μετά από ουσιαστικό (un amigo mío).",
    rules: [
      {
        textEl:
          "Με το ser δηλώνουν ιδιοκτησία και συμφωνούν σε γένος και αριθμό με το πράγμα που ανήκει σε κάποιον.",
        examples: [
          { es: "Esta bufanda es mía.", el: "Αυτό το κασκόλ είναι δικό μου." },
          { es: "¿Estos guantes son tuyos?", el: "Αυτά τα γάντια είναι δικά σου;" },
        ],
      },
      {
        textEl:
          "Με άρθρο (el mío, la tuya, los suyos...) αντικαθιστούν το mi, tu, su + ουσιαστικό, ώστε να μην επαναλάβουμε το ουσιαστικό.",
        examples: [
          { es: "Mi casa es pequeña, pero la tuya es muy grande.", el: "Το σπίτι μου είναι μικρό, αλλά το δικό σου είναι πολύ μεγάλο." },
          { es: "Nuestro coche es rojo y el vuestro es azul.", el: "Το αυτοκίνητό μας είναι κόκκινο και το δικό σας μπλε." },
        ],
      },
      {
        textEl:
          "Η σειρά ουσιαστικό + mío, tuyo, suyo... (με un, una, unos, unas ή αριθμό) δείχνει ένα πρόσωπο ή πράγμα ως μέλος μιας ομάδας: «μία από τις φίλες μου».",
        examples: [
          { es: "Una amiga mía vive en Roma.", el: "Μια φίλη μου μένει στη Ρώμη." },
          { es: "Dos primos nuestros trabajan en Londres.", el: "Δύο ξάδερφοί μας δουλεύουν στο Λονδίνο." },
        ],
      },
      {
        textEl:
          "Όλοι οι τύποι συμφωνούν με το ουσιαστικό στο οποίο αναφέρονται: mío, mía, míos, mías. Το suyo σημαίνει «δικός του, της, σας (ευγενικά), τους», και η κατάσταση ξεκαθαρίζει ποιον εννοούμε.",
        examples: [{ es: "Estas maletas son suyas, señora.", el: "Αυτές οι βαλίτσες είναι δικές σας, κυρία." }],
      },
      {
        textEl: "Για να ρωτήσουμε σε ποιον ανήκει κάτι χρησιμοποιούμε ¿De quién es? / ¿De quién son?",
        examples: [
          { es: "¿De quién es este paraguas? Es mío.", el: "Σε ποιον ανήκει αυτή η ομπρέλα; Είναι δική μου." },
          { es: "¿De quién son esos libros? Son de Marta.", el: "Σε ποιον ανήκουν αυτά τα βιβλία; Είναι της Marta." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Τα κτητικά χωρίς ουσιαστικό",
        headers: ["", "Masc. singular", "Fem. singular", "Masc. plural", "Fem. plural"],
        rows: [
          ["yo", "mío", "mía", "míos", "mías"],
          ["tú", "tuyo", "tuya", "tuyos", "tuyas"],
          ["usted, él, ella", "suyo", "suya", "suyos", "suyas"],
          ["nosotros, nosotras", "nuestro", "nuestra", "nuestros", "nuestras"],
          ["vosotros, vosotras", "vuestro", "vuestra", "vuestros", "vuestras"],
          ["ustedes, ellos, ellas", "suyo", "suya", "suyos", "suyas"],
        ],
      },
      {
        titleEl: "Με ουσιαστικό και χωρίς ουσιαστικό",
        headers: ["Con nombre (unidad 17)", "Sin nombre"],
        rows: [
          ["mi coche", "el mío"],
          ["tu casa", "la tuya"],
          ["sus libros", "los suyos"],
          ["nuestras cosas", "las nuestras"],
        ],
      },
    ],
    tipsEl: [
      "Το el mío αντιστοιχεί στο ελληνικό «το δικό μου»: Tu casa es pequeña, la mía es grande = Το σπίτι σου είναι μικρό, το δικό μου είναι μεγάλο.",
      "Μην βάζεις mío, tuyo, suyo πριν από ουσιαστικό: mi coche, όχι «mío coche» και όχι «el mi coche».",
      "Το mío και το mía έχουν τόνο στο í. Τα tuyo και suyo δεν έχουν τόνο.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Este bolígrafo no es ___.", hintEl: "Αυτό το στυλό δεν είναι δικό μου.", answer: "mío" },
      { type: "cloze", id: "d2", textEs: "¿Estas gafas son ___, Ana?", hintEl: "Αυτά τα γυαλιά είναι δικά σου, Ana;", answer: "tuyas", explainEl: "Συμφωνεί με το gafas: θηλυκό πληθυντικού." },
      { type: "cloze", id: "d3", textEs: "Esos zapatos son de Pedro. Son ___.", hintEl: "Αυτά τα παπούτσια είναι του Pedro. Είναι δικά του.", answer: "suyos" },
      { type: "cloze", id: "d4", textEs: "Mi calle es tranquila, ¿y la ___?", hintEl: "Η δική μου οδός είναι ήσυχη, και η δική σου;", answer: "tuya" },
      { type: "cloze", id: "d5", textEs: "Vuestro profesor es español y el ___ es mexicano.", hintEl: "Ο δικός σας καθηγητής είναι Ισπανός και ο δικός μας είναι Μεξικανός.", answer: "nuestro" },
      { type: "cloze", id: "d6", textEs: "Mis llaves están aquí. ¿Dónde están las ___, Marta?", hintEl: "Τα δικά μου κλειδιά είναι εδώ. Πού είναι τα δικά σου, Marta;", answer: "tuyas" },
      { type: "cloze", id: "d7", textEs: "Marcos es un amigo ___.", hintEl: "Ο Marcos είναι ένας φίλος μας.", answer: "nuestro" },
      { type: "choice", id: "d8", promptEs: "¿De quién es este libro? Es ___.", promptEl: "Σε ποιον ανήκει αυτό το βιβλίο; Είναι δικό μου.", options: ["mío", "mi", "mía", "míos"], answer: "mío", explainEl: "Μετά το ser: mío, συμφωνεί με το libro (αρσενικό ενικού)." },
      { type: "choice", id: "d9", promptEs: "Mis hijos son pequeños. ¿Y ___?", promptEl: "Τα δικά μου παιδιά είναι μικρά. Και τα δικά σου;", options: ["los tuyos", "tuyos", "tus", "los tus"], answer: "los tuyos", explainEl: "Χωρίς ουσιαστικό: άρθρο + tuyo (los tuyos = tus hijos)." },
      { type: "choice", id: "d10", promptEs: "Dos primos ___ viven en Chile.", promptEl: "Δύο ξάδερφοί μας μένουν στη Χιλή.", options: ["nuestros", "nuestro", "nuestras", "nuestra"], answer: "nuestros" },
      { type: "order", id: "d11", promptEl: "Αυτή η τσάντα δεν είναι δική μου.", solution: ["Esta", "bolsa", "no", "es", "mía."], distractors: ["mío", "mi"] },
      { type: "order", id: "d12", promptEl: "Ένας συμμαθητής μου σπουδάζει ιατρική.", solution: ["Un", "compañero", "mío", "estudia", "medicina."], distractors: ["mi", "mía"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με mío, tuyo, suyo κ.λπ., όπως στο παράδειγμα, με βάση τις εικόνες.",
      "Συμπλήρωσε τις προτάσεις με el mío, el tuyo, el suyo κ.λπ. ανάλογα με την περίπτωση.",
      "Συμπλήρωσε με mío, tuyo, suyo κ.λπ. και με un, una, unos ή unas όπου χρειάζεται.",
    ],
  },
  {
    id: "u19",
    number: 19,
    page: 48,
    titleEs: "Números cardinales (1)",
    titleEl: "Απόλυτα αριθμητικά (1): από το 0 έως το 29",
    introEl:
      "Εδώ μαθαίνεις τους αριθμούς από το 0 έως το 29. Θα τους χρειαστείς για την ηλικία, την τιμή, την ώρα, την ημερομηνία και τα τηλέφωνα.",
    rules: [
      {
        textEl:
          "Από το 16 έως το 29 οι αριθμοί γράφονται σε μία λέξη. Πρόσεχε τους τόνους: dieciséis, veintidós, veintitrés, veintiséis.",
        examples: [
          { es: "En mi grupo hay dieciséis personas.", el: "Στην ομάδα μου υπάρχουν δεκαέξι άτομα." },
          { es: "Mi hermano tiene veintitrés años.", el: "Ο αδερφός μου είναι είκοσι τριών χρονών." },
        ],
      },
      {
        textEl:
          "Τα uno και veintiuno γίνονται un, veintiún πριν από αρσενικό ουσιαστικό και una, veintiuna πριν από θηλυκό. Χωρίς ουσιαστικό: uno, veintiuno (αρσενικό) και una, veintiuna (θηλυκό).",
        examples: [
          { es: "Tengo un hermano y veintiún primos.", el: "Έχω έναν αδερφό και είκοσι ένα ξαδέρφια." },
          { es: "¿Cuántas alumnas hay? Veintiuna.", el: "Πόσες μαθήτριες υπάρχουν; Είκοσι μία." },
        ],
      },
      {
        textEl:
          "Πριν από θηλυκό ουσιαστικό που αρχίζει με τονιζόμενο a- ή ha-, χρησιμοποιούμε un / veintiún: un águila.",
        examples: [{ es: "He visto un águila en la montaña.", el: "Είδα έναν αετό στο βουνό." }],
      },
      {
        textEl:
          "Οι αριθμοί δηλώνουν ποσότητα, τιμή, μέτρα, ηλικία, ημερομηνία και τηλέφωνα. Στην ημερομηνία χρησιμοποιούμε απόλυτο αριθμητικό (el uno de mayo). Τα τηλέφωνα τα λέμε ψηφίο προς ψηφίο, σε μικρές ομάδες.",
        examples: [
          { es: "Mi cumpleaños es el veinte de abril.", el: "Τα γενέθλιά μου είναι στις είκοσι Απριλίου." },
          { es: "El billete cuesta quince euros.", el: "Το εισιτήριο κοστίζει δεκαπέντε ευρώ." },
          { es: "Mi teléfono es el seis, uno, dos; tres, cuatro; cinco, seis; siete, ocho.", el: "Το τηλέφωνό μου είναι το 612 34 56 78." },
        ],
      },
      {
        textEl:
          "Στις πράξεις λέμε más (συν), menos (πλην), por (επί), entre (διά), και το αποτέλεσμα με το son.",
        examples: [
          { es: "Seis más cinco son once.", el: "Έξι συν πέντε κάνουν έντεκα." },
          { es: "Cuatro por cinco son veinte.", el: "Τέσσερα επί πέντε κάνουν είκοσι." },
          { es: "Veinte entre cuatro son cinco.", el: "Είκοσι διά τέσσερα κάνουν πέντε." },
        ],
      },
      {
        textEl:
          "Η ώρα: Es la una (ενικός), Son las dos, las tres... (πληθυντικός). Προσθέτουμε y diez, y cuarto, y media, menos cuarto, o en punto.",
        examples: [
          { es: "Es la una y diez.", el: "Είναι μία και δέκα." },
          { es: "Son las ocho menos cuarto.", el: "Είναι οκτώ παρά τέταρτο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι αριθμοί 0 έως 21",
        headers: ["Nº", "Palabra", "Nº", "Palabra"],
        rows: [
          ["0", "cero", "11", "once"],
          ["1", "uno / un, una", "12", "doce"],
          ["2", "dos", "13", "trece"],
          ["3", "tres", "14", "catorce"],
          ["4", "cuatro", "15", "quince"],
          ["5", "cinco", "16", "dieciséis"],
          ["6", "seis", "17", "diecisiete"],
          ["7", "siete", "18", "dieciocho"],
          ["8", "ocho", "19", "diecinueve"],
          ["9", "nueve", "20", "veinte"],
          ["10", "diez", "21", "veintiuno / veintiún, veintiuna"],
        ],
      },
      {
        titleEl: "Οι αριθμοί 22 έως 29",
        headers: ["Nº", "Palabra", "Nº", "Palabra"],
        rows: [
          ["22", "veintidós", "26", "veintiséis"],
          ["23", "veintitrés", "27", "veintisiete"],
          ["24", "veinticuatro", "28", "veintiocho"],
          ["25", "veinticinco", "29", "veintinueve"],
        ],
      },
      {
        titleEl: "Η ώρα",
        headers: ["Hora", "Se dice"],
        rows: [
          ["1:00", "la una en punto"],
          ["2:15", "las dos y cuarto"],
          ["6:10", "las seis y diez"],
          ["7:30", "las siete y media"],
          ["8:45", "las nueve menos cuarto"],
        ],
      },
    ],
    tipsEl: [
      "Το uno δουλεύει όπως το ελληνικό «ένας, μία, ένα»: αλλάζει σε γένος. Πριν από αρσενικό γίνεται un: un libro, όχι «uno libro».",
      "Στα ελληνικά η πρώτη του μήνα λέγεται με τακτικό («πρώτη Μαΐου»). Στα ισπανικά συνήθως λέμε el uno de mayo.",
      "Τα dieciséis, veintidós, veintitrés, veintiséis και το veintiún έχουν τόνο. Τα υπόλοιπα (veinticuatro, veintisiete...) δεν έχουν.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi hermana tiene ___ años.", hintEl: "Η αδερφή μου είναι 21 χρονών.", answer: "veintiún", explainEl: "Πριν από αρσενικό ουσιαστικό (años) το veintiuno γίνεται veintiún, με τόνο." },
      { type: "cloze", id: "d2", textEs: "¿Cuántos euros tienes? Tengo ___.", hintEl: "Πόσα ευρώ έχεις; Έχω 21.", answer: "veintiuno", explainEl: "Χωρίς ουσιαστικό χρησιμοποιούμε τον τύπο veintiuno." },
      { type: "cloze", id: "d3", textEs: "En mi clase hay ___ alumnas.", hintEl: "Στην τάξη μου υπάρχουν 21 μαθήτριες.", answer: "veintiuna" },
      { type: "cloze", id: "d4", textEs: "Tres más trece son ___.", hintEl: "3 + 13 = 16", answer: "dieciséis" },
      { type: "cloze", id: "d5", textEs: "Veinte menos siete son ___.", hintEl: "20 πλην 7 κάνουν 13.", answer: "trece" },
      { type: "cloze", id: "d6", textEs: "Mi cumpleaños es el ___ de mayo.", hintEl: "Τα γενέθλιά μου είναι την πρώτη Μαΐου (1).", answer: "uno", alternatives: ["primero"] },
      { type: "cloze", id: "d7", textEs: "Son las ocho ___ cuarto.", hintEl: "Είναι οκτώ παρά τέταρτο (7:45).", answer: "menos" },
      { type: "choice", id: "d8", promptEs: "Hay ___ sillas en la sala.", promptEl: "Υπάρχουν 21 καρέκλες στην αίθουσα.", options: ["veintiún", "veintiuna", "veintiuno", "veintiunas"], answer: "veintiuna" },
      { type: "choice", id: "d9", promptEs: "Hay ___ águila en el árbol.", promptEl: "Υπάρχει ένας αετός στο δέντρο.", options: ["un", "una", "uno"], answer: "un", explainEl: "Το águila είναι θηλυκό, αλλά αρχίζει με τονιζόμενο a-, γι' αυτό λέμε un águila." },
      { type: "choice", id: "d10", promptEs: "¿Cómo se escribe 22?", options: ["veintidós", "veintedós", "veinte y dos", "veintidos"], answer: "veintidós", explainEl: "Μία λέξη, με τόνο στο -dós." },
      { type: "order", id: "d11", promptEl: "Είμαι 23 χρονών.", solution: ["Tengo", "veintitrés", "años."], distractors: ["soy", "veintidós"] },
      { type: "order", id: "d12", promptEl: "Είναι πέντε και μισή.", solution: ["Son", "las", "cinco", "y", "media."], distractors: ["es", "la", "menos"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με τη σωστή μορφή των uno, un, una, veintiuno, veintiún, veintiuna.",
      "Γράψε τους αριθμούς με λέξεις.",
      "Συμπλήρωσε τις πράξεις (πρόσθεση, αφαίρεση, πολλαπλασιασμός, διαίρεση) με λέξεις.",
      "Γράψε με λέξεις τις ώρες που δείχνουν τα ρολόγια.",
      "Γράψε με λέξεις τους αριθμούς τηλεφώνου, όπως στο παράδειγμα.",
    ],
  },
  {
    id: "u20",
    number: 20,
    page: 50,
    titleEs: "Números cardinales (2)",
    titleEl: "Απόλυτα αριθμητικά (2): από το 30 έως το 99",
    introEl:
      "Από το 30 και μετά οι δεκάδες ενώνονται με τις μονάδες με το y και γράφονται χωριστά: treinta y cinco. Οι ίδιοι αριθμοί χρησιμεύουν για ηλικία, τιμή, ώρα και τηλέφωνα.",
    rules: [
      {
        textEl:
          "Δεκάδες: treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa. Από το 31 έως το 99: δεκάδα + y + μονάδα, σε τρεις λέξεις.",
        examples: [
          { es: "Mi madre tiene cincuenta y ocho años.", el: "Η μητέρα μου είναι πενήντα οκτώ χρονών." },
          { es: "El abrigo cuesta setenta y cinco euros.", el: "Το παλτό κοστίζει εβδομήντα πέντε ευρώ." },
        ],
      },
      {
        textEl:
          "Το uno γίνεται un πριν από αρσενικό και una πριν από θηλυκό: cuarenta y un años, cuarenta y una sillas. Χωρίς ουσιαστικό μένει cuarenta y uno.",
        examples: [
          { es: "Mi vecino tiene sesenta y un años.", el: "Ο γείτονάς μου είναι εξήντα ενός χρονών." },
          { es: "En la sala hay treinta y una sillas.", el: "Στην αίθουσα υπάρχουν τριάντα μία καρέκλες." },
        ],
      },
      {
        textEl:
          "Οι υπόλοιποι αριθμοί (dos, tres, cuatro...) δεν αλλάζουν σε γένος, σε αντίθεση με τα ελληνικά (τρεις, τρία).",
        examples: [{ es: "Hay treinta y dos chicos y treinta y dos chicas.", el: "Υπάρχουν τριάντα δύο αγόρια και τριάντα δύο κορίτσια." }],
      },
      {
        textEl:
          "Η ώρα με το 24ωρο: λέμε ώρες και λεπτά, χωρίς y. Το ακούμε σε προγράμματα τρένων, πτήσεων και εκδηλώσεων.",
        examples: [
          { es: "El concierto empieza a las veintiuna treinta.", el: "Η συναυλία ξεκινάει στις 21:30." },
          { es: "El tren sale a las dieciocho veinte.", el: "Το τρένο φεύγει στις 18:20." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε τους αριθμούς για ποσότητα, τιμή, μέτρα, απόσταση, ηλικία και ημερομηνία.",
        examples: [
          { es: "El camping está a cuarenta kilómetros de la playa.", el: "Το κάμπινγκ απέχει σαράντα χιλιόμετρα από την παραλία." },
          { es: "Mi cumpleaños es el treinta de junio.", el: "Τα γενέθλιά μου είναι στις τριάντα Ιουνίου." },
        ],
      },
      {
        textEl:
          "Στα τηλέφωνα λέμε τους αριθμούς σε ομάδες, με δύο ψηφία μαζί όπου γίνεται.",
        examples: [{ es: "93 567 21 48: noventa y tres, cinco, sesenta y siete, veintiuno, cuarenta y ocho.", el: "Το τηλέφωνο 93 567 21 48." }],
      },
    ],
    tables: [
      {
        titleEl: "Οι δεκάδες",
        headers: ["30", "40", "50", "60", "70", "80", "90"],
        rows: [["treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]],
      },
      {
        titleEl: "Παραδείγματα αριθμών",
        headers: ["Nº", "Palabras"],
        rows: [
          ["31", "treinta y uno / treinta y un (+ masc.) / treinta y una (+ fem.)"],
          ["43", "cuarenta y tres"],
          ["54", "cincuenta y cuatro"],
          ["65", "sesenta y cinco"],
          ["76", "setenta y seis"],
          ["87", "ochenta y siete"],
          ["98", "noventa y ocho"],
          ["99", "noventa y nueve"],
        ],
      },
      {
        titleEl: "Η ώρα με το 24ωρο",
        headers: ["Hora", "Se dice"],
        rows: [
          ["14:00", "las catorce horas"],
          ["18:20", "las dieciocho veinte"],
          ["21:45", "las veintiuna cuarenta y cinco"],
          ["22:30", "las veintidós treinta"],
        ],
      },
    ],
    tipsEl: [
      "Από το 31 και μετά γράφουμε τρεις λέξεις (treinta y uno), ενώ από το 16 έως το 29 μία (veintiuno).",
      "Πρόσεξε τα ζευγάρια που μοιάζουν: sesenta (60) και setenta (70), cuarenta (40) και cincuenta (50).",
      "Στην καθημερινή ζωή λέμε την ώρα με 12ωρο (las ocho y media). Το 24ωρο ακούγεται σε ανακοινώσεις και προγράμματα.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi padre tiene cincuenta ___ siete años.", hintEl: "Ο πατέρας μου είναι 57 χρονών.", answer: "y" },
      { type: "cloze", id: "d2", textEs: "Vivo a ___ kilómetros de Madrid.", hintEl: "Μένω 60 χιλιόμετρα από τη Μαδρίτη.", answer: "sesenta" },
      { type: "cloze", id: "d3", textEs: "En mi pueblo hay ___ casas.", hintEl: "Στο χωριό μου υπάρχουν 71 σπίτια.", answer: "setenta y una", explainEl: "Το uno παίρνει θηλυκό πριν από το casas: una." },
      { type: "cloze", id: "d4", textEs: "Rafa tiene ___ años.", hintEl: "Ο Rafa είναι 41 χρονών.", answer: "cuarenta y un", explainEl: "Πριν από αρσενικό ουσιαστικό: un (όχι uno)." },
      { type: "cloze", id: "d5", textEs: "La clase tiene treinta y ___ alumnos.", hintEl: "Η τάξη έχει 31 μαθητές.", answer: "un" },
      { type: "cloze", id: "d6", textEs: "El tren sale a las dieciséis ___.", hintEl: "Το τρένο φεύγει στις 16:40.", answer: "cuarenta" },
      { type: "cloze", id: "d7", textEs: "El teléfono es 91 458 77 10: noventa y uno, cuatro, cincuenta y ocho, ___, diez.", hintEl: "Τα ψηφία 77.", answer: "setenta y siete" },
      { type: "choice", id: "d8", promptEs: "Hay sesenta y ___ sillas en el salón.", promptEl: "Υπάρχουν 61 καρέκλες στο σαλόνι.", options: ["un", "una", "uno", "unas"], answer: "una" },
      { type: "choice", id: "d9", promptEs: "Mi madre tiene cincuenta y ___ años.", promptEl: "Η μητέρα μου είναι 51 χρονών.", options: ["un", "una", "uno", "unos"], answer: "un" },
      { type: "choice", id: "d10", promptEs: "¿Cómo se dice 76?", options: ["setenta y seis", "sesenta y siete", "setenta y siete", "sesenta y seis"], answer: "setenta y seis", explainEl: "Πρόσεξε: sesenta = 60 και setenta = 70." },
      { type: "order", id: "d11", promptEl: "Είμαι 42 χρονών.", solution: ["Tengo", "cuarenta", "y", "dos", "años."], distractors: ["soy", "treinta"] },
      { type: "order", id: "d12", promptEl: "Το τρένο φεύγει στις 17:30.", solution: ["El", "tren", "sale", "a", "las", "diecisiete", "treinta."], distractors: ["son", "veinte"], alternatives: [["A", "las", "diecisiete", "treinta", "sale", "el", "tren."]] },
    ],
    exercisesEl: [
      "Γράψε με λέξεις τους αριθμούς που βρίσκονται σε παρένθεση (31, 41, 51...).",
      "Γράψε με λέξεις τους αριθμούς μαζί με τις μονάδες μέτρησης.",
      "Γράψε με λέξεις τις ώρες που δείχνουν τα ρολόγια.",
      "Γράψε με λέξεις τα τηλέφωνα, όπως στο παράδειγμα.",
    ],
  },
  {
    id: "u21",
    number: 21,
    page: 52,
    titleEs: "Números cardinales (3)",
    titleEl: "Απόλυτα αριθμητικά (3): από το 100 και πάνω",
    introEl:
      "Εδώ μαθαίνεις τους αριθμούς από το 100 μέχρι τα δισεκατομμύρια: cien, ciento, doscientos, mil, un millón. Θα δεις επίσης πώς λέμε τις χρονιές και τις ημερομηνίες.",
    rules: [
      {
        textEl:
          "Το 100 είναι cien όταν είναι μόνο του, πριν από ουσιαστικό και πριν από mil ή millones. Από το 101 έως το 199 γίνεται ciento: ciento uno, ciento veinte.",
        examples: [
          { es: "En la fiesta hay cien personas.", el: "Στο πάρτι υπάρχουν εκατό άτομα." },
          { es: "El billete cuesta ciento veinte euros.", el: "Το εισιτήριο κοστίζει εκατόν είκοσι ευρώ." },
          { es: "Mi coche costó cien mil pesos.", el: "Το αυτοκίνητό μου κόστισε εκατό χιλιάδες πέσος." },
        ],
      },
      {
        textEl:
          "Οι εκατοντάδες doscientos ... novecientos αλλάζουν σε γένος (doscientos euros, doscientas personas). Τρεις είναι ανώμαλες: quinientos (500), setecientos (700), novecientos (900).",
        examples: [
          { es: "Hay trescientas sillas en el teatro.", el: "Στο θέατρο υπάρχουν τριακόσιες καρέκλες." },
          { es: "Necesito quinientos gramos de harina.", el: "Χρειάζομαι πεντακόσια γραμμάρια αλεύρι." },
        ],
      },
      {
        textEl:
          "Το mil δεν αλλάζει ποτέ και δεν παίρνει un: mil, dos mil, cien mil. Το y μπαίνει μόνο ανάμεσα στις δεκάδες και τις μονάδες (31 έως 99), ποτέ μετά τις εκατοντάδες ή τις χιλιάδες.",
        examples: [
          { es: "Este piso mide ciento treinta y cinco metros cuadrados.", el: "Αυτό το διαμέρισμα έχει εκατόν τριάντα πέντε τετραγωνικά μέτρα." },
          { es: "La entrada cuesta dos mil quinientos pesos.", el: "Η είσοδος κοστίζει δύο χιλιάδες πεντακόσια πέσος." },
        ],
      },
      {
        textEl:
          "Το millón είναι ουσιαστικό: un millón, dos millones. Πριν από ουσιαστικό παίρνει de: un millón de euros. Αν ακολουθεί άλλος αριθμός, δεν παίρνει de.",
        examples: [
          { es: "En esta región viven tres millones de personas.", el: "Σε αυτή την περιοχή ζουν τρία εκατομμύρια άνθρωποι." },
          { es: "El proyecto cuesta un millón doscientos mil euros.", el: "Το έργο κοστίζει ένα εκατομμύριο διακόσιες χιλιάδες ευρώ." },
        ],
      },
      {
        textEl:
          "Τα έτη διαβάζονται ως ένας αριθμός: 1989 = mil novecientos ochenta y nueve, 2002 = dos mil dos. Η ημερομηνία είναι el + αριθμός + de + μήνας + de + έτος.",
        examples: [
          { es: "Nací en mil novecientos noventa y dos.", el: "Γεννήθηκα το 1992." },
          { es: "La boda es el veinte de junio de dos mil veintisiete.", el: "Ο γάμος είναι στις 20 Ιουνίου του 2027." },
        ],
      },
      {
        textEl: "Τους μεγάλους αριθμούς τους χρησιμοποιούμε για ποσότητες, τιμές, μέτρα, αποστάσεις και ηλικία.",
        examples: [
          { es: "De Atenas a Salónica hay unos quinientos kilómetros.", el: "Από την Αθήνα στη Θεσσαλονίκη υπάρχουν περίπου πεντακόσια χιλιόμετρα." },
          { es: "Mi abuela tiene noventa y cinco años.", el: "Η γιαγιά μου είναι ενενήντα πέντε χρονών." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι εκατοντάδες",
        headers: ["Nº", "Masculino", "Femenino"],
        rows: [
          ["100", "cien", "cien"],
          ["101", "ciento uno / ciento un", "ciento una"],
          ["200", "doscientos", "doscientas"],
          ["300", "trescientos", "trescientas"],
          ["400", "cuatrocientos", "cuatrocientas"],
          ["500", "quinientos", "quinientas"],
          ["600", "seiscientos", "seiscientas"],
          ["700", "setecientos", "setecientas"],
          ["800", "ochocientos", "ochocientas"],
          ["900", "novecientos", "novecientas"],
        ],
      },
      {
        titleEl: "Χιλιάδες και εκατομμύρια",
        headers: ["Nº", "Palabras"],
        rows: [
          ["1 000", "mil"],
          ["2 000", "dos mil"],
          ["10 000", "diez mil"],
          ["100 000", "cien mil"],
          ["1 000 000", "un millón"],
          ["2 000 000", "dos millones"],
          ["200 000 000", "doscientos millones"],
          ["1 000 000 000", "mil millones"],
        ],
      },
      {
        titleEl: "Σύνθετοι αριθμοί",
        headers: ["Nº", "Palabras"],
        rows: [
          ["345", "trescientos cuarenta y cinco"],
          ["1 250", "mil doscientos cincuenta"],
          ["16 780", "dieciséis mil setecientos ochenta"],
          ["3 200 000", "tres millones doscientos mil"],
        ],
      },
    ],
    tipsEl: [
      "Τα 500, 700 και 900 είναι ανώμαλα: quinientos (όχι «cincocientos»), setecientos (όχι «sietecientos»), novecientos (όχι «nuevecientos»). Μαθαίνονται απέξω.",
      "Το millón είναι ουσιαστικό και παίρνει de: un millón de euros. Στα ελληνικά δεν υπάρχει αντίστοιχο «de»: λέμε απλώς «ένα εκατομμύριο ευρώ».",
      "Το ισπανικό mil millones είναι το ελληνικό δισεκατομμύριο. Προσοχή: το ισπανικό billón σημαίνει 10^12 (τρισεκατομμύριο), όχι δισεκατομμύριο.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "En el estadio hay ___ personas.", hintEl: "Στο γήπεδο υπάρχουν 100 άτομα.", answer: "cien" },
      { type: "cloze", id: "d2", textEs: "Esta bici cuesta ___ euros.", hintEl: "Αυτό το ποδήλατο κοστίζει 150 ευρώ.", answer: "ciento cincuenta" },
      { type: "cloze", id: "d3", textEs: "En la sala hay ___ sillas.", hintEl: "Στην αίθουσα υπάρχουν 300 καρέκλες.", answer: "trescientas", explainEl: "Οι εκατοντάδες συμφωνούν σε γένος με το ουσιαστικό: sillas είναι θηλυκό." },
      { type: "cloze", id: "d4", textEs: "Quiero ___ gramos de queso.", hintEl: "Θέλω 500 γραμμάρια τυρί.", answer: "quinientos", explainEl: "Το 500 είναι ανώμαλο: quinientos." },
      { type: "cloze", id: "d5", textEs: "Mi ciudad tiene un millón ___ habitantes.", hintEl: "Η πόλη μου έχει ένα εκατομμύριο κατοίκους.", answer: "de", explainEl: "Το millón παίρνει de πριν από ουσιαστικό." },
      { type: "cloze", id: "d6", textEs: "La biblioteca tiene ___ libros.", hintEl: "Η βιβλιοθήκη έχει 2.000 βιβλία.", answer: "dos mil" },
      { type: "cloze", id: "d7", textEs: "Nací en mil novecientos ___.", hintEl: "Γεννήθηκα το 1995.", answer: "noventa y cinco" },
      { type: "cloze", id: "d8", textEs: "Hoy es el cuatro de marzo de ___ veintiséis.", hintEl: "Σήμερα είναι 4 Μαρτίου 2026.", answer: "dos mil" },
      { type: "choice", id: "d9", promptEs: "Esta moto cuesta ___ euros.", promptEl: "Αυτή η μοτοσικλέτα κοστίζει 900 ευρώ.", options: ["novecientos", "nuevecientos", "noventa cientos", "novecientas"], answer: "novecientos", explainEl: "Το 900 είναι ανώμαλο: novecientos. Το euros είναι αρσενικό." },
      { type: "choice", id: "d10", promptEs: "Han venido ___ personas.", promptEl: "Ήρθαν 200 άτομα.", options: ["doscientas", "doscientos", "dos cientas", "dos cientos"], answer: "doscientas", explainEl: "Οι εκατοντάδες γράφονται σε μία λέξη και συμφωνούν σε γένος: personas, άρα doscientas." },
      { type: "choice", id: "d11", promptEs: "¿Cómo se dice 101?", options: ["ciento uno", "cien uno", "ciento y uno", "cien y uno"], answer: "ciento uno", explainEl: "Από το 101 έως το 199 χρησιμοποιούμε ciento, χωρίς y." },
      { type: "order", id: "d12", promptEl: "Το σπίτι μου κοστίζει διακόσιες χιλιάδες ευρώ.", solution: ["Mi", "casa", "cuesta", "doscientos", "mil", "euros."], distractors: ["doscientas", "miles"] },
    ],
    exercisesEl: [
      "Γράψε με ψηφία τους αριθμούς που δίνονται με λέξεις.",
      "Γράψε με λέξεις τους αριθμούς.",
      "Γράψε με λέξεις τις τιμές, σε διάφορα νομίσματα.",
      "Συμπλήρωσε τις προτάσεις με τους αριθμούς που βρίσκονται σε παρένθεση.",
      "Γράψε με λέξεις τις ημερομηνίες που δείχνουν τα ημερολόγια.",
    ],
  },
  {
    id: "u22",
    number: 22,
    page: 54,
    titleEs: "Números ordinales",
    titleEl: "Τακτικά αριθμητικά",
    introEl:
      "Τα primero, segundo, tercero... δείχνουν τη σειρά σε μια κατάταξη ή μια ακολουθία: όροφος, θέση σε αγώνα, κεφάλαιο, βασιλιάς. Στα ισπανικά χρησιμοποιούνται κυρίως μέχρι το δέκατο.",
    rules: [
      {
        textEl:
          "Οι μορφές είναι: primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. Γράφονται και 1.º, 2.º (αρσενικό) ή 1.ª, 2.ª (θηλυκό).",
        examples: [
          { es: "Es mi segundo año en Madrid.", el: "Είναι ο δεύτερος χρόνος μου στη Μαδρίτη." },
          { es: "Es la cuarta vez que viajo a Chile.", el: "Είναι η τέταρτη φορά που ταξιδεύω στη Χιλή." },
        ],
      },
      {
        textEl:
          "Πριν από αρσενικό ουσιαστικό ενικού τα primero και tercero γίνονται primer και tercer.",
        examples: [
          { es: "Este es mi primer viaje a España.", el: "Αυτό είναι το πρώτο μου ταξίδι στην Ισπανία." },
          { es: "Hoy es el tercer día del curso.", el: "Σήμερα είναι η τρίτη μέρα του μαθήματος." },
        ],
      },
      {
        textEl:
          "Τα τακτικά συμφωνούν σε γένος και αριθμό με το ουσιαστικό και μπαίνουν συνήθως πριν από αυτό. Μπορούν και να σταθούν μόνα τους, όταν είναι σαφές το ουσιαστικό.",
        examples: [
          { es: "Vivo en la tercera calle a la derecha.", el: "Μένω στον τρίτο δρόμο δεξιά." },
          { es: "¿Qué capítulo lees? El quinto.", el: "Ποιο κεφάλαιο διαβάζεις; Το πέμπτο." },
        ],
      },
      {
        textEl:
          "Με κύρια ονόματα (βασιλιάδες, πάπες) το τακτικό μπαίνει μετά το όνομα και γράφεται συνήθως με ρωμαϊκό αριθμό. Μέχρι το 10 διαβάζεται ως τακτικό.",
        examples: [
          { es: "Felipe II fue rey de España.", el: "Ο Φίλιππος Β΄ ήταν βασιλιάς της Ισπανίας." },
          { es: "Alfonso X fue un rey sabio.", el: "Ο Αλφόνσος Ι΄ ήταν ένας σοφός βασιλιάς." },
        ],
      },
      {
        textEl:
          "Από το 11.º και μετά χρησιμοποιούμε συνήθως απόλυτα αριθμητικά, και για ορόφους, αιώνες και βασιλιάδες. Τα ρωμαϊκά διαβάζονται κι αυτά ως απόλυτα μετά το 10.",
        examples: [
          { es: "Mi oficina está en la planta doce.", el: "Το γραφείο μου είναι στον 12ο όροφο." },
          { es: "Luis XIV (Luis catorce) fue rey de Francia.", el: "Ο Λουδοβίκος ΙΔ΄ ήταν βασιλιάς της Γαλλίας." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Τα τακτικά 1 έως 10",
        headers: ["Nº", "Masculino", "Femenino"],
        rows: [
          ["1.º / 1.ª", "primero (primer)", "primera"],
          ["2.º / 2.ª", "segundo", "segunda"],
          ["3.º / 3.ª", "tercero (tercer)", "tercera"],
          ["4.º / 4.ª", "cuarto", "cuarta"],
          ["5.º / 5.ª", "quinto", "quinta"],
          ["6.º / 6.ª", "sexto", "sexta"],
          ["7.º / 7.ª", "séptimo", "séptima"],
          ["8.º / 8.ª", "octavo", "octava"],
          ["9.º / 9.ª", "noveno", "novena"],
          ["10.º / 10.ª", "décimo", "décima"],
        ],
      },
      {
        titleEl: "Ρωμαϊκοί αριθμοί: πώς διαβάζονται",
        headers: ["Escrito", "Se lee"],
        rows: [
          ["Felipe II", "Felipe segundo"],
          ["Carlos III", "Carlos tercero"],
          ["Capítulo VI", "capítulo sexto"],
          ["Luis XIV", "Luis catorce"],
          ["Siglo XXI", "siglo veintiuno"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «20ός αιώνας» και «15ος όροφος» με τακτικό. Στα ισπανικά από το 11 και μετά χρησιμοποιούμε απόλυτο: el piso quince, el siglo veinte.",
      "Πριν από αρσενικό ενικού: el primer día, el tercer piso (όχι «el primero día»). Στο θηλυκό δεν αλλάζει: la primera planta.",
      "Planta baja είναι το ισόγειο. Ο primer piso είναι ο όροφος πάνω από το ισόγειο, όπως ο ελληνικός 1ος όροφος.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Vivo en el ___ piso.", hintEl: "Μένω στον τρίτο όροφο.", answer: "tercer", explainEl: "Πριν από αρσενικό ενικού το tercero γίνεται tercer." },
      { type: "cloze", id: "d2", textEs: "Mi oficina está en la ___ planta.", hintEl: "Το γραφείο μου είναι στον δεύτερο όροφο.", answer: "segunda" },
      { type: "cloze", id: "d3", textEs: "Es mi ___ día en la oficina.", hintEl: "Είναι η πρώτη μου μέρα στο γραφείο.", answer: "primer" },
      { type: "cloze", id: "d4", textEs: "Octubre es el ___ mes del año.", hintEl: "Ο Οκτώβριος είναι ο δέκατος μήνας του χρόνου.", answer: "décimo" },
      { type: "cloze", id: "d5", textEs: "Carlos acabó ___ en la carrera.", hintEl: "Ο Carlos τερμάτισε πέμπτος στον αγώνα.", answer: "quinto" },
      { type: "cloze", id: "d6", textEs: "Ana es la ___ de cinco hermanas.", hintEl: "Η Ana είναι η τρίτη από πέντε αδερφές.", answer: "tercera" },
      { type: "cloze", id: "d7", textEs: "Vivo en el piso ___.", hintEl: "Μένω στον 14ο όροφο.", answer: "catorce", explainEl: "Μετά το 10 χρησιμοποιούμε απόλυτο αριθμητικό." },
      { type: "cloze", id: "d8", textEs: "Estamos en el siglo ___.", hintEl: "Είμαστε στον 21ο αιώνα.", answer: "veintiuno", alternatives: ["XXI"] },
      { type: "choice", id: "d9", promptEs: "Es el ___ edificio de la calle.", promptEl: "Είναι το τρίτο κτίριο του δρόμου.", options: ["tercer", "tercero", "tercera", "tres"], answer: "tercer" },
      { type: "choice", id: "d10", promptEs: "Felipe II se lee:", options: ["Felipe segundo", "Felipe dos", "Felipe segunda", "Felipe doce"], answer: "Felipe segundo", explainEl: "Με βασιλιάδες το τακτικό μπαίνει μετά το όνομα." },
      { type: "choice", id: "d11", promptEs: "Las ___ filas están ocupadas.", promptEl: "Οι πρώτες σειρές είναι κατειλημμένες.", options: ["primeras", "primeros", "primer", "primero"], answer: "primeras" },
      { type: "order", id: "d12", promptEl: "Το γραφείο μου είναι στον δεύτερο όροφο.", solution: ["Mi", "oficina", "está", "en", "el", "segundo", "piso."], distractors: ["segunda", "dos"] },
    ],
    exercisesEl: [
      "Κοίτα τις εικόνες και συμπλήρωσε τις προτάσεις με τα σωστά τακτικά αριθμητικά.",
      "Γράψε με λέξεις τα ονόματα των προσώπων (βασιλιάδες, πάπες κ.λπ.) που γράφονται με ρωμαϊκούς αριθμούς.",
      "Γράψε με λέξεις τους αριθμούς που βρίσκονται σε παρένθεση.",
      "Γράψε με τακτικά ή ρωμαϊκά ψηφία τις λέξεις που δίνονται.",
    ],
  },
  {
    id: "u23",
    number: 23,
    page: 56,
    titleEs: "Indefinidos (1)",
    titleEl: "Αόριστα (1): todo, toda, todos, todas",
    introEl:
      "Τα todo, toda, todos, todas σημαίνουν «όλος, όλη, όλοι, όλες» και δηλώνουν το σύνολο. Στα ισπανικά μετά το todo μπαίνει συνήθως άρθρο, κτητικό ή δεικτική αντωνυμία.",
    rules: [
      {
        textEl:
          "Todo / toda + el, la, mi, tu... ή este, esa... + ουσιαστικό ενικού = ολόκληρο το πράγμα ή το σύνολο ενός πράγματος.",
        examples: [
          { es: "Estuve en la playa todo el domingo.", el: "Ήμουν στην παραλία όλη την Κυριακή." },
          { es: "Toda mi ropa está en la maleta.", el: "Όλα μου τα ρούχα είναι στη βαλίτσα." },
          { es: "He leído toda esa novela.", el: "Διάβασα ολόκληρο εκείνο το μυθιστόρημα." },
        ],
      },
      {
        textEl:
          "Todos / todas + los, las, mis, tus... ή estos, esas... + ουσιαστικό πληθυντικού = όλα τα μέλη μιας ομάδας, ή «κάθε» με χρονικές εκφράσεις.",
        examples: [
          { es: "Todos mis primos hablan inglés.", el: "Όλοι μου οι ξάδερφοι μιλούν αγγλικά." },
          { es: "Todas las tiendas cierran a las ocho.", el: "Όλα τα καταστήματα κλείνουν στις οκτώ." },
          { es: "Voy a la piscina todos los sábados.", el: "Πηγαίνω στην πισίνα κάθε Σάββατο." },
        ],
      },
      {
        textEl:
          "Πρόσεξε τη διαφορά: todo el día σημαίνει όλη μέρα, χωρίς διακοπή, ενώ todos los días σημαίνει κάθε μέρα.",
        examples: [
          { es: "Hoy trabajo todo el día.", el: "Σήμερα δουλεύω όλη μέρα." },
          { es: "Hago deporte todos los días.", el: "Κάνω άθληση κάθε μέρα." },
        ],
      },
      {
        textEl: "Το todo μόνο του σημαίνει «όλα» (όλα τα πράγματα).",
        examples: [
          { es: "Aquí todo es muy caro.", el: "Εδώ όλα είναι πολύ ακριβά." },
          { es: "Me gusta todo de esta ciudad.", el: "Μου αρέσουν όλα σε αυτή την πόλη." },
        ],
      },
      {
        textEl:
          "Todo el mundo σημαίνει «όλοι» και παίρνει ρήμα στον ενικό. Τα todos / todas παίρνουν ρήμα στον πληθυντικό.",
        examples: [
          { es: "Todo el mundo conoce a Messi.", el: "Όλος ο κόσμος ξέρει τον Messi." },
          { es: "Todos queremos vacaciones.", el: "Όλοι θέλουμε διακοπές." },
          { es: "En mi clase todas somos mujeres.", el: "Στην τάξη μου είμαστε όλες γυναίκες." },
        ],
      },
      {
        textEl:
          "Τα todos / todas μπορούν να σταθούν και χωρίς ουσιαστικό, όταν ξέρουμε σε ποιους αναφερόμαστε.",
        examples: [{ es: "Tengo cinco hermanas y todas viven en Atenas.", el: "Έχω πέντε αδερφές και όλες μένουν στην Αθήνα." }],
      },
    ],
    tables: [
      {
        titleEl: "Todo με άρθρο, κτητικό ή δεικτική αντωνυμία",
        headers: ["", "Singular", "Plural"],
        rows: [
          ["Masculino", "todo el verano, todo tu trabajo, todo ese pan", "todos los veranos, todos tus amigos, todos esos pasteles"],
          ["Femenino", "toda la mañana, toda mi ropa, toda esa leche", "todas las mañanas, todas mis camisas, todas esas casas"],
        ],
      },
      {
        titleEl: "Todo, todos, todo el mundo",
        headers: ["Expresión", "Significado", "Verbo"],
        rows: [
          ["todo", "όλα (τα πράγματα)", "singular: Todo está bien."],
          ["todo el mundo", "όλοι (οι άνθρωποι)", "singular: Todo el mundo canta."],
          ["todos / todas", "όλοι / όλες", "plural: Todos cantamos."],
        ],
      },
    ],
    tipsEl: [
      "Το «κάθε μέρα» είναι todos los días (πληθυντικός), ενώ το «όλη μέρα» είναι todo el día (ενικός). Το «κάθε Δευτέρα» είναι todos los lunes.",
      "Μην ξεχνάς το άρθρο: todo el día, toda la noche (όχι «todo día», «toda noche»).",
      "Στα ελληνικά λέμε «όλοι είναι» (πληθυντικός), αλλά στα ισπανικά το todo el mundo παίρνει ρήμα στον ενικό: todo el mundo es feliz.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "He trabajado ___ el día.", hintEl: "Δούλεψα όλη μέρα.", answer: "todo" },
      { type: "cloze", id: "d2", textEs: "___ mi familia vive en Atenas.", hintEl: "Όλη μου η οικογένεια μένει στην Αθήνα.", answer: "Toda" },
      { type: "cloze", id: "d3", textEs: "Voy al gimnasio ___ los lunes.", hintEl: "Πηγαίνω στο γυμναστήριο κάθε Δευτέρα.", answer: "todos", explainEl: "«Κάθε Δευτέρα» είναι todos los lunes (πληθυντικός)." },
      { type: "cloze", id: "d4", textEs: "Me gustan ___ las canciones de ese grupo.", hintEl: "Μου αρέσουν όλα τα τραγούδια αυτού του συγκροτήματος.", answer: "todas" },
      { type: "cloze", id: "d5", textEs: "Tengo cuatro primas y ___ viven en Chile.", hintEl: "Έχω τέσσερις ξαδέρφες και όλες μένουν στη Χιλή.", answer: "todas" },
      { type: "cloze", id: "d6", textEs: "___ el mundo conoce a Shakira.", hintEl: "Όλος ο κόσμος ξέρει τη Shakira.", answer: "Todo" },
      { type: "cloze", id: "d7", textEs: "Nosotros ___ somos estudiantes.", hintEl: "Όλοι εμείς είμαστε φοιτητές.", answer: "todos", explainEl: "Το nosotros είναι αρσενικό, άρα todos. Για ομάδα μόνο από γυναίκες θα λέγαμε nosotras todas." },
      { type: "choice", id: "d8", promptEs: "He dormido ___ la noche.", promptEl: "Κοιμήθηκα όλη τη νύχτα.", options: ["toda", "todo", "todos", "todas"], answer: "toda" },
      { type: "choice", id: "d9", promptEs: "___ esos libros son de la biblioteca.", promptEl: "Όλα εκείνα τα βιβλία είναι της βιβλιοθήκης.", options: ["Todos", "Todo", "Toda", "Todas"], answer: "Todos" },
      { type: "choice", id: "d10", promptEs: "Lo sé ___.", promptEl: "Τα ξέρω όλα.", options: ["todo", "toda", "todos", "todo el"], answer: "todo", explainEl: "Όταν σημαίνει «όλα τα πράγματα», χρησιμοποιούμε todo." },
      { type: "choice", id: "d11", promptEs: "Todo el mundo ___ contento.", promptEl: "Όλοι είναι ευχαριστημένοι.", options: ["está", "están", "estamos", "estáis"], answer: "está", explainEl: "Το todo el mundo παίρνει ρήμα στον ενικό." },
      { type: "order", id: "d12", promptEl: "Όλη μου η οικογένεια μιλάει ελληνικά.", solution: ["Toda", "mi", "familia", "habla", "griego."], distractors: ["Todo", "hablan"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με todo, toda, todos ή todas.",
      "Συμπλήρωσε τις προτάσεις με todo, toda, todos, todas, το άρθρο και μια λέξη από το πλαίσιο.",
      "Συμπλήρωσε τις προτάσεις με todos ή todas και με mi, tu, su κ.λπ.",
      "Συμπλήρωσε τις προτάσεις με todo, toda, todos ή todas, όταν δεν ακολουθεί ουσιαστικό.",
      "Συμπλήρωσε τις προτάσεις με todo, todos, todas ή todo el mundo.",
    ],
  },
  {
    id: "u24",
    number: 24,
    page: 58,
    titleEs: "Indefinidos (2)",
    titleEl: "Αόριστα (2): un, otro",
    introEl:
      "Τα un, una, unos, unas δηλώνουν κάτι αόριστο, που δεν προσδιορίζουμε. Τα otro, otra, otros, otras σημαίνουν «άλλος»: ένα ακόμη ή ένα διαφορετικό.",
    rules: [
      {
        textEl:
          "Τα un, una μιλούν για ένα στοιχείο που δεν προσδιορίζουμε. Τα unos, unas δηλώνουν αόριστη ταυτότητα και ποσότητα: «μερικοί, κάποιοι».",
        examples: [
          { es: "Necesito un teléfono nuevo.", el: "Χρειάζομαι ένα καινούριο τηλέφωνο." },
          { es: "Mañana ceno con unos compañeros de trabajo.", el: "Αύριο δειπνώ με μερικούς συναδέλφους." },
        ],
      },
      {
        textEl:
          "Τα otro, otra, otros, otras σημαίνουν είτε «ακόμη ένα» του ίδιου είδους, είτε «ένα διαφορετικό».",
        examples: [
          { es: "Quiero otro vaso de agua.", el: "Θέλω ακόμη ένα ποτήρι νερό." },
          { es: "Este jersey no me gusta. ¿Tiene otro?", el: "Δεν μου αρέσει αυτό το πουλόβερ. Έχετε άλλο;" },
        ],
      },
      {
        textEl:
          "Το otro συμφωνεί σε γένος και αριθμό με το ουσιαστικό και δεν παίρνει ποτέ un μπροστά του. Με αριθμό: otros dos, otras tres.",
        examples: [
          { es: "Necesito otro lápiz.", el: "Χρειάζομαι ένα άλλο μολύβι." },
          { es: "Quiero otros dos billetes.", el: "Θέλω άλλα δύο εισιτήρια." },
        ],
      },
      {
        textEl:
          "Όταν δεν υπάρχει ουσιαστικό, λέμε uno (όχι un), una, unos, unas, otro, otra, otros, otras.",
        examples: [
          { es: "No tengo paraguas. ¿Tienes uno?", el: "Δεν έχω ομπρέλα. Έχεις μία;" },
          { es: "Estas sillas son incómodas. Busco otras.", el: "Αυτές οι καρέκλες είναι άβολες. Ψάχνω άλλες." },
        ],
      },
      {
        textEl:
          "El otro día, la otra tarde, la otra noche αναφέρονται σε μια πρόσφατη στιγμή του παρελθόντος. Χωρίς άρθρο, otro día σημαίνει «κάποια άλλη μέρα».",
        examples: [
          { es: "El otro día vi una película muy buena.", el: "Τις προάλλες είδα μια πολύ καλή ταινία." },
          { es: "Hoy no puedo, pero podemos vernos otro día.", el: "Σήμερα δεν μπορώ, αλλά μπορούμε να βρεθούμε άλλη μέρα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Un και otro",
        headers: ["", "Masc. singular", "Fem. singular", "Masc. plural", "Fem. plural"],
        rows: [
          ["un... (con nombre)", "un libro", "una casa", "unos libros", "unas casas"],
          ["uno... (sin nombre)", "uno", "una", "unos", "unas"],
          ["otro (con nombre)", "otro libro", "otra casa", "otros libros", "otras casas"],
          ["otro (sin nombre)", "otro", "otra", "otros", "otras"],
        ],
      },
      {
        titleEl: "Εκφράσεις με otro",
        headers: ["Expresión", "Significado"],
        rows: [
          ["otro día", "κάποια άλλη μέρα"],
          ["el otro día", "τις προάλλες (στο παρελθόν)"],
          ["otra vez", "ξανά, άλλη μία φορά"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το «άλλος» και το «ακόμη ένας» είναι ξεχωριστές εκφράσεις. Στα ισπανικά το otro καλύπτει και τα δύο: otro café = ακόμη ένας καφές ή ένας διαφορετικός καφές.",
      "Μην πεις «un otro» ή «uno otro»: μόνο otro, otra, otros, otras.",
      "Όταν δεν υπάρχει ουσιαστικό, το un γίνεται uno: Tengo un coche, αλλά ¿Tienes uno?",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "No tengo coche, pero mi hermano tiene ___.", hintEl: "Δεν έχω αυτοκίνητο, αλλά ο αδερφός μου έχει ένα.", answer: "uno", explainEl: "Χωρίς ουσιαστικό το un γίνεται uno." },
      { type: "cloze", id: "d2", textEs: "El ___ día vi a tu hermana en el mercado.", hintEl: "Τις προάλλες είδα την αδερφή σου στην αγορά.", answer: "otro" },
      { type: "cloze", id: "d3", textEs: "Necesitamos ___ dos sillas.", hintEl: "Χρειαζόμαστε άλλες δύο καρέκλες.", answer: "otras", explainEl: "Το otro πηγαίνει πριν από τον αριθμό και συμφωνεί με το ουσιαστικό: otras dos sillas." },
      { type: "cloze", id: "d4", textEs: "Tengo dos hermanos en Madrid y ___ dos en Berlín.", hintEl: "Έχω δύο αδέρφια στη Μαδρίτη και άλλους δύο στο Βερολίνο.", answer: "otros" },
      { type: "cloze", id: "d5", textEs: "No tengo bolígrafo. ¿Tienes ___?", hintEl: "Δεν έχω στυλό. Έχεις ένα;", answer: "uno" },
      { type: "choice", id: "d6", promptEs: "Esta tarde juego al fútbol con ___ amigos.", promptEl: "Σήμερα το απόγευμα παίζω ποδόσφαιρο με μερικούς φίλους.", options: ["unos", "uno", "un", "una"], answer: "unos" },
      { type: "choice", id: "d7", promptEs: "Este libro es aburrido. Dame ___ libro.", promptEl: "Αυτό το βιβλίο είναι βαρετό. Δώσε μου ένα άλλο βιβλίο.", options: ["otro", "otra", "otros", "un otro"], answer: "otro", explainEl: "Δεν λέμε «un otro»: το otro δεν παίρνει un μπροστά του." },
      { type: "choice", id: "d8", promptEs: "Hoy no puedo. Vamos ___ día.", promptEl: "Σήμερα δεν μπορώ. Ας πάμε κάποια άλλη μέρα.", options: ["otro", "otra", "otros", "uno"], answer: "otro" },
      { type: "choice", id: "d9", promptEs: "La ___ tarde estuve con Lola.", promptEl: "Τις προάλλες το απόγευμα ήμουν με τη Lola.", options: ["otra", "otro", "otras", "una"], answer: "otra", explainEl: "Tarde είναι θηλυκό: la otra tarde." },
      { type: "choice", id: "d10", promptEs: "Estas galletas están muy buenas. Coge ___.", promptEl: "Αυτά τα μπισκότα είναι πολύ καλά. Πάρε κι άλλο ένα.", options: ["otra", "otro", "un otra", "una otra"], answer: "otra" },
      { type: "order", id: "d11", promptEl: "Θέλω ακόμη έναν καφέ, παρακαλώ.", solution: ["Quiero", "otro", "café,", "por", "favor."], distractors: ["un", "otra"] },
      { type: "order", id: "d12", promptEl: "Χθες γνώρισα μερικές πολύ συμπαθητικές κοπέλες.", solution: ["Ayer", "conocí", "a", "unas", "chicas", "muy", "simpáticas."], distractors: ["otras", "unos"], alternatives: [["Conocí", "a", "unas", "chicas", "muy", "simpáticas", "ayer."]] },
    ],
    exercisesEl: [
      "Κοίτα τις εικόνες και συμπλήρωσε τις προτάσεις με un, uno, unos, unas ή otro, otra, otros, otras.",
      "Συμπλήρωσε τις προτάσεις με un, uno, unos, unas ή otro, otra, otros, otras.",
      "Συμπλήρωσε τις προτάσεις με uno, una, unos, unas ή otro, otra, otros, otras, όταν δεν ακολουθεί ουσιαστικό.",
      "Συμπλήρωσε τις προτάσεις με otro, otra και με el, la όπου χρειάζεται.",
    ],
  },
];
