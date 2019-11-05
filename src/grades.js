const scanner = require("readline-sync");
const answer=Number(scanner.question("\nEnter a grade: "));
let letterGrade;
const a="90=100A";
const b="80>90 B";
const c="70>80 C";
const d="60>70 D";
const f="00>60 F";
const array=[a,b,c,d,f];
if(answer>0||answer<100){
  for(let whichOne=0; whichOne<=4; whichOne++){
    if((array[whichOne]).charAt(2)=="="){
      if(answer>=Number(array[whichOne].substring(0,1))){
        letterGrade="A";
      }
    } else if((array[whichOne]).charAt(2)==">"){
       if(answer>=Number(array[whichOne].substring(0,1)) && answer<Number(array[whichOne].substring(3,5))){
         letterGrade=(array[whichOne]).charAt(6);
       }
    }
    //>=Number(array[whichOne].substring(0,1)) && grade<)
  }
  console.log("\nYou received an " + letterGrade + ".");
} else {
    console.log("\nInvalid");
}
