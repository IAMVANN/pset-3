const scanner = require("readline-sync");
const year = scanner.question("\nEnter a year: ");
if(Number(year) < 0 || Number.isNaN(Number(year)) == true || year.includes(".") ||
  Number(year) > Number.MAX_SAFE_INTEGER){
    console.log("\nInvalid\n");
} else if(year%4===0){
    console.log("\n" + year + " is a leap year.\n");
} else{
    console.log("\n" + year + " is not a leap year.\n" );
}
