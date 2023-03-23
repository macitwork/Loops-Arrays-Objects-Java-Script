// ==========================================
// Opdracht 1b
// Breid je script uit door voor iedere student de score om te rekenen naar een letter en dit in de terminal te printen
// < 60 = F, < 70 = D, <80 = C, <90 B, <100 = A
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// Verwachtte uitkomsten:
// B
// C
// A
// D
// ==========================================

const scores = [82, 65, 95, 55];
const letterGrades = [];

for (let i = 0; i < scores.length; i++) {
    let letterGrade;
    if (scores[i] < 60) {
        letterGrade = 'F';
    } else if (scores[i] < 70) {
        letterGrade = 'D';
    } else if (scores[i] < 80) {
        letterGrade = 'C';
    } else if (scores[i] < 90) {
        letterGrade = 'B';
    } else {
        letterGrade = 'A';
    }
    letterGrades.push(letterGrade);
    console.log(`Student ${i+1}: ${letterGrade}`);
}
//This code will iterate over the scores array, calculate the letter grade for each score according to the provided criteria,
// and store the letter grade in a new letterGrades array. The code also logs the letter grade for each student to the console.
//  This code should work regardless of how many scores are in the array,
//  since it loops through the entire array using the scores.length property.


