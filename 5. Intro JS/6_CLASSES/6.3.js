
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

function generateRectangle() {
    for (i = 0; i < 100; i += 1) {
        this.topLeftXPos = Math.floor(Math.random() * 1001);
        this.topLeftYPos = Math.floor(Math.random() * 1001);
        this.width = Math.floor(Math.random() * 501);
        this.length = Math.floor(Math.random() * 501);
        let randomRectangle1 = new rectangle(this.topLeftXPos, this.topLeftYPos, this.width, this.length);
        console.log(randomRectangle1);
    }
}
generateRectangle();