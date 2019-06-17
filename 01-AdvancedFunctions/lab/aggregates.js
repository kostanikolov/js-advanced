function aggregates(array) {
    
    console.log('Sum =', reducer(array, (a, b) => a + b, 0));
    console.log('Min =', reducer(array, (a, b) => a < b ? a : b, Number.MAX_SAFE_INTEGER));
    console.log('Max =', reducer(array, (a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER));
    console.log('Product =', reducer(array, (a, b) => a * b, 1));
    console.log('Join =', reducer(array, (a, b) => a + b, ''));

    function reducer(arr, operator, initial) {
        let result = initial;
    
        for (let element of arr) {
            result = operator(result, element);
        }
    
        return result;
    }
}

const firstInput = [2, 3, 10, 5];
const secondInput = [5, -3, 20, 7, 0.5];

aggregates(firstInput);
console.log('=============');
aggregates(secondInput);
