import type { GuUnit } from "@/types/content";

/**
 * Gramática de uso del español (Aragonés y Palencia), units 61 to 72.
 * Forms and rules follow the book (facts); every example, drill and explanation is original.
 */
export const guUnits061To072: GuUnit[] = [
  {
    id: "u61",
    number: 61,
    page: 132,
    titleEs: "He viajado mucho. Pretérito perfecto de indicativo (2)",
    titleEl: "Έχω ταξιδέψει πολύ: ο παρακείμενος (2)",
    introEl:
      "Ο pretérito perfecto μιλά για εμπειρίες και για πράξεις με συνέπεια στο παρόν, χωρίς να λέει πότε ακριβώς έγιναν. Στα ελληνικά αντιστοιχεί συχνά στον παρακείμενο («έχω ταξιδέψει»), αλλά και στον αόριστο («πήγα»), και αυτό θέλει προσοχή.",
    rules: [
      {
        textEl:
          "Με το perfecto μιλάμε για εμπειρίες και πράγματα που έχουμε κάνει στη ζωή μας, χωρίς να πούμε πότε. Αναφέρεται σε μια περίοδο που φτάνει μέχρι τώρα.",
        examples: [
          { es: "He vivido en tres países.", el: "Έχω ζήσει σε τρεις χώρες." },
          { es: "Mi hermano ha sido camarero en un hotel.", el: "Ο αδερφός μου έχει δουλέψει ως σερβιτόρος σε ένα ξενοδοχείο." },
        ],
      },
      {
        textEl:
          "Στις ερωτήσεις για εμπειρίες βάζουμε συνήθως alguna vez (ποτέ). Για έλλειψη εμπειρίας χρησιμοποιούμε nunca (ποτέ): αν μπει μετά το ρήμα, χρειάζεται και no μπροστά του.",
        examples: [
          { es: "¿Has probado alguna vez el pulpo?", el: "Έχεις δοκιμάσει ποτέ χταπόδι;" },
          { es: "No he montado nunca a caballo.", el: "Δεν έχω καβαλήσει ποτέ άλογο." },
          { es: "Nunca hemos visto la nieve.", el: "Δεν έχουμε δει ποτέ χιόνι." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε το perfecto για μια πράξη του παρελθόντος που έχει συνέπεια στο παρόν: εξηγεί την αιτία μιας κατάστασης που ισχύει τώρα.",
        examples: [
          { es: "No encuentro las gafas. Las he perdido.", el: "Δεν βρίσκω τα γυαλιά μου. Τα έχω χάσει." },
          { es: "Estoy contento porque he aprobado el examen.", el: "Είμαι χαρούμενος γιατί πέρασα τις εξετάσεις." },
        ],
      },
      {
        textEl:
          "Με ya (ήδη) λέμε ή ρωτάμε αν κάτι έχει γίνει μέχρι τώρα, σε καταφατικές προτάσεις και σε ερωτήσεις. Για κάτι που δεν έχει γίνει ακόμα λέμε todavía no.",
        examples: [
          { es: "Ya he comprado el pan.", el: "Έχω ήδη αγοράσει το ψωμί." },
          { es: "¿Has llamado ya a tu madre?", el: "Έχεις πάρει ήδη τηλέφωνο τη μητέρα σου;" },
          { es: "Todavía no hemos cenado.", el: "Δεν έχουμε δειπνήσει ακόμα." },
        ],
      },
      {
        textEl:
          "Ο perfecto σχηματίζεται με το presente του haber (he, has, ha, hemos, habéis, han) και το participio του ρήματος. Μεταξύ τους δεν μπαίνει τίποτα: το no και οι αντωνυμίες μπαίνουν πριν από το haber.",
        examples: [{ es: "¿Has visto ya la película? Sí, la he visto.", el: "Έχεις δει ήδη την ταινία; Ναι, την έχω δει." }],
      },
    ],
    tables: [
      {
        titleEl: "Pretérito perfecto: haber + participio",
        headers: ["", "viajar", "comer", "vivir"],
        rows: [
          ["yo", "he viajado", "he comido", "he vivido"],
          ["tú", "has viajado", "has comido", "has vivido"],
          ["él / ella / usted", "ha viajado", "ha comido", "ha vivido"],
          ["nosotros / nosotras", "hemos viajado", "hemos comido", "hemos vivido"],
          ["vosotros / vosotras", "habéis viajado", "habéis comido", "habéis vivido"],
          ["ellos / ellas / ustedes", "han viajado", "han comido", "han vivido"],
        ],
      },
      {
        titleEl: "Participios irregulares frecuentes",
        headers: ["Infinitivo", "Participio"],
        rows: [
          ["hacer", "hecho"],
          ["ver", "visto"],
          ["decir", "dicho"],
          ["escribir", "escrito"],
          ["poner", "puesto"],
          ["volver", "vuelto"],
          ["abrir", "abierto"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά ο αόριστος καλύπτει και τις δύο περιπτώσεις: «πήγα στην Ισπανία» (κάποτε στη ζωή μου ή πέρυσι). Στα ισπανικά, όσο δεν λες πότε, χρησιμοποίησε perfecto: «He estado en España». Μόνο όταν λες πότε έρχεται ο indefinido.",
      "Το participio μετά το haber δεν αλλάζει ποτέ με το φύλο ή τον αριθμό: ellas han comido, όχι «han comidas».",
      "Η διπλή άρνηση είναι σωστή, όπως στα ελληνικά: «Δεν έχω πάει ποτέ» = No he ido nunca (ή Nunca he ido).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Ana ___ viajado por toda Europa.", hintEl: "Η Ana έχει ταξιδέψει σε όλη την Ευρώπη.", answer: "ha" },
      { type: "cloze", id: "d2", textEs: "¿Has ___ alguna vez comida india?", hintEl: "Έχεις φάει ποτέ ινδικό φαγητό;", answer: "comido" },
      { type: "cloze", id: "d3", textEs: "Mis padres no han salido ___ de Grecia.", hintEl: "Οι γονείς μου δεν έχουν βγει ποτέ από την Ελλάδα.", answer: "nunca" },
      { type: "cloze", id: "d4", textEs: "Ya hemos ___ la mesa para la cena.", hintEl: "Έχουμε ήδη στρώσει το τραπέζι για το δείπνο.", answer: "puesto", explainEl: "Το participio του poner είναι ανώμαλο: puesto." },
      { type: "cloze", id: "d5", textEs: "¿Habéis ___ ya la película nueva?", hintEl: "Έχετε δει ήδη τη νέα ταινία;", answer: "visto", explainEl: "Το participio του ver είναι ανώμαλο: visto." },
      { type: "cloze", id: "d6", textEs: "Ellos no ___ llegado todavía.", hintEl: "Εκείνοι δεν έχουν φτάσει ακόμα.", answer: "han" },
      {
        type: "choice",
        id: "d7",
        promptEs: "No encuentro mi móvil. Lo ___.",
        promptEl: "Δεν βρίσκω το κινητό μου. Το έχω χάσει.",
        options: ["he perdido", "has perdido", "he perdida", "hemos perdido"],
        answer: "he perdido",
        explainEl: "Το υποκείμενο είναι yo (no encuentro) και το participio δεν παίρνει ποτέ -a: he perdido.",
      },
      { type: "choice", id: "d8", promptEs: "¿Has probado ___ el sushi?", promptEl: "Έχεις δοκιμάσει ποτέ σούσι;", options: ["alguna vez", "ayer", "anoche", "hace un año"], answer: "alguna vez", explainEl: "Το perfecto δεν συνδυάζεται με ενδείξεις παρελθόντος (ayer, anoche, hace un año). Για εμπειρίες ρωτάμε με alguna vez." },
      {
        type: "choice",
        id: "d9",
        promptEs: "Ana está nerviosa porque todavía no ___ el resultado.",
        promptEl: "Η Ana είναι αγχωμένη γιατί δεν έχει λάβει ακόμα το αποτέλεσμα.",
        options: ["ha recibido", "recibió", "recibe", "ha recibida"],
        answer: "ha recibido",
      },
      { type: "choice", id: "d10", promptEs: "¿Has terminado ___ el libro?", promptEl: "Έχεις τελειώσει ήδη το βιβλίο;", options: ["ya", "nunca", "alguna vez", "todavía no"], answer: "ya", explainEl: "Στις ερωτήσεις για το αν κάτι έχει ήδη γίνει χρησιμοποιούμε ya." },
      {
        type: "order",
        id: "d11",
        promptEl: "Δεν έχω πάει ποτέ στη Ρώμη.",
        solution: ["No", "he", "ido", "nunca", "a", "Roma."],
        alternatives: [
          ["Nunca", "he", "ido", "a", "Roma."],
          ["No", "he", "ido", "a", "Roma", "nunca."],
        ],
        distractors: ["fui", "soy"],
        explainEl: "Το nunca μπορεί να μπει πριν από το ρήμα (Nunca he ido) ή μετά, οπότε χρειάζεται και no (No he ido nunca).",
      },
      { type: "order", id: "d12", promptEl: "Φτάνω αργά γιατί έχω χάσει το τρένο.", solution: ["Llego", "tarde", "porque", "he", "perdido", "el", "tren."], distractors: ["perdí", "ha"] },
    ],
    exercisesEl: [
      "Κοίτα τις εικόνες και γράψε τι έχει κάνει η Ana Roldán στη ζωή της, με τα ρήματα των πλαισίων.",
      "Γράψε προτάσεις και ερωτήσεις με τις λέξεις που σου δίνονται (nunca, alguna vez).",
      "Αντιστοίχισε τις συνέπειες με τις αιτίες και συμπλήρωσε τις προτάσεις.",
      "Γράψε ερωτήσεις και απαντήσεις με ya ή todavía no.",
      "Γράψε καταφατικές ή αρνητικές προτάσεις ανάλογα με τη δική σου εμπειρία.",
    ],
  },
  {
    id: "u62",
    number: 62,
    page: 134,
    titleEs: "He trabajado / trabajé. Contraste entre pretérito perfecto y pretérito indefinido",
    titleEl: "Παρακείμενος ή αόριστος: perfecto και indefinido",
    introEl:
      "Και οι δύο χρόνοι μιλούν για το παρελθόν. Η επιλογή εξαρτάται από το αν ο χρόνος που αναφέρουμε φτάνει μέχρι το παρόν (hoy, este año) ή έχει ήδη τελειώσει (ayer, el año pasado), και από το αν λέμε τη συγκεκριμένη στιγμή.",
    rules: [
      {
        textEl:
          "Χρησιμοποιούμε perfecto για πρόσφατο παρελθόν (hace poco, hace un rato) και για περιόδους που περιλαμβάνουν το παρόν: hoy, esta mañana, esta semana, este mes, este año, este verano.",
        examples: [
          { es: "Esta mañana he desayunado muy tarde.", el: "Σήμερα το πρωί έφαγα πρωινό πολύ αργά." },
          { es: "Este mes hemos viajado mucho.", el: "Αυτόν τον μήνα έχουμε ταξιδέψει πολύ." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε perfecto και για εμπειρίες χωρίς συγκεκριμένη στιγμή, συχνά με alguna vez, nunca, ya, todavía no.",
        examples: [
          { es: "¿Has estado alguna vez en Italia?", el: "Έχεις πάει ποτέ στην Ιταλία;" },
          { es: "No hemos ido nunca a un concierto de ópera.", el: "Δεν έχουμε πάει ποτέ σε συναυλία όπερας." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε indefinido για πράξεις που ανήκουν σε χρόνο που έχει τελειώσει: ayer, anoche, el lunes pasado, la semana pasada, el año pasado, aquel verano, hace una semana, hace tres años.",
        examples: [
          { es: "Ayer comí con mis tíos.", el: "Χθες έφαγα με τους θείους μου." },
          { es: "El año pasado viajé a Perú.", el: "Πέρυσι ταξίδεψα στο Περού." },
        ],
      },
      {
        textEl:
          "Όταν δηλώνουμε τη συγκεκριμένη στιγμή της πράξης, βάζουμε indefinido, ακόμα και αν η πράξη είναι εμπειρία. Με ένδειξη παρελθόντος χρόνου δεν χρησιμοποιούμε perfecto.",
        examples: [
          { es: "He visitado Roma.", el: "Έχω επισκεφτεί τη Ρώμη. (δεν λέω πότε)" },
          { es: "Visité Roma hace dos años.", el: "Επισκέφτηκα τη Ρώμη πριν από δύο χρόνια. (λέω πότε)" },
        ],
      },
      {
        textEl:
          "Αν ρωτάμε πότε έγινε κάτι (¿cuándo...?), περιμένουμε συγκεκριμένη στιγμή, άρα συνήθως χρησιμοποιούμε indefinido. Με ya και todavía no μένουμε στον perfecto.",
        examples: [
          { es: "¿Cuándo fuiste a Italia? Fui hace dos años.", el: "Πότε πήγες στην Ιταλία; Πήγα πριν από δύο χρόνια." },
          { es: "¿Has comido ya? Todavía no he comido.", el: "Έχεις φάει ήδη; Δεν έχω φάει ακόμα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενδείξεις χρόνου",
        headers: ["Pretérito perfecto", "Pretérito indefinido"],
        rows: [
          ["hoy", "ayer"],
          ["esta mañana", "anoche"],
          ["esta semana", "la semana pasada"],
          ["este mes", "el mes pasado"],
          ["este año", "el año pasado"],
          ["este verano", "el verano pasado"],
          ["hace un rato, hace poco", "hace una semana, hace tres años"],
          ["alguna vez, nunca, ya, todavía no", "en 2015, el lunes pasado, aquel verano"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά ο αόριστος χρησιμοποιείται παντού («πήγα στην Ισπανία πέρυσι», «πήγες ποτέ;»). Στα ισπανικά ρώτα τον εαυτό σου: η περίοδος περιλαμβάνει το σήμερα (hoy, este año)? Τότε perfecto. Έχει τελειώσει (ayer, el año pasado)? Τότε indefinido.",
      "Προσοχή στο hace: το hace un rato ή hace poco δείχνει πολύ πρόσφατο παρελθόν (συνήθως perfecto), ενώ το hace una semana ή hace tres años δείχνει απομακρυσμένη στιγμή (indefinido).",
      "Σε μεγάλο μέρος της Λατινικής Αμερικής χρησιμοποιούν indefinido ακόμα και με hoy ή esta mañana (Hoy comí tarde). Εδώ μαθαίνεις το σύστημα που είναι πιο συνηθισμένο στην Ισπανία και στο βιβλίο.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Esta mañana ___ muy temprano.", promptEl: "Σήμερα το πρωί σηκώθηκα πολύ νωρίς.", options: ["me he levantado", "me levanté", "me levanto"], answer: "me he levantado", explainEl: "Το esta mañana ανήκει στη σημερινή μέρα, που φτάνει μέχρι τώρα: perfecto." },
      { type: "choice", id: "d2", promptEs: "Nosotros ___ a Grecia el año pasado.", promptEl: "Εμείς ταξιδέψαμε στην Ελλάδα πέρυσι.", options: ["hemos viajado", "viajamos", "viajaremos"], answer: "viajamos", explainEl: "Το el año pasado είναι χρόνος που έχει τελειώσει: indefinido." },
      { type: "choice", id: "d3", promptEs: "¿Has estado ___ en Japón?", promptEl: "Έχεις πάει ποτέ στην Ιαπωνία;", options: ["alguna vez", "el año pasado", "ayer", "hace tres años"], answer: "alguna vez" },
      { type: "choice", id: "d4", promptEs: "¿En qué año ___ tu abuela?", promptEl: "Σε ποια χρονιά γεννήθηκε η γιαγιά σου;", options: ["nació", "ha nacido", "nace"], answer: "nació", explainEl: "Όταν ρωτάμε για συγκεκριμένη χρονολογία, χρησιμοποιούμε indefinido." },
      { type: "choice", id: "d5", promptEs: "Esta semana ___ mucho trabajo.", promptEl: "Αυτή την εβδομάδα είχαμε πολλή δουλειά.", options: ["hemos tenido", "tuvimos", "tendremos"], answer: "hemos tenido", explainEl: "Η εβδομάδα συνεχίζεται μέχρι τώρα (esta semana): perfecto." },
      { type: "cloze", id: "d6", textEs: "Anoche ___ en casa de Eva.", hintEl: "Χθες το βράδυ δειπνήσαμε στο σπίτι της Eva.", answer: "cenamos" },
      { type: "cloze", id: "d7", textEs: "Este verano he ___ mucho en el mar.", hintEl: "Αυτό το καλοκαίρι έχω κολυμπήσει πολύ στη θάλασσα.", answer: "nadado" },
      { type: "cloze", id: "d8", textEs: "El mes pasado mis primos ___ a visitarnos.", hintEl: "Τον περασμένο μήνα οι ξάδερφοί μου ήρθαν να μας επισκεφτούν.", answer: "vinieron", explainEl: "Το venir έχει ανώμαλο indefinido: vine, viniste, vino, vinimos, vinisteis, vinieron." },
      { type: "cloze", id: "d9", textEs: "Hoy no he ___ tiempo para comer.", hintEl: "Σήμερα δεν είχα χρόνο να φάω.", answer: "tenido" },
      { type: "order", id: "d10", promptEl: "Αυτό το Σαββατοκύριακο έχω δουλέψει πολύ.", solution: ["Este", "fin", "de", "semana", "he", "trabajado", "mucho."], alternatives: [["He", "trabajado", "mucho", "este", "fin", "de", "semana."]], distractors: ["trabajé", "hace"] },
      { type: "order", id: "d11", promptEl: "Την περασμένη Κυριακή φάγαμε στο σπίτι της γιαγιάς.", solution: ["El", "domingo", "pasado", "comimos", "en", "casa", "de", "la", "abuela."], alternatives: [["Comimos", "en", "casa", "de", "la", "abuela", "el", "domingo", "pasado."]], distractors: ["hemos", "comido"] },
      { type: "order", id: "d12", promptEl: "Έχεις πάει ποτέ στη Μαδρίτη;", solution: ["¿Has", "estado", "alguna", "vez", "en", "Madrid?"], alternatives: [["¿Has", "estado", "en", "Madrid", "alguna", "vez?"], ["¿Alguna", "vez", "has", "estado", "en", "Madrid?"]], distractors: ["estuviste", "ayer"] },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή μορφή σε κάθε πρόταση, perfecto ή indefinido.",
      "Συμπλήρωσε τις προτάσεις με τη σωστή μορφή του ρήματος: pretérito perfecto ή pretérito indefinido.",
      "Συμπλήρωσε τις προτάσεις με perfecto ή indefinido (ερωτήσεις για εμπειρίες και απαντήσεις με συγκεκριμένη στιγμή).",
      "Ο Arnaldo και η Maite κάνουν διακοπές στην Ισπανία: γράψε τις ερωτήσεις και τις απαντήσεις του διαλόγου, όπως στο παράδειγμα.",
      "Συμπλήρωσε τις προτάσεις με indefinido ή perfecto, με βάση τις ενδείξεις χρόνου.",
    ],
  },
  {
    id: "u63",
    number: 63,
    page: 136,
    titleEs: "trabajaba, comía, vivía. Pretérito imperfecto de indicativo",
    titleEl: "Ο παρατατικός (imperfecto)",
    introEl:
      "Ο imperfecto περιγράφει συνήθειες και καταστάσεις στο παρελθόν και κάνει περιγραφές. Αντιστοιχεί στον ελληνικό παρατατικό («δούλευα», «έτρωγα», «ήταν»), άρα είναι από τους πιο εύκολους χρόνους για έναν Έλληνα.",
    rules: [
      {
        textEl:
          "Τα ρήματα σε -ar παίρνουν -aba, -abas, -aba, -ábamos, -abais, -aban. Τα ρήματα σε -er και -ir παίρνουν -ía, -ías, -ía, -íamos, -íais, -ían. Η ρίζα δεν αλλάζει.",
        examples: [
          { es: "Mi abuela cantaba en el coro.", el: "Η γιαγιά μου τραγουδούσε στη χορωδία." },
          { es: "Nosotros vivíamos cerca del mar.", el: "Ζούσαμε κοντά στη θάλασσα." },
        ],
      },
      {
        textEl: "Μόνο τρία ρήματα είναι ανώμαλα: ser (era), ir (iba) και ver (veía).",
        examples: [
          { es: "Éramos muy jóvenes.", el: "Ήμασταν πολύ νέοι." },
          { es: "De niño iba al colegio andando.", el: "Ως παιδί πήγαινα στο σχολείο με τα πόδια." },
          { es: "Veíais la tele todas las noches.", el: "Βλέπατε τηλεόραση κάθε βράδυ." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε τον imperfecto για συνήθειες και επαναλαμβανόμενες πράξεις στο παρελθόν: cuando era joven, de pequeño, antes, en aquella época. Συνοδεύεται συχνά από λέξεις συχνότητας: siempre, a menudo, de vez en cuando, nunca, todos los días.",
        examples: [
          { es: "Antes leía más.", el: "Παλιά διάβαζα περισσότερο." },
          { es: "De pequeña, jugaba en la calle todas las tardes.", el: "Μικρή, έπαιζα στον δρόμο κάθε απόγευμα." },
        ],
      },
      {
        textEl:
          "Με τον imperfecto περιγράφουμε πρόσωπα, πράγματα και τόπους του παρελθόντος. Το hay γίνεται había.",
        examples: [
          { es: "Mi primer coche era rojo y muy pequeño.", el: "Το πρώτο μου αυτοκίνητο ήταν κόκκινο και πολύ μικρό." },
          { es: "Mi tío tenía el pelo rizado y llevaba gafas redondas.", el: "Ο θείος μου είχε σγουρά μαλλιά και φορούσε στρογγυλά γυαλιά." },
          { es: "En mi pueblo no había cine.", el: "Στο χωριό μου δεν υπήρχε κινηματογράφος." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ρήματα κανονικά",
        headers: ["", "trabajar", "comer", "vivir"],
        rows: [
          ["yo", "trabajaba", "comía", "vivía"],
          ["tú", "trabajabas", "comías", "vivías"],
          ["él / ella / usted", "trabajaba", "comía", "vivía"],
          ["nosotros / nosotras", "trabajábamos", "comíamos", "vivíamos"],
          ["vosotros / vosotras", "trabajabais", "comíais", "vivíais"],
          ["ellos / ellas / ustedes", "trabajaban", "comían", "vivían"],
        ],
      },
      {
        titleEl: "Ρήματα ανώμαλα",
        headers: ["", "ser", "ir", "ver"],
        rows: [
          ["yo", "era", "iba", "veía"],
          ["tú", "eras", "ibas", "veías"],
          ["él / ella / usted", "era", "iba", "veía"],
          ["nosotros / nosotras", "éramos", "íbamos", "veíamos"],
          ["vosotros / vosotras", "erais", "ibais", "veíais"],
          ["ellos / ellas / ustedes", "eran", "iban", "veían"],
        ],
      },
    ],
    tipsEl: [
      "Αν ξέρεις να χρησιμοποιείς τον παρατατικό στα ελληνικά («έτρωγα», «ζούσαμε», «ήταν»), ξέρεις και πότε να βάλεις imperfecto στα ισπανικά.",
      "Το yo και το él/ella/usted έχουν την ίδια μορφή: yo cantaba, él cantaba. Το πλαίσιο ή η αντωνυμία δείχνει ποιος μιλά.",
      "Προσοχή στους τόνους: στα ρήματα σε -ar τονίζεται μόνο το nosotros (cantábamos), ενώ στα -er και -ir το í τονίζεται σε όλα τα πρόσωπα (comía, vivíais).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Antes (nosotros) ___ en un pueblo pequeño.", hintEl: "Παλιά ζούσαμε σε ένα μικρό χωριό.", answer: "vivíamos" },
      { type: "cloze", id: "d2", textEs: "De pequeña, mi hermana ___ muchas canciones.", hintEl: "Μικρή, η αδερφή μου τραγουδούσε πολλά τραγούδια.", answer: "cantaba" },
      { type: "cloze", id: "d3", textEs: "Mis abuelos ___ todos los días por el parque.", hintEl: "Οι παππούδες μου περπατούσαν κάθε μέρα στο πάρκο.", answer: "paseaban", alternatives: ["caminaban"] },
      { type: "cloze", id: "d4", textEs: "Cuando éramos niños, ___ a la playa en verano.", hintEl: "Όταν ήμασταν παιδιά, πηγαίναμε στην παραλία το καλοκαίρι.", answer: "íbamos", explainEl: "Το ir είναι ανώμαλο στον imperfecto: iba, ibas, iba, íbamos, ibais, iban." },
      { type: "cloze", id: "d5", textEs: "Antes ___ mucha gente en este bar.", hintEl: "Παλιά υπήρχε πολύς κόσμος σε αυτό το μπαρ.", answer: "había", explainEl: "Το hay γίνεται había στον imperfecto και μένει σε ενικό." },
      { type: "cloze", id: "d6", textEs: "Tú ___ muy tímido de niño.", hintEl: "Ήσουν πολύ ντροπαλός ως παιδί.", answer: "eras" },
      { type: "choice", id: "d7", promptEs: "Cuando vivía en Atenas, ___ al teatro a menudo.", promptEl: "Όταν ζούσα στην Αθήνα, πήγαινα συχνά στο θέατρο.", options: ["iba", "fui", "voy", "ía"], answer: "iba" },
      { type: "choice", id: "d8", promptEs: "Mi abuelo ___ gafas y bigote.", promptEl: "Ο παππούς μου φορούσε γυαλιά και μουστάκι.", options: ["llevaba", "llevó", "llevaban", "lleva"], answer: "llevaba" },
      { type: "choice", id: "d9", promptEs: "Vosotros ___ la tele hasta muy tarde.", promptEl: "Βλέπατε τηλεόραση μέχρι πολύ αργά.", options: ["veíais", "veiais", "veían", "veíamos"], answer: "veíais", explainEl: "Το ver κρατά το e της ρίζας και παίρνει τόνο στο í: veía, veías, veía, veíamos, veíais, veían." },
      { type: "choice", id: "d10", promptEs: "¿Qué ___ ser de pequeño?", promptEl: "Τι ήθελες να γίνεις όταν ήσουν μικρός;", options: ["querías", "quisiste", "quieres"], answer: "querías" },
      { type: "order", id: "d11", promptEl: "Μικρός, έπαιζα στο δρόμο κάθε μέρα.", solution: ["De", "pequeño", "jugaba", "en", "la", "calle", "todos", "los", "días."], alternatives: [["Todos", "los", "días", "jugaba", "en", "la", "calle", "de", "pequeño."], ["Jugaba", "en", "la", "calle", "todos", "los", "días", "de", "pequeño."]], distractors: ["jugué", "juega"] },
      { type: "order", id: "d12", promptEl: "Το σπίτι της γιαγιάς μου ήταν μεγάλο και είχε κήπο.", solution: ["La", "casa", "de", "mi", "abuela", "era", "grande", "y", "tenía", "jardín."], distractors: ["fue", "tuvo"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τον imperfecto των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις για τους αρχαίους πολιτισμούς της Αμερικής με τον imperfecto των ρημάτων του πλαισίου.",
      "Συμπλήρωσε το κείμενο για τα καλοκαίρια στο χωριό των παππούδων με τον imperfecto των ρημάτων σε παρένθεση.",
    ],
  },
  {
    id: "u64",
    number: 64,
    page: 138,
    titleEs: "trabajé / trabajaba. Contraste entre pretérito indefinido y pretérito imperfecto de indicativo",
    titleEl: "Αόριστος ή παρατατικός: indefinido και imperfecto",
    introEl:
      "Ο indefinido αφηγείται τι έγινε σε μια συγκεκριμένη στιγμή, ενώ ο imperfecto λέει τι γινόταν συνήθως και πώς ήταν τα πράγματα. Η αντίθεση είναι ίδια με αυτή του ελληνικού αορίστου και παρατατικού, άρα το ένστικτό σου βοηθά.",
    rules: [
      {
        textEl:
          "Ο indefinido δείχνει πράξεις ή καταστάσεις που έγιναν σε μια συγκεκριμένη στιγμή του παρελθόντος: ayer, anoche, el domingo pasado, la semana pasada, hace un mes, en 2010, una vez.",
        examples: [
          { es: "Anoche cené con mis primos.", el: "Χθες το βράδυ δείπνησα με τους ξαδέρφους μου." },
          { es: "En 2019 estuve tres meses en Lisboa.", el: "Το 2019 έμεινα τρεις μήνες στη Λισαβόνα." },
        ],
      },
      {
        textEl:
          "Ο imperfecto δείχνει συνήθειες στο παρελθόν: normalmente, siempre, todos los días, los domingos, de joven, de pequeño, antes.",
        examples: [
          { es: "Los domingos comíamos en casa de mi abuela.", el: "Τις Κυριακές τρώγαμε στο σπίτι της γιαγιάς μου." },
          { es: "Cuando vivía en Salónica, salía todas las noches.", el: "Όταν ζούσα στη Θεσσαλονίκη, έβγαινα κάθε βράδυ." },
        ],
      },
      {
        textEl:
          "Με το ser: ο indefinido (fue) αξιολογεί πρόσωπα και γεγονότα ως ολοκληρωμένα, ενώ ο imperfecto (era) τα περιγράφει.",
        examples: [
          { es: "Mi profesora de música fue una gran artista.", el: "Η καθηγήτριά μου της μουσικής ήταν μεγάλη καλλιτέχνις." },
          { es: "Mi profesora era alta y llevaba el pelo corto.", el: "Η καθηγήτριά μου ήταν ψηλή και είχε κοντά μαλλιά." },
        ],
      },
      {
        textEl:
          "Στην ίδια πρόταση ο imperfecto δίνει το πλαίσιο (συνήθεια, κατάσταση) και ο indefinido το συγκεκριμένο γεγονός. Με λέξεις όπως una vez, dos veces χρησιμοποιούμε indefinido.",
        examples: [
          { es: "Cuando vivía en Sevilla, conocí a mi marido.", el: "Όταν ζούσα στη Σεβίλλη, γνώρισα τον άντρα μου." },
          { es: "De niña iba al mar cada verano, pero un verano nos quedamos en casa.", el: "Ως παιδί πήγαινα στη θάλασσα κάθε καλοκαίρι, αλλά ένα καλοκαίρι μείναμε σπίτι." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενδείξεις χρόνου",
        headers: ["Pretérito indefinido", "Pretérito imperfecto"],
        rows: [
          ["ayer", "siempre"],
          ["anoche", "normalmente"],
          ["el domingo pasado", "los domingos"],
          ["la semana pasada", "todos los días"],
          ["hace un mes", "a menudo"],
          ["en 2010", "de pequeño, de joven"],
          ["una vez, dos veces", "antes, en aquella época"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά ξεχωρίζεις ήδη «έφαγα χθες» (comí ayer) από «έτρωγα κάθε μέρα» (comía todos los días). Χρησιμοποίησε το ίδιο ένστικτο: μία συγκεκριμένη φορά είναι indefinido, επανάληψη ή περιγραφή είναι imperfecto.",
      "Προσοχή στο ser: το fue σημαίνει και «ήταν» (αξιολόγηση) και «πήγε» (του ir). Το νόημα το δίνει το πλαίσιο: Fue un gran día / Ayer fue al médico.",
      "Μην μπερδεύεις τους δύο χρόνους: το yo estuve (μία φορά) και το yo estaba (κατάσταση ή συνήθεια) λένε διαφορετικά πράγματα.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Anoche (yo) ___ muy tarde a casa.", promptEl: "Χθες το βράδυ γύρισα σπίτι πολύ αργά.", options: ["llegué", "llegaba", "llegaré"], answer: "llegué", explainEl: "Το anoche είναι συγκεκριμένη στιγμή του παρελθόντος: indefinido." },
      { type: "choice", id: "d2", promptEs: "De pequeña, siempre ___ chocolate en el desayuno.", promptEl: "Μικρή, έπαιρνα πάντα σοκολάτα στο πρωινό.", options: ["tomaba", "tomé", "tomaré"], answer: "tomaba", explainEl: "Το siempre δείχνει συνήθεια: imperfecto." },
      { type: "choice", id: "d3", promptEs: "Cuando vivía en Lisboa, ___ a Oporto una vez.", promptEl: "Όταν ζούσα στη Λισαβόνα, πήγα μία φορά στο Πόρτο.", options: ["fui", "iba", "voy", "ido"], answer: "fui", explainEl: "Το una vez δείχνει συγκεκριμένο γεγονός: indefinido." },
      { type: "choice", id: "d4", promptEs: "Picasso ___ un gran pintor.", promptEl: "Ο Picasso ήταν μεγάλος ζωγράφος.", options: ["fue", "era", "fui"], answer: "fue", explainEl: "Αξιολογούμε ένα πρόσωπο ως ολοκληρωμένο (δεν ζει πια): fue." },
      { type: "choice", id: "d5", promptEs: "De niño, mi primer profesor ___ alto y llevaba bigote.", promptEl: "Όταν ήμουν παιδί, ο πρώτος μου δάσκαλος ήταν ψηλός και φορούσε μουστάκι.", options: ["era", "fue", "es"], answer: "era", explainEl: "Περιγράφουμε εμφάνιση: imperfecto." },
      { type: "cloze", id: "d6", textEs: "El sábado pasado ___ una paella para toda la familia.", hintEl: "Το περασμένο Σάββατο φτιάξαμε μια παέγια για όλη την οικογένεια.", answer: "hicimos", explainEl: "Το hacer έχει ανώμαλο indefinido: hice, hiciste, hizo, hicimos, hicisteis, hicieron." },
      { type: "cloze", id: "d7", textEs: "Cuando era joven, (yo) ___ mucho al baloncesto.", hintEl: "Όταν ήμουν νέος, έπαιζα πολύ μπάσκετ.", answer: "jugaba" },
      { type: "cloze", id: "d8", textEs: "Mis padres se ___ en 1995.", hintEl: "Οι γονείς μου παντρεύτηκαν το 1995.", answer: "casaron" },
      { type: "cloze", id: "d9", textEs: "Cuando mi abuela era joven, ___ en una fábrica.", hintEl: "Όταν η γιαγιά μου ήταν νέα, δούλευε σε ένα εργοστάσιο.", answer: "trabajaba" },
      { type: "choice", id: "d10", promptEs: "Hace dos años (nosotros) ___ a Atenas.", promptEl: "Πριν από δύο χρόνια μετακομίσαμε στην Αθήνα.", options: ["nos mudamos", "nos mudábamos", "nos mudaremos"], answer: "nos mudamos", explainEl: "Το hace dos años δίνει συγκεκριμένη στιγμή: indefinido." },
      { type: "order", id: "d11", promptEl: "Ο παππούς μου ήταν ψηλός και είχε μακριά μαλλιά.", solution: ["Mi", "abuelo", "era", "alto", "y", "tenía", "el", "pelo", "largo."], distractors: ["fue", "tuvo"] },
      { type: "order", id: "d12", promptEl: "Το περασμένο καλοκαίρι πήγαμε στην Κρήτη.", solution: ["El", "verano", "pasado", "fuimos", "a", "Creta."], alternatives: [["Fuimos", "a", "Creta", "el", "verano", "pasado."]], distractors: ["íbamos", "hemos"] },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή μορφή σε κάθε πρόταση, indefinido ή imperfecto.",
      "Συμπλήρωσε τις προτάσεις με imperfecto ή indefinido.",
      "Συμπλήρωσε τις προτάσεις με imperfecto ή indefinido (συνήθειες και συγκεκριμένα γεγονότα).",
      "Συμπλήρωσε τους διαλόγους με τα ρήματα σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις με indefinido ή imperfecto του ρήματος ser.",
    ],
  },
  {
    id: "u65",
    number: 65,
    page: 140,
    titleEs: "trabajaré, comeré, viviré. Futuro simple: verbos regulares",
    titleEl: "Απλός μέλλοντας (futuro simple): κανονικά ρήματα",
    introEl:
      "Ο futuro simple μιλά για πράξεις του μέλλοντος και για προβλέψεις. Είναι εύκολος: παίρνει ολόκληρο το απαρέμφατο και προσθέτει την κατάληξη, χωρίς αλλαγή ρίζας στα κανονικά ρήματα.",
    rules: [
      {
        textEl:
          "Σχηματισμός: απαρέμφατο + é, ás, á, emos, éis, án. Οι καταλήξεις είναι ίδιες για τα ρήματα σε -ar, -er και -ir.",
        examples: [
          { es: "Mañana trabajaré desde casa.", el: "Αύριο θα δουλέψω από το σπίτι." },
          { es: "Comeremos a las dos en el restaurante.", el: "Θα φάμε στις δύο στο εστιατόριο." },
        ],
      },
      {
        textEl: "Στα αυτοπαθή ρήματα η αντωνυμία μπαίνει πριν από το ρήμα και δεν αλλάζει θέση: me sentiré, te sentirás, se sentirá...",
        examples: [
          { es: "Esta noche me acostaré temprano.", el: "Απόψε θα πέσω νωρίς για ύπνο." },
          { es: "Mañana te sentirás mejor.", el: "Αύριο θα νιώσεις καλύτερα." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε τον futuro για πράξεις και καταστάσεις του μέλλοντος, με ενδείξεις όπως mañana, luego, más tarde, pronto, el próximo lunes, la semana que viene, el año que viene, en el año 2050, dentro de + διάστημα.",
        examples: [
          { es: "La semana que viene empezaré un curso de cocina.", el: "Την επόμενη εβδομάδα θα ξεκινήσω ένα μάθημα μαγειρικής." },
          { es: "El tren llegará dentro de diez minutos.", el: "Το τρένο θα φτάσει σε δέκα λεπτά." },
        ],
      },
      {
        textEl: "Χρησιμοποιούμε τον futuro για προβλέψεις.",
        examples: [
          { es: "Mañana lloverá en el norte.", el: "Αύριο θα βρέξει στον βορρά." },
          { es: "Viajarás mucho y conocerás a gente interesante.", el: "Θα ταξιδέψεις πολύ και θα γνωρίσεις ενδιαφέροντες ανθρώπους." },
        ],
      },
      {
        textEl: "Τον χρησιμοποιούμε επίσης για υποσχέσεις και για να πούμε ότι θα κάνουμε κάτι αργότερα.",
        examples: [{ es: "Tranquila, te escribiré esta noche.", el: "Μην ανησυχείς, θα σου γράψω απόψε." }],
      },
    ],
    tables: [
      {
        titleEl: "Ρήματα κανονικά",
        headers: ["", "trabajar", "comer", "vivir"],
        rows: [
          ["yo", "trabajaré", "comeré", "viviré"],
          ["tú", "trabajarás", "comerás", "vivirás"],
          ["él / ella / usted", "trabajará", "comerá", "vivirá"],
          ["nosotros / nosotras", "trabajaremos", "comeremos", "viviremos"],
          ["vosotros / vosotras", "trabajaréis", "comeréis", "viviréis"],
          ["ellos / ellas / ustedes", "trabajarán", "comerán", "vivirán"],
        ],
      },
      {
        titleEl: "Ρήμα αυτοπαθές: sentirse",
        headers: ["", "sentirse"],
        rows: [
          ["yo", "me sentiré"],
          ["tú", "te sentirás"],
          ["él / ella / usted", "se sentirá"],
          ["nosotros / nosotras", "nos sentiremos"],
          ["vosotros / vosotras", "os sentiréis"],
          ["ellos / ellas / ustedes", "se sentirán"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά ο μέλλοντας είναι «θα + ρήμα» (θα δουλέψω). Στα ισπανικά είναι ένας μόνο τύπος: trabajaré. Βάλε την κατάληξη στο ΟΛΟΚΛΗΡΟ απαρέμφατο: comer + é = comeré (όχι «comré»).",
      "Όλες οι καταλήξεις έχουν τόνο εκτός από το -emos: trabajaré, trabajarás, trabajará, trabajaremos, trabajaréis, trabajarán.",
      "Στον καθημερινό λόγο ο futuro συχνά αντικαθίσταται από το ir a + απαρέμφατο (unit 67). Θα τον ακούσεις πολύ σε προβλέψεις, ωροσκόπια, δελτία καιρού και υποσχέσεις.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mañana yo ___ en casa.", hintEl: "Αύριο θα δουλέψω στο σπίτι.", answer: "trabajaré" },
      { type: "cloze", id: "d2", textEs: "Tú ___ en un piso nuevo el año que viene.", hintEl: "Του χρόνου θα ζεις σε ένα καινούριο διαμέρισμα.", answer: "vivirás" },
      { type: "cloze", id: "d3", textEs: "Nosotros ___ a las dos en el restaurante.", hintEl: "Θα φάμε στις δύο στο εστιατόριο.", answer: "comeremos" },
      { type: "cloze", id: "d4", textEs: "Mis tíos ___ a Barcelona en tren.", hintEl: "Οι θείοι μου θα ταξιδέψουν στη Βαρκελώνη με τρένο.", answer: "viajarán" },
      { type: "cloze", id: "d5", textEs: "Vosotros ___ el examen sin problemas.", hintEl: "Εσείς θα περάσετε τις εξετάσεις χωρίς προβλήματα.", answer: "aprobaréis" },
      { type: "cloze", id: "d6", textEs: "Esta noche me ___ temprano.", hintEl: "Απόψε θα πέσω νωρίς για ύπνο.", answer: "acostaré" },
      { type: "choice", id: "d7", promptEs: "El tren llegará ___ diez minutos.", promptEl: "Το τρένο θα φτάσει σε δέκα λεπτά.", options: ["dentro de", "hace", "desde", "durante"], answer: "dentro de", explainEl: "Για «σε + διάστημα» στο μέλλον λέμε dentro de. Το hace αναφέρεται στο παρελθόν." },
      { type: "choice", id: "d8", promptEs: "¿Cuándo ___ tú el libro?", promptEl: "Πότε θα τελειώσεις το βιβλίο;", options: ["terminarás", "terminaré", "terminará", "terminarán"], answer: "terminarás", explainEl: "Το υποκείμενο είναι tú, άρα η κατάληξη είναι -ás." },
      { type: "choice", id: "d9", promptEs: "En el año 2050 los coches ___ solos.", promptEl: "Το 2050 τα αυτοκίνητα θα οδηγούν μόνα τους.", options: ["conducirán", "conducirá", "conduciréis"], answer: "conducirán" },
      { type: "choice", id: "d10", promptEs: "Mis amigos ___ pronto.", promptEl: "Οι φίλοι μου θα φτάσουν σύντομα.", options: ["llegarán", "llegaran", "llegaron", "llegará"], answer: "llegarán", explainEl: "Το llegarán έχει τόνο στο τελευταίο a (llegar + án). Το llegaran χωρίς τόνο είναι άλλος χρόνος." },
      { type: "order", id: "d11", promptEl: "Αύριο το πρωί θα σου τηλεφωνήσω.", solution: ["Mañana", "por", "la", "mañana", "te", "llamaré."], alternatives: [["Te", "llamaré", "mañana", "por", "la", "mañana."]], distractors: ["llamo", "llamará"] },
      { type: "order", id: "d12", promptEl: "Του χρόνου θα μάθουμε ισπανικά.", solution: ["El", "año", "que", "viene", "aprenderemos", "español."], alternatives: [["Aprenderemos", "español", "el", "año", "que", "viene."]], distractors: ["aprendemos", "aprenderé"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τον futuro simple των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε την πρόγνωση του καιρού για το επόμενο Σαββατοκύριακο.",
      "Συμπλήρωσε τις προβλέψεις του ωροσκοπίου με τα ρήματα του πλαισίου.",
      "Συμπλήρωσε τη συζήτηση ενός ζευγαριού με μια μάντισσα.",
    ],
  },
  {
    id: "u66",
    number: 66,
    page: 142,
    titleEs: "habrá, podré... Futuro simple: verbos irregulares",
    titleEl: "Απλός μέλλοντας (futuro simple): ανώμαλα ρήματα",
    introEl:
      "Δέκα συχνά ρήματα αλλάζουν το θέμα τους στον futuro, αλλά παίρνουν τις ίδιες καταλήξεις με τα κανονικά (-é, -ás, -á, -emos, -éis, -án). Μαθαίνεις δέκα θέματα και τα χρησιμοποιείς για προβλέψεις, υποθέσεις και γνώμες.",
    rules: [
      {
        textEl:
          "Στα haber, poder, saber και querer χάνεται το φωνήεν του απαρεμφάτου: habr-, podr-, sabr-, querr-.",
        examples: [
          { es: "Mañana habrá una reunión importante.", el: "Αύριο θα υπάρχει μια σημαντική σύσκεψη." },
          { es: "No podré ir a tu fiesta.", el: "Δεν θα μπορέσω να έρθω στο πάρτι σου." },
          { es: "Algún día sabremos la verdad.", el: "Κάποια μέρα θα μάθουμε την αλήθεια." },
        ],
      },
      {
        textEl: "Στα poner, salir, tener και venir το φωνήεν του απαρεμφάτου αντικαθίσταται από d: pondr-, saldr-, tendr-, vendr-.",
        examples: [
          { es: "Saldremos de casa a las siete.", el: "Θα φύγουμε από το σπίτι στις επτά." },
          { es: "Mis primos vendrán el domingo.", el: "Οι ξάδερφοί μου θα έρθουν την Κυριακή." },
          { es: "Tendrás mucha suerte.", el: "Θα έχεις μεγάλη τύχη." },
        ],
      },
      {
        textEl: "Τα decir και hacer κάνουν πιο ισχυρή αλλαγή: dir- και har-.",
        examples: [
          { es: "Te lo diré mañana.", el: "Θα σου το πω αύριο." },
          { es: "Haremos una tarta para el cumpleaños.", el: "Θα φτιάξουμε μια τούρτα για τα γενέθλια." },
        ],
      },
      {
        textEl: "Τα ανώμαλα ρήματα χρησιμοποιούνται όπως τα κανονικά: για πράξεις του μέλλοντος και για προβλέψεις.",
        examples: [
          { es: "Esta noche pondré música en la fiesta.", el: "Απόψε θα βάλω μουσική στο πάρτι." },
          { es: "Mañana hará mucho calor.", el: "Αύριο θα κάνει πολλή ζέστη." },
          { es: "En el futuro podremos vivir en otros planetas.", el: "Στο μέλλον θα μπορούμε να ζούμε σε άλλους πλανήτες." },
        ],
      },
      {
        textEl:
          "Με ρήματα γνώμης (creo que, supongo que, estoy seguro de que) εκφράζουμε υποθέσεις και απόψεις για το μέλλον με futuro.",
        examples: [
          { es: "Supongo que Lucía tendrá hambre al llegar.", el: "Υποθέτω ότι η Lucía θα πεινάει όταν φτάσει." },
          { es: "Estoy seguro de que haréis un buen viaje.", el: "Είμαι σίγουρος ότι θα κάνετε ένα καλό ταξίδι." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Τα ανώμαλα θέματα",
        headers: ["Infinitivo", "Raíz", "yo", "nosotros / nosotras"],
        rows: [
          ["haber", "habr-", "habré", "habremos"],
          ["poder", "podr-", "podré", "podremos"],
          ["saber", "sabr-", "sabré", "sabremos"],
          ["querer", "querr-", "querré", "querremos"],
          ["poner", "pondr-", "pondré", "pondremos"],
          ["salir", "saldr-", "saldré", "saldremos"],
          ["tener", "tendr-", "tendré", "tendremos"],
          ["venir", "vendr-", "vendré", "vendremos"],
          ["decir", "dir-", "diré", "diremos"],
          ["hacer", "har-", "haré", "haremos"],
        ],
      },
      {
        titleEl: "Οι καταλήξεις σε τρία ρήματα",
        headers: ["", "tener", "hacer", "decir"],
        rows: [
          ["yo", "tendré", "haré", "diré"],
          ["tú", "tendrás", "harás", "dirás"],
          ["él / ella / usted", "tendrá", "hará", "dirá"],
          ["nosotros / nosotras", "tendremos", "haremos", "diremos"],
          ["vosotros / vosotras", "tendréis", "haréis", "diréis"],
          ["ellos / ellas / ustedes", "tendrán", "harán", "dirán"],
        ],
      },
    ],
    tipsEl: [
      "Το hay γίνεται habrá και μένει πάντα σε ενικό: «habrá muchos problemas», όχι «habrán».",
      "Μη βάζεις την κατάληξη στο ολόκληρο απαρέμφατο: tendré (όχι «teneré»), haré (όχι «haceré»), diré (όχι «deciré»).",
      "Τα σύνθετα ρήματα ακολουθούν το ίδιο θέμα: deshacer → desharé, mantener → mantendré.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mañana yo ___ la compra.", hintEl: "Αύριο θα κάνω τα ψώνια.", answer: "haré" },
      { type: "cloze", id: "d2", textEs: "En 2040 ___ muchos coches eléctricos.", hintEl: "Το 2040 θα υπάρχουν πολλά ηλεκτρικά αυτοκίνητα.", answer: "habrá", explainEl: "Το hay γίνεται habrá, πάντα σε ενικό." },
      { type: "cloze", id: "d3", textEs: "Yo no ___ ir a la reunión del lunes.", hintEl: "Δεν θα μπορέσω να πάω στη σύσκεψη της Δευτέρας.", answer: "podré" },
      { type: "cloze", id: "d4", textEs: "Nosotros ___ de casa a las ocho.", hintEl: "Θα φύγουμε από το σπίτι στις οκτώ.", answer: "saldremos" },
      { type: "cloze", id: "d5", textEs: "Tú ___ mucho éxito en tu nuevo trabajo.", hintEl: "Θα έχεις μεγάλη επιτυχία στη νέα σου δουλειά.", answer: "tendrás" },
      { type: "cloze", id: "d6", textEs: "¿Cuándo ___ vosotros a vernos?", hintEl: "Πότε θα έρθετε να μας δείτε;", answer: "vendréis" },
      { type: "cloze", id: "d7", textEs: "Te lo ___ mañana, lo prometo.", hintEl: "Θα σου το πω αύριο, το υπόσχομαι.", answer: "diré" },
      { type: "choice", id: "d8", promptEs: "Creo que mañana ___ mucho viento.", promptEl: "Νομίζω ότι αύριο θα φυσάει πολύ.", options: ["hará", "hacerá", "haré", "harán"], answer: "hará", explainEl: "Το hacer έχει θέμα har-: hará (και όχι «hacerá»)." },
      { type: "choice", id: "d9", promptEs: "Supongo que Marta ___ pronto.", promptEl: "Υποθέτω ότι η Marta θα έρθει σύντομα.", options: ["vendrá", "venirá", "vendré", "vendrán"], answer: "vendrá" },
      { type: "choice", id: "d10", promptEs: "El próximo año yo ___ hablar español muy bien.", promptEl: "Του χρόνου θα ξέρω να μιλάω πολύ καλά ισπανικά.", options: ["sabré", "saberé", "sabrá", "sabrás"], answer: "sabré" },
      { type: "order", id: "d11", promptEl: "Στο μέλλον δεν θα υπάρχουν πόλεμοι.", solution: ["En", "el", "futuro", "no", "habrá", "guerras."], alternatives: [["No", "habrá", "guerras", "en", "el", "futuro."]], distractors: ["hay", "habrán"] },
      { type: "order", id: "d12", promptEl: "Νομίζω ότι αύριο θα φύγουμε νωρίς.", solution: ["Creo", "que", "mañana", "saldremos", "temprano."], alternatives: [["Creo", "que", "saldremos", "temprano", "mañana."]], distractors: ["salimos", "saldré"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τον futuro simple των ρημάτων του πλαισίου.",
      "Πώς θα είναι η ζωή σε πενήντα χρόνια; Γράψε προτάσεις με τις λέξεις που σου δίνονται.",
      "Συμπλήρωσε τις προτάσεις με τα ρήματα σε παρένθεση στον futuro simple.",
      "Γράψε προβλέψεις για το δικό σου μέλλον, καταφατικές ή αρνητικές.",
    ],
  },
  {
    id: "u67",
    number: 67,
    page: 144,
    titleEs: "voy a salir... Presente de ir a + infinitivo",
    titleEl: "Ir a + απαρέμφατο: σχέδια και προθέσεις",
    introEl:
      "Η περίφραση ir a + απαρέμφατο λέει τι σκοπεύουμε να κάνουμε σύντομα, και τι πρόκειται να συμβεί με βάση αυτά που βλέπουμε τώρα. Στα ελληνικά αντιστοιχεί στο «θα» ή στο «σκοπεύω να».",
    rules: [
      {
        textEl: "Σχηματισμός: presente του ir (voy, vas, va, vamos, vais, van) + a + απαρέμφατο. Η πρόθεση a είναι υποχρεωτική.",
        examples: [
          { es: "Voy a llamar a mi madre.", el: "Θα τηλεφωνήσω στη μητέρα μου." },
          { es: "Vamos a cenar en casa.", el: "Θα φάμε δείπνο στο σπίτι." },
        ],
      },
      {
        textEl:
          "Εκφράζει σχέδια και προθέσεις για το άμεσο ή το κοντινό μέλλον: ahora mismo, esta tarde, esta noche, mañana, este verano.",
        examples: [
          { es: "Esta tarde voy a estudiar en la biblioteca.", el: "Σήμερα το απόγευμα θα διαβάσω στη βιβλιοθήκη." },
          { es: "¿Qué vais a hacer este fin de semana?", el: "Τι θα κάνετε αυτό το Σαββατοκύριακο;" },
        ],
      },
      {
        textEl: "Στην άρνηση το no μπαίνει πριν από το ir.",
        examples: [
          { es: "Hoy no voy a cocinar.", el: "Σήμερα δεν θα μαγειρέψω." },
          { es: "No vamos a viajar este año.", el: "Δεν θα ταξιδέψουμε φέτος." },
        ],
      },
      {
        textEl:
          "Με τα αυτοπαθή ρήματα η αντωνυμία μπαίνει είτε πριν από το ir είτε κολλάει στο τέλος του απαρεμφάτου.",
        examples: [
          { es: "Me voy a duchar. = Voy a ducharme.", el: "Θα κάνω ντους." },
          { es: "Os vais a divertir. = Vais a divertiros.", el: "Θα διασκεδάσετε." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε το ir a και όταν, από τα στοιχεία που βλέπουμε τώρα, είμαστε σχεδόν σίγουροι ότι κάτι θα συμβεί.",
        examples: [
          { es: "Mira esas nubes negras: va a llover.", el: "Δες αυτά τα μαύρα σύννεφα: θα βρέξει." },
          { es: "El autobús ya viene. Va a parar aquí.", el: "Το λεωφορείο έρχεται ήδη. Θα σταματήσει εδώ." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ir a + infinitivo",
        headers: ["", "ir (presente)", "ir a + infinitivo"],
        rows: [
          ["yo", "voy", "voy a comer"],
          ["tú", "vas", "vas a comer"],
          ["él / ella / usted", "va", "va a comer"],
          ["nosotros / nosotras", "vamos", "vamos a comer"],
          ["vosotros / vosotras", "vais", "vais a comer"],
          ["ellos / ellas / ustedes", "van", "van a comer"],
        ],
      },
    ],
    tipsEl: [
      "Η πρόθεση a δεν παραλείπεται ποτέ: «voy a comer», όχι «voy comer». Στα ελληνικά δεν υπάρχει αντίστοιχη λέξη, γι' αυτό ξεχνιέται εύκολα.",
      "Το «voy a ir» (θα πάω) είναι σωστό και συνηθισμένο: Vamos a ir al cine. Μην το μπερδεύεις με το «me voy» (φεύγω).",
      "Στην καθομιλουμένη το ir a ακούγεται πολύ πιο συχνά από τον futuro simple, ιδιαίτερα για σχέδια της ημέρας και της εβδομάδας.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Esta tarde (yo) ___ a estudiar en la biblioteca.", hintEl: "Σήμερα το απόγευμα θα διαβάσω στη βιβλιοθήκη.", answer: "voy" },
      { type: "cloze", id: "d2", textEs: "¿Qué ___ a hacer tú este verano?", hintEl: "Τι θα κάνεις αυτό το καλοκαίρι;", answer: "vas" },
      { type: "cloze", id: "d3", textEs: "Mis padres ___ a venir mañana.", hintEl: "Οι γονείς μου θα έρθουν αύριο.", answer: "van" },
      { type: "cloze", id: "d4", textEs: "Nosotros no ___ a salir esta noche.", hintEl: "Εμείς δεν θα βγούμε απόψε.", answer: "vamos" },
      { type: "cloze", id: "d5", textEs: "Vosotros ___ a perder el tren.", hintEl: "Εσείς θα χάσετε το τρένο.", answer: "vais" },
      { type: "cloze", id: "d6", textEs: "Tengo hambre. Voy a ___ un bocadillo.", hintEl: "Πεινάω. Θα φάω ένα σάντουιτς.", answer: "comer", alternatives: ["tomar"] },
      { type: "choice", id: "d7", promptEs: "Mañana ___ visitar a mis abuelos.", promptEl: "Αύριο θα επισκεφτώ τους παππούδες μου.", options: ["voy a", "voy", "voy de", "voy en"], answer: "voy a", explainEl: "Μετά το ir χρειάζεται πάντα η πρόθεση a πριν από το απαρέμφατο." },
      { type: "choice", id: "d8", promptEs: "Laura y Jaime ___ casar este verano.", promptEl: "Η Laura και ο Jaime θα παντρευτούν αυτό το καλοκαίρι.", options: ["se van a", "van a", "se va a", "van a se"], answer: "se van a", explainEl: "Το casarse είναι αυτοπαθές: Se van a casar (ή Van a casarse)." },
      { type: "choice", id: "d9", promptEs: "Hoy ___ a dormir la siesta.", promptEl: "Σήμερα δεν θα κάνω μεσημεριανό ύπνο.", options: ["no voy", "voy no", "no vas", "no van"], answer: "no voy" },
      { type: "order", id: "d10", promptEl: "Απόψε θα πάμε στον κινηματογράφο.", solution: ["Esta", "noche", "vamos", "a", "ir", "al", "cine."], alternatives: [["Vamos", "a", "ir", "al", "cine", "esta", "noche."]], distractors: ["voy", "en"] },
      { type: "order", id: "d11", promptEl: "Οι γείτονες θα μετακομίσουν τον Σεπτέμβριο.", solution: ["Los", "vecinos", "se", "van", "a", "mudar", "en", "septiembre."], alternatives: [["Los", "vecinos", "van", "a", "mudarse", "en", "septiembre."], ["En", "septiembre", "los", "vecinos", "se", "van", "a", "mudar."]], distractors: ["mudarse", "me"] },
      { type: "order", id: "d12", promptEl: "Σήμερα δεν θα φάμε στο σπίτι.", solution: ["Hoy", "no", "vamos", "a", "comer", "en", "casa."], alternatives: [["No", "vamos", "a", "comer", "en", "casa", "hoy."]], distractors: ["voy", "comemos"] },
    ],
    exercisesEl: [
      "Κοίτα τις εικόνες και γράψε τι θα κάνουν αυτό το απόγευμα, με τις εκφράσεις του πλαισίου.",
      "Τι θα κάνουν; Συμπλήρωσε τις προτάσεις με voy a + ρήμα του πλαισίου, ανάλογα με την ανάγκη.",
      "Συμπλήρωσε τους διαλόγους με τα ρήματα σε παρένθεση, χρησιμοποιώντας ir a + απαρέμφατο.",
      "Κοίτα τις εικόνες και συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου (τι πρόκειται να συμβεί).",
    ],
  },
  {
    id: "u68",
    number: 68,
    page: 146,
    titleEs: "haré / hago / voy a hacer. Contraste entre las diversas formas de hablar del futuro",
    titleEl: "Οι τρόποι να μιλήσεις για το μέλλον: futuro, ir a και presente",
    introEl:
      "Στα ισπανικά μιλάμε για το μέλλον με τρεις τρόπους: futuro simple, ir a + απαρέμφατο και presente. Ο καθένας δείχνει άλλη στάση του ομιλητή: πρόβλεψη, σχέδιο ή κάτι ήδη κανονισμένο.",
    rules: [
      {
        textEl:
          "Futuro simple: κάτι που θα γίνει σε μια αόριστη στιγμή του μέλλοντος ή που πιθανώς θα γίνει (algún día, seguramente, probablemente).",
        examples: [
          { es: "Algún día viviré en una isla.", el: "Κάποια μέρα θα ζήσω σε ένα νησί." },
          { es: "Seguramente iremos a Granada en primavera.", el: "Πιθανότατα θα πάμε στη Γρανάδα την άνοιξη." },
        ],
      },
      {
        textEl: "Futuro simple: προβλέψεις για το μέλλον.",
        examples: [
          { es: "En el futuro habrá menos coches en las ciudades.", el: "Στο μέλλον θα υπάρχουν λιγότερα αυτοκίνητα στις πόλεις." },
          { es: "Tendrás un año lleno de sorpresas.", el: "Θα έχεις μια χρονιά γεμάτη εκπλήξεις." },
        ],
      },
      {
        textEl:
          "Voy a + απαρέμφατο: τωρινά σχέδια και προθέσεις για το μέλλον, και κάτι που φαίνεται σίγουρο λόγω των τωρινών συνθηκών.",
        examples: [
          { es: "De mayor voy a ser veterinaria.", el: "Όταν μεγαλώσω, θα γίνω κτηνίατρος. (το σχέδιό μου τώρα)" },
          { es: "Mira qué cielo. Va a llover.", el: "Δες τον ουρανό. Θα βρέξει." },
        ],
      },
      {
        textEl:
          "Presente: κάτι μελλοντικό που είναι ήδη κανονισμένο, με γνωστή ημερομηνία, ραντεβού ή συμφωνία.",
        examples: [
          { es: "El sábado comemos en casa de mis suegros.", el: "Το Σάββατο τρώμε στο σπίτι των πεθερικών μου." },
          { es: "Mis primos se mudan en septiembre.", el: "Οι ξάδερφοί μου μετακομίζουν τον Σεπτέμβριο." },
        ],
      },
      {
        textEl: "Presente: προγράμματα και ωράρια (τρένα, πτήσεις, μαθήματα, ταινίες).",
        examples: [
          { es: "¿A qué hora empieza la película?", el: "Τι ώρα ξεκινά η ταινία;" },
          { es: "El tren de Sevilla llega a las diez.", el: "Το τρένο της Σεβίλλης φτάνει στις δέκα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι τρεις τρόποι μαζί",
        headers: ["Forma", "Qué expresa", "Ejemplo"],
        rows: [
          ["Futuro simple", "Αόριστο μέλλον, πρόβλεψη", "Algún día tendré un barco."],
          ["Voy a + infinitivo", "Τωρινό σχέδιο, βεβαιότητα από ενδείξεις", "Voy a comprar un barco este año."],
          ["Presente", "Ήδη κανονισμένο, πρόγραμμα", "Mañana recojo mi barco."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το «θα + ρήμα» καλύπτει και τους τρεις τρόπους. Στα ισπανικά ρώτα τον εαυτό σου: είναι πρόβλεψη ή αόριστο μέλλον (futuro), δικό μου σχέδιο (ir a) ή ήδη κανονισμένο (presente);",
      "Ο ενεστώτας με μέλλον λειτουργεί όπως στα ελληνικά: το «αύριο δίνω εξετάσεις» είναι Mañana me examino. Δείχνει ότι το πράγμα είναι σίγουρο και κανονισμένο.",
      "Μην χρησιμοποιείς futuro simple όταν βλέπεις ότι κάτι συμβαίνει ΤΩΡΑ: «¡Cuidado! Te caerás» ακούγεται ασυνήθιστο, ενώ το «¡Cuidado! Te vas a caer» είναι το φυσικό.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Algún día ___ en una casa junto al mar.", promptEl: "Κάποια μέρα θα ζήσω σε ένα σπίτι δίπλα στη θάλασσα.", options: ["viviré", "vivo", "vivía", "he vivido"], answer: "viviré", explainEl: "Το algún día δείχνει αόριστη στιγμή στο μέλλον: futuro simple." },
      { type: "choice", id: "d2", promptEs: "¡Cuidado con la sartén! ___.", promptEl: "Πρόσεχε το τηγάνι! Θα καείς.", options: ["Te vas a quemar", "Te quemarás", "Te quemaste", "Te has quemado"], answer: "Te vas a quemar", explainEl: "Από αυτό που βλέπουμε τώρα είναι σχεδόν σίγουρο ότι θα συμβεί: voy a + απαρέμφατο." },
      { type: "choice", id: "d3", promptEs: "¿A qué hora ___ el autobús mañana?", promptEl: "Τι ώρα φεύγει το λεωφορείο αύριο;", options: ["sale", "salió", "salía", "ha salido"], answer: "sale", explainEl: "Για ωράρια και προγράμματα χρησιμοποιούμε τον presente." },
      { type: "choice", id: "d4", promptEs: "En el futuro los robots ___ las casas.", promptEl: "Στο μέλλον τα ρομπότ θα καθαρίζουν τα σπίτια.", options: ["limpiarán", "limpian", "limpiaron", "limpiaban"], answer: "limpiarán", explainEl: "Πρόβλεψη για το μακρινό μέλλον: futuro simple." },
      { type: "cloze", id: "d5", textEs: "Este año mi hermano y yo ___ a abrir un negocio.", hintEl: "Φέτος ο αδερφός μου κι εγώ θα ανοίξουμε μια επιχείρηση. (το σχέδιό μας)", answer: "vamos" },
      { type: "cloze", id: "d6", textEs: "Mañana no ___ a clase: es fiesta.", hintEl: "Αύριο δεν πάω στο μάθημα: είναι αργία.", answer: "voy", alternatives: ["iré"], explainEl: "Είναι κάτι ήδη κανονισμένο, γι' αυτό ο φυσικός τύπος είναι ο presente." },
      { type: "cloze", id: "d7", textEs: "Mi hija ___ veinte años en marzo.", hintEl: "Η κόρη μου γίνεται είκοσι χρονών τον Μάρτιο.", answer: "cumple", alternatives: ["cumplirá"], explainEl: "Η ημερομηνία είναι γνωστή, οπότε μιλάμε με presente." },
      { type: "cloze", id: "d8", textEs: "Seguramente nosotros ___ a Madrid el año que viene.", hintEl: "Πιθανότατα θα πάμε στη Μαδρίτη του χρόνου.", answer: "iremos" },
      { type: "cloze", id: "d9", textEs: "Mira qué cara tiene. Se ___ a enfadar.", hintEl: "Κοίτα τι πρόσωπο έχει. Θα θυμώσει.", answer: "va" },
      { type: "cloze", id: "d10", textEs: "Dentro de cincuenta años la gente ___ más años.", hintEl: "Σε πενήντα χρόνια οι άνθρωποι θα ζουν περισσότερα χρόνια.", answer: "vivirá" },
      { type: "order", id: "d11", promptEl: "Η πτήση φεύγει στις εννιά.", solution: ["El", "vuelo", "sale", "a", "las", "nueve."], alternatives: [["A", "las", "nueve", "sale", "el", "vuelo."]], distractors: ["salió", "saldría"] },
      { type: "order", id: "d12", promptEl: "Θα ταξιδέψουμε στην Ιταλία αυτό το καλοκαίρι.", solution: ["Este", "verano", "vamos", "a", "viajar", "a", "Italia."], alternatives: [["Vamos", "a", "viajar", "a", "Italia", "este", "verano."]], distractors: ["viajé", "voy"] },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή μορφή σε κάθε πρόταση, ανάμεσα στο futuro, το voy a και τον presente.",
      "Συμπλήρωσε τις προτάσεις με futuro simple ή με voy, vas, va... a + απαρέμφατο των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου και με τη βοήθεια των εικόνων.",
      "Συμπλήρωσε τις προτάσεις με futuro simple ή με presente των ρημάτων του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με voy, vas, va... a + απαρέμφατο ή με presente των ρημάτων σε παρένθεση.",
    ],
  },
  {
    id: "u69",
    number: 69,
    page: 148,
    titleEs: "Abre la ventana. Imperativo afirmativo: verbos regulares",
    titleEl: "Καταφατική προστακτική: κανονικά ρήματα",
    introEl:
      "Η προστακτική χρησιμοποιείται για εντολές, οδηγίες, αιτήματα, συμβουλές και άδεια. Στα ισπανικά έχει ξεχωριστή μορφή για tú, usted, vosotros και ustedes.",
    rules: [
      {
        textEl:
          "Για το tú, η προστακτική είναι ίδια με το τρίτο πρόσωπο ενικού του ενεστώτα: habla, come, vive.",
        examples: [
          { es: "Habla más despacio, por favor.", el: "Μίλα πιο αργά, σε παρακαλώ." },
          { es: "Escribe tu nombre aquí.", el: "Γράψε το όνομά σου εδώ." },
        ],
      },
      {
        textEl:
          "Για το usted και το ustedes χρησιμοποιούμε τους τύπους του presente de subjuntivo: -ar → -e / -en, -er και -ir → -a / -an.",
        examples: [
          { es: "Coma más fruta, señor López.", el: "Φάτε περισσότερα φρούτα, κύριε López." },
          { es: "Escriban sus nombres, por favor.", el: "Γράψτε τα ονόματά σας, παρακαλώ." },
        ],
      },
      {
        textEl: "Για το vosotros αλλάζουμε το -r του απαρεμφάτου σε -d: hablad, comed, vivid.",
        examples: [
          { es: "Escuchad con atención.", el: "Ακούστε με προσοχή." },
          { es: "Comed despacio.", el: "Φάτε αργά." },
        ],
      },
      {
        textEl:
          "Στα usted και ustedes υπάρχουν ορθογραφικές αλλαγές: -gar → gue / guen, -ger → ja / jan, -car → que / quen, -zar → ce / cen.",
        examples: [
          { es: "Pague en caja, por favor.", el: "Πληρώστε στο ταμείο, παρακαλώ." },
          { es: "Escoja un regalo.", el: "Διαλέξτε ένα δώρο." },
          { es: "Practique todos los días.", el: "Εξασκείστε κάθε μέρα." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε την προστακτική για εντολές και οδηγίες, αιτήματα και προσκλήσεις, συμβουλές και προειδοποιήσεις, και για να δώσουμε άδεια.",
        examples: [
          { es: "Cruza por el paso de cebra.", el: "Πέρνα από τη διάβαση πεζών. (οδηγία)" },
          { es: "Pasa, por favor.", el: "Πέρασε, παρακαλώ. (πρόσκληση)" },
          { es: "¿Puedo entrar? Sí, entra.", el: "Μπορώ να μπω; Ναι, μπες. (άδεια)" },
        ],
      },
      {
        textEl:
          "Η αντωνυμία του υποκειμένου συνήθως παραλείπεται. Αν τη βάλουμε, μπαίνει μετά το ρήμα και δίνει έμφαση ή ευγένεια.",
        examples: [
          { es: "Habla tú primero.", el: "Μίλα εσύ πρώτος." },
          { es: "Pasen ustedes, por favor.", el: "Περάστε, παρακαλώ." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ρήματα κανονικά",
        headers: ["", "trabajar", "comer", "vivir"],
        rows: [
          ["tú", "trabaja", "come", "vive"],
          ["usted", "trabaje", "coma", "viva"],
          ["vosotros / vosotras", "trabajad", "comed", "vivid"],
          ["ustedes", "trabajen", "coman", "vivan"],
        ],
      },
      {
        titleEl: "Ορθογραφικές αλλαγές και το ver",
        headers: ["Verbo", "tú", "usted", "vosotros / vosotras", "ustedes"],
        rows: [
          ["pagar", "paga", "pague", "pagad", "paguen"],
          ["escoger", "escoge", "escoja", "escoged", "escojan"],
          ["practicar", "practica", "practique", "practicad", "practiquen"],
          ["cruzar", "cruza", "cruce", "cruzad", "crucen"],
          ["ver", "ve", "vea", "ved", "vean"],
        ],
      },
    ],
    tipsEl: [
      "Η προστακτική του tú δεν είναι το «tú hablas» αλλά το «habla»: Habla!, όχι «¡Hablas!». Η ίδια μορφή (habla) σημαίνει και «μιλάει», οπότε το πλαίσιο ξεκαθαρίζει.",
      "Η μορφή του vosotros είναι πάντα το απαρέμφατο με -d στη θέση του -r: comer → comed. Στη Λατινική Αμερική δεν υπάρχει vosotros και λένε ustedes (coman, hablen).",
      "Οι ευγενικές μορφές usted/ustedes παίρνουν συχνά por favor ή την αντωνυμία: «Pase usted».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "(tú) ___ la ventana, por favor. Hace calor.", hintEl: "Άνοιξε το παράθυρο, σε παρακαλώ. Κάνει ζέστη.", answer: "abre" },
      { type: "cloze", id: "d2", textEs: "Chicos, ___ la verdura, es muy sana.", hintEl: "Παιδιά, φάτε τα λαχανικά, κάνουν πολύ καλό.", answer: "comed", alternatives: ["coman"] },
      { type: "cloze", id: "d3", textEs: "Señora Ruiz, ___ por aquí, por favor.", hintEl: "Κυρία Ruiz, περάστε από εδώ, παρακαλώ.", answer: "pase" },
      { type: "cloze", id: "d4", textEs: "Señores, ___ en la caja, por favor.", hintEl: "Κύριοι, πληρώστε στο ταμείο, παρακαλώ.", answer: "paguen", explainEl: "Στο pagar, πριν από -e γράφουμε gu: pague, paguen." },
      { type: "cloze", id: "d5", textEs: "(tú) ___ más agua; es buena para la salud.", hintEl: "Πίνε περισσότερο νερό, κάνει καλό στην υγεία.", answer: "bebe" },
      { type: "cloze", id: "d6", textEs: "Señor Díaz, ___ este documento, por favor.", hintEl: "Κύριε Díaz, υπογράψτε αυτό το έγγραφο, παρακαλώ.", answer: "firme" },
      { type: "choice", id: "d7", promptEs: "Niños (vosotros), ___ en silencio.", promptEl: "Παιδιά, δουλέψτε σιωπηλά.", options: ["trabajad", "trabajar", "trabajáis", "trabajen"], answer: "trabajad", explainEl: "Το vosotros σχηματίζεται με το -d στη θέση του -r: trabajar → trabajad." },
      { type: "choice", id: "d8", promptEs: "Pablo, ___ tú primero, por favor.", promptEl: "Pablo, μίλα εσύ πρώτος, παρακαλώ.", options: ["habla", "hable", "hablas", "hablad"], answer: "habla" },
      { type: "choice", id: "d9", promptEs: "Señor López, ___ un helado.", promptEl: "Κύριε López, διαλέξτε ένα παγωτό.", options: ["escoja", "escoge", "escoga", "escojan"], answer: "escoja", explainEl: "Στο escoger, πριν από -a γράφουμε j: escoja." },
      { type: "choice", id: "d10", promptEs: "¿Puedo pasar? Sí, ___, por favor. (a un amigo)", promptEl: "Μπορώ να περάσω; Ναι, πέρασε, παρακαλώ.", options: ["pasa", "pase", "pasad", "pasas"], answer: "pasa" },
      { type: "order", id: "d11", promptEl: "Πληρώστε στο ταμείο, παρακαλώ. (usted)", solution: ["Pague", "en", "la", "caja,", "por", "favor."], alternatives: [["Por", "favor,", "pague", "en", "la", "caja."]], distractors: ["paga", "pagar"] },
      { type: "order", id: "d12", promptEl: "Παιδιά, ακούστε με προσοχή. (vosotros)", solution: ["Chicos,", "escuchad", "con", "atención."], alternatives: [["Escuchad", "con", "atención,", "chicos."]], distractors: ["escuchar", "escuchen"] },
    ],
    exercisesEl: [
      "Γράψε τις συμβουλές του γιατρού με τα ρήματα του πλαισίου.",
      "Τι θα έλεγες σε κάθε περίπτωση; Συμπλήρωσε με την προστακτική των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε τις διαφημίσεις με την προστακτική των ρημάτων σε παρένθεση.",
    ],
  },
  {
    id: "u70",
    number: 70,
    page: 150,
    titleEs: "No abras la ventana. Imperativo negativo: verbos regulares",
    titleEl: "Αρνητική προστακτική: κανονικά ρήματα",
    introEl:
      "Η αρνητική προστακτική σχηματίζεται με no + τύπο του presente de subjuntivo, για όλα τα πρόσωπα. Άρα οι μορφές για tú και vosotros αλλάζουν σε σχέση με τη θετική προστακτική.",
    rules: [
      {
        textEl:
          "Σχηματισμός: no + presente de subjuntivo. Τα ρήματα σε -ar παίρνουν -es, -e, -éis, -en. Τα ρήματα σε -er και -ir παίρνουν -as, -a, -áis, -an.",
        examples: [
          { es: "No hables tan alto.", el: "Μη μιλάς τόσο δυνατά." },
          { es: "No comáis en clase.", el: "Μην τρώτε στην τάξη." },
        ],
      },
      {
        textEl:
          "Στη θετική προστακτική το tú και το vosotros έχουν δικές τους μορφές (habla, hablad), ενώ στην αρνητική παίρνουν τον τύπο του subjuntivo (no hables, no habléis). Τα usted και ustedes έχουν την ίδια μορφή και στις δύο.",
        examples: [
          { es: "Escribe aquí. / No escribas aquí.", el: "Γράψε εδώ. / Μη γράφεις εδώ." },
          { es: "Abra la puerta. / No abra la puerta.", el: "Ανοίξτε την πόρτα. / Μην ανοίγετε την πόρτα." },
        ],
      },
      {
        textEl:
          "Ισχύουν οι ίδιες ορθογραφικές αλλαγές με τη θετική προστακτική: -gar → gues, gue, guéis, guen. -ger → jas, ja, jáis, jan. -car → ques, que, quéis, quen. -zar → ces, ce, céis, cen.",
        examples: [
          { es: "No pagues todavía.", el: "Μην πληρώσεις ακόμα." },
          { es: "No practiquéis aquí.", el: "Μην εξασκείστε εδώ." },
          { es: "No cruces con el semáforo en rojo.", el: "Μη διασχίζεις με κόκκινο φανάρι." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε την αρνητική προστακτική για απαγορεύσεις και οδηγίες, αιτήματα, προειδοποιήσεις και συμβουλές, και για να αρνηθούμε άδεια.",
        examples: [
          { es: "No toques el horno. Está caliente.", el: "Μην αγγίζεις τον φούρνο. Είναι ζεστός." },
          { es: "¿Puedo llamar ya? No, no llames ahora.", el: "Μπορώ να τηλεφωνήσω τώρα; Όχι, μην τηλεφωνήσεις τώρα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ρήματα κανονικά",
        headers: ["", "trabajar", "comer", "vivir"],
        rows: [
          ["tú", "no trabajes", "no comas", "no vivas"],
          ["usted", "no trabaje", "no coma", "no viva"],
          ["vosotros / vosotras", "no trabajéis", "no comáis", "no viváis"],
          ["ustedes", "no trabajen", "no coman", "no vivan"],
        ],
      },
      {
        titleEl: "Θετική και αρνητική (hablar)",
        headers: ["", "Afirmativo", "Negativo"],
        rows: [
          ["tú", "habla", "no hables"],
          ["usted", "hable", "no hable"],
          ["vosotros / vosotras", "hablad", "no habléis"],
          ["ustedes", "hablen", "no hablen"],
        ],
      },
      {
        titleEl: "Ορθογραφικές αλλαγές και το ver",
        headers: ["Verbo", "tú", "usted", "vosotros / vosotras", "ustedes"],
        rows: [
          ["pagar", "no pagues", "no pague", "no paguéis", "no paguen"],
          ["escoger", "no escojas", "no escoja", "no escojáis", "no escojan"],
          ["practicar", "no practiques", "no practique", "no practiquéis", "no practiquen"],
          ["cruzar", "no cruces", "no cruce", "no crucéis", "no crucen"],
          ["ver", "no veas", "no vea", "no veáis", "no vean"],
        ],
      },
    ],
    tipsEl: [
      "Η αρνητική προστακτική στα ισπανικά μοιάζει με τα ελληνικά: «μη μιλάς», «μη φύγεις» (μη + υποτακτική), όπως no hables.",
      "Στο vosotros η αρνητική δεν είναι «no hablad». Σωστό: no habléis.",
      "Μην βάζεις το no μπροστά στη θετική μορφή: «no habla» σημαίνει «δεν μιλάει». Για το «μη μιλάς» λέμε no hables.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Ana, no ___ tan rápido, por favor.", hintEl: "Ana, μη μιλάς τόσο γρήγορα, παρακαλώ.", answer: "hables" },
      { type: "cloze", id: "d2", textEs: "Chicos, no ___ en clase.", hintEl: "Παιδιά, μη μιλάτε στην τάξη.", answer: "habléis", alternatives: ["hablen"] },
      { type: "cloze", id: "d3", textEs: "Marta, no ___ esa película, es muy triste.", hintEl: "Marta, μη δεις αυτή την ταινία, είναι πολύ λυπητερή.", answer: "veas", explainEl: "Το ver κρατά το e και γίνεται veas: no veas, no vea, no veáis, no vean." },
      { type: "cloze", id: "d4", textEs: "Señor Gil, no ___ aquí, por favor. Está prohibido.", hintEl: "Κύριε Gil, μην παρκάρετε εδώ, παρακαλώ. Απαγορεύεται.", answer: "aparque", explainEl: "Στο aparcar, πριν από -e γράφουμε qu: aparque." },
      { type: "cloze", id: "d5", textEs: "Luis, no ___ ahora; la cuenta es de la empresa.", hintEl: "Luis, μην πληρώσεις τώρα, τον λογαριασμό τον πληρώνει η εταιρεία.", answer: "pagues" },
      { type: "cloze", id: "d6", textEs: "No ___ por aquí, chicos; es peligroso.", hintEl: "Μη διασχίζετε από εδώ, παιδιά. Είναι επικίνδυνο.", answer: "crucéis", alternatives: ["crucen"], explainEl: "Στο cruzar, πριν από -e γράφουμε c: no crucéis." },
      { type: "choice", id: "d7", promptEs: "Sara, no ___ eso, está caliente.", promptEl: "Sara, μην αγγίζεις αυτό, είναι ζεστό.", options: ["toques", "toca", "toque", "tocas"], answer: "toques", explainEl: "Στο tocar, πριν από -e γράφουμε qu: toques." },
      { type: "choice", id: "d8", promptEs: "Señores, no ___ el móvil aquí, por favor.", promptEl: "Κύριοι, μη χρησιμοποιείτε το κινητό εδώ, παρακαλώ.", options: ["usen", "uses", "usad", "uséis"], answer: "usen" },
      { type: "choice", id: "d9", promptEs: "Hijo, no ___ mucha sal en la comida.", promptEl: "Παιδί μου, μη βάζεις πολύ αλάτι στο φαγητό.", options: ["eches", "echa", "eche", "echas"], answer: "eches" },
      { type: "choice", id: "d10", promptEs: "¿Puedo llamar a Rafa? No, no ___ ahora, es tarde.", promptEl: "Μπορώ να πάρω τον Rafa τηλέφωνο; Όχι, μην τον πάρεις τώρα, είναι αργά.", options: ["llames", "llama", "llamas", "llame"], answer: "llames" },
      { type: "order", id: "d11", promptEl: "Μην ανοίγεις το παράθυρο, έχω κρύο.", solution: ["No", "abras", "la", "ventana,", "tengo", "frío."], distractors: ["abre", "abra"] },
      { type: "order", id: "d12", promptEl: "Μην αφήνετε τις βαλίτσες μόνες. (usted)", solution: ["No", "deje", "las", "maletas", "solas."], distractors: ["dejes", "deja"] },
    ],
    exercisesEl: [
      "Γράψε τις οδηγίες του δασκάλου της σχολής οδηγών με τα ρήματα του πλαισίου (αρνητική προστακτική).",
      "Τι θα έλεγε αυτός ο πατέρας στα παιδιά του σε κάθε περίπτωση;",
      "Τι θα έλεγες σε κάθε περίπτωση; Συμπλήρωσε με την αρνητική προστακτική των ρημάτων σε παρένθεση.",
    ],
  },
  {
    id: "u71",
    number: 71,
    page: 152,
    titleEs: "Cierra la ventana. Imperativo: verbos irregulares (1)",
    titleEl: "Προστακτική: ανώμαλα ρήματα (1)",
    introEl:
      "Τα ρήματα που αλλάζουν ρίζα στον ενεστώτα (e → ie, e → i) αλλάζουν και στην προστακτική, εκτός από το θετικό vosotros. Ο κανόνας είναι ο ίδιος με του ενεστώτα: αν το ρήμα κάνει «cierro, cierras», κάνει και «cierra».",
    rules: [
      {
        textEl:
          "Ρήματα e → ie (cerrar, encender, calentar, despertar, empezar, pensar, regar, defender, entender, perder): η ρίζα αλλάζει σε tú, usted, ustedes, και στην αρνητική. Στο θετικό vosotros και στο αρνητικό vosotros μένει e.",
        examples: [
          { es: "Cierra la puerta al salir.", el: "Κλείσε την πόρτα όταν βγαίνεις." },
          { es: "Enciende la luz, que no veo nada.", el: "Άναψε το φως, γιατί δεν βλέπω τίποτα." },
          { es: "Encended las velas. / No cerréis las ventanas.", el: "Ανάψτε τα κεριά. / Μην κλείνετε τα παράθυρα." },
        ],
      },
      {
        textEl:
          "Ρήματα e → i (pedir, elegir, conseguir, corregir, freír, medir, repetir, seguir, servir, sonreír): η ρίζα αλλάζει σε i, και στο αρνητικό vosotros (no pidáis). Στο θετικό vosotros μένει e (pedid).",
        examples: [
          { es: "Pide un café con leche.", el: "Ζήτα έναν καφέ με γάλα." },
          { es: "Repetid la frase, por favor.", el: "Επαναλάβετε την πρόταση, παρακαλώ." },
          { es: "Sonríe un poco, estás muy serio.", el: "Χαμογέλα λίγο, είσαι πολύ σοβαρός." },
        ],
      },
      {
        textEl:
          "Τα ρήματα σε -gir αλλάζουν g → j στους τύπους που παίρνουν a (elija, elijas, elijáis, elijan). Τα ρήματα σε -guir χάνουν το u στους ίδιους τύπους (siga, sigas, sigáis, sigan).",
        examples: [
          { es: "Elige un color para la pared.", el: "Διάλεξε ένα χρώμα για τον τοίχο." },
          { es: "Sigue recto hasta la plaza.", el: "Συνέχισε ευθεία μέχρι την πλατεία." },
        ],
      },
      {
        textEl:
          "Οι χρήσεις είναι οι ίδιες με των κανονικών ρημάτων: εντολές και οδηγίες, αιτήματα, συμβουλές, άδεια ή άρνηση άδειας.",
        examples: [
          { es: "Piensa antes de decidir.", el: "Σκέψου πριν αποφασίσεις. (συμβουλή)" },
          { es: "No pierdas el tiempo.", el: "Μη χάνεις τον χρόνο σου. (προειδοποίηση)" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "e → ie: cerrar y encender",
        headers: ["", "cerrar", "no cerrar", "encender", "no encender"],
        rows: [
          ["tú", "cierra", "no cierres", "enciende", "no enciendas"],
          ["usted", "cierre", "no cierre", "encienda", "no encienda"],
          ["vosotros / vosotras", "cerrad", "no cerréis", "encended", "no encendáis"],
          ["ustedes", "cierren", "no cierren", "enciendan", "no enciendan"],
        ],
      },
      {
        titleEl: "e → i: pedir",
        headers: ["", "pedir", "no pedir"],
        rows: [
          ["tú", "pide", "no pidas"],
          ["usted", "pida", "no pida"],
          ["vosotros / vosotras", "pedid", "no pidáis"],
          ["ustedes", "pidan", "no pidan"],
        ],
      },
      {
        titleEl: "elegir y seguir",
        headers: ["", "elegir", "no elegir", "seguir", "no seguir"],
        rows: [
          ["tú", "elige", "no elijas", "sigue", "no sigas"],
          ["usted", "elija", "no elija", "siga", "no siga"],
          ["vosotros / vosotras", "elegid", "no elijáis", "seguid", "no sigáis"],
          ["ustedes", "elijan", "no elijan", "sigan", "no sigan"],
        ],
      },
    ],
    tipsEl: [
      "Το θετικό vosotros δεν αλλάζει ποτέ ρίζα (cerrad, pedid, seguid), γιατί ο τόνος πέφτει στην κατάληξη. Αυτό είναι το μόνο πρόσωπο που μένει «κανονικό».",
      "Στο αρνητικό vosotros υπάρχει διαφορά: τα e → ie κρατούν e (no cerréis, no encendáis), ενώ τα e → i κρατούν i (no pidáis, no sigáis).",
      "Τα ρήματα freír και sonreír έχουν τόνο στο í: fríe, frían, sonríe, sonreíd.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "(tú) ___ la ventana, que hace frío.", hintEl: "Κλείσε το παράθυρο, κάνει κρύο.", answer: "cierra" },
      { type: "cloze", id: "d2", textEs: "Señora, ___ la luz, por favor.", hintEl: "Κυρία, ανάψτε το φως, παρακαλώ.", answer: "encienda" },
      { type: "cloze", id: "d3", textEs: "Chicos, ___ a comer. La comida está lista.", hintEl: "Παιδιά, ξεκινήστε να τρώτε. Το φαγητό είναι έτοιμο.", answer: "empezad", alternatives: ["empiecen"], explainEl: "Στο θετικό vosotros δεν αλλάζει η ρίζα: empezar → empezad." },
      { type: "cloze", id: "d4", textEs: "Luis, no ___ el jardín al mediodía.", hintEl: "Luis, μην ποτίζεις τον κήπο το μεσημέρι.", answer: "riegues", explainEl: "Το regar αλλάζει e → ie και γράφει gu πριν από -e: riegues." },
      { type: "cloze", id: "d5", textEs: "___ bien antes de decidir, Elena.", hintEl: "Σκέψου καλά πριν αποφασίσεις, Elena.", answer: "piensa" },
      { type: "cloze", id: "d6", textEs: "No me ___ más dinero, por favor, Pablo.", hintEl: "Μη μου ζητάς άλλα χρήματα, Pablo, σε παρακαλώ.", answer: "pidas" },
      { type: "cloze", id: "d7", textEs: "Chicos, ___ la frase otra vez.", hintEl: "Παιδιά, επαναλάβετε την πρόταση άλλη μια φορά.", answer: "repetid", alternatives: ["repitan"] },
      { type: "choice", id: "d8", promptEs: "___ recto hasta la plaza, señor.", promptEl: "Συνεχίστε ευθεία μέχρι την πλατεία, κύριε.", options: ["Siga", "Sigue", "Seguid", "Sigan"], answer: "Siga" },
      { type: "choice", id: "d9", promptEs: "No ___ más pasteles, chicos (vosotros).", promptEl: "Μη ζητάτε άλλα γλυκά, παιδιά.", options: ["pidáis", "pedáis", "pedid", "pidan"], answer: "pidáis", explainEl: "Στο αρνητικό vosotros του pedir η ρίζα γίνεται i: no pidáis." },
      { type: "choice", id: "d10", promptEs: "No ___ las ventanas, chicos (vosotros).", promptEl: "Μην κλείνετε τα παράθυρα, παιδιά.", options: ["cerréis", "cierréis", "cerrad", "cierren"], answer: "cerréis", explainEl: "Στο αρνητικό vosotros του cerrar μένει e: no cerréis (όχι «cierréis»)." },
      { type: "order", id: "d11", promptEl: "Διάλεξε ένα δώρο για τη Marta.", solution: ["Elige", "un", "regalo", "para", "Marta."], distractors: ["eliges", "elije"] },
      { type: "order", id: "d12", promptEl: "Μην ανάβετε το φως. (ustedes)", solution: ["No", "enciendan", "la", "luz."], distractors: ["enciendas", "encended"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τον πίνακα με τη θετική και την αρνητική προστακτική των ρημάτων empezar, defender και conseguir.",
      "Συμπλήρωσε το σημείωμα με οδηγίες προς έναν φίλο, με τα ρήματα του πλαισίου.",
      "Συμπλήρωσε τους διαλόγους με τα ρήματα του πλαισίου.",
      "Τι θα έλεγες σε κάθε περίπτωση; Συμπλήρωσε με την προστακτική των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε τις διαφημίσεις με την προστακτική των ρημάτων σε παρένθεση.",
    ],
  },
  {
    id: "u72",
    number: 72,
    page: 154,
    titleEs: "No juegues aquí. Imperativo: verbos irregulares (2)",
    titleEl: "Προστακτική: ανώμαλα ρήματα (2)",
    introEl:
      "Εδώ βλέπουμε τα ρήματα με αλλαγή o → ue (volver, contar, dormir) και το jugar (u → ue). Ισχύει ο ίδιος κανόνας με το προηγούμενο κεφάλαιο: αλλάζει η ρίζα εκτός από το θετικό vosotros.",
    rules: [
      {
        textEl:
          "Ρήματα o → ue (soñar, volver, comprobar, contar, encontrar, probar, recordar, volar, morder, mover): η ρίζα αλλάζει σε tú, usted, ustedes και στην αρνητική. Στο θετικό και στο αρνητικό vosotros μένει o (soñad, no soñéis).",
        examples: [
          { es: "Cuenta las sillas del salón.", el: "Μέτρα τις καρέκλες του σαλονιού." },
          { es: "Vuelve a casa antes de las diez.", el: "Γύρνα σπίτι πριν τις δέκα." },
          { es: "Volved pronto. / No volváis tarde.", el: "Γυρίστε σύντομα. / Μη γυρίσετε αργά." },
        ],
      },
      {
        textEl:
          "Το dormir αλλάζει o → ue, αλλά στο αρνητικό vosotros γίνεται o → u: no durmáis. Στο θετικό vosotros είναι dormid.",
        examples: [
          { es: "Duerme ocho horas todas las noches.", el: "Κοιμήσου οκτώ ώρες κάθε βράδυ." },
          { es: "No durmáis en el sofá.", el: "Μην κοιμάστε στον καναπέ." },
        ],
      },
      {
        textEl:
          "Το jugar αλλάζει u → ue (juega, juegue, jueguen), και πριν από -e γράφει gu: no juegues, no juguéis. Στο θετικό vosotros είναι jugad.",
        examples: [
          { es: "Juega con tu hermano.", el: "Παίξε με τον αδερφό σου." },
          { es: "No juguéis cerca de la carretera.", el: "Μην παίζετε κοντά στον δρόμο." },
        ],
      },
      {
        textEl:
          "Οι χρήσεις είναι οι ίδιες με των άλλων ρημάτων: εντολές και οδηγίες, αιτήματα, συμβουλές, άδεια ή άρνηση άδειας.",
        examples: [
          { es: "¡Vuelve aquí ahora mismo!", el: "Γύρνα εδώ αμέσως! (εντολή)" },
          { es: "¿Podemos jugar en el salón? No, jugad en el patio.", el: "Μπορούμε να παίξουμε στο σαλόνι; Όχι, παίξτε στην αυλή. (άρνηση άδειας)" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "o → ue: soñar y volver",
        headers: ["", "soñar", "no soñar", "volver", "no volver"],
        rows: [
          ["tú", "sueña", "no sueñes", "vuelve", "no vuelvas"],
          ["usted", "sueñe", "no sueñe", "vuelva", "no vuelva"],
          ["vosotros / vosotras", "soñad", "no soñéis", "volved", "no volváis"],
          ["ustedes", "sueñen", "no sueñen", "vuelvan", "no vuelvan"],
        ],
      },
      {
        titleEl: "dormir y jugar",
        headers: ["", "dormir", "no dormir", "jugar", "no jugar"],
        rows: [
          ["tú", "duerme", "no duermas", "juega", "no juegues"],
          ["usted", "duerma", "no duerma", "juegue", "no juegue"],
          ["vosotros / vosotras", "dormid", "no durmáis", "jugad", "no juguéis"],
          ["ustedes", "duerman", "no duerman", "jueguen", "no jueguen"],
        ],
      },
    ],
    tipsEl: [
      "Το jugar είναι το μόνο ρήμα με u → ue. Μετά το jugar το άθλημα παίρνει a: juega al tenis, jugad al fútbol.",
      "Το dormir και το morir έχουν u στο αρνητικό vosotros: no durmáis, no muráis. Τα υπόλοιπα o → ue ρήματα κρατούν το o: no volváis, no soñéis.",
      "Το «Recuerda que...» (Θυμήσου ότι...) είναι πολύ συνηθισμένο για υπενθυμίσεις.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "(tú) ___ las sillas del salón.", hintEl: "Μέτρα τις καρέκλες του σαλονιού.", answer: "cuenta" },
      { type: "cloze", id: "d2", textEs: "(tú) ___ a casa antes de las diez.", hintEl: "Γύρνα σπίτι πριν τις δέκα.", answer: "vuelve" },
      { type: "cloze", id: "d3", textEs: "Señor Vega, ___ esta sopa, está riquísima.", hintEl: "Κύριε Vega, δοκιμάστε αυτή τη σούπα, είναι πεντανόστιμη.", answer: "pruebe" },
      { type: "cloze", id: "d4", textEs: "Chicos (vosotros), no ___ en el sofá.", hintEl: "Παιδιά, μην κοιμάστε στον καναπέ.", answer: "durmáis", explainEl: "Στο αρνητικό vosotros του dormir το o γίνεται u: no durmáis." },
      { type: "cloze", id: "d5", textEs: "(tú) ___ bien esta noche; mañana tienes examen.", hintEl: "Κοιμήσου καλά απόψε, αύριο έχεις εξετάσεις.", answer: "duerme" },
      { type: "cloze", id: "d6", textEs: "Luis, no ___ con el fuego.", hintEl: "Luis, μην παίζεις με τη φωτιά.", answer: "juegues", explainEl: "Το jugar αλλάζει u → ue και γράφει gu πριν από -e: no juegues." },
      { type: "cloze", id: "d7", textEs: "Chicos, ___ en el patio, no en el salón.", hintEl: "Παιδιά, παίξτε στην αυλή, όχι στο σαλόνι.", answer: "jugad", alternatives: ["jueguen"] },
      { type: "cloze", id: "d8", textEs: "Señora, ___ las respuestas antes de entregar el examen.", hintEl: "Κυρία, ελέγξτε τις απαντήσεις πριν παραδώσετε το διαγώνισμα.", answer: "compruebe" },
      { type: "choice", id: "d9", promptEs: "Chicos (vosotros), ___ a casa pronto.", promptEl: "Παιδιά, γυρίστε σπίτι σύντομα.", options: ["volved", "vuelved", "vuelvan", "volvad"], answer: "volved", explainEl: "Στο θετικό vosotros δεν αλλάζει ρίζα: volver → volved." },
      { type: "choice", id: "d10", promptEs: "Ana, no ___ tarde, por favor.", promptEl: "Ana, μη γυρίσεις αργά, παρακαλώ.", options: ["vuelvas", "volvas", "vuelves", "vuelva"], answer: "vuelvas", explainEl: "Η αρνητική προστακτική του tú παίρνει τον τύπο του subjuntivo: no vuelvas." },
      { type: "order", id: "d11", promptEl: "Θυμήσου ότι αύριο έχουμε εξέταση.", solution: ["Recuerda", "que", "mañana", "tenemos", "un", "examen."], distractors: ["Recuerde", "recordad"] },
      { type: "order", id: "d12", promptEl: "Παιδιά, μην παίζετε στον δρόμο. (vosotros)", solution: ["No", "juguéis", "en", "la", "calle,", "chicos."], alternatives: [["Chicos,", "no", "juguéis", "en", "la", "calle."]], distractors: ["juegues", "jugad"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τους πίνακες με τη θετική και την αρνητική προστακτική των ρημάτων recordar και morder.",
      "Συμπλήρωσε τους διαλόγους με τα ρήματα του πλαισίου, σε θετική ή αρνητική μορφή.",
      "Τι θα έλεγες σε κάθε περίπτωση; Συμπλήρωσε με την προστακτική των ρημάτων σε παρένθεση.",
      "Συμπλήρωσε τις διαφημίσεις με την προστακτική των ρημάτων σε παρένθεση.",
    ],
  },
];
