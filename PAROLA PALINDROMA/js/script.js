// Scrivi una funzione per capire se la parola è palindroma
var parolaUtente = prompt("inserisci una parola");

if (parolaUtente == invertiStringa(parolaUtente)) {
  document.getElementById("azione").innerHTML = parolaUtente + " è una parola palindroma";
} else {
  document.getElementById("azione").innerHTML = parolaUtente + " Non è una parola palindroma";
}


function invertiStringa(stringa) {

  var splitStringa = stringa.split("");
  // Questo genera una array con i caratteri della parola

  var invertiArray = splitStringa.reverse();
  // questo inverte gli indici dell'array

  // Step 3. Use the join() method to join all elements of the array into a string
  var unisciArray = invertiArray.join("");
  // unisce gli indici in una stringa

  return unisciArray;
}
