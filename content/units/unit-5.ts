import type { UnitBase } from "@/types/content";

export const unit5: UnitBase = {
  id: 5,
  titleEs: "Tus amigos son mis amigos",
  titleEl: "Οι φίλοι σου είναι φίλοι μου",
  goalEl: "Περιγράφω ένα πρόσωπο (εμφάνιση, χαρακτήρας, οικογένεια) και μιλάω για τα γούστα και τα ενδιαφέροντά μου.",
  color: "#5da02f",
  pages: { start: 70, end: 83, lexico: 78, gramatica: 79, masEjercicios: { start: 171, end: 171 } },
  communicativeEl: [
    "Περιγράφω την εξωτερική εμφάνιση και τον χαρακτήρα ενός ανθρώπου",
    "Εκφράζω και συγκρίνω γούστα και ενδιαφέροντα (me gusta, me encanta)",
    "Ρωτάω τους άλλους τι τους αρέσει",
    "Μιλάω για προσωπικές σχέσεις: οικογένεια, φίλοι, σύντροφος",
    "Μιλάω για μουσική",
  ],
  verbIds: [],
  grammar: [
    {
      id: "gustar",
      titleEs: "El verbo gustar",
      titleEl: "Το ρήμα gustar",
      introEl:
        "Για έναν Έλληνα το gustar είναι εύκολο, γιατί λειτουργεί όπως το «μου αρέσει»: αυτό που αρέσει είναι το υποκείμενο και το πρόσωπο που το απολαμβάνει δηλώνεται με τις αντωνυμίες me, te, le, nos, os, les. Γι' αυτό το ρήμα συμφωνεί με το πράγμα που αρέσει και όχι με το πρόσωπο.",
      rules: [
        {
          textEl: "Δομή: me / te / le / nos / os / les + gusta (όταν αυτό που αρέσει είναι ουσιαστικό ενικού ή απαρέμφατο) ή gustan (όταν είναι ουσιαστικό πληθυντικού).",
          examples: [
            { es: "Me gusta el flamenco.", el: "Μου αρέσει το φλαμένκο." },
            { es: "Me gustan los conciertos.", el: "Μου αρέσουν οι συναυλίες." },
            { es: "Nos gusta bailar.", el: "Μας αρέσει να χορεύουμε." },
          ],
        },
        {
          textEl: "Μετά το gustar το ουσιαστικό παίρνει πάντα άρθρο (ή κτητική), όπως και στα ελληνικά: «Μου αρέσει ο κινηματογράφος» → «Me gusta el cine».",
          examples: [{ es: "¿Te gusta el jazz?", el: "Σου αρέσει η τζαζ;" }],
        },
        {
          textEl: "Το a mí, a ti, a él / ella / usted, a nosotros, a vosotros, a ellos είναι προαιρετικό. Το βάζουμε για έμφαση ή αντίθεση, και συχνά με ονόματα.",
          examples: [
            { es: "A Ana le gusta el jazz.", el: "Στην Ana αρέσει η τζαζ." },
            { es: "A mis padres les gustan los festivales.", el: "Στους γονείς μου αρέσουν τα φεστιβάλ." },
          ],
        },
        {
          textEl: "Για να πεις πόσο σου αρέσει: me encanta (πάρα πολύ), me gusta mucho, me gusta bastante. Στην άρνηση: no me gusta mucho, no me gusta, no me gusta nada. Το encantar δεν παίρνει mucho.",
          examples: [
            { es: "Me encanta la salsa.", el: "Λατρεύω τη σάλσα." },
            { es: "No me gusta nada el karaoke.", el: "Δεν μου αρέσει καθόλου το καραόκε." },
          ],
        },
        {
          textEl: "Για να προσθέσεις «ούτε»: y + no = ni.",
          examples: [{ es: "No me gusta el rock ni el jazz.", el: "Δεν μου αρέσει ούτε το ροκ ούτε η τζαζ." }],
        },
      ],
      tables: [
        {
          titleEl: "Οι αντωνυμίες με το gustar",
          headers: ["", "Pronombre", "+ singular o verbo", "+ plural"],
          rows: [
            ["(a mí)", "me", "gusta", "gustan"],
            ["(a ti / vos)", "te", "gusta", "gustan"],
            ["(a él / ella / usted)", "le", "gusta", "gustan"],
            ["(a nosotros / nosotras)", "nos", "gusta", "gustan"],
            ["(a vosotros / vosotras)", "os", "gusta", "gustan"],
            ["(a ellos / ellas / ustedes)", "les", "gusta", "gustan"],
          ],
        },
        {
          titleEl: "Πόσο μου αρέσει",
          headers: ["Español", "Ελληνικά"],
          rows: [
            ["Me encanta…", "Το λατρεύω"],
            ["Me gusta mucho…", "Μου αρέσει πολύ"],
            ["Me gusta bastante…", "Μου αρέσει αρκετά"],
            ["No me gusta mucho…", "Δεν μου αρέσει και πολύ"],
            ["No me gusta…", "Δεν μου αρέσει"],
            ["No me gusta nada…", "Δεν μου αρέσει καθόλου"],
          ],
        },
      ],
      tipsEl: [
        "Η συμφωνία γίνεται με το πράγμα που αρέσει: «me gustan los gatos», όχι «me gusto los gatos» ούτε «yo gusto los gatos».",
        "Όταν αυτό που αρέσει είναι ρήμα, χρησιμοποιούμε πάντα gusta (ενικό), ακόμα κι όταν είναι δύο ρήματα: «Me gusta bailar y cantar».",
        "Το mucho μπαίνει μετά το ρήμα: «me gusta mucho». Δεν λέμε «me encanta mucho», γιατί το encanta είναι ήδη πολύ δυνατό.",
        "Όταν μιλάς για ένα πρόσωπο με όνομα, βάζουμε a + όνομα και μετά le / les: «A Marta le gusta», «A Marta y a Luis les gusta».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "A mi hermano ___ gusta el jazz.", promptEl: "Στον αδερφό μου αρέσει η τζαζ.", options: ["me", "te", "le", "les"], answer: "le" },
        { type: "choice", id: "d2", promptEs: "A nosotros ___ gusta bailar.", promptEl: "Σε εμάς αρέσει να χορεύουμε.", options: ["me", "nos", "os", "les"], answer: "nos" },
        { type: "choice", id: "d3", promptEs: "Me ___ los conciertos.", promptEl: "Μου αρέσουν οι συναυλίες.", options: ["gusta", "gustan", "gusto", "gustas"], answer: "gustan", explainEl: "Τα conciertos είναι πληθυντικός, άρα gustan." },
        { type: "choice", id: "d4", promptEs: "¿Te ___ cantar?", promptEl: "Σου αρέσει να τραγουδάς;", options: ["gusta", "gustan", "gustas", "gusto"], answer: "gusta", explainEl: "Μετά από ρήμα (απαρέμφατο) χρησιμοποιούμε πάντα gusta." },
        { type: "choice", id: "d5", promptEs: "Me ___ la salsa.", promptEl: "Λατρεύω τη σάλσα.", options: ["encanta", "encantan", "encantas", "gustan"], answer: "encanta" },
        { type: "cloze", id: "d6", textEs: "A vosotros ___ gusta la música clásica.", hintEl: "Σε εσάς αρέσει η κλασική μουσική.", answer: "os" },
        { type: "cloze", id: "d7", textEs: "A mis padres ___ gustan los festivales.", hintEl: "Στους γονείς μου αρέσουν τα φεστιβάλ.", answer: "les" },
        { type: "cloze", id: "d8", textEs: "Me ___ el flamenco.", hintEl: "Μου αρέσει το φλαμένκο.", answer: "gusta" },
        { type: "cloze", id: "d9", textEs: "No me gusta ___ el karaoke.", hintEl: "Δεν μου αρέσει καθόλου το καραόκε.", answer: "nada" },
        { type: "order", id: "d10", promptEl: "Μου αρέσει να χορεύω.", solution: ["Me", "gusta", "bailar."], distractors: ["gustan", "bailo"] },
        { type: "order", id: "d11", promptEl: "Δεν μου αρέσουν τα καραόκε.", solution: ["No", "me", "gustan", "los", "karaokes."], distractors: ["gusta", "las"] },
        { type: "order", id: "d12", promptEl: "Στην Ana αρέσει το ροκ.", solution: ["A", "Ana", "le", "gusta", "el", "rock."], distractors: ["les", "gustan"] },
      ],
    },
    {
      id: "contrastar-gustos",
      titleEs: "Preguntar sobre gustos y contrastar gustos",
      titleEl: "Ρωτάω για γούστα και τα συγκρίνω",
      introEl:
        "Όταν κάποιος λέει τι του αρέσει, απαντάς αν έχεις το ίδιο ή το αντίθετο γούστο με τις φράσεις a mí también, a mí tampoco, a mí sí, a mí no.",
      rules: [
        {
          textEl: "Για να ρωτήσεις: «¿Te gusta…?», «¿Qué (tipo de) música te gusta (más)?», «¿Cuál es tu color favorito / preferido?».",
          examples: [
            { es: "¿Te gusta el flamenco? Sí, mucho.", el: "Σου αρέσει το φλαμένκο; Ναι, πολύ." },
            { es: "¿Qué tipo de música te gusta más? El rock.", el: "Τι είδος μουσικής σου αρέσει περισσότερο; Το ροκ." },
            { es: "¿Cuál es tu grupo favorito?", el: "Ποιο είναι το αγαπημένο σου συγκρότημα;" },
          ],
        },
        {
          textEl: "Συμφωνία σε θετική πρόταση: «a mí también» (κι εμένα). Συμφωνία σε αρνητική πρόταση: «a mí tampoco» (ούτε εμένα).",
          examples: [
            { es: "Me gusta el jazz. A mí también.", el: "Μου αρέσει η τζαζ. Κι εμένα." },
            { es: "No me gusta el pop. A mí tampoco.", el: "Δεν μου αρέσει το ποπ. Ούτε εμένα." },
          ],
        },
        {
          textEl: "Διαφωνία: σε θετική πρόταση λέμε «a mí no», σε αρνητική λέμε «a mí sí».",
          examples: [
            { es: "Me encanta bailar. A mí no.", el: "Λατρεύω να χορεύω. Εμένα όχι." },
            { es: "No me gusta la música clásica. A mí sí.", el: "Δεν μου αρέσει η κλασική μουσική. Εμένα ναι." },
          ],
        },
        {
          textEl: "Με άλλα πρόσωπα αλλάζει η αντωνυμία: a ti, a él / ella, a nosotros, a vosotros, a ellos. Με το «pero» αντιπαραθέτουμε.",
          examples: [{ es: "A mí me gusta el cine, pero a mi hermano le encanta el teatro.", el: "Σε μένα αρέσει ο κινηματογράφος, αλλά στον αδερφό μου αρέσει πολύ το θέατρο." }],
        },
      ],
      tables: [
        {
          titleEl: "Πώς αντιδρώ",
          headers: ["Lo que dice el otro", "Estoy de acuerdo", "No estoy de acuerdo"],
          rows: [
            ["Me gusta el rock.", "A mí también.", "A mí no."],
            ["No me gusta el rock.", "A mí tampoco.", "A mí sí."],
          ],
        },
      ],
      tipsEl: [
        "Το también (κι εγώ) πάει μόνο με θετική πρόταση και το tampoco (ούτε εγώ) μόνο με αρνητική. Μην τα αντιστρέψεις.",
        "Όταν διαφωνείς δεν χρησιμοποιείς también ή tampoco: λες απλώς «a mí no» ή «a mí sí».",
        "Τα favorito και preferido σημαίνουν και τα δύο «αγαπημένος». Αλλάζουν γένος: mi canción favorita, mi color preferido.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Me gusta el fútbol. (Estás de acuerdo.)", promptEl: "Μου αρέσει το ποδόσφαιρο. (Συμφωνείς.)", options: ["A mí también.", "A mí tampoco.", "A mí sí.", "A mí no."], answer: "A mí también." },
        { type: "choice", id: "d2", promptEs: "No me gusta el pop. (Estás de acuerdo.)", promptEl: "Δεν μου αρέσει το ποπ. (Συμφωνείς.)", options: ["A mí también.", "A mí tampoco.", "A mí sí.", "A mí no."], answer: "A mí tampoco." },
        { type: "choice", id: "d3", promptEs: "Me encanta bailar. (No estás de acuerdo.)", promptEl: "Λατρεύω να χορεύω. (Διαφωνείς.)", options: ["A mí no.", "A mí sí.", "A mí también.", "A mí tampoco."], answer: "A mí no." },
        { type: "choice", id: "d4", promptEs: "No me gusta la música clásica. (No estás de acuerdo.)", promptEl: "Δεν μου αρέσει η κλασική μουσική. (Διαφωνείς.)", options: ["A mí no.", "A mí sí.", "A mí también.", "A mí tampoco."], answer: "A mí sí." },
        { type: "choice", id: "d5", promptEs: "¿___ tipo de música te gusta más?", promptEl: "Τι είδος μουσικής σου αρέσει περισσότερο;", options: ["Qué", "Cuál", "Cuáles", "Quién"], answer: "Qué" },
        { type: "choice", id: "d6", promptEs: "¿Cuál es tu color ___?", promptEl: "Ποιο είναι το αγαπημένο σου χρώμα;", options: ["favorito", "favorita", "favoritos", "favoritas"], answer: "favorito" },
        { type: "cloze", id: "d7", textEs: "Me gusta el rock. A mí ___.", hintEl: "Μου αρέσει το ροκ. Κι εμένα.", answer: "también" },
        { type: "cloze", id: "d8", textEs: "No me gusta el karaoke. A mí ___.", hintEl: "Δεν μου αρέσει το καραόκε. Ούτε εμένα.", answer: "tampoco" },
        { type: "cloze", id: "d9", textEs: "A Marta le gusta el jazz, pero a mí ___.", hintEl: "Στη Marta αρέσει η τζαζ, αλλά σε μένα όχι.", answer: "no" },
        { type: "cloze", id: "d10", textEs: "A mi hermano no le gusta cantar, pero a mí ___.", hintEl: "Στον αδερφό μου δεν αρέσει να τραγουδάει, αλλά σε μένα ναι.", answer: "sí" },
        { type: "order", id: "d11", promptEl: "Κι εμένα μου αρέσει η σάλσα.", solution: ["A", "mí", "también", "me", "gusta", "la", "salsa."], alternatives: [["A", "mí", "me", "gusta", "la", "salsa", "también."], ["Me", "gusta", "la", "salsa", "a", "mí", "también."]], distractors: ["tampoco", "gustan"] },
        { type: "order", id: "d12", promptEl: "Ούτε εμένα.", solution: ["A", "mí", "tampoco."], distractors: ["también", "sí"] },
      ],
    },
    {
      id: "posesivos",
      titleEs: "Los posesivos",
      titleEl: "Οι κτητικές αντωνυμίες: mi, tu, su",
      introEl:
        "Οι κτητικές αντωνυμίες δείχνουν σε ποιον ανήκει κάτι ή με ποιον σχετίζεται: συγγένεια (mi hermana), φιλία (mis amigos), αντικείμενα (mi libro). Στα ισπανικά μπαίνουν ΠΡΙΝ από το ουσιαστικό και χωρίς άρθρο.",
      rules: [
        {
          textEl: "Τα mi, tu, su έχουν μία μορφή για αρσενικό και θηλυκό. Στον πληθυντικό παίρνουν -s: mis, tus, sus.",
          examples: [
            { es: "mi padre, mi madre", el: "ο πατέρας μου, η μητέρα μου" },
            { es: "mis hermanos, mis hermanas", el: "τα αδέρφια μου, οι αδερφές μου" },
          ],
        },
        {
          textEl: "Η κτητική συμφωνεί με αυτό που κατέχεται και ΟΧΙ με τον κάτοχο. Το su σημαίνει «του, της, σας, τους»: δεν δείχνει το φύλο του κατόχου.",
          examples: [
            { es: "Sara vive con su padre.", el: "Η Sara μένει με τον πατέρα της." },
            { es: "Sara vive con sus padres.", el: "Η Sara μένει με τους γονείς της." },
          ],
        },
        {
          textEl: "Οι κτητικές δεν συνοδεύονται από άρθρο: «mi amigo Luis», όχι «el mi amigo».",
          examples: [{ es: "Mi amiga Carla es de Perú.", el: "Η φίλη μου η Carla είναι από το Περού." }],
        },
        {
          textEl: "Για τους κατόχους «εμείς» και «εσείς» υπάρχουν οι μορφές nuestro/a/os/as και vuestro/a/os/as, που αλλάζουν και σε γένος.",
          examples: [{ es: "Nuestra casa es pequeña.", el: "Το σπίτι μας είναι μικρό." }],
        },
        {
          textEl: "Το su χρησιμοποιείται και για το ευγενικό usted / ustedes.",
          examples: [{ es: "¿Es este su móvil, señor García?", el: "Είναι αυτό το κινητό σας, κύριε García;" }],
        },
      ],
      tables: [
        {
          titleEl: "Οι κτητικές",
          headers: ["", "Singular", "Plural"],
          rows: [
            ["1.ª persona (yo)", "mi padre, mi madre", "mis hermanos, mis hermanas"],
            ["2.ª persona (tú, vos)", "tu padre, tu madre", "tus hermanos, tus hermanas"],
            ["3.ª persona (él / ella / usted)", "su padre, su madre", "sus hermanos, sus hermanas"],
            ["1.ª persona plural (nosotros)", "nuestro padre, nuestra madre", "nuestros hermanos, nuestras hermanas"],
            ["2.ª persona plural (vosotros)", "vuestro padre, vuestra madre", "vuestros hermanos, vuestras hermanas"],
            ["3.ª persona plural (ellos / ustedes)", "su padre, su madre", "sus hermanos, sus hermanas"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά η κτητική έρχεται ΜΕΤΑ το ουσιαστικό («ο φίλος μου»). Στα ισπανικά έρχεται ΠΡΙΝ, χωρίς άρθρο: «mi amigo».",
        "Στα ελληνικά λέμε «του» ή «της» και φαίνεται ποιος κατέχει. Στα ισπανικά το su καλύπτει και τα δύο: αν θέλεις να ξεκαθαρίσεις, πες «el móvil de Ana».",
        "Το mi (δικός μου) δεν έχει τόνο. Το mí (εμένα, μετά από πρόθεση) έχει τόνο: «a mí me gusta mi casa». Δες το επόμενο μάθημα.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ madre se llama Ana.", promptEl: "Η μητέρα μου λέγεται Ana.", options: ["Mi", "Mis", "Tu", "Su"], answer: "Mi" },
        { type: "choice", id: "d2", promptEs: "___ hermanos viven en Atenas.", promptEl: "Τα αδέρφια μου μένουν στην Αθήνα.", options: ["Mi", "Mis", "Tus", "Su"], answer: "Mis" },
        { type: "choice", id: "d3", promptEs: "¿Dónde viven ___ padres, Luis?", promptEl: "Πού μένουν οι γονείς σου, Luis;", options: ["tu", "tus", "mi", "mis"], answer: "tus" },
        { type: "choice", id: "d4", promptEs: "Sara tiene un hermano. ___ hermano es alto.", promptEl: "Η Sara έχει έναν αδερφό. Ο αδερφός της είναι ψηλός.", options: ["Su", "Sus", "Mi", "Tus"], answer: "Su" },
        { type: "choice", id: "d5", promptEs: "Pablo y Ana tienen dos hijos. ___ hijos son simpáticos.", promptEl: "Ο Pablo και η Ana έχουν δύο παιδιά. Τα παιδιά τους είναι συμπαθητικά.", options: ["Su", "Sus", "Tus", "Mis"], answer: "Sus", explainEl: "Το su συμφωνεί με το πράγμα που κατέχεται: τα hijos είναι πληθυντικός, άρα sus." },
        { type: "choice", id: "d6", promptEs: "¿Qué frase es correcta?", options: ["Mi amigo Luis es de Roma.", "El mi amigo Luis es de Roma.", "Amigo mi Luis es de Roma.", "Mis amigo Luis es de Roma."], answer: "Mi amigo Luis es de Roma.", explainEl: "Η κτητική μπαίνει πριν από το ουσιαστικό και χωρίς άρθρο." },
        { type: "cloze", id: "d7", textEs: "Ana va al cine con ___ amigos.", hintEl: "Η Ana πάει στον κινηματογράφο με τους φίλους της.", answer: "sus" },
        { type: "cloze", id: "d8", textEs: "Yo vivo con ___ abuelos.", hintEl: "Μένω με τους παππούδες μου.", answer: "mis" },
        { type: "cloze", id: "d9", textEs: "Nosotros queremos mucho a ___ abuela.", hintEl: "Αγαπάμε πολύ τη γιαγιά μας.", answer: "nuestra" },
        { type: "order", id: "d10", promptEl: "Η φίλη μου η Carla είναι από το Περού.", solution: ["Mi", "amiga", "Carla", "es", "de", "Perú."], distractors: ["La", "mis"] },
        { type: "order", id: "d11", promptEl: "Τα αδέρφια σου είναι πολύ ψηλά.", solution: ["Tus", "hermanos", "son", "muy", "altos."], distractors: ["Tu", "altas"] },
        { type: "order", id: "d12", promptEl: "Ο πατέρας της δουλεύει σε μια τράπεζα.", solution: ["Su", "padre", "trabaja", "en", "un", "banco."], distractors: ["Sus", "una"] },
      ],
    },
    {
      id: "acentos-diacriticos",
      titleEs: "Acentos diacríticos",
      titleEl: "Διακριτικοί τόνοι",
      introEl:
        "Στα ισπανικά κάποιες μονοσύλλαβες λέξεις γράφονται το ίδιο αλλά έχουν άλλη σημασία, και ο τόνος τις ξεχωρίζει. Το ίδιο κάνουμε στα ελληνικά με το «πού» και το «που» ή το «πώς» και το «πως».",
      rules: [
        {
          textEl: "Οι κτητικές mi, tu και το άρθρο el δεν έχουν τόνο. Οι αντωνυμίες mí, tú, él έχουν τόνο.",
          examples: [
            { es: "Mi hermano es alto. Esto es para mí.", el: "Ο αδερφός μου είναι ψηλός. Αυτό είναι για μένα." },
            { es: "Tu casa es grande. Tú eres de Grecia.", el: "Το σπίτι σου είναι μεγάλο. Εσύ είσαι από την Ελλάδα." },
            { es: "El libro es nuevo. Él es mi primo.", el: "Το βιβλίο είναι καινούριο. Αυτός είναι ο ξάδερφός μου." },
          ],
        },
        {
          textEl: "Το te (αντωνυμία) δεν έχει τόνο, ενώ το té (το ρόφημα, τσάι) έχει.",
          examples: [
            { es: "¿Te llamas Ana?", el: "Σε λένε Ana;" },
            { es: "Prefiero el té.", el: "Προτιμώ το τσάι." },
          ],
        },
        {
          textEl: "Οι ερωτηματικές λέξεις (qué, cómo, cuál, cuánto, dónde, quién) γράφονται πάντα με τόνο. Ως σύνδεσμοι, τα que και como δεν έχουν τόνο.",
          examples: [
            { es: "¿Qué es esto? Creo que es una bufanda.", el: "Τι είναι αυτό; Νομίζω ότι είναι ένα κασκόλ." },
            { es: "¿Cómo estás? Soy alto como mi padre.", el: "Πώς είσαι; Είμαι ψηλός όπως ο πατέρας μου." },
          ],
        },
        {
          textEl: "«Por qué» (δύο λέξεις, με τόνο) ρωτά «γιατί;». Το «porque» (μία λέξη, χωρίς τόνο) απαντά «επειδή».",
          examples: [
            { es: "¿Por qué estudias español?", el: "Γιατί μαθαίνεις ισπανικά;" },
            { es: "Estudio español porque quiero viajar a Cuba.", el: "Μαθαίνω ισπανικά επειδή θέλω να ταξιδέψω στην Κούβα." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Χωρίς τόνο και με τόνο",
          headers: ["Sin tilde", "Con tilde"],
          rows: [
            ["mi (κτητική): Mi hermano es alto.", "mí (αντωνυμία): Esto es para mí."],
            ["tu (κτητική): Tu casa es grande.", "tú (αντωνυμία): Tú eres de Grecia."],
            ["te (αντωνυμία): ¿Te llamas Ana?", "té (τσάι): Prefiero el té."],
            ["el (άρθρο): El libro es nuevo.", "él (αντωνυμία): Él es mi primo."],
            ["que (σύνδεσμος): Creo que es alto.", "qué (ερωτηματική): ¿Qué es esto?"],
            ["como (σύγκριση): Soy alto como mi padre.", "cómo (ερωτηματική): ¿Cómo estás?"],
            ["porque (απάντηση): No voy porque tengo clase.", "por qué (ερώτηση): ¿Por qué estudias español?"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά έχεις το ίδιο φαινόμενο: «πού» (ερώτηση) και «που» (σύνδεσμος). Σκέψου το ως «ερώτηση = τόνος».",
        "Το mí με τόνο το βρίσκεις σχεδόν πάντα μετά από πρόθεση: a mí, para mí. Το mi χωρίς τόνο είναι η κτητική: mi casa.",
        "Στην ερώτηση γράφουμε «por qué» με δύο λέξεις και τόνο. Στην απάντηση γράφουμε «porque» με μία λέξη και χωρίς τόνο.",
        "Το sí (ναι) έχει τόνο, ενώ το si (αν) δεν έχει: «Si tienes tiempo, ven».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ estudias español?", promptEl: "Γιατί μαθαίνεις ισπανικά;", options: ["Porque", "Por qué", "Por que", "Que"], answer: "Por qué", explainEl: "Στην ερώτηση γράφουμε «por qué» με δύο λέξεις και τόνο." },
        { type: "choice", id: "d2", promptEs: "Estudio español ___ quiero viajar a Cuba.", promptEl: "Μαθαίνω ισπανικά επειδή θέλω να ταξιδέψω στην Κούβα.", options: ["porque", "por qué", "por que", "qué"], answer: "porque" },
        { type: "choice", id: "d3", promptEs: "___ eres muy simpático.", promptEl: "Εσύ είσαι πολύ συμπαθητικός.", options: ["Tu", "Tú", "Té", "Tus"], answer: "Tú" },
        { type: "choice", id: "d4", promptEs: "Esta es ___ casa.", promptEl: "Αυτό είναι το σπίτι σου.", options: ["tu", "tú", "te", "té"], answer: "tu" },
        { type: "choice", id: "d5", promptEs: "A ___ me gusta el flamenco.", promptEl: "Σε μένα αρέσει το φλαμένκο.", options: ["mi", "mí", "me", "mis"], answer: "mí", explainEl: "Μετά από πρόθεση (a) χρησιμοποιούμε την αντωνυμία mí, με τόνο." },
        { type: "choice", id: "d6", promptEs: "¿Quieres ___ o café?", promptEl: "Θέλεις τσάι ή καφέ;", options: ["te", "té", "tú", "tu"], answer: "té" },
        { type: "choice", id: "d7", promptEs: "¿Qué frase es correcta?", options: ["Tú te llamas Ana, ¿verdad?", "Tu te llamas Ana, ¿verdad?", "Tú té llamas Ana, ¿verdad?"], answer: "Tú te llamas Ana, ¿verdad?", explainEl: "Το tú (εσύ) έχει τόνο, ενώ το te (αντωνυμία) δεν έχει." },
        { type: "cloze", id: "d8", textEs: "___ es mi hermano.", hintEl: "Αυτός είναι ο αδερφός μου.", answer: "Él", explainEl: "Η αντωνυμία él (αυτός) έχει τόνο, ενώ το άρθρο el δεν έχει." },
        { type: "cloze", id: "d9", textEs: "___ libro es de Ana.", hintEl: "Το βιβλίο είναι της Ana.", answer: "El" },
        { type: "cloze", id: "d10", textEs: "¿___ te llamas?", hintEl: "Πώς σε λένε;", answer: "Cómo" },
        { type: "cloze", id: "d11", textEs: "Mi madre es alta ___ mi abuela.", hintEl: "Η μητέρα μου είναι ψηλή όπως η γιαγιά μου.", answer: "como" },
        { type: "cloze", id: "d12", textEs: "Creo ___ Ana es italiana.", hintEl: "Νομίζω ότι η Ana είναι Ιταλίδα.", answer: "que", explainEl: "Ως σύνδεσμος το que δεν έχει τόνο." },
      ],
    },
    {
      id: "describir-personas",
      titleEs: "Describir personas: es, tiene, parece",
      titleEl: "Περιγραφή προσώπων: es, tiene, parece",
      introEl:
        "Για να περιγράψεις έναν άνθρωπο χρησιμοποιείς τρία ρήματα: ser (πώς είναι), tener (τι χαρακτηριστικά έχει) και parecer (πώς φαίνεται). Τα επίθετα συμφωνούν με το πρόσωπο, και οι λέξεις muy, bastante και un poco δείχνουν τον βαθμό.",
      rules: [
        {
          textEl: "Es + (un chico / un hombre / una mujer / una persona) + (muy / bastante / un poco) + επίθετο.",
          examples: [
            { es: "Mi profesor es un hombre muy alto.", el: "Ο καθηγητής μου είναι ένας πολύ ψηλός άντρας." },
            { es: "Ana es bastante simpática.", el: "Η Ana είναι αρκετά συμπαθητική." },
          ],
        },
        {
          textEl: "Tiene + el pelo / la barba / el bigote / los ojos + επίθετο. Με μέρη του σώματος χρησιμοποιούμε άρθρο και όχι κτητική: «Tiene el pelo rubio», όχι «Tiene su pelo rubio».",
          examples: [
            { es: "Mi madre tiene los ojos azules.", el: "Η μητέρα μου έχει γαλάζια μάτια." },
            { es: "Mi abuelo tiene barba y bigote.", el: "Ο παππούς μου έχει γένια και μουστάκι." },
          ],
        },
        {
          textEl: "Parece + επίθετο σημαίνει «φαίνεται»: το χρησιμοποιούμε για την πρώτη εντύπωση.",
          examples: [{ es: "Tu primo parece muy divertido.", el: "Ο ξάδερφός σου φαίνεται πολύ διασκεδαστικός." }],
        },
        {
          textEl: "Τα επίθετα συμφωνούν σε γένος και αριθμό: alto, alta, altos, altas. Αυτά σε -e ή σε σύμφωνο (inteligente, alegre, normal) έχουν συνήθως την ίδια μορφή στο αρσενικό και στο θηλυκό (εξαιρέσεις: trabajador, trabajadora).",
          examples: [{ es: "Mis hermanas son muy inteligentes.", el: "Οι αδερφές μου είναι πολύ έξυπνες." }],
        },
        {
          textEl: "Muy (πολύ) και bastante (αρκετά) πάνε με θετικά και αρνητικά επίθετα. Το un poco (λίγο) πάει μόνο με επίθετα που θεωρούμε αρνητικά.",
          examples: [
            { es: "Es muy simpático.", el: "Είναι πολύ συμπαθητικός." },
            { es: "Es un poco bajo.", el: "Είναι λίγο κοντός." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Αντίθετα",
          headers: ["Adjetivo", "Contrario"],
          rows: [
            ["guapo/a", "feo/a"],
            ["alto/a", "bajo/a"],
            ["delgado/a", "gordo/a"],
            ["corto/a", "largo/a"],
            ["liso/a", "rizado/a"],
            ["abierto/a", "cerrado/a"],
            ["divertido/a", "aburrido/a"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά το χρώμα έρχεται πριν («έχει ξανθά μαλλιά»). Στα ισπανικά έρχεται μετά: «tiene el pelo rubio», «tiene los ojos verdes».",
        "Με το ser λέμε πώς είναι κάποιος (χαρακτήρας, εμφάνιση). Με το tener λέμε τι έχει (μαλλιά, μάτια, γένια). Μην πεις «es el pelo rubio» ούτε «tiene alto».",
        "Το muy προηγείται από επίθετο ή επίρρημα. Το mucho (πολύ) πάει με ρήματα και ουσιαστικά. Δεν λέμε «mucho alto».",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Mi madre tiene ___ pelo largo.", promptEl: "Η μητέρα μου έχει μακριά μαλλιά.", options: ["el", "su", "un", "la"], answer: "el", explainEl: "Με μέρη του σώματος χρησιμοποιούμε άρθρο και όχι κτητική." },
        { type: "choice", id: "d2", promptEs: "Mi abuelo tiene los ojos ___.", promptEl: "Ο παππούς μου έχει γαλάζια μάτια.", options: ["azul", "azules", "azula", "azulos"], answer: "azules" },
        { type: "choice", id: "d3", promptEs: "Elena ___ muy simpática.", promptEl: "Η Elena φαίνεται πολύ συμπαθητική.", options: ["parece", "tiene", "parecen", "pareces"], answer: "parece" },
        { type: "choice", id: "d4", promptEs: "Mis primas son altas y ___.", promptEl: "Οι ξαδέρφες μου είναι ψηλές και αδύνατες.", options: ["delgadas", "delgado", "delgados", "delgada"], answer: "delgadas" },
        { type: "choice", id: "d5", promptEs: "Mi hermano es ___ bajo, pero muy simpático.", promptEl: "Ο αδερφός μου είναι λίγο κοντός, αλλά πολύ συμπαθητικός.", options: ["un poco", "mucho", "más", "menos"], answer: "un poco" },
        { type: "cloze", id: "d6", textEs: "Mi padre es calvo y tiene ___.", hintEl: "Ο πατέρας μου είναι φαλακρός και έχει γένια.", answer: "barba" },
        { type: "cloze", id: "d7", textEs: "Marta es ___ simpática.", hintEl: "Η Marta είναι πολύ συμπαθητική.", answer: "muy" },
        { type: "cloze", id: "d8", textEs: "Mi hermana tiene el pelo ___ y rubio.", hintEl: "Η αδερφή μου έχει σγουρά και ξανθά μαλλιά.", answer: "rizado" },
        { type: "cloze", id: "d9", textEs: "Tengo el pelo corto y los ojos ___.", hintEl: "Έχω κοντά μαλλιά και πράσινα μάτια.", answer: "verdes" },
        { type: "order", id: "d10", promptEl: "Ο Pablo είναι ένας πολύ ψηλός άντρας.", solution: ["Pablo", "es", "un", "hombre", "muy", "alto."], distractors: ["tiene", "alta"] },
        { type: "order", id: "d11", promptEl: "Η γιαγιά μου έχει άσπρα μαλλιά.", solution: ["Mi", "abuela", "tiene", "el", "pelo", "blanco."], distractors: ["su", "blanca"] },
        { type: "order", id: "d12", promptEl: "Ο καινούριος καθηγητής φαίνεται ενδιαφέρων.", solution: ["El", "nuevo", "profesor", "parece", "interesante."], alternatives: [["El", "profesor", "nuevo", "parece", "interesante."]], distractors: ["es", "interesantes"] },
      ],
    },
  ],
};
