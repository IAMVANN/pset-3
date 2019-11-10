const scanner = require("readline-sync");
let temp=Number(scanner.question("\nEnter a temperature: "));
let scale=scanner.question("Enter a scale: ")
scale=scale.toLowerCase();
let valid=true;
if (scale!="f" && scale!="c" && scale!="k"){
  valid=false;
}
if(temp>Number.MAX_SAFE_INTEGER || temp<Number.MIN_SAFE_INTEGER || Number.isNaN(temp)==true){
  valid=false;
}
if(scale =="c"){
  temp=(temp*9/5)+32;
} else if (scale == "k"){
  temp=(temp-273.15) * 9/5  + 32;
}
if(valid==true){
  if(temp<=32){
    console.log("\nSolid.");
  } else if(temp>=212){
    console.log("\nGas.");
  }else{
    console.log("\nLiquid.");
  }
} else {
  console.log("\nInvalid.");
}
