class SortedList {
    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(element) {
        this.elements.push(element);
        this.elements.sort(this.__sortingMethod__);
        this.size++;
    }

    remove(index) {
        if (index >= this.size || index < 0) {
            throw new Error("Index out of bounds exception.");
        }

        this.elements.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index >= this.size || index < 0) {
            throw new Error("Index out of bounds exception.");
        }

        return this.elements[index];
    }

    __sortingMethod__(a, b) {
        return a - b;
    }

    toString() {
        return this.elements;
    }
}

const list = new SortedList();
list.add(4);
list.add(2);
list.add(5);
list.add(1);
list.add(3);
