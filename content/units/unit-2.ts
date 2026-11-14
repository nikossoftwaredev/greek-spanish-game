import type { Unit, VocabItem } from "@/types/content";

const LANGUAGE_ITEMS: VocabItem[] = [
  { id: "u2-ingles", es: "inglés", el: "αγγλικά", pos: "noun", gender: "m", noteEl: "Το όνομα της γλώσσας είναι ίδιο με το αρσενικό της εθνικότητας: inglés = Άγγλος και αγγλικά. Γράφεται με μικρό και μετά από hablar, aprender, estudiar συνήθως χωρίς άρθρο.", example: { es: "Hablo inglés y griego.", el: "Μιλάω αγγλικά και ελληνικά." } },
  { id: "u2-frances", es: "francés", el: "γαλλικά", pos: "noun", gender: "m", example: { es: "Mi amiga habla francés.", el: "Η φίλη μου μιλάει γαλλικά." } },
  { id: "u2-aleman", es: "alemán", el: "γερμανικά", pos: "noun", gender: "m", example: { es: "Aprendo alemán en la universidad.", el: "Μαθαίνω γερμανικά στο πανεπιστήμιο." } },
  { id: "u2-chino", es: "chino", el: "κινεζικά", pos: "noun", gender: "m", noteEl: "Το ch ακούγεται σαν «τσ»: «τσίνο».", example: { es: "El chino es muy difícil.", el: "Τα κινεζικά είναι πολύ δύσκολα." } },
  { id: "u2-ruso", es: "ruso", el: "ρωσικά", pos: "noun", gender: "m", example: { es: "Mi profesor habla ruso.", el: "Ο καθηγητής μου μιλάει ρωσικά." } },
  { id: "u2-arabe", es: "árabe", el: "αραβικά", pos: "noun", gender: "m", noteEl: "Ο τόνος πέφτει στο á: Á-ra-be.", example: { es: "Quiero aprender árabe.", el: "Θέλω να μάθω αραβικά." } },
  { id: "u2-italiano", es: "italiano", el: "ιταλικά", pos: "noun", gender: "m", example: { es: "El italiano y el español son parecidos.", el: "Τα ιταλικά και τα ισπανικά μοιάζουν." } },
  { id: "u2-espanol", es: "español", el: "ισπανικά", pos: "noun", gender: "m", noteEl: "Η γλώσσα λέγεται και «castellano».", example: { es: "Hablo español con mis amigos.", el: "Μιλάω ισπανικά με τους φίλους μου." } },
  { id: "u2-griego", es: "griego", el: "ελληνικά", pos: "noun", gender: "m", noteEl: "Δεν υπάρχει στη λίστα του βιβλίου, αλλά είναι η δική σου γλώσσα.", example: { es: "Mi lengua es el griego.", el: "Η γλώσσα μου είναι τα ελληνικά." } },
];

