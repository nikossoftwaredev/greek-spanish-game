import type { UnitBase } from "@/types/content";

export const unit9: UnitBase = {
  id: 9,
  titleEs: "¿Sabes conducir?",
  titleEl: "Ξέρεις να οδηγείς;",
  goalEl: "Επιλέγω το ιδανικό πρόσωπο για μια δουλειά: μιλάω για εμπειρίες του παρελθόντος, για δεξιότητες και για χαρακτηριστικά των ανθρώπων.",
  color: "#9e56a0",
  pages: { start: 126, end: 139, lexico: 134, gramatica: 135, masEjercicios: { start: 197, end: 201 } },
  communicativeEl: [
    "Μιλάω για εμπειρίες του παρελθόντος («¿Has estado alguna vez…?»)",
    "Λέω τι ξέρω να κάνω και τι μπορώ να κάνω (saber, poder + απαρέμφατο)",
    "Μιλάω για προτερήματα και ελαττώματα των ανθρώπων",
    "Μιλάω για αλλαγές στη ζωή και για επαγγέλματα",
  ],
  verbIds: ["haber", "saber", "poder"],
  grammar: [
    {
      id: "preterito-perfecto",
      titleEs: "Hablar de experiencias pasadas: el pretérito perfecto",
      titleEl: "Μιλώ για εμπειρίες του παρελθόντος: το pretérito perfecto",
      introEl:
        "Το pretérito perfecto το ξέρεις ήδη από τα ελληνικά: «έχω ταξιδέψει», «έχω φάει». Σχηματίζεται με το ρήμα haber (έχω) στον ενεστώτα και ένα participio.",
      rules: [
        {
          textEl: "Ο τύπος είναι: ενεστώτας του haber + participio. Χρησιμοποιούμε πάντα το haber, ποτέ το tener ή το ser.",
          examples: [
            { es: "He estado en Londres.", el: "Έχω πάει στο Λονδίνο." },
            { es: "Hemos vivido en Atenas.", el: "Έχουμε ζήσει στην Αθήνα." },
          ],
        },
        {
          textEl: "Το participio μετά το haber δεν αλλάζει ποτέ (ούτε γένος ούτε αριθμό), όπως ακριβώς το ελληνικό «έχω γράψει».",
          examples: [{ es: "Ella ha viajado mucho.", el: "Εκείνη έχει ταξιδέψει πολύ." }],
        },
        {
          textEl: "Το χρησιμοποιούμε για εμπειρίες που έχουμε ζήσει, χωρίς να λέμε πότε ακριβώς έγιναν. Στις ερωτήσεις βάζουμε alguna vez, στις απαντήσεις μετράμε πόσες φορές.",
          examples: [
            { es: "¿Has estado alguna vez en Italia?", el: "Έχεις πάει ποτέ στην Ιταλία;" },
            { es: "Sí, dos veces. / No, nunca.", el: "Ναι, δύο φορές. / Όχι, ποτέ." },
          ],
        },
        {
          textEl: "Στην άρνηση χρειάζεται πάντα αρνητική λέξη πριν από το ρήμα: nunca ή no. Όπως και στα ελληνικά, η διπλή άρνηση είναι σωστή.",
          examples: [
            { es: "Nunca he estado en Perú.", el: "Δεν έχω πάει ποτέ στο Περού." },
            { es: "No he estado nunca en Perú.", el: "Δεν έχω πάει ποτέ στο Περού." },
          ],
        },
        {
          textEl: "Στα αυτοπαθή ρήματα η αντωνυμία μπαίνει μπροστά από το haber. Ποτέ ανάμεσα στο haber και στο participio.",
          examples: [
            { es: "Marta se ha levantado muy temprano.", el: "Η Marta έχει σηκωθεί πολύ νωρίς." },
            { es: "Nunca me he acostado tan tarde.", el: "Δεν έχω πάει ποτέ για ύπνο τόσο αργά." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας του haber + participio",
          headers: ["", "haber", "+ participio"],
          rows: [
            ["yo", "he", "estado, tenido, vivido"],
            ["tú / vos", "has", "estado, tenido, vivido"],
            ["él / ella / usted", "ha", "estado, tenido, vivido"],
            ["nosotros / nosotras", "hemos", "estado, tenido, vivido"],
            ["vosotros / vosotras", "habéis", "estado, tenido, vivido"],
            ["ellos / ellas / ustedes", "han", "estado, tenido, vivido"],
          ],
        },
        {
          titleEl: "Αυτοπαθή ρήματα (π.χ. levantarse, vestirse)",
          headers: ["", "Αντωνυμία", "haber", "+ participio"],
          rows: [
            ["yo", "me", "he", "levantado, vestido"],
            ["tú / vos", "te", "has", "levantado, vestido"],
            ["él / ella / usted", "se", "ha", "levantado, vestido"],
            ["nosotros / nosotras", "nos", "hemos", "levantado, vestido"],
            ["vosotros / vosotras", "os", "habéis", "levantado, vestido"],
            ["ellos / ellas / ustedes", "se", "han", "levantado, vestido"],
          ],
        },
        {
          titleEl: "Πόσες φορές;",
          headers: ["Ισπανικά", "Ελληνικά"],
          rows: [
            ["alguna vez", "ποτέ (στις ερωτήσεις)"],
            ["nunca", "ποτέ (στην άρνηση)"],
            ["una vez", "μία φορά"],
            ["dos / tres / cuatro veces", "δύο / τρεις / τέσσερις φορές"],
            ["un par de veces", "δυο φορές, μερικές φορές"],
            ["varias veces", "αρκετές φορές"],
            ["muchas veces", "πολλές φορές"],
            ["más de una vez", "περισσότερες από μία φορές"],
          ],
        },
      ],
      tipsEl: [
        "Μην πεις «tengo estado» ή «soy estado». Το pretérito perfecto γίνεται ΠΑΝΤΑ με haber.",
        "Το h δεν προφέρεται: he = «ε», has = «ας», ha = «α», hemos = «έμος». Το ha (έχει) δεν είναι το a (πρόθεση).",
        "Τα alguna vez (ερώτηση) και nunca (άρνηση) αντιστοιχούν και τα δύο στο ελληνικό «ποτέ». Μην τα μπερδεύεις: «¿Has estado alguna vez…?» αλλά «Nunca he estado…».",
        "Για να πεις ότι έχεις πάει κάπου χρησιμοποίησε estar en: «He estado en Roma».",
        "Αν λες συγκεκριμένη, ολοκληρωμένη στιγμή (ayer, en 2019, el año pasado) χρησιμοποιείται άλλος χρόνος, που θα μάθεις αργότερα.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ viajado por Italia.", hintEl: "Έχω ταξιδέψει στην Ιταλία.", answer: "he" },
        { type: "cloze", id: "d2", textEs: "Tú ___ estado en Madrid.", hintEl: "Έχεις πάει στη Μαδρίτη.", answer: "has" },
        { type: "cloze", id: "d3", textEs: "Ella ___ vivido en Londres.", hintEl: "Εκείνη έχει ζήσει στο Λονδίνο.", answer: "ha" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ comido paella.", hintEl: "Έχουμε φάει παέγια.", answer: "hemos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ hablado con Ana.", hintEl: "Έχετε μιλήσει με την Ana.", answer: "habéis", explainEl: "Στο vosotros ο τόνος γράφεται: habéis." },
        { type: "cloze", id: "d6", textEs: "Mis amigos ___ estudiado español.", hintEl: "Οι φίλοι μου έχουν σπουδάσει ισπανικά.", answer: "han" },
        { type: "choice", id: "d7", promptEs: "Nunca ___ estado en Japón.", promptEl: "Δεν έχω πάει ποτέ στην Ιαπωνία.", options: ["he", "tengo", "soy", "hay"], answer: "he", explainEl: "Το pretérito perfecto γίνεται πάντα με haber." },
        { type: "choice", id: "d8", promptEs: "¿Has estado ___ vez en América Latina?", promptEl: "Έχεις πάει ποτέ στη Λατινική Αμερική;", options: ["alguna", "ninguna", "nunca", "varias"], answer: "alguna", explainEl: "Στις ερωτήσεις το «ποτέ» είναι alguna vez." },
        { type: "choice", id: "d9", promptEs: "No he estado en Perú ___.", promptEl: "Δεν έχω πάει ποτέ στο Περού.", options: ["nunca", "siempre", "alguna", "también"], answer: "nunca", explainEl: "Η διπλή άρνηση (no… nunca) είναι σωστή στα ισπανικά." },
        { type: "choice", id: "d10", promptEs: "Elena ___ ha duchado antes de salir.", promptEl: "Η Elena έχει κάνει ντους πριν βγει.", options: ["se", "me", "te", "nos"], answer: "se", explainEl: "Το ducharse είναι αυτοπαθές: η αντωνυμία μπαίνει πριν από το haber." },
        { type: "choice", id: "d11", promptEs: "Hoy ___ he levantado a las seis.", promptEl: "Σήμερα έχω σηκωθεί στις έξι.", options: ["me", "se", "te", "nos"], answer: "me", explainEl: "Το «εγώ» των αυτοπαθών ρημάτων χρησιμοποιεί me: me he levantado." },
        { type: "order", id: "d12", promptEl: "Έχουμε ταξιδέψει σε όλη την Ισπανία.", solution: ["Hemos", "viajado", "por", "toda", "España."], distractors: ["Tenemos", "viajamos"] },
        { type: "order", id: "d13", promptEl: "Δεν έχω πάει ποτέ στο Περού.", solution: ["No", "he", "estado", "nunca", "en", "Perú."], alternatives: [["Nunca", "he", "estado", "en", "Perú."]], distractors: ["tengo", "ido"] },
        { type: "order", id: "d14", promptEl: "Η Ana έχει πάει δύο φορές στη Γαλλία.", solution: ["Ana", "ha", "estado", "dos", "veces", "en", "Francia."], alternatives: [["Ana", "ha", "estado", "en", "Francia", "dos", "veces."]], distractors: ["he", "estada"] },
      ],
    },
    {
      id: "participio",
      titleEs: "El participio",
      titleEl: "Το participio",
      introEl:
        "Το participio είναι το δεύτερο μισό του pretérito perfecto. Οι περισσότεροι τύποι είναι κανονικοί και λίγα ρήματα είναι ανώμαλα.",
      rules: [
        {
          textEl: "Στα ρήματα σε -ar παίρνουμε τη ρίζα και προσθέτουμε -ado.",
          examples: [
            { es: "hablar → hablado, estudiar → estudiado", el: "έχω μιλήσει, έχω σπουδάσει" },
          ],
        },
        {
          textEl: "Στα ρήματα σε -er και -ir προσθέτουμε -ido.",
          examples: [{ es: "comer → comido, vivir → vivido, salir → salido", el: "έχω φάει, έχω ζήσει, έχω βγει" }],
        },
        {
          textEl: "Επτά βασικά ρήματα έχουν ανώμαλο participio. Τελειώνουν σε -to (ή -cho) και τα μαθαίνεις απέξω: hecho, dicho, escrito, puesto, abierto, vuelto, roto.",
          examples: [
            { es: "He hecho la tarea.", el: "Έχω κάνει την εργασία." },
            { es: "Ana ha escrito un mensaje.", el: "Η Ana έχει γράψει ένα μήνυμα." },
          ],
        },
        {
          textEl: "Όταν το participio είναι επίθετο (με ser ή estar), συμφωνεί σε γένος και αριθμό. Με το haber μένει ίδιο.",
          examples: [
            { es: "La puerta está abierta.", el: "Η πόρτα είναι ανοιχτή." },
            { es: "Las tiendas están cerradas.", el: "Τα μαγαζιά είναι κλειστά." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Participio: -ado, -ido και ανώμαλα",
          headers: ["Ρήματα σε -ar: -ado", "Ρήματα σε -er / -ir: -ido", "Ανώμαλα"],
          rows: [
            ["viajado", "conocido", "hecho (hacer)"],
            ["estudiado", "tenido", "dicho (decir)"],
            ["enamorado", "leído", "escrito (escribir)"],
            ["gustado", "comido", "puesto (poner)"],
            ["hablado", "salido", "abierto (abrir)"],
            ["estado", "vivido", "vuelto (volver)"],
            ["escuchado", "ido", "roto (romper)"],
          ],
        },
      ],
      tipsEl: [
        "Το ir κάνει ido (he ido) και το ser κάνει sido (he sido). Το estar κάνει estado (he estado).",
        "Όταν η ρίζα τελειώνει σε φωνήεν, το -ido παίρνει τόνο στο í: leer → leído, creer → creído, traer → traído.",
        "Στα ελληνικά το «έχω γράψει» δεν αλλάζει, αλλά το «είναι γραμμένο» αλλάζει σε γένος. Το ίδιο ισχύει στα ισπανικά: «ha escrito», αλλά «está escrita».",
        "Τα σύνθετα ρήματα ακολουθούν το βασικό: describir → descrito, deshacer → deshecho, devolver → devuelto.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Participio de hablar:", promptEl: "Το participio του hablar:", options: ["hablado", "hablido", "hablato", "hablar"], answer: "hablado" },
        { type: "choice", id: "d2", promptEs: "Participio de comer:", options: ["comido", "comado", "comiendo", "comió"], answer: "comido" },
        { type: "choice", id: "d3", promptEs: "Participio de vivir:", options: ["vivido", "vivado", "viviendo", "vivió"], answer: "vivido" },
        { type: "choice", id: "d4", promptEs: "Participio de hacer:", options: ["hecho", "hacido", "hacho", "hizo"], answer: "hecho", explainEl: "Το hacer είναι ανώμαλο: hecho." },
        { type: "choice", id: "d5", promptEs: "Participio de escribir:", options: ["escrito", "escribido", "escribado", "escribió"], answer: "escrito" },
        { type: "choice", id: "d6", promptEs: "Participio de abrir:", options: ["abierto", "abrido", "abriedo", "abrito"], answer: "abierto" },
        { type: "cloze", id: "d7", textEs: "He ___ la mesa para la cena.", hintEl: "Έχω στρώσει το τραπέζι για το δείπνο.", answer: "puesto", explainEl: "Το poner είναι ανώμαλο: puesto." },
        { type: "cloze", id: "d8", textEs: "Hoy no hemos ___ a casa.", hintEl: "Σήμερα δεν έχουμε γυρίσει σπίτι.", answer: "vuelto" },
        { type: "cloze", id: "d9", textEs: "Los niños han ___ un vaso.", hintEl: "Τα παιδιά έχουν σπάσει ένα ποτήρι.", answer: "roto" },
        { type: "cloze", id: "d10", textEs: "¿Has ___ el libro?", hintEl: "Έχεις διαβάσει το βιβλίο;", answer: "leído", explainEl: "Το leer κάνει leído, με τόνο στο í." },
        { type: "cloze", id: "d11", textEs: "Hemos ___ a Madrid muchas veces.", hintEl: "Έχουμε πάει στη Μαδρίτη πολλές φορές.", answer: "ido" },
        { type: "order", id: "d12", promptEl: "Έχω γράψει δύο μηνύματα.", solution: ["He", "escrito", "dos", "mensajes."], distractors: ["escribido", "has"] },
        { type: "order", id: "d13", promptEl: "Η πόρτα είναι ανοιχτή.", solution: ["La", "puerta", "está", "abierta."], distractors: ["abierto", "es"], explainEl: "Εδώ το participio είναι επίθετο και συμφωνεί με το puerta (θηλυκό): abierta." },
      ],
    },
    {
      id: "saber-poder",
      titleEs: "Los verbos saber y poder",
      titleEl: "Τα ρήματα saber και poder",
      introEl:
        "Στα ελληνικά το «μπορώ» καλύπτει και το «ξέρω να» και το «έχω τη δυνατότητα». Τα ισπανικά τα ξεχωρίζουν: saber για ό,τι έχεις μάθει και poder για ό,τι σου επιτρέπουν οι συνθήκες.",
      rules: [
        {
          textEl: "Το saber + απαρέμφατο δείχνει δεξιότητα που έχεις μάθει: «ξέρω να». Με γλώσσα σημαίνει «μιλώ».",
          examples: [
            { es: "Sé nadar y cocinar.", el: "Ξέρω να κολυμπώ και να μαγειρεύω." },
            { es: "Mi vecina sabe ruso.", el: "Η γειτόνισσά μου ξέρει ρωσικά." },
          ],
        },
        {
          textEl: "Το poder + απαρέμφατο δείχνει δυνατότητα ή αδυναμία λόγω σωματικών ή άλλων συνθηκών: έχω χρόνο, έχω άδεια, έχω τα γυαλιά μου.",
          examples: [
            { es: "Hoy no puedo cocinar: no tengo tiempo.", el: "Σήμερα δεν μπορώ να μαγειρέψω: δεν έχω χρόνο." },
            { es: "Puedo hablar ahora.", el: "Μπορώ να μιλήσω τώρα." },
          ],
        },
        {
          textEl: "Μπορείς να ξέρεις κάτι αλλά να μην μπορείς να το κάνεις εκείνη τη στιγμή.",
          examples: [{ es: "Sé conducir, pero hoy no puedo: no tengo coche.", el: "Ξέρω να οδηγώ, αλλά σήμερα δεν μπορώ: δεν έχω αυτοκίνητο." }],
        },
        {
          textEl: "Για να πεις πόσο καλά κάνει κάποιος κάτι χρησιμοποιούμε επιρρήματα. Το «nada» αντιστρέφει το νόημα, γι' αυτό «no… nada mal» σημαίνει «αρκετά καλά».",
          examples: [
            { es: "Canta muy bien.", el: "Τραγουδά πολύ καλά." },
            { es: "No cocina nada mal.", el: "Δεν μαγειρεύει καθόλου άσχημα (= μαγειρεύει αρκετά καλά)." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας + απαρέμφατο",
          headers: ["", "saber", "poder", "+ απαρέμφατο"],
          rows: [
            ["yo", "sé", "puedo", "cocinar"],
            ["tú / vos", "sabes / sabés", "puedes / podés", "conducir"],
            ["él / ella / usted", "sabe", "puede", "dibujar"],
            ["nosotros / nosotras", "sabemos", "podemos", "cocinar"],
            ["vosotros / vosotras", "sabéis", "podéis", "conducir"],
            ["ellos / ellas / ustedes", "saben", "pueden", "dibujar"],
          ],
        },
        {
          titleEl: "Πόσο καλά; Ισοδύναμοι τρόποι",
          headers: ["Θετικά", "Με άρνηση"],
          rows: [
            ["Conduce muy bien.", ""],
            ["Conduce bastante bien.", "No conduce nada mal."],
            ["Conduce bastante mal.", "No conduce muy bien."],
            ["Conduce muy mal.", "No conduce nada bien."],
            ["Conduce fatal.", ""],
          ],
        },
      ],
      tipsEl: [
        "Το sé (ξέρω) έχει τόνο. Το se (αυτοπαθής αντωνυμία) δεν έχει: «Sé nadar» αλλά «Se llama Ana».",
        "Το poder αλλάζει το o σε ue (puedo, puedes, puede, pueden), εκτός από τα nosotros και vosotros (podemos, podéis).",
        "Το «ξέρω κάποιον ή κάποια πόλη» δεν λέγεται saber αλλά conocer. Το saber δείχνει γνώση ή δεξιότητα που έχεις μάθει.",
        "Το bastante με bien ή mal σημαίνει «αρκετά»: bastante bien = αρκετά καλά, bastante mal = αρκετά άσχημα.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Yo ___ cocinar muy bien.", promptEl: "Ξέρω να μαγειρεύω πολύ καλά.", options: ["sé", "puedo", "sabo", "soy"], answer: "sé", explainEl: "Είναι δεξιότητα που έχεις μάθει, άρα saber." },
        { type: "choice", id: "d2", promptEs: "Hoy no ___ cocinar: no tengo cocina.", promptEl: "Σήμερα δεν μπορώ να μαγειρέψω: δεν έχω κουζίνα.", options: ["puedo", "sé", "sabo", "poda"], answer: "puedo", explainEl: "Η συνθήκη (δεν έχω κουζίνα) μου το αποτρέπει, άρα poder." },
        { type: "choice", id: "d3", promptEs: "¿___ conducir?", promptEl: "Ξέρεις να οδηγείς;", options: ["Sabes", "Puedes", "Eres", "Tienes"], answer: "Sabes" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ hablar tres idiomas.", hintEl: "Εμείς ξέρουμε να μιλάμε τρεις γλώσσες.", answer: "sabemos" },
        { type: "cloze", id: "d5", textEs: "Ellos no ___ tocar el piano.", hintEl: "Εκείνοι δεν ξέρουν να παίζουν πιάνο.", answer: "saben" },
        { type: "cloze", id: "d6", textEs: "Yo ___ hablar ahora: tengo tiempo.", hintEl: "Μπορώ να μιλήσω τώρα: έχω χρόνο.", answer: "puedo" },
        { type: "cloze", id: "d7", textEs: "Tú ___ venir a mi casa mañana.", hintEl: "Μπορείς να έρθεις στο σπίτι μου αύριο.", answer: "puedes" },
        { type: "cloze", id: "d8", textEs: "Vosotros ___ cocinar muy bien.", hintEl: "Εσείς ξέρετε να μαγειρεύετε πολύ καλά.", answer: "sabéis", explainEl: "Στο vosotros ο τόνος γράφεται: sabéis." },
        { type: "cloze", id: "d9", textEs: "Nosotros no ___ salir hoy: tenemos clase.", hintEl: "Σήμερα δεν μπορούμε να βγούμε: έχουμε μάθημα.", answer: "podemos", explainEl: "Στο nosotros το poder δεν αλλάζει ρίζα: podemos (όχι «puedemos»)." },
        { type: "cloze", id: "d10", textEs: "Conduce muy mal. = No conduce ___ bien.", hintEl: "Οδηγεί πολύ άσχημα. = Δεν οδηγεί καθόλου καλά.", answer: "nada" },
        { type: "choice", id: "d11", promptEs: "No cocina nada mal.", promptEl: "Τι σημαίνει;", options: ["Μαγειρεύει αρκετά καλά.", "Μαγειρεύει πολύ άσχημα.", "Δεν μαγειρεύει καθόλου.", "Μαγειρεύει φανταστικά."], answer: "Μαγειρεύει αρκετά καλά.", explainEl: "Το «nada» ανατρέπει το «mal»: δεν είναι καθόλου άσχημα, άρα αρκετά καλά." },
        { type: "order", id: "d12", promptEl: "Σήμερα δεν μπορώ να οδηγήσω.", solution: ["Hoy", "no", "puedo", "conducir."], alternatives: [["No", "puedo", "conducir", "hoy."]], distractors: ["sé", "poder"] },
        { type: "order", id: "d13", promptEl: "Η Marta ξέρει να παίζει κιθάρα.", solution: ["Marta", "sabe", "tocar", "la", "guitarra."], distractors: ["puede", "toca"] },
      ],
    },
    {
      id: "genero-adjetivos-caracter",
      titleEs: "El género de los adjetivos de carácter",
      titleEl: "Το γένος των επιθέτων χαρακτήρα",
      introEl:
        "Τα επίθετα στα ισπανικά έχουν δύο γένη, αρσενικό και θηλυκό (όχι ουδέτερο). Πολλά αλλάζουν κατάληξη, αλλά ένα σημαντικό μέρος έχει την ίδια μορφή και για τα δύο.",
      rules: [
        {
          textEl: "Τα επίθετα σε -o γίνονται -a στο θηλυκό: organizado, organizada. Τα σε -or παίρνουν -a: emprendedor, emprendedora.",
          examples: [
            { es: "Pablo es organizado y Marta es organizada.", el: "Ο Pablo είναι οργανωμένος και η Marta είναι οργανωμένη." },
            { es: "Él es emprendedor y ella es emprendedora.", el: "Αυτός είναι επιχειρηματικός και αυτή είναι επιχειρηματική." },
          ],
        },
        {
          textEl: "Τα επίθετα σε -e, -ista και -al έχουν την ίδια μορφή για αρσενικό και θηλυκό. Αλλάζει μόνο το άρθρο ή το ουσιαστικό.",
          examples: [
            { es: "Pablo es inteligente y Marta es inteligente.", el: "Ο Pablo είναι έξυπνος και η Marta είναι έξυπνη." },
            { es: "El optimista y la optimista.", el: "Ο αισιόδοξος και η αισιόδοξη." },
          ],
        },
        {
          textEl: "Στον πληθυντικό προσθέτουμε -s μετά από φωνήεν και -es μετά από σύμφωνο: amables, optimistas, puntuales.",
          examples: [{ es: "Mis padres son muy puntuales y pacientes.", el: "Οι γονείς μου είναι πολύ συνεπείς και υπομονετικοί." }],
        },
      ],
      tables: [
        {
          titleEl: "Επίθετα με ίδια μορφή για αρσενικό και θηλυκό",
          headers: ["Σε -e", "Σε -ista", "Σε -al"],
          rows: [
            ["inteligente", "egoísta", "puntual"],
            ["paciente", "optimista", "especial"],
            ["responsable", "pesimista", "normal"],
            ["amable", "realista", "leal"],
          ],
        },
      ],
      tipsEl: [
        "Μην προσθέτεις -a στα επίθετα σε -e: «Ana es amable», όχι «amabla». Το ίδιο και στα -ista: «Ana es optimista».",
        "Στα ελληνικά τα επίθετα έχουν τρία γένη (καλός, καλή, καλό). Στα ισπανικά υπάρχουν μόνο δύο, αρσενικό και θηλυκό.",
        "Στα επίθετα σε -ista το γένος φαίνεται από το άρθρο: el optimista, la optimista.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Marta es muy ___.", promptEl: "Η Marta είναι πολύ έξυπνη.", options: ["inteligente", "inteligenta", "inteligento", "inteligentes"], answer: "inteligente", explainEl: "Τα επίθετα σε -e δεν αλλάζουν στο θηλυκό." },
        { type: "choice", id: "d2", promptEs: "Carlos es muy ___.", promptEl: "Ο Carlos είναι πολύ συνεπής.", options: ["puntual", "puntuala", "puntuales", "puntualo"], answer: "puntual" },
        { type: "choice", id: "d3", promptEs: "Mi madre es muy ___.", promptEl: "Η μητέρα μου είναι πολύ συμπαθητική.", options: ["simpática", "simpático", "simpatica", "simpáticas"], answer: "simpática" },
        { type: "choice", id: "d4", promptEs: "Mi tía es muy ___: siempre ayuda a todos.", promptEl: "Η θεία μου είναι πολύ γενναιόδωρη: βοηθά πάντα όλους.", options: ["generosa", "generoso", "generosas", "egoísta"], answer: "generosa" },
        { type: "choice", id: "d5", promptEs: "Ellos son muy ___.", promptEl: "Εκείνοι είναι πολύ υπεύθυνοι.", options: ["responsables", "responsable", "responsabla", "responsablas"], answer: "responsables", explainEl: "Στον πληθυντικό προσθέτουμε -s: responsables." },
        { type: "cloze", id: "d6", textEs: "Ana es ___ y piensa que todo va a salir bien.", hintEl: "Η Ana είναι αισιόδοξη και πιστεύει ότι όλα θα πάνε καλά.", answer: "optimista" },
        { type: "cloze", id: "d7", textEs: "Pedro y Luis son muy ___.", hintEl: "Ο Pedro και ο Luis είναι πολύ ευγενικοί.", answer: "amables" },
        { type: "cloze", id: "d8", textEs: "Mis hermanas son muy ___.", hintEl: "Οι αδερφές μου είναι πολύ οργανωμένες.", answer: "organizadas" },
        { type: "cloze", id: "d9", textEs: "Elena es muy ___: tiene muchas ideas nuevas.", hintEl: "Η Elena είναι πολύ δημιουργική: έχει πολλές καινούριες ιδέες.", answer: "creativa" },
        { type: "order", id: "d10", promptEl: "Η Laura είναι ευγενική και συνεπής.", solution: ["Laura", "es", "amable", "y", "puntual."], distractors: ["amabla", "puntuala"] },
        { type: "order", id: "d11", promptEl: "Οι γονείς μου είναι πολύ υπομονετικοί.", solution: ["Mis", "padres", "son", "muy", "pacientes."], distractors: ["paciente", "es"] },
        { type: "order", id: "d12", promptEl: "Ο Pablo είναι αισιόδοξος.", solution: ["Pablo", "es", "optimista."], distractors: ["optimisto", "son"] },
      ],
    },
  ],
};
