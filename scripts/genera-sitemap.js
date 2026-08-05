// Genera sitemap.xml leggendo l'elenco delle ricette da recipes.js.
//
// Non serve lanciarlo a mano: GitHub lo esegue da solo ogni volta che
// recipes.js viene modificato (vedi .github/workflows/aggiorna-sitemap.yml).
// Se vuoi provarlo sul tuo computer:  node scripts/genera-sitemap.js

const fs = require("fs");
const path = require("path");

const SITO = "https://www.lericettedimara.it";
const RADICE = path.join(__dirname, "..");

// Le pagine fisse del sito, con la loro importanza relativa (da 0 a 1).
const PAGINE_FISSE = [
  ["/", "1.0"],
  ["/Il%20diario.dc.html", "0.9"],
  ["/Il%20calendario.dc.html", "0.8"],
  ["/La%20nostra%20storia.dc.html", "0.7"],
  ["/Contatti.dc.html", "0.5"],
  ["/Privacy.dc.html", "0.3"],
];

// recipes.js assegna i dati a window.MARA_RECIPES: qui simuliamo `window`
// per poterlo leggere fuori dal browser.
global.window = {};
require(path.join(RADICE, "recipes.js"));
const DB = global.window.MARA_RECIPES;

if (!DB || !DB.order || !DB.recipes) {
  console.error("ERRORE: non riesco a leggere le ricette da recipes.js");
  process.exit(1);
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const [percorso, priorita] of PAGINE_FISSE) {
  xml += `  <url><loc>${SITO}${percorso}</loc><priority>${priorita}</priority></url>\n`;
}

xml += "\n  <!-- le singole ricette (generate automaticamente da recipes.js) -->\n";

let pubblicate = 0;
let saltate = [];

for (const id of DB.order) {
  const ricetta = DB.recipes[id];
  if (!ricetta) continue;
  if (!ricetta.published) {
    saltate.push(id);
    continue;
  }
  xml += `  <url><loc>${SITO}/Ricetta.dc.html?r=${id}</loc><priority>0.8</priority></url>\n`;
  pubblicate++;
}

xml += "</urlset>\n";

fs.writeFileSync(path.join(RADICE, "sitemap.xml"), xml);

console.log(`sitemap.xml aggiornata: ${pubblicate} ricette pubblicate.`);
if (saltate.length) {
  console.log(`Non ancora pubblicate, quindi escluse: ${saltate.join(", ")}`);
}
