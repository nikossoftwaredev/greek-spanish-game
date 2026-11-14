import type { GuUnit } from "@/types/content";

export const guUnits025To036: GuUnit[] = [
  {
    id: "u25",
    number: 25,
    page: 60,
    titleEs: "mucho, poco, demasiado, suficiente... (Indefinidos 3)",
    titleEl: "Πολύς, λίγος, υπερβολικός, αρκετός",
    introEl:
      "Τα mucho, poco, demasiado, suficiente και bastante δείχνουν πόσο από κάτι υπάρχει. Μπροστά από ουσιαστικό συμφωνούν μαζί του, και μπορούν να μείνουν μόνα τους όταν ξέρουμε περί τίνος μιλάμε.",
    rules: [
      {
        textEl:
          "Το mucho είναι μεγάλη ποσότητα και το poco μικρή. Το demasiado είναι περισσότερο από όσο χρειάζεται, ενώ το suficiente είναι όσο ακριβώς χρειάζεται.",
        examples: [
          { es: "En esta ciudad hay mucho tráfico.", el: "Σε αυτή την πόλη υπάρχει πολλή κίνηση." },
          { es: "Has puesto demasiada sal.", el: "Έβαλες υπερβολικά πολύ αλάτι." },
          { es: "Tenemos suficiente pan para cenar.", el: "Έχουμε αρκετό ψωμί για το δείπνο." },
        ],
      },
      {
        textEl:
          "Τα mucho, poco και demasiado συμφωνούν με το ουσιαστικό σε γένος και αριθμό (-o, -a, -os, -as). Με ενικό μιλάμε για πράγματα που δεν μετριούνται ένα ένα (agua, tiempo, dinero), με πληθυντικό για πράγματα που μετριούνται.",
        examples: [
          { es: "Hay mucha gente en la plaza.", el: "Υπάρχει πολύς κόσμος στην πλατεία." },
          { es: "Tengo pocos amigos en esta ciudad.", el: "Έχω λίγους φίλους σε αυτή την πόλη." },
        ],
      },
      {
        textEl:
          "Το suficiente δεν έχει ξεχωριστό θηλυκό: αλλάζει μόνο στον αριθμό (suficiente, suficientes). Μπαίνει συνήθως πριν από το ουσιαστικό, αλλά μπορεί να μπει και μετά.",
        examples: [
          { es: "No hay suficiente leche.", el: "Δεν υπάρχει αρκετό γάλα." },
          { es: "Hay leche suficiente.", el: "Υπάρχει αρκετό γάλα." },
        ],
      },
      {
        textEl:
          "Το bastante έχει δύο σημασίες: «αρκετός» (μεγάλη ποσότητα, όχι όμως τόση όση το mucho) και «όσος χρειάζεται» (σαν το suficiente). Αλλάζει μόνο στον αριθμό: bastante, bastantes.",
        examples: [
          { es: "Hoy hay bastante tráfico.", el: "Σήμερα έχει αρκετή κίνηση." },
          { es: "Tenemos bastantes sillas para todos.", el: "Έχουμε αρκετές καρέκλες για όλους." },
        ],
      },
      {
        textEl:
          "Όταν είναι σαφές για ποιο πράγμα μιλάμε, αυτές οι λέξεις μπορούν να μείνουν μόνες τους. Παίρνουν τη μορφή του ουσιαστικού που εννοείται.",
        examples: [
          { es: "¿Tienes vasos? Sí, pocos.", el: "Έχεις ποτήρια; Ναι, λίγα." },
          { es: "¿Hay sopa? Sí, bastante.", el: "Υπάρχει σούπα; Ναι, αρκετή." },
        ],
      },
      {
        textEl:
          "Το poco δείχνει μικρή ποσότητα που δεν φτάνει. Το «un poco de» + μη αριθμήσιμο ουσιαστικό σημαίνει «λίγο, κάτι» και είναι θετικό. Μόνο του, το «un poco» χρησιμοποιείται όταν το ουσιαστικό έχει ήδη αναφερθεί.",
        examples: [
          { es: "Hablo poco alemán.", el: "Μιλάω λίγα γερμανικά (δεν φτάνουν για να συνεννοηθώ)." },
          { es: "Hablo un poco de alemán.", el: "Μιλάω κάποια γερμανικά (τα βγάζω πέρα)." },
          { es: "¿Quieres sopa? Sí, un poco.", el: "Θέλεις σούπα; Ναι, λίγη." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι μορφές των ποσοτικών",
        headers: ["", "masculino singular", "femenino singular", "masculino plural", "femenino plural"],
        rows: [
          ["mucho", "mucho", "mucha", "muchos", "muchas"],
          ["poco", "poco", "poca", "pocos", "pocas"],
          ["demasiado", "demasiado", "demasiada", "demasiados", "demasiadas"],
          ["suficiente", "suficiente", "suficiente", "suficientes", "suficientes"],
          ["bastante", "bastante", "bastante", "bastantes", "bastantes"],
        ],
      },
    ],
    tipsEl: [
      "Μην μπερδεύεις το muy με το mucho. Το muy μπαίνει πριν από επίθετο ή επίρρημα (muy cansado, muy bien), ενώ το mucho πριν από ουσιαστικό (mucho trabajo).",
      "Το poco και το «un poco de» στα ελληνικά λέγονται και τα δύο «λίγο», αλλά διαφέρουν στο νόημα: poco = δεν φτάνει, un poco de = κάτι έχω. Πρόσεξε το πλαίσιο.",
      "Το suficiente και το bastante δεν έχουν θηλυκό: λέμε suficientes sillas, όχι «suficientas sillas».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Hay ___ gente en la plaza.", hintEl: "Υπάρχει πολύς κόσμος στην πλατεία.", answer: "mucha", explainEl: "Το gente είναι θηλυκό ενικού, άρα mucha." },
      { type: "cloze", id: "d2", textEs: "Mi hermano tiene ___ amigos, solo dos.", hintEl: "Ο αδερφός μου έχει λίγους φίλους, μόνο δύο.", answer: "pocos" },
      { type: "choice", id: "d3", promptEs: "Ayer comí ___ chocolate y ahora me duele el estómago.", promptEl: "Χθες έφαγα υπερβολική σοκολάτα και τώρα πονάει το στομάχι μου.", options: ["demasiado", "demasiada", "demasiados", "demasiadas"], answer: "demasiado", explainEl: "Το chocolate είναι αρσενικό ενικού." },
      { type: "choice", id: "d4", promptEs: "Tenemos ___ sillas para todos los invitados.", promptEl: "Έχουμε αρκετές καρέκλες για όλους τους καλεσμένους.", options: ["suficiente", "suficientes", "suficientas", "suficiento"], answer: "suficientes", explainEl: "Το suficiente δεν έχει θηλυκό. Στον πληθυντικό παίρνει μόνο -s: suficientes." },
      { type: "cloze", id: "d5", textEs: "Somos cuatro y tenemos ocho huevos. Son ___ para la tortilla.", hintEl: "Είμαστε τέσσερις και έχουμε οκτώ αυγά. Είναι αρκετά για την ομελέτα.", answer: "suficientes", alternatives: ["bastantes"] },
      { type: "choice", id: "d6", promptEs: "Hablo ___ francés. No puedo hablar con los turistas.", promptEl: "Μιλάω λίγα γαλλικά. Δεν μπορώ να μιλήσω με τους τουρίστες.", options: ["poco", "un poco de", "pocos", "poca"], answer: "poco", explainEl: "Το poco δείχνει ότι δεν φτάνει. Το «un poco de francés» θα σήμαινε ότι τα βγάζεις πέρα." },
      { type: "choice", id: "d7", promptEs: "Dame ___ agua, por favor. Tengo sed.", promptEl: "Δώσε μου λίγο νερό, παρακαλώ. Διψάω.", options: ["un poco de", "poco", "pocos", "un poco"], answer: "un poco de", explainEl: "Μπροστά από ουσιαστικό χρειάζεται «un poco de»: un poco de agua." },
      { type: "cloze", id: "d8", textEs: "¿Tienes muchos libros? Sí, tengo ___, más de mil.", hintEl: "Έχεις πολλά βιβλία; Ναι, έχω πολλά, πάνω από χίλια.", answer: "muchos", explainEl: "Μόνο του παίρνει το γένος και τον αριθμό του libros: muchos." },
      { type: "order", id: "d9", promptEl: "Η Ana έχει πολλές φίλες.", solution: ["Ana", "tiene", "muchas", "amigas."], distractors: ["mucho", "mucha"] },
      {
        type: "order",
        id: "d10",
        promptEl: "Δεν έχω αρκετά χρήματα για το ταξίδι.",
        solution: ["No", "tengo", "suficiente", "dinero", "para", "el", "viaje."],
        distractors: ["suficientes", "poca"],
        alternatives: [["No", "tengo", "dinero", "suficiente", "para", "el", "viaje."]],
        explainEl: "Το suficiente μπορεί να μπει πριν ή μετά από το ουσιαστικό.",
      },
      { type: "choice", id: "d11", promptEs: "Marta gana ___ dinero: no es rica, pero vive bien.", promptEl: "Η Marta κερδίζει αρκετά χρήματα: δεν είναι πλούσια, αλλά ζει καλά.", options: ["bastante", "bastantes", "pocas", "demasiadas"], answer: "bastante" },
      { type: "cloze", id: "d12", textEs: "Tenemos ___ horas de clase y estamos cansados.", hintEl: "Έχουμε υπερβολικά πολλές ώρες μάθημα και είμαστε κουρασμένοι.", answer: "demasiadas" },
    ],
    exercisesEl: [
      "Αντικατέστησε τις υπογραμμισμένες ποσότητες με mucho/a/os/as ή poco/a/os/as.",
      "Πες αν κάθε ποσότητα σου φαίνεται υπερβολική (demasiado) ή αρκετή (suficiente).",
      "Περίγραψε τι υπάρχει σε κάθε εικόνα χρησιμοποιώντας mucho, poco ή bastante.",
      "Συμπλήρωσε τις προτάσεις με mucho, poco, demasiado, suficiente ή bastante.",
      "Συμπλήρωσε τις προτάσεις με poco, un poco ή un poco de.",
    ],
  },
  {
    id: "u26",
    number: 26,
    page: 62,
    titleEs: "alguien, algo, nadie, nada (Indefinidos 4)",
    titleEl: "Κάποιος, κάτι, κανείς, τίποτα",
    introEl:
      "Τα alguien (κάποιος), algo (κάτι), nadie (κανείς) και nada (τίποτα) μιλούν για πρόσωπα και πράγματα που δεν ξέρουμε ή που δεν υπάρχουν. Στις αρνητικές προτάσεις ισχύει η διπλή άρνηση, όπως στα ελληνικά: «δεν υπάρχει κανείς».",
    rules: [
      {
        textEl:
          "Το alguien αναφέρεται σε πρόσωπο και το algo σε πράγμα, όταν δεν ξέρουμε ποιο είναι. Τα χρησιμοποιούμε σε καταφατικές προτάσεις και σε ερωτήσεις.",
        examples: [
          { es: "Alguien ha dejado una nota en mi mesa.", el: "Κάποιος άφησε ένα σημείωμα στο γραφείο μου." },
          { es: "¿Ves algo extraño?", el: "Βλέπεις κάτι περίεργο;" },
        ],
      },
      {
        textEl: "Το nadie σημαίνει «κανένα πρόσωπο» και το nada «κανένα πράγμα». Και οι δύο λέξεις είναι αναλλοίωτες.",
        examples: [
          { es: "Nadie sabe la respuesta.", el: "Κανείς δεν ξέρει την απάντηση." },
          { es: "Hoy no quiero nada.", el: "Σήμερα δεν θέλω τίποτα." },
        ],
      },
      {
        textEl:
          "Αν το nadie ή το nada μπει πριν από το ρήμα, το ρήμα μένει καταφατικό. Αν μπει μετά το ρήμα, χρειάζεται no πριν από το ρήμα (διπλή άρνηση).",
        examples: [
          { es: "Nadie ha venido a la reunión.", el: "Κανείς δεν ήρθε στη σύσκεψη." },
          { es: "No ha venido nadie a la reunión.", el: "Δεν ήρθε κανείς στη σύσκεψη." },
        ],
      },
      {
        textEl:
          "Με μη αριθμήσιμα ουσιαστικά (agua, queso, español...) λέμε «algo de» για κάποια ποσότητα και «nada de» για καθόλου. Το «algo de» είναι σαν το «un poco de».",
        examples: [
          { es: "Queda algo de pastel.", el: "Έμεινε λίγο γλυκό." },
          { es: "No queda nada de pastel.", el: "Δεν έμεινε καθόλου γλυκό." },
        ],
      },
      {
        textEl:
          "Τα algo και nada μπορούν να χρησιμοποιηθούν και μόνα τους για ποσότητα, όταν το ουσιαστικό έχει ήδη αναφερθεί.",
        examples: [{ es: "¿Has traído dinero? Algo. ¿Y tú? Yo, nada.", el: "Έφερες χρήματα; Κάτι. Κι εσύ; Εγώ τίποτα." }],
      },
    ],
    tables: [
      {
        titleEl: "Πρόσωπα και πράγματα",
        headers: ["", "Personas", "Cosas"],
        rows: [
          ["Frases afirmativas y preguntas", "alguien", "algo"],
          ["Frases negativas", "nadie", "nada"],
          ["+ nombre no contable", "(no se usa)", "algo de, nada de"],
        ],
      },
      {
        titleEl: "Η θέση του no",
        headers: ["Estructura", "Ejemplo"],
        rows: [
          ["nadie, nada + verbo afirmativo", "Nadie me ha avisado."],
          ["no + verbo + nadie", "No me ha avisado nadie."],
          ["no + verbo + nada", "No he comido nada."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «δεν ήρθε κανείς», και στα ισπανικά ισχύει το ίδιο: «No ha venido nadie». Αν όμως το nadie μπει πρώτο, το no εξαφανίζεται: «Nadie ha venido», όχι «Nadie no ha venido».",
      "Το alguien και το nadie παίρνουν ρήμα στον ενικό. Όταν είναι άμεσο αντικείμενο και αναφέρονται σε πρόσωπο, παίρνουν a: «No veo a nadie», «¿Conoces a alguien aquí?».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "No hay ___ en el aula. Está vacía.", hintEl: "Δεν υπάρχει κανείς στην τάξη. Είναι άδεια.", answer: "nadie" },
      { type: "choice", id: "d2", promptEs: "___ me ha llamado esta mañana.", promptEl: "Κανείς δεν με πήρε τηλέφωνο σήμερα το πρωί.", options: ["Nadie", "Alguien", "No nadie", "Algo"], answer: "Nadie", explainEl: "Όταν το nadie μπαίνει πριν από το ρήμα, δεν χρειάζεται no." },
      { type: "cloze", id: "d3", textEs: "¿Quieres ___ de beber?", hintEl: "Θέλεις κάτι να πιεις;", answer: "algo" },
      { type: "choice", id: "d4", promptEs: "No he comprado ___ en el mercado.", promptEl: "Δεν αγόρασα τίποτα στην αγορά.", options: ["nada", "algo", "nadie", "alguien"], answer: "nada" },
      { type: "cloze", id: "d5", textEs: "¿Hay ___ en casa? No, no hay nadie.", hintEl: "Υπάρχει κάποιος στο σπίτι; Όχι, δεν υπάρχει κανείς.", answer: "alguien" },
      { type: "cloze", id: "d6", textEs: "No sé ___ de chino.", hintEl: "Δεν ξέρω καθόλου κινέζικα.", answer: "nada", explainEl: "Το «nada de» + μη αριθμήσιμο ουσιαστικό σημαίνει «καθόλου». Το no πριν από το ρήμα είναι απαραίτητο." },
      { type: "choice", id: "d7", promptEs: "Tengo ___ de dinero, suficiente para el café.", promptEl: "Έχω κάποια χρήματα, αρκετά για τον καφέ.", options: ["algo", "alguien", "nadie", "nada"], answer: "algo" },
      { type: "choice", id: "d8", promptEs: "¿Sabes inglés? ___. Entiendo un poco.", promptEl: "Ξέρεις αγγλικά; Κάτι ξέρω. Καταλαβαίνω λίγα.", options: ["Algo", "Alguien", "Nadie", "Nada de"], answer: "Algo" },
      { type: "order", id: "d9", promptEl: "Δεν βλέπω κανέναν στον δρόμο.", solution: ["No", "veo", "a", "nadie", "en", "la", "calle."], distractors: ["nada", "alguien"], explainEl: "Όταν το nadie είναι αντικείμενο προσώπου, παίρνει a." },
      { type: "order", id: "d10", promptEl: "Κανείς δεν ξέρει τίποτα.", solution: ["Nadie", "sabe", "nada."], distractors: ["alguien", "no"] },
      { type: "order", id: "d11", promptEl: "Τηλεφώνησε κανείς;", solution: ["¿Ha", "llamado", "alguien?"], distractors: ["nadie", "algo"], alternatives: [["¿Alguien", "ha", "llamado?"]], explainEl: "Στις ερωτήσεις συνήθως χρησιμοποιούμε alguien, όχι nadie." },
      { type: "choice", id: "d12", promptEs: "¿Cuál es correcta?", promptEl: "Ποια πρόταση είναι σωστή; (Κανείς δεν με βοηθάει.)", options: ["Nadie no me ayuda.", "No me ayuda nadie.", "Me ayuda nadie.", "No nadie me ayuda."], answer: "No me ayuda nadie.", explainEl: "Είτε «Nadie me ayuda» είτε «No me ayuda nadie». Ποτέ και τα δύο μαζί πριν από το ρήμα." },
    ],
    exercisesEl: [
      "Κοίταξε τις εικόνες και συμπλήρωσε τις προτάσεις με hay ή no hay + alguien, algo, nadie ή nada.",
      "Συμπλήρωσε τις προτάσεις με alguien, algo, nadie ή nada.",
      "Γράψε προτάσεις με τις λέξεις που δίνονται, προσέχοντας αν χρειάζεται το no.",
      "Απάντησε στις ερωτήσεις χρησιμοποιώντας algo, nada, algo de ή nada de.",
      "Συμπλήρωσε τις προτάσεις με algo, nada, algo de ή nada de.",
    ],
  },
  {
    id: "u27",
    number: 27,
    page: 64,
    titleEs: "más, menos, tanto (Comparación con nombres)",
    titleEl: "Περισσότερο, λιγότερο, τόσο: σύγκριση με ουσιαστικά",
    introEl:
      "Για να συγκρίνεις ποσότητες ουσιαστικών χρησιμοποιείς más (περισσότερο), menos (λιγότερο) και tanto (τόσο). Το más και το menos δεν αλλάζουν, ενώ το tanto συμφωνεί με το ουσιαστικό.",
    rules: [
      {
        textEl: "Για μεγαλύτερη ποσότητα λέμε más + ουσιαστικό (+ que). Για μικρότερη ποσότητα λέμε menos + ουσιαστικό (+ que).",
        examples: [
          { es: "Mi barrio tiene más tiendas que el tuyo.", el: "Η γειτονιά μου έχει περισσότερα μαγαζιά από τη δική σου." },
          { es: "Hoy tengo menos trabajo que ayer.", el: "Σήμερα έχω λιγότερη δουλειά από χθες." },
        ],
      },
      {
        textEl: "Για ίση ποσότητα λέμε tanto, tanta, tantos, tantas + ουσιαστικό (+ como). Το tanto παίρνει το γένος και τον αριθμό του ουσιαστικού.",
        examples: [
          { es: "No tengo tanta paciencia como mi madre.", el: "Δεν έχω τόση υπομονή όσο η μητέρα μου." },
          { es: "Ella ve tantas series como yo.", el: "Εκείνη βλέπει τόσες σειρές όσο εγώ." },
        ],
      },
      {
        textEl: "Μετά το que και το como χρησιμοποιούμε αντωνυμίες υποκειμένου: yo, tú, él, ella, nosotros...",
        examples: [
          { es: "Tú tienes más ropa que yo.", el: "Εσύ έχεις περισσότερα ρούχα από μένα." },
          { es: "Vosotros tenéis tantas vacaciones como ellos.", el: "Εσείς έχετε τόσες διακοπές όσο εκείνοι." },
        ],
      },
      {
        textEl: "Όταν είναι φανερό με τι συγκρίνουμε, παραλείπουμε το que ή το como.",
        examples: [
          { es: "En verano hay menos tráfico.", el: "Το καλοκαίρι υπάρχει λιγότερη κίνηση." },
          { es: "Hoy no tengo tanto sueño.", el: "Σήμερα δεν νυστάζω τόσο." },
        ],
      },
      {
        textEl:
          "Στις καταφατικές προτάσεις το tanto συνοδεύεται συνήθως από το como και τον όρο σύγκρισης. Στις αρνητικές μπορεί να μείνει μόνο του.",
        examples: [
          { es: "Yo tengo tantos como mi hermano.", el: "Εγώ έχω τόσους όσο ο αδερφός μου." },
          { es: "Yo no tengo tantos.", el: "Εγώ δεν έχω τόσους πολλούς." },
        ],
      },
      {
        textEl: "Τα más, menos και tanto μπορούν να μείνουν μόνα τους όταν το ουσιαστικό έχει ήδη αναφερθεί.",
        examples: [{ es: "Ana tiene veinte plantas. Yo tengo más.", el: "Η Ana έχει είκοσι φυτά. Εγώ έχω περισσότερα." }],
      },
    ],
    tables: [
      {
        titleEl: "Τρεις τύποι σύγκρισης",
        headers: ["Comparación", "Estructura", "Ejemplo"],
        rows: [
          ["Más (+)", "más + nombre (+ que)", "Tengo más tareas que ayer."],
          ["Menos (-)", "menos + nombre (+ que)", "Bebo menos café que mi padre."],
          ["Igual (=)", "tanto/a/os/as + nombre (+ como)", "Ella tiene tantas dudas como yo."],
        ],
      },
      {
        titleEl: "Οι μορφές του tanto",
        headers: ["masculino singular", "femenino singular", "masculino plural", "femenino plural"],
        rows: [["tanto", "tanta", "tantos", "tantas"]],
      },
    ],
    tipsEl: [
      "Το ελληνικό «τόσο ... όσο» αντιστοιχεί στο tanto ... como. Πρόσεξε: το «όσο» είναι como και όχι que. Λέμε «tantos libros como tú», όχι «tantos libros que tú».",
      "Το más και το menos δεν αλλάζουν ποτέ (más amigas, menos amigos), αλλά το tanto συμφωνεί: tanta gente, tantos coches.",
      "Μετά το que και το como δεν βάζουμε «mí» ή «me»: λέμε «más que yo», «como tú».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi hermano tiene ___ libros que yo.", hintEl: "Ο αδερφός μου έχει περισσότερα βιβλία από μένα.", answer: "más" },
      { type: "cloze", id: "d2", textEs: "Hoy hay ___ coches que ayer: no hay tráfico.", hintEl: "Σήμερα υπάρχουν λιγότερα αυτοκίνητα από χθες: δεν έχει κίνηση.", answer: "menos" },
      { type: "cloze", id: "d3", textEs: "No tengo ___ hambre como tú.", hintEl: "Δεν πεινάω τόσο όσο εσύ.", answer: "tanta", explainEl: "Το hambre είναι θηλυκό (el hambre, αλλά tanta hambre)." },
      { type: "choice", id: "d4", promptEs: "Ana trabaja ___ horas como Pablo.", promptEl: "Η Ana δουλεύει τόσες ώρες όσο ο Pablo.", options: ["tanto", "tanta", "tantos", "tantas"], answer: "tantas", explainEl: "Το horas είναι θηλυκό πληθυντικού." },
      { type: "cloze", id: "d5", textEs: "En esta ciudad hay ___ parques como en la mía.", hintEl: "Σε αυτή την πόλη υπάρχουν τόσα πάρκα όσα στη δική μου.", answer: "tantos" },
      { type: "choice", id: "d6", promptEs: "Ellos tienen más dinero que ___.", promptEl: "Αυτοί έχουν περισσότερα χρήματα από εμένα.", options: ["yo", "mí", "me", "conmigo"], answer: "yo", explainEl: "Μετά το que χρησιμοποιούμε αντωνυμία υποκειμένου." },
      { type: "choice", id: "d7", promptEs: "Pedro tiene tantos amigos ___ su hermano.", promptEl: "Ο Pedro έχει τόσους φίλους όσο ο αδερφός του.", options: ["como", "que", "de", "más"], answer: "como" },
      { type: "choice", id: "d8", promptEs: "Antes bebía ___ café que ahora.", promptEl: "Παλιά έπινα λιγότερο καφέ από τώρα.", options: ["menos", "tanto", "tanta", "muy"], answer: "menos" },
      { type: "cloze", id: "d9", textEs: "Mi vecina tiene tres gatos. Yo tengo ___: tengo cinco.", hintEl: "Η γειτόνισσά μου έχει τρεις γάτες. Εγώ έχω περισσότερες: έχω πέντε.", answer: "más" },
      { type: "order", id: "d10", promptEl: "Σήμερα έχω λιγότερο χρόνο από χθες.", solution: ["Hoy", "tengo", "menos", "tiempo", "que", "ayer."], distractors: ["tanto", "como"] },
      { type: "order", id: "d11", promptEl: "Η Elena έχει τόσες φίλες όσο εγώ.", solution: ["Elena", "tiene", "tantas", "amigas", "como", "yo."], distractors: ["que", "tanto"] },
      { type: "order", id: "d12", promptEl: "Εμείς δεν έχουμε τόσα προβλήματα όσο εσείς.", solution: ["Nosotros", "no", "tenemos", "tantos", "problemas", "como", "vosotros."], distractors: ["que", "más"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με más, menos ή tanto/a/os/as και τις λέξεις σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις συγκρίνοντας τις πληροφορίες σε παρένθεση, με τις λέξεις του πλαισίου.",
      "Συμπλήρωσε τις απαντήσεις όπως στο παράδειγμα, με más, menos ή tanto.",
    ],
  },
  {
    id: "u28",
    number: 28,
    page: 66,
    titleEs: "yo, tú, él... (Pronombres personales de sujeto)",
    titleEl: "Προσωπικές αντωνυμίες υποκειμένου",
    introEl:
      "Οι αντωνυμίες υποκειμένου (yo, tú, él...) δείχνουν ποιος κάνει την ενέργεια. Στα ισπανικά το ρήμα δείχνει ήδη το πρόσωπο, οπότε η αντωνυμία χρησιμοποιείται μόνο σε συγκεκριμένες περιπτώσεις.",
    rules: [
      {
        textEl:
          "Ενικός: yo, tú, usted, él, ella. Πληθυντικός: nosotros/nosotras, vosotros/vosotras, ustedes, ellos/ellas. Το usted και το ustedes αντιστοιχούν στο ευγενικό «εσείς» και παίρνουν ρήμα τρίτου προσώπου.",
        examples: [{ es: "Nosotras somos amigas desde niñas.", el: "Εμείς (γυναίκες) είμαστε φίλες από παιδιά." }],
      },
      {
        textEl:
          "Χρησιμοποιούμε tú και vosotros με οικογένεια, φίλους, συναδέλφους και νέους ανθρώπους. Χρησιμοποιούμε usted και ustedes με αγνώστους, ανώτερους και ηλικιωμένους.",
        examples: [
          { es: "Marta, ¿tú vives aquí?", el: "Marta, εσύ μένεις εδώ;" },
          { es: "Señora Pérez, ¿usted trabaja en el hospital?", el: "Κυρία Pérez, εσείς δουλεύετε στο νοσοκομείο;" },
        ],
      },
      {
        textEl:
          "Όταν μια ομάδα έχει άντρες και γυναίκες μαζί, χρησιμοποιούμε το αρσενικό πληθυντικό. Το nosotros περιλαμβάνει εμένα, το vosotros εσένα αλλά όχι εμένα.",
        examples: [
          { es: "Laura y Pablo son profesores: ellos trabajan en Sevilla.", el: "Η Laura και ο Pablo είναι καθηγητές: αυτοί δουλεύουν στη Σεβίλλη." },
          { es: "Tú y yo somos amigos: nosotros nos vemos mucho.", el: "Εσύ κι εγώ είμαστε φίλοι: βλεπόμαστε πολύ." },
        ],
      },
      {
        textEl: "Συνήθως δεν χρειάζεται να βάζουμε yo, tú, él... μπροστά από το ρήμα, γιατί η κατάληξη δείχνει το πρόσωπο.",
        examples: [
          { es: "Vivo en Atenas.", el: "Μένω στην Αθήνα." },
          { es: "¿Dónde trabajas?", el: "Πού δουλεύεις;" },
        ],
      },
      {
        textEl:
          "Βάζουμε την αντωνυμία για αντίθεση, για έμφαση, για να είναι σαφές για ποιον μιλάμε, και όταν το υποκείμενο έχει πολλά πρόσωπα. Μόνη της απαντά στην ερώτηση «ποιος;».",
        examples: [
          { es: "Yo estudio Derecho y tú estudias Medicina.", el: "Εγώ σπουδάζω Νομική κι εσύ Ιατρική." },
          { es: "Pablo y yo somos primos.", el: "Ο Pablo κι εγώ είμαστε ξαδέρφια." },
          { es: "¿Quién ha llamado? Ella.", el: "Ποιος τηλεφώνησε; Εκείνη." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι αντωνυμίες υποκειμένου",
        headers: ["", "Singular", "Plural"],
        rows: [
          ["1.ª persona", "yo", "nosotros / nosotras"],
          ["2.ª persona (confianza)", "tú", "vosotros / vosotras"],
          ["2.ª persona (formal)", "usted", "ustedes"],
          ["3.ª persona", "él / ella", "ellos / ellas"],
        ],
      },
      {
        titleEl: "Ομάδες προσώπων",
        headers: ["Grupo", "Pronombre"],
        rows: [
          ["tú y yo", "nosotros / nosotras"],
          ["ella, él y yo", "nosotros"],
          ["ella, él y tú", "vosotros"],
          ["ella y él", "ellos"],
          ["ella y ella", "ellas"],
        ],
      },
    ],
    tipsEl: [
      "Όπως στα ελληνικά, το υποκείμενο παραλείπεται. Αν λες συνέχεια «Yo soy Ana, yo vivo en Atenas, yo trabajo...», ακούγεται υπερβολικό.",
      "Το usted σημαίνει «εσείς» (ευγενικά) αλλά παίρνει ρήμα τρίτου ενικού: ¿Cómo está usted? Στα ελληνικά το ευγενικό είναι ο πληθυντικός.",
      "Το vosotros χρησιμοποιείται μόνο στην Ισπανία. Στη Λατινική Αμερική λένε ustedes για κάθε πληθυντικό «εσείς».",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Marta y yo somos amigas. ___ trabajamos juntas.", promptEl: "Η Marta κι εγώ είμαστε φίλες. Δουλεύουμε μαζί.", options: ["Nosotras", "Vosotras", "Ellas", "Ustedes"], answer: "Nosotras" },
      { type: "choice", id: "d2", promptEs: "Pablo y Elena son hermanos. ___ viven en Quito.", promptEl: "Ο Pablo και η Elena είναι αδέρφια. Αυτοί μένουν στο Κίτο.", options: ["Ellos", "Ellas", "Vosotros", "Nosotros"], answer: "Ellos", explainEl: "Άντρας και γυναίκα μαζί: χρησιμοποιούμε το αρσενικό ellos." },
      { type: "cloze", id: "d3", textEs: "Mi madre y ___ vamos al mercado los sábados.", hintEl: "Η μητέρα μου κι εγώ πηγαίνουμε στην αγορά τα Σάββατα.", answer: "yo", explainEl: "Μετά το «y» στο υποκείμενο χρησιμοποιούμε yo, όχι mí ή me." },
      { type: "choice", id: "d4", promptEs: "En España, hablas con tus amigos: ¿De dónde sois ___?", promptEl: "Στην Ισπανία, μιλάς με τους φίλους σου: Από πού είστε εσείς;", options: ["vosotros", "ustedes", "ellos", "nosotros"], answer: "vosotros", explainEl: "Το ρήμα sois ταιριάζει με το vosotros." },
      { type: "choice", id: "d5", promptEs: "Hablas con una señora mayor que no conoces: ¿De dónde es ___?", promptEl: "Μιλάς με μια ηλικιωμένη κυρία που δεν γνωρίζεις: Από πού είστε;", options: ["usted", "tú", "vosotros", "ellos"], answer: "usted" },
      { type: "cloze", id: "d6", textEs: "¿Quién ha roto el vaso? He sido ___.", hintEl: "Ποιος έσπασε το ποτήρι; Εγώ ήμουν.", answer: "yo" },
      { type: "cloze", id: "d7", textEs: "Andrés y Rosa son colombianos. ___ es de Cali y ella es de Bogotá.", hintEl: "Ο Andrés κι η Rosa είναι Κολομβιανοί. Αυτός είναι από το Κάλι κι εκείνη από την Μπογκοτά.", answer: "él" },
      { type: "cloze", id: "d8", textEs: "¿Dónde vives ___? Yo vivo en Atenas.", hintEl: "Εσύ πού μένεις; Εγώ μένω στην Αθήνα.", answer: "tú", explainEl: "Το tú γράφεται με τόνο." },
      { type: "choice", id: "d9", promptEs: "Ana, Luis y tú sois estudiantes. ___ sois estudiantes.", promptEl: "Η Ana, ο Luis κι εσύ είστε φοιτητές. Εσείς είστε φοιτητές.", options: ["Vosotros", "Nosotros", "Ellos", "Tú"], answer: "Vosotros" },
      { type: "order", id: "d10", promptEl: "Εμείς είμαστε από την Αθήνα, κι εσείς;", solution: ["Nosotros", "somos", "de", "Atenas,", "¿y", "vosotros?"], distractors: ["ellos", "eres"] },
      { type: "order", id: "d11", promptEl: "Εσείς δεν είστε από τη Λίμα, σωστά;", solution: ["Usted", "no", "es", "de", "Lima,", "¿verdad?"], distractors: ["eres", "son"], explainEl: "Το usted παίρνει ρήμα στο τρίτο πρόσωπο: usted es." },
      { type: "order", id: "d12", promptEl: "Εκείνη κι εγώ σπουδάζουμε μαζί.", solution: ["Ella", "y", "yo", "estudiamos", "juntas."], distractors: ["mí", "estudian", "juntos"], alternatives: [["Ella", "y", "yo", "estudiamos", "juntos."]] },
    ],
    exercisesEl: [
      "Γράψε την κατάλληλη αντωνυμία υποκειμένου για κάθε εικόνα.",
      "Γράψε την αντωνυμία υποκειμένου που αντιστοιχεί σε κάθε ομάδα προσώπων.",
      "Διάβασε τις πληροφορίες στον πίνακα και συμπλήρωσε τις προτάσεις με yo, tú... μόνο όπου χρειάζεται.",
      "Συμπλήρωσε τις προτάσεις με την προσωπική αντωνυμία, αν χρειάζεται.",
    ],
  },
  {
    id: "u29",
    number: 29,
    page: 68,
    titleEs: "Te amo (Pronombres personales de objeto directo)",
    titleEl: "Αντωνυμίες άμεσου αντικειμένου",
    introEl:
      "Οι αντωνυμίες άμεσου αντικειμένου (me, te, lo, la, nos, os, los, las) αντικαθιστούν το πρόσωπο ή το πράγμα που δέχεται απευθείας την ενέργεια του ρήματος. Στους απλούς τύπους του ρήματος μπαίνουν πριν από αυτό και αντιστοιχούν στα ελληνικά «με, σε, τον, την, το, μας, σας, τους, τις, τα».",
    rules: [
      {
        textEl:
          "Άμεσο αντικείμενο είναι αυτό που δέχεται απευθείας την ενέργεια (βλέπω ΤΗ MARTA, θέλω ΤΟ ΒΙΒΛΙΟ). Για να μην το επαναλαμβάνουμε, το αντικαθιστούμε με αντωνυμία.",
        examples: [{ es: "¿Ves a Marta? Sí, la veo.", el: "Βλέπεις τη Marta; Ναι, τη βλέπω." }],
      },
      {
        textEl:
          "Για το 1ο και 2ο πρόσωπο χρησιμοποιούμε me, te, nos, os. Το lo, la, los, las χρησιμοποιούνται για το τρίτο πρόσωπο και για το usted/ustedes.",
        examples: [
          { es: "¿Me oyes bien? Sí, te oigo.", el: "Με ακούς καλά; Ναι, σε ακούω." },
          { es: "Señora López, la llamo mañana.", el: "Κυρία López, σας παίρνω τηλέφωνο αύριο." },
        ],
      },
      {
        textEl:
          "Το lo και το la αντικαθιστούν και πράγματα ή ζώα που αναφέρθηκαν πριν. Η μορφή εξαρτάται από το γένος του ισπανικού ουσιαστικού: lo (αρσενικό), la (θηλυκό), los, las (πληθυντικός).",
        examples: [
          { es: "¿Dónde está mi pasaporte? No lo encuentro.", el: "Πού είναι το διαβατήριό μου; Δεν το βρίσκω." },
          { es: "Las flores son bonitas. Las compro.", el: "Τα λουλούδια είναι όμορφα. Τα αγοράζω." },
        ],
      },
      {
        textEl:
          "Η αντωνυμία μπαίνει πριν από το ρήμα στο οποίο ανήκει. Στην άρνηση το no μπαίνει πριν από την αντωνυμία.",
        examples: [
          { es: "Los conozco bien.", el: "Τους γνωρίζω καλά." },
          { es: "No las necesito.", el: "Δεν τις χρειάζομαι." },
        ],
      },
      {
        textEl: "Όταν η αντωνυμία αναφέρεται σε μια ομάδα με άντρες και γυναίκες, χρησιμοποιούμε το αρσενικό plural: los.",
        examples: [{ es: "Veo a Ana y a Pedro: los veo.", el: "Βλέπω την Ana και τον Pedro: τους βλέπω." }],
      },
    ],
    tables: [
      {
        titleEl: "Αντωνυμίες άμεσου αντικειμένου",
        headers: ["", "Singular", "Plural"],
        rows: [
          ["1.ª persona", "me", "nos"],
          ["2.ª persona", "te", "os"],
          ["3.ª masculino (él, usted, cosa)", "lo", "los"],
          ["3.ª femenino (ella, usted, cosa)", "la", "las"],
        ],
      },
    ],
    tipsEl: [
      "Όπως στα ελληνικά («το βλέπω»), η αντωνυμία μπαίνει πριν από το ρήμα: Lo veo. Μην πεις «Veo lo».",
      "Πρόσεξε το γένος του ισπανικού ουσιαστικού, όχι του ελληνικού: το τραπέζι είναι la mesa, άρα «La veo», ενώ το βιβλίο είναι el libro, άρα «Lo veo».",
      "Το «σ' αγαπώ» λέγεται Te quiero ή Te amo: το te είναι άμεσο αντικείμενο.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿Dónde está mi móvil? No ___ encuentro.", hintEl: "Πού είναι το κινητό μου; Δεν το βρίσκω.", answer: "lo" },
      { type: "cloze", id: "d2", textEs: "¿Dónde están las llaves? No ___ veo.", hintEl: "Πού είναι τα κλειδιά; Δεν τα βλέπω.", answer: "las" },
      { type: "choice", id: "d3", promptEs: "¿Me ves? Sí, ___ veo.", promptEl: "Με βλέπεις; Ναι, σε βλέπω.", options: ["te", "me", "lo", "os"], answer: "te" },
      { type: "cloze", id: "d4", textEs: "¿Conoces a Marta? Sí, ___ conozco desde hace años.", hintEl: "Ναι, τη γνωρίζω εδώ και χρόνια.", answer: "la" },
      { type: "choice", id: "d5", promptEs: "¿Quieres esta camisa? No, no ___ quiero.", promptEl: "Θέλεις αυτό το πουκάμισο; Όχι, δεν το θέλω.", options: ["la", "lo", "las", "le"], answer: "la", explainEl: "Το camisa είναι θηλυκό, άρα la (και όχι «το» όπως στα ελληνικά)." },
      { type: "cloze", id: "d6", textEs: "¿Ves a Pedro y a Ana? Sí, ___ veo allí, en la terraza.", hintEl: "Ναι, τους βλέπω εκεί, στη βεράντα.", answer: "los", explainEl: "Αρσενικό και θηλυκό μαζί: χρησιμοποιούμε το αρσενικό plural, los." },
      { type: "choice", id: "d7", promptEs: "¿Has comprado el pan? No, no ___ he comprado.", promptEl: "Αγόρασες το ψωμί; Όχι, δεν το αγόρασα.", options: ["lo", "la", "los", "le"], answer: "lo" },
      { type: "cloze", id: "d8", textEs: "Vosotros sois mis vecinos, pero yo no ___ conozco.", hintEl: "Εσείς είστε οι γείτονές μου, αλλά εγώ δεν σας γνωρίζω.", answer: "os" },
      { type: "order", id: "d9", promptEl: "Τους γνωρίζω πολύ καλά.", solution: ["Los", "conozco", "muy", "bien."], distractors: ["Lo", "conoce"] },
      { type: "order", id: "d10", promptEl: "Η μητέρα μου με παίρνει τηλέφωνο κάθε μέρα.", solution: ["Mi", "madre", "me", "llama", "todos", "los", "días."], distractors: ["te", "llamo"] },
      { type: "order", id: "d11", promptEl: "Η Ana δεν μας γνωρίζει.", solution: ["Ana", "no", "nos", "conoce."], distractors: ["los", "conozco"] },
      { type: "choice", id: "d12", promptEs: "¿Ves a mis hermanas? Sí, ___ veo en el parque.", promptEl: "Βλέπεις τις αδερφές μου; Ναι, τις βλέπω στο πάρκο.", options: ["las", "los", "la", "les"], answer: "las" },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με lo, la, los ή las.",
      "Συμπλήρωσε τις προτάσεις με me, te, lo, la, nos, os, los ή las, ανάλογα με το πρόσωπο που γνωρίζεις.",
      "Συμπλήρωσε τις απαντήσεις με την κατάλληλη αντωνυμία άμεσου αντικειμένου.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις προτάσεις.",
    ],
  },
  {
    id: "u30",
    number: 30,
    page: 70,
    titleEs: "Me ha regalado un reloj (Pronombres personales de objeto indirecto)",
    titleEl: "Αντωνυμίες έμμεσου αντικειμένου",
    introEl:
      "Οι αντωνυμίες έμμεσου αντικειμένου (me, te, le, nos, os, les) δείχνουν σε ποιον ή για ποιον γίνεται κάτι. Αντιστοιχούν περίπου στις ελληνικές «μου, σου, του, της, μας, σας, τους».",
    rules: [
      {
        textEl:
          "Έμμεσο αντικείμενο είναι το πρόσωπο (ή το πράγμα) που δέχεται την ενέργεια έμμεσα: δίνω ΣΤΗ ΓΕΙΤΟΝΙΣΣΑ ένα γράμμα. Στα ισπανικά το εισάγει συνήθως το a.",
        examples: [
          { es: "Doy una carta a mi vecina.", el: "Δίνω ένα γράμμα στη γειτόνισσά μου." },
          { es: "Le doy una carta.", el: "Της δίνω ένα γράμμα." },
        ],
      },
      {
        textEl: "Οι μορφές είναι me, te, le, nos, os, les. Μπαίνουν πριν από το ρήμα, και στην άρνηση το no μπαίνει πριν από αυτές.",
        examples: [
          { es: "Nos ha enviado un correo.", el: "Μας έστειλε ένα email." },
          { es: "No me ha dicho nada.", el: "Δεν μου είπε τίποτα." },
        ],
      },
      {
        textEl:
          "Το le (ενικός) και το les (πληθυντικός) δεν έχουν γένος: ισχύουν για άντρες, γυναίκες, ζώα και πράγματα, και για usted/ustedes.",
        examples: [
          { es: "Les he escrito a mis abuelos.", el: "Έγραψα στους παππούδες μου." },
          { es: "Le he cambiado el agua a la planta.", el: "Άλλαξα το νερό στο φυτό." },
        ],
      },
      {
        textEl:
          "Όταν αναφέρουμε το πρόσωπο με το όνομά του (a + όνομα), συνήθως βάζουμε και την αντωνυμία le ή les, ειδικά όταν το πρόσωπο έχει ήδη αναφερθεί.",
        examples: [
          { es: "Le he comprado un libro a Marta.", el: "Αγόρασα ένα βιβλίο στη Marta." },
          { es: "Les he enviado un mensaje a mis primos.", el: "Έστειλα ένα μήνυμα στα ξαδέρφιά μου." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Αντωνυμίες έμμεσου αντικειμένου",
        headers: ["", "Singular", "Plural"],
        rows: [
          ["1.ª persona", "me", "nos"],
          ["2.ª persona", "te", "os"],
          ["3.ª persona (él, ella, usted / ellos, ellas, ustedes)", "le", "les"],
        ],
      },
    ],
    tipsEl: [
      "Το le/les αντιστοιχεί στα ελληνικά «του, της, τους» και το me, te, nos, os στα «μου, σου, μας, σας»: Me ha dicho = Μου είπε.",
      "Προσοχή: το preguntar παίρνει έμμεσο αντικείμενο. Στα ελληνικά λέμε «τη ρώτησα» (αιτιατική), στα ισπανικά «Le pregunté».",
      "Το le δεν δείχνει γένος. Για να καταλάβεις αν είναι «του» ή «της», δες το όνομα με το a: Le escribo a Ana, Le escribo a Pedro.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿Qué ___ ha dicho el profesor, Luis?", hintEl: "Τι σου είπε ο καθηγητής, Luis;", answer: "te" },
      { type: "cloze", id: "d2", textEs: "Mis tíos ___ han regalado un libro.", hintEl: "Οι θείοι μου μου χάρισαν ένα βιβλίο.", answer: "me" },
      { type: "choice", id: "d3", promptEs: "¿Qué ___ han preguntado a ustedes?", promptEl: "Τι σας ρώτησαν;", options: ["les", "os", "nos", "le"], answer: "les", explainEl: "Το ustedes παίρνει les. Το os είναι για το vosotros." },
      { type: "cloze", id: "d4", textEs: "He escrito un correo a Elena y ___ he preguntado por su viaje.", hintEl: "Έγραψα ένα email στην Elena και τη ρώτησα για το ταξίδι της.", answer: "le", explainEl: "Το preguntar παίρνει έμμεσο αντικείμενο (le), παρότι στα ελληνικά το «ρωτάω» παίρνει αιτιατική." },
      { type: "choice", id: "d5", promptEs: "¿Qué ___ pasa a Juan? Está muy callado.", promptEl: "Τι παθαίνει ο Juan; Είναι πολύ σιωπηλός.", options: ["le", "les", "me", "lo"], answer: "le" },
      { type: "cloze", id: "d6", textEs: "El camarero ___ ha traído la cuenta.", hintEl: "Ο σερβιτόρος μας έφερε τον λογαριασμό.", answer: "nos" },
      { type: "choice", id: "d7", promptEs: "Vosotros sois mis amigos: ___ he traído un regalo.", promptEl: "Εσείς είστε φίλοι μου: σας έφερα ένα δώρο.", options: ["os", "les", "nos", "te"], answer: "os" },
      { type: "cloze", id: "d8", textEs: "A mis hermanas ___ he comprado unos libros.", hintEl: "Αγόρασα μερικά βιβλία στις αδερφές μου.", answer: "les" },
      { type: "choice", id: "d9", promptEs: "Mi jefa ___ da las gracias a todos los empleados.", promptEl: "Η προϊσταμένη μου ευχαριστεί όλους τους υπαλλήλους.", options: ["les", "le", "los", "las"], answer: "les", explainEl: "Οι υπάλληλοι είναι πληθυντικός και έμμεσο αντικείμενο: les." },
      { type: "order", id: "d10", promptEl: "Χάρισα ένα βιβλίο στη Marta.", solution: ["Le", "he", "regalado", "un", "libro", "a", "Marta."], distractors: ["Lo", "les"], alternatives: [["A", "Marta", "le", "he", "regalado", "un", "libro."]] },
      { type: "order", id: "d11", promptEl: "Η μητέρα μου μου είπε ότι γυρίζει αργά.", solution: ["Mi", "madre", "me", "ha", "dicho", "que", "vuelve", "tarde."], distractors: ["te", "han"] },
      { type: "order", id: "d12", promptEl: "Δεν λέω τίποτα στους γονείς μου.", solution: ["No", "les", "digo", "nada", "a", "mis", "padres."], distractors: ["los", "le"] },
    ],
    exercisesEl: [
      "Κοίταξε τις εικόνες και συμπλήρωσε τα κενά με me, te, le, nos, os ή les.",
      "Απάντησε στις ερωτήσεις όπως στο παράδειγμα, χρησιμοποιώντας αντωνυμίες έμμεσου αντικειμένου.",
      "Γράψε τι έδωσε ο don Ernesto στον καθέναν από τους υπαλλήλους του, με τις λέξεις του πλαισίου.",
    ],
  },
  {
    id: "u31",
    number: 31,
    page: 72,
    titleEs: "Se lo he dado (Pronombres de objeto indirecto y directo)",
    titleEl: "Έμμεσο και άμεσο αντικείμενο μαζί",
    introEl:
      "Όταν μια πρόταση έχει και έμμεσο και άμεσο αντικείμενο, μπορούμε να τα αντικαταστήσουμε και τα δύο με αντωνυμίες. Η σειρά είναι πάντα πρώτα το έμμεσο και μετά το άμεσο, και το le/les γίνεται se.",
    rules: [
      {
        textEl:
          "Όταν έχουμε δύο αντωνυμίες, πρώτα μπαίνει η αντωνυμία του έμμεσου αντικειμένου (me, te, se, nos, os) και μετά του άμεσου (lo, la, los, las). Η σειρά είναι ίδια με το ελληνικό «μου το δίνει».",
        examples: [{ es: "¿Me prestas tu bici? Sí, te la presto.", el: "Μου δανείζεις το ποδήλατό σου; Ναι, σου το δανείζω." }],
      },
      {
        textEl:
          "Το le και το les γίνονται se όταν ακολουθούν lo, la, los, las. Ποτέ δεν λέμε «le lo» ή «les lo».",
        examples: [{ es: "He escrito una carta a mis abuelos. Se la he enviado.", el: "Έγραψα ένα γράμμα στους παππούδες μου. Τους το έστειλα." }],
      },
      {
        textEl:
          "Το se είναι αναλλοίωτο: μπορεί να σημαίνει «σε αυτόν, σε αυτήν, σε σας (usted), σε αυτούς, σε αυτές, σε σας (ustedes)». Το νόημα φαίνεται από τα συμφραζόμενα ή από το a + πρόσωπο.",
        examples: [
          { es: "Se lo explico a usted.", el: "Σας το εξηγώ (σε σας)." },
          { es: "Se lo explico a ellas.", el: "Τους το εξηγώ (στις γυναίκες)." },
        ],
      },
      {
        textEl:
          "Το lo, la, los, las δείχνει το πράγμα που δίνουμε και συμφωνεί με αυτό σε γένος και αριθμό, όχι με το πρόσωπο.",
        examples: [
          { es: "Te lo regalo. (el libro)", el: "Στο χαρίζω. (το βιβλίο)" },
          { es: "Te las regalo. (las flores)", el: "Στα χαρίζω. (τα λουλούδια)" },
        ],
      },
      {
        textEl:
          "Οι δύο αντωνυμίες μπαίνουν μαζί πριν από το ρήμα, χωρίς άλλη λέξη ανάμεσά τους. Στην άρνηση το no προηγείται. Όταν το πρόσωπο αναφέρεται πρώτη φορά, μπορεί να προστεθεί και με a: Se lo has contado a tu madre.",
        examples: [
          { es: "No se lo he dicho a nadie.", el: "Δεν το είπα σε κανέναν." },
          { es: "¿Se lo has contado a tu madre?", el: "Το είπες στη μητέρα σου;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Σειρά των αντωνυμιών: έμμεσο + άμεσο",
        headers: ["Objeto indirecto", "Objeto directo", "Ejemplo"],
        rows: [
          ["me", "lo / la / los / las", "Me lo ha dado."],
          ["te", "lo / la / los / las", "Te la presento."],
          ["se (a él, ella, usted, ellos, ellas, ustedes)", "lo / la / los / las", "Se los he enviado."],
          ["nos", "lo / la / los / las", "Nos las ha traído."],
          ["os", "lo / la / los / las", "Os lo explico."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «μου το έδωσε»: πρώτα το έμμεσο, μετά το άμεσο. Στα ισπανικά η σειρά είναι ακριβώς η ίδια: Me lo dio.",
      "Το se του «se lo he dado» δεν έχει σχέση με το αυτοπαθές se (se lava). Είναι απλώς το le/les που άλλαξε επειδή ακολουθεί lo, la, los, las.",
      "Το lo, la, los, las δείχνουν το πράγμα, όχι το πρόσωπο: Le doy las llaves a Ana = Se las doy.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿Me prestas tu bolígrafo? Sí, claro, ahora ___ lo presto.", hintEl: "Μου δανείζεις το στυλό σου; Ναι, φυσικά, τώρα σου το δανείζω.", answer: "te" },
      { type: "cloze", id: "d2", textEs: "¿Ya has dado la noticia a tus padres? Sí, ___ la he dado esta mañana.", hintEl: "Έδωσες ήδη τα νέα στους γονείς σου; Ναι, τους τα έδωσα σήμερα το πρωί.", answer: "se", explainEl: "Το les γίνεται se πριν από lo, la, los, las." },
      { type: "choice", id: "d3", promptEs: "¿Dónde está el regalo para Juan? Ya ___ he dado.", promptEl: "Πού είναι το δώρο για τον Juan; Του το έδωσα ήδη.", options: ["se lo", "le lo", "lo se", "lo le"], answer: "se lo", explainEl: "Πρώτα το έμμεσο (se, από το le), μετά το άμεσο (lo, γιατί το regalo είναι αρσενικό)." },
      { type: "cloze", id: "d4", textEs: "Tengo las entradas para vosotros, pero no ___ las doy hasta mañana.", hintEl: "Έχω τα εισιτήρια για σας, αλλά δεν σας τα δίνω μέχρι αύριο.", answer: "os" },
      { type: "cloze", id: "d5", textEs: "¿Quién te ha regalado ese reloj? Mi abuela ___ lo ha regalado.", hintEl: "Ποιος σου χάρισε αυτό το ρολόι; Η γιαγιά μου μου το χάρισε.", answer: "me" },
      { type: "choice", id: "d6", promptEs: "¿Qué has hecho con las llaves? ___ he dejado a Marta.", promptEl: "Τι έκανες τα κλειδιά; Τα άφησα στη Marta.", options: ["Se las", "Se los", "Se la", "Le las"], answer: "Se las", explainEl: "Το las συμφωνεί με το πράγμα (las llaves) και το le γίνεται se." },
      { type: "choice", id: "d7", promptEs: "¿Cuál es correcta?", promptEl: "Ποια πρόταση είναι σωστή; (Του το είπα.)", options: ["Le lo he dicho.", "Se lo he dicho.", "Lo se he dicho.", "Se le he dicho."], answer: "Se lo he dicho." },
      { type: "choice", id: "d8", promptEs: "¿Te ha dado Ana las entradas? Sí, ___ ha dado.", promptEl: "Σου έδωσε η Ana τα εισιτήρια; Ναι, μου τα έδωσε.", options: ["me las", "me los", "te las", "se las"], answer: "me las" },
      { type: "cloze", id: "d9", textEs: "¿Les has enseñado la casa a tus amigos? No, todavía no ___ la he enseñado.", hintEl: "Έδειξες το σπίτι στους φίλους σου; Όχι, δεν τους το έχω δείξει ακόμα.", answer: "se" },
      { type: "order", id: "d10", promptEl: "Το είπες στον Pedro;", solution: ["¿Se", "lo", "has", "dicho", "a", "Pedro?"], distractors: ["le", "la"] },
      { type: "order", id: "d11", promptEl: "Σου το εξηγώ αύριο.", solution: ["Te", "lo", "explico", "mañana."], distractors: ["se", "la"], alternatives: [["Mañana", "te", "lo", "explico."]] },
      { type: "order", id: "d12", promptEl: "Δεν τις έστειλα στους θείους μου.", solution: ["No", "se", "las", "he", "enviado", "a", "mis", "tíos."], distractors: ["les", "los"] },
    ],
    exercisesEl: [
      "Αντικατέστησε τα υπογραμμισμένα ουσιαστικά με αντωνυμίες.",
      "Συμπλήρωσε τις απαντήσεις με me, te, se... και lo, la, los ή las.",
      "Απάντησε στις ερωτήσεις με τις κατάλληλες αντωνυμίες.",
      "Γράψε ερωτήσεις και απαντήσεις με τις λέξεις που δίνονται και τις απαραίτητες αντωνυμίες.",
    ],
  },
  {
    id: "u32",
    number: 32,
    page: 74,
    titleEs: "lo/la/le (Contraste entre pronombres personales de objeto)",
    titleEl: "Η διαφορά ανάμεσα σε lo, la και le",
    introEl:
      "Το lo, la, los, las (άμεσο αντικείμενο) και το le, les (έμμεσο αντικείμενο) μπερδεύονται εύκολα. Εδώ τα συγκρίνουμε, ώστε να διαλέγεις κάθε φορά τη σωστή αντωνυμία.",
    rules: [
      {
        textEl:
          "Τα lo, la, los, las είναι άμεσο αντικείμενο και συμφωνούν σε γένος και αριθμό με το πρόσωπο, το ζώο ή το πράγμα που αντικαθιστούν.",
        examples: [
          { es: "¿Ves a Laura? Sí, la veo.", el: "Βλέπεις τη Laura; Ναι, τη βλέπω." },
          { es: "¿Dónde están los niños? Los busco.", el: "Πού είναι τα παιδιά; Τα ψάχνω." },
        ],
      },
      {
        textEl:
          "Τα le (ενικός) και les (πληθυντικός) είναι έμμεσο αντικείμενο και δεν έχουν γένος: αναφέρονται σε πρόσωπα, ζώα ή πράγματα, αρσενικά ή θηλυκά.",
        examples: [
          { es: "A mi tío le duele la espalda.", el: "Στον θείο μου πονάει η πλάτη." },
          { es: "¿Qué les has dicho a tus padres?", el: "Τι είπες στους γονείς σου;" },
        ],
      },
      {
        textEl:
          "Μερικοί ομιλητές χρησιμοποιούν le και les αντί για lo και los όταν μιλούν για άντρες (leísmo). Για γυναίκες λένε πάντα la και las. Για να είσαι ασφαλής, χρησιμοποίησε lo και los για πρόσωπα.",
        examples: [
          { es: "¿Conoces a Pablo? Sí, lo conozco.", el: "Γνωρίζεις τον Pablo; Ναι, τον γνωρίζω." },
          { es: "¿Conoces a Pablo? Sí, le conozco.", el: "Γνωρίζεις τον Pablo; Ναι, τον γνωρίζω (παραλλαγή)." },
        ],
      },
      {
        textEl: "Όταν το le ή το les ακολουθείται από lo, la, los ή las, γίνεται se.",
        examples: [{ es: "¿Le has dado la llave a Marta? Sí, se la he dado.", el: "Έδωσες το κλειδί στη Marta; Ναι, της το έδωσα." }],
      },
      {
        textEl: "Το lo χρησιμοποιείται και για μια ιδέα ή ένα γεγονός που έχει ήδη ειπωθεί.",
        examples: [
          { es: "¿Sabes que Pablo se va? Sí, lo sé.", el: "Ξέρεις ότι ο Pablo φεύγει; Ναι, το ξέρω." },
          { es: "Ana está enferma. No lo sabía.", el: "Η Ana είναι άρρωστη. Δεν το ήξερα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Άμεσο και έμμεσο αντικείμενο στο τρίτο πρόσωπο",
        headers: ["", "Objeto directo", "Objeto indirecto"],
        rows: [
          ["singular masculino", "lo", "le"],
          ["singular femenino", "la", "le"],
          ["plural masculino", "los", "les"],
          ["plural femenino", "las", "les"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το άμεσο αντικείμενο είναι αιτιατική («τον, την, τους») και το έμμεσο γενική («του, της, τους»), όπως lo/la και le. Πρόσεξε όμως τα ρήματα που διαφέρουν: το preguntar παίρνει le, ενώ το «ρωτάω» παίρνει αιτιατική.",
      "Συνήθως με decir, dar, regalar, escribir, preguntar, comprar, enviar χρησιμοποιούμε le/les, ενώ με ver, conocer, querer, llamar, esperar χρησιμοποιούμε lo/la, los/las.",
      "Με ρήματα όπως doler χρησιμοποιούμε πάντα le/les: A Elena le duele la cabeza, ¿Qué le pasa?",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "¿Has visto a Marta? Sí, ___ he visto en el parque.", promptEl: "Έχεις δει τη Marta; Ναι, την είδα στο πάρκο.", options: ["la", "le", "lo", "les"], answer: "la" },
      { type: "choice", id: "d2", promptEs: "¿Has visto a mis primas? Sí, ___ he visto en el cine.", promptEl: "Έχεις δει τις ξαδέρφες μου; Ναι, τις είδα στον κινηματογράφο.", options: ["las", "les", "los", "la"], answer: "las" },
      { type: "choice", id: "d3", promptEs: "A Pedro ___ han dado un premio.", promptEl: "Στον Pedro έδωσαν ένα βραβείο.", options: ["le", "lo", "la", "se"], answer: "le", explainEl: "Το «a Pedro» είναι έμμεσο αντικείμενο: le." },
      { type: "choice", id: "d4", promptEs: "Busco mi pasaporte, pero no ___ encuentro.", promptEl: "Ψάχνω το διαβατήριό μου, αλλά δεν το βρίσκω.", options: ["lo", "le", "la", "se"], answer: "lo" },
      { type: "choice", id: "d5", promptEs: "A mi madre ___ duelen los pies.", promptEl: "Στη μητέρα μου πονάνε τα πόδια.", options: ["le", "la", "lo", "les"], answer: "le", explainEl: "Το doler χρησιμοποιείται πάντα με έμμεσο αντικείμενο: me duele, te duele, le duele." },
      { type: "cloze", id: "d6", textEs: "¿Cuándo es el examen? No ___ sé.", hintEl: "Πότε είναι η εξέταση; Δεν το ξέρω.", answer: "lo", explainEl: "Το lo αναφέρεται εδώ σε μια ιδέα (την ημερομηνία της εξέτασης)." },
      { type: "cloze", id: "d7", textEs: "Llamo a mis amigas y ___ digo que llego tarde.", hintEl: "Παίρνω τηλέφωνο τις φίλες μου και τους λέω ότι θα αργήσω.", answer: "les", explainEl: "Το decir παίρνει έμμεσο αντικείμενο: les digo." },
      { type: "cloze", id: "d8", textEs: "Tus primas son simpáticas. ___ conocí ayer.", hintEl: "Οι ξαδέρφες σου είναι συμπαθητικές. Τις γνώρισα χθες.", answer: "las" },
      { type: "cloze", id: "d9", textEs: "Quiero mucho a mi abuela y ___ llamo todos los domingos.", hintEl: "Αγαπώ πολύ τη γιαγιά μου και την παίρνω τηλέφωνο κάθε Κυριακή.", answer: "la", explainEl: "Το llamar a alguien παίρνει άμεσο αντικείμενο: la llamo." },
      { type: "order", id: "d10", promptEl: "Αγόρασα λουλούδια στις θείες μου.", solution: ["Les", "he", "comprado", "unas", "flores", "a", "mis", "tías."], distractors: ["Las", "la"], alternatives: [["Les", "he", "comprado", "flores", "a", "mis", "tías."]] },
      { type: "order", id: "d11", promptEl: "Δεν τη βλέπω στον δρόμο.", solution: ["No", "la", "veo", "en", "la", "calle."], distractors: ["le", "lo"] },
      { type: "order", id: "d12", promptEl: "Τι είπες στον Juan;", solution: ["¿Qué", "le", "has", "dicho", "a", "Juan?"], distractors: ["lo", "les"] },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή μορφή σε κάθε περίπτωση.",
      "Σημείωσε αν η πρόταση είναι σωστή (C) ή λανθασμένη (I) και διόρθωσε τις λανθασμένες.",
      "Συμπλήρωσε τις προτάσεις με lo, la, los, las, le, les ή se.",
      "Χρησιμοποίησε τις κατάλληλες αντωνυμίες για να συμπληρώσεις τις προτάσεις.",
    ],
  },
  {
    id: "u33",
    number: 33,
    page: 76,
    titleEs: "me ducho (Pronombres reflexivos)",
    titleEl: "Αυτοπαθείς αντωνυμίες",
    introEl:
      "Οι αυτοπαθείς αντωνυμίες (me, te, se, nos, os, se) χρησιμοποιούνται όταν αυτός που κάνει την ενέργεια είναι και αυτός που τη δέχεται, όπως στο «ντύνομαι». Είναι πολύ συχνές στην καθημερινή ρουτίνα.",
    rules: [
      {
        textEl:
          "Όταν η ενέργεια του ρήματος γυρίζει στο ίδιο το πρόσωπο που την κάνει, βάζουμε αυτοπαθή αντωνυμία πριν από το ρήμα: me, te, se, nos, os, se.",
        examples: [
          { es: "Me levanto a las siete.", el: "Σηκώνομαι στις επτά." },
          { es: "Mi hermano se ducha por la mañana.", el: "Ο αδερφός μου κάνει ντους το πρωί." },
        ],
      },
      {
        textEl:
          "Χρησιμοποιούμε αυτοπαθή αντωνυμία και όταν η ενέργεια αφορά ένα μέρος του σώματος ή τα ρούχα του ίδιου προσώπου.",
        examples: [
          { es: "Me lavo las manos.", el: "Πλένω τα χέρια μου." },
          { es: "Se pone la chaqueta.", el: "Φοράει το σακάκι του." },
        ],
      },
      {
        textEl:
          "Αν η ενέργεια αφορά κάποιον άλλον, δεν βάζουμε αυτοπαθή αντωνυμία. Σύγκρινε: Elena se peina (χτενίζει τον εαυτό της) και Elena peina a su hija (χτενίζει την κόρη της).",
        examples: [
          { es: "Elena se peina.", el: "Η Elena χτενίζεται." },
          { es: "Elena peina a su hija.", el: "Η Elena χτενίζει την κόρη της." },
        ],
      },
      {
        textEl: "Η αντωνυμία ταιριάζει με το υποκείμενο του ρήματος: yo me, tú te, nosotros nos...",
        examples: [
          { es: "Nosotras nos acostamos tarde.", el: "Εμείς πηγαίνουμε αργά για ύπνο." },
          { es: "¿Os bañáis por la noche?", el: "Κάνετε μπάνιο το βράδυ;" },
        ],
      },
      {
        textEl:
          "Με τα μέρη του σώματος και τα ρούχα δεν χρησιμοποιούμε κτητική αντωνυμία (mi, tu...), γιατί το me, te... δείχνει ήδη σε ποιον ανήκουν.",
        examples: [{ es: "Me cepillo los dientes.", el: "Βουρτσίζω τα δόντια μου." }],
      },
    ],
    tables: [
      {
        titleEl: "Αυτοπαθείς αντωνυμίες",
        headers: ["Persona", "Pronombre", "Ejemplo (lavarse)"],
        rows: [
          ["yo", "me", "me lavo"],
          ["tú", "te", "te lavas"],
          ["usted, él, ella", "se", "se lava"],
          ["nosotros, nosotras", "nos", "nos lavamos"],
          ["vosotros, vosotras", "os", "os laváis"],
          ["ustedes, ellos, ellas", "se", "se lavan"],
        ],
      },
      {
        titleEl: "Αυτοπαθές και μη αυτοπαθές",
        headers: ["Reflexivo", "No reflexivo"],
        rows: [
          ["Me despierto a las siete.", "Despierto a mi hijo a las siete."],
          ["Ana se peina.", "Ana peina a su hija."],
          ["Nos vestimos rápido.", "Vestimos a los niños."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «πλένω τα μαλλιά μου» με κτητική αντωνυμία. Στα ισπανικά λέμε «Me lavo el pelo», όχι «Lavo mi pelo».",
      "Η αυτοπαθής αντωνυμία πρέπει να ταιριάζει με το υποκείμενο: Yo me ducho, tú te duchas. Το «Yo te ducho» σημαίνει «εγώ σου κάνω ντους» (σε άλλον).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo ___ levanto a las siete.", hintEl: "Εγώ σηκώνομαι στις επτά.", answer: "me" },
      { type: "cloze", id: "d2", textEs: "Tú ___ lavas las manos antes de comer.", hintEl: "Εσύ πλένεις τα χέρια σου πριν φας.", answer: "te" },
      { type: "choice", id: "d3", promptEs: "Marta ___ a su hijo por la noche.", promptEl: "Η Marta λούζει το γιο της το βράδυ.", options: ["baña", "se baña", "te baña", "me baña"], answer: "baña", explainEl: "Η ενέργεια αφορά τον γιο, όχι τη Marta, άρα δεν υπάρχει αυτοπαθής αντωνυμία." },
      { type: "cloze", id: "d4", textEs: "Mi hermano ___ afeita todas las mañanas.", hintEl: "Ο αδερφός μου ξυρίζεται κάθε πρωί.", answer: "se" },
      { type: "cloze", id: "d5", textEs: "Nosotros ___ acostamos tarde los sábados.", hintEl: "Εμείς πηγαίνουμε για ύπνο αργά τα Σάββατα.", answer: "nos" },
      { type: "choice", id: "d6", promptEs: "Los niños ___ duchan solos.", promptEl: "Τα παιδιά κάνουν ντους μόνα τους.", options: ["se", "los", "les", "nos"], answer: "se" },
      { type: "cloze", id: "d7", textEs: "Vosotros ___ ponéis el abrigo porque hace frío.", hintEl: "Εσείς φοράτε το παλτό σας γιατί κάνει κρύο.", answer: "os" },
      { type: "choice", id: "d8", promptEs: "Mi abuela ___ cepilla los dientes después de comer.", promptEl: "Η γιαγιά μου βουρτσίζει τα δόντια της μετά το φαγητό.", options: ["se", "la", "lo", "los"], answer: "se", explainEl: "Η γιαγιά βουρτσίζει τα δικά της δόντια, άρα χρειάζεται αυτοπαθής αντωνυμία: se cepilla los dientes." },
      { type: "choice", id: "d9", promptEs: "¿Por qué no ___ pones el sombrero, Pedro?", promptEl: "Γιατί δεν φοράς το καπέλο, Pedro;", options: ["te", "me", "se", "lo"], answer: "te" },
      { type: "order", id: "d10", promptEl: "Πλένω τα μαλλιά μου το βράδυ.", solution: ["Me", "lavo", "el", "pelo", "por", "la", "noche."], distractors: ["mi", "lava"], explainEl: "Δεν χρησιμοποιούμε κτητική αντωνυμία: me lavo el pelo." },
      { type: "order", id: "d11", promptEl: "Ντυνόμαστε γρήγορα τα πρωινά.", solution: ["Nos", "vestimos", "rápido", "por", "las", "mañanas."], distractors: ["Se", "visten"] },
      { type: "order", id: "d12", promptEl: "Τι ώρα πάνε για ύπνο τα παιδιά;", solution: ["¿A", "qué", "hora", "se", "acuestan", "los", "niños?"], distractors: ["les", "acuesta"] },
    ],
    exercisesEl: [
      "Επίλεξε τη σωστή επιλογή σε κάθε περίπτωση (αυτοπαθής αντωνυμία ή καμία).",
      "Συμπλήρωσε τις προτάσεις με me, te, se... μόνο όταν χρειάζεται.",
      "Συμπλήρωσε τις προτάσεις με me, te, se... όπου χρειάζεται.",
    ],
  },
  {
    id: "u34",
    number: 34,
    page: 78,
    titleEs: "para mí, conmigo... (Pronombres personales con preposiciones)",
    titleEl: "Αντωνυμίες μετά από πρόθεση",
    introEl:
      "Μετά από πρόθεση (a, con, de, en, para, por, sin...) οι αντωνυμίες έχουν ειδικές μορφές. Οι πιο σημαντικές διαφορές είναι στο πρώτο και δεύτερο ενικό: mí, ti, conmigo, contigo.",
    rules: [
      {
        textEl:
          "Μετά από πρόθεση χρησιμοποιούμε mí, ti, usted, él, ella, nosotros/as, vosotros/as, ustedes, ellos/ellas. Μόνο το πρώτο και το δεύτερο ενικό διαφέρουν από τις αντωνυμίες υποκειμένου.",
        examples: [
          { es: "Este café es para ti.", el: "Αυτός ο καφές είναι για σένα." },
          { es: "Hablamos de ella.", el: "Μιλάμε για εκείνη." },
        ],
      },
      {
        textEl: "Το mí έχει τόνο για να ξεχωρίζει από το κτητικό mi (μου). Το ti δεν έχει τόνο.",
        examples: [{ es: "Mi hermano vive cerca de mí.", el: "Ο αδερφός μου μένει κοντά μου." }],
      },
      {
        textEl: "Με το con, το con + mí γίνεται conmigo και το con + ti γίνεται contigo. Με τα υπόλοιπα πρόσωπα λέμε con él, con ella, con nosotros...",
        examples: [
          { es: "¿Vienes conmigo al mercado?", el: "Έρχεσαι μαζί μου στην αγορά;" },
          { es: "Voy contigo, no con él.", el: "Πάω μαζί σου, όχι μαζί του." },
        ],
      },
      {
        textEl: "Μετά από entre, excepto και menos χρησιμοποιούμε yo και tú (όχι mí και ti).",
        examples: [
          { es: "Es un secreto entre tú y yo.", el: "Είναι ένα μυστικό ανάμεσα σε σένα και σε μένα." },
          { es: "Todos lo saben menos tú.", el: "Όλοι το ξέρουν εκτός από σένα." },
        ],
      },
      {
        textEl:
          "Οι αντωνυμίες μετά από πρόθεση αναφέρονται σε πρόσωπα που είναι παρόντα, αλλά και σε πρόσωπα, ζώα ή πράγματα που αναφέρθηκαν πριν.",
        examples: [
          { es: "Tengo una moto y voy a todas partes con ella.", el: "Έχω μια μηχανή και πηγαίνω παντού μαζί της." },
          { es: "Es mi ordenador y no puedo trabajar sin él.", el: "Είναι ο υπολογιστής μου και δεν μπορώ να δουλέψω χωρίς αυτόν." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Αντωνυμίες μετά από πρόθεση",
        headers: ["Persona", "a, de, en, para, por, sin...", "con", "entre, excepto, menos"],
        rows: [
          ["yo", "mí", "conmigo", "yo"],
          ["tú", "ti", "contigo", "tú"],
          ["usted", "usted", "con usted", "usted"],
          ["él", "él", "con él", "él"],
          ["ella", "ella", "con ella", "ella"],
          ["nosotros / nosotras", "nosotros / nosotras", "con nosotros / nosotras", "nosotros / nosotras"],
          ["vosotros / vosotras", "vosotros / vosotras", "con vosotros / vosotras", "vosotros / vosotras"],
          ["ustedes", "ustedes", "con ustedes", "ustedes"],
          ["ellos / ellas", "ellos / ellas", "con ellos / ellas", "ellos / ellas"],
        ],
      },
    ],
    tipsEl: [
      "Το «μαζί μου» και το «μαζί σου» είναι μία λέξη στα ισπανικά: conmigo, contigo. Δεν υπάρχει «con mí» ούτε «con yo».",
      "Μην πεις ποτέ «para yo» ή «sin tú». Μετά από πρόθεση λέμε para mí, sin ti.",
      "Εξαιρέσεις: μετά από entre, excepto και menos λέμε yo και tú (todos menos yo, entre tú y yo).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi madre siempre piensa en ___, no en mi hermano.", hintEl: "Η μητέρα μου σκέφτεται πάντα εμένα, όχι τον αδερφό μου.", answer: "mí", explainEl: "Μετά από πρόθεση το «εμένα» είναι mí, με τόνο." },
      { type: "cloze", id: "d2", textEs: "Elena, ¿puedo sentarme a tu lado? Quiero hablar ___.", hintEl: "Elena, μπορώ να κάτσω δίπλα σου; Θέλω να μιλήσω μαζί σου.", answer: "contigo" },
      { type: "cloze", id: "d3", textEs: "No puedo vivir sin ___, mi amor.", hintEl: "Δεν μπορώ να ζήσω χωρίς εσένα, αγάπη μου.", answer: "ti" },
      { type: "choice", id: "d4", promptEs: "Siéntate entre Pablo y ___.", promptEl: "Κάτσε ανάμεσα στον Pablo και σε μένα.", options: ["yo", "mí", "me", "conmigo"], answer: "yo", explainEl: "Μετά από entre χρησιμοποιούμε yo και tú." },
      { type: "cloze", id: "d5", textEs: "Mis compañeros han aprobado, pero yo no: han aprobado todos menos ___.", hintEl: "Οι συμμαθητές μου πέρασαν, αλλά εγώ όχι: πέρασαν όλοι εκτός από μένα.", answer: "yo" },
      { type: "choice", id: "d6", promptEs: "Marta, ¿quieres venir al cine ___?", promptEl: "Marta, θέλεις να έρθεις στον κινηματογράφο μαζί μου;", options: ["conmigo", "con yo", "con mí", "contigo"], answer: "conmigo" },
      { type: "cloze", id: "d7", textEs: "Mi perro viene ___ al trabajo todos los días.", hintEl: "Ο σκύλος μου έρχεται μαζί μου στη δουλειά κάθε μέρα.", answer: "conmigo" },
      { type: "choice", id: "d8", promptEs: "Tengo un regalo para ___, chicos.", promptEl: "Έχω ένα δώρο για σας, παιδιά.", options: ["vosotros", "os", "vuestros", "tú"], answer: "vosotros" },
      { type: "cloze", id: "d9", textEs: "¿Dónde está Laura? Tengo un paquete para ___.", hintEl: "Πού είναι η Laura; Έχω ένα δέμα για εκείνη.", answer: "ella" },
      { type: "choice", id: "d10", promptEs: "Tengo un coche nuevo y viajo mucho con ___.", promptEl: "Έχω καινούριο αυτοκίνητο και ταξιδεύω πολύ με αυτό.", options: ["él", "ella", "ello", "lo"], answer: "él", explainEl: "Το coche είναι αρσενικό και μετά από πρόθεση χρησιμοποιούμε él." },
      { type: "order", id: "d11", promptEl: "Δεν θέλω να πάω στον γιατρό χωρίς εσένα.", solution: ["No", "quiero", "ir", "al", "médico", "sin", "ti."], distractors: ["tú", "mí"] },
      { type: "order", id: "d12", promptEl: "Ανάμεσα σε σένα και σε μένα δεν υπάρχουν μυστικά.", solution: ["Entre", "tú", "y", "yo", "no", "hay", "secretos."], distractors: ["ti", "mí"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις φράσεις των εικόνων χρησιμοποιώντας αντωνυμίες.",
      "Συμπλήρωσε τις προτάσεις με την κατάλληλη αντωνυμία.",
      "Συμπλήρωσε τις προτάσεις με yo, mí, -migo ή tú, ti, -tigo.",
      "Κύκλωσε τη σωστή μορφή σε κάθε περίπτωση.",
    ],
  },
  {
    id: "u35",
    number: 35,
    page: 80,
    titleEs: "que, donde (Relativos)",
    titleEl: "Οι αναφορικές αντωνυμίες que και donde",
    introEl:
      "Η αναφορική αντωνυμία que προσθέτει πληροφορία για ένα ουσιαστικό χωρίς να το επαναλάβουμε, και το donde κάνει το ίδιο για τόπους. Αντιστοιχούν στο ελληνικό «που» και «όπου».",
    rules: [
      {
        textEl:
          "Το que ενώνει δύο προτάσεις που μιλούν για το ίδιο ουσιαστικό. Το ουσιαστικό της δεύτερης πρότασης δεν επαναλαμβάνεται.",
        examples: [
          { es: "Tengo un vecino que toca el piano.", el: "Έχω έναν γείτονα που παίζει πιάνο." },
          { es: "Me gusta la música que escuchas.", el: "Μου αρέσει η μουσική που ακούς." },
        ],
      },
      {
        textEl:
          "Το que είναι αναλλοίωτο και αναφέρεται σε πρόσωπα, ζώα και πράγματα, αρσενικά ή θηλυκά, ενικού ή πληθυντικού.",
        examples: [
          { es: "El perro que ladra es de mi tío.", el: "Ο σκύλος που γαβγίζει είναι του θείου μου." },
          { es: "Las flores que has traído son preciosas.", el: "Τα λουλούδια που έφερες είναι πανέμορφα." },
        ],
      },
      {
        textEl:
          "Η πρόταση με que μπορεί να ταυτοποιεί το ουσιαστικό (ποιο είναι) ή να το ορίζει (τι είναι).",
        examples: [
          { es: "¿Quién es Luis? El chico que lleva gafas.", el: "Ποιος είναι ο Luis; Το αγόρι που φοράει γυαλιά." },
          { es: "Un panadero es una persona que hace pan.", el: "Ο φούρναρης είναι ένα άτομο που φτιάχνει ψωμί." },
        ],
      },
      {
        textEl:
          "Δεν επαναλαμβάνουμε το ουσιαστικό ούτε την αντωνυμία lo/la στη δεύτερη πρόταση: el móvil que compré, όχι «el móvil que lo compré».",
        examples: [{ es: "El móvil que compré ayer funciona muy bien.", el: "Το κινητό που αγόρασα χθες δουλεύει πολύ καλά." }],
      },
      {
        textEl:
          "Το donde (= en el que, en la que...) αναφέρεται σε τόπους. Αν ο τόπος είναι υποκείμενο ή άμεσο αντικείμενο του ρήματος, χρησιμοποιούμε que.",
        examples: [
          { es: "Conozco un bar donde sirven tapas.", el: "Ξέρω ένα μπαρ όπου σερβίρουν ταπάς." },
          { es: "El pueblo que visitamos en verano es pequeño.", el: "Το χωριό που επισκεφτήκαμε το καλοκαίρι είναι μικρό." },
        ],
      },
      {
        textEl:
          "Όταν η πρόταση με que ή donde έχει δικό της υποκείμενο, αυτό μπαίνει συνήθως μετά το ρήμα: que/donde + ρήμα + υποκείμενο.",
        examples: [{ es: "El pan que ha traído Marta está caliente.", el: "Το ψωμί που έφερε η Marta είναι ζεστό." }],
      },
    ],
    tables: [
      {
        titleEl: "Que και donde",
        headers: ["Relativo", "Se refiere a", "Ejemplo"],
        rows: [
          ["que", "personas, animales, cosas", "El chico que habla con Ana es mi primo."],
          ["donde (= en el que, en la que...)", "lugares", "La ciudad donde nací es pequeña."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το «που» καλύπτει και το que και το donde: «το βιβλίο που διαβάζω» είναι el libro que leo και «το μέρος που μένω» είναι el lugar donde vivo.",
      "Στα ελληνικά λέμε συχνά «το βιβλίο που το διάβασα», με επανάληψη της αντωνυμίας. Στα ισπανικά αυτό δεν γίνεται: el libro que leí.",
      "Το que της αναφορικής πρότασης δεν έχει τόνο, ενώ το ερωτηματικό qué έχει.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Tengo un hermano ___ vive en Berlín.", hintEl: "Έχω έναν αδερφό που ζει στο Βερολίνο.", answer: "que" },
      { type: "cloze", id: "d2", textEs: "Esta es la ciudad ___ nació mi madre.", hintEl: "Αυτή είναι η πόλη όπου γεννήθηκε η μητέρα μου.", answer: "donde" },
      { type: "choice", id: "d3", promptEs: "Ese es el libro ___ me recomendó Ana.", promptEl: "Αυτό είναι το βιβλίο που μου πρότεινε η Ana.", options: ["que", "donde", "que lo", "en que"], answer: "que", explainEl: "Το βιβλίο είναι το άμεσο αντικείμενο του recomendó, άρα que. Δεν επαναλαμβάνουμε το lo." },
      { type: "cloze", id: "d4", textEs: "El restaurante ___ comemos los domingos es muy barato.", hintEl: "Το εστιατόριο όπου τρώμε τις Κυριακές είναι πολύ φθηνό.", answer: "donde" },
      { type: "cloze", id: "d5", textEs: "Los zapatos ___ compré ayer son muy cómodos.", hintEl: "Τα παπούτσια που αγόρασα χθες είναι πολύ άνετα.", answer: "que" },
      { type: "choice", id: "d6", promptEs: "Una panadería es una tienda ___ venden pan.", promptEl: "Ένας φούρνος είναι ένα μαγαζί όπου πωλούν ψωμί.", options: ["donde", "que", "quién", "qué"], answer: "donde" },
      { type: "choice", id: "d7", promptEs: "Un panadero es una persona ___ hace pan.", promptEl: "Ο φούρναρης είναι ένα άτομο που φτιάχνει ψωμί.", options: ["que", "donde", "qué", "dónde"], answer: "que", explainEl: "Για πρόσωπα χρησιμοποιούμε que, χωρίς τόνο." },
      { type: "choice", id: "d8", promptEs: "¿Qué frase es correcta?", promptEl: "Ποια πρόταση είναι σωστή; (Το βιβλίο που διαβάζω είναι ενδιαφέρον.)", options: ["El libro que lo leo es interesante.", "El libro que leo es interesante.", "El libro lo que leo es interesante."], answer: "El libro que leo es interesante.", explainEl: "Στα ισπανικά δεν επαναλαμβάνουμε το αντικείμενο με lo μέσα στην πρόταση του que." },
      { type: "order", id: "d9", promptEl: "Έχω έναν φίλο που παίζει κιθάρα.", solution: ["Tengo", "un", "amigo", "que", "toca", "la", "guitarra."], distractors: ["donde", "quién"] },
      { type: "order", id: "d10", promptEl: "Αυτό είναι το σχολείο όπου σπουδάζει η κόρη μου.", solution: ["Esta", "es", "la", "escuela", "donde", "estudia", "mi", "hija."], distractors: ["que", "estudio"] },
      { type: "order", id: "d11", promptEl: "Μου αρέσει το γλυκό που έφτιαξε η μητέρα μου.", solution: ["Me", "gusta", "el", "pastel", "que", "ha", "hecho", "mi", "madre."], distractors: ["lo", "donde"], alternatives: [["Me", "gusta", "el", "pastel", "que", "mi", "madre", "ha", "hecho."]], explainEl: "Το υποκείμενο (mi madre) μπαίνει συνήθως μετά το ρήμα της πρότασης με que, αλλά μπορεί να μπει και πριν από αυτό." },
      { type: "cloze", id: "d12", textEs: "La casa ___ vivimos tiene un jardín enorme.", hintEl: "Το σπίτι όπου μένουμε έχει έναν τεράστιο κήπο.", answer: "donde" },
    ],
    exercisesEl: [
      "Ένωσε τις δύο προτάσεις με το que.",
      "Αναγνώρισε τα πρόσωπα της εικόνας χρησιμοποιώντας chico ή chica και que.",
      "Γράψε τις απαντήσεις με τις λέξεις σε παρένθεση και το que.",
      "Κύκλωσε τη σωστή μορφή: que ή donde.",
      "Συμπλήρωσε τις προτάσεις με que ή donde.",
    ],
  },
  {
    id: "u36",
    number: 36,
    page: 82,
    titleEs: "¿quién?, ¿qué? (Interrogativos 1)",
    titleEl: "Ερωτηματικά: quién και qué",
    introEl:
      "Το ¿quién? και το ¿qué? είναι οι βασικές ερωτηματικές λέξεις για να ρωτάς για πρόσωπα (ποιος) και για πράγματα (τι). Παίρνουν τόνο και, αν υπάρχει πρόθεση, αυτή μπαίνει πριν από αυτά.",
    rules: [
      {
        textEl:
          "Το ¿quién? (ενικός) και το ¿quiénes? (πληθυντικός) χρησιμοποιούνται για να ρωτήσουμε για πρόσωπα.",
        examples: [
          { es: "¿Quién vive en el segundo?", el: "Ποιος μένει στον δεύτερο όροφο;" },
          { es: "¿Quiénes son los nuevos vecinos?", el: "Ποιοι είναι οι νέοι γείτονες;" },
        ],
      },
      {
        textEl: "Το ¿qué? χρησιμοποιείται για να ρωτήσουμε για πράγματα, ενέργειες και καταστάσεις.",
        examples: [
          { es: "¿Qué haces esta tarde?", el: "Τι κάνεις απόψε;" },
          { es: "¿Qué ha pasado?", el: "Τι έγινε;" },
        ],
      },
      {
        textEl:
          "Το ¿qué? ρωτάει και για τον ορισμό ενός προσώπου, ζώου ή πράγματος: ¿Qué es...?",
        examples: [{ es: "¿Qué es un paraguas? Un objeto para no mojarse.", el: "Τι είναι η ομπρέλα; Ένα αντικείμενο για να μη βρέχεσαι." }],
      },
      {
        textEl:
          "Αν η ερώτηση έχει πρόθεση (a, con, de, para, por...), αυτή μπαίνει πριν από το quién ή το qué, ποτέ στο τέλος της ερώτησης.",
        examples: [
          { es: "¿Con quién trabajas?", el: "Με ποιον δουλεύεις;" },
          { es: "¿A quién esperas?", el: "Ποιον περιμένεις;" },
        ],
      },
      {
        textEl:
          "Η σειρά των λέξεων είναι: (πρόθεση +) quién/qué + ρήμα (+ υποκείμενο) (+ συμπληρώματα). Το υποκείμενο μπαίνει μετά το ρήμα.",
        examples: [
          { es: "¿Qué compra Marta?", el: "Τι αγοράζει η Marta;" },
          { es: "¿Para quién cocina Luis?", el: "Για ποιον μαγειρεύει ο Luis;" },
        ],
      },
      {
        textEl: "Τα quién, quiénes και qué γράφονται πάντα με τόνο όταν ρωτάμε, και οι ερωτήσεις ανοίγουν με ¿ και κλείνουν με ?.",
        examples: [{ es: "¿Quién ha llamado?", el: "Ποιος τηλεφώνησε;" }],
      },
    ],
    tables: [
      {
        titleEl: "Πρόθεση + quién / qué",
        headers: ["Preposición", "quién / quiénes", "qué"],
        rows: [
          ["a", "¿A quién?", "¿A qué?"],
          ["con", "¿Con quién?", "¿Con qué?"],
          ["de", "¿De quién?", "¿De qué?"],
          ["para", "¿Para quién?", "¿Para qué?"],
          ["por", "¿Por quién?", "¿Por qué?"],
        ],
      },
    ],
    tipsEl: [
      "Το quién ρωτάει για πρόσωπα και το qué για πράγματα, όπως το «ποιος» και το «τι». Το ελληνικό «ποιο;» για επιλογή ανάμεσα σε πράγματα δεν είναι qué αλλά cuál, που θα το δεις αργότερα.",
      "Η πρόθεση μπαίνει πάντα πριν από το quién/qué: «Με ποιον μιλάς;» είναι ¿Con quién hablas?, όχι «¿Quién hablas con?».",
      "Μην ξεχνάς τον τόνο: το quién και το qué στις ερωτήσεις έχουν τόνο, ενώ το que της αναφορικής πρότασης όχι.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿___ es esa chica? Es mi prima.", hintEl: "Ποια είναι αυτή η κοπέλα; Είναι η ξαδέρφη μου.", answer: "Quién" },
      { type: "cloze", id: "d2", textEs: "¿___ son aquellos señores? Son los vecinos nuevos.", hintEl: "Ποιοι είναι εκείνοι οι κύριοι; Είναι οι νέοι γείτονες.", answer: "Quiénes" },
      { type: "cloze", id: "d3", textEs: "¿___ tienes en la mochila? Mis libros y un bocadillo.", hintEl: "Τι έχεις στο σακίδιο; Τα βιβλία μου και ένα σάντουιτς.", answer: "Qué" },
      { type: "cloze", id: "d4", textEs: "¿Con ___ vas a la fiesta? Con mi hermana.", hintEl: "Με ποιον πας στο πάρτι; Με την αδερφή μου.", answer: "quién" },
      { type: "choice", id: "d5", promptEs: "¿___ es un abogado? Una persona que defiende a otras ante la ley.", promptEl: "Τι είναι ο δικηγόρος; Ένα άτομο που υπερασπίζεται άλλους μπροστά στον νόμο.", options: ["Qué", "Quién", "Quiénes", "Dónde"], answer: "Qué", explainEl: "Για να ρωτήσουμε τον ορισμό ενός προσώπου χρησιμοποιούμε ¿Qué es...?" },
      { type: "cloze", id: "d6", textEs: "¿De ___ hablan ellos? De política.", hintEl: "Για τι μιλούν; Για πολιτική.", answer: "qué" },
      { type: "choice", id: "d7", promptEs: "¿___ son tus mejores amigos?", promptEl: "Ποιοι είναι οι καλύτεροι φίλοι σου;", options: ["Quiénes", "Quién", "Qué", "Cuál"], answer: "Quiénes", explainEl: "Το ρήμα son είναι πληθυντικός, άρα quiénes." },
      { type: "choice", id: "d8", promptEs: "¿Cuál es correcta?", promptEl: "Ποια ερώτηση είναι σωστή; (Με ποιον μιλάς;)", options: ["¿Con quién hablas?", "¿Quién hablas con?", "¿Quién con hablas?"], answer: "¿Con quién hablas?", explainEl: "Η πρόθεση μπαίνει πριν από το quién." },
      { type: "cloze", id: "d9", textEs: "¿Para ___ es este regalo? Es para mi padre.", hintEl: "Για ποιον είναι αυτό το δώρο; Είναι για τον πατέρα μου.", answer: "quién" },
      { type: "choice", id: "d10", promptEs: "¿___ estás escribiendo? Un correo para mi jefe.", promptEl: "Τι γράφεις; Ένα email για τον προϊστάμενό μου.", options: ["Qué", "Quién", "Quiénes", "Con quién"], answer: "Qué" },
      { type: "order", id: "d11", promptEl: "Τι κάνει ο αδερφός σου τις Κυριακές;", solution: ["¿Qué", "hace", "tu", "hermano", "los", "domingos?"], distractors: ["quién", "haces"], explainEl: "Το υποκείμενο (tu hermano) μπαίνει μετά το ρήμα." },
      { type: "order", id: "d12", promptEl: "Ποιον βλέπεις στη φωτογραφία;", solution: ["¿A", "quién", "ves", "en", "la", "foto?"], distractors: ["qué", "vez"], explainEl: "Όταν ρωτάμε για πρόσωπο που είναι άμεσο αντικείμενο, χρειάζεται το a." },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις ερωτήσεις με quién, quiénes ή qué.",
      "Κάνε ερωτήσεις για τις υπογραμμισμένες πληροφορίες.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις ερωτήσεις.",
      "Κάνε ερωτήσεις για να ζητήσεις περισσότερες πληροφορίες, με βάση προτάσεις που περιέχουν alguien ή algo.",
    ],
  },
];
