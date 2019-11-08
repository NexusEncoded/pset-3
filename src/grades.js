const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const lowA = 90;
const highA = 100;
const lowB = 80;
const highB = 89;
const lowC = 70;
const highC = 79
const lowD = 60;
const highD = 69;
const lowF = 0;
const highF = 59;

if (grade > 100 || grade < 0) {
      console.log("\nInvalid\n")

} else if (grade >= lowA && grade <= highA) {
      console.log("\nYou received an A.\n")

} else if (grade >= lowB && grade < lowA) {
      console.log("\nYou received a B.\n")

} else if (grade >= lowC && grade < lowB) {
      console.log("\nYou received a C.\n")

} else if (grade >= lowD && grade < lowC) {
      console.log("\nYou received a D.\n")

} else if (grade >= lowF && grade < lowD) {
      console.log("\nYou received an F.\n")

} else {
      console.log("\nInvalid.\n")
    }
