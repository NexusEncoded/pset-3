const readlineSync = require("readline-sync");

const letterGrade = String(readlineSync.question("\nEnter a letter grade: "));

if (letterGrade == "A+" || letterGrade == "A" || letterGrade == "a+" || letterGrade == "a") {
      console.log("\nYour GPA is 4.00.\n")

} else if  (letterGrade == "A-" || letterGrade == "a-") {
      console.log("\nYour GPA is 3.67.\n")

} else if  (letterGrade == "B+" || letterGrade == "b+") {
      console.log("\nYour GPA is 3.33.\n")

} else if  (letterGrade == "B"  || letterGrade == "b") {
      console.log("\nYour GPA is 3.00.\n")

} else if  (letterGrade == "B-" || letterGrade == "b-") {
      console.log("\nYour GPA is 2.67.\n")

} else if  (letterGrade == "C+" || letterGrade == "c+") {
      console.log("\nYour GPA is 2.33.\n")

} else if  (letterGrade == "C"  || letterGrade == "c") {
      console.log("\nYour GPA is 2.00.\n")

} else if  (letterGrade == "C-" || letterGrade == "c-") {
      console.log("\nYour GPA is 1.67.\n")

} else if  (letterGrade == "D+" || letterGrade == "d+") {
      console.log("\nYour GPA is 1.33.\n")

} else if  (letterGrade == "D"  || letterGrade == "d") {
      console.log("\nYour GPA is 1.00.\n")

} else if  (letterGrade == "D-" || letterGrade == "d-") {
      console.log("\nYour GPA is 0.67.\n")

} else if  (letterGrade == "F"  || letterGrade == "f") {
      console.log("\nYour GPA is 0.00.\n")

} else {
      console.log("\nInvalid.\n")
}
