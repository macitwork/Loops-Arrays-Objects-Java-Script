// ==========================================
// Opdracht 1a
// Schrijf een script dat voor iedere student in de array de score
// (het getal uit de property "score") in de terminal print

const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

// Verwachtte uitkomsten:
// 83
// 77
// 92
// 66
// ==========================================
scores.forEach(student => {
    console.log(student.score);
});

//Dit script print de score van elke student in de array in de terminal,
//één score per regel. Het gebruik van for...of betekent dat je gemakkelijk
// door de array kunt itereren en de huidige student kunt benaderen met behulp van de variabele student.
// Vervolgens kun je de score property van de student printen met behulp van console.log().






