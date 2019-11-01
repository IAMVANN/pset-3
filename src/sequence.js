const scanner = require("readline-sync");
console.log("\nEnter three numbers.")
const number1=Number(scanner.question("\n").split(",").join(""));
const number2=Number(scanner.question("").split(",").join(""));
const number3=Number(scanner.question("").split(",").join(""));
let numberArray=[number1,number2,number3];
let valid = true;
for(let whichOne=0; whichOne<=2; whichOne++){
  if(numberArray[whichOne]>Number.MAX_SAFE_INTEGER || numberArray[whichOne]<Number.MIN_SAFE_INTEGER  || Number.isNaN(numberArray[whichOne])==true ){
    valid = false;
  }
}
if(valid === true){
  if(number1<number2 && number2<number3){
    console.log("\nStrictly increasing.");
  } else if(number1===number2 && number2===number3){
    console.log("\nEqual.");
  } else if(number1<=number2 && number2<=number3){
    console.log("\nIncreasing.");
  } else if(number1>number2 && number2>number3){
    console.log("\nStrictly decreasing.");
  } else if(number1>=number2 && number2>=number3){
    console.log("\nDecreasing.");
  } else {
    console.log("\nUnordered.");
  }
} else {
  console.log("\nInvalid.");
}
