const codeNames = [
    'Alpha',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'X-ray',
    'Yankee',
    'Zulu'
];

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getRandomAge() {
        return Math.ceil(Math.random() * 12);
    }

    toString() {
        return `My name is ${this.name} and I am ${this.age}-years-old.`;
    }
}

let dogs = [];

for (const name of codeNames) {
    const dog = new Dog(name, Dog.getRandomAge());
    dogs.push(dog);
}

dogs.sort((a, b) => b.age - a.age)
    .forEach(dog => console.log(dog.toString()));
