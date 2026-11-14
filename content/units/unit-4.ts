import type { Unit, VocabItem } from "@/types/content";

/** Numerals from 100 as the book's Léxico page lists them. `el` is the digit as the book prints it. */
const NUMERALS: [string, string, string?][] = [
  ["100", "cien", "Μόνο του ή πριν από ουσιαστικό: cien euros. Μαζί με άλλον αριθμό γίνεται ciento: ciento uno."],
  ["101", "ciento uno / una", "Πριν από ουσιαστικό το uno γίνεται un: ciento un euros."],
  ["102", "ciento dos"],
  ["200", "doscientos/as", "Οι εκατοντάδες συμφωνούν με το ουσιαστικό: doscientos euros, doscientas personas."],
  ["300", "trescientos/as"],
  ["400", "cuatrocientos/as"],
  ["500", "quinientos/as", "Ανώμαλο: δεν λέμε «cincocientos»."],
  ["600", "seiscientos/as"],
  ["700", "setecientos/as", "Ανώμαλο: δεν λέμε «sietecientos»."],
  ["800", "ochocientos/as"],
  ["900", "novecientos/as", "Ανώμαλο: δεν λέμε «nuevecientos»."],
  ["1000", "mil", "Δεν παίρνει un και δεν γίνεται πληθυντικός: mil euros, dos mil euros."],
  ["2000", "dos mil"],
  ["10 000", "diez mil"],
  ["20 000", "veinte mil"],
  ["100 000", "cien mil"],
  ["200 000", "doscientos/as mil", "Το doscientos/as συμφωνεί με το ουσιαστικό που ακολουθεί: doscientas mil personas."],
  ["1 000 000", "un millón", "Μετά το millón μπαίνει de: un millón de euros."],
  ["2 000 000", "dos millones", "Στον πληθυντικό χάνει τον τόνο: millones."],
  ["1 000 000 000", "mil millones", "Το «δισεκατομμύριο» λέγεται mil millones (χίλια εκατομμύρια)."],
  ["3 453 276", "tres millones cuatrocientos/as cincuenta y tres mil doscientos/as setenta y seis", "Το y μπαίνει μόνο ανάμεσα στις δεκάδες και τις μονάδες: cincuenta y tres, setenta y seis."],
];

const numeralItems: VocabItem[] = NUMERALS.map(([n, es, noteEl]) => ({
  id: `u4-num-${n.replace(/ /g, "")}`,
  es,
  el: n,
  pos: "number",
  ...(noteEl ? { noteEl } : {}),
}));

