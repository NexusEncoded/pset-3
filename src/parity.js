const readlineSync = require("readline-sync");
const numba = Number(readlineSync.question("\nEnter an intenger: "));

if (numba < Number.MIN_SAFE_INTEGER){
  console.log("\nInvalid.")

} else if (numba > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")

}else if (numba == 0){
  console.log("\nEven.")
}else if (numba%2 == 0){
  console.log("Even.")
}else {
  console.log("Odd.")
}
