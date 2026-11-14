import type { GuPractice } from "@/types/content";

/** Interactive practice per numbered exercise, units 1 to 12. */
export const guPractice001To012: Record<number, GuPractice> = {
  // Unidad 1: masculino, femenino (personas)
  1: {
    tags: { d1: 2, d2: 2, d3: 2, d4: 2, d5: 3, d6: 2, d7: 2, d8: 1, d9: 1, d10: 3, d11: 3, d12: 3 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "El cocinero se llama Raúl y ___ camarera se llama Sara.", hintEl: "Ο μάγειρας λέγεται Raúl και η σερβιτόρα λέγεται Sara.", answer: "la" },
      { type: "choice", id: "x2", exercise: 1, promptEs: "Lucía es ___ modelo de la agencia.", promptEl: "Η Lucía είναι το μοντέλο του πρακτορείου.", options: ["el", "la", "los"], answer: "la", explainEl: "Το modelo έχει την ίδια μορφή στα δύο γένη. Το γένος φαίνεται από το άρθρο." },
      { type: "cloze", id: "x3", exercise: 1, textEs: "La paciente de la habitación 1 se llama Eva y ___ paciente de la habitación 2 se llama Iván.", hintEl: "Η ασθενής του δωματίου 1 λέγεται Eva και ο ασθενής του δωματίου 2 λέγεται Iván.", answer: "el", explainEl: "Το paciente δεν αλλάζει: el paciente, la paciente." },
      { type: "choice", id: "x4", exercise: 1, promptEs: "En la foto, ___ joven de la camiseta roja es mi hermano.", promptEl: "Στη φωτογραφία, ο νεαρός με το κόκκινο μπλουζάκι είναι ο αδερφός μου.", options: ["el", "la", "los"], answer: "el", explainEl: "Το joven είναι ίδιο στα δύο γένη. Το άρθρο δείχνει το γένος." },
      { type: "cloze", id: "x5", exercise: 3, textEs: "El padre de mi padre es mi ___.", hintEl: "Ο πατέρας του πατέρα μου είναι ο παππούς μου.", answer: "abuelo" },
      { type: "cloze", id: "x6", exercise: 3, textEs: "La hija de mi tío es mi ___.", hintEl: "Η κόρη του θείου μου είναι η ξαδέρφη μου.", answer: "prima" },
    ],
  },

  // Unidad 2: masculino, femenino (cosas)
  2: {
    tags: { d1: 2, d2: 4, d3: 4, d4: 4, d5: 4, d6: 1, d7: 3, d8: 3, d9: 2, d10: 2, d11: 2, d12: 1 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "La puerta está cerrada, pero ___ ventana está abierta.", hintEl: "Η πόρτα είναι κλειστή, αλλά το παράθυρο είναι ανοιχτό.", answer: "la" },
      { type: "choice", id: "x2", exercise: 1, promptEs: "Al lado de la lámpara está ___ teléfono.", promptEl: "Δίπλα στη λάμπα είναι το τηλέφωνο.", options: ["el", "la", "las"], answer: "el" },
      { type: "order", id: "x3", exercise: 1, promptEl: "Το ρολόι είναι πάνω στην ντουλάπα.", solution: ["El", "reloj", "está", "encima", "del", "armario."], distractors: ["la", "de"], alternatives: [["Encima", "del", "armario", "está", "el", "reloj."]] },
      { type: "choice", id: "x4", exercise: 2, promptEs: "¿Qué grupo tiene solo palabras masculinas?", promptEl: "Ποια ομάδα έχει μόνο αρσενικές λέξεις;", options: ["pan, hotel, color", "pan, sal, color", "hotel, luz, color", "lápiz, flor, color"], answer: "pan, hotel, color", explainEl: "Η sal, η luz και η flor είναι θηλυκά, παρά το ότι τελειώνουν σε σύμφωνο." },
      { type: "cloze", id: "x5", exercise: 3, textEs: "El caballo y la ___ comen hierba en el campo.", hintEl: "Το άλογο και η φοράδα τρώνε χορτάρι στο χωράφι.", answer: "yegua" },
      { type: "cloze", id: "x6", exercise: 3, textEs: "El león y la ___ viven en la sabana.", hintEl: "Το λιοντάρι και η λέαινα ζουν στη σαβάνα.", answer: "leona" },
      { type: "choice", id: "x7", exercise: 3, promptEs: "¿Qué pareja de animales es correcta?", promptEl: "Ποιο ζευγάρι ζώων είναι σωστό;", options: ["el gato, la gata", "el toro, la yegua", "el gallo, la vaca", "el caballo, la gallina"], answer: "el gato, la gata" },
      { type: "cloze", id: "x8", exercise: 4, textEs: "Pon ___ sal en la sopa, por favor.", hintEl: "Βάλε το αλάτι στη σούπα, παρακαλώ.", answer: "la", explainEl: "Το sal είναι θηλυκό: la sal." },
    ],
  },

  // Unidad 3: singular, plural
  3: {
    tags: { d1: 1, d2: 1, d3: 1, d4: 2, d5: 2, d6: 1, d7: 3, d8: 3, d9: 4, d10: 4, d11: 2, d12: 3 },
    extra: [
      { type: "choice", id: "x1", exercise: 1, promptEs: "En el aeropuerto hay muchos ___.", promptEl: "Στο αεροδρόμιο υπάρχουν πολλά αεροπλάνα.", options: ["aviones", "avións", "avion", "avioneses"], answer: "aviones", explainEl: "Οι λέξεις σε -ón χάνουν τον τόνο στον πληθυντικό: avión, aviones." },
      { type: "cloze", id: "x2", exercise: 2, textEs: "En la estación hay cinco ___ (tren).", hintEl: "Στον σταθμό υπάρχουν πέντε τρένα.", answer: "trenes", explainEl: "Οι λέξεις που τελειώνουν σε σύμφωνο παίρνουν -es: tren, trenes." },
      { type: "order", id: "x3", exercise: 2, promptEl: "Στο δωμάτιο υπάρχουν τρεις καρέκλες.", solution: ["En", "la", "habitación", "hay", "tres", "sillas."], distractors: ["silla", "tiene"], alternatives: [["Hay", "tres", "sillas", "en", "la", "habitación."]] },
      { type: "cloze", id: "x4", exercise: 3, textEs: "Mi hermano lleva unos ___ (pantalón) negros.", hintEl: "Ο αδερφός μου φοράει ένα μαύρο παντελόνι.", answer: "pantalones", explainEl: "Το pantalones χρησιμοποιείται συνήθως στον πληθυντικό." },
      { type: "choice", id: "x5", exercise: 3, promptEs: "Los ___ voy a la playa con mis primos.", promptEl: "Τα Σάββατα πηγαίνω στην παραλία με τους ξαδέρφους μου.", options: ["sábados", "sábado", "sábadoes"], answer: "sábados", explainEl: "Τα sábado και domingo παίρνουν -s στον πληθυντικό." },
      { type: "cloze", id: "x6", exercise: 4, textEs: "Mi vecino y mi vecina son muy simpáticos: mis ___ son muy simpáticos.", hintEl: "Ο γείτονάς μου και η γειτόνισσά μου είναι πολύ συμπαθητικοί: οι γείτονές μου είναι πολύ συμπαθητικοί.", answer: "vecinos", explainEl: "Αρσενικό και θηλυκό μαζί δίνουν αρσενικό πληθυντικό." },
      { type: "choice", id: "x7", exercise: 4, promptEs: "Mi abuelo y mi abuela viven en un pueblo: mis ___ viven en un pueblo.", promptEl: "Ο παππούς μου και η γιαγιά μου μένουν σε ένα χωριό: οι παππούδες μου μένουν σε ένα χωριό.", options: ["abuelos", "abuelas", "abuelo", "abueles"], answer: "abuelos" },
      { type: "order", id: "x8", exercise: 4, promptEl: "Οι ξάδερφοί μου (αγόρια και κορίτσια) μένουν στη Σεβίλλη.", solution: ["Mis", "primos", "viven", "en", "Sevilla."], distractors: ["primas", "vive"], alternatives: [["En", "Sevilla", "viven", "mis", "primos."]] },
    ],
  },

  // Unidad 4: el artículo indefinido
  4: {
    tags: { d1: 1, d2: 1, d3: 4, d4: 4, d5: 3, d6: 2, d7: 2, d8: 3, d9: 1, d10: 4, d11: 1, d12: 3 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Hay ___ niños jugando en el parque.", hintEl: "Υπάρχουν μερικά παιδιά που παίζουν στο πάρκο.", answer: "unos", alternatives: ["algunos"] },
      { type: "choice", id: "x2", exercise: 2, promptEs: "¿Qué es eso? Es ___ paraguas.", promptEl: "Τι είναι αυτό; Είναι μια ομπρέλα.", options: ["un", "una", "unos", "unas"], answer: "un", explainEl: "Το paraguas είναι αρσενικό: un paraguas." },
      { type: "choice", id: "x3", exercise: 2, promptEs: "¿Quién es Laura? Es ___ cantante.", promptEl: "Ποια είναι η Laura; Είναι μια τραγουδίστρια.", options: ["una", "un", "unas", "unos"], answer: "una", explainEl: "Το cantante δεν αλλάζει. Η Laura είναι γυναίκα, άρα una." },
      { type: "order", id: "x4", exercise: 2, promptEl: "Είναι ένας πολύ μακρύς ποταμός.", solution: ["Es", "un", "río", "muy", "largo."], distractors: ["una", "unos"] },
      { type: "cloze", id: "x5", exercise: 3, textEs: "En la mesa hay ___ naranja, dos plátanos y unas uvas.", hintEl: "Στο τραπέζι υπάρχει ένα πορτοκάλι, δύο μπανάνες και μερικά σταφύλια.", answer: "una" },
      { type: "order", id: "x6", exercise: 3, promptEl: "Στο κουτί υπάρχει ένα ρολόι και ένα ζευγάρι γάντια.", solution: ["En", "la", "caja", "hay", "un", "reloj", "y", "unos", "guantes."], distractors: ["una", "unas"], alternatives: [["Hay", "un", "reloj", "y", "unos", "guantes", "en", "la", "caja."]] },
      { type: "cloze", id: "x7", exercise: 4, textEs: "Mi casa está a ___ cinco kilómetros del centro.", hintEl: "Το σπίτι μου απέχει περίπου πέντε χιλιόμετρα από το κέντρο.", answer: "unos", explainEl: "Unos, unas + αριθμός = περίπου." },
      { type: "choice", id: "x8", exercise: 4, promptEs: "Para mi madre compro ___ flores amarillas.", promptEl: "Για τη μητέρα μου αγοράζω μερικά κίτρινα λουλούδια.", options: ["unas", "unos", "una", "un"], answer: "unas" },
    ],
  },

  // Unidad 5: ausencia de artículo
  5: {
    tags: { d1: 1, d2: 2, d3: 2, d4: 2, d5: 2, d6: 3, d7: 2, d8: 3, d9: 3, d10: 2, d11: 3, d12: 3 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Pablo trabaja en un restaurante y sirve la comida a los clientes: es ___.", hintEl: "Ο Pablo δουλεύει σε ένα εστιατόριο και σερβίρει το φαγητό στους πελάτες: είναι σερβιτόρος.", answer: "camarero", explainEl: "Μετά το ser, χωρίς επίθετο, το επάγγελμα δεν παίρνει άρθρο." },
      { type: "cloze", id: "x2", exercise: 1, textEs: "Rosa trabaja en una escuela y enseña a los niños: es ___.", hintEl: "Η Rosa δουλεύει σε ένα σχολείο και διδάσκει τα παιδιά: είναι δασκάλα.", answer: "profesora", alternatives: ["maestra"] },
      { type: "order", id: "x3", exercise: 1, promptEl: "Η θεία μου είναι νοσοκόμα.", solution: ["Mi", "tía", "es", "enfermera."], distractors: ["enfermero", "mis"] },
    ],
  },

  // Unidad 6: el artículo definido
  6: {
    tags: { d1: 2, d2: 4, d3: 4, d4: 1, d5: 1, d6: 3, d7: 4, d8: 4, d9: 3, d10: 3, d11: 1, d12: 4 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "___ ventanas de mi habitación son pequeñas.", hintEl: "Τα παράθυρα του δωματίου μου είναι μικρά.", answer: "Las" },
      { type: "choice", id: "x2", exercise: 1, promptEs: "___ lápices están en la caja.", promptEl: "Τα μολύβια είναι στο κουτί.", options: ["Los", "Las", "El", "La"], answer: "Los", explainEl: "Το lápiz είναι αρσενικό, άρα στον πληθυντικό λέμε los lápices." },
      { type: "cloze", id: "x3", exercise: 2, textEs: "___ madre de mi padre es mi abuela.", hintEl: "Η μητέρα του πατέρα μου είναι η γιαγιά μου.", answer: "La" },
      { type: "cloze", id: "x4", exercise: 2, textEs: "___ marido de mi tía Carmen se llama Rafael.", hintEl: "Ο σύζυγος της θείας μου Carmen λέγεται Rafael.", answer: "El" },
      { type: "choice", id: "x5", exercise: 2, promptEs: "Mi hermana tiene dos hijas. ___ hijas de mi hermana se llaman Eva y Rosa.", promptEl: "Η αδερφή μου έχει δύο κόρες. Οι κόρες της αδερφής μου λέγονται Eva και Rosa.", options: ["Las", "Los", "La", "El"], answer: "Las" },
      { type: "order", id: "x6", exercise: 2, promptEl: "Οι γονείς της μητέρας μου είναι οι παππούδες μου.", solution: ["Los", "padres", "de", "mi", "madre", "son", "mis", "abuelos."], distractors: ["las", "del"] },
      { type: "cloze", id: "x7", exercise: 3, textEs: "___ Tierra gira alrededor del Sol.", hintEl: "Η Γη γυρίζει γύρω από τον Ήλιο.", answer: "La" },
      { type: "cloze", id: "x8", exercise: 3, textEs: "Tenemos un gato y un pez. ___ pez es rojo.", hintEl: "Έχουμε έναν γάτο και ένα ψάρι. Το ψάρι είναι κόκκινο.", answer: "El", explainEl: "Το ψάρι αναφέρθηκε ήδη, άρα βάζουμε el." },
    ],
  },

  // Unidad 7: artículo indefinido o definido
  7: {
    tags: { d1: 1, d2: 1, d3: 2, d4: 2, d5: 1, d6: 2, d7: 2, d8: 2, d9: 1, d10: 1, d11: 3, d12: 3 },
    extra: [
      { type: "cloze", id: "x1", exercise: 3, textEs: "Me encanta ___ helado de fresa, pero hoy prefiero un zumo.", hintEl: "Λατρεύω το παγωτό φράουλα, αλλά σήμερα προτιμώ έναν χυμό.", answer: "el", explainEl: "Με το encantar, για κάτι που μας αρέσει γενικά, βάζουμε οριστικό άρθρο: el helado." },
      { type: "cloze", id: "x2", exercise: 3, textEs: "¿Tienes ___ bolígrafo? Es que el mío no funciona.", hintEl: "Έχεις ένα στυλό; Το δικό μου δεν δουλεύει.", answer: "un" },
      { type: "choice", id: "x3", exercise: 3, promptEs: "Quiero comprar ___ coche, pero todavía no sé cuál.", promptEl: "Θέλω να αγοράσω ένα αυτοκίνητο, αλλά ακόμα δεν ξέρω ποιο.", options: ["un", "el", "una", "unos"], answer: "un", explainEl: "Δεν έχουμε ακόμα συγκεκριμένο αυτοκίνητο στο μυαλό μας, άρα ένα οποιοδήποτε: un coche." },
    ],
  },

  // Unidad 8: el artículo definido con nombres propios
  8: {
    tags: { d1: 1, d2: 1, d3: 3, d4: 2, d5: 2, d6: 4, d7: 4, d8: 4, d9: 2, d10: 2, d11: 3, d12: 1 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Mi médico se llama Moreno. Hoy tengo cita con ___ doctor Moreno.", hintEl: "Ο γιατρός μου λέγεται Moreno. Σήμερα έχω ραντεβού με τον γιατρό Moreno.", answer: "el", explainEl: "Μιλάμε ΓΙΑ τον γιατρό, άρα βάζουμε άρθρο: el doctor Moreno." },
      { type: "choice", id: "x2", exercise: 1, promptEs: "Mi vecino se llama ___ Antonio.", promptEl: "Ο γείτονάς μου λέγεται κύριος Antonio (με σεβασμό).", options: ["don", "el don", "doña", "la doña"], answer: "don", explainEl: "Το don και το doña δεν παίρνουν ποτέ άρθρο." },
      { type: "cloze", id: "x3", exercise: 2, textEs: "Mi oficina está en ___ avenida de América.", hintEl: "Το γραφείο μου είναι στη λεωφόρο América.", answer: "la" },
      { type: "cloze", id: "x4", exercise: 3, textEs: "Mi primo vive en ___ Salvador, un país de Centroamérica.", hintEl: "Ο ξάδερφός μου μένει στο Ελ Σαλβαδόρ, μια χώρα της Κεντρικής Αμερικής.", answer: "El", explainEl: "Στο El Salvador το άρθρο είναι μέρος του ονόματος." },
      { type: "cloze", id: "x5", exercise: 3, textEs: "___ Amazonas es un río muy largo de América del Sur.", hintEl: "Ο Αμαζόνιος είναι ένας πολύ μακρύς ποταμός της Νότιας Αμερικής.", answer: "El", explainEl: "Τα ποτάμια παίρνουν άρθρο." },
      { type: "order", id: "x6", exercise: 3, promptEl: "Τα Κανάρια νησιά βρίσκονται στον Ατλαντικό.", solution: ["Las", "Canarias", "están", "en", "el", "Atlántico."], distractors: ["Los", "del"], alternatives: [["En", "el", "Atlántico", "están", "las", "Canarias."]] },
      { type: "choice", id: "x7", exercise: 4, promptEs: "Mi tía vive en ___.", promptEl: "Η θεία μου μένει στο Μπουένος Άιρες.", options: ["Buenos Aires", "la Buenos Aires", "los Buenos Aires"], answer: "Buenos Aires", explainEl: "Οι πόλεις δεν παίρνουν άρθρο." },
      { type: "choice", id: "x8", exercise: 4, promptEs: "¿Qué frase es correcta?", promptEl: "Ο Τάγος περνά από το Τολέδο.", options: ["El Tajo pasa por Toledo.", "Tajo pasa por Toledo.", "La Tajo pasa por Toledo."], answer: "El Tajo pasa por Toledo.", explainEl: "Τα ποτάμια παίρνουν άρθρο: el Tajo." },
    ],
  },

  // Unidad 9: el artículo definido con expresiones de tiempo
  9: {
    tags: { d1: 1, d2: 1, d3: 1, d4: 2, d5: 2, d6: 2, d7: 3, d8: 3, d9: 4, d10: 4, d11: 3, d12: 2 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "Son ___ diez menos cuarto.", hintEl: "Είναι δέκα παρά τέταρτο.", answer: "las" },
      { type: "order", id: "x2", exercise: 1, promptEl: "Η ταινία ξεκινά στις επτά και μισή.", solution: ["La", "película", "empieza", "a", "las", "siete", "y", "media."], distractors: ["el", "son"], alternatives: [["A", "las", "siete", "y", "media", "empieza", "la", "película."]] },
      { type: "choice", id: "x3", exercise: 2, promptEs: "___ domingos voy a casa de mis abuelos.", promptEl: "Τις Κυριακές πηγαίνω στο σπίτι των παππούδων μου.", options: ["Los", "El", "Las", "En"], answer: "Los", explainEl: "Συνήθεια (κάθε Κυριακή): los domingos." },
      { type: "cloze", id: "x4", exercise: 3, textEs: "La fiesta de Marta es ___ quince de junio.", hintEl: "Το πάρτι της Marta είναι στις 15 Ιουνίου.", answer: "el" },
      { type: "order", id: "x5", exercise: 3, promptEl: "Η εξέταση είναι στις πέντε Δεκεμβρίου.", solution: ["El", "examen", "es", "el", "cinco", "de", "diciembre."], distractors: ["en", "los"] },
      { type: "cloze", id: "x6", exercise: 4, textEs: "Mi hermana trabaja por ___ mañana y estudia por la tarde.", hintEl: "Η αδερφή μου δουλεύει το πρωί και μελετάει το απόγευμα.", answer: "la" },
      { type: "cloze", id: "x7", exercise: 4, textEs: "Mi autobús sale ___ las siete y diez.", hintEl: "Το λεωφορείο μου φεύγει στις επτά και δέκα.", answer: "a", explainEl: "Για την ώρα λέμε a la una, a las dos, a las siete." },
      { type: "choice", id: "x8", exercise: 4, promptEs: "Estudio ___ noche, después de cenar.", promptEl: "Μελετώ το βράδυ, μετά το δείπνο.", options: ["por la", "de la", "en", "por"], answer: "por la", explainEl: "Για τα μέρη της ημέρας λέμε por la mañana, por la tarde, por la noche." },
    ],
  },

  // Unidad 10: otros usos del artículo definido
  10: {
    tags: { d1: 1, d2: 1, d3: 2, d4: 1, d5: 2, d6: 2, d7: 2, d8: 3, d9: 3, d10: 3, d11: 1, d12: 1 },
    extra: [
      { type: "choice", id: "x1", exercise: 2, promptEs: "Mi prima estudia ___ en la universidad.", promptEl: "Η ξαδέρφη μου σπουδάζει Ιατρική στο πανεπιστήμιο.", options: ["Medicina", "la Medicina", "una Medicina"], answer: "Medicina", explainEl: "Μετά το estudiar, το μάθημα δεν παίρνει άρθρο." },
      { type: "cloze", id: "x2", exercise: 3, textEs: "Mi madre vuelve ___ trabajo a las seis.", hintEl: "Η μητέρα μου γυρίζει από τη δουλειά στις έξι.", answer: "del", explainEl: "de + el γίνεται del." },
      { type: "choice", id: "x3", exercise: 3, promptEs: "Voy ___ Correos para enviar un paquete.", promptEl: "Πάω στο ταχυδρομείο για να στείλω ένα δέμα.", options: ["a", "al", "a la"], answer: "a", explainEl: "Το Correos δεν παίρνει άρθρο: ir a Correos." },
    ],
  },

  // Unidad 11: omisión del nombre
  11: {
    tags: { d1: 1, d2: 1, d3: 1, d4: 1, d5: 1, d6: 2, d7: 2, d8: 3, d9: 3, d10: 3, d11: 2, d12: 3 },
    extra: [
      { type: "cloze", id: "x1", exercise: 2, textEs: "Esta falda es de lana y ___ de la derecha es de algodón.", hintEl: "Αυτή η φούστα είναι μάλλινη και η φούστα στα δεξιά είναι βαμβακερή.", answer: "la", explainEl: "Το άρθρο συμφωνεί με το falda, που είναι θηλυκό." },
      { type: "cloze", id: "x2", exercise: 2, textEs: "Mis gafas son negras y ___ de Pablo son verdes.", hintEl: "Τα γυαλιά μου είναι μαύρα και τα γυαλιά του Pablo είναι πράσινα.", answer: "las", explainEl: "Το άρθρο συμφωνεί με το gafas, που είναι θηλυκό πληθυντικού." },
      { type: "cloze", id: "x3", exercise: 3, textEs: "Me gustan los pasteles de fresa, pero prefiero los ___ chocolate.", hintEl: "Μου αρέσουν τα γλυκά με φράουλα, αλλά προτιμώ αυτά με σοκολάτα.", answer: "de" },
    ],
  },

  // Unidad 12: demostrativos
  12: {
    tags: { d1: 1, d2: 1, d3: 2, d4: 2, d5: 3, d6: 4, d7: 4, d8: 1, d9: 2, d10: 1, d11: 3, d12: 2 },
    extra: [
      { type: "cloze", id: "x1", exercise: 1, textEs: "¿Ves ___ edificio tan alto, muy lejos de nosotros?", hintEl: "Βλέπεις εκείνο το τόσο ψηλό κτίριο, πολύ μακριά από εμάς;", answer: "aquel", alternatives: ["ese"], explainEl: "Μακριά και από τους δύο: aquel." },
      { type: "choice", id: "x2", exercise: 2, promptEs: "Mira, ___ camisa que llevo puesta es nueva.", promptEl: "Κοίτα, αυτό το πουκάμισο που φοράω είναι καινούριο.", options: ["esta", "esa", "aquella", "este"], answer: "esta" },
      { type: "cloze", id: "x3", exercise: 3, textEs: "___ verano vamos a Galicia.", hintEl: "Αυτό το καλοκαίρι πάμε στη Γαλικία.", answer: "Este" },
      { type: "cloze", id: "x4", exercise: 3, textEs: "No trabajo ___ fin de semana: voy a la playa.", hintEl: "Δεν δουλεύω αυτό το Σαββατοκύριακο: πάω στην παραλία.", answer: "este" },
      { type: "choice", id: "x5", exercise: 3, promptEs: "En 2015 viví en Londres. En ___ año aprendí inglés.", promptEl: "Το 2015 έζησα στο Λονδίνο. Εκείνη τη χρονιά έμαθα αγγλικά.", options: ["aquel", "este", "aquella", "esta"], answer: "aquel", explainEl: "Για μια παρελθοντική περίοδο, μακριά από το σήμερα, λέμε aquel." },
      { type: "choice", id: "x6", exercise: 4, promptEs: "Ana, ¿qué es ___ que tienes en la mano?", promptEl: "Ana, τι είναι αυτό που έχεις στο χέρι;", options: ["eso", "ese", "esa", "esos"], answer: "eso", explainEl: "Ουδέτερο, κοντά σε αυτόν που ακούει: eso." },
      { type: "cloze", id: "x7", exercise: 4, textEs: "Mira, allí lejos hay algo raro. ¿Qué es ___?", hintEl: "Κοίτα, εκεί μακριά υπάρχει κάτι παράξενο. Τι είναι εκείνο;", answer: "aquello", alternatives: ["eso"] },
      { type: "order", id: "x8", exercise: 4, promptEl: "Συγγνώμη, πόσο κάνει αυτό;", solution: ["Perdone,", "¿cuánto", "cuesta", "esto?"], distractors: ["este", "eso"], alternatives: [["Perdone,", "¿cuánto", "cuesta", "eso?"]] },
    ],
  },
};
