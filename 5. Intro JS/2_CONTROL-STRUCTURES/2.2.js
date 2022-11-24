const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("Give me a number: "));
let max = new Number(readlineSync.question("Give me another number: "));
let current = new Number(readlineSync.question("Give me a number between the first two: "));

if ((current > min) && (current < max)) {
    console.log(current);
}
else if (min > max) {
    console.error("The second number should have been greater than the first one");
}