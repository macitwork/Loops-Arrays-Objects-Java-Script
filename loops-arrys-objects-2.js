// ==========================================
// Opdracht 2
// Schrijf een script die e-mailadressen genereert voor al onze medewerkers. Sla dit op in een nieuwe property "email" die je toevoegt aan iedere medewerker.

const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

// Bij NOVI horen de e-mailadressen altijd in het volgende format: voornaam.achternaam@novi.nl
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(NOVIEmployees) geeft: [
//   { firstName: 'Nova', lastName: 'Eeken', email: 'Nova.Eeken@novi.nl' },
//   { firstName: 'Sam', lastName: 'Barnhoorn', email: 'Sam.Barnhoorn@novi.nl' },
//   { firstName: 'Tessa', lastName: 'Steur', email: 'Tessa.Steur@novi.nl' },
//   { firstName: 'Mark', lastName: 'Rensen', email: 'Mark.Rensen@novi.nl' },
//  ];
// ==========================================


// Loop door alle medewerkers heen en voeg een nieuwe 'email' eigenschap toe met de juiste waarde
for (let i = 0; i < NOVIEmployees.length; i++) {
    const employee = NOVIEmployees[i];
    const email = ${employee.firstName}.${employee.lastName}@novi.nl;
    employee.email = email;
}

// Log de aangepaste objecten naar de console
console.log(NOVIEmployees);

// De uitvoer zal zijn:
// [
// { firstName: 'Nova', lastName: 'Eeken', email: 'Nova.Eeken@novi.nl' },
// { firstName: 'Sam', lastName: 'Barnhoorn', email: 'Sam.Barnhoorn@novi.nl' },
// { firstName: 'Tessa', lastName: 'Steur', email: 'Tessa.Steur@novi.nl' },
// { firstName: 'Mark', lastName: 'Rensen', email: 'Mark.Rensen@novi.nl' },
// ]




// Opdracht 2-BONUS
// Lukt het je om ervoor te zorgen dat alle e-mailadressen in lowercase letters komen te staan? Dit heb je nog niet geleerd, maar google is your best friend...
// ==========================================

for (let i = 0; i < NOVIEmployees.length; i++) {
    const employee = NOVIEmployees[i];
    const email = ${employee.firstName}.${employee.lastName}@novi.nl.toLowerCase();
    employee.email = email;
}
