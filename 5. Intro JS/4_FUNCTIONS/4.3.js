const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Give me a number :"));
let arr = []

for (n; n > 0; n -= 1) {
    /**
    * Returns a random integer between 1 and 10
    * @returns {Number} a random integer between 1 and 10
    */
    function multiRand() {
        return Math.floor(Math.random() * 10) + 1;
    }
    arr.push(multiRand());
}
console.log(arr);