export const unit4: Unit = {
  id: 4,
  titleEs: "¿Cuál prefieres?",
  titleEl: "Ποιο προτιμάς;",
  goalEl: "Κάνω αγορές σε ένα μαγαζί: αναγνωρίζω αντικείμενα, ρωτάω τιμές, περιγράφω ρούχα και λέω ποιο προτιμώ.",
  color: "#99c317",
  pages: { start: 56, end: 69, lexico: 64, gramatica: 65 },
  communicativeEl: [
    "Αναγνωρίζω και δείχνω αντικείμενα (este, esta, estos, estas)",
    "Εκφράζω ανάγκη με το tener que + απαρέμφατο",
    "Κάνω αγορές σε μαγαζιά: ρωτάω για προϊόντα και τιμές",
    "Μιλάω για προτιμήσεις: ¿Cuál prefieres?",
    "Περιγράφω ρούχα, χρώματα και τιμές",
  ],
  verbIds: ["tener", "preferir", "ir"],
  vocab: [
    {
      id: "colores",
      page: 64,
      section: "Léxico",
      titleEs: "Colores",
      titleEl: "Χρώματα",
      emoji: "🎨",
      items: [
        { id: "u4-blanco", es: "blanco/a/os/as", el: "άσπρο / λευκό", pos: "adjective", emoji: "⚪", accept: ["blanco"], noteEl: "Τα χρώματα σε -o έχουν τέσσερις μορφές: blanco, blanca, blancos, blancas.", example: { es: "Mi camisa blanca es nueva.", el: "Το άσπρο μου πουκάμισο είναι καινούριο." } },
        { id: "u4-amarillo", es: "amarillo/a/os/as", el: "κίτρινο", pos: "adjective", emoji: "🟡", accept: ["amarillo"], example: { es: "Tengo un bolso amarillo.", el: "Έχω μια κίτρινη τσάντα." } },
        { id: "u4-rojo", es: "rojo/a/os/as", el: "κόκκινο", pos: "adjective", emoji: "🔴", accept: ["rojo"], noteEl: "Η προφορά του j: σαν ένα έντονο «χ» από το λαρύγγι.", example: { es: "Mi chaqueta es roja.", el: "Το μπουφάν μου είναι κόκκινο." } },
        { id: "u4-negro", es: "negro/a/os/as", el: "μαύρο", pos: "adjective", emoji: "⚫", accept: ["negro"], example: { es: "Los zapatos negros son muy elegantes.", el: "Τα μαύρα παπούτσια είναι πολύ κομψά." } },
        { id: "u4-naranja", es: "naranja/s", el: "πορτοκαλί", pos: "adjective", emoji: "🟠", noteEl: "Μία μορφή για αρσενικό και θηλυκό. Η naranja είναι και το φρούτο (πορτοκάλι).", example: { es: "Ana lleva una camiseta naranja.", el: "Η Ana φοράει ένα πορτοκαλί μπλουζάκι." } },
        { id: "u4-rosa", es: "rosa/s", el: "ροζ", pos: "adjective", emoji: "🌸", noteEl: "Η rosa είναι και το τριαντάφυλλο.", example: { es: "Tiene una falda rosa.", el: "Έχει μια ροζ φούστα." } },
        { id: "u4-lila", es: "lila/s", el: "λιλά / μοβ", pos: "adjective", emoji: "🟣", example: { es: "Mi bufanda es lila.", el: "Το κασκόλ μου είναι λιλά." } },
        { id: "u4-verde", es: "verde/s", el: "πράσινο", pos: "adjective", emoji: "🟢", example: { es: "Los pantalones verdes son de mi hermano.", el: "Το πράσινο παντελόνι είναι του αδερφού μου." } },
        { id: "u4-azul", es: "azul/es", el: "μπλε / γαλάζιο", pos: "adjective", emoji: "🔵", noteEl: "Πληθυντικός: azules.", example: { es: "Necesito un abrigo azul.", el: "Χρειάζομαι ένα μπλε παλτό." } },
        { id: "u4-gris", es: "gris/es", el: "γκρι", pos: "adjective", emoji: "🩶", noteEl: "Πληθυντικός: grises.", example: { es: "Llevo un jersey gris.", el: "Φοράω ένα γκρι πουλόβερ." } },
        { id: "u4-marron", es: "marrón/ones", el: "καφέ", pos: "adjective", emoji: "🟤", noteEl: "Στον πληθυντικό χάνει τον τόνο: marrones. Έχει την ίδια μορφή για αρσενικό και θηλυκό.", example: { es: "Las botas marrones son caras.", el: "Οι καφέ μπότες είναι ακριβές." } },
        { id: "u4-beis", es: "beis", el: "μπεζ", pos: "adjective", noteEl: "Αναλλοίωτο: unos pantalones beis.", example: { es: "Quiero unos pantalones beis.", el: "Θέλω ένα μπεζ παντελόνι." } },
        { id: "u4-de-que-color-es", es: "¿De qué color es el jersey?", el: "Τι χρώμα είναι το πουλόβερ;", pos: "phrase", noteEl: "Η ερώτηση για το χρώμα: ¿De qué color es…? Η απάντηση είναι απλώς το χρώμα: Amarillo.", example: { es: "¿De qué color es tu bolso? Es azul.", el: "Τι χρώμα είναι η τσάντα σου; Είναι μπλε." } },
      ],
    },
    {
      id: "numerales",
      page: 64,
      section: "Léxico",
      titleEs: "Numerales",
      titleEl: "Αριθμητικά από το 100",
      emoji: "🔢",
      items: numeralItems,
    },
    {
      id: "llevar-llevarse",
      page: 64,
      section: "Léxico",
      titleEs: "Llevar / llevarse",
      titleEl: "Llevar και llevarse",
      emoji: "🛍️",
      items: [
        { id: "u4-llevar-consigo", es: "llevar", el: "έχω μαζί μου / κουβαλάω", pos: "verb", emoji: "🎒", noteEl: "Σημασία 1: έχω κάτι μαζί μου. Στο επόμενο στοιχείο θα δεις τη σημασία «φοράω».", example: { es: "¿Llevas el móvil?", el: "Έχεις μαζί σου το κινητό;" } },
        { id: "u4-llevar-vestir", es: "llevar", el: "φοράω", pos: "verb", emoji: "👕", noteEl: "Σημασία 2: φοράω ρούχα ή αξεσουάρ.", example: { es: "Hoy llevo una camisa blanca.", el: "Σήμερα φοράω ένα άσπρο πουκάμισο." } },
        { id: "u4-llevarse", es: "llevarse", el: "παίρνω (διαλέγω και αγοράζω)", pos: "verb", emoji: "🛒", noteEl: "Αυτοπαθές: me llevo, te llevas. Το λέμε όταν διαλέγουμε ένα αντικείμενο ανάμεσα σε πολλά, π.χ. σε ένα μαγαζί.", example: { es: "Me llevo estas botas.", el: "Παίρνω αυτές τις μπότες." } },
      ],
    },
    {
      id: "combinaciones-ir",
      page: 64,
      section: "Léxico",
      titleEs: "Combinaciones con el verbo ir",
      titleEl: "Εκφράσεις με το ρήμα ir",
      emoji: "🚶",
      items: [
        { id: "u4-ir-de-compras", es: "ir de compras", el: "πάω για ψώνια", pos: "phrase", emoji: "🛍️", noteEl: "Με compras και viaje το ir συνδέεται με de, χωρίς άρθρο.", example: { es: "El sábado voy de compras con mi madre.", el: "Το Σάββατο πάω για ψώνια με τη μητέρα μου." } },
        { id: "u4-ir-de-viaje", es: "ir de viaje", el: "πάω ταξίδι", pos: "phrase", emoji: "🧳", example: { es: "Mis padres van de viaje a Italia.", el: "Οι γονείς μου πάνε ταξίδι στην Ιταλία." } },
        { id: "u4-ir-al-gimnasio", es: "ir al gimnasio", el: "πάω στο γυμναστήριο", pos: "phrase", emoji: "🏋️", noteEl: "a + el γίνεται al: ir al gimnasio, ir al mercado.", example: { es: "Voy al gimnasio con mi hermano.", el: "Πάω στο γυμναστήριο με τον αδερφό μου." } },
        { id: "u4-ir-al-extranjero", es: "ir al extranjero", el: "πάω στο εξωτερικό", pos: "phrase", emoji: "✈️", example: { es: "En verano vamos al extranjero.", el: "Το καλοκαίρι πάμε στο εξωτερικό." } },
        { id: "u4-ir-al-mercado", es: "ir al mercado", el: "πάω στην αγορά / στη λαϊκή", pos: "phrase", emoji: "🧺", example: { es: "Voy al mercado con mi hermana.", el: "Πάω στη λαϊκή με την αδερφή μου." } },
        { id: "u4-ir-a-la-playa", es: "ir a la playa", el: "πάω στην παραλία", pos: "phrase", emoji: "🏖️", example: { es: "¿Vais a la playa hoy?", el: "Πάτε στην παραλία σήμερα;" } },
        { id: "u4-ir-a-la-universidad", es: "ir a la universidad", el: "πάω στο πανεπιστήμιο", pos: "phrase", emoji: "🏛️", example: { es: "Mi hermano va a la universidad en autobús.", el: "Ο αδερφός μου πάει στο πανεπιστήμιο με λεωφορείο." } },
        { id: "u4-ir-a-un-hotel", es: "ir a un hotel", el: "πάω σε ένα ξενοδοχείο", pos: "phrase", emoji: "🏨", example: { es: "Esta noche vamos a un hotel en Madrid.", el: "Απόψε πάμε σε ένα ξενοδοχείο στη Μαδρίτη." } },
        { id: "u4-ir-a-un-camping", es: "ir a un cámping", el: "πάω σε ένα κάμπινγκ", pos: "phrase", emoji: "⛺", noteEl: "Η λέξη cámping έχει τόνο στο á. Πληθυντικός: cámpines (και cámpings στην καθομιλουμένη).", example: { es: "En agosto vamos a un cámping.", el: "Τον Αύγουστο πάμε σε ένα κάμπινγκ." } },
        { id: "u4-ir-a-una-tienda", es: "ir a una tienda", el: "πάω σε ένα μαγαζί", pos: "phrase", emoji: "🏪", example: { es: "Voy a una tienda de ropa.", el: "Πάω σε ένα κατάστημα ρούχων." } },
      ],
    },
    {
      id: "ropa-y-accesorios",
      page: 64,
      section: "Léxico",
      titleEs: "Ropa y accesorios",
      titleEl: "Ρούχα και αξεσουάρ",
      emoji: "👚",
      items: [
        { id: "u4-jersey", es: "jersey", el: "πουλόβερ", pos: "noun", gender: "m", emoji: "🧶", noteEl: "Έτσι λέγεται στην Ισπανία. Στη Λατινική Αμερική: suéter. Πληθυντικός: jerséis.", example: { es: "Hace frío, llevo un jersey.", el: "Κάνει κρύο, φοράω ένα πουλόβερ." } },
        { id: "u4-bolso", es: "bolso", el: "τσάντα", pos: "noun", gender: "m", emoji: "👜", noteEl: "Αρσενικό, ενώ η ελληνική λέξη είναι θηλυκό: el bolso.", example: { es: "Mi bolso es negro.", el: "Η τσάντα μου είναι μαύρη." } },
        { id: "u4-vaqueros", es: "vaqueros", el: "τζιν (παντελόνι)", pos: "noun", emoji: "👖", noteEl: "Συνήθως πληθυντικός (αρσενικό): unos vaqueros. Ενικός: un vaquero.", example: { es: "Tengo unos vaqueros azules.", el: "Έχω ένα μπλε τζιν." } },
        { id: "u4-zapatillas-deportivas", es: "zapatillas deportivas", el: "αθλητικά παπούτσια", pos: "noun", emoji: "👟", noteEl: "Συνήθως πληθυντικός (θηλυκό): unas zapatillas deportivas. Οι zapatillas μόνες τους σημαίνουν και «παντόφλες».", example: { es: "Voy al gimnasio con unas zapatillas deportivas.", el: "Πάω στο γυμναστήριο με αθλητικά παπούτσια." } },
        { id: "u4-camiseta", es: "camiseta", el: "μπλουζάκι (κοντομάνικο)", pos: "noun", gender: "f", emoji: "👕", noteEl: "Μην τη μπερδεύεις με την camisa (πουκάμισο).", example: { es: "Esta camiseta es blanca.", el: "Αυτό το μπλουζάκι είναι άσπρο." } },
        { id: "u4-pulsera", es: "pulsera", el: "βραχιόλι", pos: "noun", gender: "f", emoji: "📿", example: { es: "Tiene una pulsera verde.", el: "Έχει ένα πράσινο βραχιόλι." } },
        { id: "u4-pantalones", es: "pantalones", el: "παντελόνι", pos: "noun", emoji: "👖", noteEl: "Στα ισπανικά είναι πληθυντικός (αρσενικό): unos pantalones. Στα ελληνικά λέμε «ένα παντελόνι» στον ενικό.", example: { es: "Los pantalones son grises.", el: "Το παντελόνι είναι γκρι." } },
        { id: "u4-zapatos", es: "zapatos", el: "παπούτσια", pos: "noun", emoji: "👞", noteEl: "Συνήθως πληθυντικός (αρσενικό): unos zapatos. Ενικός: un zapato.", example: { es: "Quiero unos zapatos negros.", el: "Θέλω ένα ζευγάρι μαύρα παπούτσια." } },
        { id: "u4-vestido", es: "vestido", el: "φόρεμα", pos: "noun", gender: "m", emoji: "👗", example: { es: "Ana lleva un vestido rojo.", el: "Η Ana φοράει ένα κόκκινο φόρεμα." } },
        { id: "u4-gorro", es: "gorro", el: "σκούφος", pos: "noun", gender: "m", emoji: "🧢", noteEl: "Το καπέλο με γείσο (τζόκεϊ) είναι la gorra. Το καπέλο με γύρο είναι el sombrero.", example: { es: "En invierno llevo un gorro.", el: "Τον χειμώνα φοράω έναν σκούφο." } },
        { id: "u4-bufanda", es: "bufanda", el: "κασκόλ", pos: "noun", gender: "f", emoji: "🧣", example: { es: "Mi bufanda es muy larga.", el: "Το κασκόλ μου είναι πολύ μακρύ." } },
        { id: "u4-botas", es: "botas", el: "μπότες", pos: "noun", emoji: "🥾", noteEl: "Συνήθως πληθυντικός (θηλυκό): unas botas. Ενικός: una bota.", example: { es: "Las botas marrones son nuevas.", el: "Οι καφέ μπότες είναι καινούριες." } },
        { id: "u4-camisa", es: "camisa", el: "πουκάμισο", pos: "noun", gender: "f", emoji: "👔", example: { es: "La camisa de Luis es blanca.", el: "Το πουκάμισο του Luis είναι άσπρο." } },
        { id: "u4-falda", es: "falda", el: "φούστα", pos: "noun", gender: "f", example: { es: "Tengo una falda negra.", el: "Έχω μια μαύρη φούστα." } },
        { id: "u4-abrigo", es: "abrigo", el: "παλτό", pos: "noun", gender: "m", emoji: "🧥", example: { es: "Necesito un abrigo para el invierno.", el: "Χρειάζομαι ένα παλτό για τον χειμώνα." } },
        { id: "u4-sandalias", es: "sandalias", el: "σανδάλια", pos: "noun", emoji: "👡", noteEl: "Συνήθως πληθυντικός (θηλυκό): unas sandalias. Ενικός: una sandalia.", example: { es: "En verano llevo sandalias.", el: "Το καλοκαίρι φοράω σανδάλια." } },
        { id: "u4-gafas", es: "gafas", el: "γυαλιά", pos: "noun", emoji: "👓", noteEl: "Πάντα πληθυντικός (θηλυκό): unas gafas. Γυαλιά ηλίου: gafas de sol.", example: { es: "Mi madre lleva gafas.", el: "Η μητέρα μου φοράει γυαλιά." } },
        { id: "u4-chaqueta", es: "chaqueta", el: "ζακέτα / σακάκι / μπουφάν", pos: "noun", gender: "f", emoji: "🧥", example: { es: "Mi chaqueta es negra.", el: "Η ζακέτα μου είναι μαύρη." } },
        { id: "u4-cinturon", es: "cinturón", el: "ζώνη", pos: "noun", gender: "m", noteEl: "Στον πληθυντικό χάνει τον τόνο: cinturones.", example: { es: "Este cinturón es muy caro.", el: "Αυτή η ζώνη είναι πολύ ακριβή." } },
      ],
    },
    {
      id: "hablar-de-ropa-precio",
      page: 64,
      section: "Léxico",
      titleEs: "Hablar de ropa: precio",
      titleEl: "Μιλώντας για ρούχα: τιμή",
      emoji: "💶",
      items: [
        { id: "u4-caro", es: "caro/a", el: "ακριβός", pos: "adjective", emoji: "💸", noteEl: "Αντίθετο: barato/a. Προσοχή: la cara σημαίνει και «το πρόσωπο».", example: { es: "Este abrigo es muy caro.", el: "Αυτό το παλτό είναι πολύ ακριβό." } },
        { id: "u4-barato", es: "barato/a", el: "φθηνός", pos: "adjective", emoji: "🏷️", example: { es: "Las sandalias son baratas.", el: "Τα σανδάλια είναι φθηνά." } },
      ],
    },
    {
      id: "hablar-de-ropa-adjetivos",
      page: 64,
      section: "Léxico",
      titleEs: "Hablar de ropa: adjetivos para describir",
      titleEl: "Μιλώντας για ρούχα: επίθετα περιγραφής",
      emoji: "✨",
      items: [
        { id: "u4-bonito", es: "bonito/a", el: "όμορφος / ωραίος", pos: "adjective", example: { es: "Tu bolso es muy bonito.", el: "Η τσάντα σου είναι πολύ όμορφη." } },
        { id: "u4-feo", es: "feo/a", el: "άσχημος", pos: "adjective", example: { es: "Este jersey es feo.", el: "Αυτό το πουλόβερ είναι άσχημο." } },
        { id: "u4-elegante", es: "elegante", el: "κομψός", pos: "adjective", noteEl: "Ίδια μορφή για αρσενικό και θηλυκό.", example: { es: "Tus zapatos son muy elegantes.", el: "Τα παπούτσια σου είναι πολύ κομψά." } },
        { id: "u4-informal", es: "informal", el: "ανεπίσημος / καθημερινός", pos: "adjective", noteEl: "Ίδια μορφή για αρσενικό και θηλυκό.", example: { es: "Los vaqueros son muy informales.", el: "Το τζιν είναι πολύ καθημερινό." } },
        { id: "u4-clasico", es: "clásico/a", el: "κλασικός", pos: "adjective", example: { es: "El jersey azul es muy clásico.", el: "Το μπλε πουλόβερ είναι πολύ κλασικό." } },
        { id: "u4-practico", es: "práctico/a", el: "πρακτικός", pos: "adjective", example: { es: "Estas botas son muy prácticas.", el: "Αυτές οι μπότες είναι πολύ πρακτικές." } },
        { id: "u4-moderno", es: "moderno/a", el: "μοντέρνος", pos: "adjective", example: { es: "Tu chaqueta es muy moderna.", el: "Το μπουφάν σου είναι πολύ μοντέρνο." } },
        { id: "u4-original", es: "original", el: "πρωτότυπος", pos: "adjective", noteEl: "Ίδια μορφή για αρσενικό και θηλυκό.", example: { es: "Esta camiseta es original.", el: "Αυτό το μπλουζάκι είναι πρωτότυπο." } },
      ],
    },
    {
      id: "hablar-de-ropa-caracteristicas",
      page: 64,
      section: "Léxico",
      titleEs: "Hablar de ropa: características",
      titleEl: "Μιλώντας για ρούχα: χαρακτηριστικά",
      emoji: "📐",
      items: [
        { id: "u4-de-manga-corta", es: "de manga corta", el: "κοντομάνικο", pos: "phrase", example: { es: "En verano llevo camisetas de manga corta.", el: "Το καλοκαίρι φοράω κοντομάνικα μπλουζάκια." } },
        { id: "u4-de-manga-larga", es: "de manga larga", el: "μακρυμάνικο", pos: "phrase", example: { es: "Esta camisa es de manga larga.", el: "Αυτό το πουκάμισο είναι μακρυμάνικο." } },
        { id: "u4-de-tirantes", es: "de tirantes", el: "με τιράντες", pos: "phrase", example: { es: "Tengo un vestido de tirantes.", el: "Έχω ένα φόρεμα με τιράντες." } },
        { id: "u4-de-rayas", es: "de rayas", el: "ριγέ", pos: "phrase", example: { es: "Mi camisa de rayas es azul y blanca.", el: "Το ριγέ πουκάμισό μου είναι μπλε και άσπρο." } },
        { id: "u4-de-cuadros", es: "de cuadros", el: "καρό", pos: "phrase", example: { es: "Prefiero la falda de cuadros.", el: "Προτιμώ τη φούστα με τα καρό." } },
        { id: "u4-estampado", es: "estampado/a", el: "εμπριμέ / με σχέδια", pos: "adjective", example: { es: "Es un vestido estampado.", el: "Είναι ένα εμπριμέ φόρεμα." } },
      ],
    },
  ],
  grammar: [
    {
      id: "demostrativos",
      titleEs: "Los demostrativos",
      titleEl: "Οι δεικτικές αντωνυμίες: este, esta, estos, estas",
      introEl:
        "Τα demostrativos δείχνουν κάτι που έχεις κοντά σου, όπως το ελληνικό «αυτός, αυτή, αυτό». Στα ισπανικά αλλάζουν ανάλογα με το γένος και τον αριθμό του ουσιαστικού που συνοδεύουν.",
      rules: [
        {
          textEl: "Μαζί με ουσιαστικό έχουμε τέσσερις μορφές: este (αρσενικό ενικός), esta (θηλυκό ενικός), estos (αρσενικό πληθυντικός), estas (θηλυκό πληθυντικός). Συμφωνούν πάντα με το ουσιαστικό.",
          examples: [
            { es: "Este abrigo es nuevo.", el: "Αυτό το παλτό είναι καινούριο." },
            { es: "Esta falda es verde.", el: "Αυτή η φούστα είναι πράσινη." },
            { es: "Estos zapatos son negros.", el: "Αυτά τα παπούτσια είναι μαύρα." },
            { es: "Estas botas son caras.", el: "Αυτές οι μπότες είναι ακριβές." },
          ],
        },
        {
          textEl: "Όταν είναι ξεκάθαρο για ποιο πράγμα μιλάμε, μπορούμε να παραλείψουμε το ουσιαστικό και να κρατήσουμε μόνο το demostrativo.",
          examples: [{ es: "Este bolso es caro, pero este es barato.", el: "Αυτή η τσάντα είναι ακριβή, αλλά αυτή είναι φθηνή." }],
        },
        {
          textEl: "Το esto είναι ουδέτερο. Δεν συνοδεύει ουσιαστικό και δεν έχει πληθυντικό. Το χρησιμοποιούμε όταν δεν ξέρουμε πώς λέγεται κάτι ή όταν δείχνουμε μια ολόκληρη ιδέα.",
          examples: [
            { es: "¿Qué es esto?", el: "Τι είναι αυτό;" },
            { es: "Esto es una bufanda.", el: "Αυτό είναι ένα κασκόλ." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Οι μορφές",
          headers: ["", "Masculino", "Femenino", "Neutro"],
          rows: [
            ["Singular", "este", "esta", "esto"],
            ["Plural", "estos", "estas", ""],
          ],
        },
        {
          titleEl: "Με ουσιαστικό και χωρίς ουσιαστικό",
          headers: ["Demostrativo + sustantivo", "Demostrativo solo"],
          rows: [
            ["este abrigo", "este"],
            ["esta falda", "esta"],
            ["estos zapatos", "estos"],
            ["estas botas", "estas"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λέμε «αυτό το παλτό» με άρθρο. Στα ισπανικά ΔΕΝ βάζουμε άρθρο: «este abrigo», όχι «el este abrigo».",
        "Το esto δεν αλλάζει ποτέ. Μην το βάζεις μπροστά από ουσιαστικό: «esto abrigo» είναι λάθος.",
        "Τα este, esta, estos, estas δείχνουν κάτι κοντά σου. Για πράγματα πιο μακριά υπάρχουν άλλες μορφές (ese, aquel), που θα μάθεις αργότερα.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "___ camiseta es muy bonita.", promptEl: "Αυτό το μπλουζάκι είναι πολύ όμορφο.", options: ["Este", "Esta", "Estos", "Estas"], answer: "Esta", explainEl: "Η camiseta είναι θηλυκό ενικού, άρα esta." },
        { type: "choice", id: "d2", promptEs: "___ zapatos son caros.", promptEl: "Αυτά τα παπούτσια είναι ακριβά.", options: ["Este", "Esta", "Estos", "Estas"], answer: "Estos", explainEl: "Οι zapatos είναι αρσενικό πληθυντικού, άρα estos." },
        { type: "choice", id: "d3", promptEs: "¿Cuánto cuestan ___ sandalias?", promptEl: "Πόσο κοστίζουν αυτά τα σανδάλια;", options: ["estas", "estos", "esta", "esto"], answer: "estas" },
        { type: "choice", id: "d4", promptEs: "¿Qué es ___?", promptEl: "Τι είναι αυτό; (δεν ξέρεις πώς λέγεται)", options: ["esto", "este", "esta", "estos"], answer: "esto", explainEl: "Όταν δεν ξέρουμε το ουσιαστικό χρησιμοποιούμε το ουδέτερο esto." },
        { type: "cloze", id: "d5", textEs: "___ jersey es de mi hermano.", hintEl: "Αυτό το πουλόβερ είναι του αδερφού μου.", answer: "Este" },
        { type: "cloze", id: "d6", textEs: "Mira, ___ pantalones son negros.", hintEl: "Κοίτα, αυτό το παντελόνι είναι μαύρο.", answer: "estos", explainEl: "Το pantalones είναι πληθυντικός στα ισπανικά, άρα estos." },
        { type: "cloze", id: "d7", textEs: "Me llevo estas botas y ___ pantalones.", hintEl: "Παίρνω αυτές τις μπότες και αυτό το παντελόνι.", answer: "estos" },
        { type: "order", id: "d8", promptEl: "Αυτή η φούστα είναι φθηνή.", solution: ["Esta", "falda", "es", "barata."], distractors: ["Este", "barato"] },
        { type: "order", id: "d9", promptEl: "Αυτά τα παπούτσια είναι όμορφα.", solution: ["Estos", "zapatos", "son", "bonitos."], distractors: ["Estas", "bonita"] },
      ],
    },
    {
      id: "articulo-adjetivo",
      titleEs: "El / la / los / las + adjetivo y el / la / los / las de + sustantivo",
      titleEl: "Άρθρο + επίθετο και άρθρο + de + ουσιαστικό",
      introEl:
        "Για να μην επαναλαμβάνεις το ίδιο ουσιαστικό, κρατάς το άρθρο και το επίθετο (ή το de + ουσιαστικό) και παραλείπεις το ουσιαστικό. Στα ελληνικά κάνουμε το ίδιο: «το καινούριο», «το μαύρο».",
      rules: [
        {
          textEl: "Όταν από τα συμφραζόμενα ξέρουμε για ποιο ουσιαστικό μιλάμε, το παραλείπουμε και κρατάμε άρθρο + επίθετο. Το άρθρο συμφωνεί με το ουσιαστικό που λείπει.",
          examples: [
            { es: "¿Qué abrigo prefieres, el negro o el gris?", el: "Ποιο παλτό προτιμάς, το μαύρο ή το γκρι;" },
            { es: "Tengo dos faldas: la roja y la negra.", el: "Έχω δύο φούστες: την κόκκινη και τη μαύρη." },
          ],
        },
        {
          textEl: "Το ίδιο κάνουμε με το de + ουσιαστικό, που περιγράφει υλικό ή χαρακτηριστικό: la camisa de rayas → la de rayas.",
          examples: [{ es: "Prefiero la de cuadros.", el: "Προτιμώ αυτή με τα καρό." }],
        },
        {
          textEl: "Τα επίθετα συμφωνούν με το ουσιαστικό σε γένος και αριθμό. Τα χρώματα σε -o έχουν τέσσερις μορφές (rojo, roja, rojos, rojas). Τα verde, azul, gris, naranja, marrón έχουν μία μορφή για αρσενικό και θηλυκό και παίρνουν -s ή -es στον πληθυντικό. Το beis δεν αλλάζει ποτέ.",
          examples: [
            { es: "un abrigo gris, unos abrigos grises", el: "ένα γκρι παλτό, γκρι παλτά" },
            { es: "una falda verde, unas faldas verdes", el: "μια πράσινη φούστα, πράσινες φούστες" },
            { es: "un bolso blanco, unas botas blancas", el: "μια άσπρη τσάντα, άσπρες μπότες" },
          ],
        },
        {
          textEl: "Το επίθετο μπαίνει ΜΕΤΑ το ουσιαστικό, και στα χρώματα: «una camiseta roja».",
          examples: [{ es: "Tengo un vestido verde.", el: "Έχω ένα πράσινο φόρεμα." }],
        },
      ],
      tables: [
        {
          titleEl: "Χωρίς το ουσιαστικό",
          headers: ["Con sustantivo", "Sin sustantivo"],
          rows: [
            ["el abrigo gris", "el gris"],
            ["la falda verde", "la verde"],
            ["los zapatos blancos", "los blancos"],
            ["las botas negras", "las negras"],
            ["la camisa de rayas", "la de rayas"],
          ],
        },
        {
          titleEl: "Συμφωνία των χρωμάτων",
          headers: ["Masculino singular", "Femenino singular", "Masculino plural", "Femenino plural"],
          rows: [
            ["rojo", "roja", "rojos", "rojas"],
            ["blanco", "blanca", "blancos", "blancas"],
            ["verde", "verde", "verdes", "verdes"],
            ["azul", "azul", "azules", "azules"],
            ["gris", "gris", "grises", "grises"],
            ["naranja", "naranja", "naranjas", "naranjas"],
            ["marrón", "marrón", "marrones", "marrones"],
            ["beis", "beis", "beis", "beis"],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά το επίθετο μπαίνει πριν από το ουσιαστικό («μια κόκκινη τσάντα»). Στα ισπανικά μπαίνει μετά: «un bolso rojo».",
        "Το άρθρο που μένει πρέπει να ταιριάζει με το ουσιαστικό που παραλείπεται, όχι με το επίθετο: el (bolso) rojo, la (camiseta) roja.",
        "Το marrón στον πληθυντικό χάνει τον τόνο: marrones.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "Tengo una chaqueta ___.", promptEl: "Έχω ένα κόκκινο μπουφάν.", options: ["rojo", "roja", "rojas", "rojos"], answer: "roja", explainEl: "Η chaqueta είναι θηλυκό ενικού, άρα roja." },
        { type: "choice", id: "d2", promptEs: "Necesito unos pantalones ___.", promptEl: "Χρειάζομαι ένα μαύρο παντελόνι.", options: ["negro", "negra", "negros", "negras"], answer: "negros" },
        { type: "choice", id: "d3", promptEs: "Las sandalias ___ son bonitas.", promptEl: "Τα άσπρα σανδάλια είναι όμορφα.", options: ["blanco", "blanca", "blancas", "blancos"], answer: "blancas" },
        { type: "choice", id: "d4", promptEs: "Unas botas ___.", promptEl: "Καφέ μπότες.", options: ["marrón", "marrones", "marrona", "marronas"], answer: "marrones", explainEl: "Το marrón στον πληθυντικό γίνεται marrones και χάνει τον τόνο." },
        { type: "choice", id: "d5", promptEs: "Un abrigo ___.", promptEl: "Ένα μπεζ παλτό.", options: ["beis", "beises", "beisa", "beiso"], answer: "beis", explainEl: "Το beis δεν αλλάζει ποτέ." },
        { type: "cloze", id: "d6", textEs: "¿Qué camiseta prefieres, la blanca o ___ azul?", hintEl: "Ποιο μπλουζάκι προτιμάς, το άσπρο ή το μπλε;", answer: "la" },
        { type: "cloze", id: "d7", textEs: "Los zapatos negros son caros, pero ___ blancos son baratos.", hintEl: "Τα μαύρα παπούτσια είναι ακριβά, αλλά τα άσπρα είναι φθηνά.", answer: "los" },
        { type: "cloze", id: "d8", textEs: "Quiero la camisa de rayas, no ___ de cuadros.", hintEl: "Θέλω το πουκάμισο με τις ρίγες, όχι αυτό με τα καρό.", answer: "la" },
        { type: "order", id: "d9", promptEl: "Έχω ένα πράσινο φόρεμα.", solution: ["Tengo", "un", "vestido", "verde."], distractors: ["verdes", "rojo"], explainEl: "Το επίθετο μπαίνει μετά το ουσιαστικό." },
        { type: "order", id: "d10", promptEl: "Προτιμώ τα μαύρα.", solution: ["Prefiero", "los", "negros."], distractors: ["las", "negro"] },
        { type: "order", id: "d11", promptEl: "Αυτή με τα καρό είναι ακριβή.", solution: ["La", "de", "cuadros", "es", "cara."], distractors: ["El", "caro"] },
      ],
    },
    {
      id: "que-cual-cuesta",
      titleEs: "Qué + sustantivo, cuál / cuáles, cuesta / cuestan",
      titleEl: "Qué + ουσιαστικό, cuál / cuáles και cuesta / cuestan",
      introEl:
        "Για να ρωτήσεις «ποιο;» ανάμεσα σε πολλά πράγματα έχεις δύο επιλογές: qué + ουσιαστικό, ή cuál / cuáles όταν δεν επαναλαμβάνεις το ουσιαστικό. Για την τιμή χρησιμοποιείς το ρήμα costar.",
      rules: [
        {
          textEl: "Qué + ουσιαστικό: ρωτάμε για ένα αντικείμενο, πρόσωπο, ζώο ή μέρος ανάμεσα σε πολλά του ίδιου είδους. Το qué δεν αλλάζει ποτέ, ούτε σε γένος ούτε σε αριθμό.",
          examples: [
            { es: "¿Qué abrigo llevas hoy?", el: "Ποιο παλτό φοράς σήμερα;" },
            { es: "¿Qué botas necesitas?", el: "Ποιες μπότες χρειάζεσαι;" },
          ],
        },
        {
          textEl: "Cuál (ενικός) και cuáles (πληθυντικός): τα χρησιμοποιούμε όταν ήδη ξέρουμε ποιο είδος πράγματος εννοούμε και δεν επαναλαμβάνουμε το ουσιαστικό. Δεν συνοδεύουν ουσιαστικό.",
          examples: [
            { es: "Tengo dos abrigos. ¿Cuál llevo hoy?", el: "Έχω δύο παλτό. Ποιο να φορέσω σήμερα;" },
            { es: "Hay muchos zapatos. ¿Cuáles prefieres?", el: "Υπάρχουν πολλά παπούτσια. Ποια προτιμάς;" },
          ],
        },
        {
          textEl: "Cuesta / cuestan είναι το ρήμα costar (κοστίζω) στο τρίτο πρόσωπο. Ενικός για ένα πράγμα, πληθυντικός για πολλά. Συμφωνεί με το αντικείμενο που κοστίζει, όχι με την τιμή.",
          examples: [
            { es: "¿Cuánto cuesta esta bufanda?", el: "Πόσο κοστίζει αυτό το κασκόλ;" },
            { es: "¿Cuánto cuestan los zapatos negros?", el: "Πόσο κοστίζουν τα μαύρα παπούτσια;" },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Qué και cuál",
          headers: ["", "Con sustantivo", "Sin sustantivo"],
          rows: [
            ["Singular", "¿Qué falda?", "¿Cuál?"],
            ["Plural", "¿Qué faldas?", "¿Cuáles?"],
          ],
        },
        {
          titleEl: "Cuesta και cuestan",
          headers: ["Singular", "Plural"],
          rows: [["¿Cuánto cuesta esta camisa?", "¿Cuánto cuestan estas camisas?"]],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λέμε «ποιο» και στις δύο περιπτώσεις. Στα ισπανικά, ΜΕ ουσιαστικό χρησιμοποιούμε qué: «¿Qué falda?», όχι «¿Cuál falda?».",
        "Οι ερωτηματικές λέξεις qué, cuál, cuáles, cuánto γράφονται πάντα με τόνο.",
        "Το cuesta / cuestan ανήκει στο costar, που αλλάζει o → ue. Στο A1 το μαθαίνεις ως έτοιμη έκφραση για τις τιμές.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "¿___ falda prefieres?", promptEl: "Ποια φούστα προτιμάς;", options: ["Qué", "Cuál", "Cuáles", "Quién"], answer: "Qué", explainEl: "Μπροστά από ουσιαστικό χρησιμοποιούμε qué." },
        { type: "choice", id: "d2", promptEs: "Hay tres bolsos. ¿___ prefieres?", promptEl: "Υπάρχουν τρεις τσάντες. Ποια από τις τρεις προτιμάς;", options: ["Cuál", "Cuáles", "Cuánto", "Quién"], answer: "Cuál", explainEl: "Δεν επαναλαμβάνουμε το ουσιαστικό και ρωτάμε για ένα πράγμα, άρα cuál." },
        { type: "choice", id: "d3", promptEs: "Hay muchos zapatos. ¿___ compras?", promptEl: "Υπάρχουν πολλά παπούτσια. Ποια ζευγάρια αγοράζεις;", options: ["Cuál", "Cuáles", "Cuánto", "Quién"], answer: "Cuáles", explainEl: "Τα zapatos είναι πληθυντικός και δεν επαναλαμβάνουμε το ουσιαστικό, άρα cuáles." },
        { type: "choice", id: "d4", promptEs: "¿___ colores prefieres?", promptEl: "Ποια χρώματα προτιμάς;", options: ["Qué", "Cuál", "Cuáles", "Cuántas"], answer: "Qué", explainEl: "Μπροστά από ουσιαστικό, ακόμα και πληθυντικό, το qué μένει αμετάβλητο." },
        { type: "choice", id: "d5", promptEs: "¿Cuánto ___ las sandalias?", promptEl: "Πόσο κοστίζουν τα σανδάλια;", options: ["cuesta", "cuestan", "cuestas", "cuestamos"], answer: "cuestan" },
        { type: "cloze", id: "d6", textEs: "¿___ jersey llevas hoy?", hintEl: "Ποιο πουλόβερ φοράς σήμερα;", answer: "Qué" },
        { type: "cloze", id: "d7", textEs: "¿Cuánto ___ esta camiseta?", hintEl: "Πόσο κοστίζει αυτό το μπλουζάκι;", answer: "cuesta" },
        { type: "cloze", id: "d8", textEs: "¿Cuánto ___ estos pantalones?", hintEl: "Πόσο κοστίζει αυτό το παντελόνι;", answer: "cuestan", explainEl: "Το pantalones είναι πληθυντικός στα ισπανικά, άρα cuestan." },
        { type: "order", id: "d9", promptEl: "Πόσο κοστίζει αυτό το φόρεμα;", solution: ["¿Cuánto", "cuesta", "este", "vestido?"], distractors: ["cuestan", "esta"] },
        { type: "order", id: "d10", promptEl: "Ποιες μπότες προτιμάς;", solution: ["¿Qué", "botas", "prefieres?"], distractors: ["¿Cuáles", "prefiere"] },
      ],
    },
    {
      id: "tener-que",
      titleEs: "Expresar necesidad: tener que + infinitivo",
      titleEl: "Ανάγκη: tener que + απαρέμφατο",
      introEl:
        "Για να πεις ότι «πρέπει» να κάνεις κάτι, χρησιμοποιείς tener que + απαρέμφατο. Το tener κλίνεται για κάθε πρόσωπο, ενώ το que και το απαρέμφατο μένουν αμετάβλητα.",
      rules: [
        {
          textEl: "Τύπος: tener (κλιμένο) + que + απαρέμφατο. Εκφράζει ανάγκη ή υποχρέωση: «πρέπει να…».",
          examples: [
            { es: "Tengo que comprar un abrigo.", el: "Πρέπει να αγοράσω ένα παλτό." },
            { es: "Tienes que llevar un regalo.", el: "Πρέπει να πάρεις ένα δώρο μαζί σου." },
          ],
        },
        {
          textEl: "Το tener είναι ανώμαλο: yo tengo, και e → ie στα tienes, tiene, tienen. Τα nosotros (tenemos) και vosotros (tenéis) είναι κανονικά.",
          examples: [
            { es: "Tenemos que ir a la tienda.", el: "Πρέπει να πάμε στο μαγαζί." },
            { es: "Ana tiene que trabajar hoy.", el: "Η Ana πρέπει να δουλέψει σήμερα." },
          ],
        },
        {
          textEl: "Το que δεν παραλείπεται ποτέ και μετά από αυτό το ρήμα μένει πάντα στο απαρέμφατο (-ar, -er, -ir).",
          examples: [{ es: "Tenéis que ir al mercado.", el: "Πρέπει να πάτε στην αγορά." }],
        },
        {
          textEl: "Στην άρνηση το no μπαίνει πριν από το tener. Το «no tener que» σημαίνει «δεν χρειάζεται να».",
          examples: [{ es: "No tienes que pagar hoy.", el: "Δεν χρειάζεται να πληρώσεις σήμερα." }],
        },
      ],
      tables: [
        {
          titleEl: "Tener que + infinitivo",
          headers: ["", "tener", "Ejemplo"],
          rows: [
            ["yo", "tengo", "Tengo que comprar un regalo."],
            ["tú, vos", "tienes, tenés", "Tienes que llevar un abrigo."],
            ["él / ella / usted", "tiene", "Tiene que trabajar."],
            ["nosotros / nosotras", "tenemos", "Tenemos que ir a casa."],
            ["vosotros / vosotras", "tenéis", "Tenéis que venir hoy."],
            ["ellos / ellas / ustedes", "tienen", "Tienen que comprar zapatos."],
          ],
        },
      ],
      tipsEl: [
        "Στα ελληνικά λέμε «πρέπει να πάω» με υποτακτική. Στα ισπανικά μετά το que μπαίνει απαρέμφατο: «tengo que ir», όχι «tengo que voy».",
        "Κυριολεκτικά το tener que είναι «έχω που να…». Μην το μεταφράζεις λέξη προς λέξη, μάθε το ως ενιαία έκφραση.",
        "Αργότερα θα δεις και το απρόσωπο hay que + απαρέμφατο («πρέπει», χωρίς συγκεκριμένο πρόσωπο).",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ que comprar un regalo.", hintEl: "Πρέπει να αγοράσω ένα δώρο.", answer: "tengo" },
        { type: "cloze", id: "d2", textEs: "Tú ___ que llevar un abrigo.", hintEl: "Πρέπει να φορέσεις παλτό.", answer: "tienes" },
        { type: "cloze", id: "d3", textEs: "Nosotros ___ que ir al mercado.", hintEl: "Πρέπει να πάμε στην αγορά.", answer: "tenemos" },
        { type: "cloze", id: "d4", textEs: "Ellos ___ que trabajar hoy.", hintEl: "Εκείνοι πρέπει να δουλέψουν σήμερα.", answer: "tienen" },
        { type: "choice", id: "d5", promptEs: "Mañana tengo ___ ir a la universidad.", promptEl: "Αύριο πρέπει να πάω στο πανεπιστήμιο.", options: ["que", "de", "a", "por"], answer: "que" },
        { type: "choice", id: "d6", promptEs: "Ana tiene que ___ un vestido para la fiesta.", promptEl: "Η Ana πρέπει να αγοράσει ένα φόρεμα για το πάρτι.", options: ["compra", "comprar", "compras", "comprando"], answer: "comprar", explainEl: "Μετά το tener que μπαίνει πάντα το απαρέμφατο." },
        { type: "choice", id: "d7", promptEs: "Vosotros ___ que llevar los zapatos negros.", promptEl: "Εσείς πρέπει να φορέσετε τα μαύρα παπούτσια.", options: ["tenéis", "tenemos", "tienen", "tienes"], answer: "tenéis" },
        { type: "order", id: "d8", promptEl: "Πρέπει να αγοράσω ένα φόρεμα.", solution: ["Tengo", "que", "comprar", "un", "vestido."], distractors: ["tiene", "de"] },
        { type: "order", id: "d9", promptEl: "Εμείς πρέπει να πάμε στην αγορά.", solution: ["Nosotros", "tenemos", "que", "ir", "al", "mercado."], distractors: ["vamos", "tienen"] },
        { type: "order", id: "d10", promptEl: "Η Ana πρέπει να φορέσει παλτό.", solution: ["Ana", "tiene", "que", "llevar", "un", "abrigo."], distractors: ["tengo", "lleva"] },
      ],
    },
    {
      id: "preferir-ir",
      titleEs: "Verbos irregulares terminados en -ir: preferir e ir",
      titleEl: "Ανώμαλα ρήματα σε -ir: preferir και ir",
      introEl:
        "Τα preferir (προτιμώ) και ir (πηγαίνω) τελειώνουν και τα δύο σε -ir και είναι ανώμαλα, αλλά με διαφορετικό τρόπο. Το preferir αλλάζει ρίζα (e → ie), ενώ το ir έχει δικούς του τύπους.",
      rules: [
        {
          textEl: "Preferir: το e της ρίζας γίνεται ie στα yo, tú, él/ella/usted και ellos/ellas/ustedes. Στα nosotros και vosotros η ρίζα δεν αλλάζει.",
          examples: [
            { es: "Prefiero el jersey azul.", el: "Προτιμώ το μπλε πουλόβερ." },
            { es: "Preferimos las botas negras.", el: "Προτιμάμε τις μαύρες μπότες." },
          ],
        },
        {
          textEl: "Το ir είναι εντελώς ανώμαλο: voy, vas, va, vamos, vais, van. Τα μαθαίνεις απέξω, γιατί δεν μοιάζουν με το απαρέμφατο.",
          examples: [
            { es: "Voy a la playa.", el: "Πάω στην παραλία." },
            { es: "Mis amigos van a un hotel.", el: "Οι φίλοι μου πάνε σε ένα ξενοδοχείο." },
          ],
        },
        {
          textEl: "Μετά το ir μπαίνει η πρόθεση a (προς κάπου): ir a + τόπος. Το a + el γίνεται al.",
          examples: [
            { es: "Vamos al mercado.", el: "Πάμε στην αγορά." },
            { es: "Voy a la tienda.", el: "Πάω στο μαγαζί." },
          ],
        },
        {
          textEl: "Το preferir μπορεί να έχει αντικείμενο ουσιαστικό ή απαρέμφατο.",
          examples: [
            { es: "Prefiero el verde.", el: "Προτιμώ το πράσινο." },
            { es: "Prefiero ir de compras.", el: "Προτιμώ να πηγαίνω για ψώνια." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ενεστώτας",
          headers: ["", "preferir", "ir"],
          rows: [
            ["yo", "prefiero", "voy"],
            ["tú, vos", "prefieres, preferís", "vas"],
            ["él / ella / usted", "prefiere", "va"],
            ["nosotros / nosotras", "preferimos", "vamos"],
            ["vosotros / vosotras", "preferís", "vais"],
            ["ellos / ellas / ustedes", "prefieren", "van"],
          ],
        },
      ],
      tipsEl: [
        "Το preferir ακολουθεί τον κανόνα e → ie σε τέσσερα πρόσωπα (όχι στα nosotros και vosotros). Το ίδιο κάνουν τα querer και tener.",
        "Μην πεις «yo prefero». Η ρίζα γίνεται prefier-: prefiero. Το ie προφέρεται σε μία συλλαβή: pre-FIE-ro.",
        "Για τόπο χρησιμοποιούμε a, όχι en: «voy a la playa», όχι «voy en la playa».",
      ],
      drills: [
        { type: "cloze", id: "d1", textEs: "Yo ___ el abrigo negro.", hintEl: "Προτιμώ το μαύρο παλτό.", answer: "prefiero" },
        { type: "cloze", id: "d2", textEs: "Tú ___ las botas marrones.", hintEl: "Προτιμάς τις καφέ μπότες.", answer: "prefieres" },
        { type: "cloze", id: "d3", textEs: "Ana ___ la camiseta de rayas.", hintEl: "Η Ana προτιμά το ριγέ μπλουζάκι.", answer: "prefiere" },
        { type: "cloze", id: "d4", textEs: "Nosotros ___ ir de compras.", hintEl: "Προτιμάμε να πηγαίνουμε για ψώνια.", answer: "preferimos", explainEl: "Στα nosotros η ρίζα δεν αλλάζει: preferimos, όχι «prefierimos»." },
        { type: "cloze", id: "d5", textEs: "Ellos ___ los zapatos blancos.", hintEl: "Εκείνοι προτιμούν τα άσπρα παπούτσια.", answer: "prefieren" },
        { type: "cloze", id: "d6", textEs: "Yo ___ al mercado con mi madre.", hintEl: "Πάω στην αγορά με τη μητέρα μου.", answer: "voy" },
        { type: "cloze", id: "d7", textEs: "Tú ___ a la universidad.", hintEl: "Πας στο πανεπιστήμιο.", answer: "vas" },
        { type: "cloze", id: "d8", textEs: "Nosotros ___ al gimnasio.", hintEl: "Πάμε στο γυμναστήριο.", answer: "vamos" },
        { type: "choice", id: "d9", promptEs: "Mi padre ___ al banco.", promptEl: "Ο πατέρας μου πάει στην τράπεζα.", options: ["va", "vas", "voy", "van"], answer: "va" },
        { type: "choice", id: "d10", promptEs: "Yo no ___ el color rosa.", promptEl: "Δεν προτιμώ το ροζ χρώμα.", options: ["prefero", "prefiero", "prefiere", "preferimos"], answer: "prefiero", explainEl: "Το e της ρίζας γίνεται ie στο yo: prefiero." },
        { type: "order", id: "d11", promptEl: "Εκείνοι πάνε στην παραλία.", solution: ["Ellos", "van", "a", "la", "playa."], distractors: ["al", "va"] },
        { type: "order", id: "d12", promptEl: "Προτιμώ το πράσινο.", solution: ["Prefiero", "el", "verde."], distractors: ["prefieres", "la"] },
      ],
    },
    {
      id: "comprar-en-tiendas",
      titleEs: "Comprar en tiendas",
      titleEl: "Αγορές σε μαγαζιά",
      introEl:
        "Σε ένα μαγαζί ο πωλητής και ο πελάτης χρησιμοποιούν σταθερές φράσεις. Μάθε τες ως έτοιμα κομμάτια, γιατί οι διάλογοι είναι σχεδόν πάντα ίδιοι.",
      rules: [
        {
          textEl: "Ξεκινάτε και οι δύο με χαιρετισμό: Hola, Buenos días ή Buenas tardes.",
          examples: [{ es: "Buenas tardes.", el: "Καλησπέρα." }],
        },
        {
          textEl: "Ο πωλητής ρωτά «¿Qué desea?» ή «¿Qué quería?». Το quería ακούγεται σαν παρελθόν, αλλά εδώ είναι απλώς ευγενική μορφή, σαν το ελληνικό «θα θέλατε». Ο πελάτης απαντά και αυτός με quería.",
          examples: [{ es: "¿Qué desea? Quería unas botas negras.", el: "Τι θα θέλατε; Θα ήθελα μαύρες μπότες." }],
        },
        {
          textEl: "Ο πελάτης ρωτά την τιμή με «¿Cuánto cuesta(n)…?». Ο πωλητής απαντά με τον αριθμό και το νόμισμα.",
          examples: [
            { es: "¿Cuánto cuestan estas botas? Cuestan 60 euros.", el: "Πόσο κοστίζουν αυτές οι μπότες; Κοστίζουν 60 ευρώ." },
            { es: "Son 40 euros, por favor.", el: "Είναι 40 ευρώ, παρακαλώ." },
          ],
        },
        {
          textEl: "Σχολιάζουμε την τιμή με «Es / Son un poco caro(s)» και ζητάμε κάτι πιο φθηνό με «¿Tiene algo más barato?».",
          examples: [
            { es: "Son un poco caras. ¿Tiene algo más barato?", el: "Είναι λίγο ακριβές. Έχετε κάτι πιο φθηνό;" },
          ],
        },
        {
          textEl: "Αποφασίζουμε με «Me llevo este / esta / estos / estas». Ο πωλητής ρωτά «¿Desea alguna cosa más?» και ο πελάτης απαντά «No, gracias». Όταν πληρώνεις λες «Aquí tiene».",
          examples: [
            { es: "Pues me llevo estas.", el: "Τότε παίρνω αυτές." },
            { es: "¿Desea alguna cosa más? No, gracias.", el: "Θέλετε κάτι άλλο; Όχι, ευχαριστώ." },
          ],
        },
      ],
      tables: [
        {
          titleEl: "Ένας τυπικός διάλογος",
          headers: ["Vendedor/a", "Cliente/a"],
          rows: [
            ["Buenos días.", "Buenos días."],
            ["¿Qué desea?", "Quería unas botas negras."],
            ["Sí, tenemos estas. Cuestan 60 euros.", "Son un poco caras. ¿Tiene algo más barato?"],
            ["Tenemos estas. Cuestan 40 euros.", "Pues me llevo estas."],
            ["¿Desea alguna cosa más?", "No, gracias."],
            ["Son 40 euros, por favor.", "Aquí tiene. Muchas gracias."],
          ],
        },
      ],
      tipsEl: [
        "Με έναν άγνωστο πωλητή χρησιμοποίησε usted: «¿Tiene…?», όχι «¿Tienes…?».",
        "Το más + επίθετο σχηματίζει σύγκριση: más barato (πιο φθηνό), más caro (πιο ακριβό).",
        "Το quería αντιστοιχεί στο ελληνικό «θα ήθελα». Αν το μεταφράσεις ως παρελθόν («ήθελα»), θα το ακούσεις παράξενα.",
        "Το euro στον πληθυντικό γίνεται euros. Άλλα νομίσματα: pesos, dólares.",
      ],
      drills: [
        { type: "choice", id: "d1", promptEs: "En una tienda. ¿Qué desea?", options: ["Quería unos zapatos negros.", "Me llamo Ana.", "Soy de Madrid.", "Tengo veinte años."], answer: "Quería unos zapatos negros." },
        { type: "choice", id: "d2", promptEs: "¿Cuánto cuestan estas botas?", options: ["Cuestan 60 euros.", "Prefiero las negras.", "Tengo que ir a casa.", "Voy al mercado."], answer: "Cuestan 60 euros." },
        { type: "choice", id: "d3", promptEs: "Estos zapatos son un poco caros. ¿Qué dices?", promptEl: "Αυτά τα παπούτσια είναι λίγο ακριβά. Τι λες;", options: ["¿Tiene algo más barato?", "¿Qué desea?", "Aquí tiene.", "Buenos días."], answer: "¿Tiene algo más barato?" },
        { type: "choice", id: "d4", promptEs: "Decides comprar estos pantalones. Dices:", promptEl: "Αποφασίζεις να αγοράσεις αυτό το παντελόνι. Λες:", options: ["Me llevo estos.", "Me llamo estos.", "Voy a estos.", "Tengo estos."], answer: "Me llevo estos.", explainEl: "Το llevarse σημαίνει «παίρνω» (διαλέγω και αγοράζω) ένα αντικείμενο." },
        { type: "cloze", id: "d5", textEs: "Buenas tardes, ¿qué ___?", hintEl: "Καλησπέρα, τι θα θέλατε;", answer: "desea", alternatives: ["quería"] },
        { type: "cloze", id: "d6", textEs: "Son 45 euros, por ___.", hintEl: "Είναι 45 ευρώ, παρακαλώ.", answer: "favor" },
        { type: "cloze", id: "d7", textEs: "Aquí ___.", hintEl: "Ορίστε. (δίνεις τα χρήματα)", answer: "tiene", alternatives: ["tienes"] },
        { type: "order", id: "d8", promptEl: "Θα ήθελα ένα μπουφάν.", solution: ["Quería", "una", "chaqueta."], distractors: ["unos", "cuesta"] },
        { type: "order", id: "d9", promptEl: "Έχετε κάτι πιο φθηνό;", solution: ["¿Tiene", "algo", "más", "barato?"], distractors: ["caro", "tienes"] },
        { type: "order", id: "d10", promptEl: "Τα παπούτσια είναι λίγο ακριβά.", solution: ["Los", "zapatos", "son", "un", "poco", "caros."], distractors: ["es", "caras"] },
      ],
    },
  ],
};
