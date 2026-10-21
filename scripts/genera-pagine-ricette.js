// Genera una paginetta statica per ogni ricetta pubblicata, dentro la cartella "r/".
//
// A cosa serve. WhatsApp, Facebook, Telegram e simili, quando incolli un link,
// mostrano un'anteprima con titolo e foto. Per costruirla leggono i meta tag
// della pagina, ma senza eseguire il JavaScript. Sul sito tutte le ricette sono
// la stessa pagina (Ricetta.dc.html) e i meta tag giusti vengono riscritti dal
// browser in base al ?r=: Google ci arriva perche' esegue il JavaScript, WhatsApp
// no, e mostrerebbe la stessa anteprima generica per ogni ricetta.
//
// Queste paginette risolvono il problema: contengono i meta tag giusti, scritti
// dentro il file, e mandano subito il visitatore alla ricetta vera. Il link da
// condividere diventa quindi, per esempio:
//
//   https://www.lericettedimara.it/r/capesantegratinate.html
//
// Non serve lanciarlo a mano: GitHub lo esegue da solo ogni volta che recipes.js
// viene modificato (vedi .github/workflows/aggiorna-sitemap.yml).
// Se vuoi provarlo sul tuo computer:  node scripts/genera-pagine-ricette.js

const fs = require("fs");
const path = require("path");

const SITO = "https://www.lericettedimara.it";
const RADICE = path.join(__dirname, "..");
const CARTELLA = path.join(RADICE, "r");

// recipes.js assegna i dati a window.MARA_RECIPES: qui simuliamo `window`
// per poterlo leggere fuori dal browser.
global.window = {};
require(path.join(RADICE, "recipes.js"));
const DB = global.window.MARA_RECIPES;

if (!DB || !DB.order || !DB.recipes) {
  console.error("ERRORE: non riesco a leggere le ricette da recipes.js");
  process.exit(1);
}

// I testi finiscono dentro attributi HTML fra virgolette: le virgolette e la
// e commerciale vanno protette, altrimenti spezzerebbero il tag.
function proteggi(testo) {
  return String(testo)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pagina(id, r) {
  const nome = r.name.it;
  const titolo = nome + " — Le ricette di Mara";

  // La riga che compare sotto al titolo nell'anteprima. La scrive Alessandra,
  // nel campo "anteprima" della ricetta dentro recipes.js. Se non c'e', la
  // paginetta non ne mette nessuna: meglio foto e titolo da soli che una frase
  // scritta da una macchina. Niente si perde in cerca: queste paginette
  // rimandano alla ricetta vera, ed e' da li' che Google legge la descrizione.
  const desc = (r.anteprima || "").trim();

  // Sia img sia pageImg possono essere una sola foto o un elenco: per l'anteprima
  // serve una foto sola, e prendo la prima di quelle che la pagina della ricetta
  // mostra davvero (pageImg, quando c'e').
  const prima = (v) => (Array.isArray(v) ? v[0] : v) || null;
  const foto = prima(r.pageImg) || prima(r.img);
  const ricetta = "../Ricetta.dc.html?r=" + id;

  const righe = [
    "<!DOCTYPE html>",
    '<html lang="it">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + proteggi(titolo) + "</title>",
    '<link rel="canonical" href="' + SITO + "/Ricetta.dc.html?r=" + id + '">',
    '<meta property="og:type" content="article">',
    '<meta property="og:site_name" content="Le ricette di Mara">',
    '<meta property="og:locale" content="it_IT">',
    '<meta property="og:title" content="' + proteggi(titolo) + '">',
    '<meta property="og:url" content="' + SITO + "/r/" + id + '.html">',
  ];

  // Le due descrizioni vanno messe insieme o lasciate fuori insieme: molti
  // programmi, non trovando og:description, ripiegano su quella normale.
  if (desc) {
    righe.push('<meta name="description" content="' + proteggi(desc) + '">');
    righe.push('<meta property="og:description" content="' + proteggi(desc) + '">');
  }

  if (foto) {
    righe.push('<meta property="og:image" content="' + SITO + "/" + encodeURI(foto) + '">');
    righe.push('<meta property="og:image:alt" content="' + proteggi(nome) + '">');
    righe.push('<meta name="twitter:card" content="summary_large_image">');
  } else {
    righe.push('<meta name="twitter:card" content="summary">');
  }

  // Stesso doppio rinvio di index.html: il meta refresh per i browser senza
  // JavaScript, location.replace per non lasciare la paginetta nella cronologia.
  // I programmi che costruiscono le anteprime non seguono nessuno dei due: si
  // fermano a leggere i meta tag qui sopra, che e' esattamente quello che serve.
  righe.push(
    '<meta http-equiv="refresh" content="0; url=' + proteggi(ricetta) + '">',
    '<script>location.replace("' + ricetta + '");</script>',
    "</head>",
    "<body>",
    '<p><a href="' + proteggi(ricetta) + '">' + proteggi(nome) + " — continua verso la ricetta</a></p>",
    "</body>",
    "</html>",
    ""
  );

  return righe.join("\n");
}

// La cartella e' interamente generata da questo script: la svuoto, cosi' una
// ricetta rinominata o tolta dalla pubblicazione non lascia in giro un link morto.
fs.mkdirSync(CARTELLA, { recursive: true });
for (const file of fs.readdirSync(CARTELLA)) {
  if (file.endsWith(".html")) fs.unlinkSync(path.join(CARTELLA, file));
}

let fatte = 0;
const saltate = [];

for (const id of DB.order) {
  const r = DB.recipes[id];
  if (!r) continue;
  if (!r.published) {
    saltate.push(id);
    continue;
  }
  fs.writeFileSync(path.join(CARTELLA, id + ".html"), pagina(id, r));
  fatte++;
}

console.log(`cartella r/ aggiornata: ${fatte} paginette per le anteprime.`);
if (saltate.length) {
  console.log(`Non ancora pubblicate, quindi escluse: ${saltate.join(", ")}`);
}
