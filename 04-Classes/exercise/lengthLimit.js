class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }
    
    decrease(length) {
        if (length < 0) {
            this.innerLength = 0;
        } else if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        let result = [];

        for (let i = 0; i < this.innerLength; i++) {
            result.push(this.innerString[i]);
        }

        if (this.innerString.length > this.innerLength) {
            result.push("...");
        }

        return result.join("");
    }
}

let str = new Stringer("Test", 5);
str.decrease(3);
console.log(str.toString());