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