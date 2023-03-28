// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

// Dit kan op verschillende manieren worden opgelost, maar een veelgebruikte manier is om een for-loop te gebruiken om door de array te gaan en voor elke naam een nieuw koosnaampje te maken door er "-je" achter te plakken. Hier is een voorbeeld van hoe dit kan worden gedaan:



for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + "je";
}

console.log(names); // ["Henkje", "Pietje", "Fredje", "Joopje"]

//In deze code wordt een for-loop gebruikt om door de array heen te gaan,
// te beginnen bij index 0 en te eindigen bij de laatste index (names.length - 1).
// Bij elke iteratie wordt de huidige naam in de array geselecteerd en "-je" erachter geplakt met behulp van de + operator.
// De bijgewerkte naam wordt vervolgens teruggeplaatst in de array op dezelfde index met behulp van de toegewezen operator (=).
//    Na afloop wordt de bijgewerkte array geprint met console.log().



// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];



for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers[i] *= 2; // Vermenigvuldig met 2 als het getal even is
    } else {
        numbers[i] *= 3; // Vermenigvuldig met 3 als het getal oneven is
    }
}

console.log(numbers); // Output: [4, 8, 15, 87, 76]

//Dit script doorloopt elke waarde in de array met behulp van
// een for-lus en controleert of het getal even of oneven is met behulp van de modulo-operator (%).
// Als het getal even is, vermenigvuldigt het script het met 2.
// Als het getal oneven is, vermenigvuldigt het script het met 3.
// Het aangepaste nummer wordt opgeslagen in de oorspronkelijke array op dezelfde index.
// Aan het einde van het script wordt de aangepaste array geprint met behulp van console.log().


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]



for (let i = 0; i < squares.length; i++) {
    const volume = squares[i] * squares[i] * squares[i];
    squares[i] = `Het volume van ${squares[i]} is ${volume}`;
}

console.log(squares);

console.log(squares);

//Dit script gebruikt een for-loop om door elk item in de array heen te gaan.
// Voor elk item berekent het script het volume door de lengte,
// breedte en hoogte allemaal gelijk te stellen aan de waarde van het item (aangezien elk item in de array een vierkant is).
// Vervolgens wordt de waarde in de array overschreven met de zin die het volume bevat, zoals gevraagd in de opdracht.
// Ten slotte wordt de bijgewerkte array afgedrukt met console.log(squares).Dank.
