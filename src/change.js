const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));
    const quarter = .25;
    const dime = .1;
    const nickel = .05;
    const penny = .01;
    const changeValue = [quarter * 100, dime * 100, nickel * 100, penny * 100]; //[quaters, dimes, nickels, pennies]
    let holder = [];
    const nameHolder = [" quarter", " dime", " nickel", " penny"]
    let type;
    let typeNumber;
    let boolean;
    let changeLeft = amount * 100;
if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    for (let whichOne = 0;whichOne <= 3; whichOne++){
        type = changeValue[whichOne];
        if(changeLeft >= type){
            holder[whichOne] = (changeLeft - changeLeft % type) / type;
            changeLeft = changeLeft % type;
        } else {
            holder[whichOne] = 0;;
        }
        if(whichOne === 3){
            holder[whichOne]= (holder[whichOne] == 1) ?
            String(holder[whichOne]) + nameHolder[whichOne] :
            String(holder[whichOne]) + " pennies";
      } else {
          holder[whichOne] = (holder[whichOne] == 1) ?
          String(holder[whichOne]) + nameHolder[whichOne] :
          String(holder[whichOne]) + nameHolder[whichOne] + "s";
    }
  }
    console.log("\n" + holder[0] + ", " + holder[1] + ", " + holder[2] + ", and " + holder[3] + ".\n")
  }
