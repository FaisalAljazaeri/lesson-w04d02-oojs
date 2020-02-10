class Animal {
    constructor(name, type, age, sound, color, hasPassport = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.sound = sound;
        this.color = color;
        this.hasPassport = hasPassport;
    }

    getOlder() {
        this.age++;
    }

    makeSound() {
        return `${this.sound}! Hello, I'm a ${this.type}. And, I'm ${this.age} years old.`;
    }
}

// const notMyCat = new Animal('Joe', 'Cat', 1, 'Moooo', 'Hot Pink');
// console.log(notMyCat.makeSound());

// notMyCat.getOlder();
// console.log(notMyCat.makeSound());

class Dog extends Animal {
    constructor(name, age) {
        super(name, 'Belgian', age, 'Barks', 'Hot Pink');
    }

    makeSound() {
        console.log(`${this.name} barks`);
    }
}

// const bear = new Dog('Bear', 3);
// console.log(bear.makeSound());

class Cat extends Animal {
    constructor(name, age) {
        super(name, 'Belgian', age);
    }

    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

const myCat = new Cat('Bill', 4);
console.log(myCat.makeSound());