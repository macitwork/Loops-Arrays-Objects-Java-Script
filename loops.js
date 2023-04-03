// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}



// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

for (let i = 3; i < 7; i++) {
    console.log("loop...");
}
console.log("klaar!");



// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let i = 0; i < 10; i++) {
    if (i < 3) {
        console.log(i);
    } else if (i < 6) {
        console.log("> " + i);
    } else {
        console.log(">> " + i);
    }
}
//Deze loop begint bij 0 en loopt tot en met 9 (omdat we < 10 hebben in de loop voorwaarde).
// Binnen de loop gebruiken we een if-else-statement om te bepalen of we het getal op een bepaalde manier moeten loggen.
// Voor getallen kleiner dan 3, loggen we het getal gewoon. Voor getallen tussen 3 en 5,
// loggen we het getal met een enkele > teken ervoor.
// En voor getallen 6 tot en met 9, loggen we het getal met dubbele >> tekens ervoor.




// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van drie als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//In deze loop testen we elke waarde van i met behulp van de modulus operator (%),
// die de rest van de deling van i door een getal berekent. Als de rest nul is voor zowel 3 als 5,
// drukken we "FizzBuzz" af. Als de rest alleen nul is voor 3, drukken we "Fizz" af.
// Als de rest alleen nul is voor 5, drukken we "Buzz" af.
// Als de rest nul is voor geen van beide, drukken we het getal zelf af.


