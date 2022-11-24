const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Give me a number: "));

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

let sum = 0;
/**
 * Average
 * @param {Array} arr array created by the previous function and loop
 * @returns {Number} the average of the numbers of the array
 */
function average(arr) {
    for (let elem of arr) {
        sum = sum + elem;
    }
    let averageValue = sum / arr.length;
    console.log("Average value: " + averageValue);
}
average(arr);

/**
 * Minimum
 * @param {Array} arr array created by the previous function and loop
 * @returns {Number} the minimum value of the average
 */
function min(arr) {
    console.log("Minimum value: " + Math.min(...arr));
}
min(arr);

/**
 * Minimum
 * @param {Array} arr array created by the previous function and loop
 * @returns {Number} the maximum value of the average
 */
function max(arr) {
    console.log("Maximum value: " + Math.max(...arr));
}
max(arr);