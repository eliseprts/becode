const readlineSync = require("readline-sync");

let askNumber = new Number(readlineSync.question("Give me a number between 1 and 7: "));

if (askNumber == 1) {
    console.log("Monday");
}
else if (askNumber == 2) {
    console.log("Tuesday");
}
else if (askNumber == 3) {
    console.log("Wednesday");
}
else if (askNumber == 4) {
    console.log("Thursday");
}
else if (askNumber == 5) {
    console.log("Friday");
}
else if (askNumber == 6) {
    console.log("Saturday");
}
else if (askNumber == 7) {
    console.log("Sunday");
}
else {
    console.log("You did not enter a valid number...");
}