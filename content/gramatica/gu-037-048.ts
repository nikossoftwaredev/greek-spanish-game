import type { GuUnit } from "@/types/content";

export const guUnits037To048: GuUnit[] = [
  {
    id: "u37",
    number: 37,
    page: 84,
    titleEs: "Interrogativos (2): ¿cuál?, ¿cuáles?",
    titleEl: "Ερωτηματικά (2): cuál, cuáles και qué + ουσιαστικό",
    introEl:
      "Το cuál και το cuáles σημαίνουν «ποιος, ποια, ποιο» και ρωτούν όταν πρέπει να διαλέξουμε μέσα σε μια ομάδα. Θα δεις επίσης πότε χρησιμοποιούμε qué + ουσιαστικό στη θέση τους.",
    rules: [
      {
        textEl:
          "Το cuál (ενικός) και το cuáles (πληθυντικός) ρωτούν για πρόσωπα, ζώα ή πράγματα όταν ο συνομιλητής διαλέγει ανάμεσα σε στοιχεία μιας γνωστής ομάδας. Δεν έχουν ξεχωριστό θηλυκό: αλλάζουν μόνο στον αριθμό.",
        examples: [
          { es: "¿Cuál es tu color preferido?", el: "Ποιο είναι το αγαπημένο σου χρώμα;" },
          { es: "¿Cuáles son tus películas preferidas?", el: "Ποιες είναι οι αγαπημένες σου ταινίες;" },
        ],
      },
      {
        textEl:
          "Μετά το cuál / cuáles μπορεί να έρθει de + η ομάδα στην οποία διαλέγουμε: estos / esos, mis / tus, los + ουσιαστικό ή nosotros, vosotros, ustedes, ellos. Το ρήμα συμφωνεί με το cuál (ενικός) ή το cuáles (πληθυντικός), όχι με την ομάδα.",
        examples: [
          { es: "¿Cuál de estos bolsos es tuyo?", el: "Ποια από αυτές τις τσάντες είναι δική σου;" },
          { es: "¿Cuáles de tus amigos viven en Madrid?", el: "Ποιοι από τους φίλους σου μένουν στη Μαδρίτη;" },
          { es: "¿Cuál de vosotros tiene el coche?", el: "Ποιος από εσάς έχει το αυτοκίνητο;" },
        ],
      },
      {
        textEl:
          "Στην κοινή ισπανική και στην ισπανική της Ισπανίας το cuál δεν μπαίνει ακριβώς πριν από ουσιαστικό (στη Λατινική Αμερική ακούγεται και ¿Cuál libro?). Όταν η ερώτηση έχει ουσιαστικό, χρησιμοποιούμε qué + ουσιαστικό, που είναι σωστό παντού. Αντίθετα, το qué δεν συνδυάζεται με de + estos / mis / los: εκεί χρειάζεσαι cuál de.",
        examples: [
          { es: "¿Qué libro prefieres?", el: "Ποιο βιβλίο προτιμάς;" },
          { es: "¿Cuál de estos libros prefieres?", el: "Ποιο από αυτά τα βιβλία προτιμάς;" },
        ],
      },
      {
        textEl: "Το qué + ουσιαστικό μπορεί να σημαίνει και «τι είδους»: ¿qué tipo de...?, ¿qué clase de...?.",
        examples: [
          { es: "¿Qué música escuchas?", el: "Τι μουσική ακούς;" },
          { es: "¿Qué tipo de música escuchas?", el: "Τι είδους μουσική ακούς;" },
        ],
      },
      {
        textEl:
          "Η σειρά των λέξεων είναι: (πρόθεση +) ερωτηματική ομάδα + ρήμα (+ υποκείμενο) (+ συμπληρώματα). Η πρόθεση μπαίνει πάντα μπροστά από το ερωτηματικό.",
        examples: [
          { es: "¿En qué calle vive Marta?", el: "Σε ποιον δρόμο μένει η Marta;" },
          { es: "¿Con cuál de ellas hablas?", el: "Με ποια από αυτές μιλάς;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Cuál, cuáles και qué",
        headers: ["Interrogativo", "Singular", "Plural"],
        rows: [
          ["cuál / cuáles", "¿Cuál es tu coche?", "¿Cuáles son tus coches?"],
          ["cuál / cuáles + de + ...", "¿Cuál de estos coches?", "¿Cuáles de estos coches?"],
          ["qué + nombre", "¿Qué coche prefieres?", "¿Qué coches prefieres?"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λες «ποιο βιβλίο;» με το ίδιο «ποιο» που λες «ποιο από αυτά;». Στα ισπανικά διαχωρίζονται: ¿Qué libro? (με ουσιαστικό) αλλά ¿Cuál de estos libros? (επιλογή μέσα σε ομάδα).",
      "Το qué και το cuál γράφονται πάντα με τόνο όταν ρωτάνε. Ο πληθυντικός του cuál είναι cuáles (όχι «cuáls»).",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "¿___ es tu color preferido?", promptEl: "Ποιο είναι το αγαπημένο σου χρώμα;", options: ["Cuál", "Cuáles", "Qué", "Cuánto"], answer: "Cuál" },
      { type: "choice", id: "d2", promptEs: "¿___ son tus escritores preferidos?", promptEl: "Ποιοι είναι οι αγαπημένοι σου συγγραφείς;", options: ["Cuál", "Cuáles", "Qué"], answer: "Cuáles", explainEl: "Το ρήμα είναι στον πληθυντικό (son), άρα χρειάζεσαι cuáles." },
      { type: "choice", id: "d3", promptEs: "¿___ libro lees ahora?", promptEl: "Ποιο βιβλίο διαβάζεις τώρα;", options: ["Cuál", "Cuáles", "Qué", "Cuánto"], answer: "Qué", explainEl: "Πριν από ουσιαστικό (libro) χρησιμοποιούμε qué, όχι cuál." },
      { type: "cloze", id: "d4", textEs: "¿___ de estas chicas es tu hermana?", hintEl: "Ποια από αυτά τα κορίτσια είναι η αδερφή σου;", answer: "Cuál" },
      { type: "cloze", id: "d5", textEs: "¿___ de tus primos viven en Sevilla?", hintEl: "Ποιοι από τους ξαδέρφους σου μένουν στη Σεβίλλη;", answer: "Cuáles" },
      { type: "cloze", id: "d6", textEs: "¿En ___ ciudad vive tu hermana?", hintEl: "Σε ποια πόλη μένει η αδερφή σου;", answer: "qué" },
      { type: "cloze", id: "d7", textEs: "¿___ de vosotros habla francés?", hintEl: "Ποιος από εσάς μιλάει γαλλικά;", answer: "Cuál", explainEl: "Με το cuál το ρήμα μένει στον ενικό (habla), ακόμη κι αν η ομάδα (vosotros) είναι πληθυντικός." },
      { type: "choice", id: "d8", promptEs: "¿___ de estos zapatos te gusta más?", promptEl: "Ποιο από αυτά τα παπούτσια σου αρέσει περισσότερο;", options: ["Qué", "Cuál", "Cuáles"], answer: "Cuál", explainEl: "Μετά το de + estos δεν χρησιμοποιούμε qué. Το ρήμα gusta είναι ενικός, άρα cuál." },
      { type: "choice", id: "d9", promptEs: "Elige la pregunta correcta.", promptEl: "Ποιος από τους αδερφούς σου μένει στη Ρώμη;", options: ["¿Qué de tus hermanos vive en Roma?", "¿Cuál de tus hermanos vive en Roma?", "¿Cuál hermano vive en Roma?"], answer: "¿Cuál de tus hermanos vive en Roma?" },
      { type: "order", id: "d10", promptEl: "Ποιο από αυτά τα βιβλία θέλεις;", solution: ["¿Cuál", "de", "estos", "libros", "quieres?"], distractors: ["qué", "cuáles"] },
      { type: "order", id: "d11", promptEl: "Σε ποια πόλη μένει η Marta;", solution: ["¿En", "qué", "ciudad", "vive", "Marta?"], distractors: ["cuál", "viven"] },
      { type: "order", id: "d12", promptEl: "Ποιες είναι οι αγαπημένες σου ταινίες;", solution: ["¿Cuáles", "son", "tus", "películas", "preferidas?"], distractors: ["cuál", "qué"] },
    ],
    exercisesEl: [
      "Ένωσε τα ερωτηματικά (cuál, cuáles, cuál de, cuáles de) με το υπόλοιπο της κάθε ερώτησης.",
      "Συμπλήρωσε τις ερωτήσεις με cuál, cuáles, cuál de, cuáles de ή qué.",
      "Κάνε ερωτήσεις για την υπογραμμισμένη πληροφορία με qué, qué tipo de, qué clase de, cuál ή cuál de.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις ερωτήσεις.",
    ],
  },
  {
    id: "u38",
    number: 38,
    page: 86,
    titleEs: "Interrogativos (3): ¿dónde?, ¿cuándo?, ¿cuánto/a/os/as?",
    titleEl: "Ερωτηματικά (3): dónde, adónde, cuándo, cuánto",
    introEl:
      "Εδώ μαθαίνεις να ρωτάς για τόπο (dónde, adónde), για χρόνο (cuándo) και για ποσότητα (cuánto, cuánta, cuántos, cuántas). Το cuánto αλλάζει τύπο ανάλογα με το ουσιαστικό που ακολουθεί.",
    rules: [
      {
        textEl:
          "Το dónde ρωτά για τόπο: πού βρίσκεται ή πού γίνεται κάτι. Συνδυάζεται με προθέσεις (¿de dónde?, ¿por dónde?). Το adónde ρωτά για τον προορισμό μιας κίνησης: πού πηγαίνει κάποιος ή κάτι.",
        examples: [
          { es: "¿Dónde trabaja tu padre?", el: "Πού δουλεύει ο πατέρας σου;" },
          { es: "¿De dónde son tus amigos?", el: "Από πού είναι οι φίλοι σου;" },
          { es: "¿Adónde vas esta tarde?", el: "Πού πας αυτό το απόγευμα;" },
        ],
      },
      {
        textEl: "Το cuándo ρωτά για το χρόνο: πότε γίνεται κάτι.",
        examples: [
          { es: "¿Cuándo empieza la clase?", el: "Πότε αρχίζει το μάθημα;" },
          { es: "¿Cuándo vuelves a casa?", el: "Πότε γυρνάς σπίτι;" },
        ],
      },
      {
        textEl:
          "Τα cuánto, cuánta, cuántos, cuántas ρωτούν για ποσότητα. Παίρνουν το γένος και τον αριθμό του ουσιαστικού που ακολουθεί.",
        examples: [
          { es: "¿Cuánto tiempo necesitas?", el: "Πόσο χρόνο χρειάζεσαι;" },
          { es: "¿Cuántas horas duermes?", el: "Πόσες ώρες κοιμάσαι;" },
        ],
      },
      {
        textEl:
          "Όταν το ουσιαστικό έχει ήδη αναφερθεί, τα cuánto, cuánta, cuántos, cuántas μπορούν να μπουν μόνα τους, με τον τύπο του ουσιαστικού που αντικαθιστούν.",
        examples: [{ es: "Necesito sellos. ¿Cuántos necesitas?", el: "Χρειάζομαι γραμματόσημα. Πόσα χρειάζεσαι;" }],
      },
      {
        textEl:
          "Το cuánto μόνο του, χωρίς ουσιαστικό, χρησιμοποιείται όταν είναι σαφές τι ρωτάμε: τιμή, διάρκεια, βάρος, ύψος.",
        examples: [
          { es: "¿Cuánto cuesta este libro?", el: "Πόσο κάνει αυτό το βιβλίο;" },
          { es: "¿Cuánto dura el viaje?", el: "Πόσο διαρκεί το ταξίδι;" },
          { es: "¿Cuánto mides?", el: "Πόσο ύψος έχεις;" },
        ],
      },
      {
        textEl: "Η σειρά είναι: (πρόθεση +) ερωτηματική ομάδα + ρήμα (+ υποκείμενο).",
        examples: [{ es: "¿Cuándo llega Pablo?", el: "Πότε φτάνει ο Pablo;" }],
      },
    ],
    tables: [
      {
        titleEl: "Οι τέσσερις τύποι του cuánto",
        headers: ["", "Masculino", "Femenino"],
        rows: [
          ["Singular", "cuánto", "cuánta"],
          ["Plural", "cuántos", "cuántas"],
        ],
      },
      {
        titleEl: "Τι ρωτάει κάθε λέξη",
        headers: ["Interrogativo", "Significado", "Ejemplo"],
        rows: [
          ["dónde", "τόπος (στάση)", "¿Dónde está el banco?"],
          ["adónde", "προορισμός (κίνηση)", "¿Adónde va este tren?"],
          ["cuándo", "χρόνος", "¿Cuándo llegas?"],
          ["cuánto / cuánta / cuántos / cuántas", "ποσότητα", "¿Cuántos años tienes?"],
        ],
      },
    ],
    tipsEl: [
      "Το ελληνικό «πού» καλύπτει και τη στάση και την κίνηση. Στα ισπανικά συνήθως ξεχωρίζουν: ¿Dónde vives? (στάση) αλλά ¿Adónde vas? (κίνηση προς κάπου).",
      "Πρόσεξε το γένος του ουσιαστικού, όχι του ελληνικού ισοδύναμου: ¿cuánto azúcar? (το azúcar είναι αρσενικό) και ¿cuánta gente? (το gente είναι θηλυκό ενικού).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿___ vive Graciela?", hintEl: "Πού μένει η Graciela;", answer: "Dónde" },
      { type: "cloze", id: "d2", textEs: "¿___ vas esta tarde?", hintEl: "Πού πας αυτό το απόγευμα;", answer: "Adónde", alternatives: ["A dónde"], explainEl: "Για κίνηση προς έναν προορισμό χρησιμοποιούμε adónde (ή a dónde)." },
      { type: "cloze", id: "d3", textEs: "¿___ es tu cumpleaños?", hintEl: "Πότε είναι τα γενέθλιά σου;", answer: "Cuándo" },
      { type: "cloze", id: "d4", textEs: "¿___ hermanas tienes?", hintEl: "Πόσες αδερφές έχεις;", answer: "Cuántas" },
      { type: "cloze", id: "d5", textEs: "¿___ azúcar quieres en el café?", hintEl: "Πόση ζάχαρη θέλεις στον καφέ;", answer: "Cuánto", explainEl: "Η λέξη azúcar είναι αρσενικού γένους στα ισπανικά, γι' αυτό cuánto (και όχι cuánta)." },
      { type: "cloze", id: "d6", textEs: "¿___ gente hay en la plaza?", hintEl: "Πόσος κόσμος υπάρχει στην πλατεία;", answer: "Cuánta", explainEl: "Η λέξη gente είναι θηλυκό ενικού: cuánta gente." },
      { type: "choice", id: "d7", promptEs: "¿___ dinero necesitas?", promptEl: "Πόσα χρήματα χρειάζεσαι;", options: ["Cuánto", "Cuánta", "Cuántos", "Cuántas"], answer: "Cuánto" },
      { type: "choice", id: "d8", promptEs: "¿A ___ va este tren? A Valencia.", promptEl: "Πού πάει αυτό το τρένο; Στη Βαλένθια.", options: ["dónde", "cuándo", "quién"], answer: "dónde", explainEl: "Για κίνηση προς έναν προορισμό ρωτάμε ¿A dónde...? (ή adónde, σε μία λέξη)." },
      { type: "choice", id: "d9", promptEs: "¿De ___ son tus amigos? De Perú.", promptEl: "Από πού είναι οι φίλοι σου; Από το Περού.", options: ["dónde", "adónde", "cuándo"], answer: "dónde" },
      { type: "choice", id: "d10", promptEs: "Necesito sellos. ¿___ necesitas?", promptEl: "Χρειάζομαι γραμματόσημα. Πόσα χρειάζεσαι;", options: ["Cuánto", "Cuántos", "Cuántas", "Cuánta"], answer: "Cuántos" },
      { type: "order", id: "d11", promptEl: "Πού μένει η Alicia;", solution: ["¿Dónde", "vive", "Alicia?"], distractors: ["adónde"] },
      { type: "order", id: "d12", promptEl: "Πόσο κάνει αυτό το βιβλίο;", solution: ["¿Cuánto", "cuesta", "este", "libro?"], distractors: ["cuántos", "cuándo"] },
    ],
    exercisesEl: [
      "Κάνε ερωτήσεις για την υπογραμμισμένη πληροφορία με dónde, adónde ή cuándo.",
      "Συμπλήρωσε τις ερωτήσεις με cuánto, cuánta, cuántos ή cuántas.",
      "Συμπλήρωσε ξανά τις ερωτήσεις με τον σωστό τύπο του cuánto, και όταν το ουσιαστικό δεν αναφέρεται.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις ερωτήσεις.",
    ],
  },
  {
    id: "u39",
    number: 39,
    page: 88,
    titleEs: "Interrogativos (4): ¿cómo?, ¿por qué?, ¿para qué?",
    titleEl: "Ερωτηματικά (4): cómo, por qué, para qué",
    introEl:
      "Τρία ερωτηματικά που ρωτούν για τρόπο, αιτία και σκοπό. Στα ελληνικά το «γιατί» καλύπτει συχνά τα δύο τελευταία, στα ισπανικά όμως η διάκριση είναι σαφής.",
    rules: [
      {
        textEl:
          "Το cómo ρωτά για τον τρόπο που γίνεται κάτι, για την κατάσταση κάποιου ή κάτι (με estar) και για τα χαρακτηριστικά κάποιου ή κάτι (με ser). Χρησιμοποιείται και στο ¿Cómo te llamas?.",
        examples: [
          { es: "¿Cómo cocina tu padre?", el: "Πώς μαγειρεύει ο πατέρας σου;" },
          { es: "¿Cómo está tu abuela?", el: "Πώς είναι η γιαγιά σου (υγεία);" },
          { es: "¿Cómo es tu profesor?", el: "Πώς είναι ο καθηγητής σου (χαρακτήρας, εμφάνιση);" },
        ],
      },
      {
        textEl:
          "Το ¿qué tal? μπορεί να αντικαταστήσει το cómo όταν ρωτάμε για τον τρόπο, την κατάσταση ή τα χαρακτηριστικά, αλλά όχι στο ¿Cómo te llamas?.",
        examples: [
          { es: "¿Qué tal está tu abuela?", el: "Πώς είναι η γιαγιά σου;" },
          { es: "¿Qué tal es tu nuevo trabajo?", el: "Πώς είναι η καινούρια σου δουλειά;" },
        ],
      },
      {
        textEl:
          "Το ¿por qué? ρωτά για την αιτία. Στην απάντηση χρησιμοποιούμε porque. Το ¿por qué no...? χρησιμεύει και για προτάσεις.",
        examples: [
          { es: "¿Por qué estudias español? Porque me gusta viajar.", el: "Γιατί μαθαίνεις ισπανικά; Επειδή μου αρέσει να ταξιδεύω." },
          { es: "¿Por qué no cenamos fuera hoy?", el: "Γιατί να μην φάμε έξω σήμερα;" },
        ],
      },
      {
        textEl: "Το ¿para qué? ρωτά για τον σκοπό μιας ενέργειας ή για τη χρήση ενός αντικειμένου. Η απάντηση ξεκινά συνήθως με para + απαρέμφατο.",
        examples: [
          { es: "¿Para qué quieres el coche? Para ir al aeropuerto.", el: "Για ποιο λόγο θέλεις το αυτοκίνητο; Για να πάω στο αεροδρόμιο." },
          { es: "¿Para qué sirve esta herramienta? Para cortar madera.", el: "Σε τι χρησιμεύει αυτό το εργαλείο; Για να κόβεις ξύλο." },
        ],
      },
      {
        textEl: "Η σειρά είναι: ερωτηματική ομάδα + ρήμα (+ υποκείμενο).",
        examples: [{ es: "¿Por qué llora el bebé?", el: "Γιατί κλαίει το μωρό;" }],
      },
    ],
    tables: [
      {
        titleEl: "Cómo, por qué, para qué",
        headers: ["Pregunta", "Significado", "Respuesta"],
        rows: [
          ["¿Cómo...?", "τρόπος, κατάσταση, χαρακτηριστικά", "Muy bien. / Está mejor. / Es alto."],
          ["¿Por qué...?", "αιτία", "Porque + πρόταση"],
          ["¿Para qué...?", "σκοπός ή χρήση", "Para + infinitivo"],
        ],
      },
    ],
    tipsEl: [
      "Το ελληνικό «γιατί» αντιστοιχεί στο ¿por qué? (αιτία). Για σκοπό («για ποιο σκοπό, τι να το κάνω») χρησιμοποίησε ¿para qué?.",
      "Ερώτηση: por qué (δύο λέξεις, με τόνο). Απάντηση: porque (μία λέξη, χωρίς τόνο).",
      "Το ελληνικό «πώς είναι;» ισπανικά χωρίζεται: ¿Cómo es? ρωτά για χαρακτηριστικά, ¿Cómo está? ρωτά για κατάσταση.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "¿___ conduce Alberto? Muy bien.", promptEl: "Πώς οδηγεί ο Alberto; Πολύ καλά.", options: ["Cómo", "Por qué", "Para qué"], answer: "Cómo" },
      { type: "cloze", id: "d2", textEs: "¿___ no vienes a la fiesta?", hintEl: "Γιατί δεν έρχεσαι στο πάρτι;", answer: "Por qué" },
      { type: "cloze", id: "d3", textEs: "No salgo ___ estoy cansada.", hintEl: "Δεν βγαίνω επειδή είμαι κουρασμένη.", answer: "porque", explainEl: "Στην απάντηση γράφουμε porque, μία λέξη και χωρίς τόνο." },
      { type: "cloze", id: "d4", textEs: "¿___ sirve esta máquina? Para hacer café.", hintEl: "Σε τι χρησιμεύει αυτή η μηχανή; Για να φτιάχνει καφέ.", answer: "Para qué" },
      { type: "choice", id: "d5", promptEs: "¿Cómo es tu profesora?", options: ["Es joven y muy simpática.", "Para enseñar español.", "Porque es joven."], answer: "Es joven y muy simpática.", explainEl: "Το ¿Cómo es...? ρωτά για χαρακτηριστικά, γι' αυτό η απάντηση τα περιγράφει." },
      { type: "choice", id: "d6", promptEs: "¿Por qué estudias español?", options: ["Porque me gusta viajar.", "Para qué estudio.", "Muy bien, gracias."], answer: "Porque me gusta viajar." },
      { type: "choice", id: "d7", promptEs: "¿___ quieres ese cuchillo? Para cortar pan.", promptEl: "Για ποιο σκοπό θέλεις αυτό το μαχαίρι; Για να κόψω ψωμί.", options: ["Por qué", "Para qué", "Cómo"], answer: "Para qué" },
      { type: "cloze", id: "d8", textEs: "¿___ está tu madre? Ya está mejor.", hintEl: "Πώς είναι η μητέρα σου; Είναι πια καλύτερα.", answer: "Cómo", alternatives: ["Qué tal"] },
      { type: "cloze", id: "d9", textEs: "¿Por qué no ___ al cine esta noche?", hintEl: "Γιατί να μην πάμε σινεμά απόψε;", answer: "vamos", explainEl: "Το ¿por qué no...? με ρήμα στο «εμείς» κάνει πρόταση." },
      { type: "order", id: "d10", promptEl: "Γιατί τρέχεις;", solution: ["¿Por", "qué", "corres?"], distractors: ["para", "cómo"] },
      { type: "order", id: "d11", promptEl: "Για ποιο σκοπό θέλεις αυτό το βιβλίο;", solution: ["¿Para", "qué", "quieres", "este", "libro?"], distractors: ["por", "cómo"] },
      { type: "order", id: "d12", promptEl: "Πώς είναι το σπίτι του Arturo;", solution: ["¿Cómo", "es", "la", "casa", "de", "Arturo?"], distractors: ["porque", "para"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις ερωτήσεις με cómo και/ή qué tal.",
      "Συμπλήρωσε τις προτάσεις με por qué, para qué ή porque.",
      "Κάνε προτάσεις με ¿por qué no...? και τις ιδέες του πλαισίου.",
      "Κάνε ερωτήσεις για την υπογραμμισμένη πληροφορία.",
      "Κάνε ερωτήσεις με por qué, qué tal, cómo ή para qué.",
    ],
  },
  {
    id: "u40",
    number: 40,
    page: 90,
    titleEs: "Exclamaciones: ¡qué!",
    titleEl: "Επιφωνήματα με ¡qué!",
    introEl:
      "Το ¡qué! σε βοηθά να εκφράσεις έκπληξη, χαρά, θαυμασμό ή δυσαρέσκεια. Αντιστοιχεί στο ελληνικό «τι» ή «πόσο» (Τι ωραίο! Πόσο κρύο!).",
    rules: [
      {
        textEl:
          "Το ¡qué! είναι επιφώνημα (exclamativo). Εκφράζει χαρά, έκπληξη, θαυμασμό, δυσαρέσκεια. Γράφεται με τόνο και ανοίγει με ανάποδο θαυμαστικό.",
        examples: [
          { es: "¡Qué bien! Hoy no hay clase.", el: "Τι ωραία! Σήμερα δεν έχει μάθημα." },
          { es: "¡Qué susto!", el: "Τι φόβο πήρα!" },
        ],
      },
      {
        textEl:
          "¡Qué + επίθετο (+ ρήμα) (+ υποκείμενο)!: για χαρακτηριστικά ή κατάσταση. Το επίθετο παίρνει το γένος και τον αριθμό του προσώπου ή του πράγματος.",
        examples: [
          { es: "¡Qué simpática es tu hermana!", el: "Τι συμπαθητική είναι η αδερφή σου!" },
          { es: "¡Qué caros son estos zapatos!", el: "Τι ακριβά είναι αυτά τα παπούτσια!" },
          { es: "¡Qué nervioso estoy!", el: "Τι αγχωμένος είμαι!" },
        ],
      },
      {
        textEl: "¡Qué + επίρρημα (+ ρήμα) (+ υποκείμενο)!: για τον τρόπο που γίνεται κάτι. Το επίρρημα δεν αλλάζει.",
        examples: [
          { es: "¡Qué bien cocinas!", el: "Τι ωραία μαγειρεύεις!" },
          { es: "¡Qué despacio camina el abuelo!", el: "Τι αργά περπατάει ο παππούς!" },
        ],
      },
      {
        textEl: "¡Qué + ουσιαστικό (+ ρήμα) (+ υποκείμενο)!: για μια κατάσταση ή αίσθηση. Δεν μπαίνει άρθρο.",
        examples: [
          { es: "¡Qué frío!", el: "Τι κρύο!" },
          { es: "¡Qué hambre tengo!", el: "Πόσο πεινάω!" },
        ],
      },
      {
        textEl:
          "¡Qué + ουσιαστικό + tan / más + επίθετο (+ ρήμα) (+ υποκείμενο)!: για τις ιδιότητες κάποιου ή κάτι. Τα tan και más είναι ισοδύναμα εδώ. Δεν βάζουμε muy.",
        examples: [
          { es: "¡Qué vestido tan bonito!", el: "Τι όμορφο φόρεμα!" },
          { es: "¡Qué perro más gracioso!", el: "Τι αστείος σκύλος!" },
        ],
      },
      {
        textEl: "Το ρήμα και το υποκείμενο παραλείπονται όταν είναι σαφές τι ή ποιον εννοούμε.",
        examples: [{ es: "Voy a casarme. ¡Qué sorpresa!", el: "Θα παντρευτώ. Τι έκπληξη!" }],
      },
    ],
    tables: [
      {
        titleEl: "Οι δομές του ¡qué!",
        headers: ["Estructura", "Corto", "Con verbo y sujeto"],
        rows: [
          ["¡Qué + adjetivo!", "¡Qué simpática!", "¡Qué simpática es Ana!"],
          ["¡Qué + adverbio!", "¡Qué bien!", "¡Qué bien canta Ana!"],
          ["¡Qué + nombre!", "¡Qué calor!", "¡Qué calor tengo!"],
          ["¡Qué + nombre + tan / más + adjetivo!", "¡Qué vestido tan bonito!", "¡Qué vestido tan bonito lleva Ana!"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λες και «τι ωραίο!» και «πόσο ωραίο!». Στα ισπανικά χρησιμοποιείς πάντα qué: ¡Qué bonito!, όχι «cuánto bonito».",
      "Μην πεις ¡Qué casa muy bonita!. Μετά το ουσιαστικό βάζεις tan ή más: ¡Qué casa tan bonita!.",
      "Το επίθετο συμφωνεί με το πρόσωπο ή το πράγμα (¡Qué alta es Ana!, ¡Qué altos son!), ενώ το επίρρημα μένει ίδιο (¡Qué bien cantan!).",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "¡Qué ___ es Lola!", promptEl: "Τι ψηλή είναι η Lola!", options: ["alta", "alto", "altas", "altos"], answer: "alta" },
      { type: "choice", id: "d2", promptEs: "¡Qué ___ son esos pantalones!", promptEl: "Τι ακριβά είναι αυτά τα παντελόνια!", options: ["caro", "cara", "caros", "caras"], answer: "caros", explainEl: "Τα pantalones είναι αρσενικό πληθυντικού, άρα caros." },
      { type: "choice", id: "d3", promptEs: "¡Qué ___ conduces!", promptEl: "Τι ωραία οδηγείς!", options: ["bien", "bueno", "buena"], answer: "bien", explainEl: "Για τον τρόπο που γίνεται κάτι χρησιμοποιούμε επίρρημα (bien)." },
      { type: "cloze", id: "d4", textEs: "¡Qué ___ hace hoy!", hintEl: "Τι ζέστη κάνει σήμερα!", answer: "calor" },
      { type: "cloze", id: "d5", textEs: "¡Qué ___ tengo!", hintEl: "Πόσο νυστάζω!", answer: "sueño" },
      { type: "cloze", id: "d6", textEs: "¡Qué casa ___ bonita!", hintEl: "Τι όμορφο σπίτι!", answer: "tan", alternatives: ["más"], explainEl: "Μετά το ουσιαστικό χρησιμοποιούμε tan ή más, όχι muy." },
      { type: "cloze", id: "d7", textEs: "¡Qué ___ son tus padres!", hintEl: "Τι συμπαθητικοί είναι οι γονείς σου!", answer: "simpáticos" },
      { type: "choice", id: "d8", promptEs: "Elige la exclamación correcta.", promptEl: "Τι όμορφο σπίτι!", options: ["¡Qué casa tan bonita!", "¡Qué casa muy bonita!", "¡Qué la casa bonita!"], answer: "¡Qué casa tan bonita!" },
      { type: "choice", id: "d9", promptEs: "¡Qué ___ estoy!", promptEl: "Τι κουρασμένη είμαι! (μιλά μια γυναίκα)", options: ["cansado", "cansada", "cansados", "cansadas"], answer: "cansada" },
      { type: "order", id: "d10", promptEl: "Τι ωραία μαγειρεύεις!", solution: ["¡Qué", "bien", "cocinas!"], distractors: ["bueno", "muy"] },
      { type: "order", id: "d11", promptEl: "Τι ακριβό είναι αυτό το ρολόι!", solution: ["¡Qué", "caro", "es", "este", "reloj!"], distractors: ["cara", "muy"] },
      {
        type: "order",
        id: "d12",
        promptEl: "Τι έξυπνο παιδί!",
        solution: ["¡Qué", "niño", "más", "listo!"],
        distractors: ["tan", "muy", "lista"],
        alternatives: [["¡Qué", "niño", "tan", "listo!"]],
      },
    ],
    exercisesEl: [
      "Δες τις εικόνες και συμπλήρωσε με ¡qué! και τον σωστό τύπο των επιθέτων του πλαισίου.",
      "Δες τις εικόνες και γράψε επιφωνήματα με ¡qué! και τις λέξεις του πλαισίου.",
      "Δες τις εικόνες του 40.1 και γράψε επιφωνήματα με ¡qué! + más ή tan και τα ουσιαστικά του πλαισίου.",
      "Φτιάξε επιφωνήματα από τις προτάσεις, όπως στο παράδειγμα.",
    ],
  },
  {
    id: "u41",
    number: 41,
    page: 92,
    titleEs: "Presente de indicativo de ser",
    titleEl: "Ο ενεστώτας του ρήματος ser",
    introEl:
      "Το ser είναι το βασικό ρήμα για να πεις ποιος ή τι είναι κάτι, από πού είναι, τι ώρα είναι και πώς είναι συνήθως. Είναι ανώμαλο, οπότε τα μαθαίνεις απέξω.",
    rules: [
      {
        textEl:
          "Χρησιμοποιούμε ser για να ταυτίσουμε ή να ορίσουμε πρόσωπα και πράγματα, και για να πούμε επάγγελμα, εθνικότητα, θρησκεία ή ιδεολογία.",
        examples: [
          { es: "Ese es mi vecino.", el: "Αυτός είναι ο γείτονάς μου." },
          { es: "Mi padre es ingeniero.", el: "Ο πατέρας μου είναι μηχανικός." },
          { es: "Somos griegos.", el: "Είμαστε Έλληνες." },
        ],
      },
      {
        textEl: "Το ser δηλώνει σχέση και συγγένεια, καθώς και ιδιότητες (πώς είναι κάποιος ή κάτι).",
        examples: [
          { es: "Pablo y yo somos primos.", el: "Ο Pablo κι εγώ είμαστε ξαδέρφια." },
          { es: "Tu abuela es muy simpática.", el: "Η γιαγιά σου είναι πολύ συμπαθητική." },
        ],
      },
      {
        textEl: "Με το ser λέμε την ώρα, την ημέρα, την ποσότητα και την τιμή.",
        examples: [
          { es: "Hoy es sábado.", el: "Σήμερα είναι Σάββατο." },
          { es: "Son las cuatro. / Es la una.", el: "Είναι τέσσερις. / Είναι μία." },
          { es: "En casa somos cinco. Son diez euros.", el: "Στο σπίτι είμαστε πέντε. Κάνει δέκα ευρώ." },
        ],
      },
      {
        textEl: "Ser + de + όνομα δηλώνει προέλευση, υλικό ή κτήση.",
        examples: [
          { es: "Somos de Creta.", el: "Είμαστε από την Κρήτη." },
          { es: "Este anillo es de oro.", el: "Αυτό το δαχτυλίδι είναι από χρυσό." },
          { es: "¿De quién es este bolso? Es de Marta.", el: "Ποιανού είναι αυτή η τσάντα; Της Marta." },
        ],
      },
      {
        textEl: "Με το ser λέμε πού και πότε γίνεται ένα γεγονός (γιορτή, συναυλία, εξέταση).",
        examples: [
          { es: "La exposición es en el museo.", el: "Η έκθεση είναι στο μουσείο." },
          { es: "El concierto es a las ocho.", el: "Η συναυλία είναι στις οκτώ." },
        ],
      },
      {
        textEl: "Στην άρνηση το no μπαίνει μπροστά από το ρήμα. Στην ερώτηση το υποκείμενο συνήθως μπαίνει μετά το ρήμα.",
        examples: [
          { es: "Ellos no son italianos.", el: "Αυτοί δεν είναι Ιταλοί." },
          { es: "¿Son tus primos de Valencia?", el: "Είναι οι ξαδέρφοι σου από τη Βαλένθια;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενεστώτας του ser",
        headers: ["Persona", "ser"],
        rows: [
          ["yo", "soy"],
          ["tú", "eres"],
          ["usted / él / ella", "es"],
          ["nosotros / nosotras", "somos"],
          ["vosotros / vosotras", "sois"],
          ["ustedes / ellos / ellas", "son"],
        ],
      },
    ],
    tipsEl: [
      "Στην ώρα το ρήμα αλλάζει: Es la una (ενικός μόνο για τη μία) αλλά Son las dos, las tres... (πληθυντικός).",
      "Όταν μιλάς για την ώρα ή την ποσότητα το ser είναι ο μόνος σωστός τύπος: ¿Qué hora es?, ¿Cuánto es?.",
      "Στην Αργεντινή και σε άλλες χώρες λένε vos sos (αντί tú eres). Εσύ χρησιμοποίησε tú eres.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo ___ de Creta.", hintEl: "Είμαι από την Κρήτη.", answer: "soy" },
      { type: "cloze", id: "d2", textEs: "Mis padres ___ muy simpáticos.", hintEl: "Οι γονείς μου είναι πολύ συμπαθητικοί.", answer: "son" },
      { type: "cloze", id: "d3", textEs: "Vosotros ___ mis mejores amigos.", hintEl: "Εσείς είστε οι καλύτεροί μου φίλοι.", answer: "sois" },
      { type: "cloze", id: "d4", textEs: "En mi familia ___ cinco.", hintEl: "Στην οικογένειά μου είμαστε πέντε.", answer: "somos", explainEl: "Για να πούμε πόσοι είμαστε χρησιμοποιούμε ser: somos cinco." },
      { type: "cloze", id: "d5", textEs: "Hoy ___ martes.", hintEl: "Σήμερα είναι Τρίτη.", answer: "es" },
      { type: "cloze", id: "d6", textEs: "___ las cuatro de la tarde.", hintEl: "Είναι τέσσερις το απόγευμα.", answer: "Son", explainEl: "Από τις δύο και μετά η ώρα παίρνει πληθυντικό: son las dos, son las tres..." },
      { type: "choice", id: "d7", promptEs: "Este anillo ___ oro.", promptEl: "Αυτό το δαχτυλίδι είναι από χρυσό.", options: ["es de", "es", "está de", "son de"], answer: "es de" },
      { type: "choice", id: "d8", promptEs: "¿___ es este bolso? Es de Marta.", promptEl: "Ποιανού είναι αυτή η τσάντα; Της Marta.", options: ["De quién", "Quién", "Cuál", "Cómo"], answer: "De quién" },
      { type: "choice", id: "d9", promptEs: "La fiesta ___ en el jardín de mi casa.", promptEl: "Το πάρτι γίνεται στον κήπο του σπιτιού μου.", options: ["es", "está", "hay", "tiene"], answer: "es", explainEl: "Για τον τόπο ενός γεγονότος (πάρτι, συναυλία, εξέταση) χρησιμοποιούμε ser." },
      { type: "cloze", id: "d10", textEs: "Ellos no ___ griegos, son italianos.", hintEl: "Αυτοί δεν είναι Έλληνες, είναι Ιταλοί.", answer: "son" },
      { type: "order", id: "d11", promptEl: "Η Marta δεν είναι γιατρός.", solution: ["Marta", "no", "es", "médica."], distractors: ["está", "son"] },
      { type: "order", id: "d12", promptEl: "Από πού είναι η καθηγήτριά σου;", solution: ["¿De", "dónde", "es", "tu", "profesora?"], distractors: ["son", "está"] },
    ],
    exercisesEl: [
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με soy, eres, es...",
      "Συμπλήρωσε τις ερωτήσεις και τις απαντήσεις ενός διαλόγου με τους τύπους του ser.",
      "Γράψε προτάσεις με τους τύπους του ser και πρόσθεσε de όπου χρειάζεται.",
      "Συμπλήρωσε τις προτάσεις με τον σωστό τύπο του ser, καταφατικά ή αρνητικά.",
      "Γράψε προτάσεις με τις λέξεις που δίνονται, στη σωστή σειρά και με τον ενεστώτα του ser.",
    ],
  },
  {
    id: "u42",
    number: 42,
    page: 94,
    titleEs: "Presente de indicativo de estar",
    titleEl: "Ο ενεστώτας του ρήματος estar",
    introEl:
      "Το estar δείχνει πού βρίσκεται κάποιος ή κάτι και σε ποια προσωρινή κατάσταση είναι (κουρασμένος, ανοιχτό, κρύο). Είναι ανώμαλο στο «εγώ» (estoy) και έχει τόνο στα estás, está, estáis, están.",
    rules: [
      {
        textEl: "Με το estar λέμε πού βρίσκεται κάποιος ή κάτι: τη θέση προσώπων, πραγμάτων και τόπων.",
        examples: [
          { es: "Mi hermano está en el gimnasio.", el: "Ο αδερφός μου είναι στο γυμναστήριο." },
          { es: "La estación está cerca del puerto.", el: "Ο σταθμός είναι κοντά στο λιμάνι." },
        ],
      },
      {
        textEl:
          "Estar + όνομα προσώπου σημαίνει «είναι εδώ / εκεί (στο μέρος που βρισκόμαστε);». Το χρησιμοποιούμε στο τηλέφωνο ή στην πόρτα.",
        examples: [{ es: "Hola, ¿está Clara?", el: "Γεια σας, είναι η Clara εδώ;" }],
      },
      {
        textEl:
          "Το estar δηλώνει προσωρινές σωματικές και ψυχικές καταστάσεις: enfermo, resfriado, cansado, agotado, contento, triste, aburrido, enfadado, de buen / mal humor, preocupado, nervioso.",
        examples: [
          { es: "Hoy estoy muy nervioso.", el: "Σήμερα είμαι πολύ αγχωμένος." },
          { es: "¿Cómo estás? Estoy un poco triste.", el: "Πώς είσαι; Είμαι λίγο λυπημένος." },
        ],
      },
      {
        textEl: "Με το estar περιγράφουμε και προσωρινές καταστάσεις πραγμάτων.",
        examples: [
          { es: "La cocina está limpia hoy.", el: "Η κουζίνα είναι καθαρή σήμερα." },
          { es: "El café está frío.", el: "Ο καφές είναι κρύος." },
        ],
      },
      {
        textEl: "Στην άρνηση το no μπαίνει μπροστά από το ρήμα. Στην ερώτηση το υποκείμενο συνήθως μπαίνει μετά το ρήμα.",
        examples: [
          { es: "Hoy Pablo no está en la oficina.", el: "Σήμερα ο Pablo δεν είναι στο γραφείο." },
          { es: "¿Está Marta en la universidad?", el: "Είναι η Marta στο πανεπιστήμιο;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενεστώτας του estar",
        headers: ["Persona", "estar"],
        rows: [
          ["yo", "estoy"],
          ["tú", "estás"],
          ["usted / él / ella", "está"],
          ["nosotros / nosotras", "estamos"],
          ["vosotros / vosotras", "estáis"],
          ["ustedes / ellos / ellas", "están"],
        ],
      },
      {
        titleEl: "Συχνές καταστάσεις με estar",
        headers: ["Español", "Ελληνικά"],
        rows: [
          ["enfermo / enferma", "άρρωστος / άρρωστη"],
          ["resfriado / resfriada", "κρυωμένος / κρυωμένη"],
          ["cansado / cansada", "κουρασμένος / κουρασμένη"],
          ["agotado / agotada", "εξαντλημένος / εξαντλημένη"],
          ["contento / contenta", "χαρούμενος / χαρούμενη"],
          ["triste", "λυπημένος / λυπημένη"],
          ["aburrido / aburrida", "βαριεστημένος / βαριεστημένη"],
          ["enfadado / enfadada", "θυμωμένος / θυμωμένη"],
          ["preocupado / preocupada", "ανήσυχος / ανήσυχη"],
          ["nervioso / nerviosa", "αγχωμένος / αγχωμένη"],
          ["de buen / mal humor", "με καλή / κακή διάθεση"],
        ],
      },
    ],
    tipsEl: [
      "Η θέση προσώπων και πραγμάτων λέγεται πάντα με estar, ακόμη και για μόνιμες θέσεις: Atenas está en Grecia, La Acrópolis está en el centro.",
      "Προσοχή στους τόνους: estás, está, estáis, están έχουν τόνο, ενώ τα estoy και estamos όχι.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo ___ en casa.", hintEl: "Είμαι σπίτι.", answer: "estoy" },
      { type: "cloze", id: "d2", textEs: "Tú ___ muy cansado hoy.", hintEl: "Είσαι πολύ κουρασμένος σήμερα.", answer: "estás" },
      { type: "cloze", id: "d3", textEs: "Mi hermana ___ en el trabajo.", hintEl: "Η αδερφή μου είναι στη δουλειά.", answer: "está" },
      { type: "cloze", id: "d4", textEs: "Nosotros ___ en Atenas.", hintEl: "Είμαστε στην Αθήνα.", answer: "estamos" },
      { type: "cloze", id: "d5", textEs: "Vosotros ___ contentos.", hintEl: "Εσείς είστε χαρούμενοι.", answer: "estáis", explainEl: "Το estáis έχει τόνο στο a." },
      { type: "cloze", id: "d6", textEs: "Los niños ___ en el parque.", hintEl: "Τα παιδιά είναι στο πάρκο.", answer: "están" },
      { type: "choice", id: "d7", promptEs: "¿Dónde ___ el banco?", promptEl: "Πού είναι η τράπεζα;", options: ["está", "es", "hay", "están"], answer: "está" },
      { type: "choice", id: "d8", promptEs: "Hoy Ana no ___ de buen humor.", promptEl: "Σήμερα η Ana δεν έχει καλή διάθεση.", options: ["está", "es", "tiene", "hay"], answer: "está" },
      { type: "choice", id: "d9", promptEs: "¿___ Pedro? No, no está en casa.", promptEl: "Είναι ο Pedro; Όχι, δεν είναι σπίτι.", options: ["Está", "Es", "Hay", "Tiene"], answer: "Está" },
      { type: "choice", id: "d10", promptEs: "Elige la frase correcta.", promptEl: "Η Κρήτη είναι στην Ελλάδα.", options: ["Creta está en Grecia.", "Creta es en Grecia.", "Creta tiene en Grecia."], answer: "Creta está en Grecia.", explainEl: "Για τη θέση ενός τόπου χρησιμοποιούμε πάντα estar." },
      { type: "order", id: "d11", promptEl: "Η Teresa δεν είναι στο γραφείο.", solution: ["Teresa", "no", "está", "en", "la", "oficina."], distractors: ["es", "están"] },
      { type: "order", id: "d12", promptEl: "Πού είναι οι φίλοι σου;", solution: ["¿Dónde", "están", "tus", "amigos?"], distractors: ["está", "son"] },
    ],
    exercisesEl: [
      "Δες πού βρίσκονται τα πρόσωπα και συμπλήρωσε τις προτάσεις με estoy, estás, está...",
      "Συμπλήρωσε τις προτάσεις με τύπους του estar και τις λέξεις του πλαισίου.",
      "Περίγραψε κάθε εικόνα με τα está ή están και τις λέξεις του πλαισίου.",
      "Συμπλήρωσε τους διαλόγους με τύπους του estar, καταφατικά ή αρνητικά.",
      "Γράψε ερωτήσεις με τον ενεστώτα του estar και τις λέξεις που δίνονται στη σωστή σειρά.",
    ],
  },
  {
    id: "u43",
    number: 43,
    page: 96,
    titleEs: "Contraste entre ser y estar",
    titleEl: "Αντίθεση ανάμεσα στα ser και estar",
    introEl:
      "Στα ελληνικά λες «είμαι» και στις δύο περιπτώσεις. Στα ισπανικά διαλέγεις ser ή estar ανάλογα με το αν μιλάς για κάτι μόνιμο και συνηθισμένο ή για κάτι προσωρινό και ασυνήθιστο.",
    rules: [
      {
        textEl: "Το ser δείχνει τα συνηθισμένα ή μόνιμα χαρακτηριστικά και τις ιδιότητες κάποιου ή κάτι.",
        examples: [
          { es: "Mi abuelo es muy trabajador.", el: "Ο παππούς μου είναι πολύ εργατικός." },
          { es: "El mar es salado.", el: "Η θάλασσα είναι αλμυρή." },
        ],
      },
      {
        textEl: "Το estar δείχνει ασυνήθιστα ή προσωρινά χαρακτηριστικά και καταστάσεις, και την οικογενειακή κατάσταση (casado).",
        examples: [
          { es: "Hoy mi abuelo está muy cansado.", el: "Σήμερα ο παππούς μου είναι πολύ κουρασμένος." },
          { es: "La sopa está fría.", el: "Η σούπα είναι κρύα." },
          { es: "Mis tíos están casados.", el: "Οι θείοι μου είναι παντρεμένοι." },
        ],
      },
      {
        textEl:
          "Το estar δείχνει επίσης αλλαγή και τονίζει την εντύπωση της στιγμής: κάτι που βλέπεις τώρα και ίσως δεν είναι πάντα έτσι.",
        examples: [
          { es: "¡Qué elegante estás con ese abrigo!", el: "Τι κομψός είσαι με αυτό το παλτό!" },
          { es: "¡Qué alto estás, Pablo!", el: "Πόσο ψήλωσες, Pablo!" },
        ],
      },
      {
        textEl:
          "Μερικά επίθετα αλλάζουν νόημα ανάλογα με το αν ακολουθούν το ser ή το estar (δες τον πίνακα): malo, aburrido, bueno, listo, moreno, rico.",
        examples: [
          { es: "Mi primo es muy listo.", el: "Ο ξάδερφός μου είναι πολύ έξυπνος." },
          { es: "¿Estás listo para salir?", el: "Είσαι έτοιμος να βγούμε;" },
        ],
      },
      {
        textEl: "Με το ser λέμε πού και πότε γίνεται ένα γεγονός. Με το estar λέμε πού βρίσκεται κάποιος ή κάτι.",
        examples: [
          { es: "La clase es en el aula 4, a las nueve.", el: "Το μάθημα είναι στην αίθουσα 4, στις εννιά." },
          { es: "El aula 4 está en el primer piso.", el: "Η αίθουσα 4 είναι στον πρώτο όροφο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Επίθετα που αλλάζουν νόημα",
        headers: ["Adjetivo", "con ser", "con estar"],
        rows: [
          ["malo", "κακός (συμπεριφορά ή ποιότητα)", "άρρωστος"],
          ["aburrido", "βαρετός, ανιαρός", "βαριεστημένος"],
          ["bueno", "καλός (συμπεριφορά ή ποιότητα)", "νόστιμος, ή υγιής ξανά μετά από ασθένεια"],
          ["listo", "έξυπνος", "έτοιμος"],
          ["moreno", "μελαχρινός (σκούρα μαλλιά)", "μαυρισμένος"],
          ["rico", "πλούσιος", "νόστιμος"],
        ],
      },
    ],
    tipsEl: [
      "Ο ίδιος τύπος στα ελληνικά, δύο διαφορετικά νοήματα στα ισπανικά: Carlos es aburrido (είναι βαρετός) αλλά Carlos está aburrido (βαριέται).",
      "Η κούραση, η αρρώστια και η διάθεση λέγονται πάντα με estar: estoy cansado, no «soy cansado».",
      "Για φαγητό που δοκιμάζεις λέμε está rico ή está bueno (νόστιμο). Το es rico για πρόσωπο σημαίνει πλούσιος.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Este café ___ muy frío.", promptEl: "Αυτός ο καφές είναι πολύ κρύος.", options: ["es", "está", "son", "están"], answer: "está" },
      { type: "choice", id: "d2", promptEs: "Mis padres ___ muy generosos: ayudan a todos.", promptEl: "Οι γονείς μου είναι πολύ γενναιόδωροι: βοηθούν όλους.", options: ["son", "están", "es", "estás"], answer: "son" },
      { type: "cloze", id: "d3", textEs: "Hoy no ___ contento: tengo mucho trabajo.", hintEl: "Σήμερα δεν είμαι χαρούμενος: έχω πολλή δουλειά.", answer: "estoy" },
      { type: "cloze", id: "d4", textEs: "El océano ___ muy profundo.", hintEl: "Ο ωκεανός είναι πολύ βαθύς.", answer: "es" },
      { type: "cloze", id: "d5", textEs: "Estos zapatos ___ sucios. Voy a limpiarlos.", hintEl: "Αυτά τα παπούτσια είναι βρόμικα. Θα τα καθαρίσω.", answer: "están" },
      { type: "cloze", id: "d6", textEs: "¡Qué guapa ___ hoy, Marta!", hintEl: "Τι όμορφη είσαι σήμερα, Marta!", answer: "estás", explainEl: "Η εντύπωση της στιγμής (σήμερα) λέγεται με estar." },
      { type: "choice", id: "d7", promptEs: "¿Estás ___ para salir?", promptEl: "Είσαι έτοιμος να βγούμε;", options: ["listo", "rico", "aburrido", "malo"], answer: "listo", explainEl: "Estar listo = είμαι έτοιμος. Ser listo = είμαι έξυπνος." },
      { type: "choice", id: "d8", promptEs: "Mi hermano ___ aburrido: no tiene nada que hacer.", promptEl: "Ο αδερφός μου βαριέται: δεν έχει τι να κάνει.", options: ["está", "es", "están", "son"], answer: "está" },
      { type: "choice", id: "d9", promptEs: "Mi jefe ___ muy rico: tiene cinco hoteles.", promptEl: "Ο προϊστάμενός μου είναι πολύ πλούσιος: έχει πέντε ξενοδοχεία.", options: ["es", "está", "son", "están"], answer: "es" },
      { type: "cloze", id: "d10", textEs: "La reunión ___ en la sala 3, a las diez.", hintEl: "Η σύσκεψη είναι στην αίθουσα 3, στις δέκα.", answer: "es", explainEl: "Για τον τόπο και το χρόνο ενός γεγονότος χρησιμοποιούμε ser." },
      { type: "order", id: "d11", promptEl: "Η αίθουσα 3 είναι στον δεύτερο όροφο.", solution: ["La", "sala", "3", "está", "en", "el", "segundo", "piso."], distractors: ["es", "hay"] },
      { type: "order", id: "d12", promptEl: "Ο Carlos είναι πολύ βαρετός.", solution: ["Carlos", "es", "muy", "aburrido."], distractors: ["está", "aburrida"] },
    ],
    exercisesEl: [
      "Κύκλωσε τον σωστό τύπο (ser ή estar) σε κάθε πρόταση.",
      "Συμπλήρωσε τις προτάσεις με τύπους των ser ή estar.",
      "Συμπλήρωσε τις προτάσεις με τον ενεστώτα του ser ή του estar.",
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με τύπους των ser ή estar.",
    ],
  },
  {
    id: "u44",
    number: 44,
    page: 98,
    titleEs: "Presente de indicativo de tener",
    titleEl: "Ο ενεστώτας του ρήματος tener",
    introEl:
      "Το tener σημαίνει «έχω» και χρησιμεύει για κτήση, οικογένεια, περιγραφή, ηλικία και για αισθήσεις όπως πείνα, δίψα ή κρύο. Έχει ανώμαλο «εγώ» (tengo) και αλλάζει e → ie στα tienes, tiene, tienen.",
    rules: [
      {
        textEl: "Με το tener δηλώνουμε κτήση, και ζητάμε κάτι με ερώτηση.",
        examples: [
          { es: "Tengo un ordenador nuevo.", el: "Έχω καινούριο υπολογιστή." },
          { es: "¿Tienes un bolígrafo?", el: "Έχεις ένα στυλό;" },
        ],
      },
      {
        textEl: "Με το tener μιλάμε για την οικογένεια.",
        examples: [{ es: "Mi vecina tiene tres hijos.", el: "Η γειτόνισσά μου έχει τρία παιδιά." }],
      },
      {
        textEl: "Το tener χρησιμεύει για να περιγράψουμε πρόσωπα, πράγματα και τόπους.",
        examples: [
          { es: "Mi hermano tiene el pelo negro.", el: "Ο αδερφός μου έχει μαύρα μαλλιά." },
          { es: "Mi barrio tiene un parque grande.", el: "Η γειτονιά μου έχει ένα μεγάλο πάρκο." },
        ],
      },
      {
        textEl: "Την ηλικία και τα μεγέθη τα λέμε με tener: años, metros cuadrados, habitantes.",
        examples: [
          { es: "Mi abuela tiene ochenta años.", el: "Η γιαγιά μου είναι ογδόντα χρονών." },
          { es: "Mi piso tiene sesenta metros cuadrados.", el: "Το διαμέρισμά μου είναι εξήντα τετραγωνικά." },
        ],
      },
      {
        textEl:
          "Με το tener εκφράζουμε προσωρινές σωματικές και ψυχικές καταστάσεις: hambre, sed, frío, calor, miedo, sueño, fiebre, gripe, dolor de cabeza.",
        examples: [
          { es: "Tengo mucha sed.", el: "Διψάω πολύ." },
          { es: "Los niños tienen sueño.", el: "Τα παιδιά νυστάζουν." },
        ],
      },
      {
        textEl: "Στην άρνηση το no μπαίνει μπροστά από το ρήμα. Στην ερώτηση το υποκείμενο συνήθως μπαίνει μετά το ρήμα.",
        examples: [
          { es: "No tengo tiempo.", el: "Δεν έχω χρόνο." },
          { es: "¿Tienen ustedes coche?", el: "Έχετε αυτοκίνητο;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενεστώτας του tener",
        headers: ["Persona", "tener"],
        rows: [
          ["yo", "tengo"],
          ["tú", "tienes"],
          ["usted / él / ella", "tiene"],
          ["nosotros / nosotras", "tenemos"],
          ["vosotros / vosotras", "tenéis"],
          ["ustedes / ellos / ellas", "tienen"],
        ],
      },
      {
        titleEl: "Tener + ουσιαστικό",
        headers: ["Español", "Ελληνικά"],
        rows: [
          ["tener hambre", "πεινάω"],
          ["tener sed", "διψάω"],
          ["tener frío", "κρυώνω"],
          ["tener calor", "ζεσταίνομαι"],
          ["tener miedo", "φοβάμαι"],
          ["tener sueño", "νυστάζω"],
          ["tener fiebre", "έχω πυρετό"],
          ["tener gripe", "έχω γρίπη"],
          ["tener dolor de cabeza", "έχω πονοκέφαλο"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά η πείνα, η δίψα και το κρύο είναι ρήματα (πεινάω, διψάω, κρυώνω). Στα ισπανικά είναι tener + ουσιαστικό: tengo hambre, tengo sed, tengo frío.",
      "Με αυτά τα ουσιαστικά λέμε mucho / mucha, όχι muy: tengo mucha sed, tengo mucho frío.",
      "Η ηλικία λέγεται πάντα με tener: tengo veinte años, όχι «soy veinte años».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo ___ dos hermanos.", hintEl: "Έχω δύο αδέρφια.", answer: "tengo" },
      { type: "cloze", id: "d2", textEs: "Sofía, ¿___ un lápiz?", hintEl: "Sofía, έχεις ένα μολύβι;", answer: "tienes" },
      { type: "cloze", id: "d3", textEs: "Mi casa ___ un jardín muy grande.", hintEl: "Το σπίτι μου έχει έναν πολύ μεγάλο κήπο.", answer: "tiene" },
      { type: "cloze", id: "d4", textEs: "Nosotros no ___ coche.", hintEl: "Εμείς δεν έχουμε αυτοκίνητο.", answer: "tenemos" },
      { type: "cloze", id: "d5", textEs: "¿Vosotros ___ hambre?", hintEl: "Εσείς πεινάτε;", answer: "tenéis" },
      { type: "cloze", id: "d6", textEs: "Mis abuelos ___ ochenta años.", hintEl: "Οι παππούδες μου είναι ογδόντα χρονών.", answer: "tienen" },
      { type: "choice", id: "d7", promptEs: "Tengo mucha ___. Necesito agua.", promptEl: "Διψάω πολύ. Χρειάζομαι νερό.", options: ["sed", "hambre", "sueño", "frío"], answer: "sed" },
      { type: "choice", id: "d8", promptEs: "¿Cuántos años ___ tu hermana?", promptEl: "Πόσων χρονών είναι η αδερφή σου;", options: ["tiene", "tienes", "es", "tienen"], answer: "tiene", explainEl: "Η ηλικία λέγεται με tener, όχι με ser." },
      { type: "choice", id: "d9", promptEs: "Tengo ___ calor.", promptEl: "Ζεσταίνομαι πολύ.", options: ["mucho", "mucha", "muy"], answer: "mucho", explainEl: "Με το tener + calor λέμε mucho, όχι muy." },
      { type: "order", id: "d10", promptEl: "Ο αδερφός μου έχει μαύρα μαλλιά.", solution: ["Mi", "hermano", "tiene", "el", "pelo", "negro."], distractors: ["es", "tienen"] },
      { type: "order", id: "d11", promptEl: "Δεν έχουμε σκύλο.", solution: ["No", "tenemos", "perro."], distractors: ["somos", "tienen"] },
      { type: "order", id: "d12", promptEl: "Πόσων χρονών είναι η γιαγιά σου;", solution: ["¿Cuántos", "años", "tiene", "tu", "abuela?"], distractors: ["tienes", "es"] },
    ],
    exercisesEl: [
      "Διάβασε τις πληροφορίες για τα πρόσωπα και συμπλήρωσε τις προτάσεις με tengo, tienes... καταφατικά ή αρνητικά.",
      "Συμπλήρωσε τις ερωτήσεις και τις απαντήσεις με τύπους του tener, καταφατικά ή αρνητικά.",
      "Γράψε προτάσεις με τύπους του tener και τις λέξεις του πλαισίου.",
      "Γράψε προτάσεις και ερωτήσεις με τύπους του tener από τις λέξεις που δίνονται.",
      "Γράψε ερωτήσεις με τον ενεστώτα του tener και τις λέξεις που δίνονται στη σωστή σειρά.",
    ],
  },
  {
    id: "u45",
    number: 45,
    page: 100,
    titleEs: "Presente de indicativo de haber impersonal (hay)",
    titleEl: "Το hay: «υπάρχει» και «υπάρχουν»",
    introEl:
      "Το hay λέει ότι κάτι ή κάποιος υπάρχει κάπου. Έχει μία μορφή και για τον ενικό και για τον πληθυντικό, και δεν αλλάζει ποτέ ανάλογα με το πρόσωπο.",
    rules: [
      {
        textEl:
          "Το hay σημαίνει «υπάρχει» και «υπάρχουν». Είναι ο ίδιος τύπος για ενικό και πληθυντικό, και δηλώνει ή ρωτά για την ύπαρξη κάτι ή κάποιου σε έναν τόπο.",
        examples: [
          { es: "Hay un parque cerca de mi casa.", el: "Υπάρχει ένα πάρκο κοντά στο σπίτι μου." },
          { es: "Hay dos bancos en la plaza.", el: "Υπάρχουν δύο παγκάκια στην πλατεία." },
        ],
      },
      {
        textEl:
          "Με αριθμητά ουσιαστικά: hay + un / una (ενικός) ή hay + unos / unas, αριθμός, muchos / muchas, pocos / pocas (πληθυντικός). Άρνηση: no hay + ningún / ninguna + ενικός, ή no hay (muchos / muchas) + πληθυντικός. Ερώτηση ποσότητας: ¿Cuántos / cuántas + πληθυντικός + hay?.",
        examples: [
          { es: "No hay ningún hotel en esta calle.", el: "Δεν υπάρχει κανένα ξενοδοχείο σε αυτόν τον δρόμο." },
          { es: "¿Cuántas habitaciones hay en tu casa?", el: "Πόσα δωμάτια υπάρχουν στο σπίτι σου;" },
        ],
      },
      {
        textEl:
          "Με μη αριθμητά ουσιαστικά (pan, agua, leche): (no) hay + (mucho / mucha, poco / poca) + ουσιαστικό. Ερώτηση: ¿Cuánto / cuánta + ουσιαστικό + hay?.",
        examples: [
          { es: "Hay agua en la jarra.", el: "Υπάρχει νερό στην κανάτα." },
          { es: "¿Cuánta leche hay en la nevera?", el: "Πόσο γάλα υπάρχει στο ψυγείο;" },
        ],
      },
      {
        textEl:
          "Όταν το ουσιαστικό έχει ήδη αναφερθεί, το αντικαθιστούμε με uno / una (ή ninguno / ninguna στην άρνηση).",
        examples: [
          { es: "¿Hay un banco por aquí? Sí, hay uno en la esquina.", el: "Υπάρχει τράπεζα εδώ κοντά; Ναι, υπάρχει μία στη γωνία." },
          { es: "¿Hay bares en esta calle? No, no hay ninguno.", el: "Υπάρχουν μπαρ σε αυτόν τον δρόμο; Όχι, δεν υπάρχει κανένα." },
        ],
      },
      {
        textEl:
          "Με το ¿dónde hay...? ρωτάμε πού βρίσκεται κάτι, όταν δεν ξέρουμε αν υπάρχει.",
        examples: [{ es: "¿Dónde hay un cajero automático?", el: "Πού υπάρχει ένα ΑΤΜ;" }],
      },
    ],
    tables: [
      {
        titleEl: "Η δομή του hay",
        headers: ["Tipo de nombre", "Afirmativa", "Negativa", "Pregunta"],
        rows: [
          ["Contable singular", "Hay un / una + nombre", "No hay ningún / ninguna + nombre", "¿Hay un / una + nombre?"],
          ["Contable plural", "Hay (unos / unas, dos, muchos...) + nombre", "No hay (muchos / muchas) + nombre", "¿Cuántos / cuántas + nombre + hay?"],
          ["No contable", "Hay (mucho / poco) + nombre", "No hay (mucho / mucha) + nombre", "¿Cuánto / cuánta + nombre + hay?"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λες συχνά «έχει» για ύπαρξη (έχει ένα πάρκο εδώ κοντά). Στα ισπανικά για ύπαρξη χρησιμοποιείς hay, όχι tiene: Hay un parque cerca.",
      "Το hay δεν αλλάζει ποτέ: hay un libro, hay tres libros. Δεν υπάρχει «hayn».",
      "Μην μπερδεύεις το hay (υπάρχει) με το ahí (εκεί) ή το ¡ay! (αχ). Ακούγονται παρόμοια, αλλά γράφονται και χρησιμοποιούνται διαφορετικά.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "En mi barrio ___ una farmacia.", hintEl: "Στη γειτονιά μου υπάρχει ένα φαρμακείο.", answer: "hay" },
      { type: "cloze", id: "d2", textEs: "Perdone, ¿___ un banco por aquí?", hintEl: "Συγγνώμη, υπάρχει τράπεζα εδώ κοντά;", answer: "hay" },
      { type: "cloze", id: "d3", textEs: "No hay ___ cine en mi pueblo.", hintEl: "Δεν υπάρχει κανένας κινηματογράφος στο χωριό μου.", answer: "ningún", explainEl: "Πριν από αρσενικό ενικού το ninguno χάνει το -o: ningún cine." },
      { type: "cloze", id: "d4", textEs: "¿Cuántas sillas ___ en la clase?", hintEl: "Πόσες καρέκλες υπάρχουν στην τάξη;", answer: "hay" },
      { type: "cloze", id: "d5", textEs: "No hay ___ leche en la nevera.", hintEl: "Δεν υπάρχει πολύ γάλα στο ψυγείο.", answer: "mucha" },
      { type: "choice", id: "d6", promptEs: "¿Hay bares en esta calle? No, no hay ___.", promptEl: "Υπάρχουν μπαρ σε αυτόν τον δρόμο; Όχι, δεν υπάρχει κανένα.", options: ["ninguno", "ningún", "nada", "nadie"], answer: "ninguno" },
      { type: "choice", id: "d7", promptEs: "¿Cuánta agua ___ en la botella?", promptEl: "Πόσο νερό υπάρχει στο μπουκάλι;", options: ["hay", "está", "es", "tiene"], answer: "hay" },
      { type: "choice", id: "d8", promptEs: "En la clase ___ veinte estudiantes.", promptEl: "Στην τάξη υπάρχουν είκοσι μαθητές.", options: ["hay", "están", "son", "tienen"], answer: "hay" },
      { type: "choice", id: "d9", promptEs: "Elige la frase correcta.", promptEl: "Υπάρχει πολύς κόσμος στην πλατεία.", options: ["Hay mucha gente en la plaza.", "Hay muchos gente en la plaza.", "Hay mucha gentes en la plaza."], answer: "Hay mucha gente en la plaza.", explainEl: "Η λέξη gente είναι θηλυκό ενικού: mucha gente." },
      { type: "choice", id: "d10", promptEs: "¿___ euros hay en la caja?", promptEl: "Πόσα ευρώ υπάρχουν στο ταμείο;", options: ["Cuántos", "Cuánto", "Cuántas", "Cuánta"], answer: "Cuántos" },
      { type: "order", id: "d11", promptEl: "Στην πόλη μου δεν υπάρχει μετρό.", solution: ["En", "mi", "ciudad", "no", "hay", "metro."], distractors: ["está", "tiene"], alternatives: [["No", "hay", "metro", "en", "mi", "ciudad."]] },
      { type: "order", id: "d12", promptEl: "Υπάρχει σούπερ μάρκετ εδώ κοντά;", solution: ["¿Hay", "un", "supermercado", "por", "aquí?"], distractors: ["está", "el"] },
    ],
    exercisesEl: [
      "Δες την εικόνα του δωματίου και γράψε προτάσεις με hay, καταφατικά ή αρνητικά.",
      "Διάβασε τις πληροφορίες για την Ciudad Nueva και γράψε προτάσεις με hay, καταφατικά ή αρνητικά.",
      "Δες την εικόνα του ψυγείου και γράψε προτάσεις με hay, καταφατικά ή αρνητικά.",
      "Γράψε προτάσεις και ερωτήσεις με hay, καταφατικά ή αρνητικά, με βάση τις λέξεις στις παρενθέσεις.",
    ],
  },
  {
    id: "u46",
    number: 46,
    page: 102,
    titleEs: "Contraste entre haber y estar (hay / estar)",
    titleEl: "Αντίθεση ανάμεσα στα hay και estar",
    introEl:
      "Και τα δύο μεταφράζονται «είναι / υπάρχει» στα ελληνικά, αλλά στα ισπανικά το hay παρουσιάζει κάτι νέο ή άγνωστο, ενώ το estar λέει πού βρίσκεται κάτι που ήδη ξέρουμε.",
    rules: [
      {
        textEl:
          "Το hay μιλά για την ύπαρξη κάποιου ή κάτι άγνωστου, αόριστου ή αναφερόμενου για πρώτη φορά (νέα πληροφορία).",
        examples: [
          { es: "Hay un chico en la puerta.", el: "Υπάρχει ένα αγόρι στην πόρτα." },
          { es: "En esta ciudad hay muchos museos.", el: "Σε αυτή την πόλη υπάρχουν πολλά μουσεία." },
        ],
      },
      {
        textEl:
          "Το estar λέει πού βρίσκεται κάτι μοναδικό, συγκεκριμένο ή ήδη γνωστό ή αναφερθέν (γνωστή πληροφορία).",
        examples: [
          { es: "El museo de la ciudad está en la plaza.", el: "Το μουσείο της πόλης είναι στην πλατεία." },
          { es: "Mis llaves están en el cajón.", el: "Τα κλειδιά μου είναι στο συρτάρι." },
        ],
      },
      {
        textEl:
          "Με το hay δεν χρησιμοποιούμε οριστικό άρθρο (el, la, los, las) ούτε κτητική αντωνυμία (mi, tu, su...). Αν το ουσιαστικό έχει άρθρο ή κτητική, χρειάζεσαι estar.",
        examples: [
          { es: "Hay un parque cerca. / El parque está cerca.", el: "Υπάρχει ένα πάρκο κοντά. / Το πάρκο είναι κοντά." },
          { es: "Mi coche está en el garaje.", el: "Το αυτοκίνητό μου είναι στο γκαράζ." },
        ],
      },
      {
        textEl:
          "Στις ερωτήσεις: ¿Dónde hay un / una...? όταν δεν ξέρουμε αν υπάρχει. ¿Dónde está el / la / mi...? όταν ξέρουμε ότι υπάρχει και ψάχνουμε τη θέση του.",
        examples: [
          { es: "¿Dónde hay una farmacia?", el: "Πού υπάρχει ένα φαρμακείο;" },
          { es: "¿Dónde está la farmacia de tu tía?", el: "Πού είναι το φαρμακείο της θείας σου;" },
        ],
      },
      {
        textEl: "Το hay μένει ίδιο για ενικό και πληθυντικό. Το estar συμφωνεί με το υποκείμενο: está (ενικός), están (πληθυντικός).",
        examples: [
          { es: "Hay tres bares en el pueblo.", el: "Υπάρχουν τρία μπαρ στο χωριό." },
          { es: "Los bares están en el centro.", el: "Τα μπαρ είναι στο κέντρο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Hay και estar",
        headers: ["", "hay", "estar"],
        rows: [
          ["Información", "νέα, άγνωστη", "γνωστή, ήδη αναφερθείσα"],
          ["Con qué palabras", "un, una, unos, dos, muchos... (no el, la, mi, tu)", "el, la, los, las, mi, tu, nombre propio"],
          ["Número", "siempre hay", "está / están"],
          ["Pregunta", "¿Dónde hay un banco?", "¿Dónde está el banco?"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λες «είναι» και για τα δύο («Είναι ένα καφέ στη γωνία» / «Πού είναι το καφέ;»). Στα ισπανικά δοκίμασε: αν μπορείς να βάλεις οριστικό άρθρο (το καφέ, ο σταθμός) χρησιμοποίησε estar. Αν όχι, hay.",
      "Δεν λέμε ποτέ «hay mis amigos» ή «hay el parque». Λέμε: Mis amigos están..., El parque está....",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "___ una farmacia en esta calle.", promptEl: "Υπάρχει ένα φαρμακείο σε αυτόν τον δρόμο.", options: ["Hay", "Está", "Están", "Es"], answer: "Hay" },
      { type: "choice", id: "d2", promptEs: "La farmacia de mi barrio ___ al lado del banco.", promptEl: "Το φαρμακείο της γειτονιάς μου είναι δίπλα στην τράπεζα.", options: ["está", "hay", "es", "están"], answer: "está" },
      { type: "choice", id: "d3", promptEs: "¿Dónde ___ una parada de metro?", promptEl: "Πού υπάρχει μια στάση του μετρό;", options: ["hay", "está", "están", "es"], answer: "hay" },
      { type: "choice", id: "d4", promptEs: "¿Dónde ___ la parada de metro?", promptEl: "Πού είναι η στάση του μετρό (αυτή που ξέρουμε);", options: ["está", "hay", "están", "tiene"], answer: "está" },
      { type: "cloze", id: "d5", textEs: "En mi ciudad ___ dos museos.", hintEl: "Στην πόλη μου υπάρχουν δύο μουσεία.", answer: "hay" },
      { type: "cloze", id: "d6", textEs: "Los museos ___ en el centro.", hintEl: "Τα μουσεία είναι στο κέντρο.", answer: "están" },
      { type: "cloze", id: "d7", textEs: "Perdone, ¿___ un banco por aquí?", hintEl: "Συγγνώμη, υπάρχει τράπεζα εδώ κοντά;", answer: "hay" },
      { type: "cloze", id: "d8", textEs: "Mi móvil ___ en la mesa.", hintEl: "Το κινητό μου είναι στο τραπέζι.", answer: "está" },
      { type: "cloze", id: "d9", textEs: "¿Dónde ___ mis llaves?", hintEl: "Πού είναι τα κλειδιά μου;", answer: "están", explainEl: "Με κτητική (mis) και πληθυντικό χρησιμοποιούμε están." },
      { type: "choice", id: "d10", promptEs: "Elige la frase correcta.", promptEl: "Υπάρχει ένα πάρκο κοντά στο σπίτι μου.", options: ["Hay un parque cerca de mi casa.", "Hay el parque cerca de mi casa.", "Hay mi parque cerca de mi casa."], answer: "Hay un parque cerca de mi casa.", explainEl: "Με hay δεν χρησιμοποιούμε el, la, mi, tu..." },
      { type: "order", id: "d11", promptEl: "Η τράπεζα είναι στην πλατεία.", solution: ["El", "banco", "está", "en", "la", "plaza."], distractors: ["hay", "están"] },
      { type: "order", id: "d12", promptEl: "Στη γειτονιά μου υπάρχουν πολλά καφέ.", solution: ["En", "mi", "barrio", "hay", "muchos", "cafés."], distractors: ["están", "muchas"] },
    ],
    exercisesEl: [
      "Κύκλωσε τον σωστό τύπο (hay ή está / están) σε κάθε πρόταση.",
      "Διάλεξε τις σωστές μορφές και γράψε ερωτήσεις με dónde και hay, está ή están.",
      "Συμπλήρωσε τις προτάσεις με hay, está ή están.",
    ],
  },
  {
    id: "u47",
    number: 47,
    page: 104,
    titleEs: "Presente de indicativo: verbos acabados en -ar",
    titleEl: "Ενεστώτας: ρήματα σε -ar",
    introEl:
      "Τα περισσότερα ισπανικά ρήματα τελειώνουν σε -ar (trabajar, hablar, estudiar). Αν μάθεις έναν τύπο, ξέρεις όλα τα κανονικά. Μαθαίνεις επίσης για τι χρησιμεύει ο ενεστώτας.",
    rules: [
      {
        textEl:
          "Στα κανονικά ρήματα σε -ar κρατάμε τη ρίζα (χωρίς το -ar) και προσθέτουμε τις καταλήξεις: -o, -as, -a, -a, -amos, -áis, -an, -an.",
        examples: [
          { es: "Hablo con mis vecinos.", el: "Μιλάω με τους γείτονές μου." },
          { es: "Tu hermano canta muy bien.", el: "Ο αδερφός σου τραγουδάει πολύ καλά." },
        ],
      },
      {
        textEl: "Το dar είναι ανώμαλο μόνο στο «εγώ»: doy. Τα υπόλοιπα πρόσωπα είναι κανονικά: das, da, damos, dais, dan.",
        examples: [{ es: "Doy clases de inglés en un instituto.", el: "Κάνω μαθήματα αγγλικών σε ένα λύκειο." }],
      },
      {
        textEl: "Ο ενεστώτας χρησιμεύει για να δώσουμε ή να ζητήσουμε πληροφορίες για το παρόν.",
        examples: [
          { es: "Mi madre trabaja en un hospital.", el: "Η μητέρα μου δουλεύει σε ένα νοσοκομείο." },
          { es: "¿Dónde estudias tú?", el: "Πού σπουδάζεις;" },
        ],
      },
      {
        textEl:
          "Με τον ενεστώτα μιλάμε για συνήθειες: τι κάνουμε κάθε μέρα, μια φορά την εβδομάδα, πάντα, μερικές φορές, ποτέ.",
        examples: [{ es: "Los sábados paseamos por el centro.", el: "Τα Σάββατα περπατάμε στο κέντρο." }],
      },
      {
        textEl: "Ο ενεστώτας δηλώνει και γενικές αλήθειες. Μπορεί ακόμη να περιγράφει κάτι που συμβαίνει τη στιγμή που μιλάμε.",
        examples: [
          { es: "La Luna gira alrededor de la Tierra.", el: "Η Σελήνη γυρίζει γύρω από τη Γη." },
          { es: "Mira, Pedro lleva un sombrero muy raro.", el: "Κοίτα, ο Pedro φοράει ένα πολύ παράξενο καπέλο." },
        ],
      },
      {
        textEl: "Στην άρνηση το no μπαίνει μπροστά από το ρήμα. Στην ερώτηση το υποκείμενο συνήθως μπαίνει μετά το ρήμα.",
        examples: [
          { es: "No trabajo los domingos.", el: "Δεν δουλεύω τις Κυριακές." },
          { es: "¿Dónde trabaja Héctor?", el: "Πού δουλεύει ο Héctor;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενεστώτας: trabajar (κανονικό) και dar",
        headers: ["Persona", "trabajar", "dar"],
        rows: [
          ["yo", "trabajo", "doy"],
          ["tú", "trabajas", "das"],
          ["usted / él / ella", "trabaja", "da"],
          ["nosotros / nosotras", "trabajamos", "damos"],
          ["vosotros / vosotras", "trabajáis", "dais"],
          ["ustedes / ellos / ellas", "trabajan", "dan"],
        ],
      },
      {
        titleEl: "Συχνά ρήματα σε -ar",
        headers: ["Español", "Ελληνικά"],
        rows: [
          ["hablar", "μιλάω"],
          ["estudiar", "σπουδάζω, μελετάω"],
          ["cantar", "τραγουδάω"],
          ["llevar", "φοράω, κουβαλάω"],
          ["llamar", "καλώ, τηλεφωνώ"],
          ["pasar", "περνάω"],
          ["cenar", "τρώω το βραδινό"],
          ["escuchar", "ακούω"],
          ["viajar", "ταξιδεύω"],
          ["llegar", "φτάνω"],
        ],
      },
    ],
    tipsEl: [
      "Ο γραπτός τόνος υπάρχει μόνο στο vosotros: trabajáis, habláis. Τα άλλα πρόσωπα δεν έχουν τόνο στη γραφή: trabajo, trabajas, trabajamos.",
      "Το dar clases σημαίνει «κάνω μάθημα, διδάσκω» (doy clases de griego). Για «παίρνω μάθημα» λέμε recibir clases ή tener clase.",
      "Ο ισπανικός ενεστώτας καλύπτει συνήθειες και γενικές αλήθειες (σαν τον ελληνικό ενεστώτα), οπότε τα ελληνικά «δουλεύω» και «διαβάζω» αντιστοιχούν συχνά σε απλό ενεστώτα.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Yo ___ (trabajar) en una oficina.", hintEl: "Δουλεύω σε ένα γραφείο.", answer: "trabajo" },
      { type: "cloze", id: "d2", textEs: "Tú ___ (hablar) muy bien español.", hintEl: "Μιλάς πολύ καλά ισπανικά.", answer: "hablas" },
      { type: "cloze", id: "d3", textEs: "Mi madre ___ (cenar) muy temprano.", hintEl: "Η μητέρα μου τρώει το βραδινό πολύ νωρίς.", answer: "cena" },
      { type: "choice", id: "d4", promptEs: "Nosotros ___ por la tarde. (estudiar)", promptEl: "Εμείς σπουδάζουμε το απόγευμα.", options: ["estudiamos", "estudian", "estudio", "estudiáis"], answer: "estudiamos" },
      { type: "cloze", id: "d5", textEs: "Vosotros ___ (llegar) siempre tarde.", hintEl: "Εσείς φτάνετε πάντα αργά.", answer: "llegáis", explainEl: "Το vosotros έχει τόνο: llegáis." },
      { type: "choice", id: "d6", promptEs: "Mis vecinos ___ música a todas horas. (escuchar)", promptEl: "Οι γείτονές μου ακούνε μουσική όλες τις ώρες.", options: ["escuchan", "escucha", "escuchamos", "escuchas"], answer: "escuchan" },
      { type: "cloze", id: "d7", textEs: "Yo ___ (dar) clases de música.", hintEl: "Κάνω μαθήματα μουσικής.", answer: "doy", explainEl: "Το dar είναι ανώμαλο στο «εγώ»: doy (όχι «do»)." },
      { type: "cloze", id: "d8", textEs: "Mis padres no ___ (fumar) en casa.", hintEl: "Οι γονείς μου δεν καπνίζουν στο σπίτι.", answer: "fuman" },
      { type: "choice", id: "d9", promptEs: "¿Dónde ___ tú los veranos? (pasar)", promptEl: "Πού περνάς εσύ τα καλοκαίρια;", options: ["pasas", "pasa", "pasáis", "pasan"], answer: "pasas" },
      { type: "choice", id: "d10", promptEs: "Nosotros ___ español en clase. (hablar)", promptEl: "Εμείς μιλάμε ισπανικά στην τάξη.", options: ["hablamos", "hablan", "hablo", "habláis"], answer: "hablamos" },
      { type: "order", id: "d11", promptEl: "Η Marta δουλεύει σε ένα νοσοκομείο.", solution: ["Marta", "trabaja", "en", "un", "hospital."], distractors: ["trabajo", "trabajan"] },
      { type: "order", id: "d12", promptEl: "Τι ακούς στο αυτοκίνητο;", solution: ["¿Qué", "escuchas", "en", "el", "coche?"], distractors: ["escucho", "escucha"] },
    ],
    exercisesEl: [
      "Διάβασε τις πληροφορίες για τα πρόσωπα και συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου, καταφατικά ή αρνητικά.",
      "Συμπλήρωσε τις προτάσεις με τον σωστό τύπο των ρημάτων στις παρενθέσεις, καταφατικά ή αρνητικά.",
      "Συμπλήρωσε τις ερωτήσεις και τις απαντήσεις με τα ρήματα στις παρενθέσεις.",
      "Συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου, καταφατικά ή αρνητικά.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις ερωτήσεις.",
    ],
  },
  {
    id: "u48",
    number: 48,
    page: 106,
    titleEs: "Presente de indicativo: verbos acabados en -er",
    titleEl: "Ενεστώτας: ρήματα σε -er",
    introEl:
      "Τα ρήματα σε -er (comer, beber, leer) έχουν τις δικές τους καταλήξεις. Πολλά συχνά ρήματα σε -er (hacer, saber, ver, poner) είναι ανώμαλα μόνο στο «εγώ».",
    rules: [
      {
        textEl:
          "Στα κανονικά ρήματα σε -er κρατάμε τη ρίζα και προσθέτουμε: -o, -es, -e, -e, -emos, -éis, -en, -en.",
        examples: [
          { es: "Mi hermano come mucha fruta.", el: "Ο αδερφός μου τρώει πολλά φρούτα." },
          { es: "Bebemos agua en las comidas.", el: "Πίνουμε νερό στα γεύματα." },
        ],
      },
      {
        textEl:
          "Το «εγώ» είναι ανώμαλο σε αυτά τα ρήματα: coger → cojo, hacer → hago, poner → pongo, traer → traigo, conocer → conozco, parecer → parezco, saber → sé, ver → veo. Τα άλλα πρόσωπα είναι κανονικά.",
        examples: [
          { es: "Hago deporte todos los días.", el: "Κάνω αθλητισμό κάθε μέρα." },
          { es: "No sé conducir.", el: "Δεν ξέρω να οδηγώ." },
          { es: "Parezco cansado hoy.", el: "Φαίνομαι κουρασμένος σήμερα." },
        ],
      },
      {
        textEl:
          "Το saber + απαρέμφατο λέει ότι ξέρεις να κάνεις κάτι, ή ξέρεις μια πληροφορία. Το conocer χρησιμοποιείται για πρόσωπα και μέρη.",
        examples: [
          { es: "Sé nadar muy bien.", el: "Ξέρω να κολυμπάω πολύ καλά." },
          { es: "Conozco Roma y conozco a tu hermano.", el: "Ξέρω τη Ρώμη και γνωρίζω τον αδερφό σου." },
        ],
      },
      {
        textEl:
          "Με το conocer και το ver, όταν το συμπλήρωμα είναι πρόσωπο, μπαίνει a πριν από αυτό.",
        examples: [{ es: "¿Conoces a Lucía? Veo a Pablo en el bar.", el: "Γνωρίζεις τη Lucía; Βλέπω τον Pablo στο μπαρ." }],
      },
      {
        textEl:
          "Οι χρήσεις είναι οι ίδιες με του ενεστώτα των ρημάτων σε -ar: παρόν, συνήθειες, γενικές αλήθειες και κάτι που συμβαίνει τώρα. Άρνηση: no πριν από το ρήμα. Ερώτηση: υποκείμενο μετά το ρήμα.",
        examples: [
          { es: "Los caballos beben mucha agua.", el: "Τα άλογα πίνουν πολύ νερό." },
          { es: "¿Qué lee Antonio los domingos?", el: "Τι διαβάζει ο Antonio τις Κυριακές;" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ενεστώτας: comer (κανονικό) και ανώμαλα στο «yo»",
        headers: ["Persona", "comer", "hacer", "saber", "ver", "conocer"],
        rows: [
          ["yo", "como", "hago", "sé", "veo", "conozco"],
          ["tú", "comes", "haces", "sabes", "ves", "conoces"],
          ["usted / él / ella", "come", "hace", "sabe", "ve", "conoce"],
          ["nosotros / nosotras", "comemos", "hacemos", "sabemos", "vemos", "conocemos"],
          ["vosotros / vosotras", "coméis", "hacéis", "sabéis", "veis", "conocéis"],
          ["ustedes / ellos / ellas", "comen", "hacen", "saben", "ven", "conocen"],
        ],
      },
      {
        titleEl: "Ανώμαλο μόνο το «yo»",
        headers: ["Infinitivo", "yo"],
        rows: [
          ["coger", "cojo"],
          ["hacer", "hago"],
          ["poner", "pongo"],
          ["traer", "traigo"],
          ["conocer", "conozco"],
          ["parecer", "parezco"],
          ["saber", "sé"],
          ["ver", "veo"],
        ],
      },
    ],
    tipsEl: [
      "Το ελληνικό «ξέρω» αντιστοιχεί σε δύο ρήματα. Saber: γεγονότα και ικανότητες (sé la respuesta, sé nadar). Conocer: πρόσωπα και μέρη (conozco a Elena, conozco Roma).",
      "Στη Λατινική Αμερική (Αργεντινή, Μεξικό κ.ά.) το coger έχει χυδαία σημασία. Εκεί χρησιμοποίησε tomar ή agarrar.",
      "Μάθε το «yo» των ανώμαλων ως ξεχωριστή λέξη: hago, pongo, traigo, sé, veo. Τα άλλα πρόσωπα (haces, pones, traes) είναι κανονικά.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi hermano ___ (comer) mucho.", hintEl: "Ο αδερφός μου τρώει πολύ.", answer: "come" },
      { type: "cloze", id: "d2", textEs: "Yo ___ (beber) mucha agua.", hintEl: "Εγώ πίνω πολύ νερό.", answer: "bebo" },
      { type: "cloze", id: "d3", textEs: "Nosotros ___ (leer) el periódico por la mañana.", hintEl: "Εμείς διαβάζουμε την εφημερίδα το πρωί.", answer: "leemos" },
      { type: "cloze", id: "d4", textEs: "Yo ___ (hacer) deporte todos los días.", hintEl: "Κάνω αθλητισμό κάθε μέρα.", answer: "hago" },
      { type: "cloze", id: "d5", textEs: "Yo no ___ (saber) tocar el piano.", hintEl: "Δεν ξέρω να παίζω πιάνο.", answer: "sé", explainEl: "Το «εγώ» του saber είναι sé, με τόνο (για να μην μπερδεύεται με το se)." },
      { type: "cloze", id: "d6", textEs: "Yo ___ (conocer) a tu hermano.", hintEl: "Γνωρίζω τον αδερφό σου.", answer: "conozco", explainEl: "Το «εγώ» του conocer είναι conozco, με -zc-." },
      { type: "cloze", id: "d7", textEs: "Mis amigos ___ (correr) cada mañana.", hintEl: "Οι φίλοι μου τρέχουν κάθε πρωί.", answer: "corren" },
      { type: "choice", id: "d8", promptEs: "¿___ tú a Lucía?", promptEl: "Γνωρίζεις εσύ τη Lucía;", options: ["Conoces", "Conozco", "Sabes", "Sabéis"], answer: "Conoces", explainEl: "Για πρόσωπα χρησιμοποιούμε conocer (και a πριν από το πρόσωπο)." },
      { type: "choice", id: "d9", promptEs: "Yo no ___ conducir.", promptEl: "Δεν ξέρω να οδηγώ.", options: ["sé", "conozco", "sabo", "sabe"], answer: "sé" },
      { type: "choice", id: "d10", promptEs: "Yo ___ la mesa antes de comer. (poner)", promptEl: "Εγώ στρώνω το τραπέζι πριν φάμε.", options: ["pongo", "pono", "ponzo", "pones"], answer: "pongo" },
      { type: "order", id: "d11", promptEl: "Ο θείος μου δεν πίνει καφέ.", solution: ["Mi", "tío", "no", "bebe", "café."], distractors: ["beben", "bebo"] },
      { type: "order", id: "d12", promptEl: "Πού βάζεις τα κλειδιά σου;", solution: ["¿Dónde", "pones", "tus", "llaves?"], distractors: ["pongo", "pone"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τον σωστό τύπο των ρημάτων στις παρενθέσεις, καταφατικά ή αρνητικά.",
      "Συμπλήρωσε τις ερωτήσεις και τις απαντήσεις με τα ρήματα στις παρενθέσεις.",
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου, καταφατικά ή αρνητικά.",
      "Συμπλήρωσε τις προτάσεις με τα ρήματα του πλαισίου, καταφατικά ή αρνητικά.",
    ],
  },
];
