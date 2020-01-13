// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
var nomeUtente = prompt("Scrivi il tuo nome");
var sceltaUtente = prompt("Scegli pari o dispari");
while (sceltaUtente != "pari" && sceltaUtente != "dispari" ) {
  sceltaUtente = prompt("Per favore, scrivi correttamente la tua scelta: se 'pari' o 'dispari'");
}
var numeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
while (numeroUtente <= 0 || numeroUtente > 5) {
  numeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
}
console.log("numeroUtente " + numeroUtente);
var numeroComputer = generaNumeroRandom(1, 5);
console.log("numeroComputer " + numeroComputer);
var somma = numeroUtente + numeroComputer;
console.log("somma " + somma);

if (somma % 2 == 0) {
  var vincita = "pari";
  verificaVincita(sceltaUtente, vincita);
  document.getElementById("risultato-somma").innerHTML = " La somma dei due numeri è pari";
  console.log("la somma è pari")
} else {
  var vincita = "dispari";
  verificaVincita(sceltaUtente, vincita);
  console.log("la somma è dispari")
  document.getElementById("risultato-somma").innerHTML = " La somma dei due numeri è dispari";

};


function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function verificaVincita(scelta, vincita) {
  if (scelta == vincita ) {
    return document.getElementById("azione").innerHTML = nomeUtente + " hai vinto";
  } else {
    return document.getElementById("azione").innerHTML = nomeUtente + " hai perso";
  }
}


document.getElementById("scelta-utente").innerHTML = sceltaUtente + " è la tua scelta";
document.getElementById("numero-utente").innerHTML = numeroUtente + " è il numero che hai scelto";
document.getElementById("numero-computer").innerHTML = numeroComputer + " è il numero che ha scelto il computer";
document.getElementById("somma").innerHTML = " La somma dei due numeri è " + somma;
