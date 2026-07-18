// Archivio condiviso delle ricette di Mara.
// Aggiungere una ricetta = aggiungere una voce qui e il suo id in `order`.
// `published: true` la rende visibile (in home come ultima, e apribile dal diario).
// `note.by` (o `notes[i].by`): "ale" per una nota di Alessandra, altrimenti si assume di Mara.
// `notes`: array di note distinte (in ordine), al posto del singolo campo `note`.
// `illustration: true` su una ricetta con `img`: niente cornice, sfondo trasparente (per immagini create, non foto).
// `pageImg`: array di foto usato solo nella pagina della ricetta (Ricetta.dc.html), al posto di `img`; la home continua a usare `img`.
window.MARA_RECIPES = {
  order: ["pastella", "zucchine", "tortacioccolato"],
  recipes: {
    pastella: {
      published: true,
      day: "26", mIt: "febbraio", mEn: "February",
      date: { it: "26 febbraio 2004", en: "26 February 2004" },
      cat: { it: "preparazioni di base", en: "basics" },
      name: { it: "Pastella per friggere", en: "Frying batter" },
      meta: { it: "", en: "" },
      time: { it: "Riposo 15 min", en: "Rest 15 min" },
      img: "photos/pastella.png",
      illustration: true,
      photo: { it: "[ foto: verdure in pastella appena fritte ]", en: "[ photo: freshly fried battered vegetables ]" },
      ing: {
        it: ["150 g di farina 00", "200 ml di acqua frizzante ben fredda", "1 cucchiaio di grappa", "1 pizzico di sale"],
        en: ["150 g plain flour (type 00)", "200 ml well-chilled sparkling water", "1 tbsp grappa", "1 pinch of salt"]
      },
      steps: {
        it: ["Versa la farina in una ciotola e aggiungi il sale.", "Unisci la grappa e l'acqua frizzante ben fredda, mescolando con una frusta fino a ottenere una pastella liscia e priva di grumi.", "Copri la ciotola e lascia riposare la pastella in frigorifero per 15 minuti."],
        en: ["Pour the flour into a bowl and add the salt.", "Add the grappa and the well-chilled sparkling water, whisking until you get a smooth, lump-free batter.", "Cover the bowl and let the batter rest in the fridge for 15 minutes."]
      },
      note: { it: "Questa pastella è adatta a verdure (carciofi a quarti, radicchio di Treviso, zucchine a listarelle, anelli di cipolla, melanzane a fette, listarelle di peperoni) o frutta (mele, banane, ananas): tuffale nella pastella e friggi.", en: "This batter is suitable for vegetables (quartered artichokes, Treviso radicchio, courgette strips, onion rings, aubergine slices, pepper strips) or fruit (apples, bananas, pineapple): dip them in the batter and fry." }
    },
    zucchine: {
      published: true,
      day: "27", mIt: "giugno", mEn: "June",
      date: { it: "27 giugno 2004", en: "27 June 2004" },
      cat: { it: "primi piatti", en: "first course" },
      name: { it: "Crema fredda di zucchine", en: "Chilled courgette cream" },
      meta: { it: "", en: "" },
      servings: { it: "Per 4 persone", en: "Serves 4" },
      time: { it: "Riposo 1h", en: "Rest 1h" },
      img: "photos/zucchine.jpg",
      photo: { it: "[ foto: la crema fredda di zucchine con robiola e granella di pistacchio ]", en: "[ photo: the chilled courgette cream with robiola and pistachio crumble ]" },
      ing: {
        it: ["1 kg di zucchine", "1 piccolo spicchio d'aglio", "6-8 foglie di menta fresca", "5 cubetti di ghiaccio", "3 cucchiai di olio extravergine d'oliva", "sale q.b.", "qualche goccia di succo di limone (facoltativo)", "§ Per completare", "120 g di robiola, caprino fresco oppure yogurt greco", "2 cucchiai di granella di pistacchio", "pepe nero o rosa macinato al momento", "scorza grattugiata di 1 limone non trattato", "qualche fogliolina di menta fresca", "olio extravergine d'oliva"],
        en: ["1 kg courgettes", "1 small garlic clove", "6-8 fresh mint leaves", "5 ice cubes", "3 tbsp extra-virgin olive oil", "salt to taste", "a few drops of lemon juice (optional)", "§ To finish", "120 g robiola, fresh goat cheese or Greek yogurt", "2 tbsp chopped pistachios", "freshly ground black or pink pepper", "grated zest of 1 unwaxed lemon", "a few fresh mint leaves", "extra-virgin olive oil"]
      },
      steps: {
        it: ["Lava le zucchine e tagliale a rondelle. Cuocile brevemente fino a renderle appena tenere: al vapore per circa 8-10 minuti, oppure al microonde in un contenitore coperto con 1-2 cucchiai d'acqua per circa 6-8 minuti alla massima potenza. Lascia intiepidire per qualche minuto.", "Trasferisci le zucchine nel bicchiere del frullatore insieme all'aglio, alla menta, al ghiaccio, all'olio e a un pizzico di sale. Frulla fino a ottenere una crema liscia e vellutata. Controlla la densità voluta e, se necessario, aggiungi un po' d'acqua fredda. Se desideri una nota più fresca, aggiungi qualche goccia di succo di limone.", "Assaggia, regola di sale e conserva in frigorifero per almeno un'ora.", "Distribuisci la crema nelle fondine o nelle ciotole individuali. Completa ogni porzione con una quenelle di robiola, caprino fresco oppure yogurt greco.", "Aggiungi una spolverata di granella di pistacchio, una macinata di pepe nero o rosa, un po' di scorza grattugiata di limone non trattato, qualche fogliolina di menta fresca e termina con un filo di olio extravergine d'oliva."],
        en: ["Wash the courgettes and slice them into rounds. Cook briefly until just tender: steam for about 8-10 minutes, or microwave in a covered container with 1-2 tbsp of water for about 6-8 minutes at full power. Let them cool slightly for a few minutes.", "Transfer the courgettes to a blender with the garlic, mint, ice, oil and a pinch of salt. Blend until smooth and velvety. Check the consistency and, if needed, add a little cold water. For a fresher note, add a few drops of lemon juice.", "Taste, adjust the salt and chill in the fridge for at least an hour.", "Divide the cream among shallow bowls or individual dishes. Top each portion with a quenelle of robiola, fresh goat cheese or Greek yogurt.", "Add a scattering of chopped pistachios, a grind of black or pink pepper, a little grated unwaxed lemon zest, a few fresh mint leaves and finish with a drizzle of extra-virgin olive oil."]
      },
      note: { it: "Si può servire anche come antipasto, in porzioni più piccole, in bicchierini o ciotoline.", en: "It also works well as a starter, in smaller portions served in little glasses or bowls.", by: "ale" }
    },
    tortacioccolato: {
      published: true,
      day: "01", mIt: "febbraio", mEn: "February",
      date: { it: "1 febbraio 2004", en: "1 February 2004" },
      cat: { it: "dolci", en: "desserts" },
      name: { it: "Torta fondente al cioccolato", en: "Melting chocolate cake" },
      meta: { it: "", en: "" },
      servings: { it: "Per uno stampo a cerniera da 24 cm", en: "For a 24 cm springform tin" },
      time: { it: "Cottura 25-30 min", en: "Baking 25-30 min" },
      img: ["photos/tortacioccolato-fetta.jpg", "photos/tortacioccolato-intera.jpg"],
      pageImg: ["photos/tortacioccolato-sformata.jpg", "photos/tortacioccolato-intera.jpg", "photos/tortacioccolato-fetta.jpg"],
      photo: { it: "[ foto: la torta fondente al cioccolato spolverata di zucchero a velo ]", en: "[ photo: the melting chocolate cake dusted with icing sugar ]" },
      ing: {
        it: ["300 g di cioccolato fondente (50-60%)", "135 g di burro morbido", "135 g di zucchero", "4 uova", "65 g di farina", "65 g di latte", "zucchero a velo per decorare"],
        en: ["300 g dark chocolate (50-60%)", "135 g soft butter", "135 g sugar", "4 eggs", "65 g flour", "65 g milk", "icing sugar to decorate"]
      },
      steps: {
        it: ["Imburra e infarina uno stampo a cerniera da 24 cm di diametro. Preriscalda il forno a 170°C in modalità statica.", "Fai fondere il cioccolato con il latte a bagnomaria, mescolando fino a ottenere una crema liscia e omogenea. Lascia intiepidire.", "Separa i tuorli dagli albumi.", "Lavora il burro con metà dello zucchero fino a ottenere un composto morbido e uniforme.", "Aggiungi i tuorli, uno alla volta, mescolando bene dopo ogni aggiunta.", "Unisci la farina e incorpora il cioccolato fuso con il latte.", "Monta gli albumi a neve ben ferma, aggiungendo gradualmente il restante zucchero.", "Incorpora gli albumi all'impasto in più riprese, mescolando delicatamente dal basso verso l'alto per non smontarli.", "Versa il composto nello stampo e livella la superficie.", "Cuoci nel forno già caldo per 25-30 minuti. Non prolungare troppo la cottura: in superficie dovrà formarsi una sottile crosticina asciutta e leggermente screpolata, mentre l'interno dovrà rimanere morbido e leggermente umido.", "Lascia raffreddare la torta nello stampo per alcuni minuti, quindi apri la cerniera. Il passaggio sul piatto da portata richiede un po' di attenzione: staccala delicatamente dal fondo dello stampo aiutandoti con una spatola o con un coltello lungo. È normale che la crosticina superficiale si rompa leggermente durante questa operazione.", "Lascia raffreddare completamente, quindi spolvera con zucchero a velo prima di servire."],
        en: ["Butter and flour a 24 cm springform tin. Preheat the oven to 170°C conventional setting.", "Melt the chocolate with the milk in a bain-marie, stirring until you get a smooth, even cream. Let it cool slightly.", "Separate the egg yolks from the whites.", "Beat the butter with half the sugar until soft and even.", "Add the yolks, one at a time, mixing well after each addition.", "Add the flour and fold in the melted chocolate and milk mixture.", "Whisk the egg whites to stiff peaks, gradually adding the remaining sugar.", "Fold the egg whites into the batter in several additions, mixing gently from the bottom up so as not to deflate them.", "Pour the batter into the tin and level the surface.", "Bake in the preheated oven for 25-30 minutes. Don't overbake: a thin, dry, slightly cracked crust should form on the surface, while the inside should remain soft and slightly moist.", "Let the cake cool in the tin for a few minutes, then release the springform. Moving it onto the serving plate takes a little care: gently loosen it from the base of the tin using a spatula or a long knife. It's normal for the surface crust to crack slightly during this step.", "Let it cool completely, then dust with icing sugar before serving."]
      },
      notes: [
        { it: "Puoi accompagnare la torta con panna montata o con una crema inglese o, per esagerare, con una salsa al cioccolato.", en: "You can serve the cake with whipped cream or custard or, to go all out, a chocolate sauce." },
        { it: "In alternativa al bagnomaria, il cioccolato può essere sciolto nel forno a microonde insieme al latte: spezzetta il cioccolato in una ciotola adatta al microonde, aggiungi il latte e scalda a potenza media per 30 secondi alla volta, mescolando bene dopo ogni intervallo, finché non si ottiene una crema liscia e omogenea.", en: "As an alternative to the bain-marie, the chocolate can be melted in the microwave together with the milk: break the chocolate into a microwave-safe bowl, add the milk and heat at medium power for 30 seconds at a time, stirring well after each interval, until you get a smooth, even cream.", by: "ale" }
      ]
    }
  }
};
