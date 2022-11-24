class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if ((this.topLeftXPos < otherRectangle.topLeftXPos) &&
            (this.topLeftXPos + this.width > otherRectangle.topLeftXPos) &&
            (this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length) &&
            (this.length + this.topLeftYPos > otherRectangle.topLeftYPos)) {
            return true;
        }
        else {
            return false;
        }
    }
}
let rectangle1 = new rectangle(20, 10, 10, 10);
let rectangle2 = new rectangle(25, 15, 10, 20);
console.log(rectangle1.collides(rectangle2));