function rectangles(input) {
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }

        compareTo(other) {
            let n = this.area() - other.area();

            if (n < 0) {
                return -1;
            } else if (n > 0) {
                return 1;
            }

            return 0;
        }
    }

    let rectanglesContainer = [];

    input.forEach(arr => {
        const width = arr[0];
        const height = arr[1];

        const rect = new Rectangle(width, height);
        rectanglesContainer.push(rect);
    });

    return rectanglesContainer.sort((a, b) => b.compareTo(a) || (b.width - a.width));
}

rectangles([
    [10, 5], // 50
    [3, 20], // 60
    [5, 12], // 60
]);

console.log(rectangles([
    [1, 20],
    [20, 1],
    [5, 3],
    [5, 3]
]));