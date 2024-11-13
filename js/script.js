//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const kmDaPercorrere = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
const eta = parseInt(prompt("Qual è la tua età?"));

let prezzoPerKm = 0.21;
const prezzoTotale = prezzoPerKm * kmDaPercorrere
const scontoUnder18 = 20
const scontoOver65 = 40

console.log('Km da percorrere:', kmDaPercorrere);
console.log('Età del Passeggero:', eta);

if (eta < 18) {
  console.log ("Prezzo Totale con sconto under18: €", prezzoTotale - (prezzoTotale * scontoUnder18 / 100))
} else if (eta > 65) {
  console.log("Prezzo Totale con sconto over65: €", prezzoTotale - (prezzoTotale * scontoOver65 / 100 ))
}
else {
  console.log("Prezzo Totale: €", prezzoTotale)
}