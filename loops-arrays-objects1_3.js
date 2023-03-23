// ==========================================
// Opdracht 1c
// Breid je script uit door de bijbehorende letter op te slaan in de 'grade'-property van ieder student-object in de array.
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(scores) geeft: [
//  { name: 'Max', score: 83, grade: 'B' },
//  { name: 'David', score: 77, grade: 'C' },
//  { name: 'Khalid', score: 92, grade: 'A' },
//  { name: 'Rianne', score: 66, grade: 'D' }
//  ];
// ==========================================

const scores = [
    { name: 'Max', score: 83 },
    { name: 'David', score: 77 },
    { name: 'Khalid', score: 92 },
    { name: 'Rianne', score: 66 }
];

function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

scores.forEach(function(student) {
    student.grade = assignGrade(student.score);
});

console.log(scores);
//In dit voorbeeld wordt er een functie genaamd assignGrade gedefinieerd die de score van een student omzet
// in een bijbehorende letter. Vervolgens wordt er een forEach-loop gebruikt om over elk student-object in de array te itereren. Binnen deze loop wordt de assignGrade-functie gebruikt om de bijbehorende letter op te slaan in de grade-property van elk student-object.
//
// Als we console.log(scores)
