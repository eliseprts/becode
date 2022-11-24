/**
 * Distance between two points
 * @param {Number} x1 coordinate x of the first point
 * @param {Number} y1 coordinate y of the first point
 * @param {Number} x2 coordinate x of the second point
 * @param {Number} y2 coordinate y of the second point
 * @returns {Number} the distance between the first and the second point
 */

function calcDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
console.log(calcDistance(-2, 2, 2, -2));