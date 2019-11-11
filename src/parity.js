const scanner = require("readline-sync");
const number = Number(scanner.question("\nEnter a number: ").split(",").join(""));
let decimalFinder = String(number);
decimalFinder = decimalFinder.includes(".");

if(number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER || decimalFinder == true ||
  Number.isNaN(number)  ==  true ){
    console.log("\nInvalid.\n");
} else {
    if(number % 2 > 0){
        console.log("\nOdd.\n");
    } else {
        console.log("\nEven.\n");
  }
}
