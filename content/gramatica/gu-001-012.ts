import type { GuUnit } from "@/types/content";

export const guUnits001To012: GuUnit[] = [
  // Unidad 1
  {
    id: "u1",
    number: 1,
    page: 12,
    titleEs: "el hijo, la hija. Masculino, femenino (1)",
    titleEl: "Αρσενικό και θηλυκό (1): πρόσωπα",
    introEl:
      "Τα ουσιαστικά που δείχνουν πρόσωπα είναι αρσενικά (el) ή θηλυκά (la). Εδώ μαθαίνεις πώς σχηματίζεται το θηλυκό από το αρσενικό και ποιες λέξεις έχουν την ίδια μορφή και για τα δύο γένη.",
    rules: [
      {
        textEl: "Τα ονόματα προσώπων είναι αρσενικά ή θηλυκά. Ο άντρας παίρνει το άρθρο el και η γυναίκα το άρθρο la.",
        examples: [
          { es: "El hijo de Marta se llama Hugo.", el: "Ο γιος της Marta λέγεται Hugo." },
          { es: "La hija de Marta se llama Eva.", el: "Η κόρη της Marta λέγεται Eva." },
        ],
      },
      {
        textEl: "Αν το αρσενικό τελειώνει σε -o ή -e, το θηλυκό σχηματίζεται με την κατάληξη -a.",
        examples: [
          { es: "Mi vecino es abogado. Mi vecina es abogada.", el: "Ο γείτονάς μου είναι δικηγόρος. Η γειτόνισσά μου είναι δικηγόρος." },
          { es: "el jefe, la jefa", el: "ο προϊστάμενος, η προϊσταμένη" },
        ],
      },
      {
        textEl: "Αν το αρσενικό τελειώνει σε σύμφωνο, προσθέτουμε -a στο θηλυκό. Αν η τελευταία συλλαβή έχει τόνο (-án, -ón, -ín), ο τόνος χάνεται.",
        examples: [
          { es: "el director, la directora", el: "ο διευθυντής, η διευθύντρια" },
          { es: "el campeón, la campeona", el: "ο πρωταθλητής, η πρωταθλήτρια" },
        ],
      },
      {
        textEl: "Οι λέξεις σε -ante και -ista έχουν την ίδια μορφή για άντρα και γυναίκα. Αλλάζει μόνο το άρθρο. Το ίδιο ισχύει για λίγες λέξεις σε -e, -o και σε σύμφωνο.",
        examples: [
          { es: "el dentista, la dentista", el: "ο οδοντίατρος, η οδοντίατρος" },
          { es: "el cantante, la cantante", el: "ο τραγουδιστής, η τραγουδίστρια" },
          { es: "el joven, la joven", el: "ο νέος, η νέα" },
        ],
      },
      {
        textEl: "Μερικά ζευγάρια έχουν ανώμαλο θηλυκό ή εντελώς διαφορετική λέξη για το καθένα από τα δύο γένη. Αυτά τα μαθαίνεις απέξω.",
        examples: [
          { es: "el héroe, la heroína", el: "ο ήρωας, η ηρωίδα" },
          { es: "el emperador, la emperatriz", el: "ο αυτοκράτορας, η αυτοκράτειρα" },
          { es: "el yerno, la nuera", el: "ο γαμπρός, η νύφη (του σπιτιού)" },
        ],
      },
      {
        textEl: "Το γένος φαίνεται και στο άρθρο και στα επίθετα που συνοδεύουν το όνομα: el tío, la tía. Το ίδιο και στις δεικτικές αντωνυμίες.",
        examples: [
          { es: "Mi tío es alto. Mi tía es alta.", el: "Ο θείος μου είναι ψηλός. Η θεία μου είναι ψηλή." },
          { es: "Este chico es mi primo. Esta chica es mi prima.", el: "Αυτό το αγόρι είναι ο ξάδερφός μου. Αυτό το κορίτσι είναι η ξαδέρφη μου." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Από το αρσενικό στο θηλυκό",
        headers: ["Terminación", "Masculino", "Femenino"],
        rows: [
          ["-o, -e", "el niño", "la niña"],
          ["-o, -e", "el cocinero", "la cocinera"],
          ["-o, -e", "el dependiente", "la dependienta"],
          ["consonante", "el profesor", "la profesora"],
          ["consonante", "el bailarín", "la bailarina"],
          ["-ante, -ista", "el estudiante", "la estudiante"],
          ["-ante, -ista", "el taxista", "la taxista"],
          ["otras terminaciones", "el actor", "la actriz"],
          ["otras terminaciones", "el rey", "la reina"],
          ["otras terminaciones", "el príncipe", "la princesa"],
          ["formas diferentes", "el hombre", "la mujer"],
          ["formas diferentes", "el marido", "la mujer"],
          ["formas diferentes", "el padre", "la madre"],
        ],
      },
      {
        titleEl: "Ίδια μορφή στα δύο γένη",
        headers: ["Masculino", "Femenino"],
        rows: [
          ["el piloto", "la piloto"],
          ["el modelo", "la modelo"],
          ["el paciente", "la paciente"],
          ["el joven", "la joven"],
          ["el estudiante", "la estudiante"],
          ["el taxista", "la taxista"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά πολλά επαγγέλματα έχουν μία μορφή για άντρες και γυναίκες (ο/η γιατρός). Στα ισπανικά τα περισσότερα έχουν δύο: el doctor, la doctora.",
      "Η λέξη mujer σημαίνει και «γυναίκα» και «σύζυγος»: mi mujer = η γυναίκα μου. Ο σύζυγος είναι el marido.",
      "Το bailarín χάνει τον τόνο στο θηλυκό: bailarina. Το ίδιο κάνουν όλες οι λέξεις σε -án, -ón, -ín: alemán, alemana.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mi padre es camarero y mi madre es ___.", hintEl: "Ο πατέρας μου είναι σερβιτόρος και η μητέρα μου είναι σερβιτόρα.", answer: "camarera" },
      { type: "cloze", id: "d2", textEs: "El director de la escuela es Luis y la ___ es Marta.", hintEl: "Ο διευθυντής του σχολείου είναι ο Luis και η διευθύντρια είναι η Marta.", answer: "directora" },
      { type: "cloze", id: "d3", textEs: "Mi tío Pedro es bailarín y mi tía Eva es ___.", hintEl: "Ο θείος μου ο Pedro είναι χορευτής και η θεία μου η Eva είναι χορεύτρια.", answer: "bailarina", explainEl: "Στο θηλυκό των λέξεων σε -ín προσθέτουμε -a και χάνεται ο τόνος: bailarín, bailarina." },
      { type: "cloze", id: "d4", textEs: "Mi primo es campeón de tenis y mi prima es ___ de natación.", hintEl: "Ο ξάδερφός μου είναι πρωταθλητής στο τένις και η ξαδέρφη μου είναι πρωταθλήτρια στην κολύμβηση.", answer: "campeona", explainEl: "Και εδώ χάνεται ο τόνος: campeón, campeona." },
      { type: "cloze", id: "d5", textEs: "Mi madre es la ___ de mi padre.", hintEl: "Η μητέρα μου είναι η γυναίκα (σύζυγος) του πατέρα μου.", answer: "mujer", alternatives: ["esposa"], explainEl: "Η λέξη mujer σημαίνει «γυναίκα» και «σύζυγος»." },
      { type: "choice", id: "d6", promptEs: "el rey, la ___", promptEl: "ο βασιλιάς, η ...", options: ["reina", "reya", "rea"], answer: "reina" },
      { type: "choice", id: "d7", promptEs: "el actor, la ___", promptEl: "ο ηθοποιός, η ηθοποιός", options: ["actriz", "actora", "actra", "actris"], answer: "actriz", explainEl: "Ανώμαλο θηλυκό: actor, actriz." },
      { type: "choice", id: "d8", promptEs: "Rosa es una buena ___.", promptEl: "Η Rosa είναι μια καλή οδοντίατρος.", options: ["dentista", "dentisto", "dentistas"], answer: "dentista", explainEl: "Οι λέξεις σε -ista έχουν την ίδια μορφή στα δύο γένη: el dentista, la dentista." },
      { type: "choice", id: "d9", promptEs: "___ pianista es mi vecina.", promptEl: "Η πιανίστρια είναι η γειτόνισσά μου.", options: ["La", "El", "Los"], answer: "La", explainEl: "Το pianista δεν αλλάζει. Το γένος φαίνεται από το άρθρο." },
      { type: "choice", id: "d10", promptEs: "Mi tío es alto y mi tía es ___.", promptEl: "Ο θείος μου είναι ψηλός και η θεία μου είναι ψηλή.", options: ["alta", "alto", "altas"], answer: "alta" },
      { type: "order", id: "d11", promptEl: "Η αδερφή μου είναι δικηγόρος.", solution: ["Mi", "hermana", "es", "abogada."], distractors: ["abogado", "mis"] },
      { type: "order", id: "d12", promptEl: "Ο πατέρας μου είναι ταξιτζής.", solution: ["Mi", "padre", "es", "taxista."], distractors: ["taxisto", "tiene"] },
    ],
    exercisesEl: [
      "Σημείωσε αν κάθε εικόνα δείχνει άντρα ή γυναίκα και συμπλήρωσε με el ή la τις λέξεις του πλαισίου.",
      "Γράψε τον θηλυκό τύπο των ονομάτων.",
      "Κοίταξε το σχέδιο της οικογένειας και συμπλήρωσε τις προτάσεις με τις λέξεις του πλαισίου.",
    ],
  },

  // Unidad 2
  {
    id: "u2",
    number: 2,
    page: 14,
    titleEs: "el libro, la mesa. Masculino, femenino (2)",
    titleEl: "Αρσενικό και θηλυκό (2): πράγματα",
    introEl:
      "Στα ισπανικά κάθε ουσιαστικό, ακόμα και για πράγματα, είναι αρσενικό ή θηλυκό (δεν υπάρχει ουδέτερο). Η κατάληξη βοηθά πολύ, αλλά υπάρχουν εξαιρέσεις που πρέπει να μάθεις.",
    rules: [
      {
        textEl: "Τα ουσιαστικά σε -o είναι συνήθως αρσενικά (el libro, el vaso). Εξαιρέσεις: la mano, la foto, la moto, la radio.",
        examples: [
          { es: "El cuaderno está en la mesa.", el: "Το τετράδιο είναι στο τραπέζι." },
          { es: "La foto de mi familia es muy bonita.", el: "Η φωτογραφία της οικογένειάς μου είναι πολύ όμορφη." },
        ],
      },
      {
        textEl: "Τα ουσιαστικά σε -a είναι συνήθως θηλυκά (la casa, la silla). Εξαιρέσεις: el día, el mapa, el idioma, el programa, el problema.",
        examples: [
          { es: "Tengo un problema con el mapa.", el: "Έχω ένα πρόβλημα με τον χάρτη." },
          { es: "El idioma de Brasil es el portugués.", el: "Η γλώσσα της Βραζιλίας είναι τα πορτογαλικά." },
        ],
      },
      {
        textEl: "Τα ουσιαστικά σε -e ή σε σύμφωνο μπορεί να είναι αρσενικά ή θηλυκά. Τα μαθαίνεις μαζί με το άρθρο τους: el coche, el hotel, el lápiz, la clase, la noche, la flor.",
        examples: [
          { es: "El hotel está cerca del cine.", el: "Το ξενοδοχείο είναι κοντά στον κινηματογράφο." },
          { es: "La clase es muy divertida.", el: "Το μάθημα είναι πολύ διασκεδαστικό." },
        ],
      },
      {
        textEl: "Αρσενικά είναι οι ημέρες της εβδομάδας (el lunes) και οι σύνθετες λέξεις (el paraguas, el cumpleaños). Θηλυκά είναι οι λέξεις σε -ción, -sión (la canción, la televisión) και σε -dad, -tad (la ciudad, la libertad).",
        examples: [
          { es: "El paraguas de Marta es verde.", el: "Η ομπρέλα της Marta είναι πράσινη." },
          { es: "Mi ciudad tiene una estación nueva.", el: "Η πόλη μου έχει έναν καινούριο σταθμό." },
        ],
      },
      {
        textEl: "Μερικά ζώα έχουν ξεχωριστό αρσενικό και θηλυκό (el gato, la gata). Τα περισσότερα έχουν μία μόνο μορφή, για αρσενικό και θηλυκό: el pingüino, la jirafa. Σε περίπτωση αμφιβολίας κοίτα το λεξικό.",
        examples: [
          { es: "La jirafa es muy alta.", el: "Η καμηλοπάρδαλη είναι πολύ ψηλή." },
          { es: "El perro y la perra duermen en el jardín.", el: "Ο σκύλος και η σκύλα κοιμούνται στον κήπο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Καταλήξεις -o και -a και οι εξαιρέσεις τους",
        headers: ["Terminación", "Normalmente", "Excepciones"],
        rows: [
          ["-o", "masculino: el libro, el cuaderno, el vaso, el museo", "la mano, la foto, la moto, la radio"],
          ["-a", "femenino: la casa, la silla, la mesa, la guitarra", "el día, el idioma, el mapa, el programa, el problema"],
        ],
      },
      {
        titleEl: "Λέξεις σε -e ή σε σύμφωνο: πρέπει να τις μάθεις",
        headers: ["Masculino", "Femenino"],
        rows: [
          ["el restaurante", "la clase"],
          ["el coche", "la noche"],
          ["el cine", "la leche"],
          ["el hotel", "la sal"],
          ["el lápiz", "la flor"],
          ["el pan", "la luz"],
          ["el color", "la canción"],
        ],
      },
      {
        titleEl: "Ομάδες με σίγουρο γένος",
        headers: ["Grupo", "Género", "Ejemplos"],
        rows: [
          ["días de la semana", "masculino", "el lunes, el martes"],
          ["nombres compuestos", "masculino", "el paraguas, el cumpleaños"],
          ["-ción, -sión", "femenino", "la canción, la habitación, la televisión"],
          ["-dad, -tad", "femenino", "la ciudad, la universidad, la libertad"],
        ],
      },
      {
        titleEl: "Ζώα με δύο μορφές",
        headers: ["Masculino", "Femenino"],
        rows: [
          ["el gato", "la gata"],
          ["el perro", "la perra"],
          ["el caballo", "la yegua"],
          ["el toro", "la vaca"],
          ["el cerdo", "la cerda"],
          ["el gallo", "la gallina"],
          ["el león", "la leona"],
        ],
      },
    ],
    tipsEl: [
      "Μην προσπαθείς να μαντέψεις το γένος από τα ελληνικά: το día είναι αρσενικό (η μέρα), το pan αρσενικό (το ψωμί), η leche θηλυκό (το γάλα), η sal θηλυκό (το αλάτι), η luz θηλυκό (το φως).",
      "Πολλές λέξεις σε -ma που ήρθαν από τα ελληνικά είναι αρσενικές: el problema, el programa, el idioma, el tema, el sistema. Λέμε el problema, όχι «la problema».",
      "Η foto και η moto είναι θηλυκά, επειδή είναι συντομογραφίες των fotografía και motocicleta. Μάθε κάθε λέξη μαζί με το άρθρο της: el lápiz, la luz.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "___ problema es difícil.", promptEl: "Το πρόβλημα είναι δύσκολο.", options: ["El", "La", "Los"], answer: "El", explainEl: "Οι λέξεις σε -ma από τα ελληνικά είναι συνήθως αρσενικές: el problema." },
      { type: "choice", id: "d2", promptEs: "Me duele ___ mano.", promptEl: "Με πονάει το χέρι.", options: ["la", "el", "los"], answer: "la", explainEl: "Η mano είναι θηλυκό, παρά την κατάληξη -o." },
      { type: "cloze", id: "d3", textEs: "Mañana es ___ cumpleaños de mi hermano.", hintEl: "Αύριο είναι τα γενέθλια του αδερφού μου.", answer: "el", explainEl: "Οι σύνθετες λέξεις όπως cumpleaños και paraguas είναι αρσενικές." },
      { type: "cloze", id: "d4", textEs: "Estudio en ___ universidad de Atenas.", hintEl: "Σπουδάζω στο πανεπιστήμιο της Αθήνας.", answer: "la", explainEl: "Οι λέξεις σε -dad είναι θηλυκές." },
      { type: "cloze", id: "d5", textEs: "Mi coche es rojo y ___ moto de mi hermano es negra.", hintEl: "Το αυτοκίνητό μου είναι κόκκινο και η μηχανή του αδερφού μου είναι μαύρη.", answer: "la", explainEl: "Η moto είναι θηλυκό (από το motocicleta), παρά την κατάληξη -o." },
      { type: "cloze", id: "d6", textEs: "¿Dónde está ___ lápiz que estaba aquí?", hintEl: "Πού είναι το μολύβι που ήταν εδώ;", answer: "el" },
      { type: "cloze", id: "d7", textEs: "El toro y la ___ están en el campo.", hintEl: "Ο ταύρος και η αγελάδα είναι στο χωράφι.", answer: "vaca" },
      { type: "cloze", id: "d8", textEs: "El gallo y la ___ viven en el corral.", hintEl: "Ο κόκορας και η κότα ζουν στο κοτέτσι.", answer: "gallina" },
      { type: "choice", id: "d9", promptEs: "¿Qué palabra es femenina?", promptEl: "Ποια λέξη είναι θηλυκή;", options: ["el idioma", "la flor", "el mapa", "el lápiz"], answer: "la flor" },
      { type: "choice", id: "d10", promptEs: "¿Qué palabra es masculina?", promptEl: "Ποια λέξη είναι αρσενική;", options: ["la televisión", "la libertad", "el paraguas", "la canción"], answer: "el paraguas", explainEl: "Οι λέξεις σε -ción και -dad είναι θηλυκές, ενώ οι σύνθετες όπως paraguas είναι αρσενικές." },
      { type: "choice", id: "d11", promptEs: "¿Qué opción es correcta?", promptEl: "Η μέρα (στα ισπανικά).", options: ["la día", "el día", "la dia", "el dia"], answer: "el día", explainEl: "Στα ελληνικά η μέρα είναι θηλυκό, στα ισπανικά το día είναι αρσενικό και έχει τόνο." },
      { type: "order", id: "d12", promptEl: "Ο χάρτης είναι πάνω στο τραπέζι.", solution: ["El", "mapa", "está", "en", "la", "mesa."], distractors: ["lápiz", "los"] },
    ],
    exercisesEl: [
      "Γράψε το όνομα κάθε αντικειμένου της εικόνας με το σωστό άρθρο (el ή la).",
      "Ταξινόμησε τα ουσιαστικά σε δύο στήλες: αυτά που παίρνουν el και αυτά που παίρνουν la.",
      "Συμπλήρωσε τους πίνακες με τα αρσενικά και τα θηλυκά των ζώων.",
      "Συμπλήρωσε με el για το αρσενικό και με la για το θηλυκό (με λεξικό αν χρειάζεται).",
    ],
  },

  // Unidad 3
  {
    id: "u3",
    number: 3,
    page: 16,
    titleEs: "libro, libros. Singular, plural",
    titleEl: "Ενικός και πληθυντικός",
    introEl:
      "Ο πληθυντικός στα ισπανικά σχηματίζεται με -s ή -es, ανάλογα με το τέλος της λέξης. Υπάρχουν και λέξεις που δεν αλλάζουν στον πληθυντικό και λέξεις που υπάρχουν μόνο στον πληθυντικό.",
    rules: [
      {
        textEl: "Αν η λέξη τελειώνει σε φωνήεν (-a, -e, -i, -o, -u), προσθέτουμε -s.",
        examples: [
          { es: "El niño juega. Los niños juegan.", el: "Το παιδί παίζει. Τα παιδιά παίζουν." },
          { es: "Mi coche es rápido. Mis coches son rápidos.", el: "Το αυτοκίνητό μου είναι γρήγορο. Τα αυτοκίνητά μου είναι γρήγορα." },
        ],
      },
      {
        textEl: "Αν η λέξη τελειώνει σε σύμφωνο, προσθέτουμε -es. Το -z γίνεται -ces, και το -ión χάνει τον τόνο (-iones).",
        examples: [
          { es: "Hay tres lápices en la mesa.", el: "Υπάρχουν τρία μολύβια στο τραπέζι." },
          { es: "Las habitaciones del hotel son grandes.", el: "Τα δωμάτια του ξενοδοχείου είναι μεγάλα." },
        ],
      },
      {
        textEl: "Λέξεις με μία συλλαβή σε -s παίρνουν -es (mes, meses). Λέξεις με δύο ή περισσότερες συλλαβές και τονισμένη την τελευταία (-ás, -és, -ís, -ós, -ús) παίρνουν επίσης -es. Ο τόνος συνήθως χάνεται (autobús, autobuses), αλλά στο país μένει (países).",
        examples: [
          { es: "Hay dos autobuses en la parada.", el: "Υπάρχουν δύο λεωφορεία στη στάση." },
          { es: "He visitado muchos países.", el: "Έχω επισκεφθεί πολλές χώρες." },
        ],
      },
      {
        textEl: "Λέξεις με δύο ή περισσότερες συλλαβές που τελειώνουν σε άτονο -as, -es, -is, -os, -us δεν αλλάζουν. Ο πληθυντικός φαίνεται από το άρθρο.",
        examples: [
          { es: "El paraguas es azul. Los paraguas son azules.", el: "Η ομπρέλα είναι μπλε. Οι ομπρέλες είναι μπλε." },
          { es: "Los martes tengo clase de inglés.", el: "Τις Τρίτες έχω μάθημα αγγλικών." },
        ],
      },
      {
        textEl: "Μερικές λέξεις υπάρχουν μόνο στον πληθυντικό: gafas, tijeras, pantalones, vaqueros. Για ένα αντικείμενο χρησιμοποιούμε unas, unos.",
        examples: [
          { es: "Necesito unas tijeras.", el: "Χρειάζομαι ένα ψαλίδι." },
          { es: "Tengo tres pantalones en el armario.", el: "Έχω τρία παντελόνια στην ντουλάπα." },
        ],
      },
      {
        textEl: "Όταν έχουμε αρσενικό και θηλυκό μαζί, ο πληθυντικός είναι αρσενικός: padre + madre = padres, hijo + hija = hijos.",
        examples: [
          { es: "Mis tíos viven en Lima.", el: "Οι θείοι μου (θείος και θεία) ζουν στη Λίμα." },
          { es: "Julia tiene un hijo y una hija: tiene dos hijos.", el: "Η Julia έχει έναν γιο και μια κόρη: έχει δύο παιδιά." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Σχηματισμός του πληθυντικού",
        headers: ["Singular acaba en", "Plural", "Ejemplos"],
        rows: [
          ["-a, -e, -i, -o, -u", "+s", "casa → casas, coche → coches, niño → niños"],
          ["consonante", "+es", "profesor → profesores, ciudad → ciudades, postal → postales"],
          ["-z", "-ces", "actriz → actrices"],
          ["-ión", "-iones (sin tilde)", "habitación → habitaciones, televisión → televisiones"],
          ["-s (una sílaba)", "+es", "mes → meses"],
          ["-ás, -és, -ís, -ós, -ús (2 o más sílabas)", "+es", "país → países, autobús → autobuses"],
          ["-as, -es, -is, -os, -us (2 o más sílabas)", "no cambia", "(el) lunes → (los) lunes, (el) paraguas → (los) paraguas"],
        ],
      },
      {
        titleEl: "Λέξεις μόνο στον πληθυντικό",
        headers: ["Plural", "Un objeto", "Ελληνικά"],
        rows: [
          ["gafas", "unas gafas", "γυαλιά"],
          ["tijeras", "unas tijeras", "ψαλίδι"],
          ["pantalones", "unos pantalones", "παντελόνι"],
          ["vaqueros", "unos vaqueros", "τζιν παντελόνι"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «το ψαλίδι», «το παντελόνι» στον ενικό. Στα ισπανικά χρησιμοποιούνται συνήθως στον πληθυντικό: unas tijeras, unos pantalones.",
      "Το z γίνεται c μπροστά από το e: luz → luces, vez → veces, lápiz → lápices.",
      "Οι ημέρες από Δευτέρα ως Παρασκευή δεν αλλάζουν (los lunes, los viernes), αλλά τα sábado και domingo παίρνουν -s στον πληθυντικό (los sábados, los domingos).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Hay muchos ___ (turista) en la plaza.", hintEl: "Υπάρχουν πολλοί τουρίστες στην πλατεία.", answer: "turistas" },
      { type: "cloze", id: "d2", textEs: "Compro tres ___ (lápiz) en la tienda.", hintEl: "Αγοράζω τρία μολύβια στο μαγαζί.", answer: "lápices", explainEl: "Το -z γίνεται -ces: lápiz, lápices." },
      { type: "cloze", id: "d3", textEs: "Las ___ (ciudad) grandes tienen mucho tráfico.", hintEl: "Οι μεγάλες πόλεις έχουν πολλή κίνηση.", answer: "ciudades" },
      { type: "cloze", id: "d4", textEs: "Hay dos ___ (autobús) en la parada.", hintEl: "Υπάρχουν δύο λεωφορεία στη στάση.", answer: "autobuses", explainEl: "Στο autobús ο τόνος χάνεται στον πληθυντικό: autobuses." },
      { type: "cloze", id: "d5", textEs: "Este hotel tiene cuarenta ___ (habitación).", hintEl: "Αυτό το ξενοδοχείο έχει σαράντα δωμάτια.", answer: "habitaciones", explainEl: "Οι λέξεις σε -ión χάνουν τον τόνο στον πληθυντικό: habitaciones." },
      { type: "cloze", id: "d6", textEs: "He visitado tres ___ (país) de Europa.", hintEl: "Έχω επισκεφθεί τρεις χώρες της Ευρώπης.", answer: "países", explainEl: "Στο país ο τόνος μένει: países." },
      { type: "choice", id: "d7", promptEs: "Los ___ tengo clase de español.", promptEl: "Τις Τρίτες έχω μάθημα ισπανικών.", options: ["martes", "marteses", "martas"], answer: "martes", explainEl: "Οι ημέρες Δευτέρα ως Παρασκευή δεν αλλάζουν στον πληθυντικό." },
      { type: "choice", id: "d8", promptEs: "Necesito unas ___ para cortar el papel.", promptEl: "Χρειάζομαι ένα ψαλίδι για να κόψω το χαρτί.", options: ["tijeras", "tijera", "tijeres"], answer: "tijeras", explainEl: "Η λέξη υπάρχει μόνο στον πληθυντικό." },
      { type: "choice", id: "d9", promptEs: "Mi padre y mi madre son mis ___.", promptEl: "Ο πατέρας μου και η μητέρα μου είναι οι γονείς μου.", options: ["padres", "padre", "madres", "padros"], answer: "padres", explainEl: "Αρσενικό και θηλυκό μαζί δίνουν αρσενικό πληθυντικό." },
      { type: "choice", id: "d10", promptEs: "Julia tiene un hijo y una hija: tiene dos ___.", promptEl: "Η Julia έχει έναν γιο και μια κόρη: έχει δύο παιδιά.", options: ["hijos", "hijas", "hijes"], answer: "hijos" },
      { type: "order", id: "d11", promptEl: "Έχω δύο καινούρια ρολόγια.", solution: ["Tengo", "dos", "relojes", "nuevos."], distractors: ["reloj", "nuevo"] },
      { type: "order", id: "d12", promptEl: "Τις Δευτέρες έχω μάθημα.", solution: ["Los", "lunes", "tengo", "clase."], distractors: ["luneses", "el"], alternatives: [["Tengo", "clase", "los", "lunes."]] },
    ],
    exercisesEl: [
      "Γράψε τον πληθυντικό των ουσιαστικών.",
      "Κοίταξε το σχέδιο και γράψε ποια αντικείμενα υπάρχουν, με τους αριθμούς 1, 2, 3 και 4.",
      "Κοίταξε τις εικόνες και γράψε τα ονόματα των αντικειμένων στη σωστή μορφή.",
      "Αντικατέστησε τις υπογραμμισμένες λέξεις με έναν αρσενικό πληθυντικό, όπως στο παράδειγμα.",
    ],
  },

  // Unidad 4
  {
    id: "u4",
    number: 4,
    page: 18,
    titleEs: "un, una, unos, unas. El artículo indefinido",
    titleEl: "Το αόριστο άρθρο",
    introEl:
      "Το αόριστο άρθρο (ένας, μία, ένα) έχει στα ισπανικά τέσσερις μορφές και δεν έχει ουδέτερο. Ο πληθυντικός του (unos, unas) δεν υπάρχει στα ελληνικά και σημαίνει «μερικοί» ή «περίπου».",
    rules: [
      {
        textEl: "Το αόριστο άρθρο συμφωνεί σε γένος και αριθμό με το ουσιαστικό: un, una, unos, unas.",
        examples: [
          { es: "Tengo un hermano y una hermana.", el: "Έχω έναν αδερφό και μια αδερφή." },
          { es: "Hay unos coches y unas motos en la calle.", el: "Υπάρχουν μερικά αυτοκίνητα και μερικές μηχανές στον δρόμο." },
        ],
      },
      {
        textEl: "Μπροστά από θηλυκό ενικό ουσιαστικό που αρχίζει με τονισμένο a- ή ha- λέμε un, όχι una: un águila, un aula, un hacha. Το ουσιαστικό μένει θηλυκό. Στον πληθυντικό, ή όταν παρεμβάλλεται επίθετο, λέμε unas águilas, una pequeña aula.",
        examples: [
          { es: "Hay un aula libre en el segundo piso.", el: "Υπάρχει μια ελεύθερη αίθουσα στον δεύτερο όροφο." },
          { es: "Vi unas águilas en la montaña.", el: "Είδα μερικούς αετούς στο βουνό." },
        ],
      },
      {
        textEl: "Με το un, una, unos, unas ταξινομούμε κάτι ή κάποιον σε μια κατηγορία: τι είναι (ένα κλειδί) ή ποιος είναι (ένας τραγουδιστής).",
        examples: [
          { es: "¿Qué es eso? Es una llave.", el: "Τι είναι αυτό; Είναι ένα κλειδί." },
          { es: "El Danubio es un río de Europa.", el: "Ο Δούναβης είναι ένας ποταμός της Ευρώπης." },
        ],
      },
      {
        textEl: "Δείχνουν ποσότητα. Un, una = 1. Unos, unas + πληθυντικός = μερικοί, μερικές. Με ουσιαστικά που υπάρχουν μόνο στον πληθυντικό (unas tijeras, unos vaqueros) σημαίνουν «ένα».",
        examples: [
          { es: "Quiero un zumo, por favor.", el: "Θέλω έναν χυμό, παρακαλώ." },
          { es: "Necesito unas gafas nuevas.", el: "Χρειάζομαι ένα καινούριο ζευγάρι γυαλιά." },
        ],
      },
      {
        textEl: "Unos, unas + αριθμός = περίπου.",
        examples: [
          { es: "En la fiesta hay unas treinta personas.", el: "Στο πάρτι υπάρχουν περίπου τριάντα άτομα." },
          { es: "Mi casa está a unos diez minutos de aquí.", el: "Το σπίτι μου απέχει περίπου δέκα λεπτά από εδώ." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι μορφές του αόριστου άρθρου",
        headers: ["", "Masculino", "Femenino"],
        rows: [
          ["Singular", "un", "una"],
          ["Plural", "unos", "unas"],
        ],
      },
      {
        titleEl: "Οι χρήσεις",
        headers: ["Uso", "Ejemplo", "Ελληνικά"],
        rows: [
          ["clasificar", "Es un reloj.", "Είναι ένα ρολόι."],
          ["1 (singular)", "Necesito un lápiz.", "Χρειάζομαι ένα μολύβι."],
          ["1 (solo plural)", "unas tijeras", "ένα ψαλίδι"],
          ["algunos, algunas", "unas flores", "μερικά λουλούδια"],
          ["aproximadamente", "unos veinte euros", "περίπου είκοσι ευρώ"],
        ],
      },
    ],
    tipsEl: [
      "Το ελληνικό «ένας, μία, ένα» έχει ουδέτερο, το ισπανικό όχι. Το «ένα παιδί» γίνεται un niño, το «ένα σπίτι» una casa: το γένος εξαρτάται από την ισπανική λέξη.",
      "Ο πληθυντικός unos, unas δεν υπάρχει στα ελληνικά: μεταφράζεται «μερικοί, μερικές» ή «περίπου» μπροστά από αριθμό. Το unas tijeras σημαίνει «ένα ψαλίδι», γιατί η λέξη είναι πάντα πληθυντικός.",
      "Το un águila δεν είναι λάθος γένους: η λέξη είναι θηλυκή (un águila blanca, όχι «blanco»). Το un μπαίνει μόνο για να μη συναντώνται δύο α.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Quiero ___ café, por favor.", hintEl: "Θέλω έναν καφέ, παρακαλώ.", answer: "un" },
      { type: "cloze", id: "d2", textEs: "Ana tiene ___ hermana en Italia.", hintEl: "Η Ana έχει μια αδερφή στην Ιταλία.", answer: "una" },
      { type: "cloze", id: "d3", textEs: "Necesito ___ gafas nuevas.", hintEl: "Χρειάζομαι ένα καινούριο ζευγάρι γυαλιά.", answer: "unas", explainEl: "Το gafas υπάρχει μόνο στον πληθυντικό, γι' αυτό λέμε unas gafas ακόμα και για ένα ζευγάρι." },
      { type: "cloze", id: "d4", textEs: "En la plaza hay ___ cien personas.", hintEl: "Στην πλατεία υπάρχουν περίπου εκατό άτομα.", answer: "unas", explainEl: "Μπροστά από αριθμό το unos, unas σημαίνει «περίπου». Συμφωνεί με το personas, που είναι θηλυκό." },
      { type: "cloze", id: "d5", textEs: "Mira, ahí vuela ___ águila.", hintEl: "Κοίτα, εκεί πετάει ένας αετός.", answer: "un", explainEl: "Το águila είναι θηλυκό, αλλά ξεκινά με τονισμένο a-, οπότε λέμε un águila." },
      { type: "choice", id: "d6", promptEs: "El Danubio es ___ río de Europa.", promptEl: "Ο Δούναβης είναι ένας ποταμός της Ευρώπης.", options: ["un", "una", "unos", "unas"], answer: "un" },
      { type: "choice", id: "d7", promptEs: "Lima es ___ ciudad muy grande.", promptEl: "Η Λίμα είναι μια πολύ μεγάλη πόλη.", options: ["una", "un", "unas", "unos"], answer: "una" },
      { type: "choice", id: "d8", promptEs: "En mi mochila hay ___ llaves.", promptEl: "Στο σακίδιό μου υπάρχουν μερικά κλειδιά.", options: ["unas", "unos", "una", "un"], answer: "unas" },
      { type: "choice", id: "d9", promptEs: "Quiero ___ vaqueros negros.", promptEl: "Θέλω ένα μαύρο τζιν παντελόνι.", options: ["unos", "unas", "un", "una"], answer: "unos", explainEl: "Το vaqueros είναι αρσενικό και υπάρχει μόνο στον πληθυντικό." },
      { type: "choice", id: "d10", promptEs: "Necesito ___ aula grande para la clase.", promptEl: "Χρειάζομαι μια μεγάλη αίθουσα για το μάθημα.", options: ["un", "una", "unos", "unas"], answer: "un", explainEl: "Μπροστά από τονισμένο a- λέμε un aula, αν και η λέξη είναι θηλυκή." },
      { type: "choice", id: "d11", promptEs: "¿Cuál es correcto?", promptEl: "Ένας αετός.", options: ["una águila", "un águila", "unas águila", "unos águila"], answer: "un águila" },
      { type: "order", id: "d12", promptEl: "Έχω ένα ψαλίδι στην τσάντα.", solution: ["Tengo", "unas", "tijeras", "en", "el", "bolso."], distractors: ["una", "unos"], alternatives: [["En", "el", "bolso", "tengo", "unas", "tijeras."]], explainEl: "Το tijeras είναι πάντα πληθυντικός: unas tijeras." },
    ],
    exercisesEl: [
      "Συμπλήρωσε με un, una, unos ή unas.",
      "Συμπλήρωσε τις απαντήσεις με un, una, unos, unas και τις λέξεις των πλαισίων (τι είναι και ποιος είναι).",
      "Γράψε τι υπάρχει σε κάθε εικόνα, με un, una, unos, unas και τις λέξεις του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με un, una, unos ή unas.",
    ],
  },

  // Unidad 5
  {
    id: "u5",
    number: 5,
    page: 20,
    titleEs: "un coche / coche. Ausencia de artículo",
    titleEl: "Παράλειψη του αόριστου άρθρου",
    introEl:
      "Μερικές φορές το αόριστο άρθρο δεν χρησιμοποιείται: μετά το ser με επάγγελμα, θρησκεία, εθνικότητα ή ιδεολογία, και μπροστά από γενικό αντικείμενο. Αν όμως υπάρχει επίθετο ή ποσότητα, το άρθρο επανέρχεται.",
    rules: [
      {
        textEl: "Μετά το ser, με επάγγελμα, θρησκεία, εθνικότητα ή πολιτική ιδεολογία, δεν βάζουμε un, una, unos, unas.",
        examples: [
          { es: "Mi vecino es ingeniero.", el: "Ο γείτονάς μου είναι μηχανικός." },
          { es: "Elena es budista y sus padres son griegos.", el: "Η Elena είναι βουδίστρια και οι γονείς της είναι Έλληνες." },
          { es: "Mis abuelos eran socialistas.", el: "Οι παππούδες μου ήταν σοσιαλιστές." },
        ],
      },
      {
        textEl: "Αν προστεθεί επίθετο ή άλλος χαρακτηρισμός, βάζουμε άρθρο. Το ίδιο όταν ταυτίζουμε κάποιον με το επάγγελμά του σε μια απάντηση.",
        examples: [
          { es: "Teresa es una ingeniera muy trabajadora.", el: "Η Teresa είναι μια πολύ εργατική μηχανικός." },
          { es: "¿Quién es la señora Soto? Es una arquitecta.", el: "Ποια είναι η κυρία Soto; Είναι αρχιτέκτονας." },
        ],
      },
      {
        textEl: "Δεν βάζουμε άρθρο μπροστά από άμεσο αντικείμενο όταν μιλάμε γενικά, χωρίς να μας ενδιαφέρει η ποσότητα.",
        examples: [
          { es: "Mi hermana colecciona monedas.", el: "Η αδερφή μου μαζεύει νομίσματα." },
          { es: "No tengo bicicleta.", el: "Δεν έχω ποδήλατο." },
          { es: "¿Tienes hermanos?", el: "Έχεις αδέρφια;" },
        ],
      },
      {
        textEl: "Βάζουμε άρθρο όταν η ποσότητα έχει σημασία (ένα, μερικά) ή όταν το ουσιαστικό συνοδεύεται από επίθετο.",
        examples: [
          { es: "Necesito un bolígrafo azul.", el: "Χρειάζομαι ένα μπλε στυλό." },
          { es: "Busca un trabajo interesante.", el: "Ψάχνει για μια ενδιαφέρουσα δουλειά." },
        ],
      },
      {
        textEl: "Το ίδιο ισχύει με πράγματα που φοράμε ή έχουμε συνήθως: χωρίς άρθρο στη γενική περιγραφή, με άρθρο όταν προσθέτουμε επίθετο.",
        examples: [
          { es: "Mi padre siempre lleva sombrero.", el: "Ο πατέρας μου φοράει πάντα καπέλο." },
          { es: "Hoy lleva un sombrero muy elegante.", el: "Σήμερα φοράει ένα πολύ κομψό καπέλο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Χωρίς άρθρο ή με άρθρο",
        headers: ["Sin artículo", "Con un, una, unos, unas"],
        rows: [
          ["Mi hermano es abogado.", "Mi hermano es un abogado excelente."],
          ["Busco trabajo.", "Busco un trabajo interesante."],
          ["Colecciona monedas.", "Colecciona unas monedas muy raras."],
          ["No tengo bicicleta.", "Tengo una bicicleta azul."],
        ],
      },
    ],
    tipsEl: [
      "Και στα ελληνικά λέμε «είμαι γιατρός» χωρίς άρθρο, άρα εδώ τα ισπανικά μοιάζουν. Το λάθος «Soy un médico» έρχεται συνήθως από τα αγγλικά (I am a doctor).",
      "Όταν υπάρχει επίθετο, το άρθρο γίνεται απαραίτητο, όπως και στα ελληνικά («είναι ένας εξαιρετικός γιατρός»): Es un médico excelente.",
      "Το Tengo un hermano σημαίνει «έχω έναν αδερφό» (ένα συγκεκριμένο άτομο). Στην ερώτηση ¿Tienes hermanos? δεν ξέρουμε πόσους, γι' αυτό δεν υπάρχει άρθρο.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi hermana es ___.", promptEl: "Η αδερφή μου είναι δικηγόρος.", options: ["abogada", "una abogada", "unas abogadas"], answer: "abogada", explainEl: "Μετά το ser, χωρίς επίθετο, το επάγγελμα δεν παίρνει άρθρο." },
      { type: "choice", id: "d2", promptEs: "Mi hermana es ___ muy buena.", promptEl: "Η αδερφή μου είναι πολύ καλή δικηγόρος.", options: ["abogada", "una abogada", "unas abogadas"], answer: "una abogada", explainEl: "Με επίθετο (muy buena) το άρθρο είναι απαραίτητο." },
      { type: "choice", id: "d3", promptEs: "Soy ___.", promptEl: "Είμαι βουδιστής.", options: ["budista", "un budista", "unos budistas"], answer: "budista" },
      { type: "choice", id: "d4", promptEs: "Mis primos son ___.", promptEl: "Οι ξάδερφοί μου είναι Έλληνες.", options: ["griegos", "unos griegos", "los griegos"], answer: "griegos" },
      { type: "choice", id: "d5", promptEs: "Mi tía colecciona ___.", promptEl: "Η θεία μου μαζεύει νομίσματα.", options: ["monedas", "unas monedas", "las monedas"], answer: "monedas", explainEl: "Γενική αναφορά, χωρίς ποσότητα: δεν βάζουμε άρθρο." },
      { type: "cloze", id: "d6", textEs: "Luis es ___ médico excelente.", hintEl: "Ο Luis είναι ένας εξαιρετικός γιατρός.", answer: "un" },
      { type: "cloze", id: "d7", textEs: "Marta es ___ ingeniera muy trabajadora.", hintEl: "Η Marta είναι μια πολύ εργατική μηχανικός.", answer: "una" },
      { type: "cloze", id: "d8", textEs: "En mi bolso solo tengo ___ bolígrafo.", hintEl: "Στην τσάντα μου έχω μόνο ένα στυλό.", answer: "un", explainEl: "Εδώ η ποσότητα έχει σημασία (ένα), άρα βάζουμε un." },
      { type: "cloze", id: "d9", textEs: "Hoy mi padre lleva ___ sombrero muy elegante.", hintEl: "Σήμερα ο πατέρας μου φοράει ένα πολύ κομψό καπέλο.", answer: "un" },
      { type: "order", id: "d10", promptEl: "Ο πατέρας μου είναι ένας πολύ γνωστός δικηγόρος.", solution: ["Mi", "padre", "es", "un", "abogado", "muy", "conocido."], distractors: ["una", "unos"] },
      { type: "order", id: "d11", promptEl: "Η Ana δεν έχει αυτοκίνητο.", solution: ["Ana", "no", "tiene", "coche."], distractors: ["un", "unos"] },
      { type: "order", id: "d12", promptEl: "Θέλω ένα στυλό, παρακαλώ.", solution: ["Quiero", "un", "bolígrafo,", "por", "favor."], distractors: ["unos", "bolígrafos"], alternatives: [["Por", "favor,", "quiero", "un", "bolígrafo."]] },
    ],
    exercisesEl: [
      "Κοίταξε τις εικόνες και συμπλήρωσε τις προτάσεις με τα επαγγέλματα του πλαισίου.",
      "Κύκλωσε τη σωστή μορφή σε κάθε περίπτωση (με ή χωρίς άρθρο).",
      "Συμπλήρωσε με un, una, unos, unas μόνο όπου χρειάζεται.",
    ],
  },

  // Unidad 6
  {
    id: "u6",
    number: 6,
    page: 22,
    titleEs: "el, la, los, las. El artículo definido",
    titleEl: "Το οριστικό άρθρο",
    introEl:
      "Το οριστικό άρθρο (ο, η, το) έχει στα ισπανικά τέσσερις μορφές: el, la, los, las. Το χρησιμοποιούμε για κάτι μοναδικό, για κάτι συγκεκριμένο που ξέρουμε, και όταν μιλάμε γενικά.",
    rules: [
      {
        textEl: "Οι μορφές είναι el, la, los, las και συμφωνούν σε γένος και αριθμό με το ουσιαστικό.",
        examples: [
          { es: "El padre y la madre de Luis son médicos.", el: "Ο πατέρας και η μητέρα του Luis είναι γιατροί." },
          { es: "Los niños y las niñas juegan en el parque.", el: "Τα αγόρια και τα κορίτσια παίζουν στο πάρκο." },
        ],
      },
      {
        textEl: "Μπροστά από θηλυκό ενικό που αρχίζει με τονισμένο a- ή ha- λέμε el: el agua, el aula, el águila. Στον πληθυντικό και όταν παρεμβάλλεται άλλη λέξη μένει la/las: las aguas, la otra aula.",
        examples: [
          { es: "El agua del río está fría.", el: "Το νερό του ποταμού είναι κρύο." },
          { es: "Las águilas vuelan muy alto.", el: "Οι αετοί πετούν πολύ ψηλά." },
        ],
      },
      {
        textEl: "Οι προθέσεις a και de ενώνονται με το el: a + el = al, de + el = del. Με τα la, los, las δεν ενώνονται.",
        examples: [
          { es: "Mañana voy al museo.", el: "Αύριο πάω στο μουσείο." },
          { es: "El hijo del profesor estudia conmigo.", el: "Ο γιος του καθηγητή σπουδάζει μαζί μου." },
          { es: "Vengo de la playa.", el: "Έρχομαι από την παραλία." },
        ],
      },
      {
        textEl: "Χρησιμοποιούμε el, la, los, las για κάτι μοναδικό ή που το ξέρουν όλοι: la capital, el presidente, el Sol.",
        examples: [
          { es: "Roma es la capital de Italia.", el: "Η Ρώμη είναι η πρωτεύουσα της Ιταλίας." },
          { es: "La Luna sale por la noche.", el: "Το φεγγάρι βγαίνει το βράδυ." },
        ],
      },
      {
        textEl: "Τα χρησιμοποιούμε και για κάτι συγκεκριμένο, όταν από την περίσταση είναι σαφές για ποιο πράγμα μιλάμε.",
        examples: [
          { es: "Abre la ventana, por favor.", el: "Άνοιξε το παράθυρο, παρακαλώ." },
          { es: "El profesor está en el aula.", el: "Ο καθηγητής είναι στην αίθουσα." },
        ],
      },
      {
        textEl: "Για γενικεύσεις το άρθρο είναι απαραίτητο: με πληθυντικό ή με ουσιαστικά που δεν μετριούνται.",
        examples: [
          { es: "Me gustan los gatos.", el: "Μου αρέσουν οι γάτες." },
          { es: "El pan es barato en este país.", el: "Το ψωμί είναι φθηνό σε αυτή τη χώρα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι μορφές του οριστικού άρθρου",
        headers: ["", "Masculino", "Femenino"],
        rows: [
          ["Singular", "el", "la"],
          ["Plural", "los", "las"],
        ],
      },
      {
        titleEl: "Συναιρέσεις",
        headers: ["Contracción", "Ejemplo", "Ελληνικά"],
        rows: [
          ["a + el = al", "Voy al cine.", "Πάω στον κινηματογράφο."],
          ["de + el = del", "Vuelvo del trabajo.", "Γυρνάω από τη δουλειά."],
          ["a + la, los, las", "Voy a la playa.", "Πάω στην παραλία."],
          ["de + la, los, las", "Hablo de las vacaciones.", "Μιλάω για τις διακοπές."],
        ],
      },
    ],
    tipsEl: [
      "Το ισπανικό άρθρο δεν έχει πτώσεις, όπως το ελληνικό. Η γενική «του καθηγητή» γίνεται de + el = del profesor, και η αιτιατική «στον κινηματογράφο» a + el = al cine.",
      "Προσοχή στο el agua και el águila: το άρθρο είναι αρσενικό, αλλά το επίθετο μένει θηλυκό: el agua fría (όχι «frío»).",
      "Με το gustar το άρθρο είναι υποχρεωτικό: Me gustan las naranjas, όπως και στα ελληνικά (μου αρέσουν τα πορτοκάλια).",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "___ hermana de Pablo vive en Quito.", promptEl: "Η αδερφή του Pablo μένει στο Κίτο.", options: ["La", "El", "Los"], answer: "La" },
      { type: "choice", id: "d2", promptEs: "Voy ___ cine esta tarde.", promptEl: "Πάω στον κινηματογράφο σήμερα το απόγευμα.", options: ["al", "a el", "del", "a la"], answer: "al", explainEl: "a + el γίνεται πάντα al." },
      { type: "choice", id: "d3", promptEs: "Este es el libro ___ profesor de Historia.", promptEl: "Αυτό είναι το βιβλίο του καθηγητή της Ιστορίας.", options: ["del", "de el", "al", "de la"], answer: "del", explainEl: "de + el γίνεται πάντα del." },
      { type: "cloze", id: "d4", textEs: "En mi colegio, ___ aulas son grandes.", hintEl: "Στο σχολείο μου οι αίθουσες είναι μεγάλες.", answer: "las", explainEl: "Στον πληθυντικό λέμε las aulas." },
      { type: "cloze", id: "d5", textEs: "Me gusta ___ agua muy fría.", hintEl: "Μου αρέσει το πολύ κρύο νερό.", answer: "el", explainEl: "Το agua παίρνει el, αλλά το επίθετο μένει θηλυκό: fría." },
      { type: "cloze", id: "d6", textEs: "Lima es ___ capital de Perú.", hintEl: "Η Λίμα είναι η πρωτεύουσα του Περού.", answer: "la" },
      { type: "cloze", id: "d7", textEs: "Los padres de mi amigo viven cerca ___ centro.", hintEl: "Οι γονείς του φίλου μου μένουν κοντά στο κέντρο.", answer: "del" },
      { type: "cloze", id: "d8", textEs: "Mañana vamos ___ museo.", hintEl: "Αύριο πάμε στο μουσείο.", answer: "al" },
      { type: "choice", id: "d9", promptEs: "___ españoles cenan tarde.", promptEl: "Οι Ισπανοί δειπνούν αργά.", options: ["Los", "Las", "El"], answer: "Los", explainEl: "Γενίκευση: μιλάμε για όλους τους Ισπανούς, άρα βάζουμε οριστικό άρθρο." },
      { type: "choice", id: "d10", promptEs: "Me gustan ___ fresas.", promptEl: "Μου αρέσουν οι φράουλες.", options: ["las", "unas", "la", "el"], answer: "las" },
      { type: "choice", id: "d11", promptEs: "¿Cuál es correcto?", promptEl: "Ο αετός.", options: ["el águila", "la águila", "los águila", "el aguila"], answer: "el águila", explainEl: "Μπροστά από τονισμένο a- το θηλυκό παίρνει el. Το águila γράφεται με τόνο." },
      { type: "order", id: "d12", promptEl: "Το σπίτι του καθηγητή είναι μεγάλο.", solution: ["La", "casa", "del", "profesor", "es", "grande."], distractors: ["de", "el"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με el, la, los ή las.",
      "Κοίταξε το οικογενειακό δέντρο και συμπλήρωσε τις προτάσεις με el, la, los, las και τις λέξεις του πλαισίου.",
      "Συμπλήρωσε τις προτάσεις με τις λέξεις του πλαισίου και el, la, los ή las.",
      "Συμπλήρωσε με el, la, los, las, χρησιμοποιώντας al και del όπου χρειάζεται.",
    ],
  },

  // Unidad 7
  {
    id: "u7",
    number: 7,
    page: 24,
    titleEs: "un perro / el perro. Contraste entre el artículo indefinido y el definido",
    titleEl: "Αόριστο ή οριστικό άρθρο;",
    introEl:
      "Εδώ συγκρίνεις το αόριστο (un, una) με το οριστικό άρθρο (el, la). Η επιλογή εξαρτάται από το αν ο συνομιλητής ξέρει ήδη για ποιο πράγμα μιλάς.",
    rules: [
      {
        textEl: "Νέα πληροφορία: αόριστο άρθρο. Όταν το πράγμα έχει ήδη αναφερθεί (γνωστή πληροφορία): οριστικό άρθρο.",
        examples: [
          { es: "Tengo un perro. El perro se llama Rex.", el: "Έχω ένα σκυλί. Το σκυλί λέγεται Rex." },
          { es: "Ayer vi una película. La película era muy buena.", el: "Χθες είδα μια ταινία. Η ταινία ήταν πολύ καλή." },
        ],
      },
      {
        textEl: "Ένα από πολλά (μέλος μιας ομάδας): un, una. Κάτι μοναδικό ή συγκεκριμένο: el, la.",
        examples: [
          { es: "Un amigo de Eva es médico.", el: "Ένας φίλος της Eva είναι γιατρός. (Έχει πολλούς φίλους.)" },
          { es: "El marido de Eva es médico.", el: "Ο άντρας της Eva είναι γιατρός. (Έχει έναν.)" },
          { es: "Lima es la capital de Perú.", el: "Η Λίμα είναι η πρωτεύουσα του Περού." },
        ],
      },
      {
        textEl: "Κάτι οποιοδήποτε: un, una. Κάτι συγκεκριμένο, που ξέρουν και οι δύο: el, la.",
        examples: [
          { es: "Quiero comprar un ordenador.", el: "Θέλω να αγοράσω έναν υπολογιστή. (Οποιονδήποτε.)" },
          { es: "Tengo que arreglar el ordenador.", el: "Πρέπει να φτιάξω τον υπολογιστή. (Τον δικό μου.)" },
        ],
      },
      {
        textEl: "Ποσότητα: un, una, unos, unas. Γενίκευση: el, la, los, las.",
        examples: [
          { es: "He comprado unas manzanas.", el: "Αγόρασα μερικά μήλα." },
          { es: "Me gustan las manzanas.", el: "Μου αρέσουν τα μήλα." },
        ],
      },
      {
        textEl: "Με τα ρήματα gustar, encantar, preferir, odiar το ουσιαστικό παίρνει οριστικό άρθρο. Όταν θέλουμε ένα συγκεκριμένο τεμάχιο, αόριστο.",
        examples: [
          { es: "Me encanta el helado de fresa.", el: "Λατρεύω το παγωτό φράουλα." },
          { es: "Quiero un helado de fresa.", el: "Θέλω ένα παγωτό φράουλα." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Σύγκριση",
        headers: ["un, una, unos, unas", "el, la, los, las"],
        rows: [
          ["información nueva: Tengo un perro.", "información conocida: El perro se llama Rex."],
          ["uno entre varios: Un amigo de Eva es médico.", "único o específico: El marido de Eva es médico."],
          ["cualquiera: Busco un restaurante.", "concreto: Busco el restaurante de ayer."],
          ["cantidad: Quiero unas manzanas.", "en general: Me gustan las manzanas."],
        ],
      },
    ],
    tipsEl: [
      "Για να διαλέξεις, ρώτα τον εαυτό σου: «Ξέρει ο ακροατής ποιο ακριβώς;». Αν ναι, el, la. Αν όχι, un, una.",
      "Στις γενικεύσεις το ισπανικό άρθρο είναι απαραίτητο, όπως και στα ελληνικά: Me gustan los perros. Μην πεις «Me gustan perros».",
      "Σε παραγγελίες και αγορές το un, una σημαίνει «ένα»: Un café, por favor.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Ayer vi ___ película muy buena. La película es italiana.", hintEl: "Χθες είδα μια πολύ καλή ταινία. Η ταινία είναι ιταλική.", answer: "una", explainEl: "Πρώτη αναφορά (νέα πληροφορία): una. Τη δεύτερη φορά λέμε la película." },
      { type: "cloze", id: "d2", textEs: "He comprado un libro y una revista. ___ libro es de historia.", hintEl: "Αγόρασα ένα βιβλίο και ένα περιοδικό. Το βιβλίο είναι ιστορίας.", answer: "el", explainEl: "Το βιβλίο έχει ήδη αναφερθεί, άρα βάζουμε el." },
      { type: "choice", id: "d3", promptEs: "Ana tiene dos hijos. ___ hijo de Ana es médico.", promptEl: "Η Ana έχει δύο γιους. Ένας γιος της Ana είναι γιατρός.", options: ["Un", "El", "Una"], answer: "Un", explainEl: "Η Ana έχει δύο γιους: ένας από πολλούς, άρα un hijo." },
      { type: "choice", id: "d4", promptEs: "Ana tiene un solo hijo. ___ hijo de Ana es médico.", promptEl: "Η Ana έχει μόνο έναν γιο. Ο γιος της Ana είναι γιατρός.", options: ["Un", "El", "Una"], answer: "El", explainEl: "Έχει έναν μόνο γιο: μοναδικός, άρα el hijo." },
      { type: "cloze", id: "d5", textEs: "¿Dónde está ___ llave del coche? La necesito.", hintEl: "Πού είναι το κλειδί του αυτοκινήτου; Το χρειάζομαι.", answer: "la", explainEl: "Εννοούμε το συγκεκριμένο κλειδί που ξέρουμε και οι δύο." },
      { type: "choice", id: "d6", promptEs: "Madrid es ___ capital de España.", promptEl: "Η Μαδρίτη είναι η πρωτεύουσα της Ισπανίας.", options: ["la", "una", "las"], answer: "la", explainEl: "Η Ισπανία έχει μία πρωτεύουσα: μοναδική, άρα la capital." },
      { type: "choice", id: "d7", promptEs: "Francia es ___ país de Europa.", promptEl: "Η Γαλλία είναι μια χώρα της Ευρώπης.", options: ["un", "el", "una"], answer: "un", explainEl: "Η Ευρώπη έχει πολλές χώρες: ένα μέλος της ομάδας, άρα un país." },
      { type: "choice", id: "d8", promptEs: "Me gustan ___ perros.", promptEl: "Μου αρέσουν οι σκύλοι.", options: ["los", "unos", "el"], answer: "los", explainEl: "Γενίκευση: οι σκύλοι γενικά, άρα los perros." },
      { type: "cloze", id: "d9", textEs: "Estoy cansada. Necesito ___ café.", hintEl: "Είμαι κουρασμένη. Χρειάζομαι έναν καφέ.", answer: "un", explainEl: "Έναν οποιονδήποτε καφέ: un café." },
      { type: "cloze", id: "d10", textEs: "Mercurio es ___ planeta pequeño.", hintEl: "Ο Ερμής είναι ένας μικρός πλανήτης.", answer: "un", explainEl: "Υπάρχουν πολλοί πλανήτες: ο Ερμής είναι ένας από αυτούς." },
      { type: "order", id: "d11", promptEl: "Το σκυλί του γείτονά μου είναι μαύρο.", solution: ["El", "perro", "de", "mi", "vecino", "es", "negro."], distractors: ["Un", "del"] },
      { type: "order", id: "d12", promptEl: "Ένας φίλος μου μένει στη Χιλή.", solution: ["Un", "amigo", "mío", "vive", "en", "Chile."], distractors: ["El", "viven"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με un, una, unos, unas ή el, la, los, las στους διαλόγους και στα κείμενα.",
      "Διάλεξε την πιο κατάλληλη μορφή (αόριστο ή οριστικό άρθρο) σε κάθε πρόταση.",
      "Συμπλήρωσε με un, una, unos, unas ή el, la, los, las.",
    ],
  },

  // Unidad 8
  {
    id: "u8",
    number: 8,
    page: 26,
    titleEs: "el señor Alonso, la calle Mayor. El artículo definido con nombres propios",
    titleEl: "Οριστικό άρθρο με κύρια ονόματα",
    introEl:
      "Τα κύρια ονόματα συχνά δεν παίρνουν άρθρο (Atenas, Grecia), αλλά οι δρόμοι, τα ξενοδοχεία, τα μουσεία, οι ποταμοί, οι θάλασσες και τα βουνά παίρνουν. Υπάρχουν και μερικές εξαιρέσεις που πρέπει να μάθεις.",
    rules: [
      {
        textEl: "Όταν μιλάμε ΓΙΑ κάποιον, βάζουμε άρθρο πριν από τους τίτλους (señor, señora, doctor/a, presidente/a) + επώνυμο. Όταν του μιλάμε απευθείας, δεν βάζουμε. Χωρίς άρθρο: μόνο το επώνυμο, το μικρό όνομα, και το don/doña + όνομα.",
        examples: [
          { es: "El doctor Vega trabaja en este centro.", el: "Ο γιατρός Vega δουλεύει σε αυτό το κέντρο." },
          { es: "Buenos días, doctor Vega.", el: "Καλημέρα, γιατρέ Vega." },
          { es: "Doña Carmen es mi vecina.", el: "Η κυρία Carmen είναι η γειτόνισσά μου." },
        ],
      },
      {
        textEl: "Με άρθρο: δρόμοι, πλατείες, λεωφόροι (la calle Mayor), και κινηματογράφοι, θέατρα, ξενοδοχεία, μουσεία, νοσοκομεία (el hotel Ritz, el Museo del Prado).",
        examples: [
          { es: "Vivo en la calle Alcalá.", el: "Μένω στην οδό Alcalá." },
          { es: "El hotel Plaza está muy cerca.", el: "Το ξενοδοχείο Plaza είναι πολύ κοντά." },
        ],
      },
      {
        textEl: "Με άρθρο: ποτάμια, λίμνες, θάλασσες, ωκεανοί, ομάδες νησιών, βουνά και έρημοι.",
        examples: [
          { es: "El Duero pasa por Valladolid.", el: "Ο Duero περνά από το Valladolid." },
          { es: "Las Canarias están en el océano Atlántico.", el: "Τα Κανάρια νησιά βρίσκονται στον Ατλαντικό ωκεανό." },
          { es: "Los Alpes son muy altos.", el: "Οι Άλπεις είναι πολύ ψηλές." },
        ],
      },
      {
        textEl: "Χωρίς άρθρο: πόλεις, χώρες, περιοχές, ήπειροι και μεμονωμένα νησιά.",
        examples: [
          { es: "Vivo en Atenas, la capital de Grecia.", el: "Μένω στην Αθήνα, την πρωτεύουσα της Ελλάδας." },
          { es: "Creta es una isla griega.", el: "Η Κρήτη είναι ένα ελληνικό νησί." },
          { es: "África es un continente enorme.", el: "Η Αφρική είναι μια τεράστια ήπειρος." },
        ],
      },
      {
        textEl: "Εξαιρέσεις: σε μερικά ονόματα το άρθρο είναι μέρος του ονόματος (La Habana, El Cairo, La Paz, Los Ángeles, El Salvador, La Rioja). Στην Ινδία και στις ΗΠΑ το άρθρο είναι προαιρετικό: (la) India, (los) Estados Unidos.",
        examples: [
          { es: "Mi tía vive en La Rioja.", el: "Η θεία μου μένει στη La Rioja." },
          { es: "Mañana viajamos a El Cairo.", el: "Αύριο ταξιδεύουμε στο Κάιρο." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Με άρθρο",
        headers: ["Con artículo", "Ejemplos"],
        rows: [
          ["calles, plazas, avenidas", "la calle Mayor, la avenida de América, el Paseo de Rosales"],
          ["cines, teatros, hoteles, museos", "el cine Gran Vía, el hotel Ritz, el Museo del Prado"],
          ["ríos, lagos, mares, océanos", "el Tajo, el Amazonas, el Titicaca, el Mediterráneo, el Pacífico"],
          ["grupos de islas, montañas, desiertos", "las Canarias, los Andes, los Pirineos, el Sahara"],
        ],
      },
      {
        titleEl: "Χωρίς άρθρο",
        headers: ["Sin artículo", "Ejemplos"],
        rows: [
          ["ciudades", "Valencia, París, Santiago de Chile, Buenos Aires"],
          ["países y regiones", "España, Bolivia, Galicia, California"],
          ["continentes", "África, América del Sur"],
          ["islas solas", "Mallorca, Sicilia, Cuba"],
        ],
      },
      {
        titleEl: "Εξαιρέσεις: το άρθρο ανήκει στο όνομα",
        headers: ["Tipo", "Ejemplos"],
        rows: [
          ["ciudades", "La Coruña, La Habana, El Cairo, La Paz, Las Palmas, Los Ángeles, El Escorial"],
          ["países y regiones", "El Salvador, (la) India, (los) Estados Unidos, La Mancha, La Rioja, La Pampa"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά λέμε «η Ελλάδα», «η Ισπανία», «η Αθήνα» με άρθρο. Στα ισπανικά όχι: Grecia, España, Atenas. Μην πεις «la Grecia».",
      "Το άρθρο με τον τίτλο ισχύει μόνο όταν μιλάς για κάποιον: La señora Gómez es amable. Όταν της μιλάς, δεν υπάρχει: Buenos días, señora Gómez.",
      "Το άρθρο προηγείται και αν παραλείπεται η λέξη río, mar, lago: el (río) Tajo, el (mar) Mediterráneo, el (lago) Titicaca.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Saludas a tu profesor, el señor Pérez:", promptEl: "Χαιρετάς τον καθηγητή σου, τον κύριο Pérez, μιλώντας του απευθείας.", options: ["Buenos días, señor Pérez.", "Buenos días, el señor Pérez.", "Buenos días, al señor Pérez."], answer: "Buenos días, señor Pérez.", explainEl: "Όταν μιλάμε απευθείας σε κάποιον, δεν βάζουμε άρθρο." },
      { type: "cloze", id: "d2", textEs: "___ señora Ruiz trabaja en el hospital.", hintEl: "Η κυρία Ruiz δουλεύει στο νοσοκομείο.", answer: "la", explainEl: "Μιλάμε ΓΙΑ την κυρία Ruiz: la señora Ruiz." },
      { type: "cloze", id: "d3", textEs: "Mi hermana vive en ___ Habana.", hintEl: "Η αδερφή μου μένει στην Αβάνα.", answer: "La", explainEl: "Στη Habana το άρθρο είναι μέρος του ονόματος: La Habana." },
      { type: "cloze", id: "d4", textEs: "Vivimos en ___ calle Mayor.", hintEl: "Μένουμε στην οδό Mayor.", answer: "la" },
      { type: "choice", id: "d5", promptEs: "Ana estudia en ___ Universidad de Salamanca.", promptEl: "Η Ana σπουδάζει στο Πανεπιστήμιο της Σαλαμάνκα.", options: ["la", "el", "las"], answer: "la" },
      { type: "choice", id: "d6", promptEs: "Este verano voy a ___.", promptEl: "Αυτό το καλοκαίρι πάω στην Ιταλία.", options: ["Italia", "la Italia", "el Italia"], answer: "Italia", explainEl: "Οι χώρες δεν παίρνουν άρθρο, αν και στα ελληνικά λέμε «η Ιταλία»." },
      { type: "choice", id: "d7", promptEs: "¿Qué frase es correcta?", promptEl: "Οι Άνδεις βρίσκονται στη Νότια Αμερική.", options: ["Los Andes están en América del Sur.", "Los Andes están en la América del Sur.", "Andes están en América del Sur."], answer: "Los Andes están en América del Sur.", explainEl: "Τα βουνά παίρνουν άρθρο (los Andes), οι ήπειροι όχι (América del Sur)." },
      { type: "choice", id: "d8", promptEs: "___ Alpes están en el centro de Europa.", promptEl: "Οι Άλπεις βρίσκονται στο κέντρο της Ευρώπης.", options: ["Los", "Las", "El"], answer: "Los" },
      { type: "cloze", id: "d9", textEs: "___ Mediterráneo es un mar muy turístico.", hintEl: "Η Μεσόγειος είναι μια πολύ τουριστική θάλασσα.", answer: "El" },
      { type: "cloze", id: "d10", textEs: "Mallorca es una isla de ___ Baleares.", hintEl: "Η Μαγιόρκα είναι ένα νησί των Βαλεαρίδων.", answer: "las", explainEl: "Οι ομάδες νησιών παίρνουν άρθρο, ενώ τα μεμονωμένα νησιά όχι: las Baleares, αλλά Mallorca." },
      { type: "order", id: "d11", promptEl: "Η Αθήνα είναι η πρωτεύουσα της Ελλάδας.", solution: ["Atenas", "es", "la", "capital", "de", "Grecia."], distractors: ["Los", "del"] },
      { type: "order", id: "d12", promptEl: "Ο κύριος López είναι ο προϊστάμενός μου.", solution: ["El", "señor", "López", "es", "mi", "jefe."], distractors: ["Los", "la"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με el, la, los, las μόνο όπου χρειάζεται (ονόματα προσώπων).",
      "Κοίταξε τον χάρτη και πες πού βρίσκεται κάθε μέρος.",
      "Συμπλήρωσε τις προτάσεις με τα δοσμένα ονόματα και με άρθρο όπου χρειάζεται (γεωγραφικά ονόματα).",
      "Διάλεξε σε κάθε πρόταση τη σωστή επιλογή, με ή χωρίς άρθρο.",
    ],
  },

  // Unidad 9
  {
    id: "u9",
    number: 9,
    page: 28,
    titleEs: "el seis de enero. El artículo definido con expresiones de tiempo",
    titleEl: "Οριστικό άρθρο με χρονικές εκφράσεις",
    introEl:
      "Στις ώρες, στις ημέρες, στις ημερομηνίες και στα μέρη της ημέρας το άρθρο έχει δικούς του κανόνες. Σχεδόν πάντα χρησιμοποιείται, με λίγες εξαιρέσεις που αξίζει να μάθεις.",
    rules: [
      {
        textEl: "Ώρες: la una, las dos, las tres... Λέμε Es la una, Son las dos. Για το «στις» λέμε a la una, a las dos. Μετά την ώρα έρχονται τα y cuarto, y media, menos cuarto, y/menos + λεπτά.",
        examples: [
          { es: "¿Qué hora es? Son las cinco y media.", el: "Τι ώρα είναι; Είναι πεντέμισι." },
          { es: "La clase empieza a las nueve.", el: "Το μάθημα ξεκινά στις εννιά." },
          { es: "Es la una menos cuarto.", el: "Είναι μία παρά τέταρτο." },
        ],
      },
      {
        textEl: "Ημέρες της εβδομάδας: el + ημέρα για μία συγκεκριμένη ημέρα (el sábado = αυτό το Σάββατο). Los + ημέρα για κάτι που επαναλαμβάνεται (los sábados = κάθε Σάββατο).",
        examples: [
          { es: "El viernes tengo una cita con el médico.", el: "Την Παρασκευή έχω ραντεβού με τον γιατρό." },
          { es: "Los viernes cenamos en casa de mis padres.", el: "Τις Παρασκευές δειπνούμε στο σπίτι των γονιών μου." },
        ],
      },
      {
        textEl: "Όταν λέμε ποια ημέρα είναι σήμερα, χθες ή αύριο, δεν βάζουμε άρθρο.",
        examples: [
          { es: "¿Qué día es hoy? Hoy es jueves.", el: "Τι μέρα είναι σήμερα; Σήμερα είναι Πέμπτη." },
          { es: "Ayer fue miércoles.", el: "Χθες ήταν Τετάρτη." },
        ],
      },
      {
        textEl: "Ημερομηνίες: el + αριθμός + de + μήνας. Στην απάντηση στο «¿Qué día es hoy?» δεν βάζουμε άρθρο. Οι μήνες δεν παίρνουν άρθρο. Αν λέμε ημέρα και ημερομηνία μαζί, βάζουμε μόνο ένα άρθρο.",
        examples: [
          { es: "Mi cumpleaños es el cuatro de mayo.", el: "Τα γενέθλιά μου είναι στις 4 Μαΐου." },
          { es: "Nos vamos de vacaciones en agosto.", el: "Φεύγουμε διακοπές τον Αύγουστο." },
          { es: "La boda es el sábado, catorce de septiembre.", el: "Ο γάμος είναι το Σάββατο 14 Σεπτεμβρίου." },
        ],
      },
      {
        textEl: "Μέρη της ημέρας: por la mañana, por la tarde, por la noche. Εξαίρεση: a mediodía (και al mediodía), a medianoche.",
        examples: [
          { es: "Por la noche leo un libro.", el: "Το βράδυ διαβάζω ένα βιβλίο." },
          { es: "Como en casa a mediodía.", el: "Τρώω στο σπίτι το μεσημέρι." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Η ώρα",
        headers: ["Hora", "Español", "Ελληνικά"],
        rows: [
          ["1:00", "Es la una.", "Είναι μία."],
          ["1:05", "Es la una y cinco.", "Είναι μία και πέντε."],
          ["3:00", "Son las tres.", "Είναι τρεις."],
          ["7:15", "Son las siete y cuarto.", "Είναι επτά και τέταρτο."],
          ["9:30", "Son las nueve y media.", "Είναι εννιάμισι."],
          ["10:45", "Son las once menos cuarto.", "Είναι έντεκα παρά τέταρτο."],
          ["12:50", "Es la una menos diez.", "Είναι μία παρά δέκα."],
        ],
      },
      {
        titleEl: "Με άρθρο ή χωρίς άρθρο",
        headers: ["Con artículo", "Sin artículo"],
        rows: [
          ["El domingo voy al cine. (este domingo)", "Hoy es domingo."],
          ["Los lunes trabajo. (todos los lunes)", "Mañana es martes."],
          ["Mi cumpleaños es el cinco de mayo.", "¿Qué día es hoy? Cinco de mayo."],
          ["Trabajo por la tarde.", "Como en casa a mediodía."],
          ["Estudio por la noche.", "Viajo en agosto."],
        ],
      },
    ],
    tipsEl: [
      "Και στα ελληνικά λέμε «το Σάββατο» για μία συγκεκριμένη μέρα και «τα Σάββατα» για συνήθεια. Στα ισπανικά το ίδιο: el sábado, los sábados.",
      "Η μία ώρα είναι ενικός (Es la una), οι υπόλοιπες πληθυντικός (Son las dos). Το «στις» γίνεται a las: a las ocho.",
      "Οι μήνες δεν παίρνουν άρθρο: en mayo. Οι ημέρες από Δευτέρα ως Παρασκευή δεν αλλάζουν στον πληθυντικό (los lunes), αλλά τα sábado και domingo παίρνουν -s στον πληθυντικό (los sábados, los domingos).",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Son ___ tres y media.", hintEl: "Είναι τρεισήμισι.", answer: "las" },
      { type: "cloze", id: "d2", textEs: "Es ___ una y cuarto.", hintEl: "Είναι μία και τέταρτο.", answer: "la", explainEl: "Για τη μία ώρα χρησιμοποιούμε ενικό: es la una." },
      { type: "order", id: "d3", promptEl: "Το τρένο φεύγει στις οκτώ.", solution: ["El", "tren", "sale", "a", "las", "ocho."], distractors: ["la", "los"], alternatives: [["A", "las", "ocho", "sale", "el", "tren."]] },
      { type: "choice", id: "d4", promptEs: "Mañana es ___.", promptEl: "Αύριο είναι Κυριακή.", options: ["domingo", "el domingo", "los domingos"], answer: "domingo", explainEl: "Όταν λέμε ποια μέρα είναι (σήμερα, αύριο, χθες), δεν βάζουμε άρθρο." },
      { type: "choice", id: "d5", promptEs: "Siempre voy al mercado ___ sábados.", promptEl: "Πηγαίνω πάντα στη λαϊκή τα Σάββατα.", options: ["los", "el", "un", "en"], answer: "los", explainEl: "Συνήθεια (κάθε Σάββατο): los sábados." },
      { type: "choice", id: "d6", promptEs: "El examen es ___ viernes.", promptEl: "Η εξέταση είναι την Παρασκευή.", options: ["el", "los", "en el"], answer: "el", explainEl: "Συγκεκριμένη ημέρα: el viernes." },
      { type: "cloze", id: "d7", textEs: "Mi cumpleaños es ___ veinte de abril.", hintEl: "Τα γενέθλιά μου είναι στις 20 Απριλίου.", answer: "el" },
      { type: "choice", id: "d8", promptEs: "Nací ___ mayo.", promptEl: "Γεννήθηκα τον Μάιο.", options: ["en", "el", "por", "a"], answer: "en", explainEl: "Με τους μήνες δεν βάζουμε άρθρο: en mayo." },
      { type: "choice", id: "d9", promptEs: "Voy a casa a ___.", promptEl: "Πηγαίνω σπίτι το μεσημέρι.", options: ["mediodía", "el mediodía", "la mediodía"], answer: "mediodía", explainEl: "Το a mediodía δεν παίρνει άρθρο (και al mediodía)." },
      { type: "cloze", id: "d10", textEs: "Estudio español por ___ tarde.", hintEl: "Μελετώ ισπανικά το απόγευμα.", answer: "la" },
      { type: "cloze", id: "d11", textEs: "La boda es ___ sábado, catorce de septiembre.", hintEl: "Ο γάμος είναι το Σάββατο 14 Σεπτεμβρίου.", answer: "el", explainEl: "Όταν λέμε ημέρα και ημερομηνία μαζί, βάζουμε μόνο ένα άρθρο, πριν από την ημέρα." },
      { type: "order", id: "d12", promptEl: "Τα Σάββατα παίζω τένις.", solution: ["Los", "sábados", "juego", "al", "tenis."], distractors: ["El", "del"], alternatives: [["Juego", "al", "tenis", "los", "sábados."]] },
    ],
    exercisesEl: [
      "Γράψε τις ώρες με τις λέξεις του πλαισίου και με la ή las.",
      "Συμπλήρωσε με el, la, los ή las όπου χρειάζεται (ημέρες της εβδομάδας).",
      "Συμπλήρωσε με el, la, los ή las όπου χρειάζεται (ημερομηνίες και μήνες).",
      "Συμπλήρωσε με el, la, los ή las όπου χρειάζεται (ημέρες, ώρες και μέρη της ημέρας).",
    ],
  },

  // Unidad 10
  {
    id: "u10",
    number: 10,
    page: 30,
    titleEs: "tocar la guitarra. Otros usos del artículo definido",
    titleEl: "Άλλες χρήσεις του οριστικού άρθρου",
    introEl:
      "Το οριστικό άρθρο χρησιμοποιείται με τα μουσικά όργανα, τα παιχνίδια, τα μαθήματα, τις γλώσσες, τα μέσα ενημέρωσης και πολλούς τόπους. Σε μερικές περιπτώσεις όμως παραλείπεται.",
    rules: [
      {
        textEl: "Όργανα με tocar: tocar el piano, la guitarra. Παιχνίδια και σπορ με jugar: jugar al fútbol, al tenis, al ajedrez, a las cartas (a + el = al).",
        examples: [
          { es: "Mi hermana toca el violín.", el: "Η αδερφή μου παίζει βιολί." },
          { es: "Mis amigos juegan al baloncesto.", el: "Οι φίλοι μου παίζουν μπάσκετ." },
          { es: "Jugamos a las cartas por la noche.", el: "Παίζουμε χαρτιά το βράδυ." },
        ],
      },
      {
        textEl: "Με το hacer + άσκηση ή άθλημα (ejercicio, gimnasia, natación, alpinismo) δεν βάζουμε άρθρο.",
        examples: [
          { es: "Mi padre hace natación todos los días.", el: "Ο πατέρας μου κάνει κολύμβηση κάθε μέρα." },
          { es: "Hago ejercicio por la mañana.", el: "Κάνω γυμναστική το πρωί." },
        ],
      },
      {
        textEl: "Μαθήματα και γλώσσες: με άρθρο όταν είναι υποκείμενο ή μετά από ser ή gustar. Χωρίς άρθρο μετά από hablar, saber, enseñar, estudiar.",
        examples: [
          { es: "El italiano es una lengua muy musical.", el: "Τα ιταλικά είναι μια πολύ μουσική γλώσσα." },
          { es: "Mi hermano habla alemán.", el: "Ο αδερφός μου μιλάει γερμανικά." },
          { es: "Estudio Biología en la universidad.", el: "Σπουδάζω Βιολογία στο πανεπιστήμιο." },
        ],
      },
      {
        textEl: "Με άρθρο: el cine, el teatro, la radio, la televisión, el periódico, las noticias. Με αόριστο άρθρο όταν εννοούμε το αντικείμενο ή κάτι συγκεκριμένο: una radio, una buena noticia.",
        examples: [
          { es: "Me gusta mucho el teatro.", el: "Μου αρέσει πολύ το θέατρο." },
          { es: "Escucho la radio en el coche.", el: "Ακούω ραδιόφωνο στο αυτοκίνητο." },
          { es: "Ayer me regalaron una radio.", el: "Χθες μου χάρισαν ένα ραδιόφωνο (συσκευή)." },
        ],
      },
      {
        textEl: "Τόποι με ir, venir, estar: συνήθως με άρθρο (ir al banco, estar en el hospital). Χωρίς άρθρο: casa, correos, clase (ir a casa, venir de clase, estar en correos).",
        examples: [
          { es: "Voy al banco a las diez.", el: "Πάω στην τράπεζα στις δέκα." },
          { es: "Estoy en casa.", el: "Είμαι σπίτι." },
          { es: "Mis hijos van a clase por la mañana.", el: "Τα παιδιά μου πηγαίνουν σχολείο το πρωί." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Με άρθρο ή χωρίς άρθρο",
        headers: ["Con artículo", "Sin artículo"],
        rows: [
          ["tocar el piano", "hacer gimnasia"],
          ["jugar al ajedrez", "hacer natación"],
          ["El griego es difícil.", "Hablo griego."],
          ["La Historia es interesante.", "Estudio Historia."],
        ],
      },
      {
        titleEl: "Τόποι με ir, venir, estar",
        headers: ["", "ir a", "venir de", "estar en"],
        rows: [
          ["con el", "al hospital, al banco", "del cine, del aeropuerto", "en el teatro, en el lavabo, en el dentista, en el trabajo"],
          ["con la", "a la iglesia", "de la universidad", "en la cárcel, en la oficina"],
          ["sin artículo", "a casa, a correos, a clase", "de casa, de correos, de clase", "en casa, en correos, en clase"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το «παίζω» χρησιμοποιείται παντού (παίζω πιάνο, παίζω ποδόσφαιρο). Στα ισπανικά: tocar για όργανα, jugar a για παιχνίδια και σπορ.",
      "Το ir a clase αντιστοιχεί στο «πάω μάθημα/σχολείο» και το ir a casa στο «πάω σπίτι»: δεν βάζουμε άρθρο.",
      "Οι γλώσσες γράφονται με μικρό: el griego, el español. Μετά το hablar δεν υπάρχει άρθρο: hablo griego.",
    ],
    drills: [
      { type: "choice", id: "d1", promptEs: "Mi hermano toca ___ trompeta.", promptEl: "Ο αδερφός μου παίζει τρομπέτα.", options: ["la", "a la", "el", "en la"], answer: "la", explainEl: "Με το tocar και όργανο βάζουμε οριστικό άρθρο, χωρίς πρόθεση." },
      { type: "choice", id: "d2", promptEs: "Mis amigos y yo jugamos ___ tenis los sábados.", promptEl: "Οι φίλοι μου κι εγώ παίζουμε τένις τα Σάββατα.", options: ["al", "el", "a el", "en el"], answer: "al", explainEl: "Με το jugar χρειάζεται η πρόθεση a: a + el = al." },
      { type: "choice", id: "d3", promptEs: "Marta hace ___ todos los días.", promptEl: "Η Marta κάνει γυμναστική κάθε μέρα.", options: ["gimnasia", "la gimnasia", "una gimnasia"], answer: "gimnasia", explainEl: "Με το hacer + άσκηση δεν βάζουμε άρθρο." },
      { type: "cloze", id: "d4", textEs: "Mi abuelo juega ___ dominó.", hintEl: "Ο παππούς μου παίζει ντόμινο.", answer: "al" },
      { type: "cloze", id: "d5", textEs: "Mi asignatura favorita es ___ Química.", hintEl: "Το αγαπημένο μου μάθημα είναι η Χημεία.", answer: "la" },
      { type: "choice", id: "d6", promptEs: "Julia habla ___ muy bien.", promptEl: "Η Julia μιλάει κινέζικα πολύ καλά.", options: ["chino", "el chino", "un chino"], answer: "chino", explainEl: "Μετά το hablar η γλώσσα δεν παίρνει άρθρο." },
      { type: "cloze", id: "d7", textEs: "___ ruso es una lengua difícil.", hintEl: "Τα ρωσικά είναι μια δύσκολη γλώσσα.", answer: "El", explainEl: "Όταν η γλώσσα είναι υποκείμενο, παίρνει άρθρο." },
      { type: "cloze", id: "d8", textEs: "Mis padres van ___ teatro los sábados.", hintEl: "Οι γονείς μου πηγαίνουν στο θέατρο τα Σάββατα.", answer: "al" },
      { type: "cloze", id: "d9", textEs: "Estoy cansado: voy ___ casa.", hintEl: "Είμαι κουρασμένος: πάω σπίτι.", answer: "a", explainEl: "Το casa δεν παίρνει άρθρο: ir a casa." },
      { type: "choice", id: "d10", promptEs: "Hoy no voy ___ clase porque estoy enfermo.", promptEl: "Σήμερα δεν πάω μάθημα, γιατί είμαι άρρωστος.", options: ["a", "a la", "al"], answer: "a", explainEl: "Το clase, όπως και το casa, δεν παίρνει άρθρο: ir a clase." },
      { type: "order", id: "d11", promptEl: "Η γιαγιά μου παίζει βιολί.", solution: ["Mi", "abuela", "toca", "el", "violín."], distractors: ["juega", "al"] },
      { type: "order", id: "d12", promptEl: "Ο αδερφός μου παίζει μπάσκετ.", solution: ["Mi", "hermano", "juega", "al", "baloncesto."], distractors: ["toca", "el"] },
    ],
    exercisesEl: [
      "Κοίταξε τις εικόνες και συμπλήρωσε τις προτάσεις με όργανα και παιχνίδια του πλαισίου.",
      "Συμπλήρωσε με el, la, los, las ή un, una, unos, unas όπου χρειάζεται.",
      "Κοίταξε τις εικόνες και συμπλήρωσε με τους τόπους του πλαισίου και με el, la όπου χρειάζεται.",
    ],
  },

  // Unidad 11
  {
    id: "u11",
    number: 11,
    page: 32,
    titleEs: "el rojo, uno rojo. Omisión del nombre",
    titleEl: "Παράλειψη του ουσιαστικού",
    introEl:
      "Για να μην επαναλαμβάνεις ένα ουσιαστικό που ήδη ξέρει ο συνομιλητής σου, το παραλείπεις και κρατάς το άρθρο με το επίθετο ή με το de + ουσιαστικό. Έτσι μιλάς πιο φυσικά.",
    rules: [
      {
        textEl: "Αντί να επαναλάβουμε το ουσιαστικό, κρατάμε το άρθρο (el, la, los, las ή un, una...) και το επίθετο: la camisa verde → la verde.",
        examples: [
          { es: "¿Qué falda te gusta? La azul.", el: "Ποια φούστα σου αρέσει; Η μπλε." },
          { es: "Mis zapatos son viejos. Quiero unos nuevos.", el: "Τα παπούτσια μου είναι παλιά. Θέλω καινούρια." },
        ],
      },
      {
        textEl: "El, la, los, las δείχνουν κάτι συγκεκριμένο που ξέρουμε. Uno, una, unos, unas δείχνουν ένα οποιοδήποτε του είδους. Όταν δεν ακολουθεί ουσιαστικό, το un γίνεται uno.",
        examples: [
          { es: "¿Cuál es tu hermano? El alto.", el: "Ποιος είναι ο αδερφός σου; Ο ψηλός." },
          { es: "Busco una mochila. Quiero una grande.", el: "Ψάχνω ένα σακίδιο. Θέλω ένα μεγάλο." },
          { es: "¿Tienes un bolígrafo? Necesito uno negro.", el: "Έχεις ένα στυλό; Χρειάζομαι ένα μαύρο." },
        ],
      },
      {
        textEl: "Το άρθρο και το επίθετο ταιριάζουν σε γένος και αριθμό με το ουσιαστικό που παραλείψαμε.",
        examples: [
          { es: "¿Qué botas compras? Las negras.", el: "Ποιες μπότες αγοράζεις; Τις μαύρες." },
          { es: "Esta mesa es pequeña. Necesito una más grande.", el: "Αυτό το τραπέζι είναι μικρό. Χρειάζομαι ένα μεγαλύτερο." },
        ],
      },
      {
        textEl: "El, la, los, las + de + ουσιαστικό δείχνει καταγωγή, κτήση, θέση ή υλικό: el de Madrid, la de mi madre, los de lana, las de la izquierda. Το de + el γίνεται del.",
        examples: [
          { es: "Mi móvil es nuevo, pero el de Ana es viejo.", el: "Το κινητό μου είναι καινούριο, αλλά της Ana είναι παλιό." },
          { es: "¿Quién es Pablo? El del jersey verde.", el: "Ποιος είναι ο Pablo; Αυτός με το πράσινο πουλόβερ." },
          { es: "No me gusta la sopa de pollo. Prefiero la de verduras.", el: "Δεν μου αρέσει η κοτόσουπα. Προτιμώ τη σούπα λαχανικών." },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Με και χωρίς το ουσιαστικό",
        headers: ["Con el nombre", "Sin el nombre"],
        rows: [
          ["la camisa verde", "la verde"],
          ["un coche pequeño", "uno pequeño"],
          ["los zapatos de piel", "los de piel"],
          ["unas gafas nuevas", "unas nuevas"],
          ["el chico del pelo largo", "el del pelo largo"],
        ],
      },
    ],
    tipsEl: [
      "Στα ελληνικά το ίδιο γίνεται με το «το» + επίθετο: «Ποιο πουκάμισο θες; Το πράσινο.» Στα ισπανικά: La verde (θηλυκό, γιατί camisa είναι θηλυκό).",
      "Το un γίνεται uno όταν λείπει το ουσιαστικό: un coche pequeño, αλλά Quiero uno pequeño (όχι «un pequeño»). Το una μένει una.",
      "Το el de... σημαίνει «αυτό (ή αυτός) του...»: el de mi hermano, la de Ana. Είναι πολύ συχνό και δεν έχει ακριβές ελληνικό αντίστοιχο.",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "¿Qué camisa prefieres, la blanca o ___ azul?", hintEl: "Ποιο πουκάμισο προτιμάς, το λευκό ή το μπλε;", answer: "la", explainEl: "Το άρθρο συμφωνεί με το camisa, που είναι θηλυκό." },
      { type: "cloze", id: "d2", textEs: "Me gustan estos zapatos, pero prefiero ___ negros.", hintEl: "Μου αρέσουν αυτά τα παπούτσια, αλλά προτιμώ τα μαύρα.", answer: "los" },
      { type: "cloze", id: "d3", textEs: "¿Qué coche busca? ___ pequeño, por favor.", hintEl: "Τι αυτοκίνητο ψάχνετε; Ένα μικρό, παρακαλώ.", answer: "Uno", explainEl: "Όταν λείπει το ουσιαστικό, το un γίνεται uno." },
      { type: "cloze", id: "d4", textEs: "Hay dos camisas. ¿Cuál quieres? ___ roja.", hintEl: "Υπάρχουν δύο πουκάμισα. Ποιο θέλεις; Το κόκκινο.", answer: "La" },
      { type: "choice", id: "d5", promptEs: "Necesito un ordenador. Busco ___ barato.", promptEl: "Χρειάζομαι έναν υπολογιστή. Ψάχνω έναν φθηνό.", options: ["uno", "el", "un", "una"], answer: "uno", explainEl: "Ένας οποιοσδήποτε υπολογιστής του είδους και χωρίς ουσιαστικό: uno." },
      { type: "choice", id: "d6", promptEs: "¿Quién es Marta? ___ del vestido rojo.", promptEl: "Ποια είναι η Marta; Αυτή με το κόκκινο φόρεμα.", options: ["La", "El", "Una", "Las"], answer: "La" },
      { type: "cloze", id: "d7", textEs: "Este bolso es más caro que ___ de mi hermana.", hintEl: "Αυτή η τσάντα είναι πιο ακριβή από της αδερφής μου.", answer: "el", explainEl: "Το άρθρο συμφωνεί με το bolso, που είναι αρσενικό: el de mi hermana." },
      { type: "cloze", id: "d8", textEs: "No quiero esas tijeras. Necesito ___ más grandes.", hintEl: "Δεν θέλω αυτό το ψαλίδι. Χρειάζομαι ένα μεγαλύτερο.", answer: "unas", explainEl: "Ένα οποιοδήποτε ψαλίδι: unas. Το tijeras είναι πληθυντικός." },
      { type: "cloze", id: "d9", textEs: "Este vaso está sucio. Dame ___ limpio, por favor.", hintEl: "Αυτό το ποτήρι είναι βρώμικο. Δώσε μου ένα καθαρό, παρακαλώ.", answer: "uno" },
      { type: "choice", id: "d10", promptEs: "Quieres un coche grande. ¿Qué dices?", promptEl: "Θέλεις ένα μεγάλο αυτοκίνητο. Τι λες;", options: ["Quiero uno grande.", "Quiero un grande.", "Quiero una grande."], answer: "Quiero uno grande." },
      { type: "order", id: "d11", promptEl: "Η μηχανή μου είναι κόκκινη και της Ana είναι μπλε.", solution: ["Mi", "moto", "es", "roja", "y", "la", "de", "Ana", "es", "azul."], distractors: ["el", "del"] },
      { type: "order", id: "d12", promptEl: "Προτιμώ τα κόκκινα, παρακαλώ.", solution: ["Prefiero", "las", "rojas,", "por", "favor."], distractors: ["unas", "rojos"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με el, la, los, las ή uno, una, unos, unas και τα επίθετα σε παρένθεση.",
      "Κοίταξε τις εικόνες και συμπλήρωσε τις προτάσεις με el, la, los, las, de και τις δοσμένες λέξεις.",
      "Συμπλήρωσε με el, la, los, las, un, una, unos, unas και de όπου χρειάζεται.",
    ],
  },

  // Unidad 12
  {
    id: "u12",
    number: 12,
    page: 34,
    titleEs: "este, ese, aquel... Demostrativos",
    titleEl: "Δεικτικές αντωνυμίες",
    introEl:
      "Τα δεικτικά (este, ese, aquel) δείχνουν πράγματα και πρόσωπα ανάλογα με το πόσο κοντά ή μακριά είναι. Τα ισπανικά έχουν τρεις βαθμούς απόστασης, ενώ τα ελληνικά βασικά δύο.",
    rules: [
      {
        textEl: "Este = κοντά σε μένα, ese = κοντά σε σένα, aquel = μακριά και από τους δύο. Συμφωνούν σε γένος και αριθμό με το ουσιαστικό.",
        examples: [
          { es: "Este libro es mío.", el: "Αυτό το βιβλίο είναι δικό μου." },
          { es: "¿De quién es ese bolso?", el: "Ποιανού είναι αυτή η τσάντα (εκεί κοντά σου);" },
          { es: "Aquel edificio es muy antiguo.", el: "Εκείνο το κτίριο είναι πολύ παλιό." },
        ],
      },
      {
        textEl: "Μερικές φορές το ese, esa, esos, esas χρησιμοποιείται και για κάτι που είναι μακριά και από τους δύο.",
        examples: [{ es: "Mira esa montaña, es muy alta.", el: "Κοίτα εκείνο το βουνό, είναι πολύ ψηλό." }],
      },
      {
        textEl: "Τα δεικτικά συνοδεύουν ουσιαστικό ή λειτουργούν μόνα τους ως αντωνυμίες (με την ίδια μορφή).",
        examples: [
          { es: "Estas botas son cómodas.", el: "Αυτές οι μπότες είναι άνετες." },
          { es: "¿Qué bolsa quieres? Esa.", el: "Ποια τσάντα θέλεις; Εκείνη." },
          { es: "Este es Daniel, mi compañero.", el: "Αυτός είναι ο Daniel, ο συνάδελφός μου." },
        ],
      },
      {
        textEl: "Το este, esta... χρησιμοποιείται και με χρονικές εκφράσεις για το παρόν, το πρόσφατο παρελθόν και το κοντινό μέλλον: esta semana, este verano, esta noche.",
        examples: [
          { es: "Esta tarde tengo clase.", el: "Σήμερα το απόγευμα έχω μάθημα." },
          { es: "Este año estudio español.", el: "Φέτος μαθαίνω ισπανικά." },
          { es: "Este invierno ha nevado mucho.", el: "Φέτος τον χειμώνα χιόνισε πολύ." },
        ],
      },
      {
        textEl: "Τα esto, eso, aquello είναι ουδέτερα και δεν συνοδεύουν ουσιαστικό. Τα χρησιμοποιούμε όταν δεν ξέρουμε τι είναι κάτι ή δεν χρειάζεται να το ονομάσουμε.",
        examples: [
          { es: "¿Qué es eso?", el: "Τι είναι αυτό;" },
          { es: "¿Cómo se dice esto en español?", el: "Πώς λέγεται αυτό στα ισπανικά;" },
          { es: "¿De quién es aquello?", el: "Ποιανού είναι εκείνο (εκεί μακριά);" },
        ],
      },
    ],
    tables: [
      {
        titleEl: "Οι μορφές των δεικτικών",
        headers: ["", "Masculino singular", "Femenino singular", "Masculino plural", "Femenino plural", "Neutro"],
        rows: [
          ["cerca de mí", "este", "esta", "estos", "estas", "esto"],
          ["cerca de ti o de usted", "ese", "esa", "esos", "esas", "eso"],
          ["lejos de los dos", "aquel", "aquella", "aquellos", "aquellas", "aquello"],
        ],
      },
    ],
    tipsEl: [
      "Τα ελληνικά έχουν δύο βαθμούς (αυτός, εκείνος), τα ισπανικά τρεις. Το ese δεν είναι ακριβώς «εκείνος»: συχνά σημαίνει «αυτός εκεί, κοντά σου».",
      "Τα δεικτικά δεν παίρνουν άρθρο: este libro, όχι «el este libro». Σήμερα γράφονται χωρίς τόνο και όταν είναι αντωνυμίες: Este es Pedro.",
      "Οι εκφράσεις esta noche, esta tarde, este fin de semana λένε «απόψε, σήμερα το απόγευμα, αυτό το Σαββατοκύριακο».",
    ],
    drills: [
      { type: "cloze", id: "d1", textEs: "Mira, ___ libro que tengo aquí es muy bueno.", hintEl: "Κοίτα, αυτό το βιβλίο που κρατάω εδώ είναι πολύ καλό.", answer: "este", explainEl: "Το βιβλίο είναι κοντά σε αυτόν που μιλάει: este." },
      { type: "cloze", id: "d2", textEs: "¿Me das ___ vaso que tienes a tu lado?", hintEl: "Μου δίνεις αυτό το ποτήρι που έχεις δίπλα σου;", answer: "ese", explainEl: "Το ποτήρι είναι κοντά σε αυτόν που ακούει: ese." },
      { type: "choice", id: "d3", promptEs: "¿Ves ___ montañas del fondo? Son muy altas.", promptEl: "Βλέπεις εκείνα τα βουνά στο βάθος, μακριά και από τους δύο; Είναι πολύ ψηλά.", options: ["aquellas", "estas", "estos", "aquel"], answer: "aquellas", explainEl: "Μακριά και από τους δύο, θηλυκό πληθυντικό: aquellas." },
      { type: "choice", id: "d4", promptEs: "Pedro, ¿de quién es ___ mochila que tienes a tu lado?", promptEl: "Pedro, ποιανού είναι αυτό το σακίδιο που έχεις δίπλα σου;", options: ["esa", "esta", "aquella", "este"], answer: "esa" },
      { type: "choice", id: "d5", promptEs: "___ semana tengo mucho trabajo.", promptEl: "Αυτή την εβδομάδα έχω πολλή δουλειά.", options: ["Esta", "Esa", "Aquella", "Estos"], answer: "Esta", explainEl: "Για το παρόν (αυτή την εβδομάδα) χρησιμοποιούμε το este, esta." },
      { type: "choice", id: "d6", promptEs: "¿Qué es ___? No lo sé.", promptEl: "Τι είναι αυτό; Δεν ξέρω.", options: ["esto", "este", "esta", "estos"], answer: "esto", explainEl: "Όταν δεν ξέρουμε τι είναι κάτι, χρησιμοποιούμε το ουδέτερο esto." },
      { type: "cloze", id: "d7", textEs: "¿Cómo se llama ___ en español?", hintEl: "Πώς λέγεται αυτό στα ισπανικά;", answer: "esto", alternatives: ["eso", "aquello"], explainEl: "Τα ουδέτερα esto, eso, aquello δεν συνοδεύουν ουσιαστικό." },
      { type: "choice", id: "d8", promptEs: "¿Qué opción es correcta?", promptEl: "Αυτό το βιβλίο.", options: ["esto libro", "este libro", "esta libro", "estos libro"], answer: "este libro", explainEl: "Το libro είναι αρσενικό ενικού: este libro. Το esto δεν συνοδεύει ουσιαστικό." },
      { type: "cloze", id: "d9", textEs: "Luis vive en ___ casa blanca del final de la calle, lejos de nosotros.", hintEl: "Ο Luis μένει σε εκείνο το λευκό σπίτι στο τέλος του δρόμου, μακριά από εμάς.", answer: "aquella", alternatives: ["esa"] },
      { type: "order", id: "d10", promptEl: "Αυτό το αγόρι είναι φίλος μου.", solution: ["Este", "chico", "es", "mi", "amigo."], distractors: ["Esta", "Esto"] },
      { type: "order", id: "d11", promptEl: "Απόψε δειπνούμε στο σπίτι.", solution: ["Esta", "noche", "cenamos", "en", "casa."], distractors: ["Este", "Esa"], alternatives: [["Cenamos", "en", "casa", "esta", "noche."]] },
      { type: "order", id: "d12", promptEl: "Αυτά τα γυαλιά (κοντά σε σένα) είναι πολύ ακριβά.", solution: ["Esas", "gafas", "son", "muy", "caras."], distractors: ["Esos", "aquel"] },
    ],
    exercisesEl: [
      "Συμπλήρωσε με este, esta, ese, esa, aquel, aquella και τις λέξεις του πλαισίου.",
      "Συμπλήρωσε με este, esta, ese, esa, aquel ή aquella.",
      "Συμπλήρωσε με este, ese ή aquel (εκφράσεις χρόνου).",
      "Συμπλήρωσε με esto, eso ή aquello.",
    ],
  },
];
