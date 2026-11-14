import type { Unit, VocabItem } from "@/types/content";

/** Every label of the city map on the book's Léxico page. */
const PLACES: VocabItem[] = [
  { id: "u8-estadio", es: "estadio", el: "στάδιο", pos: "noun", gender: "m", example: { es: "El estadio está al lado del parque.", el: "Το στάδιο είναι δίπλα στο πάρκο." } },
  { id: "u8-escuela", es: "escuela", el: "σχολείο", pos: "noun", gender: "f", example: { es: "Hay una escuela en mi calle.", el: "Υπάρχει ένα σχολείο στον δρόμο μου." } },
  { id: "u8-museo", es: "museo", el: "μουσείο", pos: "noun", gender: "m", example: { es: "Hay un museo muy bonito en el centro.", el: "Υπάρχει ένα πολύ όμορφο μουσείο στο κέντρο." } },
  { id: "u8-contenedor-de-basura", es: "contenedor de basura", el: "κάδος σκουπιδιών", pos: "noun", gender: "m", example: { es: "El contenedor de basura está en la esquina.", el: "Ο κάδος σκουπιδιών είναι στη γωνία." } },
  { id: "u8-cine", es: "cine", el: "κινηματογράφος", pos: "noun", gender: "m", example: { es: "Voy al cine con mis amigos.", el: "Πηγαίνω στον κινηματογράφο με τους φίλους μου." } },
  { id: "u8-cajero-automatico", es: "cajero automático / banco", el: "ΑΤΜ / τράπεζα", pos: "noun", gender: "m", noteEl: "Εδώ το banco σημαίνει τράπεζα. Στον χάρτη υπάρχει και ένα δεύτερο banco: το παγκάκι.", accept: ["cajero automático", "banco"], example: { es: "Necesito un cajero automático.", el: "Χρειάζομαι ένα ΑΤΜ." } },
  { id: "u8-supermercado", es: "supermercado", el: "σούπερ μάρκετ", pos: "noun", gender: "m", example: { es: "Hay un supermercado al lado de mi casa.", el: "Υπάρχει ένα σούπερ μάρκετ δίπλα στο σπίτι μου." } },
  { id: "u8-polideportivo", es: "polideportivo", el: "αθλητικό κέντρο", pos: "noun", gender: "m", noteEl: "Δημοτικό αθλητικό κέντρο με γήπεδα και συχνά πισίνα.", example: { es: "Mi hijo nada en el polideportivo.", el: "Ο γιος μου κολυμπά στο αθλητικό κέντρο." } },
  { id: "u8-estacion-de-taxis", es: "estación de taxis", el: "πιάτσα ταξί", pos: "noun", gender: "f", example: { es: "Hay una estación de taxis al lado del aeropuerto.", el: "Υπάρχει μια πιάτσα ταξί δίπλα στο αεροδρόμιο." } },
  { id: "u8-hotel", es: "hotel", el: "ξενοδοχείο", pos: "noun", gender: "m", example: { es: "El hotel está en el centro.", el: "Το ξενοδοχείο είναι στο κέντρο." } },
  { id: "u8-parque", es: "parque", el: "πάρκο", pos: "noun", gender: "m", example: { es: "Paseo por el parque los domingos.", el: "Κάνω βόλτα στο πάρκο τις Κυριακές." } },
  { id: "u8-oficina-de-correos", es: "oficina de correos", el: "ταχυδρομείο", pos: "noun", gender: "f", example: { es: "La oficina de correos está en la plaza.", el: "Το ταχυδρομείο είναι στην πλατεία." } },
  { id: "u8-gasolinera", es: "gasolinera", el: "βενζινάδικο", pos: "noun", gender: "f", example: { es: "Hay una gasolinera cerca de aquí.", el: "Υπάρχει ένα βενζινάδικο εδώ κοντά." } },
  { id: "u8-farola", es: "farola", el: "φανοστάτης, λάμπα δρόμου", pos: "noun", gender: "f", example: { es: "En mi calle hay muchas farolas.", el: "Στον δρόμο μου υπάρχουν πολλοί φανοστάτες." } },
  { id: "u8-estacion-de-metro", es: "estación de metro", el: "σταθμός μετρό", pos: "noun", gender: "f", example: { es: "Mi casa está cerca de una estación de metro.", el: "Το σπίτι μου είναι κοντά σε σταθμό μετρό." } },
  { id: "u8-parada-de-autobus", es: "parada de autobús", el: "στάση λεωφορείου", pos: "noun", gender: "f", example: { es: "La parada de autobús está aquí al lado.", el: "Η στάση του λεωφορείου είναι εδώ δίπλα." } },
  { id: "u8-parking", es: "parking", el: "πάρκινγκ", pos: "noun", gender: "m", noteEl: "Στα ισπανικά λέγεται και aparcamiento.", example: { es: "El hotel tiene parking.", el: "Το ξενοδοχείο έχει πάρκινγκ." } },
  { id: "u8-papelera", es: "papelera", el: "καλάθι αχρήστων (στον δρόμο)", pos: "noun", gender: "f", example: { es: "Hay una papelera en la esquina.", el: "Υπάρχει ένα καλάθι αχρήστων στη γωνία." } },
  { id: "u8-banco-parque", es: "banco", el: "παγκάκι", pos: "noun", gender: "m", noteEl: "Εδώ είναι το παγκάκι του δρόμου, όχι η τράπεζα (που επίσης λέγεται banco).", example: { es: "Hay un banco en el parque.", el: "Υπάρχει ένα παγκάκι στο πάρκο." } },
  { id: "u8-farmacia", es: "farmacia", el: "φαρμακείο", pos: "noun", gender: "f", example: { es: "La farmacia está en la esquina.", el: "Το φαρμακείο είναι στη γωνία." } },
  { id: "u8-estacion-de-tren", es: "estación de tren", el: "σιδηροδρομικός σταθμός", pos: "noun", gender: "f", example: { es: "La estación de tren está lejos de aquí.", el: "Ο σιδηροδρομικός σταθμός είναι μακριά από εδώ." } },
  { id: "u8-restaurante", es: "restaurante", el: "εστιατόριο", pos: "noun", gender: "m", example: { es: "Cenamos en un restaurante italiano.", el: "Δειπνούμε σε ένα ιταλικό εστιατόριο." } },
  { id: "u8-semaforo", es: "semáforo", el: "φανάρι", pos: "noun", gender: "m", noteEl: "Ο τόνος πέφτει στο μ: se-MÁ-fo-ro.", example: { es: "El semáforo está en rojo.", el: "Το φανάρι είναι κόκκινο." } },
  { id: "u8-tienda", es: "tienda", el: "κατάστημα, μαγαζί", pos: "noun", gender: "f", example: { es: "En esta calle hay muchas tiendas.", el: "Σε αυτόν τον δρόμο υπάρχουν πολλά μαγαζιά." } },
  { id: "u8-aeropuerto", es: "aeropuerto", el: "αεροδρόμιο", pos: "noun", gender: "m", example: { es: "El aeropuerto está a veinte minutos del centro.", el: "Το αεροδρόμιο είναι είκοσι λεπτά από το κέντρο." } },
  { id: "u8-hospital", es: "hospital", el: "νοσοκομείο", pos: "noun", gender: "m", example: { es: "El hospital está al final de la calle.", el: "Το νοσοκομείο είναι στο τέλος του δρόμου." } },
  { id: "u8-biblioteca", es: "biblioteca", el: "βιβλιοθήκη (δημόσια)", pos: "noun", gender: "f", noteEl: "Biblioteca είναι ο χώρος δανεισμού βιβλίων. Το βιβλιοπωλείο λέγεται librería.", example: { es: "Estudio en la biblioteca.", el: "Διαβάζω στη βιβλιοθήκη." } },
  { id: "u8-monumento-historico", es: "monumento histórico", el: "ιστορικό μνημείο", pos: "noun", gender: "m", example: { es: "Visitamos un monumento histórico.", el: "Επισκεπτόμαστε ένα ιστορικό μνημείο." } },
  { id: "u8-taller", es: "taller", el: "συνεργείο, εργαστήριο", pos: "noun", gender: "m", example: { es: "Mi coche está en el taller.", el: "Το αυτοκίνητό μου είναι στο συνεργείο." } },
];

