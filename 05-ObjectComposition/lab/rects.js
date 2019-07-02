function solve(data) {
    let rects = [];

    for (let [width, height] of data) {
        let rect = comparator(width, height);
        rects.push(rect);
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;

    function comparator(w, h) {
        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };

        return rect;
    }
}

solve([
    [10, 5], // 50
    [3, 20], // 60
    [5, 12], // 60
]);

solve([
    [1, 20],
    [20, 1],
    [5, 3],
    [5, 3]
]);