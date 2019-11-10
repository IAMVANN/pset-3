const scanner = require("readline-sync");
let month= scanner.question("\nEnter a month: ");
month = month.toLowerCase();
let days="hi";
const monthArray=["january" , "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const concurrentDays=["31 days.", "28 or 29 days.", "31 days.", "30 days.", "31 days.", "30 days.", "31 days.", "31 days.", "30 days.", "31 days.", "30 days", "31 days", "31 days.", "28 or 29 days.", "31 days.", "30 days.", "31 days.", "30 days.", "31 days.", "31 days.", "30 days.", "31 days.", "30 days", "31 days" ];
for(let whichOne=0; whichOne<=23; whichOne++){
  if(month==monthArray[whichOne]){
    days=concurrentDays[whichOne];
  }
}
if(days=="hi"){
console.log("\nInvalid.");
} else {
  console.log("\n" + days);
}