export const unit8: Unit = {
  id: 8,
  titleEs: "El barrio ideal",
  titleEl: "Η ιδανική γειτονιά",
  goalEl: "Φαντάζομαι και περιγράφω μια ιδανική γειτονιά: λέω τι υπάρχει, πού βρίσκεται και τι μου αρέσει περισσότερο.",
  color: "#009fe3",
  pages: { start: 112, end: 125, lexico: 120, gramatica: 121 },
  communicativeEl: [
    "Περιγράφω χωριά, γειτονιές και πόλεις",
    "Λέω τι μου αρέσει περισσότερο σε ένα μέρος",
    "Ρωτάω και δίνω οδηγίες για να φτάσω κάπου",
    "Εκφράζω γούστα και τονίζω μια πτυχή (lo que más me gusta…)",
  ],
  verbIds: ["estar"],
  vocab: [
    {
      id: "describir-barrios-es",
      page: 120,
      section: "Léxico",
      titleEs: "Describir barrios y ciudades: Es...",
      titleEl: "Περιγράφω γειτονιές και πόλεις: Es...",
      items: [
        { id: "u8-ruidoso", es: "ruidoso/a", el: "θορυβώδης", pos: "adjective", noteEl: "Από το ruido (θόρυβος).", example: { es: "El centro es muy ruidoso.", el: "Το κέντρο είναι πολύ θορυβώδες." } },
        { id: "u8-tranquilo", es: "tranquilo/a", el: "ήσυχος / ήρεμος", pos: "adjective", example: { es: "Mi barrio es muy tranquilo.", el: "Η γειτονιά μου είναι πολύ ήσυχη." } },
        { id: "u8-moderno", es: "moderno/a", el: "μοντέρνος / σύγχρονος", pos: "adjective", example: { es: "Es una ciudad muy moderna.", el: "Είναι μια πολύ σύγχρονη πόλη." } },
        { id: "u8-historico", es: "histórico/a", el: "ιστορικός", pos: "adjective", noteEl: "Ο τόνος: his-TÓ-ri-co.", example: { es: "Toledo es una ciudad histórica.", el: "Το Τολέδο είναι μια ιστορική πόλη." } },
        { id: "u8-antiguo", es: "antiguo/a", el: "παλιός / αρχαίος", pos: "adjective", noteEl: "Για κτίρια και πόλεις σημαίνει «πολύ παλιός». Η Grecia antigua είναι η αρχαία Ελλάδα.", example: { es: "Es un barrio muy antiguo.", el: "Είναι μια πολύ παλιά γειτονιά." } },
        { id: "u8-bonito", es: "bonito/a", el: "όμορφος", pos: "adjective", example: { es: "Atenas es una ciudad bonita.", el: "Η Αθήνα είναι μια όμορφη πόλη." } },
        { id: "u8-feo", es: "feo/a", el: "άσχημος", pos: "adjective", example: { es: "Esa calle es fea.", el: "Εκείνος ο δρόμος είναι άσχημος." } },
        { id: "u8-sucio", es: "sucio/a", el: "βρώμικος", pos: "adjective", example: { es: "Es un barrio sucio.", el: "Είναι μια βρώμικη γειτονιά." } },
        { id: "u8-limpio", es: "limpio/a", el: "καθαρός", pos: "adjective", example: { es: "La ciudad es muy limpia.", el: "Η πόλη είναι πολύ καθαρή." } },
        { id: "u8-caro", es: "caro/a", el: "ακριβός", pos: "adjective", example: { es: "Es un barrio caro.", el: "Είναι μια ακριβή γειτονιά." } },
        { id: "u8-barato", es: "barato/a", el: "φτηνός", pos: "adjective", example: { es: "Los restaurantes son baratos.", el: "Τα εστιατόρια είναι φτηνά." } },
        { id: "u8-elegante", es: "elegante", el: "κομψός", pos: "adjective", noteEl: "Ίδια μορφή για αρσενικό και θηλυκό.", example: { es: "Es un barrio elegante.", el: "Είναι μια κομψή γειτονιά." } },
        { id: "u8-con-mucho-encanto", es: "con mucho encanto", el: "με πολλή γοητεία / με πολλή χάρη", pos: "phrase", noteEl: "Λέγεται για μέρη που είναι όμορφα και ιδιαίτερα.", example: { es: "Es un barrio con mucho encanto.", el: "Είναι μια γειτονιά με πολλή γοητεία." } },
      ],
    },
    {
      id: "describir-barrios-hay-tiene",
      page: 120,
      section: "Léxico",
      titleEs: "Describir barrios y ciudades: Hay / Tiene / Está",
      titleEl: "Περιγράφω γειτονιές και πόλεις: Hay / Tiene / Está",
      items: [
        { id: "u8-zonas-verdes", es: "zonas verdes", el: "χώροι πρασίνου", pos: "noun", gender: "f", example: { es: "Mi barrio tiene muchas zonas verdes.", el: "Η γειτονιά μου έχει πολλούς χώρους πρασίνου." } },
        { id: "u8-cines", es: "cines", el: "κινηματογράφοι", pos: "noun", gender: "m", example: { es: "En el centro hay tres cines.", el: "Στο κέντρο υπάρχουν τρεις κινηματογράφοι." } },
        { id: "u8-escuelas", es: "escuelas", el: "σχολεία", pos: "noun", gender: "f", example: { es: "En mi barrio hay dos escuelas.", el: "Στη γειτονιά μου υπάρχουν δύο σχολεία." } },
        { id: "u8-hospitales", es: "hospitales", el: "νοσοκομεία", pos: "noun", gender: "m", example: { es: "Madrid tiene muchos hospitales.", el: "Η Μαδρίτη έχει πολλά νοσοκομεία." } },
        { id: "u8-calles-peatonales", es: "calles peatonales", el: "πεζόδρομοι", pos: "noun", gender: "f", example: { es: "En el centro hay calles peatonales.", el: "Στο κέντρο υπάρχουν πεζόδρομοι." } },
        { id: "u8-servicios", es: "servicios", el: "υπηρεσίες (σχολεία, κέντρα υγείας, μεταφορές κ.ά.)", pos: "noun", gender: "m", example: { es: "Es un barrio con todos los servicios.", el: "Είναι μια γειτονιά με όλες τις υπηρεσίες." } },
        { id: "u8-oferta-cultural", es: "oferta cultural", el: "πολιτιστική προσφορά", pos: "noun", gender: "f", noteEl: "Όλα τα πολιτιστικά που προσφέρει ένα μέρος: θέατρα, μουσεία, συναυλίες.", example: { es: "Barcelona tiene mucha oferta cultural.", el: "Η Βαρκελώνη έχει πολλή πολιτιστική προσφορά." } },
        { id: "u8-encanto", es: "encanto", el: "γοητεία, χάρη", pos: "noun", gender: "m", noteEl: "Συνήθως μαζί με mucho: «Tiene (mucho) encanto».", example: { es: "Mi barrio tiene mucho encanto.", el: "Η γειτονιά μου έχει πολλή γοητεία." } },
        { id: "u8-vida-nocturna", es: "vida nocturna", el: "νυχτερινή ζωή", pos: "noun", gender: "f", noteEl: "Στο βιβλίο: (mucha / bastante / poca) vida (nocturna). Το «vida» μπορεί να λέγεται και μόνο του.", example: { es: "Madrid tiene mucha vida nocturna.", el: "Η Μαδρίτη έχει πολλή νυχτερινή ζωή." } },
        { id: "u8-bien-comunicado", es: "bien comunicado", el: "με καλή συγκοινωνία", pos: "phrase", noteEl: "Συμφωνεί με το ουσιαστικό: un barrio bien comunicado, una ciudad bien comunicada.", example: { es: "Mi barrio está bien comunicado: hay metro y autobús.", el: "Η γειτονιά μου έχει καλή συγκοινωνία: υπάρχει μετρό και λεωφορείο." } },
        { id: "u8-mal-comunicado", es: "mal comunicado", el: "με κακή συγκοινωνία", pos: "phrase", example: { es: "El pueblo está mal comunicado.", el: "Το χωριό έχει κακή συγκοινωνία." } },
      ],
    },
    {
      id: "lugares-servicios-y-mobiliario-urbano",
      page: 120,
      section: "Léxico",
      titleEs: "Lugares, servicios y mobiliario urbano",
      titleEl: "Μέρη, υπηρεσίες και αστικός εξοπλισμός",
      items: PLACES,
    },
  ],
  grammar: [
    {
      id: "pedir-ubicacion",
      titleEs: "Pedir información sobre ubicación",
      titleEl: "Ρωτώ πού βρίσκεται κάτι",
      introEl:
        "Για να βρεις ένα μέρος στην πόλη χρησιμοποιείς δύο ρήματα: το hay για να ρωτήσεις αν κάτι υπάρχει και το estar για να ρωτήσεις πού βρίσκεται κάτι που ήδη ξέρεις.",
      rules: [
        {
          textEl: "Το «hay» (υπάρχει, υπάρχουν) δεν αλλάζει ποτέ. Μπαίνει με ουσιαστικό ΧΩΡΙΣ οριστικό άρθρο: un / una, algún / alguna, varios ή χωρίς άρθρο. Ρωτάμε αν υπάρχει ένα τέτοιο μέρος.",
          examples: [
            { es: "¿Hay una farmacia por aquí cerca?", el: "Υπάρχει ένα φαρμακείο εδώ κοντά;" },
            { es: "¿Hay algún cajero automático en esta calle?", el: "Υπάρχει κανένα ΑΤΜ σε αυτόν τον δρόμο;" },
          ],
        },
        {
          textEl: "Το «está / están» (βρίσκεται, βρίσκονται) μπαίνει με ουσιαστικό που ήδη ξέρουμε, δηλαδή με οριστικό άρθρο (el, la), κτητική ή δεικτική αντωνυμία. Ρωτάμε πού είναι ή πόσο μακριά είναι.",
          examples: [
            { es: "¿Dónde está la estación de tren?", el: "Πού είναι ο σιδηροδρομικός σταθμός;" },
            { es: "¿El museo está por aquí cerca?", el: "Το μουσείο είναι εδώ κοντά;" },
          ],
        },
        {
          textEl: "Το «(por) aquí cerca» σημαίνει «εδώ κοντά, εδώ γύρω». Το por είναι προαιρετικό. Για την απόσταση ρωτάμε «¿Está muy lejos de aquí…?».",
          examples: [
            { es: "¿Está muy lejos de aquí el aeropuerto?", el: "Είναι πολύ μακριά από εδώ το αεροδρόμιο;" },
            { es: "¿El banco está en esta calle?", el: "Η τράπεζα είναι σε αυτόν τον δρόμο;" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Hay ή está;",
          headers: ["", "hay", "está / están"],
          rows: [
            ["Τι ρωτάμε", "Υπάρχει κάτι τέτοιο;", "Πού βρίσκεται αυτό που ξέρω;"],
            ["Ουσιαστικό", "un / una / algún / alguna / ø", "el / la / mi / este"],
            ["Παράδειγμα", "¿Hay un parque por aquí?", "¿Dónde está el parque?"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά και τα δύο λέγονται «είναι / υπάρχει», αλλά στα ισπανικά δεν μπερδεύονται: δεν λες «hay la farmacia» ούτε «está una farmacia».",
        "Το hay είναι ίδιο στον ενικό και στον πληθυντικό: hay un banco, hay dos bancos. Το estar αλλάζει: está / están.",
        "Για να ξεκινήσεις ευγενικά λες «Perdona» (σε φίλο) ή «Perdone» (σε άγνωστο, με usted).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ una farmacia por aquí cerca?", promptEl: "Υπάρχει ένα φαρμακείο εδώ κοντά;", options: ["Hay", "Está", "Es", "Tiene"], answer: "Hay", explainEl: "Ρωτάμε αν υπάρχει κάτι (una farmacia, αόριστο), άρα hay." },
        { type: "choice", id: "d2", promptEs: "¿Dónde ___ la estación de metro?", promptEl: "Πού είναι ο σταθμός του μετρό;", options: ["está", "hay", "es", "tiene"], answer: "está", explainEl: "Η estación de metro έχει οριστικό άρθρο (la), άρα estar." },
        { type: "choice", id: "d3", promptEs: "¿Hay ___ supermercado en esta calle?", promptEl: "Υπάρχει (ένα) σούπερ μάρκετ σε αυτόν τον δρόμο;", options: ["un", "el", "mi", "este"], answer: "un", explainEl: "Μετά το hay μπαίνει αόριστο άρθρο, όχι οριστικό." },
        { type: "choice", id: "d4", promptEs: "¿Está ___ biblioteca en esta calle?", promptEl: "Η βιβλιοθήκη είναι σε αυτόν τον δρόμο;", options: ["la", "una", "unas", "alguna"], answer: "la", explainEl: "Το está ζητά οριστικό άρθρο: la biblioteca." },
        { type: "cloze", id: "d5", textEs: "¿El hospital ___ por aquí cerca?", hintEl: "Το νοσοκομείο είναι εδώ κοντά;", answer: "está" },
        { type: "cloze", id: "d6", textEs: "¿___ algún cajero automático por aquí?", hintEl: "Υπάρχει κανένα ΑΤΜ εδώ γύρω;", answer: "Hay" },
        { type: "cloze", id: "d7", textEs: "¿La universidad está muy ___ de aquí?", hintEl: "Το πανεπιστήμιο είναι πολύ μακριά από εδώ;", answer: "lejos" },
        { type: "order", id: "d8", promptEl: "Υπάρχει κάποιο φαρμακείο εδώ κοντά;", solution: ["¿Hay", "alguna", "farmacia", "por", "aquí", "cerca?"], distractors: ["está", "un"] },
        { type: "order", id: "d9", promptEl: "Πού είναι η στάση του λεωφορείου;", solution: ["¿Dónde", "está", "la", "parada", "de", "autobús?"], distractors: ["hay", "una"] },
        { type: "order", id: "d10", promptEl: "Το πάρκο είναι εδώ κοντά;", solution: ["¿El", "parque", "está", "por", "aquí", "cerca?"], distractors: ["hay", "lejos"] },
      ],
    },
    {
      id: "dar-ubicacion",
      titleEs: "Dar información sobre ubicación",
      titleEl: "Λέω πού βρίσκεται κάτι",
      introEl:
        "Για να απαντήσεις χρειάζεσαι τρία πράγματα: απόσταση (a 20 minutos, muy lejos), θέση (a la derecha, al lado de) και οδηγίες (sigue todo recto, gira a la izquierda).",
      rules: [
        {
          textEl: "Για την απόσταση σε χρόνο ή μέτρα λέμε «Está a + (unos) + αριθμός + minutos / metros + de aquí». Το unos σημαίνει «περίπου».",
          examples: [
            { es: "Está a unos diez minutos de aquí.", el: "Είναι περίπου δέκα λεπτά από εδώ." },
            { es: "Está a 300 metros de la plaza.", el: "Είναι 300 μέτρα από την πλατεία." },
          ],
        },
        {
          textEl: "Για μικρότερη ή μεγαλύτερη απόσταση: muy lejos, bastante lejos, un poco lejos, bastante cerca, muy cerca. Μετά το lejos και το cerca ακολουθεί de: «lejos de aquí», «cerca del parque». Και το «aquí al lado» ή «aquí mismo» σημαίνει «ακριβώς εδώ δίπλα».",
          examples: [
            { es: "Está un poco lejos de mi casa.", el: "Είναι λίγο μακριά από το σπίτι μου." },
            { es: "El hotel está aquí mismo.", el: "Το ξενοδοχείο είναι ακριβώς εδώ." },
          ],
        },
        {
          textEl: "Για τη θέση: a la derecha (de…), a la izquierda (de…), al lado (de…), al final (de…), en la esquina, en la plaza / la calle / la avenida. Το a + el γίνεται al και το de + el γίνεται del.",
          examples: [
            { es: "La farmacia está al lado del banco.", el: "Το φαρμακείο είναι δίπλα στην τράπεζα." },
            { es: "El cine está en la esquina.", el: "Ο κινηματογράφος είναι στη γωνία." },
          ],
        },
        {
          textEl: "Οι οδηγίες δίνονται με το ρήμα στην προστακτική: «Sigue todo recto» (συνέχισε ευθεία) και «Gira la primera a la derecha» (στρίψε στην πρώτη δεξιά). Σε άγνωστο λες siga και gire.",
          examples: [
            { es: "Sigue todo recto y gira la segunda a la izquierda.", el: "Συνέχισε ευθεία και στρίψε στη δεύτερη αριστερά." },
            { es: "El hospital está al final de la calle.", el: "Το νοσοκομείο είναι στο τέλος του δρόμου." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Απόσταση",
          headers: ["Ισπανικά", "Ελληνικά"],
          rows: [
            ["Está a (unos) 20 minutos de aquí.", "Είναι (περίπου) 20 λεπτά από εδώ."],
            ["Está a (unos) 200 metros de la universidad.", "Είναι (περίπου) 200 μέτρα από το πανεπιστήμιο."],
            ["Está muy lejos de aquí.", "Είναι πολύ μακριά από εδώ."],
            ["Está bastante lejos.", "Είναι αρκετά μακριά."],
            ["Está un poco lejos.", "Είναι λίγο μακριά."],
            ["Está bastante cerca.", "Είναι αρκετά κοντά."],
            ["Está muy cerca.", "Είναι πολύ κοντά."],
            ["Está aquí al lado.", "Είναι εδώ δίπλα."],
            ["Está aquí mismo.", "Είναι ακριβώς εδώ."],
          ],
        },
        {
          titleEl: "Θέση και οδηγίες",
          headers: ["Ισπανικά", "Ελληνικά"],
          rows: [
            ["a la derecha (de…)", "δεξιά (από…)"],
            ["a la izquierda (de…)", "αριστερά (από…)"],
            ["al lado (de…)", "δίπλα (σε…)"],
            ["al final (de…)", "στο τέλος (του…)"],
            ["en la esquina", "στη γωνία"],
            ["en la plaza / la calle / la avenida", "στην πλατεία / στον δρόμο / στη λεωφόρο"],
            ["(Sigue/s) todo recto", "Συνέχισε ευθεία"],
            ["(Gira/s) la primera / la segunda (calle) a la derecha / izquierda", "Στρίψε στην πρώτη / δεύτερη (οδό) δεξιά / αριστερά"],
          ],
        },
      ],
      tipsEl: [
        "Μετά τα lejos, cerca, al lado, al final ακολουθεί πάντα το de: «lejos de aquí», «al lado de la escuela».",
        "Προσοχή στις συστολές: a + el = al («al lado»), de + el = del («al lado del parque»). Με το la δεν γίνεται συστολή: «al lado de la escuela».",
        "Στο «derecha» το d ακούγεται απαλό, σαν το ελληνικό «δ», και το ch σαν «τσ».",
        "Στα ελληνικά λες «ευθεία». Στα ισπανικά το «todo recto» (ή «todo seguido») δείχνει να συνεχίσεις χωρίς να στρίψεις.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "La farmacia está ___ la derecha.", hintEl: "Το φαρμακείο είναι δεξιά.", answer: "a" },
        { type: "cloze", id: "d2", textEs: "El banco está al lado ___ la escuela.", hintEl: "Η τράπεζα είναι δίπλα στο σχολείο.", answer: "de", explainEl: "Μετά το «al lado» μπαίνει πάντα de." },
        { type: "cloze", id: "d3", textEs: "El museo está al final ___ la calle.", hintEl: "Το μουσείο είναι στο τέλος του δρόμου.", answer: "de" },
        { type: "cloze", id: "d4", textEs: "El cine está aquí al ___.", hintEl: "Ο κινηματογράφος είναι εδώ δίπλα.", answer: "lado" },
        { type: "choice", id: "d5", promptEs: "El parque está ___ lado del hospital.", promptEl: "Το πάρκο είναι δίπλα στο νοσοκομείο.", options: ["al", "a", "en", "el"], answer: "al", explainEl: "Το a + el γίνεται al: «al lado». Μετά το de + el γίνεται del." },
        { type: "choice", id: "d6", promptEs: "La biblioteca está ___ la esquina.", promptEl: "Η βιβλιοθήκη είναι στη γωνία.", options: ["en", "a", "de", "al"], answer: "en" },
        { type: "choice", id: "d7", promptEs: "El hotel está a diez minutos ___ aquí.", promptEl: "Το ξενοδοχείο είναι δέκα λεπτά από εδώ.", options: ["de", "en", "por", "a"], answer: "de" },
        { type: "choice", id: "d8", promptEs: "Sigue todo ___ y gira a la izquierda.", promptEl: "Συνέχισε ευθεία και στρίψε αριστερά.", options: ["recto", "derecha", "cerca", "lado"], answer: "recto" },
        { type: "choice", id: "d9", promptEs: "Está aquí mismo.", promptEl: "Τι σημαίνει;", options: ["Είναι ακριβώς εδώ.", "Είναι πολύ μακριά.", "Είναι στη γωνία.", "Δεν υπάρχει."], answer: "Είναι ακριβώς εδώ." },
        { type: "order", id: "d10", promptEl: "Στρίψε στην πρώτη δεξιά.", solution: ["Gira", "la", "primera", "a", "la", "derecha."], distractors: ["en", "izquierda"] },
        { type: "order", id: "d11", promptEl: "Το νοσοκομείο είναι στην πλατεία.", solution: ["El", "hospital", "está", "en", "la", "plaza."], distractors: ["a", "hay"] },
        { type: "order", id: "d12", promptEl: "Είναι λίγο μακριά από εδώ.", solution: ["Está", "un", "poco", "lejos", "de", "aquí."], distractors: ["muy", "en"] },
      ],
    },
    {
      id: "cuantificadores",
      titleEs: "Cuantificadores",
      titleEl: "Ποσοδείκτες: πόσο, πόσοι",
      introEl:
        "Οι ποσοδείκτες δείχνουν πόσο από κάτι υπάρχει: καθόλου, λίγο, αρκετό, πολύ, υπερβολικό. Αλλάζουν μορφή ανάλογα με το αν το ουσιαστικό μετριέται (parque, plaza) ή όχι (tráfico, gente).",
      rules: [
        {
          textEl: "Με ουσιαστικά που δεν μετριούνται (tráfico, gente, ruido) χρησιμοποιούμε πάντα ενικό και οι ποσοδείκτες συμφωνούν σε γένος: poco tráfico, poca gente, mucho ruido, mucha vida.",
          examples: [
            { es: "Hay poca gente en la calle.", el: "Υπάρχει λίγος κόσμος στον δρόμο." },
            { es: "Hay mucho tráfico en el centro.", el: "Υπάρχει πολλή κίνηση στο κέντρο." },
          ],
        },
        {
          textEl: "Με ουσιαστικά που μετριούνται, στον πληθυντικό οι ποσοδείκτες παίρνουν -s και συμφωνούν σε γένος: pocos parques, pocas plazas, muchos bancos, muchas tiendas, bastantes, demasiados.",
          examples: [
            { es: "En mi barrio hay muchas tiendas.", el: "Στη γειτονιά μου υπάρχουν πολλά μαγαζιά." },
            { es: "Hay pocos parques y demasiados coches.", el: "Υπάρχουν λίγα πάρκα και υπερβολικά πολλά αυτοκίνητα." },
          ],
        },
        {
          textEl: "Το «ningún / ninguna» μπαίνει μόνο σε ενικό. Όταν έρχεται μετά το ρήμα, χρειάζεται και το no πριν από το ρήμα: «No hay ningún parque». Και τα ελληνικά έχουν διπλή άρνηση («δεν υπάρχει κανένα πάρκο»), οπότε είναι εύκολο.",
          examples: [{ es: "No hay ninguna plaza en mi barrio.", el: "Δεν υπάρχει καμία πλατεία στη γειτονιά μου." }],
        },
        {
          textEl: "Το «algún / alguna» (κάποιος, κανένας) το χρησιμοποιούμε κυρίως στις ερωτήσεις. Στις καταφατικές προτάσεις με πληθυντικό λέμε συνήθως varios / varias (και το algunos / algunas είναι σωστό).",
          examples: [
            { es: "¿Hay alguna papelera por aquí cerca?", el: "Υπάρχει κανένα καλάθι αχρήστων εδώ κοντά;" },
            { es: "Hay varias farmacias en el barrio.", el: "Υπάρχουν μερικά φαρμακεία στη γειτονιά." },
          ],
        },
        {
          textEl: "Πριν από αρσενικό ουσιαστικό ενικού τα un, algún, ningún χάνουν το -o (un parque, algún parque, ningún parque). Αν το ουσιαστικό δεν επαναλαμβάνεται, γίνονται uno, alguno, ninguno.",
          examples: [
            { es: "¿Hay algún gimnasio? No, no hay ninguno.", el: "Υπάρχει κανένα γυμναστήριο; Όχι, δεν υπάρχει κανένα." },
            { es: "¿Hay algún banco por aquí? Sí, hay uno en la esquina.", el: "Υπάρχει καμιά τράπεζα εδώ κοντά; Ναι, υπάρχει μία στη γωνία." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ποσοδείκτες",
          headers: ["", "Χωρίς μέτρηση (ενικός)", "Μετρήσιμα, ενικός", "Μετρήσιμα, πληθυντικός"],
          rows: [
            ["Καθόλου", "no… ø tráfico / gente", "ningún parque / ninguna plaza", ""],
            ["Κάποιο / μερικά", "ø tráfico / gente", "un parque / una plaza, algún parque / alguna plaza", "varios parques / varias plazas"],
            ["Λίγο", "poco tráfico / poca gente", "", "pocos parques / pocas plazas"],
            ["Αρκετό", "bastante tráfico / gente", "", "bastantes parques / plazas"],
            ["Πολύ", "mucho tráfico / mucha gente", "", "muchos parques / muchas plazas"],
            ["Υπερβολικά", "demasiado tráfico / demasiada gente", "", "demasiados parques / demasiadas plazas"],
          ],
        },
      ],
      tipsEl: [
        "Το demasiado δεν σημαίνει «πάρα πολύ» με θετική έννοια. Σημαίνει «περισσότερο απ' όσο πρέπει»: «Hay demasiado ruido» = υπάρχει υπερβολικός θόρυβος (πρόβλημα).",
        "Το bastante σημαίνει «αρκετός» και στον ενικό δεν αλλάζει: bastante gente, bastante tráfico. Στον πληθυντικό: bastantes parques.",
        "Μη μπερδεύεις το muy και το mucho: το muy μπαίνει πριν από επίθετο ή επίρρημα (muy ruidoso), ενώ το mucho πριν από ουσιαστικό (mucho ruido).",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "En mi barrio hay ___ gente.", promptEl: "Στη γειτονιά μου υπάρχει πολύς κόσμος.", options: ["mucha", "muchos", "mucho", "muchas"], answer: "mucha", explainEl: "Η gente είναι θηλυκό ενικού, άρα mucha." },
        { type: "choice", id: "d2", promptEs: "En mi barrio hay ___ parques.", promptEl: "Στη γειτονιά μου υπάρχουν πολλά πάρκα.", options: ["muchos", "mucha", "mucho", "muchas"], answer: "muchos" },
        { type: "choice", id: "d3", promptEs: "No hay ___ cine por aquí.", promptEl: "Δεν υπάρχει κανένας κινηματογράφος εδώ.", options: ["ningún", "ninguna", "algún", "ninguno"], answer: "ningún", explainEl: "Το cine είναι αρσενικό ενικού, και μετά το no hay χρησιμοποιούμε ningún." },
        { type: "choice", id: "d4", promptEs: "No hay ___ plaza en mi calle.", promptEl: "Δεν υπάρχει καμία πλατεία στον δρόμο μου.", options: ["ninguna", "ningún", "alguna", "ninguno"], answer: "ninguna" },
        { type: "choice", id: "d5", promptEs: "¿Hay ___ farmacia por aquí cerca?", promptEl: "Υπάρχει κανένα φαρμακείο εδώ κοντά;", options: ["alguna", "algún", "ninguna", "varios"], answer: "alguna" },
        { type: "choice", id: "d6", promptEs: "Hay ___ tráfico: es imposible cruzar la calle.", promptEl: "Υπάρχει υπερβολική κίνηση: είναι αδύνατο να περάσεις τον δρόμο.", options: ["demasiado", "poco", "ningún", "bastantes"], answer: "demasiado", explainEl: "Το demasiado δείχνει υπερβολή, κάτι που ενοχλεί." },
        { type: "cloze", id: "d7", textEs: "Es un barrio muy tranquilo: hay ___ tráfico.", hintEl: "Είναι πολύ ήσυχη γειτονιά: υπάρχει λίγη κίνηση.", answer: "poco" },
        { type: "cloze", id: "d8", textEs: "Perdona, ¿hay algún gimnasio por aquí? Mmm... no, no hay ___.", hintEl: "Συγγνώμη, υπάρχει κανένα γυμναστήριο εδώ; Χμ... όχι, δεν υπάρχει κανένα.", answer: "ninguno", explainEl: "Το gimnasio δεν επαναλαμβάνεται, άρα ninguno (όχι ningún)." },
        { type: "cloze", id: "d9", textEs: "En mi barrio no hay ningún museo, ¿en tu barrio hay ___?", hintEl: "Στη γειτονιά μου δεν υπάρχει κανένα μουσείο, στη δική σου υπάρχει κανένα;", answer: "alguno", explainEl: "Το museo δεν επαναλαμβάνεται, άρα alguno." },
        { type: "order", id: "d10", promptEl: "Στη γειτονιά μου δεν υπάρχει κανένα νοσοκομείο.", solution: ["En", "mi", "barrio", "no", "hay", "ningún", "hospital."], distractors: ["algún", "ninguna"] },
        { type: "order", id: "d11", promptEl: "Υπάρχει αρκετός κόσμος στην πλατεία.", solution: ["Hay", "bastante", "gente", "en", "la", "plaza."], distractors: ["bastantes", "está"] },
        { type: "order", id: "d12", promptEl: "Η πόλη έχει πολλά πάρκα.", solution: ["La", "ciudad", "tiene", "muchos", "parques."], distractors: ["mucho", "hay"] },
      ],
    },
    {
      id: "resaltar-aspecto",
      titleEs: "Expresar gustos: resaltar un aspecto",
      titleEl: "Εκφράζω γούστα: τονίζω μια πτυχή",
      introEl:
        "Για να πεις τι σου αρέσει περισσότερο ή λιγότερο σε ένα μέρος, χρησιμοποιείς την ίδια δομή που έχουν και τα ελληνικά: «Αυτό που μου αρέσει περισσότερο είναι…».",
      rules: [
        {
          textEl: "Η δομή είναι «Lo que más / menos me gusta de… es + ουσιαστικό». Το lo que σημαίνει «αυτό που», το más είναι «περισσότερο» και το menos «λιγότερο».",
          examples: [{ es: "Lo que más me gusta de mi barrio es la gente.", el: "Αυτό που μου αρέσει περισσότερο στη γειτονιά μου είναι ο κόσμος." }],
        },
        {
          textEl: "Το ρήμα ser (es / son) συμφωνεί με αυτό που ακολουθεί: es + ενικός, son + πληθυντικός.",
          examples: [
            { es: "Lo que más me gusta de Madrid es el metro.", el: "Αυτό που μου αρέσει περισσότερο στη Μαδρίτη είναι το μετρό." },
            { es: "Lo que menos me gusta de la ciudad son los coches.", el: "Αυτό που μου αρέσει λιγότερο στην πόλη είναι τα αυτοκίνητα." },
          ],
        },
        {
          textEl: "Αν μετά ακολουθεί ολόκληρη πρόταση (με ρήμα), χρειάζεται «es que» + πρόταση.",
          examples: [{ es: "Lo que más me gusta es que hay muchas zonas verdes.", el: "Αυτό που μου αρέσει περισσότερο είναι ότι έχει πολλούς χώρους πρασίνου." }],
        },
        {
          textEl: "Το «gusta» μένει πάντα στον ενικό, γιατί το υποκείμενο είναι το «lo que», ακόμα κι αν μετά ακολουθεί πληθυντικός.",
          examples: [{ es: "Lo que más me gusta son las calles peatonales.", el: "Αυτό που μου αρέσει περισσότερο είναι οι πεζόδρομοι." }],
        },
      ],
      tables: [
        {
          titleEl: "Η δομή",
          headers: ["Μετά το «Lo que más / menos me gusta…»", "Παράδειγμα"],
          rows: [
            ["es + ουσιαστικό (ενικός)", "Lo que más me gusta de mi barrio es el mercado."],
            ["son + ουσιαστικό (πληθυντικός)", "Lo que más me gusta de mi barrio son los parques."],
            ["es que + πρόταση", "Lo que menos me gusta es que hay poca vida nocturna."],
          ],
        },
      ],
      tipsEl: [
        "Μη λες «Lo que más me gustan son…». Το lo que είναι ενικός, άρα πάντα «me gusta».",
        "Στα ελληνικά θα πεις «Αυτό που μου αρέσει περισσότερο είναι ότι…». Στα ισπανικά το «ότι» είναι το que: «es que hay…».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Lo que más me gusta de mi barrio ___ la gente.", promptEl: "Αυτό που μου αρέσει περισσότερο στη γειτονιά μου είναι ο κόσμος.", options: ["es", "son", "hay", "está"], answer: "es" },
        { type: "choice", id: "d2", promptEs: "Lo que menos me gusta de la ciudad ___ los coches.", promptEl: "Αυτό που μου αρέσει λιγότερο στην πόλη είναι τα αυτοκίνητα.", options: ["son", "es", "hay", "está"], answer: "son", explainEl: "Το los coches είναι πληθυντικός, άρα son." },
        { type: "choice", id: "d3", promptEs: "Lo que más me gusta de mi ciudad ___ que hay muchas zonas verdes.", promptEl: "Αυτό που μου αρέσει περισσότερο είναι ότι έχει πολλούς χώρους πρασίνου.", options: ["es", "son", "hay", "tiene"], answer: "es", explainEl: "Μετά ακολουθεί ολόκληρη πρόταση, άρα «es que»." },
        { type: "choice", id: "d4", promptEs: "Lo que más me ___ son las calles peatonales.", promptEl: "Αυτό που μου αρέσει περισσότερο είναι οι πεζόδρομοι.", options: ["gusta", "gustan", "gusto", "gustas"], answer: "gusta", explainEl: "Το υποκείμενο είναι το «lo que» (ενικός), άρα πάντα gusta." },
        { type: "cloze", id: "d5", textEs: "Lo que ___ me gusta de mi barrio es la gente.", hintEl: "Αυτό που μου αρέσει περισσότερο στη γειτονιά μου είναι ο κόσμος.", answer: "más" },
        { type: "cloze", id: "d6", textEs: "Lo que ___ me gusta es que hay mucho ruido.", hintEl: "Αυτό που μου αρέσει λιγότερο είναι ότι έχει πολύ θόρυβο.", answer: "menos" },
        { type: "cloze", id: "d7", textEs: "Lo que más me gusta de mi ciudad es ___ hay mucha vida nocturna.", hintEl: "Αυτό που μου αρέσει περισσότερο στην πόλη μου είναι ότι έχει πολλή νυχτερινή ζωή.", answer: "que" },
        { type: "cloze", id: "d8", textEs: "Lo que más me gusta de Atenas ___ los museos.", hintEl: "Αυτό που μου αρέσει περισσότερο στην Αθήνα είναι τα μουσεία.", answer: "son" },
        { type: "order", id: "d9", promptEl: "Αυτό που μου αρέσει περισσότερο στη γειτονιά μου είναι τα πάρκα.", solution: ["Lo", "que", "más", "me", "gusta", "de", "mi", "barrio", "son", "los", "parques."], distractors: ["es", "gustan"] },
        { type: "order", id: "d10", promptEl: "Αυτό που μου αρέσει λιγότερο είναι ότι έχει υπερβολικό θόρυβο.", solution: ["Lo", "que", "menos", "me", "gusta", "es", "que", "hay", "demasiado", "ruido."], distractors: ["son", "mucho"] },
        { type: "order", id: "d11", promptEl: "Αυτό που μου αρέσει περισσότερο στην πόλη είναι το μετρό.", solution: ["Lo", "que", "más", "me", "gusta", "de", "la", "ciudad", "es", "el", "metro."], distractors: ["son", "gustan"] },
      ],
    },
  ],
};
