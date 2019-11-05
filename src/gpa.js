const scanner = require("readline-sync");
let letterGrade = scanner.question("\nEnter a letter grade: ");
let addOrMinus=0;
let valid=true;
let grade;
let fail=true;
let gradeArray=["a","A", "b", "B", "c", "C","d","D","f","F"];
let concurrentGradeValueArray=[4.00, 4.00, 3.00, 3.00, 2.00, 2.00, 1.00, 1.00, 0.00, 0.00];
if (letterGrade.includes("F+")||letterGrade.includes("F-")||letterGrade.includes("f+")||letterGrade.includes("f-")){
  valid=false;
}
if(letterGrade.includes("+")){
  addOrMinus=.33;
  letterGrade=letterGrade.replace("+", "");
} else if (letterGrade.includes("-")){
  addOrMinus=-.33;
  letterGrade=letterGrade.replace("-", "");
} else if (letterGrade.includes("+") && letterGrade.includes("-")){
  valid=false;
  letterGrade=letterGrade.replace("+", "") && letterGrade.replace("-","");
}
for(let whichOne=0; whichOne<=9; whichOne++){
  if(gradeArray[whichOne]===letterGrade){
    grade=concurrentGradeValueArray[whichOne];
    fail=false;
  }
}
if(fail==true){
  valid=false;
}
if(letterGrade!="a" && letterGrade!="A" ){
  grade=grade+addOrMinus;
} else if (letterGrade=="a" || letterGrade=="A"){
  if (addOrMinus<0){
    grade=grade+addOrMinus;
  }
}
if(valid===false){
  console.log("\nInvalid.");
} else{
  console.log("\nYour GPA is " + grade + ".")
}
