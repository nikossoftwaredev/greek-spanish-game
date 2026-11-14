/**
 * A small phrasebook of everyday and classroom phrases, so «Ρώτα τη Λόλα» answers the most common
 * questions instantly, offline and correctly (no machine translation). Written for this app.
 * Accents and punctuation are ignored when matching, so list only genuinely different wordings.
 */
export interface Phrase {
  /** Ways a learner may write it in Greek. */
  el: string[];
  /** The Spanish, one entry per variant (masculine and feminine, informal and formal...). */
  es: string[];
  /** A short Greek note on usage or gender. */
  noteEl?: string;
}

const GENDER = "Το αρσενικό είναι για άντρα που μιλά, το θηλυκό για γυναίκα.";

export const PHRASEBOOK: Phrase[] = [
  // ---- how I am
  { el: ["είμαι έτοιμος", "είμαι έτοιμη", "έτοιμος είμαι", "είμαι έτοιμος/η"], es: ["Estoy listo.", "Estoy lista."], noteEl: `Με το estar λέμε μια κατάσταση της στιγμής. ${GENDER}` },
  { el: ["είμαι κουρασμένος", "είμαι κουρασμένη", "κουράστηκα"], es: ["Estoy cansado.", "Estoy cansada."], noteEl: GENDER },
  { el: ["πεινάω", "πεινάω πολύ", "είμαι πεινασμένος"], es: ["Tengo hambre."], noteEl: "Στα ισπανικά λέμε «έχω πείνα»: tener hambre." },
  { el: ["διψάω", "διψάω πολύ"], es: ["Tengo sed."], noteEl: "Όπως η πείνα, λέμε «έχω δίψα»: tener sed." },
  { el: ["κρυώνω", "κρυώνω πολύ"], es: ["Tengo frío."], noteEl: "Για τον άνθρωπο: tener frío. Για τον καιρό: hacer frío." },
  { el: ["ζεσταίνομαι", "ζεσταίνομαι πολύ"], es: ["Tengo calor."], noteEl: "Για τον άνθρωπο: tener calor. Για τον καιρό: hacer calor." },
  { el: ["κάνει κρύο"], es: ["Hace frío."] },
  { el: ["κάνει ζέστη"], es: ["Hace calor."] },
  { el: ["νυστάζω", "έχω νύστα"], es: ["Tengo sueño."] },
  { el: ["φοβάμαι", "έχω φόβο"], es: ["Tengo miedo."] },
  { el: ["βιάζομαι", "βιάζομαι πολύ", "βιάζομαι λίγο"], es: ["Tengo prisa."] },
  { el: ["είμαι χαρούμενος", "είμαι χαρούμενη", "είμαι ευτυχισμένος", "είμαι ευτυχισμένη"], es: ["Estoy contento.", "Estoy contenta.", "Estoy feliz."], noteEl: "Το feliz δεν αλλάζει με το φύλο." },
  { el: ["είμαι λυπημένος", "είμαι λυπημένη", "είμαι στεναχωρημένος", "είμαι στεναχωρημένη"], es: ["Estoy triste."], noteEl: "Το triste δεν αλλάζει με το φύλο." },
  { el: ["είμαι θυμωμένος", "είμαι θυμωμένη", "είμαι νευριασμένος", "είμαι νευριασμένη"], es: ["Estoy enfadado.", "Estoy enfadada."], noteEl: GENDER },
  { el: ["βαριέμαι", "είμαι βαριεστημένος", "είμαι βαριεστημένη"], es: ["Estoy aburrido.", "Estoy aburrida."], noteEl: GENDER },
  { el: ["είμαι καλά", "είμαι μια χαρά", "είμαι μια χαρά"], es: ["Estoy bien."] },
  { el: ["δεν είμαι καλά"], es: ["No estoy bien."] },
  { el: ["είμαι άρρωστος", "είμαι άρρωστη", "αρρώστησα"], es: ["Estoy enfermo.", "Estoy enferma."], noteEl: GENDER },
  { el: ["έχεις δίκιο"], es: ["Tienes razón."] },
  { el: ["έχω δίκιο"], es: ["Tengo razón."] },
  { el: ["έχω μια ερώτηση", "έχω μια απορία", "έχω ερώτηση"], es: ["Tengo una pregunta.", "Tengo una duda."], noteEl: "Το duda είναι η απορία, η αμφιβολία." },
  { el: ["έχω ένα πρόβλημα", "έχω πρόβλημα"], es: ["Tengo un problema."] },
  { el: ["δεν έχω χρόνο"], es: ["No tengo tiempo."] },

  // ---- in class
  { el: ["δεν καταλαβαίνω"], es: ["No entiendo."] },
  { el: ["κατάλαβα", "τώρα κατάλαβα", "το κατάλαβα"], es: ["Ya entiendo.", "Ya lo he entendido."] },
  { el: ["δεν ξέρω"], es: ["No sé."], noteEl: "Το «ξέρω» είναι το saber: yo sé. Προσοχή στον τόνο, το se χωρίς τόνο είναι άλλη λέξη." },
  { el: ["το ξέχασα", "ξέχασα"], es: ["Lo he olvidado.", "Se me ha olvidado."], noteEl: "Το «se me ha olvidado» είναι πολύ συνηθισμένο: «μου ξέφυγε»." },
  { el: ["δεν άκουσα", "δεν άκουσα καλά"], es: ["No he oído bien."] },
  { el: ["μπορείτε να το επαναλάβετε", "μπορείς να το επαναλάβεις", "ξαναπές το", "ξαναπείτε το", "μπορείτε να το ξαναπείτε"], es: ["¿Puede repetirlo, por favor?", "¿Puedes repetirlo, por favor?"], noteEl: "Στη δασκάλα λέμε usted (puede). Στον φίλο λέμε tú (puedes)." },
  { el: ["πιο αργά παρακαλώ", "πιο αργά", "μιλήστε πιο αργά", "μπορείτε να μιλήσετε πιο αργά"], es: ["Más despacio, por favor.", "¿Puede hablar más despacio, por favor?"] },
  { el: ["μιλήστε πιο δυνατά", "πιο δυνατά παρακαλώ", "μπορείτε να μιλήσετε πιο δυνατά"], es: ["¿Puede hablar más alto, por favor?"] },
  { el: ["πώς λέγεται στα ισπανικά", "πώς το λέμε στα ισπανικά", "πώς το λένε στα ισπανικά"], es: ["¿Cómo se dice en español?"] },
  { el: ["πώς γράφεται", "πώς γράφεται αυτό"], es: ["¿Cómo se escribe?"] },
  { el: ["πώς προφέρεται", "πώς προφέρεται αυτό"], es: ["¿Cómo se pronuncia?"] },
  { el: ["τι σημαίνει", "τι σημαίνει αυτό"], es: ["¿Qué significa?"] },
  { el: ["τι σημαίνει αυτή η λέξη"], es: ["¿Qué significa esta palabra?"] },
  { el: ["μπορώ να πάω στην τουαλέτα", "μπορώ να πάω τουαλέτα", "μπορώ να βγω έξω"], es: ["¿Puedo ir al baño?"], noteEl: "Στην Ισπανία λένε baño ή servicios για την τουαλέτα." },
  { el: ["μπορώ να κάνω μια ερώτηση", "μπορώ να ρωτήσω κάτι"], es: ["¿Puedo hacer una pregunta?", "¿Puedo preguntar algo?"] },
  { el: ["μπορώ να μπω", "μπορώ να περάσω μέσα"], es: ["¿Puedo pasar?", "¿Puedo entrar?"] },
  { el: ["μπορείτε να με βοηθήσετε", "μπορείς να με βοηθήσεις", "βοηθήστε με", "βοήθησέ με"], es: ["¿Puede ayudarme?", "¿Puedes ayudarme?"], noteEl: "Με usted: puede. Με tú: puedes." },
  { el: ["έκανα τις ασκήσεις", "έκανα την εργασία", "έκανα τα μαθήματα"], es: ["He hecho los ejercicios.", "He hecho los deberes."], noteEl: "Los deberes είναι οι εργασίες για το σπίτι." },
  { el: ["δεν έκανα την εργασία", "δεν έκανα τις ασκήσεις"], es: ["No he hecho los deberes.", "No he hecho los ejercicios."] },
  { el: ["ποια είναι η εργασία", "τι εργασία έχουμε", "τι έχουμε για αύριο"], es: ["¿Cuáles son los deberes?", "¿Qué deberes tenemos?"] },
  { el: ["σε ποια σελίδα είμαστε", "ποια σελίδα"], es: ["¿En qué página estamos?", "¿Qué página es?"] },
  { el: ["ανοίξτε το βιβλίο", "άνοιξε το βιβλίο"], es: ["Abrid el libro.", "Abra el libro.", "Abre el libro."], noteEl: "Η δασκάλα λέει συνήθως abrid (σε όλους εσάς). Το abra είναι ευγενική προστακτική." },
  { el: ["συγγνώμη που άργησα", "συγγνώμη για την καθυστέρηση", "άργησα"], es: ["Perdón por llegar tarde.", "Siento llegar tarde."] },

  // ---- hello, thanks, sorry
  { el: ["καλημέρα"], es: ["Buenos días."] },
  { el: ["καλησπέρα", "καλό απόγευμα"], es: ["Buenas tardes.", "Buenas noches."], noteEl: "Το «buenas tardes» το λέμε ως το σούρουπο, μετά «buenas noches»." },
  { el: ["καληνύχτα", "καλό βράδυ"], es: ["Buenas noches."] },
  { el: ["γεια", "γεια σου", "γεια σας", "χαίρετε"], es: ["Hola."] },
  { el: ["αντίο"], es: ["Adiós."] },
  { el: ["τα λέμε", "τα λέμε σύντομα"], es: ["Hasta luego.", "Hasta pronto."] },
  { el: ["τα λέμε αύριο", "θα τα πούμε αύριο"], es: ["Hasta mañana."] },
  { el: ["ευχαριστώ"], es: ["Gracias."] },
  { el: ["ευχαριστώ πολύ", "σε ευχαριστώ πολύ"], es: ["Muchas gracias."] },
  { el: ["παρακαλώ", "παρακαλώ (απάντηση στο ευχαριστώ)"], es: ["De nada.", "Por favor."], noteEl: "Όταν απαντάς στο «ευχαριστώ»: de nada. Όταν ζητάς κάτι ευγενικά: por favor." },
  { el: ["συγγνώμη", "συγνώμη", "με συγχωρείς", "με συγχωρείτε"], es: ["Perdón.", "Lo siento.", "Disculpe."], noteEl: "Perdón: όταν σπρώχνεις κάποιον ή θες να περάσεις. Lo siento: λυπάμαι. Disculpe: ευγενικά, σε άγνωστο." },
  { el: ["δεν πειράζει", "τίποτα"], es: ["No pasa nada."] },
  { el: ["κανένα πρόβλημα", "κανένα θέμα"], es: ["No hay problema.", "Sin problema."] },
  { el: ["φυσικά", "βεβαίως", "βέβαια"], es: ["Claro.", "Por supuesto."] },
  { el: ["ακριβώς"], es: ["Exacto.", "Eso es."] },
  { el: ["μπράβο"], es: ["¡Muy bien!", "¡Bravo!"] },
  { el: ["καλή τύχη"], es: ["¡Buena suerte!"] },
  { el: ["καλή όρεξη"], es: ["¡Buen provecho!"] },
  { el: ["στην υγειά μας", "γεια μας", "στην υγειά σου"], es: ["¡Salud!"] },
  { el: ["καλό ταξίδι"], es: ["¡Buen viaje!"] },
  { el: ["καλό σαββατοκύριακο"], es: ["¡Buen fin de semana!"] },
  { el: ["χρόνια πολλά", "χρόνια πολλά για τα γενέθλια"], es: ["¡Feliz cumpleaños!", "¡Felicidades!"], noteEl: "Feliz cumpleaños για τα γενέθλια, felicidades για κάθε επιτυχία ή γιορτή." },

  // ---- people
  { el: ["τι κάνεις", "πώς είσαι", "τι κάνετε", "πώς είστε"], es: ["¿Qué tal?", "¿Cómo estás?", "¿Cómo está usted?"], noteEl: "Με usted (ευγενικά): ¿cómo está usted?" },
  { el: ["είμαι καλά ευχαριστώ", "καλά ευχαριστώ"], es: ["Estoy bien, gracias."] },
  { el: ["και εσύ", "κι εσύ", "και εσείς"], es: ["¿Y tú?", "¿Y usted?"] },
  { el: ["χαίρομαι που σε γνωρίζω", "χάρηκα", "χάρηκα για τη γνωριμία", "χαίρομαι για τη γνωριμία"], es: ["Mucho gusto.", "Encantado.", "Encantada."], noteEl: "Το encantado το λέει άντρας, το encantada γυναίκα." },
  { el: ["πώς σε λένε", "πώς σας λένε", "πώς σε λένε εσένα"], es: ["¿Cómo te llamas?", "¿Cómo se llama usted?"] },
  { el: ["με λένε", "με λένε Νίκο", "το όνομά μου είναι"], es: ["Me llamo ...", "Mi nombre es ..."], noteEl: "Βάλε το όνομά σου στη θέση των τριών τελειών: Me llamo Ana." },
  { el: ["πόσων χρονών είσαι", "πόσο χρονών είσαι", "πόσων ετών είσαι"], es: ["¿Cuántos años tienes?"] },
  { el: ["είμαι ... χρονών", "είμαι είκοσι χρονών"], es: ["Tengo ... años."], noteEl: "Στα ισπανικά «έχω χρόνια»: Tengo veinte años. Όχι soy." },
  { el: ["από πού είσαι", "από πού είστε"], es: ["¿De dónde eres?", "¿De dónde es usted?"] },
  { el: ["είμαι από την Ελλάδα"], es: ["Soy de Grecia."] },
  { el: ["είμαι Έλληνας", "είμαι Ελληνίδα"], es: ["Soy griego.", "Soy griega."], noteEl: GENDER },
  { el: ["πού μένεις", "πού μένετε"], es: ["¿Dónde vives?", "¿Dónde vive usted?"] },
  { el: ["μιλάς ισπανικά", "μιλάτε ισπανικά"], es: ["¿Hablas español?", "¿Habla usted español?"] },
  { el: ["μιλάς αγγλικά", "μιλάτε αγγλικά"], es: ["¿Hablas inglés?", "¿Habla usted inglés?"] },
  { el: ["μιλάω λίγα ισπανικά", "μιλώ λίγα ισπανικά", "μιλάω λίγο ισπανικά"], es: ["Hablo un poco de español."] },
  { el: ["δεν μιλάω ισπανικά", "δεν μιλώ ισπανικά"], es: ["No hablo español."] },
  { el: ["μαθαίνω ισπανικά"], es: ["Estoy aprendiendo español.", "Aprendo español."], noteEl: "Το «estoy aprendiendo» δείχνει ότι το κάνεις αυτή την περίοδο." },
  { el: ["θέλω να μάθω ισπανικά"], es: ["Quiero aprender español."] },
  { el: ["σ' αγαπώ", "σε αγαπώ", "σε λατρεύω"], es: ["Te quiero.", "Te amo."], noteEl: "Το «te quiero» είναι το συνηθισμένο. Το «te amo» είναι πιο δυνατό και σπάνιο." },

  // ---- out and about
  { el: ["πού είναι η τουαλέτα", "πού είναι η τουαλέτα παρακαλώ"], es: ["¿Dónde está el baño?", "¿Dónde están los servicios?"] },
  { el: ["πόσο κάνει", "πόσο κοστίζει"], es: ["¿Cuánto cuesta?", "¿Cuánto es?"] },
  { el: ["θέλω έναν καφέ"], es: ["Quiero un café.", "Quisiera un café."], noteEl: "Πιο ευγενικά: quisiera ή me gustaría." },
  { el: ["θα ήθελα έναν καφέ"], es: ["Quisiera un café.", "Me gustaría un café."] },
  { el: ["τον λογαριασμό παρακαλώ", "τον λογαριασμό"], es: ["La cuenta, por favor."] },
  { el: ["μου αρέσει"], es: ["Me gusta."] },
  { el: ["μου αρέσει πολύ"], es: ["Me gusta mucho."] },
  { el: ["δεν μου αρέσει"], es: ["No me gusta."] },
  { el: ["τι ώρα είναι"], es: ["¿Qué hora es?"] },
  { el: ["είναι αργά"], es: ["Es tarde."] },
  { el: ["είναι νωρίς"], es: ["Es temprano.", "Es pronto."] },
];
