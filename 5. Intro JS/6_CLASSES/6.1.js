class circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }
    get surface() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle1 = new circle(100, 200, 3);
console.log(circle1.surface);
circle1.move(50, 50);
console.log(circle1.xPos);
console.log(circle1.yPos);