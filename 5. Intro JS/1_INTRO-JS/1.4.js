const readlineSync = require("readline-sync");
let userName = readlineSync.question("What is your name?");
let userFirstName = readlineSync.question("What is you first name?");
let userCity = readlineSync.question("Where do you live?");
console.log("Your name is " + userName + " " + userFirstName + " and you live in " + userCity + ".");