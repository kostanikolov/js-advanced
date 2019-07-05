let unsorted = {
    '1': ['1','qwe','zxc'],
    '10': ['10','qwe','zxc'],
    '3': ['3','qwe','zxc'],
    '7': ['7','qwe','zxc'],
    '5': ['5','qwe','zxc'],
    '2': ['2','qwe','zxc'],
}

let keys = Object.keys(unsorted);
keys.sort((a, b) => b - a);

let sorted = {};

for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    sorted[k] = unsorted[k];
}

console.log(sorted);