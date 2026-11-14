import type { GuPractice } from "@/types/content";

/** Interactive practice per numbered exercise, units 85 to 96. */
export const guPractice085To096: Record<number, GuPractice> = {
  // Adverbios de tiempo (1)
  85: {
    tags: { d1: 1, d2: 1, d3: 1, d4: 4, d5: 3, d6: 3, d7: 3, d8: 4, d9: 4, d10: 2, d11: 2, d12: 2 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "Hoy es miércoles. El martes fui al dentista. Fui al dentista ___.", promptEl: "Σήμερα είναι Τετάρτη. Την Τρίτη πήγα στον οδοντίατρο. Πήγα στον οδοντίατρο ___.", options: ["ayer", "anteayer", "mañana", "pasado mañana"], answer: "ayer" },
      { type: "cloze", id: "x2", exercise: 1, textEs: "Hoy es sábado. ___ fue jueves.", hintEl: "Σήμερα είναι Σάββατο. Προχθές ήταν Πέμπτη.", answer: "Anteayer", alternatives: ["Antes de ayer"] },
      { type: "order", id: "x3", exercise: 2, promptEl: "Τώρα διαβάζω και μετά βλέπω μια σειρά.", solution: ["Ahora", "estudio", "y", "luego", "veo", "una", "serie."], alternatives: [["Ahora", "estudio", "y", "después", "veo", "una", "serie."]], distractors: ["después", "ayer"] },
      { type: "order", id: "x4", exercise: 2, promptEl: "Προχθές η αδερφή μου έφτασε αργά στο μάθημα.", solution: ["Anteayer", "mi", "hermana", "llegó", "tarde", "a", "clase."], alternatives: [["Mi", "hermana", "llegó", "tarde", "a", "clase", "anteayer."], ["Mi", "hermana", "anteayer", "llegó", "tarde", "a", "clase."]], distractors: ["temprano", "llegas"] },
      { type: "choice", id: "x5", exercise: 3, promptEs: "Mi padre se levanta ___ todos los días: a las cinco de la mañana.", promptEl: "Ο πατέρας μου ξυπνάει νωρίς κάθε μέρα: στις πέντε το πρωί.", options: ["temprano", "tarde", "luego"], answer: "temprano" },
      { type: "choice", id: "x6", exercise: 3, promptEs: "Primero compramos el pan y ___ vamos al parque.", promptEl: "Πρώτα αγοράζουμε ψωμί και μετά πάμε στο πάρκο.", options: ["luego", "anteayer", "tarde"], answer: "luego" },
      { type: "cloze", id: "x7", exercise: 4, textEs: "Voy a llegar un poco ___ a la cita: hay mucho tráfico.", hintEl: "Θα φτάσω λίγο αργά στο ραντεβού: έχει πολλή κίνηση.", answer: "tarde" },
      { type: "cloze", id: "x8", exercise: 4, textEs: "No tengas prisa: la comida estará lista ___.", hintEl: "Μη βιάζεσαι: το φαγητό θα είναι έτοιμο σύντομα.", answer: "pronto" },
    ],
  },

  // Adverbios de tiempo (2): ya, todavía
  86: {
    tags: { d1: 1, d2: 1, d8: 1, d5: 2, d9: 2, d12: 2, d3: 3, d4: 3, d6: 3, d7: 3, d10: 4, d11: 4 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "Mis padres ___ viven en el pueblo. Se mudaron a la ciudad el año pasado.", promptEl: "Οι γονείς μου δεν μένουν πια στο χωριό. Μετακόμισαν στην πόλη πέρυσι.", options: ["todavía", "ya no", "todavía no"], answer: "ya no", explainEl: "Κάτι που ίσχυε πριν δεν ισχύει πια, άρα ya no." },
      { type: "cloze", id: "x2", exercise: 2, textEs: "Mi abuelo ___ juega al ajedrez los domingos. Tiene noventa años y nunca falta.", hintEl: "Ο παππούς μου παίζει ακόμα σκάκι τις Κυριακές. Είναι ενενήντα χρονών και δεν λείπει ποτέ.", answer: "todavía", alternatives: ["aún"] },
      { type: "cloze", id: "x3", exercise: 2, textEs: "Compré un coche y por eso ___ uso la bicicleta.", hintEl: "Αγόρασα αυτοκίνητο και γι' αυτό δεν χρησιμοποιώ πια το ποδήλατο.", answer: "ya no" },
      { type: "cloze", id: "x4", exercise: 3, textEs: "¿Ha llegado el paquete? No, ___ ha llegado.", hintEl: "Έφτασε το δέμα; Όχι, δεν έχει φτάσει ακόμα.", answer: "todavía no", alternatives: ["aún no"] },
      { type: "order", id: "x5", exercise: 4, promptEl: "Δεν έχω πάρει ακόμα τηλέφωνο τη μητέρα μου.", solution: ["Todavía", "no", "he", "llamado", "a", "mi", "madre."], alternatives: [["No", "he", "llamado", "a", "mi", "madre", "todavía."], ["No", "he", "llamado", "todavía", "a", "mi", "madre."]], distractors: ["ya", "llamo"] },
      { type: "order", id: "x6", exercise: 4, promptEl: "Έχουμε ήδη κλείσει το τραπέζι.", solution: ["Ya", "hemos", "reservado", "la", "mesa."], alternatives: [["Hemos", "reservado", "ya", "la", "mesa."], ["Hemos", "reservado", "la", "mesa", "ya."]], distractors: ["todavía", "reservamos"] },
    ],
  },

  // Adverbios y expresiones de frecuencia
  87: {
    tags: { d1: 4, d2: 1, d3: 4, d4: 1, d5: 1, d6: 4, d7: 2, d8: 4, d9: 3, d10: 2, d11: 2, d12: 2 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Mis abuelos comen en casa de mi madre ___ los domingos.", hintEl: "Οι παππούδες μου τρώνε στο σπίτι της μητέρας μου κάθε Κυριακή.", answer: "todos", explainEl: "Το domingo είναι αρσενικό: todos los domingos." },
      { type: "cloze", id: "x2", exercise: 1, textEs: "Voy andando al trabajo casi siempre, pero ___ tomo el autobús.", hintEl: "Πηγαίνω στη δουλειά σχεδόν πάντα με τα πόδια, αλλά μερικές φορές παίρνω το λεωφορείο.", answer: "a veces", alternatives: ["de vez en cuando"] },
      { type: "order", id: "x3", exercise: 2, promptEl: "Σχεδόν ποτέ δεν τρώω γλυκά.", solution: ["Casi", "nunca", "como", "dulces."], distractors: ["siempre", "comes"] },
      { type: "choice", id: "x4", exercise: 3, promptEs: "¿Qué orden va de más a menos frecuente?", promptEl: "Ποια σειρά πηγαίνει από το πιο συχνό στο λιγότερο συχνό;", options: ["siempre, a menudo, a veces, nunca", "nunca, a veces, a menudo, siempre", "a veces, siempre, nunca, a menudo"], answer: "siempre, a menudo, a veces, nunca" },
      { type: "choice", id: "x5", exercise: 3, promptEs: "¿Qué expresión indica la frecuencia más alta?", promptEl: "Ποια έκφραση δείχνει την υψηλότερη συχνότητα;", options: ["a veces", "casi siempre", "casi nunca", "de vez en cuando"], answer: "casi siempre" },
      { type: "choice", id: "x6", exercise: 3, promptEs: "¿Qué expresión va entre «normalmente» y «a veces» en la escala?", promptEl: "Ποια έκφραση μπαίνει στη σκάλα ανάμεσα στο «normalmente» και στο «a veces»;", options: ["a menudo", "siempre", "nunca", "casi nunca"], answer: "a menudo" },
      { type: "cloze", id: "x7", exercise: 3, textEs: "De más a menos frecuente: siempre, normalmente, a menudo, ___, casi nunca, nunca.", hintEl: "Από το πιο συχνό στο λιγότερο συχνό: πάντα, συνήθως, συχνά, μερικές φορές, σχεδόν ποτέ, ποτέ.", answer: "a veces", alternatives: ["de vez en cuando"] },
      { type: "cloze", id: "x8", exercise: 4, textEs: "Mi tío viaja en enero y en julio. Viaja ___ veces al año.", hintEl: "Ο θείος μου ταξιδεύει τον Ιανουάριο και τον Ιούλιο. Ταξιδεύει δύο φορές τον χρόνο.", answer: "dos" },
    ],
  },

  // Adverbios de cantidad
  88: {
    tags: { d1: 5, d2: 5, d3: 4, d4: 3, d5: 2, d6: 3, d7: 1, d8: 1, d9: 1, d10: 3, d11: 2, d12: 2 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "Esta sopa está ___ salada. ¡No puedo comerla!", promptEl: "Αυτή η σούπα είναι υπερβολικά αλμυρή. Δεν μπορώ να τη φάω!", options: ["demasiado", "un poco", "nada"], answer: "demasiado", explainEl: "Το demasiado δείχνει περισσότερο απ' όσο πρέπει." },
      { type: "order", id: "x2", exercise: 2, promptEl: "Το νερό είναι λίγο κρύο.", solution: ["El", "agua", "está", "un", "poco", "fría."], distractors: ["muy", "poca"] },
      { type: "cloze", id: "x3", exercise: 3, textEs: "Mi tía viaja ___: ha visitado más de cincuenta países.", hintEl: "Η θεία μου ταξιδεύει πολύ: έχει επισκεφθεί πάνω από πενήντα χώρες.", answer: "mucho" },
      { type: "cloze", id: "x4", exercise: 4, textEs: "La playa está ___ (+++) llena hoy.", hintEl: "Η παραλία είναι πολύ γεμάτη σήμερα.", answer: "muy" },
      { type: "cloze", id: "x5", exercise: 4, textEs: "Esta calle es ___ (-) tranquila: siempre hay mucho tráfico.", hintEl: "Αυτός ο δρόμος δεν είναι αρκετά ήσυχος: έχει πάντα πολλή κίνηση.", answer: "poco" },
      { type: "cloze", id: "x6", exercise: 4, textEs: "Esta película no es ___ (- -) divertida.", hintEl: "Αυτή η ταινία δεν είναι καθόλου διασκεδαστική.", answer: "nada" },
      { type: "cloze", id: "x7", exercise: 4, textEs: "Estoy ___ (+) cansada, pero puedo seguir.", hintEl: "Είμαι λίγο κουρασμένη, αλλά μπορώ να συνεχίσω.", answer: "un poco", explainEl: "Το un poco έχει ήπιο, θετικό νόημα." },
      { type: "choice", id: "x8", exercise: 5, promptEs: "Los niños juegan ___ en el parque.", promptEl: "Τα παιδιά παίζουν πολύ στο πάρκο.", options: ["mucho", "muy", "muchos"], answer: "mucho", explainEl: "Με ρήμα (juegan) λέμε mucho, όχι muy." },
      { type: "order", id: "x9", exercise: 5, promptEl: "Ο θείος μου περπατά πολύ γρήγορα.", solution: ["Mi", "tío", "camina", "muy", "rápido."], distractors: ["mucho", "rápida"], explainEl: "Πριν από επίρρημα (rápido) λέμε muy." },
    ],
  },

  // Adverbios de modo
  89: {
    tags: { d1: 1, d2: 1, d3: 1, d4: 2, d5: 2, d12: 2, d11: 3, d6: 4, d7: 4, d8: 4, d9: 4, d10: 5 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Voy ___ (directo) a casa después del trabajo.", hintEl: "Πηγαίνω κατευθείαν σπίτι μετά τη δουλειά.", answer: "directamente", alternatives: ["directo"] },
      { type: "cloze", id: "x2", exercise: 2, textEs: "Mi abuelo conduce muy ___: siempre va a cuarenta por hora.", hintEl: "Ο παππούς μου οδηγεί πολύ αργά: πάντα πηγαίνει με σαράντα την ώρα.", answer: "despacio", alternatives: ["lento", "lentamente"] },
      { type: "order", id: "x3", exercise: 3, promptEl: "Η Marta μιλά ευγενικά στους πελάτες.", solution: ["Marta", "habla", "amablemente", "a", "los", "clientes."], alternatives: [["Marta", "habla", "a", "los", "clientes", "amablemente."]], distractors: ["amable", "bien"] },
      { type: "order", id: "x4", exercise: 3, promptEl: "Η Eva ανοίγει την πόρτα αθόρυβα.", solution: ["Eva", "abre", "la", "puerta", "silenciosamente."], alternatives: [["Eva", "abre", "silenciosamente", "la", "puerta."], ["Silenciosamente", "Eva", "abre", "la", "puerta."]], distractors: ["silenciosa", "bajo"] },
      { type: "cloze", id: "x5", exercise: 3, textEs: "Los niños cantan ___ (con alegría) en el patio.", hintEl: "Τα παιδιά τραγουδούν χαρούμενα στην αυλή.", answer: "alegremente" },
      { type: "choice", id: "x6", exercise: 4, promptEs: "Esas chicas son muy ___.", promptEl: "Αυτές οι κοπέλες είναι πολύ γρήγορες.", options: ["rápidas", "rápido", "rápida"], answer: "rápidas", explainEl: "Μετά το ser χρειάζεται επίθετο που συμφωνεί με το υποκείμενο: rápidas." },
      { type: "cloze", id: "x7", exercise: 5, textEs: "Mi abuela me habló cariñosa y ___ (paciente).", hintEl: "Η γιαγιά μου μου μίλησε τρυφερά και υπομονετικά.", answer: "pacientemente", explainEl: "Μόνο το τελευταίο επίρρημα παίρνει -mente." },
      { type: "cloze", id: "x8", exercise: 5, textEs: "Los bomberos trabajaron rápida y ___ (eficaz).", hintEl: "Οι πυροσβέστες δούλεψαν γρήγορα και αποτελεσματικά.", answer: "eficazmente" },
      { type: "order", id: "x9", exercise: 5, promptEl: "Η Lucía κάνει τα μαθήματα προσεκτικά και αργά.", solution: ["Lucía", "hace", "los", "deberes", "cuidadosa", "y", "lentamente."], alternatives: [["Lucía", "hace", "los", "deberes", "lenta", "y", "cuidadosamente."]], distractors: ["cuidadosamente", "lenta"], explainEl: "Μόνο το τελευταίο επίρρημα παίρνει -mente." },
    ],
  },

  // Comparación de adverbios
  90: {
    tags: { d1: 1, d2: 1, d7: 1, d6: 2, d8: 2, d11: 2, d3: 3, d4: 3, d5: 3, d9: 4, d10: 4, d12: 4 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "Hoy me siento ___ que ayer: ya no tengo fiebre.", promptEl: "Σήμερα νιώθω καλύτερα από χθες: δεν έχω πια πυρετό.", options: ["mejor", "más bien", "tan bien"], answer: "mejor", explainEl: "Ο συγκριτικός του bien είναι mejor." },
      { type: "cloze", id: "x2", exercise: 2, textEs: "Elena escribe ___ (-) deprisa que su hermano.", hintEl: "Η Elena γράφει λιγότερο γρήγορα από τον αδερφό της.", answer: "menos" },
      { type: "cloze", id: "x3", exercise: 2, textEs: "Mis padres se levantan ___ (=) temprano como yo.", hintEl: "Οι γονείς μου ξυπνούν τόσο νωρίς όσο εγώ.", answer: "tan" },
      { type: "cloze", id: "x4", exercise: 3, textEs: "No sé jugar al tenis. Juego ___ que mi hermano, que es campeón.", hintEl: "Δεν ξέρω να παίζω τένις. Παίζω χειρότερα από τον αδερφό μου, που είναι πρωταθλητής.", answer: "peor", explainEl: "Ο συγκριτικός του mal είναι peor." },
      { type: "order", id: "x5", exercise: 4, promptEl: "Ο Pedro δεν μιλά τόσο δυνατά όσο η αδερφή του.", solution: ["Pedro", "no", "habla", "tan", "alto", "como", "su", "hermana."], distractors: ["más", "tanto"] },
      { type: "choice", id: "x6", exercise: 4, promptEs: "¿Cuál es la frase correcta?", promptEl: "Η γιαγιά μου δεν περπατά τόσο γρήγορα όσο εγώ.", options: ["Mi abuela no camina tan deprisa como yo.", "Mi abuela no camina tan deprisa como mí.", "Mi abuela no camina tanto deprisa que yo."], answer: "Mi abuela no camina tan deprisa como yo." },
    ],
  },

  // Adverbios de negación
  91: {
    tags: { d1: 1, d2: 1, d11: 1, d4: 2, d7: 2, d8: 2, d6: 3, d10: 3, d3: 4, d5: 4, d9: 4, d12: 4 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Mi hermano ___ come carne. Es vegetariano.", hintEl: "Ο αδερφός μου δεν τρώει κρέας. Είναι χορτοφάγος.", answer: "no", alternatives: ["nunca"] },
      { type: "order", id: "x2", exercise: 1, promptEl: "Η γιαγιά μου δεν έχει κινητό.", solution: ["Mi", "abuela", "no", "tiene", "móvil."], distractors: ["nada", "nunca"] },
      { type: "choice", id: "x3", exercise: 2, promptEs: "¿Qué has comprado? ___, no tenía dinero.", promptEl: "Τι αγόρασες; Τίποτα, δεν είχα χρήματα.", options: ["Nada", "Nadie", "Nunca"], answer: "Nada" },
      { type: "choice", id: "x4", exercise: 3, promptEs: "¿Cuál es la frase correcta?", promptEl: "Δεν βλέπω τίποτα στο σκοτάδι.", options: ["No veo nada en la oscuridad.", "Nada no veo en la oscuridad.", "No veo nadie en la oscuridad."], answer: "No veo nada en la oscuridad." },
      { type: "order", id: "x5", exercise: 3, promptEl: "Κανείς δεν ήρθε στο πάρτι σου.", solution: ["Nadie", "vino", "a", "tu", "fiesta."], distractors: ["nada", "vine"] },
      { type: "order", id: "x6", exercise: 4, promptEl: "Δεν πίνω ποτέ καφέ το βράδυ.", solution: ["No", "bebo", "nunca", "café", "por", "la", "noche."], alternatives: [["No", "bebo", "café", "nunca", "por", "la", "noche."], ["No", "bebo", "café", "por", "la", "noche", "nunca."]], distractors: ["nadie", "nada"] },
    ],
  },

  // Expresar coincidencia o no coincidencia
  92: {
    tags: { d1: 1, d2: 1, d10: 1, d3: 2, d4: 2, d8: 2, d9: 2, d5: 3, d6: 3, d7: 3, d11: 4, d12: 4 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Nunca he estado en Japón. Mis amigos ___.", hintEl: "Δεν έχω πάει ποτέ στην Ιαπωνία. Ούτε οι φίλοι μου.", answer: "tampoco", explainEl: "Το nunca είναι αρνητικό, άρα διαλέγουμε tampoco." },
      { type: "choice", id: "x2", exercise: 2, promptEs: "Estoy muy contento con mi trabajo. Pues yo ___: mi jefe es horrible.", promptEl: "Είμαι πολύ ευχαριστημένος με τη δουλειά μου. Εγώ όχι: ο προϊστάμενός μου είναι απαίσιος.", options: ["no", "sí", "también", "tampoco"], answer: "no" },
      { type: "cloze", id: "x3", exercise: 3, textEs: "Ana: No me gusta la música clásica. Luis: A mí ___, la escucho mucho.", hintEl: "Ana: Δεν μου αρέσει η κλασική μουσική. Luis: Εμένα ναι, την ακούω πολύ.", answer: "sí" },
      { type: "order", id: "x4", exercise: 4, promptEl: "Εμένα ναι, αλλά στον Pablo όχι.", solution: ["A", "mí", "sí,", "pero", "a", "Pablo", "no."], alternatives: [["A", "Pablo", "no,", "pero", "a", "mí", "sí."]], distractors: ["también", "tampoco"] },
      { type: "order", id: "x5", exercise: 4, promptEl: "Εμείς ναι, αλλά εκείνοι όχι.", solution: ["Nosotros", "sí,", "pero", "ellos", "no."], alternatives: [["Ellos", "no,", "pero", "nosotros", "sí."]], distractors: ["también", "tampoco"] },
      { type: "choice", id: "x6", exercise: 4, promptEs: "¿Os gusta el invierno? A mí sí, pero a mi hermano ___.", promptEl: "Σας αρέσει ο χειμώνας; Εμένα ναι, αλλά στον αδερφό μου όχι.", options: ["no", "sí", "también", "tampoco"], answer: "no" },
    ],
  },

  // Conjunciones
  93: {
    tags: { d3: 1, d6: 1, d8: 1, d1: 2, d2: 2, d5: 2, d7: 2, d4: 3, d11: 3, d9: 4, d10: 4, d12: 4 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "En el taller hay padres ___ hijos.", hintEl: "Στο εργαστήριο υπάρχουν γονείς και παιδιά.", answer: "e", explainEl: "Το hijos αρχίζει από hi-, άρα το y γίνεται e." },
      { type: "order", id: "x2", exercise: 1, promptEl: "Δεν έχω ούτε χρόνο ούτε χρήματα ούτε όρεξη.", solution: ["No", "tengo", "ni", "tiempo,", "ni", "dinero", "ni", "ganas."], distractors: ["y", "nada"] },
      { type: "cloze", id: "x3", exercise: 2, textEs: "Vamos de vacaciones en septiembre ___ octubre.", hintEl: "Πάμε διακοπές τον Σεπτέμβριο ή τον Οκτώβριο.", answer: "u", explainEl: "Το octubre αρχίζει από o-, άρα το o γίνεται u." },
      { type: "cloze", id: "x4", exercise: 3, textEs: "Me gusta la casa, ___ es demasiado pequeña.", hintEl: "Μου αρέσει το σπίτι, αλλά είναι πολύ μικρό.", answer: "pero" },
      { type: "order", id: "x5", exercise: 3, promptEl: "Θέλω ένα καινούριο κινητό αλλά δεν έχω χρήματα.", solution: ["Quiero", "un", "móvil", "nuevo,", "pero", "no", "tengo", "dinero."], distractors: ["ni", "y"] },
      { type: "choice", id: "x6", exercise: 4, promptEs: "Irene ___ Isabel son amigas desde niñas.", promptEl: "Η Irene και η Isabel είναι φίλες από μικρές.", options: ["e", "y", "o", "u"], answer: "e", explainEl: "Το Isabel αρχίζει από i-, άρα το y γίνεται e." },
    ],
  },

  // Preposiciones (1): tiempo
  94: {
    tags: { d1: 1, d2: 1, d3: 1, d12: 1, d5: 2, d6: 2, d8: 2, d7: 3, d11: 3, d4: 3, d9: 4, d10: 4 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Mis padres se casaron ___ 1995.", hintEl: "Οι γονείς μου παντρεύτηκαν το 1995.", answer: "en" },
      { type: "cloze", id: "x2", exercise: 2, textEs: "El concierto termina ___ las once de la noche.", hintEl: "Η συναυλία τελειώνει στις έντεκα το βράδυ.", answer: "a", explainEl: "Με ώρες λέμε a las..." },
      { type: "cloze", id: "x3", exercise: 2, textEs: "No veo a mi hermana ___ el verano pasado.", hintEl: "Δεν έχω δει την αδερφή μου από το περασμένο καλοκαίρι.", answer: "desde" },
      { type: "choice", id: "x4", exercise: 3, promptEs: "Ahora son las ocho. El tren sale a las diez, así que sale ___ dos horas.", promptEl: "Τώρα είναι οκτώ. Το τρένο φεύγει στις δέκα, άρα φεύγει σε δύο ώρες.", options: ["dentro de", "durante", "desde", "hasta"], answer: "dentro de" },
      { type: "cloze", id: "x5", exercise: 4, textEs: "Mis abuelos duermen la siesta ___ comer.", hintEl: "Οι παππούδες μου κοιμούνται μεσημεριανό ύπνο μετά το φαγητό.", answer: "después de" },
      { type: "choice", id: "x6", exercise: 4, promptEs: "Mi madre no tiene tiempo libre ___ la semana: trabaja de lunes a viernes.", promptEl: "Η μητέρα μου δεν έχει ελεύθερο χρόνο κατά τη διάρκεια της εβδομάδας: δουλεύει από Δευτέρα ως Παρασκευή.", options: ["durante", "antes de", "después de"], answer: "durante" },
    ],
  },

  // Preposiciones (2): movimiento y lugar
  95: {
    tags: { d1: 1, d2: 1, d3: 1, d6: 1, d7: 2, d9: 2, d10: 2, d12: 2, d4: 3, d5: 3, d8: 3, d11: 3 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "Esta noche cenamos ___ casa de mis padres.", promptEl: "Απόψε τρώμε στο σπίτι των γονιών μου.", options: ["en", "a", "de", "hasta"], answer: "en", explainEl: "Για θέση χρησιμοποιούμε en: cenamos en casa de mis padres." },
      { type: "cloze", id: "x2", exercise: 2, textEs: "Mi casa está ___ diez minutos del centro.", hintEl: "Το σπίτι μου είναι σε δέκα λεπτά από το κέντρο.", answer: "a", explainEl: "Η απόσταση δηλώνεται με a." },
      { type: "cloze", id: "x3", exercise: 3, textEs: "La pelota está ___ el sofá y la pared.", hintEl: "Η μπάλα είναι ανάμεσα στον καναπέ και στον τοίχο.", answer: "entre" },
    ],
  },

  // Preposiciones (3): locuciones de lugar
  96: {
    tags: { d6: 1, d7: 1, d8: 1, d9: 1, d10: 1, d1: 2, d2: 2, d3: 2, d4: 2, d5: 2, d11: 3, d12: 3 },
    extra: [
      { type: "order", id: "x1", exercise: 3, promptEl: "Το ποδήλατο είναι πίσω από το γκαράζ.", solution: ["La", "bici", "está", "detrás", "del", "garaje."], alternatives: [["Detrás", "del", "garaje", "está", "la", "bici."]], distractors: ["de", "delante"], explainEl: "Με αρσενικό ουσιαστικό: de + el = del." },
      { type: "order", id: "x2", exercise: 3, promptEl: "Το νοσοκομείο είναι κοντά στο πάρκο.", solution: ["El", "hospital", "está", "cerca", "del", "parque."], alternatives: [["Cerca", "del", "parque", "está", "el", "hospital."]], distractors: ["de", "lejos"] },
      { type: "order", id: "x3", exercise: 3, promptEl: "Ο σκύλος τρέχει γύρω μου.", solution: ["El", "perro", "corre", "alrededor", "de", "mí."], alternatives: [["Alrededor", "de", "mí", "corre", "el", "perro."]], distractors: ["mi", "del"], explainEl: "Μετά από πρόθεση λέμε mí, με τόνο." },
    ],
  },
};
