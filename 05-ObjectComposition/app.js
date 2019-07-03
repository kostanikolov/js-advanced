class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Mammal extends Animal {
    constructor(name, age) {
        super(name, age);
        this.isCastrated = false;
    }
}

class Dog extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.bark = "Bark!";
    }
}

class Cat extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.meow = "Meow!";
    }
}

let dog = new Dog("Sharo", 11);
let cat = new Cat("Simon", 7);

