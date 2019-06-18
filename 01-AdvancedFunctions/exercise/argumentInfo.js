function solve() {

    let result = {};

    for (let index = 0; index < arguments.length; index++) {
        let argType = typeof arguments[index];
        let arg = arguments[index];

        if (!result.hasOwnProperty(argType)) {
            result[argType] = 1;
        } else {
            result[argType]++;
        }

        console.log(`${argType}: ${arg}`);
    }

    Object.keys(result)
        .sort((a, b) => result[b] - result[a])
        .forEach(key => console.log(`${key} = ${result[key]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });
console.log('==========');
solve('cat', 'cammel', 'dog', 42, 43, function () { console.log('Hello world!'); });
