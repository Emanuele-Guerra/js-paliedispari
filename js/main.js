const parola = prompt("inserisci parola");
    console.log("sto stampando la mia parola: " + parola)

const parolArray = parola.split("");
    console.log("sto stamapando l'array della mia parola: " + parolArray);

let parolaNumero = parola.length
    console.log("Sto stampando la lunghezza dellla mia parola  " + parolaNumero);

let parolaBack = [];
let count = 1;
   
    for (let i = parolaNumero - 1; i >= 0; i--) {
    console.log("sono nel ciclo numero = " + count);
    console.log("parolaBack all'inizio del for, ovvero prima di riasssegnare la variabole  " + parolaBack);
   
    console.log("posizione lettera  " + parola[i]);
  
    parolaBack += parola[i]
    
    console.log("parolaback dopo che ho assegnato la variabile for: " + parolaBack)
    count++;

    
}
if (parola == parolaBack){
    document.getElementById("word").innerHTML = ("la parola "+ parola + " è palindroma")
} else{
    document.getElementById("word").innerHTML = ("la parola " + parola +  " NON è palindroma");
}
