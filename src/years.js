const scanner = require("readline-sync");
const year = scanner.question("\nEnter a year: ");
if(Number(year)<0 || Number.isNaN(Number(year))s==true || year.includes(".")|| Number(year)> Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid");
} else if(year%4===0){
  console.log("\n" + year + " is a leap year.");
} else{
  console.log("\n" + year + " is not a leap year.");
}
