import type { UnitBase } from "@/types/content";

export const unit6: UnitBase = {
  id: 6,
  titleEs: "Día a día",
  titleEl: "Μέρα με τη μέρα",
  goalEl: "Μιλάω για τις καθημερινές συνήθειές μου: λέω τι κάνω και πόσο συχνά, και ρωτάω και λέω την ώρα.",
  color: "#008781",
  pages: { start: 84, end: 97, lexico: 92, gramatica: 93, masEjercicios: { start: 176, end: 182 } },
  communicativeEl: [
    "Μιλάω για συνήθειες και καθημερινές δραστηριότητες",
    "Εκφράζω συχνότητα (siempre, a veces, nunca)",
    "Ρωτάω και λέω την ώρα",
    "Λέω τις ημέρες της εβδομάδας και τα μέρη της ημέρας",
    "Περιγράφω τη σειρά των ενεργειών (primero, después, luego)",
  ],
  verbIds: ["levantarse", "acostarse", "vestirse", "ducharse", "despertarse", "volver", "empezar", "dormir", "poder", "querer", "salir", "hacer", "poner", "pedir"],
  grammar: [
    {
      id: "la-hora",
      titleEs: "La hora",
      titleEl: "Η ώρα",
      introEl:
        "Για να ρωτήσεις ή να πεις την ώρα χρησιμοποιείς το θηλυκό άρθρο: la una, las dos, las tres. Το «και» αντιστοιχεί στο y και το «παρά» στο menos.",
      rules: [
        {
          textEl: "Ρωτάμε «¿Qué hora es?» (ή ευγενικά «¿Tiene hora?»). Απαντάμε με το ser: «Es la una» για τη μία και «Son las…» για όλες τις άλλες ώρες.",
          examples: [
            { es: "Es la una.", el: "Είναι μία." },
            { es: "Son las tres en punto.", el: "Είναι ακριβώς τρεις." },
          ],
        },
        {
          textEl: "Με λεπτά: y + λεπτά (και), y cuarto (και τέταρτο), y media (και μισή). Για «παρά» χρησιμοποιούμε menos: menos + λεπτά, menos cuarto.",
          examples: [
            { es: "Son las cinco y veinte.", el: "Είναι πέντε και είκοσι." },
            { es: "Son las nueve y cuarto.", el: "Είναι εννιά και τέταρτο." },
            { es: "Son las siete y media.", el: "Είναι εφτά και μισή." },
            { es: "Son las doce menos diez.", el: "Είναι δώδεκα παρά δέκα." },
            { es: "Son las once menos cuarto.", el: "Είναι έντεκα παρά τέταρτο." },
          ],
        },
        {
          textEl: "Για να ρωτήσεις πότε γίνεται κάτι: «¿A qué hora…?». Η απάντηση ξεκινά με a la / a las.",
          examples: [
            { es: "¿A qué hora empieza la clase? A las nueve.", el: "Τι ώρα ξεκινά το μάθημα; Στις εννιά." },
            { es: "¿A qué hora cenas? A las nueve y media.", el: "Τι ώρα τρως βραδινό; Στις εννιά και μισή." },
          ],
        },
        {
          textEl: "Αντί για πμ / μμ χρησιμοποιούμε de la mañana, del mediodía, de la tarde, de la noche.",
          examples: [
            { es: "A las ocho de la mañana.", el: "Στις οκτώ το πρωί." },
            { es: "A las diez de la noche.", el: "Στις δέκα το βράδυ." },
          ],
        },
        {
          textEl: "Στις δημόσιες υπηρεσίες (τρένα, αεροδρόμια) χρησιμοποιείται και το 24ωρο: las dieciocho treinta, las veintidós cuarenta y cinco.",
          examples: [{ es: "El tren sale a las diecinueve cuarenta.", el: "Το τρένο φεύγει στις 19:40." }],
        },
      ],
      tables: [
        {
          titleEl: "Πώς λέμε την ώρα",
          headers: ["Hora", "Se dice"],
          rows: [
            ["1:00", "Es la una."],
            ["3:00", "Son las tres en punto."],
            ["5:20", "Son las cinco y veinte."],
            ["9:15", "Son las nueve y cuarto."],
            ["7:30", "Son las siete y media."],
            ["11:45", "Son las doce menos cuarto."],
            ["12:45", "Es la una menos cuarto."],
          ],
        },
        {
          titleEl: "Με μέρος της ημέρας",
          headers: ["Hora", "Con parte del día"],
          rows: [
            ["6:00 (πρωί)", "las seis de la mañana"],
            ["12:00", "las doce del mediodía"],
            ["16:30", "las cuatro y media de la tarde"],
            ["22:00", "las diez de la noche"],
          ],
        },
      ],
      tipsEl: [
        "Λέμε «Es la una» (ενικός) αλλά «Son las dos» (πληθυντικός). Στα ελληνικά το ρήμα είναι πάντα «είναι», εδώ αλλάζει αριθμό.",
        "Το «παρά» των ελληνικών είναι menos: «δέκα παρά τέταρτο» = «las diez menos cuarto». Μετράς προς την επόμενη ώρα.",
        "Το «¿Tienes hora?» ρωτά «τι ώρα είναι;», όπως το ελληνικό «έχεις ώρα;». Αν θες να πεις «έχω χρόνο» λες «tengo tiempo».",
        "Δεν υπάρχει «y treinta» στην καθομιλουμένη. Λέμε y media.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿Qué hora es? (3:00)", options: ["Son las tres en punto.", "Es la tres.", "Son las tres y media.", "Son la tres."], answer: "Son las tres en punto." },
        { type: "choice", id: "d2", promptEs: "¿Qué hora es? (1:00)", options: ["Es la una.", "Son las una.", "Es las una.", "Son la una."], answer: "Es la una.", explainEl: "Για τη μία χρησιμοποιούμε ενικό: es la una." },
        { type: "choice", id: "d3", promptEs: "¿Qué hora es? (7:30)", options: ["Son las siete y media.", "Son las siete y cuarto.", "Son las siete menos media.", "Son las seis y media."], answer: "Son las siete y media." },
        { type: "choice", id: "d4", promptEs: "¿Qué hora es? (8:45)", options: ["Son las nueve menos cuarto.", "Son las ocho y cuarto.", "Son las nueve y cuarto.", "Son las ocho menos cuarto."], answer: "Son las nueve menos cuarto.", explainEl: "Στις 8:45 λείπει ένα τέταρτο για τις εννιά, άρα las nueve menos cuarto." },
        { type: "cloze", id: "d5", textEs: "Son las cinco ___ veinte.", hintEl: "Είναι πέντε και είκοσι.", answer: "y" },
        { type: "cloze", id: "d6", textEs: "Son las doce ___ cuarto.", hintEl: "Είναι δώδεκα παρά τέταρτο. (11:45)", answer: "menos" },
        { type: "cloze", id: "d7", textEs: "Es ___ una.", hintEl: "Είναι μία.", answer: "la" },
        { type: "cloze", id: "d8", textEs: "¿A ___ hora cenas?", hintEl: "Τι ώρα τρως βραδινό;", answer: "qué" },
        { type: "cloze", id: "d9", textEs: "Ceno a las diez de la ___.", hintEl: "Τρώω βραδινό στις δέκα το βράδυ.", answer: "noche" },
        { type: "cloze", id: "d10", textEs: "Mi clase empieza a las nueve de la ___.", hintEl: "Το μάθημά μου ξεκινά στις εννιά το πρωί.", answer: "mañana" },
        { type: "order", id: "d11", promptEl: "Είναι έξι και μισή.", solution: ["Son", "las", "seis", "y", "media."], distractors: ["Es", "menos"] },
        { type: "order", id: "d12", promptEl: "Τι ώρα φτάνει το τρένο;", solution: ["¿A", "qué", "hora", "llega", "el", "tren?"], distractors: ["son", "la"] },
      ],
    },
    {
      id: "secuenciar-acciones",
      titleEs: "Secuenciar acciones",
      titleEl: "Σειρά ενεργειών",
      introEl:
        "Για να πεις με ποια σειρά κάνεις πράγματα χρησιμοποιείς τα primero, después και luego. Για δύο ενέργειες που ακολουθούν η μία την άλλη χρησιμοποιείς antes de ή después de με απαρέμφατο.",
      rules: [
        {
          textEl: "Το primero (πρώτα) ξεκινά τη σειρά. Τα después (μετά) και luego (έπειτα) συνεχίζουν. Μετά από τη λέξη βάζουμε κόμμα.",
          examples: [{ es: "Primero me levanto, después desayuno y luego voy al trabajo.", el: "Πρώτα σηκώνομαι, μετά παίρνω πρωινό και έπειτα πάω στη δουλειά." }],
        },
        {
          textEl: "Antes de + απαρέμφατο σημαίνει «πριν (να κάνω κάτι)». Después de + απαρέμφατο σημαίνει «μετά (από το να κάνω κάτι)».",
          examples: [
            { es: "Me ducho antes de salir.", el: "Κάνω ντους πριν βγω." },
            { es: "Me ducho después de hacer deporte.", el: "Κάνω ντους αφού κάνω αθλήματα." },
          ],
        },
        {
          textEl: "Στα ελληνικά λέμε «πριν πάω» ή «αφού φάω» με υποτακτική. Στα ισπανικά, όταν το υποκείμενο είναι το ίδιο, μετά το antes de / después de μπαίνει απαρέμφατο.",
          examples: [{ es: "Después de cenar, hablo con mi familia.", el: "Μετά το βραδινό, μιλάω με την οικογένειά μου." }],
        },
        {
          textEl: "Με αυτοπαθές απαρέμφατο η αντωνυμία κολλάει στο τέλος και συμφωνεί με το υποκείμενο: antes de acostarme (εγώ), antes de acostarte (εσύ).",
          examples: [{ es: "Siempre me ducho antes de vestirme.", el: "Πάντα κάνω ντους πριν ντυθώ." }],
        },
      ],
      tables: [
        {
          titleEl: "Οι λέξεις της σειράς",
          headers: ["Palabra", "Significado", "Ejemplo"],
          rows: [
            ["primero", "πρώτα", "Primero desayuno."],
            ["después", "μετά", "Después voy al trabajo."],
            ["luego", "έπειτα", "Luego como en casa."],
            ["antes de + infinitivo", "πριν", "Antes de comer, hago deporte."],
            ["después de + infinitivo", "μετά από", "Después de cenar, hablo con mi madre."],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά το «πριν» συνήθως ακολουθείται από υποτακτική («πριν φύγω»). Στα ισπανικά: antes de + απαρέμφατο («antes de salir»).",
        "Το después χωρίς de είναι επίρρημα («μετά»). Με de ακολουθείται από απαρέμφατο ή ουσιαστικό: después de la clase, después de comer.",
        "Τα después και luego είναι συνήθως εναλλάξιμα.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ me levanto y después desayuno.", promptEl: "Πρώτα σηκώνομαι και μετά παίρνω πρωινό.", options: ["Primero", "Después", "Antes", "Luego"], answer: "Primero" },
        { type: "choice", id: "d2", promptEs: "Me ducho ___ desayunar.", promptEl: "Κάνω ντους πριν πάρω πρωινό.", options: ["antes de", "después de", "antes", "después"], answer: "antes de", explainEl: "Για το «πριν» + απαρέμφατο χρησιμοποιούμε antes de." },
        { type: "choice", id: "d3", promptEs: "Veo a mis amigos ___ salir del trabajo.", promptEl: "Βλέπω τους φίλους μου μετά τη δουλειά.", options: ["después de", "antes de", "luego", "primero"], answer: "después de" },
        { type: "cloze", id: "d4", textEs: "Primero desayuno y ___ voy al trabajo.", hintEl: "Πρώτα παίρνω πρωινό και μετά πάω στη δουλειά.", answer: "después", alternatives: ["luego"] },
        { type: "cloze", id: "d5", textEs: "Me lavo los dientes antes ___ acostarme.", hintEl: "Πλένω τα δόντια μου πριν κοιμηθώ.", answer: "de" },
        { type: "cloze", id: "d6", textEs: "Después de ___, hablo con mi familia.", hintEl: "Μετά το βραδινό, μιλάω με την οικογένειά μου.", answer: "cenar" },
        { type: "cloze", id: "d7", textEs: "Antes de ___ de casa, me visto.", hintEl: "Πριν βγω από το σπίτι, ντύνομαι.", answer: "salir" },
        { type: "cloze", id: "d8", textEs: "Me ducho antes de acostar___.", hintEl: "Κάνω ντους πριν κοιμηθώ.", answer: "me", explainEl: "Η αντωνυμία συμφωνεί με το υποκείμενο (yo), άρα acostarme." },
        { type: "order", id: "d9", promptEl: "Πρώτα παίρνω πρωινό και μετά πάω στη δουλειά.", solution: ["Primero", "desayuno", "y", "después", "voy", "al", "trabajo."], distractors: ["antes", "va"] },
        { type: "order", id: "d10", promptEl: "Κάνω ντους πριν δειπνήσω.", solution: ["Me", "ducho", "antes", "de", "cenar."], distractors: ["después", "cena"] },
        { type: "order", id: "d11", promptEl: "Μετά τα αθλήματα, γυρίζω σπίτι.", solution: ["Después", "de", "hacer", "deporte,", "vuelvo", "a", "casa."], distractors: ["antes", "hago"] },
      ],
    },
    {
      id: "verbos-pronominales",
      titleEs: "Los verbos pronominales",
      titleEl: "Τα αυτοπαθή (pronominales) ρήματα",
      introEl:
        "Τα pronominales ρήματα έχουν πάντα μαζί τους μία αντωνυμία: me, te, se, nos, os, se. Πολλά από αυτά αντιστοιχούν σε ελληνικά ρήματα σε -ομαι (levantarse = σηκώνομαι), όπως ήδη είδες στο llamarse.",
      rules: [
        {
          textEl: "Η αντωνυμία μπαίνει ΜΠΡΟΣΤΑ από το ρήμα και αλλάζει ανάλογα με το πρόσωπο. Το ρήμα κλίνεται κανονικά.",
          examples: [
            { es: "Me levanto a las siete.", el: "Σηκώνομαι στις επτά." },
            { es: "¿A qué hora te acuestas?", el: "Τι ώρα πας για ύπνο;" },
          ],
        },
        {
          textEl: "Στο απαρέμφατο η αντωνυμία γράφεται στο τέλος και συμφωνεί με το υποκείμενο: levantarme, levantarte, levantarse.",
          examples: [{ es: "Siempre me ducho antes de vestirme.", el: "Πάντα κάνω ντους πριν ντυθώ." }],
        },
        {
          textEl: "Στην άρνηση το no μπαίνει πριν από την αντωνυμία.",
          examples: [{ es: "No me levanto tarde los lunes.", el: "Δεν σηκώνομαι αργά τις Δευτέρες." }],
        },
        {
          textEl: "Άλλα pronominales ρήματα: despertarse (ξυπνάω), acostarse (πάω για ύπνο), vestirse (ντύνομαι), ducharse (κάνω ντους). Μερικά είναι και ανώμαλα, όπως το acostarse (o → ue) και το vestirse (e → i).",
          examples: [{ es: "Mis padres se despiertan a las seis.", el: "Οι γονείς μου ξυπνούν στις έξι." }],
        },
        {
          textEl: "Με μέρη του σώματος η αντωνυμία δείχνει ποιος κάνει την ενέργεια, και το μέρος παίρνει άρθρο και όχι κτητική: «me lavo los dientes».",
          examples: [{ es: "Me lavo los dientes por la noche.", el: "Πλένω τα δόντια μου το βράδυ." }],
        },
      ],
      tables: [
        {
          titleEl: "Levantarse (σηκώνομαι)",
          headers: ["", "levantarse"],
          rows: [
            ["yo", "me levanto"],
            ["tú, vos", "te levantas, te levantás"],
            ["él / ella / usted", "se levanta"],
            ["nosotros / nosotras", "nos levantamos"],
            ["vosotros / vosotras", "os levantáis"],
            ["ellos / ellas / ustedes", "se levantan"],
          ],
        },
      ],
      tipsEl: [
        "Μην ξεχνάς την αντωνυμία: «levanto» σημαίνει «σηκώνω κάτι» (levantar), ενώ «me levanto» σημαίνει «σηκώνομαι».",
        "Στα ελληνικά πολλά ρήματα της καθημερινότητας δεν είναι αυτοπαθή («ξυπνάω», «πλένω τα δόντια μου»). Στα ισπανικά είναι: despertarse, lavarse los dientes.",
        "Η αντωνυμία συμφωνεί πάντα με το υποκείμενο: (yo) me ducho, (tú) te duchas. Μην πεις «yo se ducha».",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ levanto a las siete.", hintEl: "Σηκώνομαι στις επτά.", answer: "me" },
        { type: "cloze", id: "d2", textEs: "Tú ___ acuestas muy tarde.", hintEl: "Πας για ύπνο πολύ αργά.", answer: "te" },
        { type: "cloze", id: "d3", textEs: "Ella ___ ducha por la mañana.", hintEl: "Εκείνη κάνει ντους το πρωί.", answer: "se" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ vestimos y salimos.", hintEl: "Ντυνόμαστε και βγαίνουμε.", answer: "nos" },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ levantáis tarde los domingos.", hintEl: "Εσείς σηκώνεστε αργά τις Κυριακές.", answer: "os" },
        { type: "cloze", id: "d6", textEs: "Mis padres ___ despiertan a las seis.", hintEl: "Οι γονείς μου ξυπνούν στις έξι.", answer: "se" },
        { type: "choice", id: "d7", promptEs: "Yo ___ antes de desayunar.", promptEl: "Κάνω ντους πριν πάρω πρωινό.", options: ["me ducho", "ducho", "se ducha", "te duchas"], answer: "me ducho" },
        { type: "choice", id: "d8", promptEs: "Siempre me lavo los dientes antes de ___.", promptEl: "Πάντα πλένω τα δόντια μου πριν κοιμηθώ.", options: ["acostarme", "acostarte", "acostarse", "acostar"], answer: "acostarme", explainEl: "Το υποκείμενο είναι yo, άρα η αντωνυμία στο απαρέμφατο είναι me." },
        { type: "choice", id: "d9", promptEs: "Ana siempre ___ tarde los sábados.", promptEl: "Η Ana πάντα σηκώνεται αργά τα Σάββατα.", options: ["se levanta", "me levanto", "te levantas", "levanta"], answer: "se levanta" },
        { type: "order", id: "d10", promptEl: "Εγώ σηκώνομαι στις επτά.", solution: ["Me", "levanto", "a", "las", "siete."], distractors: ["levantas", "te"] },
        { type: "order", id: "d11", promptEl: "Η Ana δεν κάνει ντους το πρωί.", solution: ["Ana", "no", "se", "ducha", "por", "la", "mañana."], distractors: ["me", "duchas"] },
        { type: "order", id: "d12", promptEl: "Πλένω τα δόντια μου πριν κοιμηθώ.", solution: ["Me", "lavo", "los", "dientes", "antes", "de", "acostarme."], distractors: ["mis", "acostar"] },
      ],
    },
    {
      id: "irregulares-o-ue-e-ie",
      titleEs: "Verbos irregulares en presente: o > ue y e > ie",
      titleEl: "Ανώμαλα ρήματα στον ενεστώτα: o > ue και e > ie",
      introEl:
        "Σε πολλά ρήματα (-ar, -er, -ir) το τελευταίο φωνήεν της ρίζας, αν είναι o ή e, αλλάζει σε ue ή ie. Η αλλαγή γίνεται στα yo, tú, él/ella/usted και ellos/ellas/ustedes, ΟΧΙ στα nosotros και vosotros. Σκέψου μια «μπότα» που περιβάλλει τα τέσσερα πρόσωπα.",
      rules: [
        {
          textEl: "o → ue: volver (vuelvo), dormir (duermo), acostarse (me acuesto), poder (puedo), almorzar (almuerzo).",
          examples: [
            { es: "Vuelvo a casa a las seis.", el: "Γυρίζω σπίτι στις έξι." },
            { es: "No puedo ir al gimnasio hoy.", el: "Δεν μπορώ να πάω στο γυμναστήριο σήμερα." },
          ],
        },
        {
          textEl: "e → ie: empezar (empiezo), preferir (prefiero), querer (quiero), despertarse (me despierto).",
          examples: [
            { es: "La clase empieza a las nueve.", el: "Το μάθημα ξεκινά στις εννιά." },
            { es: "Quiero un café.", el: "Θέλω έναν καφέ." },
          ],
        },
        {
          textEl: "Στα nosotros και vosotros η ρίζα μένει όπως στο απαρέμφατο: volvemos, volvéis, empezamos, empezáis.",
          examples: [{ es: "Empezamos a las nueve.", el: "Ξεκινάμε στις εννιά." }],
        },
        {
          textEl: "Οι καταλήξεις είναι κανονικές. Αλλάζει μόνο το φωνήεν της ρίζας, και ο κανόνας ισχύει και για τις τρεις συζυγίες (-ar, -er, -ir).",
        },
      ],
      tables: [
        {
          titleEl: "Volver (o > ue) και empezar (e > ie)",
          headers: ["", "volver", "empezar"],
          rows: [
            ["yo", "vuelvo", "empiezo"],
            ["tú, vos", "vuelves, volvés", "empiezas, empezás"],
            ["él / ella / usted", "vuelve", "empieza"],
            ["nosotros / nosotras", "volvemos", "empezamos"],
            ["vosotros / vosotras", "volvéis", "empezáis"],
            ["ellos / ellas / ustedes", "vuelven", "empiezan"],
          ],
        },
        {
          titleEl: "Άλλα ρήματα με την ίδια ανωμαλία",
          headers: ["o > ue", "e > ie"],
          rows: [
            ["dormir", "preferir"],
            ["acostarse", "querer"],
            ["poder", "despertarse"],
          ],
        },
      ],
      tipsEl: [
        "Το ue προφέρεται «ουε» σε μία συλλαβή (PUE-do) και το ie «ιε» (QUIE-ro).",
        "Μην πεις «volvo» ή «empezo». Οι σωστοί τύποι είναι vuelvo και empiezo.",
        "Τα puedo (μπορώ) και quiero (θέλω) τα χρησιμοποιείς συνέχεια, με απαρέμφατο: «Quiero comer», «Puedo ir».",
        "Δεν υπάρχει κανόνας για να καταλάβεις ποια ρήματα είναι ανώμαλα. Μαθαίνεις το ρήμα μαζί με την ανωμαλία του.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ a casa a las seis.", hintEl: "Γυρίζω σπίτι στις έξι. (volver)", answer: "vuelvo" },
        { type: "cloze", id: "d2", textEs: "Tú ___ ocho horas.", hintEl: "Κοιμάσαι οκτώ ώρες. (dormir)", answer: "duermes" },
        { type: "cloze", id: "d3", textEs: "Ana no ___ venir hoy.", hintEl: "Η Ana δεν μπορεί να έρθει σήμερα. (poder)", answer: "puede" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ a las nueve.", hintEl: "Ξεκινάμε στις εννιά. (empezar)", answer: "empezamos", explainEl: "Στα nosotros η ρίζα δεν αλλάζει: empezamos." },
        { type: "cloze", id: "d5", textEs: "Vosotros ___ a casa tarde.", hintEl: "Εσείς γυρίζετε αργά σπίτι. (volver)", answer: "volvéis" },
        { type: "cloze", id: "d6", textEs: "Ellos ___ comer en un restaurante.", hintEl: "Εκείνοι θέλουν να φάνε σε ένα εστιατόριο. (querer)", answer: "quieren" },
        { type: "cloze", id: "d7", textEs: "Yo me ___ a las once.", hintEl: "Πάω για ύπνο στις έντεκα. (acostarse)", answer: "acuesto" },
        { type: "cloze", id: "d8", textEs: "La clase ___ a las ocho y media.", hintEl: "Το μάθημα ξεκινά στις οκτώ και μισή. (empezar)", answer: "empieza" },
        { type: "choice", id: "d9", promptEs: "Nosotros no ___ ir al cine hoy.", promptEl: "Δεν μπορούμε να πάμε σινεμά σήμερα.", options: ["podemos", "puedemos", "pueden", "puedes"], answer: "podemos", explainEl: "Στα nosotros η ρίζα δεν αλλάζει: podemos." },
        { type: "choice", id: "d10", promptEs: "Mi hermano ___ mucho los domingos.", promptEl: "Ο αδερφός μου κοιμάται πολύ τις Κυριακές.", options: ["duerme", "dorme", "dormimos", "duermo"], answer: "duerme" },
        { type: "order", id: "d11", promptEl: "Δεν μπορώ να έρθω αύριο.", solution: ["No", "puedo", "venir", "mañana."], distractors: ["podo", "quiero"] },
        { type: "order", id: "d12", promptEl: "Η Ana ξυπνάει στις επτά.", solution: ["Ana", "se", "despierta", "a", "las", "siete."], distractors: ["me", "despertamos"] },
      ],
    },
    {
      id: "irregulares-e-i-g",
      titleEs: "Verbos irregulares en presente: e > i y primera persona con g",
      titleEl: "Ανώμαλα ρήματα στον ενεστώτα: e > i και α΄ πρόσωπο με g",
      introEl:
        "Άλλα ρήματα σε -ir (vestirse, pedir, servir) αλλάζουν το e της ρίζας σε i στα ίδια τέσσερα πρόσωπα. Και μια ομάδα ρημάτων (salir, hacer, poner) είναι ανώμαλη ΜΟΝΟ στο yo, που παίρνει g.",
      rules: [
        {
          textEl: "e → i: vestirse (me visto), pedir (pido), servir (sirvo). Αλλάζει στα yo, tú, él/ella/usted και ellos/ellas/ustedes. Τα nosotros και vosotros μένουν όπως στο απαρέμφατο: nos vestimos, os vestís.",
          examples: [
            { es: "Me visto y salgo de casa.", el: "Ντύνομαι και βγαίνω από το σπίτι." },
            { es: "En el restaurante pido un café.", el: "Στο εστιατόριο παραγγέλνω έναν καφέ." },
          ],
        },
        {
          textEl: "Το salir έχει ανώμαλο μόνο το yo: salgo. Όλα τα άλλα πρόσωπα είναι κανονικά.",
          examples: [
            { es: "Salgo del trabajo a las seis.", el: "Σχολάω στις έξι." },
            { es: "¿A qué hora sales?", el: "Τι ώρα βγαίνεις;" },
          ],
        },
        {
          textEl: "Το ίδιο ισχύει για το hacer (hago) και το poner (pongo): μόνο το yo παίρνει g.",
          examples: [
            { es: "Hago deporte los lunes.", el: "Κάνω αθλήματα τις Δευτέρες." },
            { es: "Pongo la mesa para cenar.", el: "Στρώνω το τραπέζι για να φάμε." },
          ],
        },
        {
          textEl: "Το pedir σημαίνει «ζητάω, παραγγέλνω», ενώ το «ρωτάω» είναι preguntar. Το poner σημαίνει «βάζω»: poner la mesa.",
          examples: [{ es: "Pido un favor a mi hermano.", el: "Ζητάω μια χάρη από τον αδερφό μου." }],
        },
      ],
      tables: [
        {
          titleEl: "Vestirse (e > i) και salir (yo con g)",
          headers: ["", "vestirse", "salir"],
          rows: [
            ["yo", "me visto", "salgo"],
            ["tú, vos", "te vistes, te vestís", "sales, salís"],
            ["él / ella / usted", "se viste", "sale"],
            ["nosotros / nosotras", "nos vestimos", "salimos"],
            ["vosotros / vosotras", "os vestís", "salís"],
            ["ellos / ellas / ustedes", "se visten", "salen"],
          ],
        },
        {
          titleEl: "Hacer και poner",
          headers: ["", "hacer", "poner"],
          rows: [
            ["yo", "hago", "pongo"],
            ["tú, vos", "haces", "pones"],
            ["él / ella / usted", "hace", "pone"],
            ["nosotros / nosotras", "hacemos", "ponemos"],
            ["vosotros / vosotras", "hacéis", "ponéis"],
            ["ellos / ellas / ustedes", "hacen", "ponen"],
          ],
        },
        {
          titleEl: "Άλλα ρήματα με e > i",
          headers: ["e > i"],
          rows: [["pedir"], ["servir"]],
        },
      ],
      tipsEl: [
        "Στα ελληνικά δεν υπάρχει κάτι αντίστοιχο, οπότε μάθε τους τύπους του yo απέξω: salgo, hago, pongo.",
        "Μην πεις «salo», «hazo» ή «pono». Στο yo μπαίνει g: salgo, hago, pongo.",
        "Το hacer σημαίνει «κάνω / φτιάχνω» και εμφανίζεται σε πολλές καθημερινές εκφράσεις: hacer la cama, hacer deporte.",
        "Το pedir (ζητάω, παραγγέλνω) δεν είναι το «ρωτάω». Για το «ρωτάω μια ερώτηση» λέμε preguntar.",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo me ___ y salgo de casa.", hintEl: "Ντύνομαι και βγαίνω από το σπίτι. (vestirse)", answer: "visto" },
        { type: "cloze", id: "d2", textEs: "Tú te ___ muy elegante.", hintEl: "Ντύνεσαι πολύ κομψά. (vestirse)", answer: "vistes" },
        { type: "cloze", id: "d3", textEs: "Nosotros nos ___ en cinco minutos.", hintEl: "Ντυνόμαστε σε πέντε λεπτά. (vestirse)", answer: "vestimos", explainEl: "Στα nosotros η ρίζα δεν αλλάζει: vestimos." },
        { type: "cloze", id: "d4", textEs: "Yo ___ del trabajo a las seis.", hintEl: "Σχολάω στις έξι. (salir)", answer: "salgo" },
        { type: "cloze", id: "d5", textEs: "¿A qué hora ___ tú de casa?", hintEl: "Τι ώρα βγαίνεις από το σπίτι; (salir)", answer: "sales", alternatives: ["salís"] },
        { type: "cloze", id: "d6", textEs: "Nosotros ___ a las ocho.", hintEl: "Βγαίνουμε στις οκτώ. (salir)", answer: "salimos" },
        { type: "cloze", id: "d7", textEs: "Yo ___ deporte los martes.", hintEl: "Κάνω αθλήματα τις Τρίτες. (hacer)", answer: "hago" },
        { type: "cloze", id: "d8", textEs: "Yo ___ la mesa para cenar.", hintEl: "Στρώνω το τραπέζι για το βραδινό. (poner)", answer: "pongo" },
        { type: "cloze", id: "d9", textEs: "En el restaurante yo ___ un café.", hintEl: "Στο εστιατόριο παραγγέλνω έναν καφέ. (pedir)", answer: "pido" },
        { type: "choice", id: "d10", promptEs: "¿Qué ___ (tú) los domingos?", promptEl: "Τι κάνεις τις Κυριακές;", options: ["haces", "hago", "hace", "hacéis"], answer: "haces" },
        { type: "order", id: "d11", promptEl: "Βγαίνω στις εφτά.", solution: ["Salgo", "a", "las", "siete."], distractors: ["Salo", "sale"] },
        { type: "order", id: "d12", promptEl: "Δεν κάνω αθλήματα τις Κυριακές.", solution: ["No", "hago", "deporte", "los", "domingos."], distractors: ["hace", "hacemos"] },
      ],
    },
    {
      id: "dias-y-frecuencia",
      titleEs: "Los días de la semana y la frecuencia",
      titleEl: "Οι ημέρες της εβδομάδας και η συχνότητα",
      introEl:
        "Με τις ημέρες της εβδομάδας χρησιμοποιούμε άρθρο: el για μια συγκεκριμένη μέρα, los για κάτι που συμβαίνει τακτικά. Για να πεις πόσο συχνά κάνεις κάτι έχεις τις λέξεις siempre, normalmente, a veces, nunca και άλλες.",
      rules: [
        {
          textEl: "Για μια συγκεκριμένη μέρα λέμε el + ημέρα.",
          examples: [{ es: "El viernes voy al cine.", el: "Αυτή την Παρασκευή πάω σινεμά." }],
        },
        {
          textEl: "Για κάτι που κάνουμε κάθε εβδομάδα λέμε los + ημέρα. Από τη Δευτέρα ως την Παρασκευή η λέξη μένει ίδια (los lunes). Στο sábado και το domingo προστίθεται -s (los sábados).",
          examples: [
            { es: "Los viernes voy al cine.", el: "Κάθε Παρασκευή πάω σινεμά." },
            { es: "Los sábados duermo mucho.", el: "Τα Σάββατα κοιμάμαι πολύ." },
          ],
        },
        {
          textEl: "Όταν λέμε ποια μέρα είναι, δεν βάζουμε άρθρο.",
          examples: [{ es: "Hoy es lunes. Mañana es martes.", el: "Σήμερα είναι Δευτέρα. Αύριο είναι Τρίτη." }],
        },
        {
          textEl: "Με τα μέρη της ημέρας: por la mañana, al mediodía, por la tarde, por la noche.",
          examples: [{ es: "Por la noche ceno en casa.", el: "Το βράδυ τρώω στο σπίτι." }],
        },
        {
          textEl: "Συχνότητα, από το πιο συχνό ως το λιγότερο: siempre, casi siempre, normalmente, a menudo, a veces, casi nunca, nunca. Επίσης: todos los días, todas las tardes, una vez a la semana, dos veces al mes.",
          examples: [
            { es: "Normalmente como con mi familia.", el: "Συνήθως τρώω με την οικογένειά μου." },
            { es: "Hago deporte dos veces a la semana.", el: "Κάνω αθλήματα δύο φορές την εβδομάδα." },
          ],
        },
        {
          textEl: "Το nunca μπορεί να μπει πριν από το ρήμα ή μετά, με no πριν από το ρήμα (όπως στα ελληνικά «δεν πάω ποτέ»).",
          examples: [
            { es: "Nunca voy al gimnasio.", el: "Ποτέ δεν πάω στο γυμναστήριο." },
            { es: "No voy nunca al gimnasio.", el: "Δεν πάω ποτέ στο γυμναστήριο." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Κλίμακα συχνότητας",
          headers: ["Frecuencia", "Significado"],
          rows: [
            ["siempre", "πάντα"],
            ["casi siempre", "σχεδόν πάντα"],
            ["normalmente", "συνήθως"],
            ["a menudo", "συχνά"],
            ["a veces", "μερικές φορές"],
            ["casi nunca", "σχεδόν ποτέ"],
            ["nunca", "ποτέ"],
          ],
        },
        {
          titleEl: "El και los με τις ημέρες",
          headers: ["Un día concreto", "Un hábito"],
          rows: [
            ["el lunes (αυτή τη Δευτέρα)", "los lunes (κάθε Δευτέρα)"],
            ["el sábado (αυτό το Σάββατο)", "los sábados (κάθε Σάββατο)"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά συχνά λέμε «τη Δευτέρα» και για τις δύο περιπτώσεις (ενώ για τη συνήθεια πιο σωστά «τις Δευτέρες»). Στα ισπανικά διαφέρουν: el lunes (μία φορά) ≠ los lunes (κάθε εβδομάδα).",
        "Οι ημέρες δεν γράφονται με κεφαλαίο: lunes, martes.",
        "Το «a veces» (μερικές φορές) είναι άλλο από το «a menudo» (συχνά). Μην τα μπερδεύεις.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ lunes tengo clase de español.", promptEl: "Κάθε Δευτέρα έχω μάθημα ισπανικών.", options: ["El", "Los", "La", "Las"], answer: "Los" },
        { type: "choice", id: "d2", promptEs: "___ martes tengo una fiesta.", promptEl: "Αυτή την Τρίτη έχω ένα πάρτι.", options: ["El", "Los", "La", "Un"], answer: "El" },
        { type: "choice", id: "d3", promptEs: "¿Qué día es hoy? ___ jueves.", promptEl: "Τι μέρα είναι σήμερα; Είναι Πέμπτη.", options: ["Hoy es", "Hoy es el", "Hoy son", "Hoy es los"], answer: "Hoy es", explainEl: "Όταν λέμε ποια μέρα είναι, δεν βάζουμε άρθρο." },
        { type: "choice", id: "d4", promptEs: "Voy al gimnasio ___ a la semana como mínimo.", promptEl: "Πάω στο γυμναστήριο τουλάχιστον τρεις φορές την εβδομάδα.", options: ["tres veces", "tres vez", "tres días", "tres siempre"], answer: "tres veces" },
        { type: "cloze", id: "d5", textEs: "Ceno en casa casi ___ los días.", hintEl: "Τρώω βραδινό στο σπίτι σχεδόν κάθε μέρα.", answer: "todos" },
        { type: "cloze", id: "d6", textEs: "Yo ___ voy al gimnasio, no me gusta.", hintEl: "Εγώ δεν πάω ποτέ στο γυμναστήριο, δεν μου αρέσει.", answer: "nunca" },
        { type: "cloze", id: "d7", textEs: "Mi madre va al mercado una ___ a la semana.", hintEl: "Η μητέρα μου πάει στην αγορά μία φορά την εβδομάδα.", answer: "vez" },
        { type: "cloze", id: "d8", textEs: "Por la ___ voy a la universidad y por la tarde trabajo.", hintEl: "Το πρωί πάω στο πανεπιστήμιο και το απόγευμα δουλεύω.", answer: "mañana" },
        { type: "cloze", id: "d9", textEs: "Voy a la playa a ___ en verano.", hintEl: "Πάω στην παραλία μερικές φορές το καλοκαίρι.", answer: "veces" },
        { type: "order", id: "d10", promptEl: "Τα Σάββατα κοιμάμαι πολύ.", solution: ["Los", "sábados", "duermo", "mucho."], distractors: ["El", "duerme"] },
        { type: "order", id: "d11", promptEl: "Κάνω αθλήματα δύο φορές την εβδομάδα.", solution: ["Hago", "deporte", "dos", "veces", "a", "la", "semana."], distractors: ["hace", "vez"] },
        { type: "order", id: "d12", promptEl: "Συνήθως τρώω με την οικογένειά μου.", solution: ["Normalmente", "como", "con", "mi", "familia."], distractors: ["comes", "mis"] },
      ],
    },
  ],
};
