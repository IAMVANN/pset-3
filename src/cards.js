const scanner = require("readline-sync");
const card = scanner.question("\nEnter a playing card: ");
let suitArray = ["Clubs", "Diamonds", "Hearts", "Spades", "Clubs", "Diamonds", "Hearts", "Spades"];
let concurrentSuitArray = ["C", "D", "H", "S" , "c", "d", "h", "s"];
let rankArray = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace",
  "Ten", "Jack", "Queen", "King", "Ace"];
let concurrentRankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A", "t", "j", "q", "k", "a"];
let valid = true;
let rank = "Hi";
let suit = "Hi";
for(let whichOne = 0; whichOne <= 17; whichOne++){
      if(card.includes(concurrentRankArray[whichOne])){
          rank=rankArray[whichOne];
      }
}
for(let whichOnes = 0; whichOnes <= 7; whichOnes++){
    if(card.includes(concurrentSuitArray[whichOnes])){
        suit = suitArray[whichOnes];
    }
}
if(rank == "Hi" || suit == "Hi"){
    valid = false;
}
if(valid == true){
    console.log("\n" + rank + " of " + suit + ".\n");
} else{
    console.log("\nInvalid.\n");
}
