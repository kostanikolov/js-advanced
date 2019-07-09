let arr = [
    {a: 2},
    {b: 3},
];

let x = arr.reduce((a, b) => a.a + b.b);
console.log(x);