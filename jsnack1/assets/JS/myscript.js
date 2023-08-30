/*  Snack 1:
    -   L’utente inserisce due numeri in successione, con due prompt.

    -   Il software stampa il maggiore
*/

// // Raccoglimento
// let numberChoice_1 = Number(prompt("Inserisci un numero a piacere"));

// let numberChoice_2 = Number(prompt("Inserisci un numero a piacere"));

// let finalChoice;

// // Elaborazione
// if (numberChoice_1 > numberChoice_2) {
//     finalChoice = numberChoice_1;
//     console.log(numberChoice_1); 

// } else {
//     finalChoice = numberChoice_2;
//     console.log(numberChoice_2);
// }

// // Restituzione
// document.getElementById("my_number").innerHTML = ("Il numero maggiore è" + " " + finalChoice);





// Stesso ragionamento ma con il ciclo While

let = 1;
let listaNumeri = []

while (1 < 2) {
    let numeroUtente = Number(prompt("Inserisci un numero a piacere"));

    if (isNaN(numeroUtente)) {
        alert("Inserisci un numero");
        i--;

    } else {
        listaNumeri.push(numeroUtente);
    }
    i++
}

if (listaNumeri[0] > listaNumeri[1]) {
    console.log("il primo numero è più grande" + listaNumeri[1]); 

} else if (listaNumeri[1] > listaNumeri[0]) {
    console.log("il secondo numero è più grande" + listaNumeri[0]);

} else {
    console.log(("i numeri scelti sono uguali" + listaNumeri[0]));
}


