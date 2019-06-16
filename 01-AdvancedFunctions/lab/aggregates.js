function aggregates(array) {
    
    const sum = () => {
        return array.reduce((sum, acc) => sum += acc);
    }

    const min = () => {
        return Math.min(...array);
    }

    const max = () => {
        return Math.max(...array);
    }

    const product = () => {
        return array.reduce((sum, acc) => sum *= acc);
    }

    const join = () => {
        return array.reduce((sum, acc) => sum += acc, '');
    }

    console.log(sum());
    console.log(min());
    console.log(max());
    console.log(product());
    console.log(join());
}

aggregates([2, 3, 10, 5]);
console.log('=============');
aggregates([5, -3, 20, 7, 0.5]);
