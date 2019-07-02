let modu1e = (function () {
    let count = 0;

    return {
        increase: (number) => count += number,
        decrease: (number) => count -= number,
        value: () => count,
    }
})();

console.log(modu1e.increase(2));
console.log(modu1e.increase(3));
console.log(modu1e.increase(5));
console.log(modu1e.decrease(2));
console.log(modu1e.value());