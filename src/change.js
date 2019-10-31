const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid")// print your error message here
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")// print your error message here
} else {
    // write your code for making change here
    const quarter = 0.25;
    const dime = 0.10;
    const nickel = 0.05;
    const penny = 0.01

    let changeq = Math.floor(amount/quarter);
    let leftover = amount % quarter;
    let changed = Math.floor(leftover/dime);
    let leftover1 = leftover % dime;
    let changen = Math.floor(leftover1/nickel);
    let leftover2 = leftover1 % nickel;
    let changep = Math.ceil(leftover2/penny);

    console.log(changeq + " quarters, " + changed + " dimes, " + changen + " nickels, " + "and " + changep + " pennies.")
}
