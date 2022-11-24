const readlineSync = require("readline-sync");

let number = new Number(readlineSync.question("Enter a number: "));
let sum = 0;

while (number > 0) {
    let newNumber = new Number(readlineSync.question("Enter a number: "));
    number -= 1;
    sum = sum + newNumber;
}
console.log(sum);