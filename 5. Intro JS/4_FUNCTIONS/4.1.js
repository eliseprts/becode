const readlineSync = require("readline-sync");

let lengthRectangle = readlineSync.question("Imagine a rectangle. Give me its length: ");
let widthRectangle = readlineSync.question("Now give me its width: ");

/**
 * Calcul the surface of a rectangle
 * @param {Number} lengthRectangle the length given by the user
 * @param {Number} widthRectangle the width given by the user
 * @returns {Number} the product of the multiplication of the two number
 */
function calcSurface(lengthRectangle, widthRectangle) {
    return lengthRectangle * widthRectangle;
}
console.log("The surface of your rectangle is " + calcSurface(lengthRectangle, widthRectangle) + " cm2.");