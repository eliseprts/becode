const readlineSync = require("readline-sync");
let userName = readlineSync.question("What is you name?");
console.log("Hello " + userName);