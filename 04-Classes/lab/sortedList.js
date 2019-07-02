class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        this.list.splice(index, 1);
    }

    get size() {
        return this.list.length;
    }

    toString() {
        return this.list;
    }
}

let myList = new SortedList();
myList.add(10);
myList.add(20);
console.log(myList.list);

module.exports = {
    SortedList
}
