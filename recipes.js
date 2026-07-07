// Archivio condiviso delle ricette di Mara.
// Aggiungere una ricetta = aggiungere una voce qui e il suo id in `order`.
// `published: true` la rende visibile (in home come ultima, e apribile dal diario).
window.MARA_RECIPES = {
  order: ["torta", "tonno", "pasticcio", "pastella", "couscous"],
  recipes: {
    torta: {
      published: true,
      day: "1", mIt: "febbraio", mEn: "February",
      date: { it: "1º febbraio 2004", en: "1 February 2004" },
      cat: { it: "dolci", en: "dessert" },
      name: { it: "Torta al cioccolato", en: "Chocolate cake" },
      meta: { it: "Dolci · forno 170° · ~25 min", en: "Dessert · oven 170° · ~25 min" },
      photo: { it: "[ foto: la torta al cioccolato con lo zucchero a velo ]", en: "[ photo: the chocolate cake dusted with icing sugar ]" },
      ing: {
        it: ["100 g di burro", "100 g di zucchero", "3 uova", "50 g di farina", "220 g di cioccolato fondente", "50 g di latte", "zucchero a velo"],
        en: ["100 g butter", "100 g sugar", "3 eggs", "50 g flour", "220 g dark chocolate", "50 g milk", "icing sugar"]
      },
      steps: {
        it: ["In una terrina sbatti bene il burro con lo zucchero, aggiungi i tuorli, quindi la farina e il cioccolato fatto fondere a bagnomaria con il latte.", "Sbatti gli albumi a neve ben ferma e uniscili delicatamente all'impasto.", "Versa tutto in una tortiera imburrata e infarinata e cuoci per circa 25 minuti in forno già caldo a 170°.", "Sforna la torta e spolverala di zucchero a velo."],
        en: ["In a bowl beat the butter well with the sugar, add the yolks, then the flour and the chocolate melted in a bain-marie with the milk.", "Whisk the whites to stiff peaks and fold them gently into the batter.", "Pour everything into a buttered and floured tin and bake about 25 minutes in an oven preheated to 170°.", "Turn the cake out and dust it with icing sugar."]
      },
      note: { it: "N.B. Puoi accompagnare la torta con panna montata, una crema inglese o, per esagerare, una salsa al cioccolato.", en: "N.B. You can serve the cake with whipped cream, a crème anglaise or — to go all out — a chocolate sauce." }
    },
    tonno: {
      published: true,
      day: "10", mIt: "febbraio", mEn: "February",
      date: { it: "10 febbraio 2004", en: "10 February 2004" },
      cat: { it: "secondi piatti", en: "main course" },
      name: { it: "Tonno con i peperoni", en: "Tuna with peppers" },
      meta: { it: "Secondi · per 4 · ~40 min", en: "Main · serves 4 · ~40 min" },
      photo: { it: "[ foto: il tonno con i peperoni in padella ]", en: "[ photo: the tuna with peppers in the pan ]" },
      ing: {
        it: ["4 fette di tonno fresco", "2 peperoni", "400 g di pomodori maturi", "½ bicchiere di vino bianco", "farina", "3 cucchiai di olio d'oliva", "prezzemolo", "sale e pepe"],
        en: ["4 slices of fresh tuna", "2 peppers", "400 g ripe tomatoes", "½ glass white wine", "flour", "3 tbsp olive oil", "parsley", "salt and pepper"]
      },
      steps: {
        it: ["Lava i peperoni, asciugali e passali sulla fiamma del gas finché la pellicina è tutta bruciacchiata. Chiudili in un sacchetto di carta finché sono tiepidi, poi spellali e togli semi e filamenti.", "Tuffa i pomodori qualche secondo in acqua bollente, passali sotto l'acqua fredda, spellali, privali dei semi e tagliali a pezzettini.", "Scalda l'olio in una padella larga, adagia le fette di tonno infarinate e rosolale dolcemente cinque minuti per parte. Insaporisci con sale e pepe e aggiungi il vino.", "Quando il vino è evaporato, togli le fette di tonno e tienile da parte.", "Nella stessa padella versa i peperoni a listarelle; dopo qualche minuto unisci i pomodori e il prezzemolo. Sala, pepa e cuoci dolcemente circa un quarto d'ora.", "Rimetti il tonno nella padella, spegni il gas e servi subito."],
        en: ["Wash the peppers, dry them and hold them over the gas flame until the skin is charred all over. Close them in a paper bag until lukewarm, then peel and remove seeds and pith.", "Plunge the tomatoes into boiling water for a few seconds, cool under cold water, peel, deseed and chop small.", "Heat the oil in a wide pan, lay in the floured tuna slices and brown gently five minutes per side. Season with salt and pepper and add the wine.", "Once the wine has evaporated, remove the tuna and set aside.", "In the same pan add the peppers cut into strips; after a few minutes add the tomatoes and parsley. Season and cook gently about fifteen minutes.", "Return the tuna to the pan, turn off the heat and serve at once."]
      },
      note: { it: "", en: "" }
    },
    pasticcio: {
      published: true,
      day: "20", mIt: "febbraio", mEn: "February",
      date: { it: "20 febbraio 2004", en: "20 February 2004" },
      cat: { it: "primi piatti", en: "first course" },
      name: { it: "Pasticcio di radicchio", en: "Radicchio pasticcio" },
      meta: { it: "Primi · forno · ~1h 30", en: "First course · baked · ~1h 30" },
      photo: { it: "[ foto: il pasticcio di radicchio gratinato ]", en: "[ photo: the baked radicchio pasticcio ]" },
      ing: {
        it: ["§ Per le crepes", "150 g di farina", "3 uova", "200 g di latte", "30 g di burro fuso", "sale", "§ Per la salsa", "1 kg di radicchio di Treviso", "1 cipolla", "olio", "½ bicchiere di vino", "sale e pepe", "§ Per la besciamella", "50 g di burro", "50 g di farina", "½ l di latte", "noce moscata", "fontina", "parmigiano grattugiato"],
        en: ["§ For the crêpes", "150 g flour", "3 eggs", "200 g milk", "30 g melted butter", "salt", "§ For the sauce", "1 kg Treviso radicchio", "1 onion", "oil", "½ glass wine", "salt and pepper", "§ For the béchamel", "50 g butter", "50 g flour", "½ l milk", "nutmeg", "fontina cheese", "grated parmesan"]
      },
      steps: {
        it: ["Prepara le crepes e la besciamella come di consueto.", "In una padella soffriggi nell'olio la cipolla tritata; appena imbiondisce aggiungi il radicchio di Treviso lavato, asciugato e tagliato a pezzetti. Sala e pepa.", "Quando il radicchio è appassito versa il vino, copri e cuoci a fuoco basso per circa 45 minuti.", "In una pirofila imburrata disponi una crepe, poi uno strato leggerissimo di besciamella, uno di radicchio, parmigiano e fontina a dadini. Continua così (puoi saltare qualche strato di besciamella) e termina con la besciamella.", "Inforna in forno caldo per circa 15 minuti, finché la superficie è gratinata."],
        en: ["Make the crêpes and the béchamel as usual.", "In a pan soften the chopped onion in the oil; as it turns golden add the Treviso radicchio, washed, dried and cut into pieces. Season.", "When the radicchio has wilted add the wine, cover and cook over low heat about 45 minutes.", "In a buttered dish lay a crêpe, then a very thin layer of béchamel, one of radicchio, parmesan and diced fontina. Continue this way (you can skip a béchamel layer here and there) and finish with béchamel.", "Bake in a hot oven about 15 minutes, until the top is golden and gratinated."]
      },
      note: { it: "", en: "" }
    },
    pastella: {
      published: true,
      day: "26", mIt: "febbraio", mEn: "February",
      date: { it: "26 febbraio 2004", en: "26 February 2004" },
      cat: { it: "preparazioni di base", en: "basics" },
      name: { it: "Pastella per friggere", en: "Frying batter" },
      meta: { it: "Base · riposo 1h", en: "Basic · 1h rest" },
      photo: { it: "[ foto: verdure in pastella appena fritte ]", en: "[ photo: freshly fried battered vegetables ]" },
      ing: {
        it: ["150 g di farina", "sale", "1 bicchiere di birra", "1 albume", "1 cucchiaio di grappa (facoltativa)"],
        en: ["150 g flour", "salt", "1 glass of beer", "1 egg white", "1 tbsp grappa (optional)"]
      },
      steps: {
        it: ["Metti in una terrina la farina con un pizzico di sale e un bicchiere e mezzo di acqua tiepida. Mescola bene.", "Aggiungi adagio il bicchiere di birra e lascia riposare per un'ora.", "Incorpora la grappa e l'albume montato a neve.", "Tuffa nella pastella la verdura (carciofi a quarti, radicchio di Treviso, zucchine a listarelle, anelli di cipolla, melanzane a fette, listarelle di peperoni) o la frutta (mele, banane, ananas) e friggi."],
        en: ["Put the flour in a bowl with a pinch of salt and one and a half glasses of warm water. Mix well.", "Slowly add the glass of beer and let it rest for an hour.", "Fold in the grappa and the whisked egg white.", "Dip vegetables (quartered artichokes, Treviso radicchio, courgette strips, onion rings, aubergine slices, pepper strips) or fruit (apples, bananas, pineapple) into the batter and fry."]
      },
      note: { it: "", en: "" }
    },
    couscous: {
      published: true,
      day: "5", mIt: "marzo", mEn: "March",
      date: { it: "5 marzo 2004", en: "5 March 2004" },
      cat: { it: "piatti unici", en: "one-dish" },
      name: { it: "Cous cous con pesto di menta e melanzane", en: "Couscous with mint pesto & aubergine" },
      meta: { it: "Piatto unico · per 4 · ~1h", en: "One-dish · serves 4 · ~1h" },
      photo: { it: "[ foto: il cous cous con menta e melanzane ]", en: "[ photo: the couscous with mint and aubergine ]" },
      ing: {
        it: ["200 g di cous cous precotto", "1 arancia", "1 mazzetto di menta fresca", "50 g di capperi", "100 g di pinoli", "un pizzico di origano", "scorzette di arancia", "1 patata", "1 melanzana", "olio"],
        en: ["200 g pre-cooked couscous", "1 orange", "1 bunch fresh mint", "50 g capers", "100 g pine nuts", "a pinch of oregano", "orange zest strips", "1 potato", "1 aubergine", "oil"]
      },
      steps: {
        it: ["Frulla nel mixer l'arancia pelata a vivo, la menta, i capperi, i pinoli e l'origano.", "Taglia la melanzana a cubetti e tienila mezz'ora sotto sale; asciugala bene e friggila in olio bollente. Friggi anche la patata a cubetti.", "Taglia le scorzette d'arancia a striscioline e falle ammorbidire in acqua calda.", "Sistema il cous cous in un recipiente largo, versa acqua bollente fino a coprirlo e lascia riposare qualche minuto, coperto.", "Quando è morbido e gonfio, sgranalo con una forchetta, unisci un cucchiaio d'olio e condisci con il pesto, le melanzane e le patate. Decora con le scorzette d'arancia."],
        en: ["Blend the peeled orange, the mint, the capers, the pine nuts and the oregano in a mixer.", "Dice the aubergine and keep it under salt for half an hour; dry well and fry in hot oil. Fry the diced potato too.", "Cut the orange zest into thin strips and soften them in warm water.", "Put the couscous in a wide dish, pour over boiling water to cover and let it rest a few minutes, covered.", "Once soft and swollen, fluff with a fork, add a spoonful of oil and dress with the pesto, aubergine and potato. Decorate with the orange zest."]
      },
      note: { it: "", en: "" }
    }
  }
};
