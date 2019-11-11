const scanner = require("readline-sync");
const number = Number(scanner.question("\nEnter a number: ").split(",").join(""));
let decimalFinder = String(number);
decimalFinder = decimalFinder.includes(".");

if(number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER || decimalFinder == true ||
  Number.isNaN(number) == true ){
    console.log("\nInvalid.\n");
} else {
    if(number == 0){
        console.log("\nZero.\n");
    } else if(number > 0){
        console.log("\nPositive.\n");
    } else{
        console.log("\nNegative.\n");
    }
}
