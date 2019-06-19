const fn = (function () {
    let sum = 0;

    return function add(number) {
        sum += number;

        add.toString = function () {
            return sum;
        };

        return add;
    }
})();

console.log(fn(3)(5)(8).toString());

// function add(num) {
//     let sum = num;

//     function calc(num2) {
//         sum += num2;
//         return calc;
//     }

//     calc.toString = function () {
//         return sum;
//     };

//     return calc;
// }

// console.log(add(1)(6)(-3).toString());

// let f = (function () {
//     let total = 0;

//     return function sum(a) {
//         total += a;
//         sum.toString = () => { return total; };

//         return sum;
//     }
// })();

// console.log(f(6)(7).toString());
