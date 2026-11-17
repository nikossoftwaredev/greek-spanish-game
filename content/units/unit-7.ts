import type { UnitBase } from "@/types/content";

export const unit7: UnitBase = {
  id: 7,
  titleEs: "¡A comer!",
  titleEl: "Ώρα για φαγητό!",
  goalEl: "Φτιάχνω ένα μενού ημέρας, παραγγέλνω σε μπαρ και εστιατόριο και λέω ποια πιάτα και τρόφιμα μου αρέσουν.",
  color: "#0176ac",
  pages: { start: 98, end: 111, lexico: 106, gramatica: 107, masEjercicios: { start: 183, end: 189 } },
  communicativeEl: [
    "Τα βγάζω πέρα σε μπαρ και εστιατόρια: παραγγελία, ζητώ κάτι ακόμα, λογαριασμός",
    "Ρωτάω και δίνω πληροφορίες για το φαγητό: τι είναι και τι περιέχει",
    "Μιλάω για τις διατροφικές μου συνήθειες",
    "Περιγράφω πώς μαγειρεύεται ένα πιάτο και πώς στρώνουμε το τραπέζι",
  ],
  verbIds: ["poner", "traer"],
  grammar: [
    {
      id: "informacion-comida",
      titleEs: "Pedir y dar información sobre comida: de y con",
      titleEl: "Πληροφορίες για το φαγητό: τα de και con",
      introEl:
        "Για να καταλάβεις μια λίστα φαγητών, χρειάζεσαι λίγες ερωτήσεις: τι είναι, τι περιέχει, από τι είναι φτιαγμένο και τι το συνοδεύει. Τα μικρά de και con κάνουν όλη τη δουλειά.",
      rules: [
        {
          textEl: "Για να μάθεις τι είναι ένα φαγητό ρωτάς «¿Qué es…?». Για να βρεις την κατηγορία του, δίνεις επιλογή με το o (ή).",
          examples: [
            { es: "¿Qué es el chorizo? Es un embutido.", el: "Τι είναι το chorizo; Είναι αλλαντικό." },
            { es: "¿El salmón es carne o pescado? Es pescado.", el: "Ο σολομός είναι κρέας ή ψάρι; Είναι ψάρι." },
          ],
        },
        {
          textEl: "Για τα υλικά ενός πιάτου ρωτάς «¿Qué lleva…?» (ενικός) ή «¿Qué llevan…?» (πληθυντικός). Στην απάντηση δεν χρειάζεται υποκείμενο: «Lleva…» σημαίνει «έχει μέσα…».",
          examples: [
            { es: "La ensalada, ¿qué lleva? Lleva lechuga, tomate y atún.", el: "Η σαλάτα, τι έχει; Έχει μαρούλι, ντομάτα και τόνο." },
            { es: "Las lentejas, ¿qué llevan? Llevan cebolla, chorizo y patatas.", el: "Οι φακές, τι έχουν; Έχουν κρεμμύδι, τσορίθο και πατάτες." },
          ],
        },
        {
          textEl: "Το de δείχνει από τι είναι φτιαγμένο ένα πιάτο ή ποιο είναι το βασικό του υλικό. Ρωτάς «¿La sopa de qué es?» και απαντάς «Es de…».",
          examples: [
            { es: "¿La sopa de qué es? Es de calabaza.", el: "Η σούπα από τι είναι; Είναι από κολοκύθα." },
            { es: "Una tortilla de espinacas.", el: "Μια ομελέτα με σπανάκι." },
          ],
        },
        {
          textEl: "Το con δείχνει κάτι που συνοδεύει το πιάτο ή προστίθεται σε αυτό. Ρωτάς «¿Viene con acompañamiento?» (έρχεται με συνοδευτικό;).",
          examples: [
            { es: "El pescado viene con ensalada.", el: "Το ψάρι έρχεται με σαλάτα." },
            { es: "Carne con arroz.", el: "Κρέας με ρύζι." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "De ή con;",
          headers: ["Πρόθεση", "Τι δείχνει", "Παραδείγματα"],
          rows: [
            ["de", "το βασικό υλικό ή το είδος του πιάτου", "sopa de verduras, ensalada de tomate, tortilla de patatas"],
            ["con", "το συνοδευτικό ή κάτι που προστίθεται", "pescado con patatas, café con leche, pollo con ensalada"],
          ],
        },
        {
          titleEl: "Ερωτήσεις για το φαγητό",
          headers: ["Ερώτηση", "Απάντηση"],
          rows: [
            ["¿Qué es el atún?", "Es un pescado."],
            ["¿El jamón es carne o pescado?", "Es carne."],
            ["La paella, ¿qué lleva?", "Lleva arroz, pollo y verduras."],
            ["Las patatas bravas, ¿qué llevan?", "Llevan salsa picante."],
            ["¿La sopa de qué es?", "Es de pescado."],
            ["¿El pollo viene con acompañamiento?", "Sí, viene con patatas."],
          ],
        },
      ],
      tipsEl: [
        "Το llevar εδώ δεν σημαίνει «κουβαλάω». Σημαίνει «περιέχει», γι' αυτό «¿Qué lleva?» είναι «Τι έχει μέσα;».",
        "Μετά το lleva τα υλικά συνήθως δεν παίρνουν άρθρο: «lleva tomate», «lleva cebolla» (όχι «lleva el tomate»).",
        "Προσοχή στην tortilla: στην Ισπανία η tortilla de patatas είναι ομελέτα με πατάτες, ενώ στο Μεξικό tortilla είναι η πλατιά πίτα από καλαμποκάλευρο.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿Qué es el chorizo?", promptEl: "Τι είναι το chorizo;", options: ["Un embutido.", "Una fruta.", "Una bebida."], answer: "Un embutido." },
        { type: "choice", id: "d2", promptEs: "¿El salmón es carne o pescado?", options: ["Es pescado.", "Es carne.", "Es fruta."], answer: "Es pescado." },
        { type: "choice", id: "d3", promptEs: "¿La sopa de qué es? Es ___ calabaza.", promptEl: "Η σούπα από τι είναι; Είναι από κολοκύθα.", options: ["de", "con", "en", "por"], answer: "de", explainEl: "Το de δείχνει το βασικό υλικό της σούπας." },
        { type: "cloze", id: "d4", textEs: "Un café ___ leche, por favor.", hintEl: "Έναν καφέ με γάλα, παρακαλώ.", answer: "con", explainEl: "Το γάλα προστίθεται στον καφέ, άρα con." },
        { type: "cloze", id: "d5", textEs: "Quiero una sopa ___ verduras.", hintEl: "Θέλω μια σούπα λαχανικών.", answer: "de" },
        { type: "cloze", id: "d6", textEs: "El pescado viene ___ ensalada.", hintEl: "Το ψάρι έρχεται με σαλάτα.", answer: "con" },
        { type: "cloze", id: "d7", textEs: "La ensalada ___ lechuga, tomate y atún.", hintEl: "Η σαλάτα έχει μαρούλι, ντομάτα και τόνο.", answer: "lleva", explainEl: "Το llevar εδώ σημαίνει «περιέχει». Η ensalada είναι ενικός, άρα lleva." },
        { type: "choice", id: "d8", promptEs: "Las lentejas, ¿qué ___?", promptEl: "Οι φακές, τι έχουν μέσα;", options: ["llevan", "lleva", "llevas", "llevamos"], answer: "llevan", explainEl: "Το υποκείμενο (las lentejas) είναι πληθυντικός, άρα llevan." },
        { type: "order", id: "d9", promptEl: "Η σαλάτα, τι έχει μέσα;", solution: ["La", "ensalada,", "¿qué", "lleva?"], distractors: ["llevan", "es"] },
        { type: "order", id: "d10", promptEl: "Το κοτόπουλο έρχεται με πατάτες;", solution: ["¿El", "pollo", "viene", "con", "patatas?"], distractors: ["de", "vienen"] },
      ],
    },
    {
      id: "bares-restaurantes",
      titleEs: "Bares y restaurantes",
      titleEl: "Σε μπαρ και εστιατόρια",
      introEl:
        "Σε δημόσιους χώρους είναι πιο ευγενικό να μιλάς στον σερβιτόρο με usted (ενικός) ή ustedes (πληθυντικός), δηλαδή με το ρήμα στο τρίτο πρόσωπο. Εδώ βρίσκεις τις φράσεις που χρειάζεσαι από την παραγγελία μέχρι τον λογαριασμό.",
      rules: [
        {
          textEl: "Ο σερβιτόρος ρωτά τι θέλεις με «¿Qué desea?» (ένας πελάτης) ή «¿Qué desean?» (πολλοί). Λέει και «¿Qué le pongo?» (σε έναν) ή «¿Qué les pongo?» (σε πολλούς), δηλαδή «Τι να σας βάλω;».",
          examples: [
            { es: "¿Qué desea, señora?", el: "Τι θα θέλατε, κυρία;" },
            { es: "¿Qué les pongo?", el: "Τι να σας φέρω;" },
          ],
        },
        {
          textEl: "Ο πελάτης παραγγέλνει συχνά χωρίς ρήμα: «Para beber, una cerveza, por favor». Με το primero και το después λέει τη σειρά των πιάτων.",
          examples: [
            { es: "Primero, ensalada, y después, pescado a la plancha.", el: "Πρώτα σαλάτα και μετά ψάρι στην πλάκα." },
            { es: "Para mí, la sopa de pescado.", el: "Για μένα, η ψαρόσουπα." },
          ],
        },
        {
          textEl: "Για να ρωτήσεις τι υπάρχει στο μενού λες «¿Qué hay de…?» ή «¿Qué tienen de…?» και συμπληρώνεις primero, segundo, postre.",
          examples: [{ es: "¿Qué tienen de postre?", el: "Τι έχετε για επιδόρπιο;" }],
        },
        {
          textEl: "Για κάτι ακόμα ξεκινάς με «Perdone» και ζητάς με «¿me pone…?» ή «¿me trae…?». Με «otro/a» ζητάς άλλο ένα, με «un poco más de» λίγο ακόμα.",
          examples: [
            { es: "Perdone, ¿me trae otra cerveza?", el: "Συγγνώμη, μου φέρνετε άλλη μια μπίρα;" },
            { es: "Perdone, ¿me pone un poco más de arroz?", el: "Συγγνώμη, μου βάζετε λίγο ακόμα ρύζι;" },
          ],
        },
        {
          textEl: "Για να πληρώσεις ρωτάς «¿Cuánto es?» ή «¿Qué le debo?», ή ζητάς «La cuenta, por favor».",
          examples: [{ es: "La cuenta, por favor.", el: "Τον λογαριασμό, παρακαλώ." }],
        },
      ],
      tables: [
        {
          titleEl: "Ο σερβιτόρος (camarero/a)",
          headers: ["Τι κάνει", "Φράσεις"],
          rows: [
            ["Ρωτά τι θέλει ο πελάτης", "¿Qué desea/n?"],
            ["", "¿Qué le / les pongo?"],
            ["", "¿Para beber?"],
            ["Προσφέρει", "¿Alguna cosa de postre?"],
            ["", "¿Algún café / licor?"],
          ],
        },
        {
          titleEl: "Ο πελάτης (cliente/a)",
          headers: ["Τι κάνει", "Φράσεις"],
          rows: [
            ["Παραγγέλνει", "Primero, sopa, y después, pescado."],
            ["", "Para beber, un vino tinto, por favor."],
            ["", "Para mí, la ensalada de tomate."],
            ["Ρωτά για το μενού", "¿Qué hay / tienen de primero / entrante / segundo / plato principal / postre?"],
            ["Ζητά κάτι ακόμα", "Perdone, ¿me pone otra agua?"],
            ["", "Perdone, ¿me trae un poco más de pan?"],
            ["Πληρώνει", "¿Cuánto es? / ¿Qué le debo?"],
            ["", "La cuenta, por favor."],
          ],
        },
      ],
      tipsEl: [
        "Το «¿Qué le pongo?» κυριολεκτικά είναι «Τι να σας βάλω;». Στα ελληνικά θα πεις «Τι θα πάρετε;».",
        "Το «por favor» και το «perdone» είναι απαραίτητα. Με το perdone τραβάς την προσοχή του σερβιτόρου.",
        "Πριν από αρσενικό ουσιαστικό ενικού το alguno γίνεται algún: «¿Algún café?», ενώ «¿Alguna cosa de postre?» (cosa θηλυκό).",
        "Το agua είναι θηλυκό αλλά παίρνει el: «el agua», όμως «otra agua» (το otra φανερώνει το θηλυκό).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Camarero: ¿Qué ___, señora?", promptEl: "Σερβιτόρος: Τι θα θέλατε, κυρία;", options: ["desea", "deseas", "deseo", "desean"], answer: "desea", explainEl: "Με usted το ρήμα μπαίνει στο τρίτο πρόσωπο ενικού: desea." },
        { type: "choice", id: "d2", promptEs: "Quieres pagar. ¿Qué dices?", promptEl: "Θέλεις να πληρώσεις. Τι λες;", options: ["La cuenta, por favor.", "La carta, por favor.", "¿Qué desea?", "Para beber."], answer: "La cuenta, por favor." },
        { type: "choice", id: "d3", promptEs: "Perdone, ¿me ___ otra cerveza?", promptEl: "Συγγνώμη, μου φέρνετε άλλη μια μπίρα;", options: ["trae", "traes", "traigo", "traen"], answer: "trae", explainEl: "Στον σερβιτόρο μιλάς με usted, άρα τρίτο πρόσωπο: trae." },
        { type: "choice", id: "d4", promptEs: "¿___ café, señor?", promptEl: "Κάποιον καφέ, κύριε;", options: ["Algún", "Alguna", "Alguno", "Algunos"], answer: "Algún", explainEl: "Πριν από αρσενικό ουσιαστικό ενικού το alguno γίνεται algún." },
        { type: "choice", id: "d5", promptEs: "Perdone, ¿cuánto ___?", promptEl: "Συγγνώμη, πόσο κάνει;", options: ["es", "hay", "tiene", "pone"], answer: "es" },
        { type: "cloze", id: "d6", textEs: "¿___ hay de postre?", hintEl: "Τι έχετε για επιδόρπιο;", answer: "Qué" },
        { type: "cloze", id: "d7", textEs: "¿Qué tienen ___ primero?", hintEl: "Τι έχετε για πρώτο πιάτο;", answer: "de" },
        { type: "cloze", id: "d8", textEs: "Para ___, un vaso de agua, por favor.", hintEl: "Για να πιω, ένα ποτήρι νερό, παρακαλώ.", answer: "beber" },
        { type: "order", id: "d9", promptEl: "Πρώτα σούπα και μετά κοτόπουλο στο φούρνο.", solution: ["Primero,", "sopa,", "y", "después,", "pollo", "al", "horno."], distractors: ["segundo", "con"] },
        { type: "order", id: "d10", promptEl: "Συγγνώμη, μου φέρνετε άλλη μια μπίρα;", solution: ["Perdone,", "¿me", "trae", "otra", "cerveza?"], distractors: ["traes", "pone"] },
      ],
    },
    {
      id: "poner-traer",
      titleEs: "Presente de indicativo: verbos poner y traer",
      titleEl: "Ενεστώτας: τα ρήματα poner και traer",
      introEl:
        "Τα poner (βάζω) και traer (φέρνω) είναι πολύ χρήσιμα στο τραπέζι και στο εστιατόριο. Έχουν σχεδόν κανονικές καταλήξεις και ένα μόνο ανώμαλο πρόσωπο: το «εγώ».",
      rules: [
        {
          textEl: "Στο πρώτο πρόσωπο προστίθεται ένα g: pongo, traigo (όπως το tengo). Όλα τα άλλα πρόσωπα έχουν τις κανονικές καταλήξεις των ρημάτων σε -er.",
          examples: [
            { es: "Pongo la mesa.", el: "Στρώνω το τραπέζι." },
            { es: "Traigo el pan.", el: "Φέρνω το ψωμί." },
          ],
        },
        {
          textEl: "Το poner σημαίνει «βάζω, τοποθετώ». Με το mesa είναι «στρώνω το τραπέζι», και στα μπαρ ο σερβιτόρος ρωτά «¿Qué le pongo?» ενώ ο πελάτης ζητά «¿Me pone un café?».",
          examples: [
            { es: "Ponemos los vasos en la mesa.", el: "Βάζουμε τα ποτήρια στο τραπέζι." },
            { es: "¿Me pone un café, por favor?", el: "Μου βάζετε έναν καφέ, παρακαλώ;" },
          ],
        },
        {
          textEl: "Το traer σημαίνει «φέρνω (προς το μέρος μου)» και είναι ο ευγενικός τρόπος να ζητήσεις κάτι από τον σερβιτόρο.",
          examples: [
            { es: "¿Me trae la carta, por favor?", el: "Μου φέρνετε τον κατάλογο, παρακαλώ;" },
            { es: "Los camareros traen la comida.", el: "Οι σερβιτόροι φέρνουν το φαγητό." },
          ],
        },
        {
          textEl: "Στους τύπους με vosotros ο τόνος γράφεται: ponéis, traéis. Στο vos οι τύποι είναι ponés, traés.",
          examples: [{ es: "Vosotros traéis el vino.", el: "Εσείς φέρνετε το κρασί." }],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας",
          headers: ["", "poner", "traer"],
          rows: [
            ["yo", "pongo", "traigo"],
            ["tú / vos", "pones / ponés", "traes / traés"],
            ["él / ella / usted", "pone", "trae"],
            ["nosotros / nosotras", "ponemos", "traemos"],
            ["vosotros / vosotras", "ponéis", "traéis"],
            ["ellos / ellas / ustedes", "ponen", "traen"],
          ],
        },
      ],
      tipsEl: [
        "Μην πεις «pono» ή «traio». Το «εγώ» παίρνει πάντα -go: pongo, traigo.",
        "Το traer δεν είναι το llevar. «Trae el libro» σημαίνει «φέρε (εδώ) το βιβλίο», ενώ «lleva el libro» σημαίνει «πάρε το βιβλίο (και πήγαινέ το κάπου)».",
        "Το «¿Me pone…?» είναι πολύ συνηθισμένο στην Ισπανία όταν παραγγέλνεις σε μπαρ: κυριολεκτικά «μου βάζετε…».",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ la mesa.", hintEl: "Εγώ στρώνω το τραπέζι.", answer: "pongo" },
        { type: "cloze", id: "d2", textEs: "Nosotros ___ los platos en la mesa.", hintEl: "Εμείς βάζουμε τα πιάτα στο τραπέζι.", answer: "ponemos" },
        { type: "cloze", id: "d3", textEs: "Tú ___ las servilletas.", hintEl: "Εσύ βάζεις τις πετσέτες.", answer: "pones" },
        { type: "cloze", id: "d4", textEs: "Yo ___ pan y vino a la cena.", hintEl: "Εγώ φέρνω ψωμί και κρασί στο δείπνο.", answer: "traigo", explainEl: "Το «εγώ» του traer είναι ανώμαλο: traigo." },
        { type: "cloze", id: "d5", textEs: "Ellos ___ la cuenta.", hintEl: "Εκείνοι φέρνουν τον λογαριασμό.", answer: "traen" },
        { type: "cloze", id: "d6", textEs: "Vosotros ___ un postre.", hintEl: "Εσείς φέρνετε ένα επιδόρπιο.", answer: "traéis", explainEl: "Στο vosotros ο τόνος γράφεται: traéis." },
        { type: "choice", id: "d7", promptEs: "¿Qué le ___, señor?", promptEl: "Τι να σας βάλω, κύριε;", options: ["pongo", "pone", "pones", "ponemos"], answer: "pongo" },
        { type: "choice", id: "d8", promptEs: "Mis padres ___ la comida a la mesa.", promptEl: "Οι γονείς μου φέρνουν το φαγητό στο τραπέζι.", options: ["traen", "traemos", "traigo", "traes"], answer: "traen" },
        { type: "choice", id: "d9", promptEs: "Ana ___ el café con leche.", promptEl: "Η Ana βάζει τον καφέ με γάλα.", options: ["pone", "pongo", "ponen", "ponéis"], answer: "pone" },
        { type: "order", id: "d10", promptEl: "Εγώ φέρνω τη σαλάτα.", solution: ["Yo", "traigo", "la", "ensalada."], distractors: ["traes", "pongo"] },
        { type: "order", id: "d11", promptEl: "Βάζουμε τα ποτήρια στο τραπέζι.", solution: ["Ponemos", "los", "vasos", "en", "la", "mesa."], distractors: ["pongo", "las"] },
      ],
    },
    {
      id: "pronombres-od",
      titleEs: "Lo, la, los, las: pronombres personales de objeto directo",
      titleEl: "Lo, la, los, las: αντωνυμίες αντικειμένου",
      introEl:
        "Όταν ξέρουμε ήδη για ποιο πράγμα μιλάμε, δεν το επαναλαμβάνουμε: το αντικαθιστούμε με lo, la, los ή las. Στα ελληνικά κάνεις το ίδιο: «τον καφέ τον πίνω σκέτο», «το πίνω».",
      rules: [
        {
          textEl: "Το άμεσο αντικείμενο (OD) είναι αυτό που δέχεται την πράξη του ρήματος. Το αντικαθιστούμε με lo (αρσενικό ενικό), la (θηλυκό ενικό), los (αρσενικό πληθυντικό) ή las (θηλυκό πληθυντικό).",
          examples: [
            { es: "¿El café? Lo tomo con leche.", el: "Ο καφές; Τον πίνω με γάλα." },
            { es: "¿Las patatas? Las cocino al horno.", el: "Οι πατάτες; Τις μαγειρεύω στο φούρνο." },
          ],
        },
        {
          textEl: "Η αντωνυμία μπαίνει ΜΠΡΟΣΤΑ από το ρήμα, όπως και στα ελληνικά. Στην άρνηση το no μπαίνει πριν από την αντωνυμία.",
          examples: [
            { es: "La fruta la como por la mañana.", el: "Το φρούτο το τρώω το πρωί." },
            { es: "No lo bebo con hielo.", el: "Δεν το πίνω με πάγο." },
          ],
        },
        {
          textEl: "Το γένος και ο αριθμός ακολουθούν το ΙΣΠΑΝΙΚΟ ουσιαστικό, όχι το ελληνικό. Η leche είναι la, αν και το γάλα στα ελληνικά είναι ουδέτερο.",
          examples: [{ es: "¿La leche? La tomo fría.", el: "Το γάλα; Το πίνω κρύο." }],
        },
        {
          textEl: "Όταν το OD βρίσκεται στην ίδια πρόταση πριν από το ρήμα, το επαναλαμβάνουμε με την αντωνυμία.",
          examples: [{ es: "El pescado lo hago al vapor, pero la carne la hago a la plancha.", el: "Το ψάρι το φτιάχνω στον ατμό, αλλά το κρέας το φτιάχνω στην πλάκα." }],
        },
        {
          textEl: "ΔΕΝ βάζουμε αντωνυμία όταν το OD δεν έχει καθοριστικό (άρθρο, κτητική ή δεικτική αντωνυμία).",
          examples: [{ es: "¿Esta sopa lleva cebolla? No, no lleva.", el: "Αυτή η σούπα έχει κρεμμύδι; Όχι, δεν έχει." }],
        },
      ],
      tables: [
        {
          titleEl: "Αντωνυμίες OD",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["Masculino", "lo", "los"],
            ["Femenino", "la", "las"],
          ],
        },
        {
          titleEl: "Παραδείγματα",
          headers: ["Αντικείμενο", "Αντωνυμία", "Παράδειγμα"],
          rows: [
            ["el café", "lo", "Lo tomo con leche."],
            ["la fruta", "la", "La como por la mañana."],
            ["los cereales", "los", "Los compro en el supermercado."],
            ["las patatas", "las", "Las cocino al horno."],
          ],
        },
      ],
      tipsEl: [
        "Παγίδα: το γένος το κρίνεις από το ισπανικό ουσιαστικό. Το κρέας (ουδέτερο στα ελληνικά) είναι la carne, άρα «la como». Το ψάρι (ουδέτερο) είναι el pescado, άρα «lo como».",
        "Το lo, la, los, las ΔΕΝ είναι τα άρθρα el, la, los, las. Μοιάζουν, αλλά οι αντωνυμίες μπαίνουν πριν από ρήμα (lo bebo), ενώ τα άρθρα πριν από ουσιαστικό (el café).",
        "Στην άρνηση το no μπαίνει πρώτο: «No lo tomo», όχι «Lo no tomo».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿Cómo tomas el té? ___ tomo con limón.", promptEl: "Πώς πίνεις το τσάι; Το πίνω με λεμόνι.", options: ["Lo", "La", "Los", "Las"], answer: "Lo" },
        { type: "choice", id: "d2", promptEs: "¿Dónde compras la fruta? ___ compro en el mercado.", promptEl: "Πού αγοράζεις το φρούτο; Το αγοράζω στη λαϊκή.", options: ["La", "Lo", "Las", "Los"], answer: "La" },
        { type: "choice", id: "d3", promptEs: "¿Cuándo tomas los yogures? ___ tomo por la mañana.", options: ["Los", "Las", "Lo", "La"], answer: "Los" },
        { type: "cloze", id: "d4", textEs: "¿Cómo comes las patatas? ___ como fritas.", hintEl: "Πώς τρως τις πατάτες; Τις τρώω τηγανητές.", answer: "Las" },
        { type: "cloze", id: "d5", textEs: "¿Te gustan los cereales? Sí, ___ tomo con leche.", hintEl: "Σου αρέσουν τα δημητριακά; Ναι, τα τρώω με γάλα.", answer: "los" },
        { type: "choice", id: "d6", promptEs: "El pescado ___ cocino al vapor.", promptEl: "Το ψάρι το μαγειρεύω στον ατμό.", options: ["lo", "la", "los", "las"], answer: "lo" },
        { type: "choice", id: "d7", promptEs: "La carne, ___ hago a la plancha.", promptEl: "Το κρέας το φτιάχνω στην πλάκα.", options: ["la", "lo", "las", "los"], answer: "la", explainEl: "Η carne είναι θηλυκό στα ισπανικά, παρόλο που το κρέας στα ελληνικά είναι ουδέτερο." },
        { type: "choice", id: "d8", promptEs: "¿Y la leche? Sí, ___ tomo todos los días.", promptEl: "Και το γάλα; Ναι, το πίνω κάθε μέρα.", options: ["la", "lo", "las", "los"], answer: "la", explainEl: "Η leche είναι θηλυκό, άρα la." },
        { type: "choice", id: "d9", promptEs: "¿Esta ensalada lleva cebolla? Sí, ___ cebolla.", promptEl: "Αυτή η σαλάτα έχει κρεμμύδι; Ναι, έχει κρεμμύδι.", options: ["lleva", "la lleva", "lo lleva", "las lleva"], answer: "lleva", explainEl: "Η cebolla δεν έχει καθοριστικό (άρθρο, κτητική), άρα δεν βάζουμε αντωνυμία." },
        { type: "order", id: "d10", promptEl: "Το ψωμί το τρώω με τυρί.", solution: ["El", "pan", "lo", "como", "con", "queso."], distractors: ["la", "comen"] },
        { type: "order", id: "d11", promptEl: "Τις πατάτες τις τρώω τηγανητές.", solution: ["Las", "patatas", "las", "como", "fritas."], distractors: ["los", "comes"] },
        { type: "order", id: "d12", promptEl: "Το τσάι το πίνω με λεμόνι.", solution: ["El", "té", "lo", "tomo", "con", "limón."], distractors: ["la", "tomas"] },
      ],
    },
  ],
};
