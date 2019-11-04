const readlineSync = require("readline-sync");

console.log("Enter three numbers.\n")
const numba1 = Number(readlineSync.question(""));
const numba2 = Number(readlineSync.question(""));
const numba3 = Number(readlineSync.question(""));

let diff = numba3-numba2;
let diff2 = numba2-numba1;


if (numba1 < Number.MIN_SAFE_INTEGER || numba1 > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")
}else if (numba2 < Number.MIN_SAFE_INTEGER || numba2 > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")
}else if (numba3 < Number.MIN_SAFE_INTEGER || numba3 > Number.MAX_SAFE_INTEGER){
    console.log("\nInvalid.")
}else if (numba3 > numba2 && diff2 == diff){
  console.log("Strictly Increasing.")
}else if (numba3>numba2 && numba2>numba1){
  console.log("Increasing.")
}else if (numba3 == numba2 && numba2 == numba1){
  console.log("Equal")
}else if (numba2>numba3 && diff2 == diff){
  console.log("Strictly Decreasing.")
}else if (numba2>numba3 && numba1>numba2){
  console.log("Decreasing.")
}else{
  console.log("Unordered.")
}
