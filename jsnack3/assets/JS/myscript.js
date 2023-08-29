/* 
    -   Il software deve chiedere per 10 volte all’utente di inserire un numero

    -   Il programma stampa la somma di tutti i numeri inseriti
*/

// Raccoglimento
let finalSum = 0;

// Elaborazione
for (let i = 0; i < 10 ; i++) {

    let askNumber = Number(prompt("Inserisci un numero a piacere"));
    console.log(askNumber);

    finalSum += askNumber;
}

console.log(finalSum);

// Restituzione 
document.getElementById("my_sum").innerHTML = finalSum;
