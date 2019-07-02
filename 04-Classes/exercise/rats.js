class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = [this.name];
        
        this.unitedRats.forEach(rat => {
            result.push(`##${rat.name}`);
        });
        
        return result.join("\n");
    }
}

let firstRat = new Rat("Ivan");
console.log(firstRat.toString());
console.log(firstRat.getRats());

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));

console.log(firstRat.getRats());

console.log(firstRat.toString());
