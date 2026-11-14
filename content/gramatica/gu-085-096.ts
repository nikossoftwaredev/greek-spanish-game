import type { GuUnit } from "@/types/content";

export const guUnits085To096: GuUnit[] = [
  {
    id: "u85",
    number: 85,
    page: 180,
    titleEs: "Adverbios de tiempo (1)",
    titleEl: "Επιρρήματα χρόνου (1)",
    introEl:
      "Τα επιρρήματα χρόνου απαντούν στην ερώτηση «¿cuándo?» (πότε;). Εδώ μαθαίνεις τα ayer, hoy, mañana, τη διαφορά ανάμεσα σε entonces, luego και después, καθώς και ανάμεσα σε pronto, temprano και tarde.",
    rules: [
      {
        textEl: "Τα anteayer, ayer, anoche, hoy, ahora, mañana και pasado mañana λένε πότε γίνεται κάτι. Το anoche σημαίνει «χθες το βράδυ».",
        examples: [
          { es: "Anoche cené con mis primos.", el: "Χθες το βράδυ έφαγα με τα ξαδέρφια μου." },
          { es: "Pasado mañana tengo cita con el dentista.", el: "Μεθαύριο έχω ραντεβού με τον οδοντίατρο." },
        ],
      },
      {
        textEl:
          "Το entonces σημαίνει «εκείνη τη στιγμή» και παραπέμπει στη στιγμή για την οποία μιλάμε. Τα luego και después δείχνουν κάτι που γίνεται αργότερα.",
        examples: [
          { es: "Abrí la puerta y entonces vi la carta.", el: "Άνοιξα την πόρτα και τότε είδα το γράμμα." },
          { es: "Ahora estudio. Luego cenamos.", el: "Τώρα διαβάζω. Μετά θα φάμε." },
        ],
      },
      {
        textEl: "Το pronto σημαίνει «σε λίγο» ή «νωρίτερα απ' ό,τι πρέπει».",
        examples: [
          { es: "Te llamo pronto.", el: "Θα σε πάρω σύντομα τηλέφωνο." },
          { es: "Es pronto: la tienda abre a las diez.", el: "Είναι νωρίς: το κατάστημα ανοίγει στις δέκα." },
        ],
      },
      {
        textEl:
          "Το temprano σημαίνει «στις πρώτες ώρες της ημέρας ή της νύχτας» ή «πριν από την κανονική ώρα». Το tarde είναι το αντίθετο: στις τελευταίες ώρες ή μετά την κανονική ώρα.",
        examples: [
          { es: "Mi hermano se levanta temprano, a las cinco.", el: "Ο αδερφός μου ξυπνάει νωρίς, στις πέντε." },
          { es: "Cenamos tarde, a las once.", el: "Τρώμε το βραδινό αργά, στις έντεκα." },
          { es: "Has llegado tarde: el autobús ya se ha ido.", el: "Έφτασες αργά: το λεωφορείο έχει ήδη φύγει." },
        ],
      },
      {
        textEl: "Τα επιρρήματα αυτά μπαίνουν στην αρχή ή στο τέλος της πρότασης, ή μέσα, μετά το ρήμα.",
        examples: [
          { es: "Ayer estuve en casa de Ana.", el: "Χθες ήμουν στο σπίτι της Ana." },
          { es: "Estuve ayer en casa de Ana.", el: "Ήμουν χθες στο σπίτι της Ana." },
          { es: "Estuve en casa de Ana ayer.", el: "Ήμουν στο σπίτι της Ana χθες." },
        ],
      },
      {
        textEl: "Όταν ένα τέτοιο επίρρημα ανοίγει την πρόταση, το υποκείμενο συχνά μπαίνει μετά το ρήμα.",
        examples: [
          { es: "Hoy llega mi hermana.", el: "Σήμερα φτάνει η αδερφή μου." },
          { es: "Mañana empieza el curso.", el: "Αύριο αρχίζει το μάθημα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Πότε;",
        headers: ["Español", "Ελληνικά"],
        rows: [
          ["anteayer", "προχθές"],
          ["ayer", "χθες"],
          ["anoche", "χθες το βράδυ"],
          ["hoy", "σήμερα"],
          ["ahora", "τώρα"],
          ["mañana", "αύριο"],
          ["pasado mañana", "μεθαύριο"],
        ],
      },
      {
        titleEl: "pronto, temprano, tarde",
        headers: ["Adverbio", "Σημασία", "Ejemplo"],
        rows: [
          ["pronto", "σε λίγο / νωρίτερα από το κανονικό", "Te llamo pronto."],
          ["temprano", "νωρίς (πρωί ή βράδυ) / πριν από την κανονική ώρα", "Hoy me acuesto temprano."],
          ["tarde", "αργά / μετά την κανονική ώρα", "Siempre llego tarde."],
        ],
      },
    ],
    tipsEl: [
      "Τα luego και después σημαίνουν και τα δύο «μετά». Το entonces όμως είναι «τότε, εκείνη τη στιγμή»: «Abrí y entonces lo vi» σημαίνει ότι τον είδα ακριβώς τη στιγμή που άνοιξα.",
      "Το tarde ως επίρρημα δεν αλλάζει ποτέ: «Llego tarde». Μην το μπερδεύεις με το ουσιαστικό la tarde (το απόγευμα): «por la tarde» σημαίνει «το απόγευμα».",
      "Το ελληνικό «νωρίς» αντιστοιχεί στο temprano ή στο pronto («es pronto» = «είναι νωρίς»). Το «γρήγορα» ως ταχύτητα δεν είναι pronto αλλά rápido ή deprisa.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Hoy es jueves. El martes fue ___.", promptEl: "Σήμερα είναι Πέμπτη. Την Τρίτη ήταν ___.", options: ["anteayer", "ayer", "mañana", "pasado mañana"], answer: "anteayer" },
      { type: "choice", id: "d2", promptEs: "Hoy es lunes. El miércoles tengo médico. Tengo médico ___.", promptEl: "Σήμερα είναι Δευτέρα. Την Τετάρτη έχω γιατρό. Έχω γιατρό ___.", options: ["pasado mañana", "mañana", "ayer", "anoche"], answer: "pasado mañana" },
      { type: "cloze", id: "d3", textEs: "Hoy es lunes. ___ fue domingo.", hintEl: "Σήμερα είναι Δευτέρα. Χθες ήταν Κυριακή.", answer: "Ayer" },
      { type: "cloze", id: "d4", textEs: "Primero hago los deberes y ___ salgo con mis amigos.", hintEl: "Πρώτα κάνω τα μαθήματά μου και μετά βγαίνω με τους φίλους μου.", answer: "luego", alternatives: ["después"] },
      { type: "choice", id: "d5", promptEs: "Estaba duchándome y ___ sonó el teléfono.", promptEl: "Έκανα ντους και τότε χτύπησε το τηλέφωνο.", options: ["entonces", "luego", "tarde", "pronto"], answer: "entonces", explainEl: "Το entonces σημαίνει «εκείνη τη στιγμή»: το τηλέφωνο χτύπησε ενώ έκανα ντους." },
      { type: "choice", id: "d6", promptEs: "El avión sale a las seis de la mañana. Hoy tenemos que acostarnos ___.", promptEl: "Το αεροπλάνο φεύγει στις έξι το πρωί. Σήμερα πρέπει να πάμε για ύπνο νωρίς.", options: ["temprano", "tarde", "luego", "ayer"], answer: "temprano" },
      { type: "choice", id: "d7", promptEs: "El concierto empezó a las nueve y tú has llegado a las diez. Has llegado ___.", promptEl: "Η συναυλία άρχισε στις εννέα και εσύ έφτασες στις δέκα. Έφτασες ___.", options: ["tarde", "pronto", "temprano", "entonces"], answer: "tarde" },
      { type: "cloze", id: "d8", textEs: "No te preocupes, el médico viene ___.", hintEl: "Μην ανησυχείς, ο γιατρός έρχεται σύντομα.", answer: "pronto" },
      { type: "cloze", id: "d9", textEs: "Hoy quiero comer ___ porque a las dos tengo una reunión.", hintEl: "Σήμερα θέλω να φάω νωρίς γιατί στις δύο έχω σύσκεψη.", answer: "temprano", alternatives: ["pronto"], explainEl: "Και τα δύο σημαίνουν «νωρίτερα από το κανονικό»." },
      { type: "order", id: "d10", promptEl: "Αύριο δεν έχω μάθημα.", solution: ["Mañana", "no", "tengo", "clase."], alternatives: [["No", "tengo", "clase", "mañana."]], distractors: ["ayer", "tienes"] },
      { type: "order", id: "d11", promptEl: "Χθες το βράδυ δεν κοιμήθηκα καλά.", solution: ["Anoche", "no", "dormí", "bien."], alternatives: [["No", "dormí", "bien", "anoche."]], distractors: ["tarde", "duermo"] },
      { type: "order", id: "d12", promptEl: "Πρώτα δουλεύω και μετά ξεκουράζομαι.", solution: ["Primero", "trabajo", "y", "luego", "descanso."], alternatives: [["Primero", "trabajo", "y", "después", "descanso."]], distractors: ["después", "pronto"] },
    ],
    exercisesEl: [
      "Αντικατάστησε τις υπογραμμισμένες εκφράσεις με τα επιρρήματα του πλαισίου, με βάση τη σημερινή ημερομηνία που δίνεται.",
      "Βάλε τις λέξεις στη σωστή σειρά και συμπλήρωσε τις προτάσεις.",
      "Κύκλωσε τη σωστή λέξη ανάμεσα στις δύο επιλογές κάθε πρότασης.",
      "Αντικατάστησε τις υπογραμμισμένες λέξεις με λέξεις του πλαισίου (después, entonces, luego, pronto, tarde, temprano).",
    ],
  },
  {
    id: "u86",
    number: 86,
    page: 182,
    titleEs: "Adverbios de tiempo (2)",
    titleEl: "Επιρρήματα χρόνου (2): ya, todavía",
    introEl:
      "Τα ya και todavía μοιάζουν με τα «ήδη» και «ακόμα», αλλά το νόημα αλλάζει όταν υπάρχει άρνηση. Εδώ μαθαίνεις τα todavía, ya no, ya και todavía no, που ανά δύο είναι αντίθετα.",
    rules: [
      {
        textEl:
          "Το todavía σε καταφατική πρόταση σημαίνει ότι κάτι που ξεκίνησε στο παρελθόν συνεχίζεται και τώρα («ακόμα»). Μπαίνει στην αρχή, στο τέλος ή πριν από το ρήμα.",
        examples: [
          { es: "Mi abuelo todavía conduce.", el: "Ο παππούς μου οδηγεί ακόμα." },
          { es: "¿Estás en la oficina todavía?", el: "Είσαι ακόμα στο γραφείο;" },
        ],
      },
      {
        textEl: "Το ya no δείχνει ότι κάτι που ίσχυε πριν δεν ισχύει πια στο παρόν («δεν ... πια»).",
        examples: [
          { es: "Ya no vivo en Atenas. Ahora vivo en Sevilla.", el: "Δεν μένω πια στην Αθήνα. Τώρα μένω στη Σεβίλλη." },
          { es: "Mi hermano ya no juega al fútbol.", el: "Ο αδερφός μου δεν παίζει πια ποδόσφαιρο." },
        ],
      },
      {
        textEl:
          "Το ya σε καταφατική πρόταση δείχνει ότι κάτι έχει ήδη γίνει («ήδη») και μπαίνει πριν ή μετά το ρήμα. Στις ερωτήσεις ρωτά αν κάτι έχει ήδη γίνει και μπαίνει συνήθως μετά το ρήμα.",
        examples: [
          { es: "Ya hemos cenado. Podemos ver la película.", el: "Έχουμε ήδη φάει. Μπορούμε να δούμε την ταινία." },
          { es: "¿Has llamado ya a tu madre?", el: "Έχεις πάρει ήδη τηλέφωνο τη μητέρα σου;" },
        ],
      },
      {
        textEl:
          "Το todavía no δείχνει ότι κάτι δεν έχει γίνει μέχρι τώρα («δεν ... ακόμα»). Μπαίνει πριν ή μετά το ρήμα: todavía no ha llegado, no ha llegado todavía.",
        examples: [
          { es: "Todavía no he hablado con Ana.", el: "Δεν έχω μιλήσει ακόμα με την Ana." },
          { es: "El tren no ha llegado todavía.", el: "Το τρένο δεν έχει φτάσει ακόμα." },
        ],
      },
      {
        textEl: "Τα ζεύγη είναι αντίθετα: todavía και ya no, ya και todavía no. Διάλεξε με βάση το αν η πράξη συνεχίζεται, σταμάτησε, έγινε ή δεν έγινε.",
        examples: [
          { es: "Todavía no han comido. Ya han comido.", el: "Δεν έχουν φάει ακόμα. Έχουν ήδη φάει." },
          { es: "Todavía llueve. Ya no llueve.", el: "Βρέχει ακόμα. Δεν βρέχει πια." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι τέσσερις εκφράσεις",
        headers: ["Expresión", "Σημασία", "Ejemplo"],
        rows: [
          ["todavía", "ακόμα (συνεχίζεται)", "Todavía trabajo aquí."],
          ["ya no", "όχι πια (σταμάτησε)", "Ya no trabajo aquí."],
          ["ya", "ήδη (έγινε)", "Ya he comido."],
          ["todavía no", "όχι ακόμα (δεν έγινε)", "Todavía no he comido."],
        ],
      },
    ],
    tipsEl: [
      "Το ya no και το todavía no δεν είναι το ίδιο. «Ya no vivo aquí» σημαίνει ότι έμενα εδώ αλλά δεν μένω πια. «Todavía no vivo aquí» σημαίνει ότι δεν μένω εδώ ακόμα (ίσως θα μείνω αργότερα).",
      "Για «δεν έχω φάει ακόμα» λέμε todavía no he comido, όχι «ya no he comido». Το ya no εκφράζει αλλαγή: κάτι σταμάτησε να ισχύει.",
      "Το ελληνικό «ακόμα» αντιστοιχεί στο todavía και στις δύο περιπτώσεις (ακόμα μένω, δεν έχω φύγει ακόμα). Το ya σε καταφατική πρόταση σημαίνει «ήδη».",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi abuela ___ vive en la misma casa. Lleva allí cuarenta años.", promptEl: "Η γιαγιά μου μένει ακόμα στο ίδιο σπίτι. Μένει εκεί σαράντα χρόνια.", options: ["todavía", "ya no", "todavía no"], answer: "todavía" },
      { type: "choice", id: "d2", promptEs: "Antes fumaba, pero ahora ___ fumo.", promptEl: "Παλιά κάπνιζα, αλλά τώρα δεν καπνίζω πια.", options: ["todavía", "ya no", "ya"], answer: "ya no", explainEl: "Το ya no δείχνει ότι κάτι που ίσχυε παλιά δεν ισχύει πια." },
      { type: "cloze", id: "d3", textEs: "¿Has hecho ___ los deberes?", hintEl: "Έχεις κάνει ήδη τα μαθήματα;", answer: "ya" },
      { type: "cloze", id: "d4", textEs: "Son las tres y ___ no he comido.", hintEl: "Είναι τρεις και δεν έχω φάει ακόμα.", answer: "todavía" },
      { type: "cloze", id: "d5", textEs: "Pablo ___ trabaja aquí. Cambió de empresa en enero.", hintEl: "Ο Pablo δεν δουλεύει πια εδώ. Άλλαξε εταιρεία τον Ιανουάριο.", answer: "ya no" },
      { type: "choice", id: "d6", promptEs: "No puedo salir, ___ he terminado el informe.", promptEl: "Δεν μπορώ να βγω, δεν έχω τελειώσει ακόμα την αναφορά.", options: ["todavía no", "ya no", "ya"], answer: "todavía no", explainEl: "Για «δεν έχω τελειώσει ακόμα» το ισπανικό λέει todavía no. Το ya no λέει ότι κάτι σταμάτησε να ισχύει." },
      { type: "choice", id: "d7", promptEs: "¿Tienes hambre? No, ___ he comido.", promptEl: "Πεινάς; Όχι, έχω ήδη φάει.", options: ["ya", "todavía no", "ya no"], answer: "ya" },
      { type: "choice", id: "d8", promptEs: "El libro no ha llegado ___.", promptEl: "Το βιβλίο δεν έχει φτάσει ακόμα.", options: ["todavía", "ya", "ya no"], answer: "todavía" },
      { type: "cloze", id: "d9", textEs: "Mi hijo ___ está en la cama. ¡Son las once!", hintEl: "Ο γιος μου είναι ακόμα στο κρεβάτι. Είναι έντεκα!", answer: "todavía" },
      { type: "order", id: "d10", promptEl: "Δεν έχουμε φάει ακόμα.", solution: ["Todavía", "no", "hemos", "comido."], alternatives: [["No", "hemos", "comido", "todavía."]], distractors: ["ya", "comemos"] },
      { type: "order", id: "d11", promptEl: "Έχω ήδη τελειώσει τα μαθήματα.", solution: ["Ya", "he", "terminado", "los", "deberes."], alternatives: [["He", "terminado", "ya", "los", "deberes."], ["He", "terminado", "los", "deberes", "ya."]], distractors: ["no", "todavía"] },
      { type: "order", id: "d12", promptEl: "Ο Carlos δεν δουλεύει πια εδώ.", solution: ["Carlos", "ya", "no", "trabaja", "aquí."], distractors: ["todavía", "trabajo"] },
    ],
    exercisesEl: [
      "Διάλεξε τη σωστή μορφή ανάμεσα σε todavía και ya no.",
      "Συμπλήρωσε τις προτάσεις με todavía ή ya no.",
      "Συμπλήρωσε τις προτάσεις με ya ή todavía no.",
      "Ξαναγράψε τις προτάσεις με ya ή todavía no, ανάλογα με το αν η πράξη έχει γίνει ή όχι.",
    ],
  },
  {
    id: "u87",
    number: 87,
    page: 184,
    titleEs: "Adverbios y expresiones de frecuencia",
    titleEl: "Επιρρήματα και εκφράσεις συχνότητας",
    introEl:
      "Τα επιρρήματα συχνότητας απαντούν στην ερώτηση «¿con qué frecuencia?» (πόσο συχνά;). Θα μάθεις τη σκάλα από το siempre ως το nunca και εκφράσεις όπως todos los días ή dos veces a la semana.",
    rules: [
      {
        textEl:
          "Η σκάλα της συχνότητας, από το περισσότερο στο λιγότερο: siempre, normalmente / casi siempre, a menudo / frecuentemente, a veces / de vez en cuando, casi nunca, nunca.",
        examples: [
          { es: "Siempre desayuno fruta.", el: "Πάντα τρώω φρούτα για πρωινό." },
          { es: "A veces ceno fuera de casa.", el: "Μερικές φορές τρώω βραδινό έξω." },
        ],
      },
      {
        textEl:
          "Τα siempre, a veces κ.ά. μπορούν να μπουν πριν ή μετά το ρήμα, στο τέλος της πρότασης ή μόνα τους. Το normalmente μπορεί να ανοίγει την πρόταση.",
        examples: [
          { es: "A veces voy en bici al trabajo.", el: "Μερικές φορές πηγαίνω με ποδήλατο στη δουλειά." },
          { es: "Voy en bici al trabajo a veces.", el: "Πηγαίνω με ποδήλατο στη δουλειά μερικές φορές." },
          { es: "Normalmente, los domingos como en casa de mi abuela.", el: "Συνήθως τις Κυριακές τρώω στο σπίτι της γιαγιάς μου." },
        ],
      },
      {
        textEl:
          "Με τα nunca και casi nunca υπάρχουν δύο δομές: nunca / casi nunca + ρήμα καταφατικό, ή no + ρήμα + nunca / casi nunca.",
        examples: [
          { es: "Casi nunca veo la tele.", el: "Σχεδόν ποτέ δεν βλέπω τηλεόραση." },
          { es: "No veo casi nunca la tele.", el: "Δεν βλέπω σχεδόν ποτέ τηλεόραση." },
        ],
      },
      {
        textEl:
          "Με εκφράσεις όπως todos los días, todas las noches, (todos) los lunes λέμε ότι κάτι γίνεται κάθε μέρα, κάθε βράδυ, κάθε Δευτέρα. Προσοχή στο γένος: todos los días, todas las tardes.",
        examples: [
          { es: "Todos los días paseo con mi perro.", el: "Κάθε μέρα βγάζω βόλτα τον σκύλο μου." },
          { es: "Todas las mañanas tomo un café.", el: "Κάθε πρωί πίνω έναν καφέ." },
          { es: "Los lunes tengo yoga.", el: "Τις Δευτέρες έχω γιόγκα." },
        ],
      },
      {
        textEl:
          "Για να πούμε πόσες φορές, χρησιμοποιούμε una vez, dos / tres veces, un día, dos días + al día / mes / año ή a la semana.",
        examples: [
          { es: "Llamo a mi madre dos veces a la semana.", el: "Παίρνω τηλέφωνο τη μητέρα μου δύο φορές την εβδομάδα." },
          { es: "Visito a mis abuelos una vez al mes.", el: "Επισκέπτομαι τους παππούδες μου μία φορά τον μήνα." },
          { es: "Un día a la semana juego al pádel.", el: "Μία μέρα την εβδομάδα παίζω πάντελ." },
        ],
      },
      {
        textEl: "Στις ερωτήσεις για τη συχνότητα χρησιμοποιούμε συχνά το mucho, και απαντάμε με μια έκφραση συχνότητας.",
        examples: [{ es: "¿Viajas mucho? Una o dos veces al año.", el: "Ταξιδεύεις πολύ; Μία ή δύο φορές τον χρόνο." }],
      },
    ],
    tables: [
      {
        titleEl: "Η σκάλα της συχνότητας",
        headers: ["Expresión", "Aprox.", "Ελληνικά"],
        rows: [
          ["siempre", "100%", "πάντα"],
          ["normalmente / casi siempre", "80%", "συνήθως / σχεδόν πάντα"],
          ["a menudo / frecuentemente", "60%", "συχνά"],
          ["a veces / de vez en cuando", "30%", "μερικές φορές / πού και πού"],
          ["casi nunca", "5%", "σχεδόν ποτέ"],
          ["nunca", "0%", "ποτέ"],
        ],
      },
      {
        titleEl: "Άλλες εκφράσεις συχνότητας",
        headers: ["Estructura", "Ejemplo"],
        rows: [
          ["todos los días / meses / años", "Camino por el parque todos los días."],
          ["todas las noches / semanas / tardes", "Todas las tardes meriendo fruta."],
          ["(todos) los lunes / fines de semana", "Los fines de semana duermo más."],
          ["una vez, dos veces + al día / mes / año, a la semana", "Voy al gimnasio tres veces a la semana."],
          ["un día, dos días + a la semana", "Dos días a la semana cocino yo."],
        ],
      },
    ],
    tipsEl: [
      "Για «κάθε Δευτέρα» λέμε los lunes (ή todos los lunes), πάντα στον πληθυντικό. Το el lunes (ενικός) σημαίνει μία συγκεκριμένη Δευτέρα.",
      "Για «δύο φορές την εβδομάδα» λέμε dos veces a la semana. Με αρσενικά ουσιαστικά το a + el γίνεται al: una vez al mes, tres veces al año, cuatro veces al día.",
      "Το ελληνικό «δεν ... ποτέ» αντιστοιχεί σε no ... nunca. Στα ισπανικά όμως μπορείς να βάλεις το nunca και πριν από το ρήμα, χωρίς no: «Nunca bebo café».",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Voy al gimnasio los lunes, los miércoles y los viernes. Voy ___.", promptEl: "Πηγαίνω γυμναστήριο τις Δευτέρες, τις Τετάρτες και τις Παρασκευές. Πηγαίνω ___.", options: ["tres veces a la semana", "tres veces al mes", "tres días al año", "todos los días"], answer: "tres veces a la semana" },
      { type: "choice", id: "d2", promptEs: "Mi madre me llama ___: lunes, martes, miércoles, jueves, viernes, sábado y domingo.", promptEl: "Η μητέρα μου με παίρνει τηλέφωνο ___: Δευτέρα ως Κυριακή.", options: ["todos los días", "una vez al mes", "casi nunca", "de vez en cuando"], answer: "todos los días" },
      { type: "cloze", id: "d3", textEs: "Voy al cine ___ al mes, más o menos.", hintEl: "Πηγαίνω σινεμά μία φορά τον μήνα, περίπου.", answer: "una vez" },
      { type: "cloze", id: "d4", textEs: "Hago la compra ___ sábados.", hintEl: "Κάνω ψώνια τα Σάββατα.", answer: "los", alternatives: ["todos los"] },
      { type: "cloze", id: "d5", textEs: "___ las noches leo un rato antes de dormir.", hintEl: "Κάθε βράδυ διαβάζω λίγο πριν κοιμηθώ.", answer: "Todas", explainEl: "Η noche είναι θηλυκό, άρα todas las noches." },
      { type: "cloze", id: "d6", textEs: "Mi primo viaja a Chile dos veces ___ año.", hintEl: "Ο ξάδερφός μου ταξιδεύει στη Χιλή δύο φορές τον χρόνο.", answer: "al", explainEl: "a + el = al: dos veces al año." },
      { type: "choice", id: "d7", promptEs: "No como ___ pescado crudo. No me gusta.", promptEl: "Δεν τρώω ποτέ ωμό ψάρι. Δεν μου αρέσει.", options: ["nunca", "siempre", "a veces"], answer: "nunca", explainEl: "Μετά το no + ρήμα βάζουμε nunca: no como nunca = nunca como." },
      { type: "choice", id: "d8", promptEs: "¿Con qué frecuencia vas al médico?", promptEl: "Πόσο συχνά πηγαίνεις στον γιατρό;", options: ["Una vez al año.", "Hace un año.", "Mañana.", "Desde enero."], answer: "Una vez al año." },
      { type: "choice", id: "d9", promptEs: "¿Qué expresión indica la frecuencia más baja?", promptEl: "Ποια έκφραση δείχνει τη χαμηλότερη συχνότητα;", options: ["a veces", "casi nunca", "a menudo", "normalmente"], answer: "casi nunca" },
      { type: "order", id: "d10", promptEl: "Συνήθως τα Σάββατα βγαίνω με φίλους.", solution: ["Normalmente,", "los", "sábados", "salgo", "con", "amigos."], alternatives: [["Los", "sábados", "salgo", "con", "amigos", "normalmente."], ["Normalmente", "salgo", "con", "amigos", "los", "sábados."], ["Los", "sábados", "normalmente", "salgo", "con", "amigos."]], distractors: ["nunca", "el"] },
      { type: "order", id: "d11", promptEl: "Δεν πηγαίνω ποτέ στην όπερα.", solution: ["No", "voy", "nunca", "a", "la", "ópera."], alternatives: [["Nunca", "voy", "a", "la", "ópera."], ["No", "voy", "a", "la", "ópera", "nunca."]], distractors: ["siempre", "vas"] },
      { type: "order", id: "d12", promptEl: "Καθαρίζουμε το σπίτι δύο φορές την εβδομάδα.", solution: ["Limpiamos", "la", "casa", "dos", "veces", "a", "la", "semana."], alternatives: [["Dos", "veces", "a", "la", "semana", "limpiamos", "la", "casa."]], distractors: ["al", "por"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τις εκφράσεις του πλαισίου. Σε μερικές περιπτώσεις ταιριάζουν περισσότερες από μία.",
      "Ξαναγράψε τις προτάσεις βάζοντας την έκφραση σε παρένθεση στη σωστή θέση, με τις απαραίτητες αλλαγές.",
      "Βάλε τις εκφράσεις του πλαισίου σε σειρά, από τη μεγαλύτερη στη μικρότερη συχνότητα.",
      "Ξαναγράψε τις προτάσεις με την κατάλληλη έκφραση συχνότητας, με βάση τα δεδομένα που δίνονται.",
    ],
  },
  {
    id: "u88",
    number: 88,
    page: 186,
    titleEs: "Adverbios de cantidad",
    titleEl: "Επιρρήματα ποσότητας",
    introEl:
      "Τα muy, mucho, bastante, un poco, poco, demasiado και nada δείχνουν πόσο έντονο είναι κάτι. Η βασική διαφορά: το muy πηγαίνει με επίθετα και επιρρήματα, ενώ το mucho με ρήματα.",
    rules: [
      {
        textEl:
          "Τα επιρρήματα ποσότητας δείχνουν βαθμούς έντασης, από το πολύ ως το καθόλου. Το demasiado σημαίνει «περισσότερο απ' όσο χρειάζεται ή απ' όσο θεωρείται σωστό».",
        examples: [
          { es: "Esta sopa está bastante caliente.", el: "Αυτή η σούπα είναι αρκετά ζεστή." },
          { es: "Este café está demasiado caliente.", el: "Αυτός ο καφές είναι υπερβολικά ζεστός." },
        ],
      },
      {
        textEl: "Με επίθετα και επιρρήματα χρησιμοποιούμε muy, bastante, un poco, poco, demasiado ή nada, και τα βάζουμε πριν από αυτά.",
        examples: [
          { es: "Mi vecina es muy simpática.", el: "Η γειτόνισσά μου είναι πολύ συμπαθητική." },
          { es: "Mi hermano conduce bastante bien.", el: "Ο αδερφός μου οδηγεί αρκετά καλά." },
          { es: "Esta maleta es un poco pesada.", el: "Αυτή η βαλίτσα είναι λίγο βαριά." },
        ],
      },
      {
        textEl: "Με το nada + επίθετο ή επίρρημα το ρήμα μπαίνει σε αρνητική μορφή.",
        examples: [
          { es: "Mi jefe no es nada paciente.", el: "Ο προϊστάμενός μου δεν είναι καθόλου υπομονετικός." },
          { es: "Esta película no es nada aburrida.", el: "Αυτή η ταινία δεν είναι καθόλου βαρετή." },
        ],
      },
      {
        textEl:
          "Το un poco έχει θετικό νόημα και συνήθως πηγαίνει με αρνητικές ιδιότητες. Το poco έχει αρνητικό νόημα και πηγαίνει με θετικές ιδιότητες: poco amable σημαίνει «όχι ευγενικός».",
        examples: [
          { es: "Mi hijo es un poco desordenado.", el: "Ο γιος μου είναι κάπως ακατάστατος." },
          { es: "Este hotel es poco cómodo.", el: "Αυτό το ξενοδοχείο δεν είναι αρκετά άνετο." },
        ],
      },
      {
        textEl: "Με ρήματα τα mucho, bastante, poco, demasiado και nada μπαίνουν μετά το ρήμα. Το nada απαιτεί αρνητικό ρήμα.",
        examples: [
          { es: "Mi abuelo lee mucho.", el: "Ο παππούς μου διαβάζει πολύ." },
          { es: "Vosotros trabajáis demasiado.", el: "Εσείς δουλεύετε υπερβολικά." },
          { es: "No duermo nada.", el: "Δεν κοιμάμαι καθόλου." },
        ],
      },
      {
        textEl: "Το muy πάει με επίθετα και επιρρήματα. Το mucho πάει με ρήματα.",
        examples: [
          { es: "Esta sopa está muy buena.", el: "Αυτή η σούπα είναι πολύ καλή." },
          { es: "Me gusta mucho esta sopa.", el: "Μου αρέσει πολύ αυτή η σούπα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Με επίθετο ή επίρρημα και με ρήμα",
        headers: ["Adverbio", "+ adjetivo / adverbio", "+ verbo"],
        rows: [
          ["muy / mucho", "muy caro", "trabaja mucho"],
          ["bastante", "bastante caro", "trabaja bastante"],
          ["un poco", "un poco caro", "trabaja un poco"],
          ["poco", "poco caro", "trabaja poco"],
          ["demasiado", "demasiado caro", "trabaja demasiado"],
          ["nada", "no es nada caro", "no trabaja nada"],
        ],
      },
    ],
    tipsEl: [
      "Τα ελληνικά λένε «πολύ» και για τα δύο: «πολύ όμορφος» και «τρέχει πολύ». Στα ισπανικά: muy guapo, αλλά corre mucho. Ποτέ «muy mucho» ή «mucho guapo».",
      "Το poco δεν είναι ευγενικό «λίγο». «Es poco simpático» σημαίνει ότι δεν είναι συμπαθής. Για μια ήπια παρατήρηση χρησιμοποίησε το un poco: «Es un poco serio».",
      "Το demasiado δεν είναι το ίδιο με το muy. «Es muy caro» σημαίνει ότι είναι ακριβό. «Es demasiado caro» σημαίνει ότι είναι πιο ακριβό απ' όσο πρέπει ή απ' όσο αντέχεις.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi abuela cocina ___ bien.", promptEl: "Η γιαγιά μου μαγειρεύει πολύ καλά.", options: ["muy", "mucho", "mucha"], answer: "muy", explainEl: "Πριν από επίρρημα (bien) λέμε muy, όχι mucho." },
      { type: "choice", id: "d2", promptEs: "Mi abuela cocina ___: prepara comida para todo el barrio.", promptEl: "Η γιαγιά μου μαγειρεύει πολύ: φτιάχνει φαγητό για όλη τη γειτονιά.", options: ["muy", "mucho", "mucha"], answer: "mucho", explainEl: "Με ρήμα (cocina) λέμε mucho, όχι muy." },
      { type: "cloze", id: "d3", textEs: "Mi hermano no es ___ simpático. Nunca saluda a nadie.", hintEl: "Ο αδερφός μου δεν είναι καθόλου συμπαθής. Δεν χαιρετά ποτέ κανέναν.", answer: "nada", explainEl: "Το nada + επίθετο θέλει αρνητικό ρήμα: no es nada simpático." },
      { type: "cloze", id: "d4", textEs: "Duermo ___: solo cuatro horas cada noche.", hintEl: "Κοιμάμαι λίγο: μόνο τέσσερις ώρες κάθε βράδυ.", answer: "poco" },
      { type: "cloze", id: "d5", textEs: "Tu maleta pesa ___. ¿Qué llevas dentro?", hintEl: "Η βαλίτσα σου ζυγίζει πάρα πολύ. Τι έχεις μέσα;", answer: "demasiado", alternatives: ["mucho"] },
      { type: "cloze", id: "d6", textEs: "No estudio ___ para este examen. Voy a suspender.", hintEl: "Δεν διαβάζω καθόλου για αυτή την εξέταση. Θα αποτύχω.", answer: "nada" },
      { type: "choice", id: "d7", promptEs: "Marta es ___ simpática: nunca sonríe y no habla con nadie.", promptEl: "Η Marta δεν είναι συμπαθής: δεν χαμογελά ποτέ και δεν μιλά με κανέναν.", options: ["poco", "un poco", "muy"], answer: "poco", explainEl: "Το poco έχει αρνητικό νόημα: poco simpática σημαίνει «όχι συμπαθής». Το un poco είναι θετικότερο." },
      { type: "choice", id: "d8", promptEs: "Julián es ___ vago, pero cuando hay trabajo ayuda.", promptEl: "Ο Julián είναι κάπως τεμπέλης, αλλά όταν υπάρχει δουλειά βοηθά.", options: ["un poco", "poco", "nada"], answer: "un poco" },
      { type: "choice", id: "d9", promptEs: "¿Qué frase es correcta?", options: ["Es mucho tarde.", "Es muy tarde.", "Es muy mucho tarde."], answer: "Es muy tarde.", explainEl: "Το tarde είναι επίρρημα, άρα παίρνει muy." },
      { type: "order", id: "d10", promptEl: "Η Rosa δεν τρώει καθόλου.", solution: ["Rosa", "no", "come", "nada."], distractors: ["muy", "mucho"] },
      { type: "order", id: "d11", promptEl: "Αυτή η τάξη είναι αρκετά δύσκολη.", solution: ["Esta", "clase", "es", "bastante", "difícil."], distractors: ["mucho", "muy"] },
      { type: "order", id: "d12", promptEl: "Οι γονείς μου δουλεύουν υπερβολικά.", solution: ["Mis", "padres", "trabajan", "demasiado."], distractors: ["muy", "bastantes"] },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή λέξη ανάμεσα στις δύο επιλογές κάθε πρότασης (muy, poco, nada, bastante, demasiado, un poco...).",
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με bastante, demasiado, muy ή un poco.",
      "Συμπλήρωσε τις προτάσεις με bastante, demasiado, mucho, nada ή poco.",
      "Συμπλήρωσε τις προτάσεις με τις δοσμένες λέξεις, ανάλογα με τα σημάδια έντασης (τρία συν, δύο συν, ένα συν, ένα πλην, δύο πλην).",
      "Ξαναγράψε τις προτάσεις προσθέτοντας muy ή mucho.",
    ],
  },
  {
    id: "u89",
    number: 89,
    page: 188,
    titleEs: "Adverbios de modo",
    titleEl: "Επιρρήματα τρόπου",
    introEl:
      "Τα επιρρήματα τρόπου απαντούν στην ερώτηση «¿cómo?» (πώς;). Πολλά σχηματίζονται με την κατάληξη -mente, αλλά τα bien και mal και μερικά ακόμη έχουν δική τους μορφή.",
    rules: [
      {
        textEl: "Τα περισσότερα επιρρήματα τρόπου σχηματίζονται από το θηλυκό ενικού του επιθέτου + -mente.",
        examples: [
          { es: "Mi vecino habla tranquilamente por teléfono.", el: "Ο γείτονάς μου μιλά ήρεμα στο τηλέφωνο." },
          { es: "Ana contesta siempre amablemente.", el: "Η Ana απαντά πάντα ευγενικά." },
        ],
      },
      {
        textEl:
          "Ο τόνος του επιθέτου διατηρείται στο επίρρημα: fácil → fácilmente, rápido → rápidamente. Αν το επίθετο δεν έχει τόνο, ούτε το επίρρημα έχει: prudente → prudentemente.",
        examples: [
          { es: "Resolvió el problema fácilmente.", el: "Έλυσε το πρόβλημα εύκολα." },
          { es: "Condujo prudentemente bajo la lluvia.", el: "Οδήγησε προσεκτικά μέσα στη βροχή." },
        ],
      },
      {
        textEl:
          "Μερικά επιρρήματα είναι ιδιαίτερα: bueno → bien, malo → mal. Υπάρχουν και τα deprisa (γρήγορα), despacio (αργά) και así (έτσι).",
        examples: [
          { es: "Mi hermano canta bien.", el: "Ο αδερφός μου τραγουδά καλά." },
          { es: "Camina despacio, por favor.", el: "Περπάτα αργά, παρακαλώ." },
          { es: "Pon la mesa así, por favor.", el: "Στρώσε το τραπέζι έτσι, παρακαλώ." },
        ],
      },
      {
        textEl: "Μερικά επιρρήματα έχουν την ίδια μορφή με το αρσενικό επίθετο: alto, bajo, rápido, lento. Τα rápido και lento έχουν και τύπο σε -mente.",
        examples: [
          { es: "No hables alto, por favor.", el: "Μη μιλάς δυνατά, παρακαλώ." },
          { es: "Este tren va muy rápido.", el: "Αυτό το τρένο πηγαίνει πολύ γρήγορα." },
        ],
      },
      {
        textEl:
          "Τα επιρρήματα τρόπου μπαίνουν συνήθως μετά το ρήμα και μπορούν να έχουν μπροστά τους muy, bastante. Το επίθετο συμφωνεί με το ουσιαστικό, ενώ το επίρρημα δεν αλλάζει ποτέ.",
        examples: [
          { es: "Mis hijas son muy rápidas. Corren muy rápido.", el: "Οι κόρες μου είναι πολύ γρήγορες. Τρέχουν πολύ γρήγορα." },
          { es: "Bailas bastante bien.", el: "Χορεύεις αρκετά καλά." },
        ],
      },
      {
        textEl: "Όταν έχουμε δύο ή περισσότερα επιρρήματα σε -mente, μόνο το τελευταίο παίρνει -mente. Τα προηγούμενα μένουν σε θηλυκό ενικού.",
        examples: [{ es: "Trabaja cuidadosa y silenciosamente.", el: "Δουλεύει προσεκτικά και αθόρυβα." }],
      },
    ],
    tables: [
      {
        titleEl: "Από επίθετο σε επίρρημα με -mente",
        headers: ["Adjetivo", "Femenino singular", "Adverbio"],
        rows: [
          ["tranquilo", "tranquila", "tranquilamente"],
          ["claro", "clara", "claramente"],
          ["rápido", "rápida", "rápidamente"],
          ["fácil", "fácil", "fácilmente"],
          ["prudente", "prudente", "prudentemente"],
          ["feliz", "feliz", "felizmente"],
        ],
      },
      {
        titleEl: "Ιδιαίτερες μορφές",
        headers: ["Adjetivo", "Adverbio"],
        rows: [
          ["bueno", "bien"],
          ["malo", "mal"],
          ["rápido", "rápido, rápidamente, deprisa"],
          ["lento", "lento, lentamente, despacio"],
          ["alto", "alto"],
          ["bajo", "bajo"],
        ],
      },
    ],
    tipsEl: [
      "Το «καλά» είναι bien και το «άσχημα» είναι mal. Τα bueno και malo είναι επίθετα: «Es un cantante bueno», αλλά «Canta bien».",
      "Στα ελληνικά το επίρρημα μοιάζει με ουδέτερο πληθυντικό (καλά, γρήγορα). Στα ισπανικά το επίρρημα δεν αλλάζει ποτέ: «Las chicas corren rápido», όχι «rápidas».",
      "Όταν χρειάζεσαι δύο επιρρήματα σε -mente, γράψε το πρώτο σε θηλυκό ενικού: «lenta y claramente», όχι «lentamente y claramente».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi profesor explica muy ___.", hintEl: "Ο καθηγητής μου εξηγεί πολύ καθαρά.", answer: "claramente" },
      { type: "cloze", id: "d2", textEs: "Los vecinos viven ___ en el campo.", hintEl: "Οι γείτονες ζουν ήρεμα στην εξοχή.", answer: "tranquilamente" },
      { type: "cloze", id: "d3", textEs: "Resolvió el problema muy ___.", hintEl: "Έλυσε το πρόβλημα πολύ εύκολα.", answer: "fácilmente", explainEl: "Το fácil έχει τόνο, άρα και το fácilmente τον κρατά." },
      { type: "cloze", id: "d4", textEs: "Mi hermana canta muy ___: tiene una voz preciosa.", hintEl: "Η αδερφή μου τραγουδά πολύ καλά: έχει υπέροχη φωνή.", answer: "bien" },
      { type: "cloze", id: "d5", textEs: "Hablas muy ___ y no entiendo nada. ¡Más despacio, por favor!", hintEl: "Μιλάς πολύ γρήγορα και δεν καταλαβαίνω τίποτα. Πιο αργά, παρακαλώ!", answer: "deprisa", alternatives: ["rápido", "rápidamente"] },
      { type: "choice", id: "d6", promptEs: "Ese conductor es peligroso: conduce muy ___.", promptEl: "Αυτός ο οδηγός είναι επικίνδυνος: οδηγεί πολύ άσχημα.", options: ["mal", "malo", "mala"], answer: "mal", explainEl: "Το επίρρημα του malo είναι mal." },
      { type: "choice", id: "d7", promptEs: "Es un conductor ___ y prudente.", promptEl: "Είναι καλός και προσεκτικός οδηγός.", options: ["bien", "bueno", "buena"], answer: "bueno", explainEl: "Το conductor είναι ουσιαστικό, άρα θέλει επίθετο (bueno). Το bien είναι επίρρημα." },
      { type: "choice", id: "d8", promptEs: "Habla ___, por favor. El bebé duerme.", promptEl: "Μίλα σιγά, παρακαλώ. Το μωρό κοιμάται.", options: ["bajo", "baja", "bajos"], answer: "bajo" },
      { type: "choice", id: "d9", promptEs: "Las alumnas trabajan muy ___.", promptEl: "Οι μαθήτριες δουλεύουν πολύ γρήγορα.", options: ["rápido", "rápidas", "rápida"], answer: "rápido", explainEl: "Το επίρρημα δεν συμφωνεί με το υποκείμενο: rápido, όχι rápidas." },
      { type: "choice", id: "d10", promptEs: "Explica la lección ___ y claramente.", promptEl: "Εξηγεί το μάθημα αργά και καθαρά.", options: ["lenta", "lentamente", "lento"], answer: "lenta", explainEl: "Με δύο επιρρήματα σε -mente, μόνο το τελευταίο παίρνει -mente: lenta y claramente." },
      { type: "order", id: "d11", promptEl: "Ο Pablo οδηγεί πολύ προσεκτικά.", solution: ["Pablo", "conduce", "muy", "cuidadosamente."], distractors: ["cuidadoso", "bien"] },
      { type: "order", id: "d12", promptEl: "Μη μιλάς δυνατά, παρακαλώ.", solution: ["No", "hables", "alto,", "por", "favor."], alternatives: [["Por", "favor,", "no", "hables", "alto."]], distractors: ["alta", "bajo"] },
    ],
    exercisesEl: [
      "Γράψε τα επιρρήματα που σχηματίζονται από τα επίθετα που δίνονται.",
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με τα επιρρήματα του πλαισίου.",
      "Αντικατάστησε τις υπογραμμισμένες εκφράσεις (με + ουσιαστικό, de forma...) με επιρρήματα τρόπου.",
      "Συμπλήρωσε τις προτάσεις με τις λέξεις του πλαισίου, επιλέγοντας ανάμεσα σε επίθετο και επίρρημα.",
      "Αντικατάστησε τις υπογραμμισμένες εκφράσεις με δύο επιρρήματα τρόπου, από τα οποία μόνο το τελευταίο παίρνει -mente.",
    ],
  },
  {
    id: "u90",
    number: 90,
    page: 190,
    titleEs: "Comparación de adverbios",
    titleEl: "Σύγκριση επιρρημάτων",
    introEl:
      "Όπως τα επίθετα, έτσι και τα επιρρήματα συγκρίνονται: πιο γρήγορα, λιγότερο καλά, τόσο καλά όσο. Προσοχή στις ανώμαλες μορφές: το bien γίνεται mejor και το mal γίνεται peor.",
    rules: [
      {
        textEl: "Υπεροχή: más + επίρρημα (+ que).",
        examples: [
          { es: "Mi hermano llega más tarde que yo.", el: "Ο αδερφός μου φτάνει πιο αργά από μένα." },
          { es: "Camina más despacio, por favor.", el: "Περπάτα πιο αργά, παρακαλώ." },
        ],
      },
      {
        textEl: "Μειονεξία: menos + επίρρημα (+ que). Χρησιμοποιείται σπάνια.",
        examples: [{ es: "Este tren va menos deprisa que el otro.", el: "Αυτό το τρένο πηγαίνει λιγότερο γρήγορα από το άλλο." }],
      },
      {
        textEl: "Ισότητα: tan + επίρρημα (+ como).",
        examples: [
          { es: "Pablo canta tan bien como su padre.", el: "Ο Pablo τραγουδά το ίδιο καλά με τον πατέρα του." },
          { es: "Lola corre tan rápido como yo.", el: "Η Lola τρέχει τόσο γρήγορα όσο εγώ." },
        ],
      },
      {
        textEl:
          "Ανώμαλοι τύποι: bien → mejor, mal → peor, mucho → más, poco → menos. Στην ισότητα το mucho γίνεται tanto (+ como).",
        examples: [
          { es: "Julia cocina mejor que yo.", el: "Η Julia μαγειρεύει καλύτερα από μένα." },
          { es: "Hoy me siento peor que ayer.", el: "Σήμερα νιώθω χειρότερα από χθες." },
          { es: "Trabajo tanto como tú.", el: "Δουλεύω τόσο όσο εσύ." },
        ],
      },
      {
        textEl:
          "Η μειονεξία δεν χρησιμοποιείται πολύ. Στη θέση της προτιμάμε την αρνητική μορφή της ισότητας: no ... tan ... como.",
        examples: [{ es: "Marcos no corre tan rápido como yo.", el: "Ο Marcos δεν τρέχει τόσο γρήγορα όσο εγώ." }],
      },
      {
        textEl: "Μετά το que και το como χρησιμοποιούμε αντωνυμίες υποκειμένου (yo, tú, él...).",
        examples: [
          { es: "Ana habla más alto que yo.", el: "Η Ana μιλά πιο δυνατά από μένα." },
          { es: "Canto tan mal como tú.", el: "Τραγουδάω το ίδιο άσχημα με σένα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι τρεις βαθμοί σύγκρισης",
        headers: ["Tipo", "Estructura", "Ejemplo"],
        rows: [
          ["Superioridad", "más + adverbio (+ que)", "más alto que yo"],
          ["Inferioridad", "menos + adverbio (+ que)", "menos alto que yo"],
          ["Igualdad", "tan + adverbio (+ como)", "tan alto como yo"],
        ],
      },
      {
        titleEl: "Ανώμαλοι τύποι",
        headers: ["Adverbio", "Superioridad", "Igualdad"],
        rows: [
          ["bien", "mejor (que)", "tan bien (como)"],
          ["mal", "peor (que)", "tan mal (como)"],
          ["mucho", "más (que)", "tanto (como)"],
          ["poco", "menos (que)", "tan poco (como)"],
        ],
      },
    ],
    tipsEl: [
      "Για «καλύτερα» και «χειρότερα» δεν λέμε «más bien» και «más mal»: λέμε mejor και peor.",
      "Μετά το que και το como χρησιμοποιούμε yo και tú, όχι mí και ti: «más alto que yo», όχι «que mí».",
      "Το ελληνικό «από» στη σύγκριση είναι que (más alto que tú) και το «όσο» είναι como (tan alto como tú). Μην βάζεις de στη θέση του que.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi hermano canta ___ que yo. ¡Tiene una voz preciosa!", promptEl: "Ο αδερφός μου τραγουδά καλύτερα από μένα. Έχει υπέροχη φωνή!", options: ["mejor", "más mejor", "bien"], answer: "mejor", explainEl: "Ο συγκριτικός του bien είναι mejor. Δεν λέμε «más mejor»." },
      { type: "choice", id: "d2", promptEs: "Ayer dormí mal, y hoy he dormido ___: solo tres horas.", promptEl: "Χθες κοιμήθηκα άσχημα και σήμερα κοιμήθηκα χειρότερα: μόνο τρεις ώρες.", options: ["peor", "mejor", "más mal"], answer: "peor" },
      { type: "choice", id: "d3", promptEs: "Marta corre ___ rápido como Luis. Llegan a la vez.", promptEl: "Η Marta τρέχει τόσο γρήγορα όσο ο Luis. Φτάνουν μαζί.", options: ["tan", "tanto", "más"], answer: "tan", explainEl: "Πριν από επίρρημα (rápido) λέμε tan, όχι tanto." },
      { type: "choice", id: "d4", promptEs: "Mi padre trabaja ___ como mi madre: los dos, ocho horas.", promptEl: "Ο πατέρας μου δουλεύει τόσο όσο η μητέρα μου: και οι δύο οκτώ ώρες.", options: ["tanto", "tan", "más"], answer: "tanto", explainEl: "Με ρήμα (trabaja) και χωρίς επίρρημα, η ισότητα είναι tanto como." },
      { type: "choice", id: "d5", promptEs: "Ana habla más rápido que ___.", promptEl: "Η Ana μιλά πιο γρήγορα από μένα.", options: ["yo", "mí", "me"], answer: "yo", explainEl: "Μετά το que χρησιμοποιούμε αντωνυμία υποκειμένου: que yo." },
      { type: "cloze", id: "d6", textEs: "Habla ___ bajo, por favor, que el niño duerme.", hintEl: "Μίλα πιο σιγά, παρακαλώ, γιατί το παιδί κοιμάται.", answer: "más" },
      { type: "cloze", id: "d7", textEs: "Trabajo mucho, pero mi jefa trabaja aún ___.", hintEl: "Δουλεύω πολύ, αλλά η προϊσταμένη μου δουλεύει ακόμα περισσότερο.", answer: "más" },
      { type: "cloze", id: "d8", textEs: "Hoy me he levantado ___ temprano que ayer: a las nueve.", hintEl: "Σήμερα ξύπνησα λιγότερο νωρίς από χθες: στις εννέα.", answer: "menos" },
      { type: "cloze", id: "d9", textEs: "No canto tan bien ___ tú, pero me divierto.", hintEl: "Δεν τραγουδάω τόσο καλά όσο εσύ, αλλά διασκεδάζω.", answer: "como" },
      { type: "choice", id: "d10", promptEs: "¿Cuál es la frase correcta?", promptEl: "Ο Tomás δεν τρέχει τόσο γρήγορα όσο εγώ.", options: ["Tomás no corre tan rápido como yo.", "Tomás no corre tan rápido que yo.", "Tomás no corre más rápido como yo."], answer: "Tomás no corre tan rápido como yo." },
      { type: "order", id: "d11", promptEl: "Ο Tomás τρέχει πιο γρήγορα από μένα.", solution: ["Tomás", "corre", "más", "rápido", "que", "yo."], distractors: ["mejor", "como"] },
      { type: "order", id: "d12", promptEl: "Δεν δουλεύω τόσο όσο εσύ.", solution: ["No", "trabajo", "tanto", "como", "tú."], distractors: ["tan", "que"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε τις προτάσεις με τον συγκριτικό υπεροχής ή ισότητας των επιρρημάτων του πλαισίου.",
      "Γράψε συγκρίσεις σύμφωνα με τις ενδείξεις στην παρένθεση (περισσότερο, λιγότερο ή ίσο).",
      "Συμπλήρωσε τις προτάσεις με το νόημα που δείχνει η ένδειξη (υπεροχή ή ισότητα).",
      "Ξαναγράψε τις προτάσεις με συγκριτικό ισότητας, σε αρνητική μορφή.",
    ],
  },
  {
    id: "u91",
    number: 91,
    page: 192,
    titleEs: "Adverbios de negación",
    titleEl: "Επιρρήματα άρνησης",
    introEl:
      "Τα no και nunca αρνούνται μια πράξη ή μια κατάσταση. Θα δεις πώς μπαίνουν μαζί με τα nada και nadie, όπως στα ελληνικά «δεν βλέπω κανέναν», και πότε το no παραλείπεται.",
    rules: [
      {
        textEl:
          "Το no είναι το πιο συνηθισμένο επίρρημα άρνησης. Μπορεί να λέγεται μόνο του ή μπροστά από το ρήμα (και μπροστά από την αντωνυμία αντικειμένου).",
        examples: [
          { es: "No tengo hambre.", el: "Δεν πεινάω." },
          { es: "No me gusta el calor.", el: "Δεν μου αρέσει η ζέστη." },
        ],
      },
      {
        textEl:
          "Αν μετά το ρήμα υπάρχει nada, nadie ή nunca, το no μένει πριν από το ρήμα. Είναι διπλή άρνηση, όπως στα ελληνικά. Με πρόσωπο, το nadie παίρνει a.",
        examples: [
          { es: "No veo nada.", el: "Δεν βλέπω τίποτα." },
          { es: "No conozco a nadie aquí.", el: "Δεν γνωρίζω κανέναν εδώ." },
        ],
      },
      {
        textEl: "Αν το nada, nadie ή nunca μπει πριν από το ρήμα, δεν βάζουμε no.",
        examples: [
          { es: "Nadie sabe la respuesta.", el: "Κανείς δεν ξέρει την απάντηση." },
          { es: "Nada me preocupa.", el: "Τίποτα δεν με απασχολεί." },
        ],
      },
      {
        textEl: "Όταν υποκείμενο είναι το nadie ή το nada, έχουμε δύο δυνατότητες: nadie / nada + ρήμα, ή no + ρήμα + nadie / nada.",
        examples: [
          { es: "Nadie vino a la fiesta.", el: "Κανείς δεν ήρθε στο πάρτι." },
          { es: "No vino nadie a la fiesta.", el: "Δεν ήρθε κανείς στο πάρτι." },
        ],
      },
      {
        textEl: "Το nunca μπορεί να μπει πριν από το ρήμα χωρίς no, ή μετά το ρήμα με no. Το no μπαίνει πριν από την αντωνυμία αντικειμένου.",
        examples: [
          { es: "Nunca salimos de noche.", el: "Ποτέ δεν βγαίνουμε το βράδυ." },
          { es: "No salimos nunca de noche.", el: "Δεν βγαίνουμε ποτέ το βράδυ." },
          { es: "¿No has probado nunca el mole?", el: "Δεν έχεις δοκιμάσει ποτέ το mole;" },
        ],
      },
      {
        textEl: "Σε σύντομες απαντήσεις τα nada, nadie και nunca μπορούν να μπουν μόνα τους.",
        examples: [
          { es: "¿Quién ha llamado? Nadie.", el: "Ποιος τηλεφώνησε; Κανείς." },
          { es: "¿Qué quieres? Nada, gracias.", el: "Τι θέλεις; Τίποτα, ευχαριστώ." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Θέση της άρνησης",
        headers: ["Estructura", "Ejemplo", "Ελληνικά"],
        rows: [
          ["no + verbo", "No tengo coche.", "Δεν έχω αυτοκίνητο."],
          ["no + verbo + nada / nadie / nunca", "No veo a nadie.", "Δεν βλέπω κανέναν."],
          ["nada / nadie / nunca + verbo", "Nadie me llama.", "Κανείς δεν με παίρνει τηλέφωνο."],
          ["nadie / nada como sujeto: dos posibilidades", "Nadie vino. / No vino nadie.", "Δεν ήρθε κανείς."],
        ],
      },
    ],
    tipsEl: [
      "Αν το nunca, nadie ή nada προηγείται του ρήματος, δεν βάζεις no: «Nadie me ayuda», όχι «Nadie no me ayuda». Αν έπεται του ρήματος, το no είναι υποχρεωτικό: «No me ayuda nadie».",
      "Όταν το nadie αναφέρεται σε πρόσωπο και είναι αντικείμενο, παίρνει a: «No veo a nadie». Για το nada δεν χρειάζεται: «No veo nada».",
      "Μια λέξη αρκεί για απάντηση: «¿Quién viene? Nadie.», «¿Qué quieres? Nada.», «¿Fumas? Nunca.». Στα ελληνικά θα πεις «Κανείς», «Τίποτα», «Ποτέ».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "No tengo ___ en la nevera.", hintEl: "Δεν έχω τίποτα στο ψυγείο.", answer: "nada" },
      { type: "cloze", id: "d2", textEs: "En la fiesta no conozco a ___.", hintEl: "Στο πάρτι δεν γνωρίζω κανέναν.", answer: "nadie" },
      { type: "cloze", id: "d3", textEs: "Mi hermano no estudia ___ por la noche.", hintEl: "Ο αδερφός μου δεν διαβάζει ποτέ το βράδυ.", answer: "nunca" },
      { type: "cloze", id: "d4", textEs: "___ me llama por teléfono. Estoy muy solo.", hintEl: "Κανείς δεν με παίρνει τηλέφωνο. Είμαι πολύ μόνος.", answer: "Nadie", explainEl: "Το nadie μπαίνει πριν από το ρήμα, άρα δεν χρειάζεται no." },
      { type: "cloze", id: "d5", textEs: "___ voy a la playa en invierno.", hintEl: "Δεν πηγαίνω ποτέ στην παραλία τον χειμώνα.", answer: "Nunca" },
      { type: "choice", id: "d6", promptEs: "¿Cuál es la frase correcta?", options: ["Nadie no sabe la verdad.", "Nadie sabe la verdad.", "No nadie sabe la verdad."], answer: "Nadie sabe la verdad.", explainEl: "Το nadie πριν από το ρήμα δεν παίρνει no. Μετά το ρήμα θα ήταν: No sabe nadie la verdad." },
      { type: "choice", id: "d7", promptEs: "¿Quieres tomar algo? No, ___, gracias.", promptEl: "Θέλεις να πιεις κάτι; Όχι, τίποτα, ευχαριστώ.", options: ["nada", "nadie", "nunca"], answer: "nada" },
      { type: "choice", id: "d8", promptEs: "¿Quién ha llegado? ___.", promptEl: "Ποιος έφτασε; Κανείς.", options: ["Nadie", "Nada", "Nunca"], answer: "Nadie" },
      { type: "choice", id: "d9", promptEs: "No he visto ___ a esa chica.", promptEl: "Δεν έχω δει ποτέ αυτό το κορίτσι.", options: ["nunca", "nada", "nadie"], answer: "nunca" },
      { type: "choice", id: "d10", promptEs: "¿Cuál es la frase correcta?", promptEl: "Δεν ήρθε κανείς στο μάθημα.", options: ["No vino nadie a clase.", "Nadie no vino a clase.", "No vino nada a clase."], answer: "No vino nadie a clase.", explainEl: "Μετά το ρήμα χρειάζεται no πριν από αυτό: no vino nadie." },
      { type: "order", id: "d11", promptEl: "Δεν βλέπω κανέναν.", solution: ["No", "veo", "a", "nadie."], distractors: ["nada", "nunca"], explainEl: "Το nadie για πρόσωπο παίρνει a." },
      { type: "order", id: "d12", promptEl: "Δεν τον βλέπω ποτέ.", solution: ["No", "lo", "veo", "nunca."], alternatives: [["Nunca", "lo", "veo."]], distractors: ["nadie", "la"] },
    ],
    exercisesEl: [
      "Κάνε αρνητικές με το no τις προτάσεις που δίνονται.",
      "Συμπλήρωσε τις απαντήσεις με τις λέξεις σε παρένθεση, χρησιμοποιώντας το no μόνο όπου χρειάζεται.",
      "Φτιάξε προτάσεις με τις δοσμένες λέξεις, βάζοντας το no όπου χρειάζεται, και γράψε όλες τις δυνατές εκδοχές.",
      "Ξαναγράψε τις προτάσεις βάζοντας το nunca στη θέση που δείχνει το σημάδι, με τις απαραίτητες αλλαγές.",
    ],
  },
  {
    id: "u92",
    number: 92,
    page: 194,
    titleEs: "Expresar coincidencia o no coincidencia",
    titleEl: "Συμφωνία και διαφωνία",
    introEl:
      "Με τα yo también, yo tampoco, yo sí και yo no λες σύντομα αν συμφωνείς ή διαφωνείς με αυτό που είπε κάποιος. Η επιλογή εξαρτάται από το αν η πρόταση που άκουσες είναι καταφατική ή αρνητική.",
    rules: [
      {
        textEl: "Για να συμφωνήσουμε με μια καταφατική πρόταση λέμε también.",
        examples: [
          { es: "Tengo calor. Yo también.", el: "Ζεσταίνομαι. Κι εγώ." },
          { es: "A Pablo le gusta el mar. A Elena también.", el: "Στον Pablo αρέσει η θάλασσα. Και στην Elena." },
        ],
      },
      {
        textEl: "Για να συμφωνήσουμε με μια αρνητική πρόταση λέμε tampoco.",
        examples: [
          { es: "No hablo ruso. Yo tampoco.", el: "Δεν μιλάω ρωσικά. Ούτε εγώ." },
          { es: "A Luis no le gusta el café. A Ana tampoco.", el: "Στον Luis δεν αρέσει ο καφές. Ούτε στην Ana." },
        ],
      },
      {
        textEl: "Για να διαφωνήσουμε με μια καταφατική πρόταση λέμε no.",
        examples: [
          { es: "Me encanta madrugar. A mí no.", el: "Μου αρέσει πολύ να ξυπνάω νωρίς. Εμένα όχι." },
          { es: "Marta vive en Roma. Pues Ana no.", el: "Η Marta ζει στη Ρώμη. Η Ana όχι." },
        ],
      },
      {
        textEl: "Για να διαφωνήσουμε με μια αρνητική πρόταση λέμε sí.",
        examples: [
          { es: "No tengo sueño. Yo sí.", el: "Δεν νυστάζω. Εγώ ναι." },
          { es: "A Sergio no le gusta bailar. Pues a Gema sí.", el: "Στον Sergio δεν αρέσει ο χορός. Στη Gema ναι." },
        ],
      },
      {
        textEl:
          "Βάζουμε πριν από το también, tampoco, sí ή no μια αντωνυμία (yo, tú, él, nosotros...) ή ένα όνομα. Με ρήματα όπως gustar και encantar χρησιμοποιούμε a mí, a ti, a él, a + όνομα.",
        examples: [
          { es: "Estamos contentos. Nosotros también.", el: "Είμαστε χαρούμενοι. Κι εμείς." },
          { es: "Me gusta la paella. A mí también.", el: "Μου αρέσει η παέγια. Κι εμένα." },
        ],
      },
      {
        textEl: "Οι ίδιοι τύποι χρησιμοποιούνται και σε σύντομες απαντήσεις σε ερωτήσεις που απευθύνονται σε πολλά άτομα.",
        examples: [{ es: "¿Os gusta el flan? A mí sí. A mí no.", el: "Σας αρέσει η κρέμα καραμελέ; Εμένα ναι. Εμένα όχι." }],
      },
    ],
    tables: [
      {
        titleEl: "Τέσσερις απαντήσεις",
        headers: ["Lo que dicen", "Coincidencia", "No coincidencia"],
        rows: [
          ["Tengo sueño.", "Yo también.", "Yo no."],
          ["No tengo sueño.", "Yo tampoco.", "Yo sí."],
          ["Me gusta el té.", "A mí también.", "A mí no."],
          ["No me gusta el té.", "A mí tampoco.", "A mí sí."],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «κι εγώ» και «ούτε εγώ». Στα ισπανικά διαλέγεις ανάλογα με αυτό που άκουσες: también (κι εγώ) μετά από καταφατική και tampoco (ούτε εγώ) μετά από αρνητική.",
      "Το tampoco περιέχει ήδη την άρνηση. Λέμε «Yo tampoco», όχι «Yo no tampoco».",
      "Με gustar, encantar κ.ά. το «κι εμένα» είναι a mí también και όχι «yo también»: «Me gusta el jazz. A mí también.».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Tengo mucho trabajo. Yo ___.", hintEl: "Έχω πολλή δουλειά. Κι εγώ.", answer: "también" },
      { type: "cloze", id: "d2", textEs: "No sé nadar. Yo ___.", hintEl: "Δεν ξέρω κολύμπι. Ούτε εγώ.", answer: "tampoco" },
      { type: "cloze", id: "d3", textEs: "Me encanta cocinar. A mí ___. Prefiero comer fuera.", hintEl: "Μου αρέσει πολύ το μαγείρεμα. Εμένα όχι. Προτιμώ να τρώω έξω.", answer: "no" },
      { type: "cloze", id: "d4", textEs: "No tengo ganas de salir. Yo ___. Vamos al cine.", hintEl: "Δεν έχω όρεξη να βγω. Εγώ έχω. Πάμε σινεμά.", answer: "sí" },
      { type: "cloze", id: "d5", textEs: "Marta no habla francés. Pablo ___.", hintEl: "Η Marta δεν μιλά γαλλικά. Ούτε ο Pablo.", answer: "tampoco" },
      { type: "cloze", id: "d6", textEs: "A Juan le gusta el rock. A Elena ___.", hintEl: "Στον Juan αρέσει το ροκ. Και στην Elena.", answer: "también" },
      { type: "choice", id: "d7", promptEs: "Estamos muy cansados. ___.", promptEl: "Είμαστε πολύ κουρασμένοι. Κι εμείς.", options: ["Nosotros también.", "Nosotros tampoco.", "Nosotros sí."], answer: "Nosotros también." },
      { type: "choice", id: "d8", promptEs: "No me gusta el calor. ___. Me encanta.", promptEl: "Δεν μου αρέσει η ζέστη. Εμένα ναι. Την λατρεύω.", options: ["A mí sí.", "A mí también.", "A mí no."], answer: "A mí sí.", explainEl: "Διαφωνούμε με αρνητική πρόταση, άρα sí." },
      { type: "choice", id: "d9", promptEs: "Soy muy tímida. ___. Hablo con todo el mundo.", promptEl: "Είμαι πολύ ντροπαλή. Εγώ όχι. Μιλάω με όλο τον κόσμο.", options: ["Yo no.", "Yo tampoco.", "Yo sí."], answer: "Yo no.", explainEl: "Διαφωνούμε με καταφατική πρόταση, άρα no." },
      { type: "choice", id: "d10", promptEs: "A Sara no le gusta el pescado. A su hermano ___. Nunca lo come.", promptEl: "Στη Sara δεν αρέσει το ψάρι. Ούτε στον αδερφό της. Δεν το τρώει ποτέ.", options: ["tampoco", "también", "sí"], answer: "tampoco" },
      { type: "order", id: "d11", promptEl: "Εμένα όχι, δεν μου αρέσει το ψάρι.", solution: ["A", "mí", "no,", "no", "me", "gusta", "el", "pescado."], distractors: ["sí", "también"] },
      { type: "order", id: "d12", promptEl: "Εγώ ναι, αλλά η Marta όχι.", solution: ["Yo", "sí,", "pero", "Marta", "no."], distractors: ["también", "tampoco"] },
    ],
    exercisesEl: [
      "Εκφράστε συμφωνία: συμπλήρωσε τις απαντήσεις με también ή tampoco.",
      "Εκφράστε διαφωνία: συμπλήρωσε τις προτάσεις με sí ή no.",
      "Συμπλήρωσε τους διαλόγους εκφράζοντας συμφωνία ή διαφωνία, σύμφωνα με το σύμβολο και το πρόσωπο στην παρένθεση.",
      "Συμπλήρωσε τις απαντήσεις σύμφωνα με τα σημάδια (καταφατική ή αρνητική απάντηση) σε ερωτήσεις προς πολλά άτομα.",
    ],
  },
  {
    id: "u93",
    number: 93,
    page: 196,
    titleEs: "Conjunciones",
    titleEl: "Σύνδεσμοι",
    introEl:
      "Οι σύνδεσμοι y, ni, o και pero ενώνουν λέξεις και προτάσεις. Στα ισπανικά το y γίνεται e και το o γίνεται u όταν η επόμενη λέξη αρχίζει από ορισμένο ήχο, για να ακούγεται καλύτερα.",
    rules: [
      {
        textEl: "Το y ενώνει καταφατικά στοιχεία ή ιδέες («και»). Όταν έχουμε πάνω από δύο στοιχεία, το y μπαίνει μόνο πριν από το τελευταίο.",
        examples: [
          { es: "Estudio inglés y alemán.", el: "Μαθαίνω αγγλικά και γερμανικά." },
          { es: "Compro pan, leche y huevos.", el: "Αγοράζω ψωμί, γάλα και αυγά." },
        ],
      },
      {
        textEl: "Το y γίνεται e πριν από λέξη που αρχίζει από i- ή hi-.",
        examples: [
          { es: "Marta e Inés son primas.", el: "Η Marta και η Inés είναι ξαδέρφες." },
          { es: "Hablo español e italiano.", el: "Μιλάω ισπανικά και ιταλικά." },
        ],
      },
      {
        textEl:
          "Το ni ενώνει αρνητικά στοιχεία. Μετά το ρήμα: no + ρήμα + (ni) ... ni .... Πριν από το ρήμα: ni ... ni + ρήμα καταφατικό. Με πάνω από δύο στοιχεία, το ni μπαίνει πριν από το καθένα.",
        examples: [
          { es: "No hablo ni inglés ni alemán.", el: "Δεν μιλάω ούτε αγγλικά ούτε γερμανικά." },
          { es: "Ni Ana ni Luis quieren venir.", el: "Ούτε η Ana ούτε ο Luis θέλουν να έρθουν." },
          { es: "Ni Eva, ni Marta ni Pablo saben conducir.", el: "Ούτε η Eva, ούτε η Marta ούτε ο Pablo ξέρουν να οδηγούν." },
        ],
      },
      {
        textEl:
          "Όταν ενώνουμε δύο υποκείμενα με y, το ρήμα μπαίνει στον πληθυντικό. Με ρήματα όπως gustar επαναλαμβάνουμε το a: a Sonia y a Rafa.",
        examples: [
          { es: "Ana y Luis son médicos.", el: "Η Ana και ο Luis είναι γιατροί." },
          { es: "A Marta y a mí nos gusta el cine.", el: "Στη Marta και σε μένα αρέσει ο κινηματογράφος." },
        ],
      },
      {
        textEl: "Το o ενώνει εναλλακτικές ή δείχνει προσέγγιση («ή»). Γίνεται u πριν από λέξη που αρχίζει από o- ή ho-.",
        examples: [
          { es: "¿Quieres té o café?", el: "Θέλεις τσάι ή καφέ;" },
          { es: "Hay seis u ocho personas.", el: "Υπάρχουν έξι ή οκτώ άτομα." },
        ],
      },
      {
        textEl: "Το pero ενώνει αντίθετες ιδέες («αλλά»). Συνήθως χωρίζεται από την προηγούμενη φράση με κόμμα ή παύση.",
        examples: [
          { es: "Es caro, pero muy bueno.", el: "Είναι ακριβό, αλλά πολύ καλό." },
          { es: "Trabajo mucho, pero me divierto.", el: "Δουλεύω πολύ, αλλά διασκεδάζω." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι τέσσερις σύνδεσμοι",
        headers: ["Conjunción", "Σημασία", "Ejemplo"],
        rows: [
          ["y / e", "και (καταφατικά)", "pan y queso"],
          ["ni ... ni", "ούτε ... ούτε", "ni pan ni queso"],
          ["o / u", "ή", "té o café"],
          ["pero", "αλλά", "barato, pero malo"],
        ],
      },
      {
        titleEl: "Αλλαγές για την ευφωνία",
        headers: ["Conjunción", "Cambio", "Ejemplo"],
        rows: [
          ["y", "e delante de i- / hi-", "padre e hijo"],
          ["o", "u delante de o- / ho-", "siete u ocho"],
        ],
      },
    ],
    tipsEl: [
      "Στο ni η άρνηση μένει και στο ρήμα όταν τα στοιχεία έπονται: «No hablo ni inglés ni francés». Αν προηγούνται του ρήματος, δεν βάζεις no: «Ni Ana ni Luis hablan inglés».",
      "Το y γίνεται e και το o γίνεται u, ώστε να μη συναντιούνται δύο ίδιοι ήχοι: «Marta e Inés», «siete u ocho». Στα ελληνικά δεν υπάρχει κάτι αντίστοιχο. Εξαίρεση: πριν από hie- μένει y («agua y hielo»).",
      "Το ελληνικό «αλλά» και «μα» αντιστοιχεί στο pero. Βάζε κόμμα πριν από το pero όταν ενώνει δύο ιδέες που αντιτίθενται.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi hermana habla español ___ italiano.", hintEl: "Η αδερφή μου μιλά ισπανικά και ιταλικά.", answer: "e", explainEl: "Το italiano αρχίζει από i-, άρα το y γίνεται e." },
      { type: "cloze", id: "d2", textEs: "Hoy vienen siete ___ ocho amigos.", hintEl: "Σήμερα έρχονται επτά ή οκτώ φίλοι.", answer: "u", explainEl: "Το ocho αρχίζει από o-, άρα το o γίνεται u." },
      { type: "cloze", id: "d3", textEs: "No tengo hermanos ___ hermanas.", hintEl: "Δεν έχω ούτε αδερφούς ούτε αδερφές.", answer: "ni" },
      { type: "cloze", id: "d4", textEs: "Quiero un café, ___ no tengo dinero.", hintEl: "Θέλω έναν καφέ, αλλά δεν έχω χρήματα.", answer: "pero" },
      { type: "cloze", id: "d5", textEs: "¿Prefieres vivir en la ciudad ___ en el campo?", hintEl: "Προτιμάς να ζεις στην πόλη ή στην εξοχή;", answer: "o" },
      { type: "cloze", id: "d6", textEs: "___ Marta ni Pablo saben conducir.", hintEl: "Ούτε η Marta ούτε ο Pablo ξέρουν να οδηγούν.", answer: "Ni" },
      { type: "choice", id: "d7", promptEs: "Madre ___ hija viven en Lima.", promptEl: "Μητέρα και κόρη ζουν στη Λίμα.", options: ["y", "e", "o", "u"], answer: "e" },
      { type: "choice", id: "d8", promptEs: "No me gusta el té ___ el café.", promptEl: "Δεν μου αρέσει ούτε το τσάι ούτε ο καφές.", options: ["ni", "y", "pero"], answer: "ni" },
      { type: "choice", id: "d9", promptEs: "¿Cuál es la frase correcta?", options: ["Ni Ana ni Luis no quieren venir.", "Ni Ana ni Luis quieren venir.", "No Ana ni Luis quieren venir."], answer: "Ni Ana ni Luis quieren venir.", explainEl: "Όταν το ni ... ni μπαίνει πριν από το ρήμα, το ρήμα είναι καταφατικό και δεν παίρνει no." },
      { type: "choice", id: "d10", promptEs: "A Marta ___ a mí nos gusta el cine.", promptEl: "Στη Marta και σε μένα αρέσει ο κινηματογράφος.", options: ["y", "e", "pero"], answer: "y", explainEl: "Το a mí δεν αρχίζει από i-, άρα μένει y." },
      { type: "order", id: "d11", promptEl: "Ο Pedro είναι έξυπνος αλλά τεμπέλης.", solution: ["Pedro", "es", "inteligente,", "pero", "vago."], distractors: ["y", "ni"] },
      { type: "order", id: "d12", promptEl: "Ούτε η Ana ούτε ο Luis μιλούν γαλλικά.", solution: ["Ni", "Ana", "ni", "Luis", "hablan", "francés."], alternatives: [["No", "hablan", "francés", "ni", "Ana", "ni", "Luis."]], distractors: ["no", "y"] },
    ],
    exercisesEl: [
      "Ένωσε τις προτάσεις με y/e, ni ή ni ... ni, κάνοντας τις απαραίτητες αλλαγές.",
      "Συμπλήρωσε τις προτάσεις με o/u ή y/e.",
      "Ένωσε τα ζεύγη προτάσεων με το pero.",
      "Ένωσε προτάσεις για μια παρέα φίλων με y/e, ni, ni ... ni ή pero.",
    ],
  },
  {
    id: "u94",
    number: 94,
    page: 198,
    titleEs: "Preposiciones (1)",
    titleEl: "Προθέσεις (1): χρόνος",
    introEl:
      "Οι προθέσεις a, por, en, de, desde, hasta, durante, antes de, después de και dentro de δείχνουν χρονικές σχέσεις. Μαθαίνεις ποια πρόθεση ταιριάζει με ώρες, μέρη της ημέρας, μήνες, εποχές και χρονικά διαστήματα.",
    rules: [
      {
        textEl: "Με ώρες χρησιμοποιούμε a: a las cinco, a mediodía, a medianoche.",
        examples: [
          { es: "La clase empieza a las nueve.", el: "Το μάθημα αρχίζει στις εννέα." },
          { es: "Salgo a mediodía.", el: "Φεύγω το μεσημέρι." },
        ],
      },
      {
        textEl:
          "Με μέρη της ημέρας χρησιμοποιούμε por: por la mañana, por la tarde, por la noche. Λέμε όμως de noche, de día, de madrugada και a las siete de la mañana.",
        examples: [
          { es: "Estudio por la tarde.", el: "Διαβάζω το απόγευμα." },
          { es: "Mi padre trabaja de noche.", el: "Ο πατέρας μου δουλεύει τη νύχτα." },
          { es: "El tren sale a las seis de la mañana.", el: "Το τρένο φεύγει στις έξι το πρωί." },
        ],
      },
      {
        textEl:
          "Με μήνες, εποχές, έτη και περιόδους όπως Navidad, Semana Santa ή vacaciones χρησιμοποιούμε en. Στις πλήρεις ημερομηνίες χρησιμοποιούμε de.",
        examples: [
          { es: "Mi cumpleaños es en marzo.", el: "Τα γενέθλιά μου είναι τον Μάρτιο." },
          { es: "Nos vemos en Navidad.", el: "Θα τα πούμε τα Χριστούγεννα." },
          { es: "Nací el 5 de mayo de 1990.", el: "Γεννήθηκα στις 5 Μαΐου 1990." },
        ],
      },
      {
        textEl:
          "Το hasta δείχνει το τελικό σημείο και το desde το αρχικό σημείο. Μαζί: de ... a ή desde ... hasta. Το hasta χρησιμοποιείται και στους αποχαιρετισμούς. Με de ... a οι ώρες συχνά μπαίνουν χωρίς άρθρο (de nueve a cinco), αλλά και de las nueve a las cinco.",
        examples: [
          { es: "Trabajo hasta las ocho. No como carne desde enero.", el: "Δουλεύω μέχρι τις οκτώ. Δεν τρώω κρέας από τον Ιανουάριο." },
          { es: "El museo abre de lunes a sábado, de diez a dos.", el: "Το μουσείο ανοίγει από Δευτέρα ως Σάββατο, από τις δέκα ως τις δύο." },
          { es: "¡Hasta mañana!", el: "Τα λέμε αύριο!" },
        ],
      },
      {
        textEl: "Τα durante, antes de και después de δείχνουν διάρκεια, πριν και μετά.",
        examples: [
          { es: "Durante el verano trabajo en un hotel.", el: "Το καλοκαίρι δουλεύω σε ένα ξενοδοχείο." },
          { es: "Después de comer duermo la siesta.", el: "Μετά το φαγητό κοιμάμαι μεσημεριανό ύπνο." },
        ],
      },
      {
        textEl: "Το dentro de + χρονικό διάστημα δείχνει σε πόσο καιρό από τώρα θα γίνει κάτι στο μέλλον.",
        examples: [
          { es: "Te llamo dentro de diez minutos.", el: "Θα σε πάρω τηλέφωνο σε δέκα λεπτά." },
          { es: "Mi hermana llega dentro de dos días.", el: "Η αδερφή μου φτάνει σε δύο μέρες." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Προθέσεις χρόνου",
        headers: ["Preposición", "Se usa con", "Ejemplo"],
        rows: [
          ["a", "horas, mediodía, medianoche", "a las ocho, a mediodía"],
          ["por", "partes del día", "por la mañana, por la tarde, por la noche"],
          ["de", "noche, día, madrugada; fechas", "de noche, de madrugada, el 3 de mayo"],
          ["en", "meses, estaciones, años, Navidad, Semana Santa", "en mayo, en verano, en 2020"],
          ["hasta", "momento final", "hasta las ocho"],
          ["desde", "momento inicial", "desde las ocho"],
          ["de ... a / desde ... hasta", "inicio y final", "de lunes a viernes"],
          ["durante", "duración", "durante la clase"],
          ["antes de / después de", "antes y después", "antes de la cena, después de la cena"],
          ["dentro de", "plazo en el futuro", "dentro de dos días"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά οι χρονικές εκφράσεις παίρνουν συνήθως «σε» ή απλώς άρθρο (στις πέντε, τον Μάρτιο, το 2010, το πρωί). Στα ισπανικά κάθε έκφραση έχει τη δική της πρόθεση: a las cinco, en marzo, en 2010, por la mañana.",
      "Το hasta δείχνει πού τελειώνει κάτι («μέχρι») και το desde πού αρχίζει («από τότε που»). «Hasta mañana» σημαίνει «τα λέμε αύριο».",
      "Το dentro de + διάστημα δείχνει πότε θα γίνει κάτι στο μέλλον: «Vuelvo dentro de cinco minutos» σημαίνει «γυρίζω σε πέντε λεπτά». Μην το μπερδεύεις με το durante, που δείχνει διάρκεια.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "La película empieza ___ las nueve.", promptEl: "Η ταινία αρχίζει στις εννέα.", options: ["a", "en", "por", "de"], answer: "a" },
      { type: "choice", id: "d2", promptEs: "Mi cumpleaños es ___ marzo.", promptEl: "Τα γενέθλιά μου είναι τον Μάρτιο.", options: ["a", "en", "por", "desde"], answer: "en" },
      { type: "choice", id: "d3", promptEs: "Prefiero estudiar ___ la mañana.", promptEl: "Προτιμώ να διαβάζω το πρωί.", options: ["por", "en", "a", "hasta"], answer: "por" },
      { type: "choice", id: "d4", promptEs: "Adiós, ¡___ mañana!", promptEl: "Αντίο, τα λέμε αύριο!", options: ["Hasta", "Desde", "Durante", "Dentro de"], answer: "Hasta" },
      { type: "cloze", id: "d5", textEs: "Vivo en Sevilla ___ 2018.", hintEl: "Ζω στη Σεβίλλη από το 2018.", answer: "desde" },
      { type: "cloze", id: "d6", textEs: "Hoy trabajo ___ las seis de la tarde.", hintEl: "Σήμερα δουλεύω μέχρι τις έξι το απόγευμα.", answer: "hasta" },
      { type: "cloze", id: "d7", textEs: "La tienda abre ___ lunes a sábado.", hintEl: "Το κατάστημα ανοίγει από Δευτέρα ως Σάββατο.", answer: "de" },
      { type: "cloze", id: "d8", textEs: "Te llamo ___ diez minutos, cuando termine.", hintEl: "Θα σε πάρω τηλέφωνο σε δέκα λεπτά, όταν τελειώσω.", answer: "dentro de" },
      { type: "cloze", id: "d9", textEs: "No debes hablar ___ el examen.", hintEl: "Δεν πρέπει να μιλάς κατά τη διάρκεια της εξέτασης.", answer: "durante" },
      { type: "cloze", id: "d10", textEs: "Siempre me lavo las manos ___ comer.", hintEl: "Πάντα πλένω τα χέρια μου πριν φάω.", answer: "antes de" },
      { type: "order", id: "d11", promptEl: "Δουλεύω από τις εννέα ως τις πέντε.", solution: ["Trabajo", "desde", "las", "nueve", "hasta", "las", "cinco."], alternatives: [["Trabajo", "de", "nueve", "a", "cinco."], ["Trabajo", "de", "las", "nueve", "a", "las", "cinco."]], distractors: ["de", "a"], explainEl: "Και το de nueve a cinco (χωρίς άρθρο) είναι σωστό." },
      { type: "order", id: "d12", promptEl: "Το απόγευμα δεν έχω μάθημα.", solution: ["Por", "la", "tarde", "no", "tengo", "clase."], alternatives: [["No", "tengo", "clase", "por", "la", "tarde."]], distractors: ["en", "a"] },
    ],
    exercisesEl: [
      "Ένωσε τις στήλες βάζοντας τις κατάλληλες προθέσεις (a, de, en, por) με τις χρονικές εκφράσεις.",
      "Συμπλήρωσε τις προτάσεις με a, hasta, de, desde ή dentro de.",
      "Συμπλήρωσε τις προτάσεις με de, desde, a, hasta, dentro de, durante και τις εκφράσεις σε παρένθεση.",
      "Συμπλήρωσε τις προτάσεις με antes de, durante ή después de και τις εκφράσεις του πλαισίου.",
    ],
  },
  {
    id: "u95",
    number: 95,
    page: 200,
    titleEs: "Preposiciones (2)",
    titleEl: "Προθέσεις (2): κίνηση και τόπος",
    introEl:
      "Οι προθέσεις a, hacia, hasta, de και desde δείχνουν κίνηση και κατεύθυνση, ενώ οι en, sobre και entre δείχνουν πού βρίσκεται κάτι. Προσοχή: το ελληνικό «σε» αντιστοιχεί άλλοτε στο a και άλλοτε στο en.",
    rules: [
      {
        textEl: "Το a δείχνει προορισμό και απόσταση. Το a + el γίνεται al.",
        examples: [
          { es: "Voy a la biblioteca.", el: "Πηγαίνω στη βιβλιοθήκη." },
          { es: "Esta tarde vamos al mercado.", el: "Σήμερα το απόγευμα πάμε στην αγορά." },
          { es: "El mar está a diez kilómetros.", el: "Η θάλασσα είναι σε δέκα χιλιόμετρα." },
        ],
      },
      {
        textEl: "Το hacia δείχνει κατεύθυνση και το hasta το τελικό σημείο μιας διαδρομής.",
        examples: [
          { es: "Camino hacia el centro.", el: "Περπατάω προς το κέντρο." },
          { es: "Fuimos a pie hasta la plaza.", el: "Πήγαμε με τα πόδια μέχρι την πλατεία." },
        ],
      },
      {
        textEl:
          "Τα de και desde δείχνουν την προέλευση ή το σημείο εκκίνησης. Το de + el γίνεται del. Δεν χρησιμοποιούμε desde όταν μας ενδιαφέρει η προέλευση και όχι η διαδρομή.",
        examples: [
          { es: "Vengo del médico.", el: "Έρχομαι από τον γιατρό." },
          { es: "Han venido desde el aeropuerto en taxi.", el: "Ήρθαν από το αεροδρόμιο με ταξί." },
        ],
      },
      {
        textEl: "Με de / desde ... a / hasta δείχνουμε το αρχικό και το τελικό σημείο μιας διαδρομής.",
        examples: [
          { es: "De mi casa a la estación hay dos kilómetros.", el: "Από το σπίτι μου ως τον σταθμό υπάρχουν δύο χιλιόμετρα." },
          { es: "Desde aquí hasta el mar son tres kilómetros.", el: "Από εδώ ως τη θάλασσα είναι τρία χιλιόμετρα." },
        ],
      },
      {
        textEl:
          "Το en δείχνει γενικά πού βρίσκεται κάτι. Εξαιρέσεις με a: a la derecha, a la izquierda, al norte, al sur, al este, al oeste, al final.",
        examples: [
          { es: "Las llaves están en el cajón.", el: "Τα κλειδιά είναι στο συρτάρι." },
          { es: "Teresa vive en el quinto piso.", el: "Η Teresa μένει στον πέμπτο όροφο." },
          { es: "El banco está a la derecha de la iglesia.", el: "Η τράπεζα είναι δεξιά από την εκκλησία." },
        ],
      },
      {
        textEl: "Το sobre δείχνει θέση πάνω ή πάνω από κάτι. Το entre δείχνει ενδιάμεσο σημείο.",
        examples: [
          { es: "Hay una lámpara sobre la mesa.", el: "Υπάρχει ένα φωτιστικό πάνω στο τραπέζι." },
          { es: "La panadería está entre el banco y el cine.", el: "Ο φούρνος είναι ανάμεσα στην τράπεζα και στον κινηματογράφο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Κίνηση και θέση",
        headers: ["Preposición", "Indica", "Ejemplo"],
        rows: [
          ["a", "destino, distancia", "Voy a Roma."],
          ["hacia", "dirección", "hacia el norte"],
          ["hasta", "punto final", "hasta la plaza"],
          ["de / desde", "origen", "de casa, desde Madrid"],
          ["en", "situación (lugar)", "en la mesa"],
          ["sobre", "encima, por encima", "sobre la mesa"],
          ["entre", "lugar intermedio", "entre el banco y el cine"],
        ],
      },
      {
        titleEl: "Συναιρέσεις",
        headers: ["Preposición + artículo", "Resultado", "Ejemplo"],
        rows: [
          ["a + el", "al", "Voy al cine."],
          ["de + el", "del", "Vengo del cine."],
        ],
      },
    ],
    tipsEl: [
      "Το ελληνικό «σε» έχει δύο όψεις: κίνηση προς κάπου είναι a («πάω στη Μαδρίτη» = voy a Madrid), ενώ θέση είναι en («μένω στη Μαδρίτη» = vivo en Madrid).",
      "Το «από» είναι de (προέλευση) ή desde (αφετηρία διαδρομής). «Είμαι από την Ελλάδα» = soy de Grecia, ποτέ «soy desde».",
      "Δεν λέμε «en la derecha». Λέμε a la derecha, a la izquierda, al norte, al final. Το a + el γίνεται συνήθως al και το de + el γίνεται del.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mañana vamos ___ Granada en tren.", promptEl: "Αύριο πάμε στη Γρανάδα με τρένο.", options: ["a", "en", "de", "sobre"], answer: "a" },
      { type: "choice", id: "d2", promptEs: "Mi tío vive ___ Barcelona.", promptEl: "Ο θείος μου μένει στη Βαρκελώνη.", options: ["en", "a", "hacia", "hasta"], answer: "en", explainEl: "Για θέση χρησιμοποιούμε en, όχι a." },
      { type: "choice", id: "d3", promptEs: "¿___ dónde eres? Soy de Corfú.", promptEl: "Από πού είσαι; Είμαι από την Κέρκυρα.", options: ["De", "A", "En", "Hasta"], answer: "De" },
      { type: "choice", id: "d4", promptEs: "La farmacia está ___ el banco y el supermercado.", promptEl: "Το φαρμακείο είναι ανάμεσα στην τράπεζα και στο σουπερμάρκετ.", options: ["entre", "sobre", "hacia", "hasta"], answer: "entre" },
      { type: "choice", id: "d5", promptEs: "Los aviones vuelan ___ la ciudad.", promptEl: "Τα αεροπλάνα πετούν πάνω από την πόλη.", options: ["sobre", "entre", "hasta", "desde"], answer: "sobre" },
      { type: "cloze", id: "d6", textEs: "Vamos ___ cine esta noche.", hintEl: "Πάμε σινεμά απόψε.", answer: "al", explainEl: "a + el = al." },
      { type: "cloze", id: "d7", textEs: "Vuelvo ___ trabajo a las seis.", hintEl: "Γυρίζω από τη δουλειά στις έξι.", answer: "del", explainEl: "de + el = del." },
      { type: "cloze", id: "d8", textEs: "El baño está ___ la derecha, al final del pasillo.", hintEl: "Η τουαλέτα είναι δεξιά, στο τέλος του διαδρόμου.", answer: "a", explainEl: "Λέμε a la derecha, όχι «en la derecha»." },
      { type: "cloze", id: "d9", textEs: "Mira ___ arriba: hay un pájaro en el árbol.", hintEl: "Κοίτα προς τα πάνω: υπάρχει ένα πουλί στο δέντρο.", answer: "hacia" },
      { type: "cloze", id: "d10", textEs: "Corrimos ___ la parada, pero perdimos el autobús.", hintEl: "Τρέξαμε μέχρι τη στάση, αλλά χάσαμε το λεωφορείο.", answer: "hasta", alternatives: ["a"] },
      { type: "order", id: "d11", promptEl: "Η María μένει στον τρίτο όροφο.", solution: ["María", "vive", "en", "el", "tercer", "piso."], distractors: ["a", "al"] },
      { type: "order", id: "d12", promptEl: "Γυρίζουμε από την παραλία με ποδήλατο.", solution: ["Volvemos", "de", "la", "playa", "en", "bicicleta."], alternatives: [["Volvemos", "desde", "la", "playa", "en", "bicicleta."]], distractors: ["desde", "a"], explainEl: "Και τα δύο de και desde είναι σωστά εδώ." },
    ],
    exercisesEl: [
      "Κύκλωσε τη σωστή πρόθεση σε κάθε πρόταση.",
      "Συμπλήρωσε με a, hacia, hasta, de ή desde (σε μερικές περιπτώσεις υπάρχουν δύο σωστές απαντήσεις).",
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με de, a, sobre, en ή entre.",
    ],
  },
  {
    id: "u96",
    number: 96,
    page: 202,
    titleEs: "Preposiciones (3)",
    titleEl: "Προθέσεις (3): σύνθετες προθέσεις τόπου",
    introEl:
      "Οι σύνθετες προθέσεις encima de, debajo de, dentro de, cerca de κ.ά. δείχνουν πού βρίσκεται ένα πρόσωπο ή πράγμα σε σχέση με ένα άλλο. Τελειώνουν σε de ή a και μετά ακολουθεί ουσιαστικό ή αντωνυμία.",
    rules: [
      {
        textEl:
          "Πολλές προθέσεις τόπου έρχονται σε ζεύγη αντιθέτων: encima de / debajo de, dentro de / fuera de, cerca de / lejos de, delante de / detrás de.",
        examples: [
          { es: "El gato duerme encima del sofá.", el: "Η γάτα κοιμάται πάνω στον καναπέ." },
          { es: "Las zapatillas están debajo de la cama.", el: "Οι παντόφλες είναι κάτω από το κρεβάτι." },
          { es: "Vivimos lejos del centro.", el: "Μένουμε μακριά από το κέντρο." },
        ],
      },
      {
        textEl: "Οι προθέσεις frente a / enfrente de (απέναντι), junto a / al lado de (δίπλα) και alrededor de (γύρω από) έχουν το ίδιο νόημα ανά δύο.",
        examples: [
          { es: "La panadería está frente al parque.", el: "Ο φούρνος είναι απέναντι από το πάρκο." },
          { es: "Hay un banco junto a la escuela.", el: "Υπάρχει ένα παγκάκι δίπλα στο σχολείο." },
          { es: "Los niños bailan alrededor del árbol.", el: "Τα παιδιά χορεύουν γύρω από το δέντρο." },
        ],
      },
      {
        textEl:
          "Μετά την πρόθεση συνήθως ακολουθεί άρθρο ή κτητική. Με αρσενικό ουσιαστικό το de + el γίνεται del και το a + el γίνεται al.",
        examples: [
          { es: "El abrigo está dentro del armario.", el: "Το παλτό είναι μέσα στη ντουλάπα." },
          { es: "Mi casa está enfrente del cine.", el: "Το σπίτι μου είναι απέναντι από το σινεμά." },
        ],
      },
      {
        textEl: "Μετά από αυτές τις προθέσεις μπορεί να ακολουθεί αντωνυμία: mí, ti, usted, él, ella, nosotros, nosotras, vosotros, vosotras, ustedes, ellos, ellas.",
        examples: [
          { es: "Siéntate junto a ella.", el: "Κάτσε δίπλα της." },
          { es: "Hay una cola enorme delante de nosotros.", el: "Υπάρχει τεράστια ουρά μπροστά μας." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Ζεύγη αντιθέτων",
        headers: ["Preposición", "Opuesto", "Ελληνικά"],
        rows: [
          ["encima de", "debajo de", "πάνω από / κάτω από"],
          ["dentro de", "fuera de", "μέσα σε / έξω από"],
          ["cerca de", "lejos de", "κοντά σε / μακριά από"],
          ["delante de", "detrás de", "μπροστά από / πίσω από"],
        ],
      },
      {
        titleEl: "Άλλες προθέσεις τόπου",
        headers: ["Preposición", "Ελληνικά"],
        rows: [
          ["frente a, enfrente de", "απέναντι από"],
          ["junto a, al lado de", "δίπλα σε"],
          ["alrededor de", "γύρω από"],
        ],
      },
      {
        titleEl: "Αντωνυμίες μετά την πρόθεση",
        headers: ["Persona", "Después de la preposición"],
        rows: [
          ["yo", "mí"],
          ["tú", "ti"],
          ["usted, él, ella", "usted, él, ella"],
          ["nosotros / nosotras", "nosotros / nosotras"],
          ["vosotros / vosotras", "vosotros / vosotras"],
          ["ustedes, ellos, ellas", "ustedes, ellos, ellas"],
        ],
      },
    ],
    tipsEl: [
      "Το «πάνω από το τραπέζι» είναι encima de la mesa: χρειάζεται το de και μετά το άρθρο. Ποτέ «encima mesa». Με αρσενικό: encima del sofá.",
      "Μετά από πρόθεση λέμε mí και ti, όχι yo και tú: «detrás de mí», «junto a ti». Το mí έχει τόνο, ενώ το mi (δικός μου) δεν έχει: «detrás de mi casa».",
      "Το dentro de δείχνει και χρόνο (dentro de dos días, μονάδα 94). Εδώ σημαίνει «μέσα σε» για τόπο: «dentro de la caja».",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi gato duerme ___ la cama.", promptEl: "Η γάτα μου κοιμάται κάτω από το κρεβάτι.", options: ["debajo de", "encima de", "dentro de", "alrededor de"], answer: "debajo de" },
      { type: "choice", id: "d2", promptEs: "Dejé el paraguas ___ casa, en el jardín.", promptEl: "Άφησα την ομπρέλα έξω από το σπίτι, στον κήπο.", options: ["fuera de", "dentro de", "debajo de", "encima de"], answer: "fuera de" },
      { type: "choice", id: "d3", promptEs: "El cine está ___ la farmacia, en la otra acera.", promptEl: "Το σινεμά είναι απέναντι από το φαρμακείο, στο άλλο πεζοδρόμιο.", options: ["enfrente de", "junto a", "dentro de", "detrás de"], answer: "enfrente de" },
      { type: "choice", id: "d4", promptEs: "Siéntate ___ mí, por favor.", promptEl: "Κάτσε δίπλα μου, παρακαλώ.", options: ["junto a", "encima de", "fuera de"], answer: "junto a" },
      { type: "choice", id: "d5", promptEs: "¿Quién está ___ ti?", promptEl: "Ποιος είναι πίσω σου;", options: ["detrás de", "dentro de", "alrededor de"], answer: "detrás de", explainEl: "Μετά από πρόθεση λέμε ti, όχι tú." },
      { type: "cloze", id: "d6", textEs: "Hay un parque ___ la escuela.", hintEl: "Υπάρχει ένα πάρκο κοντά στο σχολείο.", answer: "cerca de" },
      { type: "cloze", id: "d7", textEs: "Vivo ___ centro: necesito el coche para todo.", hintEl: "Μένω μακριά από το κέντρο: χρειάζομαι αυτοκίνητο για όλα.", answer: "lejos del", explainEl: "de + el = del." },
      { type: "cloze", id: "d8", textEs: "Los niños juegan ___ la fuente.", hintEl: "Τα παιδιά παίζουν γύρω από το σιντριβάνι.", answer: "alrededor de" },
      { type: "cloze", id: "d9", textEs: "Las tijeras están ___ cajón de la cocina.", hintEl: "Το ψαλίδι είναι μέσα στο συρτάρι της κουζίνας.", answer: "dentro del", explainEl: "de + el = del." },
      { type: "cloze", id: "d10", textEs: "Hay una cola enorme ___ nosotros.", hintEl: "Υπάρχει τεράστια ουρά μπροστά μας.", answer: "delante de" },
      { type: "order", id: "d11", promptEl: "Υπάρχει ένας κινηματογράφος απέναντι από το πάρκο.", solution: ["Hay", "un", "cine", "frente", "al", "parque."], alternatives: [["Hay", "un", "cine", "enfrente", "del", "parque."], ["Frente", "al", "parque", "hay", "un", "cine."], ["Enfrente", "del", "parque", "hay", "un", "cine."]], distractors: ["enfrente", "del", "dentro"] },
      { type: "order", id: "d12", promptEl: "Μην αφήνεις τίποτα πάνω στην καρέκλα.", solution: ["No", "dejes", "nada", "encima", "de", "la", "silla."], distractors: ["debajo", "del"] },
    ],
    exercisesEl: [
      "Δες τις εικόνες και συμπλήρωσε τις προτάσεις με τις προθέσεις του πρώτου πλαισίου και τα ουσιαστικά του δεύτερου, προσέχοντας τα άρθρα.",
      "Συμπλήρωσε τις προτάσεις με τις προθέσεις του πλαισίου.",
      "Βάλε τις λέξεις στη σωστή σειρά για να σχηματίσεις προτάσεις, προσέχοντας τα άρθρα.",
    ],
  },
];
