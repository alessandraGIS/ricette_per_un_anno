// Archivio condiviso delle ricette di Mara.
// Aggiungere una ricetta = aggiungere una voce qui e il suo id in `order`.
// `published: true` la rende visibile (in home come ultima, e apribile dal diario).
// `note.by`: "ale" per una nota di Alessandra, altrimenti si assume di Mara.
// `illustration: true` su una ricetta con `img`: niente cornice, sfondo trasparente (per immagini create, non foto).
window.MARA_RECIPES = {
  order: ["pastella", "zucchine"],
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
    }
  }
};
