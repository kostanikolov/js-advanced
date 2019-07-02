class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static distance(p1, p2) {
        const xDiff = p2.getX - p1.getX;
        const yDiff = p2.getY - p1.getY;
        
        const bothPointsSum = Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
        return Math.sqrt(bothPointsSum);
    }

    get getX() { return this._x; }
    set setX(newX) { this._x = newX; }

    get getY() { return this._y; }
    set setY(newY) { this._y = newY; }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
