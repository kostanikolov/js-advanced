let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
}

const addFiveResult = mathEnforcer.addFive(10);
const subtractTenResult = mathEnforcer.subtractTen(30);
const sumResult = mathEnforcer.sum(23, 7);

console.log(addFiveResult);
console.log(subtractTenResult);
console.log(sumResult);

module.exports = mathEnforcer;
