const scanner = require("readline-sync");
const letterGrade = scanner.question("\nEnter a letter grade: ");
let addOrMinus=0;
let valid=true;
let grade;
let gradeArray=["a","A", "b", "B", "c", "C","d","D","f","F"];
let concurrentGradeValueArray=[4.00, 4.00, 3.00, 3.00, 2.00, 2.00, 1.00, 1.00, 0.00, 0.00];
if(letterGrade.includes("+"){
  addOrMinus=.33;
  letterGrade=letterGrade.replace("+", "");
} else if (letterGrade.includes("-")){
  addOrMinus=-.33;
  letterGrade=letterGrade.replace("-", "");
} else if (letterGrade.includes("+").includes("-")){
  valid=false;
  letterGrade=letterGrade.replace("+", "").replace("-","");
}
for(let whichOne=0; whichOne<=9; whichOne++){
  if(gradeArray[whichOne]===letterGrade){
    grade=concurrentGradeValueArray[whichOne]
  }
}

}
if(valid===false){
  console.log("Invalid.");
} else{
  console.log("Your GPA is " + grade + ".")
}
