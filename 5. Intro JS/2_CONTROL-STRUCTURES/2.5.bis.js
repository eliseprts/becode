const readlineSync = require("readline-sync");

let favoriteNumber = readlineSync.question("What is your favorite number ?");

do {
    console.log("Are you sure?");
    favoriteNumber = readlineSync.question("What is your favorite number ?");
}
while (favoriteNumber != 42);