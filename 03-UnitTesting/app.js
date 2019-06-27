function Dog(name, age) {
    this.name = name;
    this.age = age;

    static this.displayInfo = () => {
        return this;
    }
}

Dog().displayInfo()

const bullet = new Dog('Bullet', 4);
const maylo = new Dog('Maylo', 2);
