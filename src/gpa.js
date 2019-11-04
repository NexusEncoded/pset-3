const readlineSync = require("readline-sync");

let grade = String(readlineSync.question("\nEnter a letter grade: "));



grade = grade.toLowerCase()

console.log(grade)
