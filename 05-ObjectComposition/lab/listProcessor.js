function solve(input) {
    let processor = (function () {
        let arr = [];
    
        return {
            add: (str) => arr.push(str),
            remove: (str) => arr = arr.filter(el => el !== str),
            print: () => console.log(arr.join(',')),
        }
    })();

    input.forEach(element => {
        let [command, value] = element.split(' ');
        processor[command](value);
    });
}

solve([
    'add pesho', 
    'add george', 
    'add peter', 
    'remove peter',
    'print'
]);
