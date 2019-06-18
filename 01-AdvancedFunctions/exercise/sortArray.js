function solve(arr, method) {

    let sortedArray = [];

    if (method === "asc") {
        sortedArray = arr.sort((a, b) => a - b);
    } else if (method === "desc") {
        sortedArray = arr.sort((a, b) => b - a);
    }

    return sortedArray;
}

let result = solve([14, 7, 17, 6, 8], 'asc');
console.log(result);

result = solve([14, 7, 17, 6, 8], 'desc');
console.log(result);
