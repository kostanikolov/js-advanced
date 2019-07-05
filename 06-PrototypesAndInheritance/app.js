class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Student extends Person {
    constructor(name, email) {
        super(name, email);
    }
}

let mimi = new Student("Mimi", "mimi97@gmail.com");

Student.prototype.course = "Economics";
Student.prototype.getSpeciesString = function () {
    return `I study ${this.course}. (name: ${this.name}, email: ${this.email})`;
}

console.log(person.getSpeciesString());
