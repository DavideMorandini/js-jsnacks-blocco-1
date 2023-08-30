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

let finalChoice = true;

while (finalChoice) {
    let numberChoice_1 = Number(prompt("Inserisci un numero a piacere"));

    let numberChoice_2 = Number(prompt("Inserisci un numero a piacere"));

    finalChoice = confirm("vuoi uscire dal ciclo?");
}

if (numberChoice_1 > numberChoice_2) {
    finalChoice = numberChoice_1;
    console.log(numberChoice_1); 

} else {
    finalChoice = numberChoice_2;
    console.log(numberChoice_2);
}

document.getElementById("my_number").innerHTML = ("Il numero maggiore è" + " " + finalChoice);