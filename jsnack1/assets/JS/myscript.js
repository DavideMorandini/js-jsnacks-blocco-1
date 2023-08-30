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


let i = 1

let listNumber = [];

while (i <= 2) {
    const userNumber = Number(prompt('Type a number'));

    if (isNaN(userNumber)) {
        alert('Non hai inserito un numero');
        i--;
    } else {
        listNumber.push(userNumber)
        
    }
    i++
}

console.log(listNumber);

if (listNumber[0] > listNumber [1]) {
    console.log(listNumber[0]);
} else if (listNumber[1] > listNumber [0]) {
    console.log(listNumber[1]);
} else {
    console.log(listNumber[0]);
}


