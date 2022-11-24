const readlineSync = require("readline-sync");
let firstNumber = new Number (readlineSync.question("Give me one integers:"));
let secondNumber = new Number (readlineSync.question("Give me a second integer:"));
console.log(firstNumber % secondNumber);