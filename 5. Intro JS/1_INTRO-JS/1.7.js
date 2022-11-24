const readlineSync = require("readline-sync");
let shoeSize = new Number(readlineSync.question("What is your shoe size?"));
let birthYear = new Number(readlineSync.question("What is your birth year?"));
let firstOperation = shoeSize * 2;
let secondOperation = firstOperation + 5;
let thirdOperation = secondOperation * 50;
let fourthOperation = thirdOperation - birthYear;
console.log(fourthOperation + 1766);