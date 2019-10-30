const Scanner = require("readline-sync");
const number=Number(Scanner.question("\nEnter a number: ").split(",").join(""));
let decimalFinder=String(number);
decimalFinder=decimalFinder.includes(".");
let nonNumbersFinder=String(number);
console.log(number);
/*if(nonNumbersFinder.includes(0)==true || nonNumbersFinder.includes(1)==true || nonNumbersFinder.includes(2)==true || nonNumbersFinder.includes(3)==true || nonNumbersFinder.includes(4)==true || nonNumbersFinder.includes(5)==true || nonNumbersFinder.includes(6)==true || nonNumbersFinder.includes(7)==true || nonNumbersFinder.includes(8)==true || nonNumbersFinder.includes(9)==true){
  nonNumbersFinder=false;
} else {
  nonNumbersFinder=true;
}*/
if(number>Number.MAX_SAFE_INTEGER || number<Number.MIN_SAFE_INTEGER || decimalFinder==true || number==NaN ){//I NEED TO USE ISNAB
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
