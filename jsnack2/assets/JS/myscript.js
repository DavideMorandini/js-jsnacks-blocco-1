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
let parolaUtente = [];
let parolaLunghezza = [];

while (i <= 2) {

    const parolaUtente = prompt(`Type word number ${i}`);

    if (!isNaN(parolaUtente)) {

        alert("Non hai inserito una parola");

        i--;

    } else {

        const parolaLunghezza = parolaUtente.length;

        parolaUtente.push(parolaUtente);
        parolaLunghezza.push(parolaLunghezza);

        console.log(parolaUtente,parolaLunghezza);
    }

    i++
}

const paroalEl = document.querySelector("my_word");

if (parolaLunghezza[0] > parolaLunghezza[1]) {

    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[1]}<br>`);
    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[0]}<br>`);

} else if (parolaLunghezza[1] > parolaLunghezza[0]) {

    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[0]}<br>`);
    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[1]}<br>`);

} else {
    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[0]}<br>`);
    paroalEl.insertAdjacentHTML("beforeend", `${parolaUtente[1]}<br>`);
}

