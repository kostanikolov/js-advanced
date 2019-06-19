let manager = (() => {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let robot = {
        restock: function (microelement, quantity) {
            storage[microelement] += quantity;
            return 'Success';
        },
        prepare: function (recipe, quantity) {
            while (quantity-- > 0) {
                let msg;
                if (recipe === 'apple') {
                    storage.carbohydrate -= 1;
                    storage.flavour -= 2;

                    if (storage.carbohydrate < 0 || storage.flavour < 0) {
                        if (storage.carbohydrate < 0) {
                            msg = `Error: not enough carbohydrate in stock`;
                        } else if (storage.flavour < 0) {
                            msg = `Error: not enough flavour in stock`;
                        }

                        storage.carbohydrate += 1;
                        storage.flavour += 2;

                        return msg;
                    }
                } else if (recipe === 'lemonade') {
                    storage.carbohydrate -= 10;
                    storage.flavour -= 20;

                    if (storage.carbohydrate < 0 || storage.flavour < 0) {
                        if (storage.carbohydrate < 0) {
                            msg = `Error: not enough carbohydrate in stock`;
                        } else if (storage.flavour < 0) {
                            msg = `Error: not enough flavour in stock`;
                        }

                        storage.carbohydrate += 10;
                        storage.flavour += 20;

                        return msg;
                    }
                } else if (recipe === 'burger') {
                    storage.carbohydrate -= 5;
                    storage.fat -= 7;
                    storage.flavour -= 3;

                    if (storage.carbohydrate < 0 || storage.fat < 0 || storage.flavour < 0) {
                        if (storage.carbohydrate < 0) {
                            msg = `Error: not enough carbohydrate in stock`;
                        } else if (storage.fat < 0) {
                            msg = `Error: not enough fat in stock`;
                        } else if (storage.flavour < 0) {
                            msg = `Error: not enough flavour in stock`;
                        }

                        storage.carbohydrate += 5;
                        storage.fat += 7;
                        storage.flavour += 3;

                        return msg;
                    }
                } else if (recipe === 'eggs') {
                    storage.protein -= 5;
                    storage.fat -= 1;
                    storage.flavour -= 1;

                    if (storage.protein < 0 || storage.fat < 0 || storage.flavour < 0) {
                        if (storage.protein < 0) {
                            msg = `Error: not enough protein in stock`;
                        } else if (storage.fat < 0) {
                            msg = `Error: not enough fat in stock`;
                        } else if (storage.flavour < 0) {
                            msg = `Error: not enough flavour in stock`;
                        }

                        storage.protein += 5;
                        storage.fat += 1;
                        storage.flavour += 1;

                        return msg;
                    }
                } else if (recipe === 'turkey') {
                    storage.protein -= 10;
                    storage.carbohydrate -= 10
                    storage.fat -= 10;
                    storage.flavour -= 10;

                    if (storage.protein < 0 || storage.carbohydrate < 0 || storage.fat < 0 || storage.flavour < 0) {
                        if (storage.protein < 0) {
                            msg = `Error: not enough protein in stock`;
                        } else if (storage.carbohydrate < 0) {
                            msg = `Error: not enough carbohydrate in stock`;
                        } else if (storage.fat < 0) {
                            msg = `Error: not enough fat in stock`;
                        } else if (storage.flavour < 0) {
                            msg = `Error: not enough flavour in stock`;
                        }

                        storage.protein += 10;
                        storage.carbohydrate += 10;
                        storage.fat += 10;
                        storage.flavour += 10;

                        return msg;
                    }
                }
            }

            return 'Success';
        },
        report: function () {
            let protein = storage['protein'];
            let carb = storage['carbohydrate'];
            let fat = storage['fat'];
            let flavour = storage['flavour'];
            return `protein=${protein} carbohydrate=${carb} fat=${fat} flavour=${flavour}`;
        },
    };

    return function management(line) {
        let args = line.split(' ');

        if (args[0] === 'restock') {
            let microelement = args[1];
            let quantity = Number(args[2]);
            return robot.restock(microelement, quantity);
        } else if (args[0] === 'prepare') {
            let recipe = args[1];
            let quantity = Number(args[2]);
            return robot.prepare(recipe, quantity);
        }

        return robot.report();
    }
})();

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));
