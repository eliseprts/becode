const readlineSync = require("readline-sync");

let userAge = new Number(readlineSync.question("What is your age ? "));

if (userAge >= 18) {
    console.log("You are adult");
} else {
    console.log("You are not yet an adult");
}