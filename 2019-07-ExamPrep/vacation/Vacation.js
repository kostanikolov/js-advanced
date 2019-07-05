class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        let child = `${name}-${budget}`;

        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if (!this.kids[grade].includes(child)) {
            this.kids[grade].push(child);
            return this.kids[grade];
        }

        return `${name} is already in the list for this ${this.destination} vacation.`;
    }

    removeChild(name, grade) {
        let currentGrade = this.kids[grade];

        if (typeof currentGrade === 'undefined') {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        for (let i = (currentGrade.length - 1); i >= 0; i--) {
            let child = currentGrade[i];
            let [childName] = child.split('-');
            let rgx = new RegExp(`${name}`, 'g');

            if (rgx.test(childName)) {
                currentGrade.splice(i, 1);
                return currentGrade;
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    get numberOfChildren() {
        let totalChildren = 0;
        for (const grade in this.kids) {
            totalChildren += this.kids[grade].length;
        }

        return totalChildren;
    }

    toString() {
        let totalChildren = this.numberOfChildren;
        if (totalChildren <= 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${totalChildren} children on trip to ${this.destination}\n`;
        for (const grade in this.kids) {
            result += `Grade: ${grade}\n`;

            this.kids[grade].forEach((child, index) => {
                result += `${index + 1}. ${child}\n`;
            });
        }

        return result;
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);
console.log(vacation.toString());

// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500)
// console.log(vacation.toString());
