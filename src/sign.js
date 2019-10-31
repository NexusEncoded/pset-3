const readlineSync = require("readline-sync");

let numba = Number(readlineSync.question("\nEnter a number: "));

if (numba < Number.MIN_SAFE_INTEGER){
  console.log("\nInvalid.")

} else if (numba > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")

}else if (numba == 0){
  console.log("\nZero.")

}else if (numba > 0){
  console.log("\nPositive.")

}else if (numba < 0){
  console.log("\nNegative.")
}
