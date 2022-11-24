const readlineSync = require("readline-sync");

let favoriteNumber = readlineSync.question("What is your favorite number ?");

while (favoriteNumber != 42) {
    if (favoriteNumber != 42) {
        console.log("Are you sure ?")
        favoriteNumber = readlineSync.question("What is your favorite number ?");
    }
    else {
        console.log("Perfect");
        break;
    }
} 