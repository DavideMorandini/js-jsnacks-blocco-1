/*  
    -   L’utente inserisce due parole in   successione, con due prompt

    -   Il software stampa prima la parola più corta, poi la parola più lunga
*/

// Raccoglimento
let wordChoice_1 = prompt("Inserisci una parola a piacere");

let wordChoice_2 = prompt("Inserisci una parola a piacere");

let finalChoice;

// Elaborazione
if (wordChoice_1.length > wordChoice_2.length) {
    finalChoice = wordChoice_1;
    console.log(finalChoice);

}   else {
    finalChoice = wordChoice_2;
    console.log(finalChoice);
}

// Restituzione
document.getElementById("my_word").innerHTML = ("La parola più lunga è:" + " " + finalChoice);



// Stesso esercizio ma con il ciclo While
let i = 1;
let listaParole = []

while (i <= 2) {
    let parolaUtente = (prompt("Inserisci una parola a piacere"));

    if (listaParole[0] > listaParole[1]) {
        console.log(listaParole[1]); 
        i--;

    } else {
        listaParole.push(parolaUtente);
        i++
    }
}

if (listaParole[0] > listaParole[1]) {
    console.log("la prima parola è più lunga" + listaParole[1]); 

} else if (listaParole[1] > listaNumeri[0]) {
    console.log("la seconda parola è più lunga" + listaParole[0]);

} else {
    console.log(("le parole sono uguali" + listaParole[0]));
}


// if (isNaN(parolaUtente)) {
//     alert("Inserisci un numero");
//     i--;

// } else {
//     listaParole.push(parolaUtente);
//     i++
// }