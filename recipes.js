// Archivio condiviso delle ricette di Mara.
// Aggiungere una ricetta = aggiungere una voce qui, il suo id in `order` (posizione
// cronologica nel 2004, usata da diario e calendario) e in fondo a `recentOrder`
// (ordine di pubblicazione reale, usato per "in evidenza" e "recenti" in home).
// `published: true` la rende visibile (in home come ultima, e apribile dal diario).
// `note.by` (o `notes[i].by`): "ale" per una nota di Alessandra, altrimenti si assume di Mara.
// `notes`: array di note distinte (in ordine), al posto del singolo campo `note`.
// `illustration: true` su una ricetta con `img`: niente cornice, sfondo trasparente (per immagini create, non foto).
// `pageImg`: array di foto usato solo nella pagina della ricetta (Ricetta.dc.html), al posto di `img`; la home continua a usare `img`.
window.MARA_RECIPES = {
  order: ["tortacioccolato", "orecchiettetonno", "caponatabastarda", "pastella", "maionese", "risiebisi", "zucchine", "cotolettepollo", "tzatziki", "insalatapantesca", "insalatarussa"],
  recentOrder: ["pastella", "zucchine", "tortacioccolato", "insalatapantesca", "maionese", "insalatarussa", "risiebisi", "cotolettepollo", "orecchiettetonno", "tzatziki", "caponatabastarda"],
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
      time: { it: "Cottura circa 30 min", en: "Baking about 30 min" },
      img: ["photos/tortacioccolato-fetta.jpg", "photos/tortacioccolato-intera.jpg"],
      pageImg: ["photos/tortacioccolato-sformata.jpg", "photos/tortacioccolato-intera.jpg", "photos/tortacioccolato-fetta.jpg"],
      photo: { it: "[ foto: la torta fondente al cioccolato spolverata di zucchero a velo ]", en: "[ photo: the melting chocolate cake dusted with icing sugar ]" },
      ing: {
        it: ["250 g di cioccolato fondente (50-60%)", "135 g di burro morbido", "135 g di zucchero", "4 uova", "65 g di farina", "65 g di latte", "zucchero a velo per decorare"],
        en: ["250 g dark chocolate (50-60%)", "135 g soft butter", "135 g sugar", "4 eggs", "65 g flour", "65 g milk", "icing sugar to decorate"]
      },
      steps: {
        it: ["Imburra e infarina uno stampo a cerniera da 24 cm di diametro. Preriscalda il forno a 170°C in modalità statica.", "Fai fondere il cioccolato con il latte a bagnomaria, mescolando fino a ottenere una crema liscia e omogenea. Lascia intiepidire.", "Separa i tuorli dagli albumi.", "Lavora il burro con metà dello zucchero fino a ottenere un composto morbido e uniforme.", "Aggiungi i tuorli, uno alla volta, mescolando bene dopo ogni aggiunta.", "Unisci la farina e incorpora il cioccolato fuso con il latte.", "Monta gli albumi a neve ben ferma, aggiungendo gradualmente il restante zucchero.", "Incorpora gli albumi all'impasto in più riprese, mescolando delicatamente dal basso verso l'alto per non smontarli.", "Versa il composto nello stampo e livella la superficie.", "Cuoci nel forno già caldo per circa 30 minuti. Non prolungare troppo la cottura: in superficie dovrà formarsi una sottile crosticina asciutta e leggermente screpolata, mentre l'interno dovrà rimanere morbido e umido.", "Lascia raffreddare la torta nello stampo per alcuni minuti, quindi apri la cerniera. Il passaggio sul piatto da portata richiede un po' di attenzione: staccala delicatamente dal fondo dello stampo aiutandoti con una spatola o con un coltello lungo. È normale che la crosticina superficiale si rompa leggermente durante questa operazione.", "Lascia raffreddare completamente, quindi spolvera con zucchero a velo prima di servire."],
        en: ["Butter and flour a 24 cm springform tin. Preheat the oven to 170°C conventional setting.", "Melt the chocolate with the milk in a bain-marie, stirring until you get a smooth, even cream. Let it cool slightly.", "Separate the egg yolks from the whites.", "Beat the butter with half the sugar until soft and even.", "Add the yolks, one at a time, mixing well after each addition.", "Add the flour and fold in the melted chocolate and milk mixture.", "Whisk the egg whites to stiff peaks, gradually adding the remaining sugar.", "Fold the egg whites into the batter in several additions, mixing gently from the bottom up so as not to deflate them.", "Pour the batter into the tin and level the surface.", "Bake in the preheated oven for about 30 minutes. Don't overbake: a thin, dry, slightly cracked crust should form on the surface, while the inside should remain soft and moist.", "Let the cake cool in the tin for a few minutes, then release the springform. Moving it onto the serving plate takes a little care: gently loosen it from the base of the tin using a spatula or a long knife. It's normal for the surface crust to crack slightly during this step.", "Let it cool completely, then dust with icing sugar before serving."]
      },
      notes: [
        { it: "Puoi accompagnare la torta con panna montata o crema inglese.", en: "You can serve the cake with whipped cream or custard." },
        { it: "In alternativa al bagnomaria, il cioccolato può essere sciolto nel forno a microonde insieme al latte: spezzetta il cioccolato in una ciotola adatta al microonde, aggiungi il latte e scalda a potenza media per 30 secondi alla volta, mescolando bene dopo ogni intervallo, finché non si ottiene una crema liscia e omogenea.", en: "As an alternative to the bain-marie, the chocolate can be melted in the microwave together with the milk: break the chocolate into a microwave-safe bowl, add the milk and heat at medium power for 30 seconds at a time, stirring well after each interval, until you get a smooth, even cream.", by: "ale" }
      ]
    },
    orecchiettetonno: {
      published: true,
      day: "06", mIt: "febbraio", mEn: "February",
      date: { it: "6 febbraio 2004", en: "6 February 2004" },
      cat: { it: "primi piatti", en: "first course" },
      name: { it: "Orecchiette al tonno, zucchine e scorza di limone", en: "Orecchiette with tuna, courgettes and lemon zest" },
      meta: { it: "", en: "" },
      servings: { it: "Per 4 persone", en: "Serves 4" },
      img: "photos/orecchiettetonno.jpg",
      photo: { it: "[ foto: le orecchiette al tonno e zucchine nella padella ]", en: "[ photo: the orecchiette with tuna and courgettes in the pan ]" },
      ing: {
        it: ["350 g di orecchiette", "300 g di filetto di tonno fresco", "600 g di zucchine", "scorza di 1 limone non trattato", "2 foglie di alloro", "1 spicchio d'aglio", "1 dl di vino bianco", "olio extravergine d'oliva", "sale", "pepe", "prezzemolo abbondante"],
        en: ["350 g orecchiette", "300 g fresh tuna fillet", "600 g courgettes", "zest of 1 unwaxed lemon", "2 bay leaves", "1 garlic clove", "1 dl white wine", "extra-virgin olive oil", "salt", "pepper", "plenty of parsley"]
      },
      steps: {
        it: ["Metti sul fuoco l'acqua per la pasta e salala.", "Taglia a cubetti il tonno e le zucchine.", "Scalda un cucchiaio d'olio in una padella e fai saltare il tonno a fuoco vivo con l'alloro, giusto un paio di minuti: deve colorirsi fuori e restare rosato dentro.", "Insaporisci con sale e pepe, bagna con il vino, lascia sfumare e spegni subito. Elimina le foglie di alloro.", "In un'altra padella, abbastanza grande da contenere anche la pasta, scalda due cucchiai d'olio con l'aglio. Quando è imbiondito gettalo via e unisci le zucchine.", "Cuocile 10 minuti a fuoco vivace mescolando ogni tanto, poi sala: salandole solo alla fine restano sode invece di rilasciare acqua.", "Lessa le orecchiette, preleva un mestolo di acqua di cottura e scolale un minuto prima del tempo.", "Falle saltare un minuto nella padella con le zucchine, aggiungendo l'acqua di cottura se serve a legare.", "Togli dal fuoco, unisci il tonno con il suo fondo, la scorza di limone grattugiata e il prezzemolo tritato. Mescola, completa con un filo d'olio extravergine a crudo e servi subito."],
        en: ["Put the pasta water on to boil and salt it.", "Cut the tuna and courgettes into cubes.", "Heat a tablespoon of oil in a pan and sear the tuna over high heat with the bay leaves, just a couple of minutes: it should brown outside and stay pink inside.", "Season with salt and pepper, splash in the wine, let it evaporate and turn off the heat straight away. Remove the bay leaves.", "In another pan, large enough to hold the pasta too, heat two tablespoons of oil with the garlic. Once golden, discard it and add the courgettes.", "Cook them for 10 minutes over high heat, stirring occasionally, then salt them: salting only at the end keeps them firm instead of releasing water.", "Boil the orecchiette, scoop out a ladle of cooking water and drain them a minute before they're done.", "Toss them for a minute in the pan with the courgettes, adding the cooking water if needed to help bind everything together.", "Remove from the heat, add the tuna with its juices, the grated lemon zest and the chopped parsley. Toss, finish with a drizzle of raw extra-virgin olive oil and serve immediately."]
      },
      note: { it: "Attenzione a non cuocere troppo il tonno, che diventerebbe secco: deve essere appena scottato.", en: "Be careful not to overcook the tuna, or it will turn dry: it should be just seared.", by: "ale" }
    },
    tzatziki: {
      published: true,
      day: "06", mIt: "luglio", mEn: "July",
      date: { it: "6 luglio 2004", en: "6 July 2004" },
      cat: { it: "salse", en: "sauces" },
      name: { it: "Tzatziki", en: "Tzatziki" },
      meta: { it: "", en: "" },
      time: { it: "Riposo 1 h", en: "Rest 1 h" },
      img: "photos/tzatziki.jpg",
      photo: { it: "[ foto: lo tzatziki nella ciotola con le foglie di menta ]", en: "[ photo: the tzatziki in a bowl with mint leaves ]" },
      ing: {
        it: ["300 g di yogurt greco", "200 g di cetriolo", "1 spicchio d'aglio", "menta fresca", "aneto fresco o, in alternativa, finocchietto selvatico fresco", "olio extravergine d'oliva", "sale"],
        en: ["300 g Greek yogurt", "200 g cucumber", "1 garlic clove", "fresh mint", "fresh dill or, alternatively, fresh wild fennel", "extra-virgin olive oil", "salt"]
      },
      steps: {
        it: ["Grattugia il cetriolo con la buccia, usando i fori grossi della grattugia. Salalo e lascialo riposare 15 minuti in un colino.", "Strizzalo bene con le mani: deve perdere tutta l'acqua, altrimenti la salsa viene liquida.", "Schiaccia l'aglio e mescolalo allo yogurt.", "Unisci il cetriolo strizzato e le erbe tritate.", "Mescola, assaggia e regola di sale.", "Copri e lascia riposare in frigorifero almeno un'ora, perché i sapori si leghino.", "Al momento di servire completa con un filo d'olio extravergine a crudo."],
        en: ["Grate the unpeeled cucumber on the coarse side of a grater. Salt it and let it drain in a colander for 15 minutes.", "Squeeze it well with your hands: it has to lose all its water, otherwise the sauce turns runny.", "Crush the garlic and stir it into the yogurt.", "Add the squeezed cucumber and the chopped herbs.", "Mix, taste and adjust the salt.", "Cover and chill for at least an hour, so the flavours come together.", "Just before serving, finish with a drizzle of raw extra-virgin olive oil."]
      },
      notes: [
        { it: "Io aggiungo anche un cucchiaio di aceto di vino bianco insieme alle erbe: dà una punta di acidità che a me piace molto.", en: "I also add a tablespoon of white wine vinegar along with the herbs: it gives a touch of acidity that I really like.", by: "ale" },
        { it: "Questa salsa greca è per noi indissolubilmente legata all'isola di Skyros, dove nel 1987, quando ero ancora una ragazzina, facemmo una vacanza meravigliosa e l'assaggiammo per la prima volta. A Skyros non siamo più tornate, ma da allora lo tzatziki è spesso sulla nostra tavola.", en: "For us this Greek sauce is inseparable from the island of Skyros, where in 1987, when I was still a girl, we had a wonderful holiday and tasted it for the first time. We never went back to Skyros, but since then tzatziki has often been on our table.", by: "ale" }
      ]
    },
    caponatabastarda: {
      published: true,
      day: "22", mIt: "febbraio", mEn: "February",
      date: { it: "22 febbraio 2004", en: "22 February 2004" },
      cat: { it: "contorni", en: "side dishes" },
      name: { it: "Caponata bastarda", en: "Cheat's caponata" },
      meta: { it: "", en: "" },
      servings: { it: "Per una teglia rettangolare da 40 x 25 cm", en: "For a 40 x 25 cm rectangular tin" },
      time: { it: "Cottura circa 1 h", en: "Baking about 1 h" },
      img: "photos/caponatabastarda.jpg",
      photo: { it: "[ foto: la caponata bastarda nel piatto da portata ]", en: "[ photo: the cheat's caponata on the serving dish ]" },
      ing: {
        it: ["800 g di melanzane (4 lunghe se di stagione, oppure 3 tonde fuori stagione)", "200 g di sedano (circa 4 coste)", "150 g di cipolla", "300 g di pomodori piccadilly (o datterini o ciliegini)", "50 g di uvetta, meglio se cilena", "30 g di pinoli", "30 g di capperi sott'aceto", "50 g di olive denocciolate (facoltative)", "2 cucchiai di zucchero", "2 cucchiai di aceto", "qualche foglia di basilico", "60 g di olio extravergine d'oliva", "sale"],
        en: ["800 g aubergines (4 long ones in season, or 3 round ones out of season)", "200 g celery (about 4 sticks)", "150 g onion", "300 g piccadilly tomatoes (or datterini or cherry tomatoes)", "50 g raisins, preferably Chilean", "30 g pine nuts", "30 g capers in vinegar", "50 g pitted olives (optional)", "2 tbsp sugar", "2 tbsp vinegar", "a few basil leaves", "60 g extra-virgin olive oil", "salt"]
      },
      steps: {
        it: ["Taglia le melanzane a tocchetti, trita grossolanamente la cipolla, taglia il sedano a pezzettini e i pomodori a metà.", "Mettili in una pirofila unta d'olio insieme all'uvetta, ai pinoli, ai capperi, alle olive se ti piacciono, al sale, allo zucchero, all'aceto e al basilico.", "Aggiungi l'olio rimasto e mescola bene.", "Metti in forno a circa 180°C e mescola ogni tanto: dopo circa un'ora la caponata dovrebbe essere pronta."],
        en: ["Cut the aubergines into chunks, roughly chop the onion, cut the celery into small pieces and halve the tomatoes.", "Put them in an oiled baking dish together with the raisins, the pine nuts, the capers, the olives if you like them, the salt, the sugar, the vinegar and the basil.", "Add the remaining oil and mix well.", "Bake at about 180°C, stirring now and then: after about an hour the caponata should be ready."]
      },
      notes: [
        { it: "\"Bastarda\" perché è una versione semplificata e un po' blasfema della ricetta tradizionale. Velocissima da fare: si inforna tutto insieme, basta mescolare ogni tanto e, soprattutto, non si frigge.", en: "\"Bastarda\" because it's a simplified and slightly blasphemous version of the traditional recipe. Very quick to make: everything goes into the oven together, you just stir now and then and, above all, nothing is fried." },
        { it: "D'estate uso le melanzane lunghe e tengo la buccia, che è sottile e tenera e aiuta i tocchetti a non sfaldarsi durante l'ora di forno; d'inverno uso quelle tonde, che hanno la buccia più spessa e coriacea, e le sbuccio. Le olive invece io non le metto, perché, a mio gusto personale, si sentono troppo.", en: "In summer I use the long aubergines and keep the skin on: it is thin and tender and helps the pieces hold together through the hour in the oven; in winter I use the round ones, whose skin is thicker and tougher, and I peel them. The olives I leave out, because to my own taste they come through too strongly." }
      ]
    },
    clafoutis: {
      published: false,
      day: "10", mIt: "luglio", mEn: "July",
      date: { it: "10 luglio 2004", en: "10 July 2004" },
      cat: { it: "dolci", en: "desserts" },
      name: { it: "Clafoutis alle ciliegie", en: "Cherry clafoutis" },
      meta: { it: "", en: "" },
      servings: { it: "Per una pirofila da 24 cm", en: "For a 24 cm baking dish" },
      time: { it: "Cottura 35-40 min", en: "Baking 35-40 min" },
      photo: { it: "[ foto: il clafoutis alle ciliegie appena sfornato ]", en: "[ photo: the cherry clafoutis fresh out of the oven ]" },
      ing: {
        it: ["400 g di ciliegie", "3 uova", "80 g di zucchero", "30 g di farina 00", "60 g di fecola di patate", "100 ml di latte", "100 ml di panna fresca", "1 cucchiaio di brandy", "scorza grattugiata di 1 limone non trattato", "1 pizzico di sale", "burro per la pirofila", "zucchero a velo (facoltativo)"],
        en: ["400 g cherries", "3 eggs", "80 g sugar", "30 g plain flour (type 00)", "60 g potato starch", "100 ml milk", "100 ml fresh cream", "1 tbsp brandy", "grated zest of 1 unwaxed lemon", "1 pinch of salt", "butter for the baking dish", "icing sugar (optional)"]
      },
      steps: {
        it: ["Preriscalda il forno a 180 °C in modalità statica.", "Imburra una pirofila in vetro o ceramica da 24 cm e distribuisci sul fondo le ciliegie denocciolate.", "In una ciotola sbatti le uova con lo zucchero senza montarle. Aggiungi la farina, la fecola, il pizzico di sale e la scorza grattugiata del limone. Versa quindi il latte, la panna e il brandy, mescolando fino a ottenere una pastella liscia e senza grumi.", "Versa delicatamente il composto sulle ciliegie e cuoci in forno per 35-40 minuti, finché la superficie sarà ben dorata e leggermente gonfia.", "Lascia intiepidire prima di servire. Il clafoutis è ottimo sia tiepido sia completamente freddo, con una leggera spolverata di zucchero a velo."],
        en: ["Preheat the oven to 180 °C conventional setting.", "Butter a 24 cm glass or ceramic baking dish and spread the pitted cherries over the bottom.", "In a bowl, beat the eggs with the sugar without whipping them. Add the flour, the potato starch, the pinch of salt and the grated lemon zest. Then pour in the milk, the cream and the brandy, mixing until you get a smooth, lump-free batter.", "Gently pour the batter over the cherries and bake for 35-40 minutes, until the top is nicely golden and slightly puffed.", "Let it cool slightly before serving. The clafoutis is delicious both warm and completely cold, with a light dusting of icing sugar."]
      },
      notes: [
        { it: "Questa ricetta si presta anche ad altre varietà di frutta. Utilizza mirtilli, fragole, albicocche e pesche, tagliate a pezzi se necessario, adattando la quantità di zucchero in base alla loro dolcezza.", en: "This recipe also works well with other kinds of fruit. Use blueberries, strawberries, apricots or peaches, cut into pieces if needed, adjusting the amount of sugar to their sweetness." },
        { it: "Nella ricetta tradizionale francese le ciliegie vengono lasciate con il nocciolo, che durante la cottura rilascia un delicato aroma di mandorla. Noi vi consigliamo di denocciolarle perché non vogliamo che i vostri denti corrano rischi inutili.", en: "In the traditional French recipe the cherries are left with their pits, which release a delicate almond aroma during baking. We recommend pitting them, because we don't want your teeth taking any unnecessary risks.", by: "ale" }
      ]
    },
    insalatapantesca: {
      published: true,
      day: "24", mIt: "agosto", mEn: "August",
      date: { it: "24 agosto 2004", en: "24 August 2004" },
      cat: { it: "contorni", en: "side dishes" },
      name: { it: "Insalata pantesca", en: "Pantesca salad" },
      meta: { it: "", en: "" },
      servings: { it: "Per 4 persone", en: "Serves 4" },
      time: { it: "Riposo 15-20 min", en: "Rest 15-20 min" },
      img: "photos/pantesca.jpg",
      photo: { it: "[ foto: l'insalata pantesca appena condita ]", en: "[ photo: the pantesca salad freshly dressed ]" },
      ing: {
        it: ["600 g di patate", "500 g di pomodori maturi", "1 cipolla", "1 cucchiaio di capperi", "abbondante basilico fresco (oppure origano, a piacere)", "3-4 cucchiai di olio extravergine di oliva", "1-2 cucchiai di aceto di vino bianco, a piacere", "sale", "pepe"],
        en: ["600 g potatoes", "500 g ripe tomatoes", "1 onion", "1 tbsp capers", "plenty of fresh basil (or oregano, to taste)", "3-4 tbsp extra-virgin olive oil", "1-2 tbsp white wine vinegar, to taste", "salt", "pepper"]
      },
      steps: {
        it: ["Cuoci le patate. Puoi lessarle intere con la buccia oppure, per velocizzare la preparazione, sbucciarle, tagliarle a cubetti e cuocerle nel forno a microonde fino a quando saranno tenere.", "Lava i pomodori e tagliali a cubetti.", "Affetta finemente la cipolla.", "Riunisci in una terrina le patate, i pomodori, la cipolla, i capperi e abbondante basilico spezzettato a mano. Se preferisci, puoi sostituire il basilico con l'origano.", "Condisci con olio extravergine di oliva, aceto, sale e pepe, quindi mescola delicatamente.", "L'insalata pantesca è ottima servita leggermente fresca e preparata con un po' di anticipo, così che le patate assorbano il condimento e tutti i sapori si amalgamino."],
        en: ["Cook the potatoes. You can boil them whole with the skin on, or, to save time, peel them, cut them into cubes and microwave them until tender.", "Wash the tomatoes and cut them into cubes.", "Thinly slice the onion.", "Combine the potatoes, tomatoes, onion, capers and plenty of hand-torn basil in a bowl. If you prefer, you can replace the basil with oregano.", "Dress with extra-virgin olive oil, vinegar, salt and pepper, then mix gently.", "Pantesca salad is best served slightly chilled and made a little ahead of time, so the potatoes can soak up the dressing and all the flavours blend together."]
      },
      notes: [
        { it: "Se utilizzi capperi sotto sale, lasciali in ammollo per qualche minuto, quindi sciacquali sotto l'acqua corrente e scolali bene prima di aggiungerli all'insalata.", en: "If using salt-packed capers, soak them for a few minutes, then rinse them under running water and drain well before adding them to the salad.", by: "ale" },
        { it: "Se lo desideri, puoi aggiungere una manciata di olive denocciolate, presenti in molte versioni tradizionali dell'insalata pantesca.", en: "If you like, you can add a handful of pitted olives, which appear in many traditional versions of pantesca salad.", by: "ale" }
      ]
    },
    maionese: {
      published: true,
      day: "05", mIt: "aprile", mEn: "April",
      date: { it: "5 aprile 2004", en: "5 April 2004" },
      cat: { it: "salse", en: "sauces" },
      name: { it: "Maionese", en: "Mayonnaise" },
      meta: { it: "", en: "" },
      time: { it: "Pronta in 2 minuti", en: "Ready in 2 minutes" },
      img: "photos/maionese.jpg",
      photo: { it: "[ foto: la maionese appena fatta in una ciotola ]", en: "[ photo: the freshly made mayonnaise in a bowl ]" },
      ing: {
        it: ["1 uovo intero", "210 g di olio di semi", "1 punta di senape", "qualche goccia di succo di limone", "1 pizzico di sale"],
        en: ["1 whole egg", "210 g vegetable oil", "1 dab of mustard", "a few drops of lemon juice", "1 pinch of salt"]
      },
      steps: {
        it: ["Tira fuori l'uovo dal frigorifero qualche ora prima, così che sia a temperatura ambiente.", "Metti nel bicchiere del frullatore a immersione l'uovo, l'olio, la senape, il succo di limone e il sale.", "Appoggia il frullatore sul fondo del contenitore e azionalo senza muoverlo per circa 40 secondi. Quando la maionese inizia ad addensarsi, solleva lentamente il frullatore fino a incorporare tutto l'olio.", "In circa un minuto e mezzo la maionese sarà pronta."],
        en: ["Take the egg out of the fridge a few hours ahead, so it's at room temperature.", "Put the egg, oil, mustard, lemon juice and salt into the immersion blender's jug.", "Rest the blender on the bottom of the container and run it without moving it for about 40 seconds. When the mayonnaise starts to thicken, slowly lift the blender until all the oil is incorporated.", "The mayonnaise will be ready in about a minute and a half."]
      },
      note: { it: "La punta di senape è facoltativa, ma aiuta a stabilizzare l'emulsione e dona un gusto più deciso.", en: "The dab of mustard is optional, but it helps stabilise the emulsion and gives a stronger flavour." }
    },
    insalatarussa: {
      published: true,
      day: "09", mIt: "settembre", mEn: "September",
      date: { it: "9 settembre 2004", en: "9 September 2004" },
      cat: { it: "contorni", en: "side dishes" },
      name: { it: "Insalata russa", en: "Russian salad" },
      meta: { it: "", en: "" },
      img: "photos/insalatarussa.jpg",
      photo: { it: "[ foto: l'insalata russa in una ciotola ]", en: "[ photo: the Russian salad in a bowl ]" },
      ing: {
        it: ["200 g di carote", "250 g di patate", "100 g di pisellini surgelati", "5-10 cetriolini sottaceto", "150-200 g di maionese", "sale"],
        en: ["200 g carrots", "250 g potatoes", "100 g frozen peas", "5-10 pickled gherkins", "150-200 g mayonnaise", "salt"]
      },
      steps: {
        it: ["Pela le patate e le carote e tagliale a cubetti di circa 1 cm, cercando di ottenere pezzi della stessa dimensione.", "Cuoci separatamente patate e carote in acqua leggermente salata fino a quando saranno tenere ma ancora compatte. Scolale con delicatezza.", "Cuoci i pisellini in poca acqua bollente per 3-4 minuti, quindi scolali.", "Distribuisci le verdure su un vassoio o in una ciotola ampia e lasciale raffreddare completamente.", "Taglia i cetriolini a cubetti molto piccoli e uniscili alle verdure.", "Aggiungi un pizzico di sale, incorpora la maionese poco alla volta e mescola delicatamente, in modo da non rompere le patate."],
        en: ["Peel the potatoes and carrots and cut them into roughly 1 cm cubes, trying to keep the pieces the same size.", "Cook the potatoes and carrots separately in lightly salted water until tender but still firm. Drain them gently.", "Cook the peas in a little boiling water for 3-4 minutes, then drain.", "Spread the vegetables on a tray or in a wide bowl and let them cool completely.", "Cut the gherkins into very small cubes and add them to the vegetables.", "Add a pinch of salt, fold in the mayonnaise a little at a time and mix gently, so as not to break up the potatoes."]
      },
      note: { it: "Le quantità che trovi qui sono solo indicative: assaggia, fidati del tuo gusto e regolale pure come più ti piace. L'insalata russa, in fondo, è una ricetta libera e di recupero: puoi arricchirla con altre verdure lesse che hai in casa, come fagiolini o zucchine, adattandola ai gusti di chi la mangia e a quello che trovi in dispensa.", en: "The quantities here are just a guide: taste as you go, trust your own palate and feel free to adjust them however you like. Russian salad is, after all, a free-spirited, use-it-up kind of dish: feel free to enrich it with other boiled vegetables you have on hand, like green beans or courgettes, adapting it to whoever's eating and to whatever's in your pantry." }
    },
    cotolettepollo: {
      published: true,
      day: "28", mIt: "giugno", mEn: "June",
      date: { it: "28 giugno 2004", en: "28 June 2004" },
      cat: { it: "secondi piatti", en: "main course" },
      name: { it: "Cotolette di pollo estive", en: "Summer chicken cutlets" },
      meta: { it: "", en: "" },
      servings: { it: "Per 4 persone", en: "Serves 4" },
      img: "photos/cotolettepollo.jpg",
      photo: { it: "[ foto: le cotolette di pollo con rucola e pomodori ]", en: "[ photo: the chicken cutlets with rocket and tomatoes ]" },
      ing: {
        it: ["4 cotolette di pollo (circa 600 g)", "1 uovo", "circa 100 g di pangrattato", "olio di semi per friggere", "sale", "§ Per il condimento", "80 g di rucola (oppure valeriana)", "250 g di pomodori maturi", "qualche foglia di basilico", "1 piccolo spicchio d'aglio", "olio extravergine d'oliva"],
        en: ["4 chicken cutlets (about 600 g)", "1 egg", "about 100 g breadcrumbs", "vegetable oil, for frying", "salt", "§ For the dressing", "80 g rocket (or lamb's lettuce)", "250 g ripe tomatoes", "a few basil leaves", "1 small garlic clove", "extra-virgin olive oil"]
      },
      steps: {
        it: ["Se necessario, batti leggermente le cotolette fino a ottenere uno spessore uniforme, senza renderle troppo sottili.", "Taglia i pomodori a piccoli cubetti e raccoglili in una ciotola con il basilico spezzettato e lo spicchio d'aglio intero. Aggiungi un pizzico di sale e lascia insaporire per una decina di minuti, quindi elimina l'aglio.", "Sbatti l'uovo con una forchetta e aggiungi un pizzico di sale.", "Passa ogni cotoletta prima nell'uovo e poi nel pangrattato, facendolo aderire bene su entrambi i lati.", "Friggi le cotolette in un'ampia padella con abbondante olio di semi, senza sovrapporle, finché saranno ben dorate e completamente cotte.", "Scolale su carta assorbente e salale ancora calde.", "Condisci la rucola con poco sale e un filo di olio extravergine d'oliva e disponila sul fondo del piatto da portata. Adagia sopra le cotolette e completa distribuendo i pomodori con il loro condimento."],
        en: ["If needed, gently pound the cutlets to an even thickness, without making them too thin.", "Cut the tomatoes into small cubes and place them in a bowl with the torn basil and the whole garlic clove. Add a pinch of salt and let them sit for about ten minutes, then remove the garlic.", "Beat the egg with a fork and add a pinch of salt.", "Coat each cutlet first in the egg and then in the breadcrumbs, pressing gently so it sticks well on both sides.", "Fry the cutlets in a large pan with plenty of vegetable oil, without overlapping them, until golden and fully cooked.", "Drain them on kitchen paper and salt them while still hot.", "Dress the rocket with a little salt and a drizzle of extra-virgin olive oil and arrange it on the bottom of the serving plate. Lay the cutlets on top and finish by scattering the tomatoes with their dressing over everything."]
      }
    },
    risiebisi: {
      published: true,
      day: "06", mIt: "aprile", mEn: "April",
      date: { it: "6 aprile 2004", en: "6 April 2004" },
      cat: { it: "primi piatti", en: "first course" },
      name: { it: "Risi e bisi", en: "Risi e bisi (rice and peas)" },
      meta: { it: "", en: "" },
      servings: { it: "Per 4 persone", en: "Serves 4" },
      time: { it: "Cottura 25-30 minuti", en: "Cooking 25-30 minutes" },
      img: "photos/risiebisi.jpg",
      photo: { it: "[ foto: i risi e bisi appena mantecati ]", en: "[ photo: the freshly creamed risi e bisi ]" },
      ing: {
        it: ["700 g di piselli freschi", "350 g di riso Carnaroli", "2 cipollotti freschi oppure 1 cipolla", "2 cucchiai di olio extravergine di oliva", "40 g di burro", "circa 1,2 l di brodo vegetale", "50 g di Parmigiano Reggiano grattugiato", "abbondante prezzemolo tritato", "sale"],
        en: ["700 g fresh peas", "350 g Carnaroli rice", "2 fresh spring onions or 1 onion", "2 tbsp extra-virgin olive oil", "40 g butter", "about 1.2 l vegetable stock", "50 g grated Parmigiano Reggiano", "plenty of chopped parsley", "salt"]
      },
      steps: {
        it: ["Scalda il brodo e mantienilo caldo.", "In una casseruola fai appassire dolcemente nell'olio i cipollotti affettati, senza lasciarli colorire. Aggiungi i piselli, sala leggermente e cuocili per 10-15 minuti, bagnandoli con un po' di brodo caldo.", "Preleva qualche cucchiaio di piselli e frullali subito con uno o due cubetti di ghiaccio: il ghiaccio aiuta a preservarne il colore brillante, mentre la crema renderà il piatto ancora più vellutato. Tieni da parte la crema ottenuta.", "Nel frattempo aggiungi il riso ai piselli e lascialo tostare per circa un minuto, mescolando bene.", "Prosegui la cottura aggiungendo il brodo poco alla volta, man mano che viene assorbito.", "Un minuto prima di terminare la cottura incorpora la crema di piselli e mescola bene. Se necessario aggiungi ancora un po' di brodo caldo: i risi e bisi devono rimanere morbidi e ben all'onda.", "Spegni il fuoco, aggiungi il burro, il Parmigiano e abbondante prezzemolo tritato. Manteca energicamente, lascia riposare un minuto e servi subito."],
        en: ["Heat the stock and keep it hot.", "In a saucepan, gently sweat the sliced spring onions in the oil, without letting them colour. Add the peas, season lightly with salt and cook for 10-15 minutes, moistening with a little hot stock.", "Set aside a few spoonfuls of peas and blend them right away with one or two ice cubes: the ice helps keep their bright colour, while the purée will make the dish even creamier. Set the purée aside.", "Meanwhile, add the rice to the peas and toast it for about a minute, stirring well.", "Continue cooking, adding the stock a little at a time as it is absorbed.", "A minute before the rice is done, stir in the pea purée and mix well. If needed, add a little more hot stock: risi e bisi should stay soft and loose, almost soupy.", "Turn off the heat, add the butter, the Parmigiano and plenty of chopped parsley. Beat vigorously to cream it, let it rest for a minute and serve immediately."]
      },
      notes: [
        { it: "Fuori stagione, puoi utilizzare pisellini surgelati di buona qualità. In questo caso è sufficiente cuocerli per circa 5 minuti prima di aggiungere il riso. Sconsiglio invece l'utilizzo dei piselli in scatola, che altererebbero consistenza e sapore del piatto.", en: "Out of season, you can use good-quality frozen peas. In that case, about 5 minutes of cooking before adding the rice is enough. I wouldn't recommend canned peas, though, as they would alter the texture and flavour of the dish." },
        { it: "Risi e bisi è uno dei piatti più rappresentativi della tradizione veneta. A metà strada tra un risotto e una minestra, veniva preparato in primavera con i primi piselli freschi ed è ancora oggi uno dei grandi classici della cucina regionale. Questa versione ne è una nostra rilettura moderna, con la crema di piselli frullati a dare più corpo e colore al piatto.", en: "Risi e bisi is one of the most iconic dishes of Venetian tradition. Halfway between a risotto and a soup, it used to be made in spring with the season's first fresh peas, and it's still one of the great classics of the region's cuisine. This version is our modern take on it, with a blended pea purée adding extra body and colour to the dish.", by: "ale" },
        { it: "Mio nonno paterno aggiungeva al brodo anche i baccelli dei piselli: rilasciano il loro aroma nel brodo, che a sua volta esalta il sapore di pisello in tutto il risotto. Se vuoi fare lo stesso, utilizza esclusivamente baccelli di piselli biologici, ben lavati.", en: "My paternal grandfather used to add the pea pods to the stock too: they release their aroma into the stock, which in turn brings out the pea flavour throughout the whole risotto. If you'd like to do the same, use only well-washed organic pea pods.", by: "ale" }
      ]
    }
  }
};

