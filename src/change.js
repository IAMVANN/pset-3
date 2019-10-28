const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));
    const changeValue=[25,10,5,1]; //[quaters, dimes, nickels, pennies]
    let quarters;
    let dimes;
    let nickels;
    let pennies;
    const variableHolder=[quarters, dimes, nickels, pennies];
    let type;
    let typeNumber;
    let boolean;
    let changeLeft=amount*100;
if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
      console.log("\nInvalid.");
} else {
  for (let whichOne=0;whichOne <=3; whichOne++){
    type=changeValue[whichOne];
    typeNumber=variableHolder[whichOne];
    if(changeLeft>=type){
        typeNumber=(changeLeft-changeLeft%type)/type;
        changeLeft=changeLeft%type;
        console.log(typeNumber);
      } else {
        typeNumber=0;
        console.log(typeNumber);
      }
      //I finished first part of this problem, now i need to do code for quarter/quater depending on quaters=1 or something like that.
    }

  }
