// Scrive dentro "Il diario.dc.html" un elenco di collegamenti alle ricette,
// racchiuso in un blocco <noscript>.
//
// A cosa serve. Il sito costruisce i collegamenti con JavaScript: nel file che
// arriva al browser i link delle ricette sono ancora segnaposto (href="{{ e.href }}")
// e diventano indirizzi veri solo quando il JavaScript gira. Google il JavaScript
// lo esegue, ma in un secondo momento e dandogli meno peso: in pratica le ricette
// gli risultano raggiungibili solo dalla sitemap, che e' una segnalazione debole
// (dice "esistono", non "sono importanti"). Da qui le pagine che restano a lungo
// "rilevate ma non indicizzate".
//
// Questo elenco e' fatto di collegamenti veri, scritti nel file. Dal diario, che
// e' gia' indicizzato, partono cosi' dei link diretti a ogni ricetta.
//
// Perche' dentro <noscript>. Chi naviga non lo vede mai, perche' il browser lo
// ignora appena il JavaScript parte, e la pagina mostra il suo elenco vero, con
// ricerca e filtri. Lo leggono i motori di ricerca e chi ha il JavaScript
// disattivato, che altrimenti da questo sito non vedrebbe nulla. Il contenuto e'
// lo stesso che il JavaScript produrrebbe: non stiamo mostrando ai motori
// qualcosa di diverso da quello che vede una persona.
//
// Non serve lanciarlo a mano: GitHub lo esegue da solo ogni volta che recipes.js
// viene modificato (vedi .github/workflows/aggiorna-sitemap.yml).
// Se vuoi provarlo sul tuo computer:  node scripts/genera-elenco-ricette.js

const fs = require("fs");
const path = require("path");

const RADICE = path.join(__dirname, "..");
const PAGINA = path.join(RADICE, "Il diario.dc.html");
const INIZIO = "<!-- ELENCO-RICETTE-INIZIO -->";
const FINE = "<!-- ELENCO-RICETTE-FINE -->";

global.window = {};
require(path.join(RADICE, "recipes.js"));
const DB = global.window.MARA_RECIPES;

if (!DB || !DB.order || !DB.recipes) {
  console.error("ERRORE: non riesco a leggere le ricette da recipes.js");
  process.exit(1);
}

function proteggi(testo) {
  return String(testo)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Ordine cronologico del 2004, lo stesso che la pagina mostra.
const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
              "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

const righe = [];
let pubblicate = 0;

DB.order
  .filter((id) => DB.recipes[id] && DB.recipes[id].published)
  .sort((a, b) => {
    const k = (id) => MESI.indexOf(DB.recipes[id].mIt) * 100 + parseInt(DB.recipes[id].day, 10);
    return k(a) - k(b);
  })
  .forEach((id) => {
    const r = DB.recipes[id];
    const data = parseInt(r.day, 10) + " " + r.mIt + " 2004";
    righe.push(
      '        <li><a href="Ricetta.dc.html?r=' + id + '">' +
      proteggi(r.name.it) + "</a> — " + proteggi(data) +
      " · " + proteggi(r.cat.it) + "</li>"
    );
    pubblicate++;
  });

const blocco = [
  INIZIO,
  "      <p>Tutte le ricette pubblicate, in ordine di data:</p>",
  "      <ul>",
  ...righe,
  "      </ul>",
  "      " + FINE,
].join("\n");

let html = fs.readFileSync(PAGINA, "utf8");
const i = html.indexOf(INIZIO);
const j = html.indexOf(FINE);

if (i === -1 || j === -1) {
  console.error('ERRORE: non trovo i segni "' + INIZIO + '" e "' + FINE + '" in "Il diario.dc.html".');
  console.error("Senza quelli non so dove scrivere l'elenco: rimettili e rilancia.");
  process.exit(1);
}

html = html.slice(0, i) + blocco + html.slice(j + FINE.length);
fs.writeFileSync(PAGINA, html);

console.log(`elenco nel diario aggiornato: ${pubblicate} collegamenti.`);
