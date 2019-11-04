const readlineSync = require("readline-sync");
const numba = Number(readlineSync.question("\nEnter an integer: "));

if (numba < Number.MIN_SAFE_INTEGER){
  console.log("\nInvalid.")

} else if (!Number.isInteger(numba)) {
  console.log("\nInvalid.")
}
else if (numba > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")
}else if (numba == 0){
  console.log("\nEven.")
}else if (numba%2 == 0){
  console.log("\nEven.")
}else {
  console.log("\nOdd.")
}
