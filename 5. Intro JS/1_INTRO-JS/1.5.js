const readlineSync = require("readline-sync");
let firstNumber = new Number(readlineSync.question("Give me one number with decimal:")); 
let secondNumber = new Number(readlineSync.question("Give a second number with decimal part:"));
console.log(Math.trunc(firstNumber) * secondNumber);