const Scanner = require("readline-sync");
const number=Number(Scanner.question("\nEnter a number: ").split(",").join(""));
let decimalFinder=String(number);
decimalFinder=decimalFinder.includes(".");
let nonNumbersFinder=String(number);
if(number>Number.MAX_SAFE_INTEGER || number<Number.MIN_SAFE_INTEGER || decimalFinder==true || Number.isNaN(number)==true ){
  console.log("\nInvalid.");
} else {
  if(number==0){
    console.log("\nZero.");
  } else if(number>0){
    console.log("\nPositive.");
  } else{
    console.log("\nNegative.");
  }
}