export const unit2: Unit = {
  id: 2,
  titleEs: "Quiero aprender español",
  titleEl: "Θέλω να μάθω ισπανικά",
  goalEl: "Μιλάω για τη σχέση μου με τα ισπανικά και την ισπανόφωνη κουλτούρα: λέω τι θέλω να κάνω, γιατί το κάνω και τι κάνω στον ελεύθερο χρόνο μου.",
  color: "#e30713",
  pages: { start: 28, end: 41, lexico: 36, gramatica: 37 },
  communicativeEl: [
    "Εκφράζω προθέσεις και σχέδια (quiero + απαρέμφατο)",
    "Εξηγώ τους λόγους για όσα κάνω (por, porque, para)",
    "Μιλάω για όσα ξέρω να κάνω σε διάφορες γλώσσες",
    "Λέω τι κάνω στον ελεύθερο χρόνο μου και στο μάθημα γλώσσας",
    "Μιλάω για την ισπανική και ισπανόφωνη κουλτούρα",
  ],
  verbIds: ["hablar", "comprender", "escribir", "hacer", "querer"],
  vocab: [
    {
      id: "cultura",
      page: 36,
      section: "Léxico",
      titleEs: "Aspectos relacionados con la cultura",
      titleEl: "Πτυχές του πολιτισμού",
      items: [
        { id: "u2-historia", es: "historia", el: "ιστορία", pos: "noun", gender: "f", example: { es: "Estudio la historia de España.", el: "Μελετώ την ιστορία της Ισπανίας." } },
        { id: "u2-comida", es: "comida", el: "φαγητό / κουζίνα", pos: "noun", gender: "f", noteEl: "Σημαίνει και «γεύμα»: la comida είναι συχνά το μεσημεριανό.", example: { es: "La comida mexicana es muy rica.", el: "Η μεξικάνικη κουζίνα είναι πολύ νόστιμη." } },
        { id: "u2-musica", es: "música", el: "μουσική", pos: "noun", gender: "f", noteEl: "Ο τόνος πέφτει στο mú.", example: { es: "Escucho música española.", el: "Ακούω ισπανική μουσική." } },
        { id: "u2-literatura", es: "literatura", el: "λογοτεχνία", pos: "noun", gender: "f", example: { es: "La literatura latinoamericana es muy famosa.", el: "Η λατινοαμερικανική λογοτεχνία είναι πολύ διάσημη." } },
        { id: "u2-naturaleza", es: "naturaleza", el: "φύση", pos: "noun", gender: "f", example: { es: "Costa Rica tiene mucha naturaleza.", el: "Η Κόστα Ρίκα έχει πολλή φύση." } },
        { id: "u2-pueblo", es: "pueblo", el: "χωριό / κωμόπολη", pos: "noun", gender: "m", noteEl: "Σημαίνει και «λαός»: el pueblo español.", example: { es: "Mis abuelos viven en un pueblo.", el: "Οι παππούδες μου ζουν σε ένα χωριό." } },
        { id: "u2-ciudad", es: "ciudad", el: "πόλη", pos: "noun", gender: "f", noteEl: "Πληθυντικός: ciudades.", example: { es: "Madrid es una ciudad muy grande.", el: "Η Μαδρίτη είναι μια πολύ μεγάλη πόλη." } },
        { id: "u2-arte", es: "arte", el: "τέχνη", pos: "noun", gender: "m", noteEl: "Προσοχή στο γένος: el arte είναι αρσενικό, ενώ η «τέχνη» στα ελληνικά είναι θηλυκό. Στον πληθυντικό: las artes.", example: { es: "Quiero visitar un museo de arte.", el: "Θέλω να επισκεφτώ ένα μουσείο τέχνης." } },
        { id: "u2-cine", es: "cine", el: "κινηματογράφος / σινεμά", pos: "noun", gender: "m", noteEl: "Είναι και η τέχνη και η αίθουσα προβολής.", example: { es: "El cine español es muy bueno.", el: "Ο ισπανικός κινηματογράφος είναι πολύ καλός." } },
        { id: "u2-vida-nocturna", es: "vida nocturna", el: "νυχτερινή ζωή", pos: "noun", gender: "f", example: { es: "La vida nocturna de Madrid es famosa.", el: "Η νυχτερινή ζωή της Μαδρίτης είναι διάσημη." } },
      ],
    },
    {
      id: "idiomas",
      page: 36,
      section: "Léxico",
      titleEs: "Idiomas",
      titleEl: "Γλώσσες",
      items: LANGUAGE_ITEMS,
    },
    {
      id: "actividades-de-ocio",
      page: 36,
      section: "Léxico",
      titleEs: "Actividades de ocio y de la clase de lengua",
      titleEl: "Δραστηριότητες ελεύθερου χρόνου και μαθήματος γλώσσας",
      items: [
        { id: "u2-ir-a-un-concierto", es: "ir a un concierto", el: "πηγαίνω σε συναυλία", pos: "phrase", example: { es: "Esta noche voy a un concierto.", el: "Απόψε πηγαίνω σε μια συναυλία." } },
        { id: "u2-ir-a-un-museo", es: "ir a un museo", el: "πηγαίνω σε μουσείο", pos: "phrase", example: { es: "Mis padres van a un museo.", el: "Οι γονείς μου πηγαίνουν σε ένα μουσείο." } },
        { id: "u2-ir-a-una-exposicion", es: "ir a una exposición", el: "πηγαίνω σε έκθεση", pos: "phrase", noteEl: "Προσοχή: exposición σημαίνει «έκθεση» (π.χ. τέχνης). Η «έκθεση» σχολική είναι redacción.", example: { es: "Quiero ir a una exposición de fotos.", el: "Θέλω να πάω σε μια έκθεση φωτογραφίας." } },
        { id: "u2-ir-a-la-playa", es: "ir a la playa", el: "πηγαίνω στην παραλία", pos: "phrase", example: { es: "En verano vamos a la playa.", el: "Το καλοκαίρι πηγαίνουμε στην παραλία." } },
        { id: "u2-ir-al-cine", es: "ir al cine", el: "πηγαίνω στο σινεμά", pos: "phrase", noteEl: "a + el = al: «ir al cine», όχι «ir a el cine».", example: { es: "Los sábados voy al cine con mis amigos.", el: "Τα Σάββατα πηγαίνω σινεμά με τους φίλους μου." } },
        { id: "u2-ir-al-teatro", es: "ir al teatro", el: "πηγαίνω στο θέατρο", pos: "phrase", noteEl: "a + el = al.", example: { es: "Mi hermana va al teatro.", el: "Η αδερφή μου πηγαίνει στο θέατρο." } },
        { id: "u2-ir-de-compras", es: "ir de compras", el: "πηγαίνω για ψώνια", pos: "phrase", example: { es: "Hoy voy de compras con mi madre.", el: "Σήμερα πηγαίνω για ψώνια με τη μητέρα μου." } },
        { id: "u2-ir-de-excursion", es: "ir de excursión", el: "πηγαίνω εκδρομή", pos: "phrase", example: { es: "El domingo vamos de excursión.", el: "Την Κυριακή πηγαίνουμε εκδρομή." } },
        { id: "u2-salir-a-cenar", es: "salir a cenar", el: "βγαίνω για φαγητό (βραδινό)", pos: "phrase", example: { es: "Esta noche salimos a cenar.", el: "Απόψε βγαίνουμε για φαγητό." } },
        { id: "u2-salir-a-bailar", es: "salir a bailar", el: "βγαίνω για χορό", pos: "phrase", example: { es: "Los viernes salgo a bailar.", el: "Τις Παρασκευές βγαίνω για χορό." } },
        { id: "u2-salir-de-noche", es: "salir de noche", el: "βγαίνω το βράδυ (για διασκέδαση)", pos: "phrase", noteEl: "Το ρήμα salir έχει ανώμαλο yo: salgo." },
        { id: "u2-salir-con-amigos", es: "salir con amigos/as", el: "βγαίνω με φίλους / φίλες", pos: "phrase", example: { es: "Salgo con mis amigas.", el: "Βγαίνω με τις φίλες μου." } },
        { id: "u2-salir-con-companeros", es: "salir con mis compañeros/as", el: "βγαίνω με τους συμμαθητές / συναδέλφους μου", pos: "phrase", noteEl: "Το compañero/a είναι ο συμμαθητής ή ο συνάδελφος." },
        { id: "u2-hacer-un-curso-de-teatro", es: "hacer un curso de teatro", el: "κάνω μάθημα θεάτρου", pos: "phrase", example: { es: "Quiero hacer un curso de teatro.", el: "Θέλω να κάνω μάθημα θεάτρου." } },
        { id: "u2-hacer-un-intercambio", es: "hacer un intercambio con un/a nativo/a", el: "κάνω ανταλλαγή γλωσσών με φυσικό ομιλητή", pos: "phrase", noteEl: "Στον intercambio δύο άνθρωποι εξασκούν ο ένας τη γλώσσα του άλλου.", example: { es: "Hago un intercambio con una chica de Perú.", el: "Κάνω ανταλλαγή γλωσσών με ένα κορίτσι από το Περού." } },
        { id: "u2-hacer-ejercicios-de-gramatica", es: "hacer ejercicios de gramática", el: "κάνω ασκήσεις γραμματικής", pos: "phrase", example: { es: "Hago ejercicios de gramática en casa.", el: "Κάνω ασκήσεις γραμματικής στο σπίτι." } },
        { id: "u2-hacer-fotos", es: "hacer fotos", el: "βγάζω φωτογραφίες", pos: "phrase", noteEl: "Στη Λατινική Αμερική λένε συχνότερα «sacar fotos» ή «tomar fotos».", example: { es: "Hago fotos de la playa.", el: "Βγάζω φωτογραφίες της παραλίας." } },
        { id: "u2-ver-la-television", es: "ver la televisión", el: "βλέπω τηλεόραση", pos: "phrase", noteEl: "Στα ισπανικά το «τηλεόραση» παίρνει άρθρο: ver la televisión. Συχνά και «ver la tele».", example: { es: "Veo la televisión por la noche.", el: "Βλέπω τηλεόραση το βράδυ." } },
        { id: "u2-ver-una-serie", es: "ver una serie", el: "βλέπω μια σειρά", pos: "phrase", example: { es: "Veo una serie en español.", el: "Βλέπω μια σειρά στα ισπανικά." } },
        { id: "u2-ver-una-pelicula", es: "ver una película", el: "βλέπω μια ταινία", pos: "phrase", example: { es: "Esta noche vemos una película.", el: "Απόψε βλέπουμε μια ταινία." } },
        { id: "u2-escuchar-musica", es: "escuchar música", el: "ακούω μουσική", pos: "phrase", example: { es: "Escucho música en el autobús.", el: "Ακούω μουσική στο λεωφορείο." } },
        { id: "u2-escuchar-la-radio", es: "escuchar la radio", el: "ακούω ραδιόφωνο", pos: "phrase", example: { es: "Mi abuelo escucha la radio.", el: "Ο παππούς μου ακούει ραδιόφωνο." } },
        { id: "u2-escuchar-un-podcast", es: "escuchar un pódcast", el: "ακούω ένα podcast", pos: "phrase", noteEl: "Η λέξη pódcast έχει τόνο στο pó.", example: { es: "Escucho un pódcast en español.", el: "Ακούω ένα podcast στα ισπανικά." } },
        { id: "u2-leer-el-periodico", es: "leer el periódico", el: "διαβάζω την εφημερίδα", pos: "phrase", example: { es: "Mi padre lee el periódico por la mañana.", el: "Ο πατέρας μου διαβάζει την εφημερίδα το πρωί." } },
        { id: "u2-leer-una-revista", es: "leer una revista", el: "διαβάζω ένα περιοδικό", pos: "phrase", example: { es: "Leo una revista de viajes.", el: "Διαβάζω ένα ταξιδιωτικό περιοδικό." } },
        { id: "u2-leer-un-libro", es: "leer un libro", el: "διαβάζω ένα βιβλίο", pos: "phrase", example: { es: "Leo un libro en la playa.", el: "Διαβάζω ένα βιβλίο στην παραλία." } },
        { id: "u2-escribir-un-mensaje", es: "escribir un mensaje", el: "γράφω ένα μήνυμα", pos: "phrase", example: { es: "Escribo un mensaje a mi amigo.", el: "Γράφω ένα μήνυμα στον φίλο μου." } },
        { id: "u2-escribir-un-texto", es: "escribir un texto", el: "γράφω ένα κείμενο", pos: "phrase", example: { es: "En clase escribimos un texto corto.", el: "Στην τάξη γράφουμε ένα σύντομο κείμενο." } },
        { id: "u2-escribir-un-diario", es: "escribir un diario", el: "γράφω ημερολόγιο", pos: "phrase", noteEl: "Προσοχή: diario = ημερολόγιο (προσωπικό) αλλά και καθημερινή εφημερίδα. Το ημερολόγιο τοίχου είναι calendario." },
        { id: "u2-hablar-un-idioma", es: "hablar un idioma", el: "μιλάω μια γλώσσα", pos: "phrase", example: { es: "Hablo un idioma más: el francés.", el: "Μιλάω μία γλώσσα ακόμη: τα γαλλικά." } },
        { id: "u2-hablar-espanol", es: "hablar español", el: "μιλάω ισπανικά", pos: "phrase", noteEl: "Μετά το hablar συνήθως δεν βάζουμε άρθρο: hablar español, όχι «hablar el español».", example: { es: "Hablo un poco de español.", el: "Μιλάω λίγο ισπανικά." } },
        { id: "u2-hablar-con-nativos", es: "hablar con nativos/as", el: "μιλάω με φυσικούς ομιλητές", pos: "phrase", example: { es: "Quiero hablar con nativos.", el: "Θέλω να μιλήσω με φυσικούς ομιλητές." } },
        { id: "u2-hablar-con-hispanohablantes", es: "hablar con hispanohablantes", el: "μιλάω με ισπανόφωνους", pos: "phrase", noteEl: "Το hispanohablante είναι ο ισπανόφωνος (και αρσενικό και θηλυκό).", example: { es: "En el curso hablo con hispanohablantes.", el: "Στο μάθημα μιλάω με ισπανόφωνους." } },
        { id: "u2-visitar-paginas-web", es: "visitar páginas web", el: "επισκέπτομαι ιστοσελίδες", pos: "phrase", example: { es: "Visito páginas web en español.", el: "Επισκέπτομαι ιστοσελίδες στα ισπανικά." } },
        { id: "u2-visitar-lugares-historicos", es: "visitar lugares históricos", el: "επισκέπτομαι ιστορικά μέρη", pos: "phrase", example: { es: "En Sevilla visitamos lugares históricos.", el: "Στη Σεβίλλη επισκεπτόμαστε ιστορικά μέρη." } },
        { id: "u2-visitar-a-la-familia", es: "visitar a la familia", el: "επισκέπτομαι την οικογένεια", pos: "phrase", noteEl: "Όταν το αντικείμενο είναι πρόσωπο, μπαίνει a: visitar a la familia, αλλά visitar un museo.", example: { es: "Los domingos visito a mi familia.", el: "Τις Κυριακές επισκέπτομαι την οικογένειά μου." } },
        { id: "u2-visitar-a-los-amigos", es: "visitar a los/as amigos/as", el: "επισκέπτομαι τους φίλους / τις φίλες", pos: "phrase", example: { es: "Visito a mis amigos en Valencia.", el: "Επισκέπτομαι τους φίλους μου στη Βαλένθια." } },
        { id: "u2-practicar-la-pronunciacion", es: "practicar la pronunciación", el: "εξασκώ την προφορά", pos: "phrase", noteEl: "Το -ción είναι πάντα θηλυκό: la pronunciación.", example: { es: "Practico la pronunciación con mi profesora.", el: "Εξασκώ την προφορά με την καθηγήτριά μου." } },
        { id: "u2-practicar-espanol", es: "practicar español", el: "εξασκώ τα ισπανικά", pos: "phrase", example: { es: "Practico español todos los días.", el: "Εξασκώ τα ισπανικά κάθε μέρα." } },
        { id: "u2-jugar-a-videojuegos", es: "jugar a videojuegos", el: "παίζω βιντεοπαιχνίδια", pos: "phrase", noteEl: "Το jugar παίρνει a: jugar a + παιχνίδι ή άθλημα. Το jugar έχει αλλαγή u → ue: juego.", example: { es: "Mi hermano juega a videojuegos.", el: "Ο αδερφός μου παίζει βιντεοπαιχνίδια." } },
        { id: "u2-jugar-al-futbol", es: "jugar al fútbol", el: "παίζω ποδόσφαιρο", pos: "phrase", noteEl: "a + el = al.", example: { es: "Jugamos al fútbol los sábados.", el: "Παίζουμε ποδόσφαιρο τα Σάββατα." } },
        { id: "u2-jugar-al-tenis", es: "jugar al tenis", el: "παίζω τένις", pos: "phrase", noteEl: "a + el = al.", example: { es: "Mi madre juega al tenis.", el: "Η μητέρα μου παίζει τένις." } },
        { id: "u2-aprender-un-idioma", es: "aprender un idioma", el: "μαθαίνω μια γλώσσα", pos: "phrase", noteEl: "Το idioma είναι αρσενικό, παρά το -a: el idioma.", example: { es: "Quiero aprender un idioma nuevo.", el: "Θέλω να μάθω μια νέα γλώσσα." } },
        { id: "u2-aprender-idiomas", es: "aprender idiomas", el: "μαθαίνω γλώσσες", pos: "phrase", example: { es: "Mi hermana aprende idiomas.", el: "Η αδερφή μου μαθαίνει γλώσσες." } },
        { id: "u2-aprender-ingles", es: "aprender inglés", el: "μαθαίνω αγγλικά", pos: "phrase", example: { es: "Mi hijo aprende inglés en la escuela.", el: "Ο γιος μου μαθαίνει αγγλικά στο σχολείο." } },
        { id: "u2-aprender-a-bailar", es: "aprender a bailar", el: "μαθαίνω να χορεύω", pos: "phrase", noteEl: "Πριν από απαρέμφατο το aprender παίρνει a: aprender a + απαρέμφατο.", example: { es: "Quiero aprender a bailar salsa.", el: "Θέλω να μάθω να χορεύω σάλσα." } },
        { id: "u2-aprender-a-tocar-la-guitarra", es: "aprender a tocar la guitarra", el: "μαθαίνω να παίζω κιθάρα", pos: "phrase", noteEl: "Για μουσικό όργανο λέμε tocar, όχι jugar: τα ελληνικά έχουν «παίζω» και για τα δύο.", example: { es: "Mi amigo aprende a tocar la guitarra.", el: "Ο φίλος μου μαθαίνει να παίζει κιθάρα." } },
      ],
    },
  ],
  grammar: [
    {
      id: "genero-sustantivos",
      titleEs: "El género de algunos sustantivos",
      titleEl: "Το γένος μερικών ουσιαστικών",
      introEl:
        "Στα ισπανικά κάθε ουσιαστικό είναι αρσενικό ή θηλυκό (δεν υπάρχει ουδέτερο, όπως στα ελληνικά). Η κατάληξη βοηθά στο να μαντέψεις το γένος, αλλά υπάρχουν εξαιρέσεις που πρέπει να μάθεις.",
      rules: [
        {
          textEl: "Τα περισσότερα ουσιαστικά σε -o είναι αρσενικά: el curso, el libro. Εξαιρέσεις: la mano, la moto, la foto. Τα δύο τελευταία είναι συντομογραφίες των motocicleta και fotografía.",
          examples: [
            { es: "Mi mano es pequeña.", el: "Το χέρι μου είναι μικρό." },
            { es: "La foto es muy bonita.", el: "Η φωτογραφία είναι πολύ όμορφη." },
          ],
        },
        {
          textEl: "Τα περισσότερα ουσιαστικά σε -a είναι θηλυκά: la playa, la comida. Εξαιρέσεις: el idioma, el pijama, el sofá, el clima, el sistema.",
          examples: [
            { es: "El idioma de mi país es el griego.", el: "Η γλώσσα της χώρας μου είναι τα ελληνικά." },
            { es: "El clima de Cuba es tropical.", el: "Το κλίμα της Κούβας είναι τροπικό." },
          ],
        },
        {
          textEl: "Τα ουσιαστικά σε -e μπορεί να είναι αρσενικά ή θηλυκά και δεν υπάρχει κανόνας: el cine, el mensaje, la gente, la serie. Μάθε τη λέξη μαζί με το άρθρο της.",
          examples: [
            { es: "Voy al cine con mis amigos.", el: "Πηγαίνω στο σινεμά με τους φίλους μου." },
            { es: "La gente es muy amable.", el: "Ο κόσμος είναι πολύ ευγενικός." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Η κατάληξη και το γένος",
          headers: ["Κατάληξη", "Συνήθως", "Εξαιρέσεις και παραδείγματα"],
          rows: [
            ["-o", "masculino: el curso, el libro", "la mano, la moto, la foto"],
            ["-a", "femenino: la playa, la comida", "el idioma, el pijama, el sofá, el clima, el sistema"],
            ["-e", "masculino o femenino", "el cine, el mensaje / la gente, la serie"],
          ],
        },
      ],
      tipsEl: [
        "Μάθε κάθε νέα λέξη μαζί με το άρθρο της: el idioma, la mano. Το γένος στα ελληνικά δεν σε βοηθά: το «χέρι» (ουδέτερο) είναι la mano, η «έρημος» (θηλυκό) είναι el desierto.",
        "Καλή είδηση: οι λέξεις ελληνικής προέλευσης σε -ma (el clima, el idioma, el sistema, el problema, el tema, el programa) είναι αρσενικές, όπως τα ελληνικά τους ουδέτερα σε -μα.",
        "Άλλες γνωστές εξαιρέσεις με -a: el día, el mapa (αρσενικά).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ mano", promptEl: "το χέρι", options: ["el", "la", "los", "las"], answer: "la", explainEl: "Παρά το -o, η λέξη mano είναι θηλυκή: la mano." },
        { type: "choice", id: "d2", promptEs: "___ moto de Pablo es nueva.", promptEl: "Η μηχανή του Pablo είναι καινούρια.", options: ["El", "La", "Los", "Las"], answer: "La", explainEl: "Το moto είναι συντομογραφία του la motocicleta, γι' αυτό είναι θηλυκό." },
        { type: "choice", id: "d3", promptEs: "___ clima de Cuba es tropical.", promptEl: "Το κλίμα της Κούβας είναι τροπικό.", options: ["El", "La", "Los", "Las"], answer: "El", explainEl: "Οι λέξεις ελληνικής προέλευσης σε -ma είναι αρσενικές: el clima, el idioma, el sistema." },
        { type: "choice", id: "d4", promptEs: "___ idioma de mi país es el griego.", promptEl: "Η γλώσσα της χώρας μου είναι τα ελληνικά.", options: ["El", "La", "Los", "Las"], answer: "El" },
        { type: "choice", id: "d5", promptEs: "¿Qué opción es correcta?", promptEl: "Ποια επιλογή είναι σωστή;", options: ["la playa", "el playa", "la idioma"], answer: "la playa" },
        { type: "cloze", id: "d6", textEs: "___ sofá de mi casa es grande.", hintEl: "Ο καναπές του σπιτιού μου είναι μεγάλος.", answer: "El", explainEl: "Το sofá είναι αρσενικό, παρά το -a." },
        { type: "cloze", id: "d7", textEs: "___ gente de este pueblo es muy amable.", hintEl: "Ο κόσμος σε αυτό το χωριό είναι πολύ ευγενικός.", answer: "La" },
        { type: "cloze", id: "d8", textEs: "___ foto de mi familia es bonita.", hintEl: "Η φωτογραφία της οικογένειάς μου είναι όμορφη.", answer: "La" },
        { type: "choice", id: "d9", promptEs: "¿Cuál de estas palabras es masculina?", promptEl: "Ποια από αυτές τις λέξεις είναι αρσενική;", options: ["mano", "moto", "sistema", "foto"], answer: "sistema", explainEl: "Οι λέξεις mano, moto και foto είναι οι θηλυκές εξαιρέσεις σε -o. Το sistema είναι αρσενικό." },
        { type: "order", id: "d10", promptEl: "Η φωτογραφία είναι πολύ όμορφη.", solution: ["La", "foto", "es", "muy", "bonita."], distractors: ["El", "bonito"] },
      ],
    },
    {
      id: "articulos",
      titleEs: "El artículo determinado e indeterminado",
      titleEl: "Το οριστικό και το αόριστο άρθρο",
      introEl:
        "Τα άρθρα στα ισπανικά συμφωνούν με το ουσιαστικό στο γένος και στον αριθμό, όπως και στα ελληνικά. Υπάρχουν όμως δύο διαφορές: δεν υπάρχει ουδέτερο, και το αόριστο άρθρο έχει πληθυντικό (unos, unas).",
      rules: [
        {
          textEl: "Το οριστικό άρθρο είναι el (αρσενικό ενικού), la (θηλυκό ενικού), los (αρσενικό πληθυντικού), las (θηλυκό πληθυντικού). Το χρησιμοποιούμε για κάτι συγκεκριμένο και γνωστό.",
          examples: [
            { es: "El mensaje es de mi profesora.", el: "Το μήνυμα είναι από την καθηγήτριά μου." },
            { es: "Las series españolas son muy buenas.", el: "Οι ισπανικές σειρές είναι πολύ καλές." },
          ],
        },
        {
          textEl: "Το αόριστο άρθρο είναι un, una, unos, unas και μιλά για κάτι καινούριο ή άγνωστο. Τα unos και unas σημαίνουν «κάποιοι, μερικοί». Στα ελληνικά δεν υπάρχει αόριστο άρθρο στον πληθυντικό.",
          examples: [
            { es: "Tengo un curso de teatro.", el: "Έχω ένα μάθημα θεάτρου." },
            { es: "Veo unas series en inglés.", el: "Βλέπω κάποιες σειρές στα αγγλικά." },
          ],
        },
        {
          textEl: "Στον πληθυντικό προσθέτουμε -s στις λέξεις που τελειώνουν σε φωνήεν (curso → cursos, playa → playas) και -es σε αυτές που τελειώνουν σε σύμφωνο (ciudad → ciudades).",
          examples: [
            { es: "un curso, dos cursos", el: "ένα μάθημα, δύο μαθήματα" },
            { es: "una ciudad, muchas ciudades", el: "μία πόλη, πολλές πόλεις" },
          ],
        },
        {
          textEl: "Όταν η πρόθεση a ή de συναντά το el, γίνονται al και del: ir al cine, la playa del pueblo.",
          examples: [
            { es: "Voy al teatro.", el: "Πηγαίνω στο θέατρο." },
            { es: "La playa del pueblo es muy grande.", el: "Η παραλία του χωριού είναι πολύ μεγάλη." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Το οριστικό άρθρο",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["Masculino", "el curso / el mensaje", "los cursos / los mensajes"],
            ["Femenino", "la playa / la serie", "las playas / las series"],
          ],
        },
        {
          titleEl: "Το αόριστο άρθρο",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["Masculino", "un curso / un mensaje", "unos cursos / unos mensajes"],
            ["Femenino", "una playa / una serie", "unas playas / unas series"],
          ],
        },
      ],
      tipsEl: [
        "Προσοχή στις λέξεις σε -e: το mensaje είναι αρσενικό (el mensaje) και το serie θηλυκό (la serie).",
        "Στα ελληνικά λέμε «τα ισπανικά είναι ωραία», αλλά στα ισπανικά, μετά από hablar, aprender και estudiar συνήθως δεν βάζουμε άρθρο: «Hablo español», «Aprendo inglés».",
        "Το un / una / unos / unas δεν μεταφράζεται πάντα με το «ένα». Το unos amigos είναι «κάποιοι φίλοι», όχι «ένας φίλος».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ curso de español es muy interesante.", promptEl: "Το μάθημα ισπανικών είναι πολύ ενδιαφέρον.", options: ["El", "La", "Los", "Las"], answer: "El" },
        { type: "choice", id: "d2", promptEs: "___ series españolas son muy buenas.", promptEl: "Οι ισπανικές σειρές είναι πολύ καλές.", options: ["El", "La", "Los", "Las"], answer: "Las" },
        { type: "choice", id: "d3", promptEs: "Quiero ver ___ película esta noche.", promptEl: "Θέλω να δω μια ταινία απόψε.", options: ["un", "una", "unos", "unas"], answer: "una", explainEl: "Η película είναι θηλυκή (-a), άρα una." },
        { type: "choice", id: "d4", promptEs: "Tengo ___ mensajes de mi amigo.", promptEl: "Έχω κάποια μηνύματα από τον φίλο μου.", options: ["unas", "un", "unos", "una"], answer: "unos", explainEl: "Το mensaje είναι αρσενικό και εδώ είναι πληθυντικός: unos mensajes." },
        { type: "cloze", id: "d5", textEs: "___ amigos de Ana son españoles.", hintEl: "Οι φίλοι της Ana είναι Ισπανοί.", answer: "Los" },
        { type: "cloze", id: "d6", textEs: "Mi ciudad tiene ___ museo muy bonito.", hintEl: "Η πόλη μου έχει ένα πολύ όμορφο μουσείο.", answer: "un" },
        { type: "cloze", id: "d7", textEs: "Voy ___ cine con mis amigos.", hintEl: "Πηγαίνω στο σινεμά με τους φίλους μου.", answer: "al", explainEl: "a + el = al. Δεν λέμε «a el cine»." },
        { type: "cloze", id: "d8", textEs: "una ciudad, dos ___", hintEl: "μία πόλη, δύο πόλεις", answer: "ciudades", explainEl: "Οι λέξεις που τελειώνουν σε σύμφωνο παίρνουν -es στον πληθυντικό." },
        { type: "order", id: "d9", promptEl: "Οι παραλίες της Ισπανίας είναι όμορφες.", solution: ["Las", "playas", "de", "España", "son", "bonitas."], distractors: ["Los", "es"] },
        { type: "order", id: "d10", promptEl: "Έχω ένα μήνυμα.", solution: ["Tengo", "un", "mensaje."], distractors: ["una", "unos"] },
        { type: "order", id: "d11", promptEl: "Πηγαίνω στο θέατρο με κάποιους φίλους.", solution: ["Voy", "al", "teatro", "con", "unos", "amigos."], distractors: ["el", "unas"] },
      ],
    },
    {
      id: "motivos",
      titleEs: "Hablar de motivos",
      titleEl: "Εξηγώ τους λόγους",
      introEl:
        "Για να εξηγήσεις γιατί κάνεις κάτι, τα ισπανικά έχουν διαφορετικές λέξεις ανάλογα με το αν ρωτάς, αν απαντάς, ή αν μιλάς για σκοπό. Στα ελληνικά το «γιατί» τα κάνει όλα, στα ισπανικά πρέπει να διαλέξεις.",
      rules: [
        {
          textEl: "Για να ρωτήσεις τον λόγο λες «¿Por qué…?» (δύο λέξεις, με τόνο στο qué) και ένα ρήμα σε προσωπικό τύπο.",
          examples: [{ es: "¿Por qué aprendes alemán?", el: "Γιατί μαθαίνεις γερμανικά;" }],
        },
        {
          textEl: "Για να απαντήσεις με παρόντα λόγο χρησιμοποίησε «por + ουσιαστικό» (λόγω αυτού) ή «porque + ρήμα σε προσωπικό τύπο» (επειδή). Το porque γράφεται μία λέξη, χωρίς τόνο.",
          examples: [
            { es: "Aprendo alemán por mi trabajo.", el: "Μαθαίνω γερμανικά λόγω της δουλειάς μου." },
            { es: "Aprendo alemán porque tengo amigos alemanes.", el: "Μαθαίνω γερμανικά επειδή έχω Γερμανούς φίλους." },
          ],
        },
        {
          textEl: "Για να πεις τον σκοπό ή ένα σχέδιο για το μέλλον χρησιμοποίησε «para + απαρέμφατο» (για να). Ή «porque quiero + απαρέμφατο».",
          examples: [
            { es: "Estudio español para viajar por Perú.", el: "Μαθαίνω ισπανικά για να ταξιδέψω στο Περού." },
            { es: "Estudio español porque quiero vivir en Madrid.", el: "Μαθαίνω ισπανικά επειδή θέλω να ζήσω στη Μαδρίτη." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Πώς εξηγώ έναν λόγο",
          headers: ["Tipo de motivo", "Estructura", "Ejemplo"],
          rows: [
            ["Motivo actual", "Por + sustantivo", "Por mi trabajo."],
            ["Motivo actual", "Porque + verbo conjugado", "Porque tengo amigos mexicanos."],
            ["Plan de futuro", "Para + infinitivo", "Para viajar por Perú."],
            ["Plan de futuro", "Porque quiero / quieres… + infinitivo", "Porque quiero vivir en Madrid."],
          ],
        },
      ],
      tipsEl: [
        "Μην μπερδεύεις τα τέσσερα: por qué (ερώτηση, δύο λέξεις), porque (απάντηση, μία λέξη), por (λόγω + ουσιαστικό), para (σκοπός + απαρέμφατο).",
        "Μετά το para έρχεται απαρέμφατο, όχι προσωπικός τύπος: «para viajar», όχι «para viajo». Το ελληνικό «για να ταξιδεύω» γίνεται para viajar.",
        "Μετά το porque έρχεται ρήμα σε προσωπικό τύπο: «porque trabajo», «porque quiero viajar».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ estudias español? Porque quiero viajar.", promptEl: "Γιατί μαθαίνεις ισπανικά; Επειδή θέλω να ταξιδέψω.", options: ["Por qué", "Porque", "Por que", "Porqué"], answer: "Por qué", explainEl: "Στην ερώτηση γράφουμε «por qué», δύο λέξεις και με τόνο στο qué." },
        { type: "choice", id: "d2", promptEs: "¿Por qué estudias alemán?", promptEl: "Διάλεξε τη σωστή απάντηση.", options: ["Porque quiero vivir en Berlín.", "Porque vivir en Berlín.", "Para quiero vivir en Berlín."], answer: "Porque quiero vivir en Berlín.", explainEl: "Μετά το porque χρειάζεται ρήμα σε προσωπικό τύπο: quiero." },
        { type: "choice", id: "d3", promptEs: "¿Qué frase es correcta?", promptEl: "Ποια πρόταση είναι σωστή;", options: ["Estudio español para trabajo.", "Estudio español para trabajar.", "Estudio español para trabajo con españoles."], answer: "Estudio español para trabajar.", explainEl: "Μετά το para χρησιμοποιούμε απαρέμφατο: para trabajar." },
        { type: "cloze", id: "d4", textEs: "Estudio español ___ mi trabajo.", hintEl: "Μαθαίνω ισπανικά λόγω της δουλειάς μου.", answer: "por", alternatives: ["para"], explainEl: "Για αιτία με ουσιαστικό χρησιμοποιούμε por (mi trabajo). Το para μετατοπίζει το νόημα σε σκοπό («για τη δουλειά μου»)." },
        { type: "cloze", id: "d5", textEs: "Aprendo español ___ viajar por Perú.", hintEl: "Μαθαίνω ισπανικά για να ταξιδέψω στο Περού.", answer: "para" },
        { type: "cloze", id: "d6", textEs: "Estudio español ___ mi amigo es mexicano.", hintEl: "Μαθαίνω ισπανικά επειδή ο φίλος μου είναι Μεξικανός.", answer: "porque" },
        { type: "order", id: "d7", promptEl: "Μαθαίνω ισπανικά επειδή θέλω να ταξιδέψω.", solution: ["Estudio", "español", "porque", "quiero", "viajar."], distractors: ["para", "por"] },
        { type: "order", id: "d8", promptEl: "Μαθαίνω ισπανικά για να ταξιδέψω στη Λατινική Αμερική.", solution: ["Aprendo", "español", "para", "viajar", "por", "Latinoamérica."], distractors: ["porque", "qué"] },
        { type: "order", id: "d9", promptEl: "Γιατί μαθαίνεις ισπανικά;", solution: ["¿Por", "qué", "estudias", "español?"], distractors: ["Porque", "hablas"] },
      ],
    },
    {
      id: "presente-regulares",
      titleEs: "Presente de indicativo: verbos regulares en -ar, -er e -ir",
      titleEl: "Ενεστώτας: κανονικά ρήματα σε -ar, -er και -ir",
      introEl:
        "Τα κανονικά ρήματα χωρίζονται σε τρεις ομάδες ανάλογα με το απαρέμφατο: -ar, -er, -ir. Κάθε ομάδα έχει σταθερές καταλήξεις, οπότε όταν μάθεις ένα ρήμα, ξέρεις όλα τα υπόλοιπα της ίδιας ομάδας.",
      rules: [
        {
          textEl: "Αφαιρείς την κατάληξη του απαρεμφάτου και κρατάς τη ρίζα: habl-, comprend-, escrib-. Μετά προσθέτεις τις καταλήξεις του προσώπου.",
          examples: [
            { es: "Hablo inglés y griego.", el: "Μιλάω αγγλικά και ελληνικά." },
            { es: "Escribimos un texto en clase.", el: "Γράφουμε ένα κείμενο στην τάξη." },
          ],
        },
        {
          textEl: "Το πρώτο πρόσωπο ενικού (yo) τελειώνει πάντα σε -o: hablo, comprendo, escribo.",
        },
        {
          textEl: "Οι ομάδες -er και -ir έχουν τις ίδιες καταλήξεις, εκτός από δύο πρόσωπα: nosotros (-emos / -imos) και vosotros (-éis / -ís).",
          examples: [
            { es: "Comemos juntos. Vivimos juntos.", el: "Τρώμε μαζί. Ζούμε μαζί." },
            { es: "¿Comprendéis? ¿Escribís?", el: "Καταλαβαίνετε; Γράφετε;" },
          ],
        },
        {
          textEl: "Η αντωνυμία υποκειμένου συνήθως παραλείπεται, γιατί η κατάληξη δείχνει το πρόσωπο. Τη βάζουμε μόνο για έμφαση ή αντίθεση.",
          examples: [
            { es: "Hablo español.", el: "Μιλάω ισπανικά." },
            { es: "Yo hablo español, ¿y tú?", el: "Εγώ μιλάω ισπανικά, κι εσύ;" },
          ],
        },
        {
          textEl: "Στη Λατινική Αμερική (π.χ. Αργεντινή) το vos αντικαθιστά το tú και έχει δικούς του τύπους: hablás, comprendés, escribís.",
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας: hablar, comprender, escribir",
          headers: ["", "hablar", "comprender", "escribir"],
          rows: [
            ["yo", "hablo", "comprendo", "escribo"],
            ["tú, vos", "hablas, hablás", "comprendes, comprendés", "escribes, escribís"],
            ["él / ella / usted", "habla", "comprende", "escribe"],
            ["nosotros / nosotras", "hablamos", "comprendemos", "escribimos"],
            ["vosotros / vosotras", "habláis", "comprendéis", "escribís"],
            ["ellos / ellas / ustedes", "hablan", "comprenden", "escriben"],
          ],
        },
      ],
      tipsEl: [
        "Προσοχή στους τόνους του vosotros: habláis, comprendéis, escribís. Οι τύποι hablamos, comprendemos, escribimos δεν έχουν τόνο.",
        "Η ιδέα σού είναι γνώριμη: και στα ελληνικά κάθε πρόσωπο έχει δική του κατάληξη (-ω, -εις, -ει, -ουμε, -ετε, -ουν).",
        "Μην ξεχνάς ότι το ρήμα δείχνει το πρόσωπο: «Hablo» είναι ήδη «εγώ μιλάω». Η αντωνυμία yo δεν χρειάζεται.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ (hablar) inglés y español.", hintEl: "Εγώ μιλάω αγγλικά και ισπανικά.", answer: "hablo" },
        { type: "cloze", id: "d2", textEs: "Tú ___ (comprender) muy bien.", hintEl: "Εσύ καταλαβαίνεις πολύ καλά.", answer: "comprendes" },
        { type: "cloze", id: "d3", textEs: "Ana ___ (escribir) un mensaje.", hintEl: "Η Ana γράφει ένα μήνυμα.", answer: "escribe" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ (hablar) con nativos.", hintEl: "Εμείς μιλάμε με φυσικούς ομιλητές.", answer: "hablamos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ (comprender) la lección.", hintEl: "Εσείς καταλαβαίνετε το μάθημα.", answer: "comprendéis", explainEl: "Το vosotros στα ρήματα -er τελειώνει σε -éis, με τόνο." },
        { type: "cloze", id: "d6", textEs: "Ellos ___ (escribir) un diario.", hintEl: "Εκείνοι γράφουν ημερολόγιο.", answer: "escriben" },
        { type: "cloze", id: "d7", textEs: "Vosotros ___ (escribir) textos en clase.", hintEl: "Εσείς γράφετε κείμενα στην τάξη.", answer: "escribís", explainEl: "Στα ρήματα -ir το vosotros τελειώνει σε -ís, με τόνο." },
        { type: "cloze", id: "d8", textEs: "Yo ___ (aprender) alemán.", hintEl: "Εγώ μαθαίνω γερμανικά.", answer: "aprendo" },
        { type: "cloze", id: "d9", textEs: "Mis padres ___ (vivir) en Sevilla.", hintEl: "Οι γονείς μου ζουν στη Σεβίλλη.", answer: "viven" },
        { type: "choice", id: "d10", promptEs: "Nosotros ___ en un banco.", promptEl: "Εμείς δουλεύουμε σε μια τράπεζα.", options: ["trabajamos", "trabajáis", "trabajan", "trabajo"], answer: "trabajamos" },
        { type: "choice", id: "d11", promptEs: "Vosotros ___ español.", promptEl: "Εσείς μιλάτε ισπανικά.", options: ["habláis", "hablamos", "hablan", "hablas"], answer: "habláis" },
        { type: "order", id: "d12", promptEl: "Εκείνη γράφει ένα κείμενο.", solution: ["Ella", "escribe", "un", "texto."], distractors: ["escribo", "escriben"] },
      ],
    },
    {
      id: "hacer",
      titleEs: "Presente de indicativo: el verbo hacer",
      titleEl: "Ενεστώτας: το ρήμα hacer",
      introEl:
        "Το hacer σημαίνει «κάνω» και «φτιάχνω». Είναι σχεδόν κανονικό, με μία μόνο εξαίρεση: το πρώτο πρόσωπο ενικού, hago.",
      rules: [
        {
          textEl: "Το yo έχει g: hago. Όλα τα άλλα πρόσωπα είναι κανονικά, όπως στα ρήματα -er: haces, hace, hacemos, hacéis, hacen.",
          examples: [{ es: "Hago ejercicios de gramática.", el: "Κάνω ασκήσεις γραμματικής." }],
        },
        {
          textEl: "Χρησιμοποιείται με πολλές δραστηριότητες: hacer fotos, hacer ejercicios, hacer un curso, hacer un intercambio.",
          examples: [
            { es: "Mi hermana hace fotos muy bonitas.", el: "Η αδερφή μου βγάζει πολύ όμορφες φωτογραφίες." },
            { es: "Hacemos un curso de teatro.", el: "Κάνουμε μάθημα θεάτρου." },
          ],
        },
        {
          textEl: "Προσοχή: το «¿Qué haces?» ρωτά τι κάνεις ως δραστηριότητα. Για το «τι κάνεις;» με την έννοια «πώς είσαι;» λες «¿Qué tal?».",
          examples: [
            { es: "¿Qué haces los sábados?", el: "Τι κάνεις τα Σάββατα;" },
            { es: "Hola, ¿qué tal?", el: "Γεια, τι κάνεις; (πώς είσαι)" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του hacer",
          headers: ["", "hacer"],
          rows: [
            ["yo", "hago"],
            ["tú, vos", "haces, hacés"],
            ["él / ella / usted", "hace"],
            ["nosotros / nosotras", "hacemos"],
            ["vosotros / vosotras", "hacéis"],
            ["ellos / ellas / ustedes", "hacen"],
          ],
        },
      ],
      tipsEl: [
        "Το h του hacer δεν προφέρεται: hago ≈ «άγο».",
        "Το hacer χρησιμοποιείται και για τον καιρό: «hace calor», «hace frío» (όπως το ελληνικό «κάνει ζέστη, κάνει κρύο»). Θα το δεις στη Μονάδα 3.",
        "Το hago είναι ανώμαλο μόνο στο yo. Το hacemos και το hacéis είναι ίδια με τα -er ρήματα, αλλά με τόνο στο hacéis.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ ejercicios de gramática.", hintEl: "Εγώ κάνω ασκήσεις γραμματικής.", answer: "hago", explainEl: "Στο yo προστίθεται g: hago." },
        { type: "cloze", id: "d2", textEs: "Tú ___ un curso de teatro.", hintEl: "Εσύ κάνεις μάθημα θεάτρου.", answer: "haces" },
        { type: "cloze", id: "d3", textEs: "Mi hermana ___ fotos muy bonitas.", hintEl: "Η αδερφή μου βγάζει πολύ όμορφες φωτογραφίες.", answer: "hace" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ un intercambio con una nativa.", hintEl: "Εμείς κάνουμε ανταλλαγή γλωσσών με μια φυσική ομιλήτρια.", answer: "hacemos" },
        { type: "cloze", id: "d5", textEs: "¿Qué ___ vosotros este fin de semana?", hintEl: "Τι κάνετε εσείς αυτό το Σαββατοκύριακο;", answer: "hacéis", explainEl: "Το vosotros έχει τόνο: hacéis." },
        { type: "cloze", id: "d6", textEs: "Mis amigos ___ fotos de la ciudad.", hintEl: "Οι φίλοι μου βγάζουν φωτογραφίες της πόλης.", answer: "hacen" },
        { type: "choice", id: "d7", promptEs: "¿Qué ___ tú los sábados?", promptEl: "Τι κάνεις εσύ τα Σάββατα;", options: ["haces", "hago", "hace", "hacemos"], answer: "haces" },
        { type: "choice", id: "d8", promptEs: "Quieres saber cómo está tu amigo. Preguntas: ___", promptEl: "Θέλεις να μάθεις πώς είναι ο φίλος σου. Ρωτάς:", options: ["¿Qué tal?", "¿Qué haces?", "¿Cómo te llamas?"], answer: "¿Qué tal?", explainEl: "Το «¿Qué haces?» ρωτά τι δραστηριότητα κάνεις, όχι πώς είσαι." },
        { type: "order", id: "d9", promptEl: "Κάνω ασκήσεις γραμματικής.", solution: ["Hago", "ejercicios", "de", "gramática."], distractors: ["hace", "hacemos"] },
        { type: "order", id: "d10", promptEl: "Εμείς κάνουμε μάθημα θεάτρου.", solution: ["Nosotros", "hacemos", "un", "curso", "de", "teatro."], distractors: ["hago", "unos"] },
      ],
    },
    {
      id: "querer-infinitivo",
      titleEs: "Expresar intenciones y planes: querer + infinitivo",
      titleEl: "Εκφράζω προθέσεις και σχέδια: querer + απαρέμφατο",
      introEl:
        "Για να πεις τι θέλεις να κάνεις, χρησιμοποιείς το ρήμα querer και ένα δεύτερο ρήμα στο απαρέμφατο. Το «θέλω να μάθω» γίνεται απλά «quiero aprender».",
      rules: [
        {
          textEl: "Το querer + απαρέμφατο εκφράζει πρόθεση ή σχέδιο. Το δεύτερο ρήμα μένει πάντα στο απαρέμφατο: δεν υπάρχει «να», ούτε προσωπικός τύπος.",
          examples: [
            { es: "Quiero aprender español.", el: "Θέλω να μάθω ισπανικά." },
            { es: "Queremos viajar a México.", el: "Θέλουμε να ταξιδέψουμε στο Μεξικό." },
          ],
        },
        {
          textEl: "Το querer αλλάζει e → ie στα yo, tú, él και ellos: quiero, quieres, quiere, quieren. Στα nosotros και vosotros μένει e: queremos, queréis.",
          examples: [{ es: "¿Queréis ir al teatro?", el: "Θέλετε να πάτε στο θέατρο;" }],
        },
        {
          textEl: "Μπορείς να βάλεις περισσότερα από ένα απαρέμφατα με το y.",
          examples: [{ es: "Quiero ver una película y cenar.", el: "Θέλω να δω μια ταινία και να φάω βραδινό." }],
        },
        {
          textEl: "Το querer μπορεί να ακολουθείται και από ουσιαστικό: «Quiero un café».",
          examples: [{ es: "Quiero un libro de español.", el: "Θέλω ένα βιβλίο ισπανικών." }],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του querer + απαρέμφατο",
          headers: ["", "querer", "+ infinitivo"],
          rows: [
            ["yo", "quiero", "viajar"],
            ["tú, vos", "quieres, querés", "aprender idiomas"],
            ["él / ella / usted", "quiere", "vivir en España"],
            ["nosotros / nosotras", "queremos", "hacer fotos"],
            ["vosotros / vosotras", "queréis", "ir al cine"],
            ["ellos / ellas / ustedes", "quieren", "leer libros"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λες «θέλω να + υποτακτική» (θέλω να μάθω). Στα ισπανικά, αν το υποκείμενο είναι το ίδιο, χρησιμοποιείς απλό απαρέμφατο: «Quiero aprender», ποτέ «Quiero que aprendo».",
        "Το «quiero» έχει και δεύτερο νόημα: «te quiero» = σ' αγαπώ. Εδώ όμως σημαίνει «θέλω».",
        "Το queréis (vosotros) δεν έχει ie: κρατά το e γιατί ο τόνος δεν πέφτει στη ρίζα.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ aprender español.", hintEl: "Εγώ θέλω να μάθω ισπανικά.", answer: "quiero" },
        { type: "cloze", id: "d2", textEs: "Tú ___ viajar a México.", hintEl: "Εσύ θέλεις να ταξιδέψεις στο Μεξικό.", answer: "quieres" },
        { type: "cloze", id: "d3", textEs: "Ella ___ vivir en España.", hintEl: "Εκείνη θέλει να ζήσει στην Ισπανία.", answer: "quiere" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ hacer un curso de teatro.", hintEl: "Εμείς θέλουμε να κάνουμε μάθημα θεάτρου.", answer: "queremos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ ir al cine.", hintEl: "Εσείς θέλετε να πάτε στο σινεμά.", answer: "queréis", explainEl: "Στο vosotros δεν υπάρχει ie: queréis, με τόνο." },
        { type: "cloze", id: "d6", textEs: "Mis amigos ___ aprender francés.", hintEl: "Οι φίλοι μου θέλουν να μάθουν γαλλικά.", answer: "quieren" },
        { type: "choice", id: "d7", promptEs: "Quiero ___ español.", promptEl: "Θέλω να μάθω ισπανικά.", options: ["aprendo", "aprender", "aprendes", "que aprender"], answer: "aprender", explainEl: "Μετά το querer το δεύτερο ρήμα μένει στο απαρέμφατο." },
        { type: "choice", id: "d8", promptEs: "¿Qué ___ hacer vosotros esta noche?", promptEl: "Τι θέλετε να κάνετε εσείς απόψε;", options: ["queréis", "quieres", "queremos", "quieren"], answer: "queréis" },
        { type: "choice", id: "d9", promptEs: "Marta ___ aprender a tocar la guitarra.", promptEl: "Η Marta θέλει να μάθει να παίζει κιθάρα.", options: ["queremos", "quiere", "quieres", "querer"], answer: "quiere" },
        { type: "order", id: "d10", promptEl: "Θέλω να δω μια ταινία και να φάω βραδινό.", solution: ["Quiero", "ver", "una", "película", "y", "cenar."], distractors: ["veo", "quieres"] },
        { type: "order", id: "d11", promptEl: "Τι θέλεις να κάνεις απόψε;", solution: ["¿Qué", "quieres", "hacer", "esta", "noche?"], distractors: ["quiero", "haces"] },
        { type: "order", id: "d12", promptEl: "Δεν θέλουμε να ταξιδέψουμε σήμερα.", solution: ["No", "queremos", "viajar", "hoy."], distractors: ["quieren", "viajamos"] },
      ],
    },
  ],
};
