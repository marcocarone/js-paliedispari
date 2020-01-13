// Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt("inserisci una parola");
var parola = [];
var parolaInversa = [];

function palindroma() {
  for (var i = 0; i < parolaUtente.length; i++) {
    parola.push(parolaUtente[i]);
    console.log(parola);
  }

  for (var i = parolaUtente.length - 1; i >= 0; i--) {
    parolaInversa.push(parolaUtente[i]);
    console.log(parolaInversa);
  }
  for (var i = 0; i < parolaUtente.length; i++) {
    if (parola[i] == parolaInversa[i]) {
      return true;
    } else {
      return false
    }
  }

}

if (palindroma(parolaUtente) == true) {
  document.getElementById("azione").innerHTML = parolaUtente + " è una parola palindroma";
} else {
  document.getElementById("azione").innerHTML = parolaUtente + " Non è una parola palindroma";
}



// RISOLUZIONE ESERCIZIO CON SPLIT E JOIN

// Scrivi una funzione per capire se la parola è palindroma
// var parolaUtente = prompt("inserisci una parola");
//
// if (parolaUtente == invertiStringa(parolaUtente)) {
//   document.getElementById("azione").innerHTML = parolaUtente + " è una parola palindroma";
// } else {
//   document.getElementById("azione").innerHTML = parolaUtente + " Non è una parola palindroma";
// }
//
//
// function invertiStringa(stringa) {
//
//   var splitStringa = stringa.split("");
//   // Questo genera una array con i caratteri della parola
//
//   var invertiArray = splitStringa.reverse();
//   // questo inverte gli indici dell'array
//
//   // Step 3. Use the join() method to join all elements of the array into a string
//   var unisciArray = invertiArray.join("");
//   // unisce gli indici in una stringa
//
//   return unisciArray;
// }
