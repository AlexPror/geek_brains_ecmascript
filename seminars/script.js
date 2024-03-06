const Person = {
  name: "John",
  age: 25,
  gender: "male",
  introduce() {
    console.log(
      `Hi, I'm ${this.name}, I'm ${this.age} years old and I identify as ${this.gender}`
    );
  },
  changeName() {
    this.name = "Mike";
  },
};

// console.log(Person.introduce());
Person.changeName();
console.log(Person.introduce());

//2 Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.

// Dog.eat(); // Вывод: Rex is eating.

//2
const Animal = {
  name: "Rex",
  eat() {
    console.log(`${this.name} is eating`);
  },
};

const Dog = {
  name: "Mailo",
  bark() {
    console.log(`${this.name} is barking`);
  },
};

Dog.eat = Animal.eat;
Dog.bark();
Dog.eat();

//3 Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  // call(func, x, y) {
  //   return func(x, y)
  // },
  // apply(func = this.add, x, y) {
  //   return func(x, y)
  // }
};

const num1 = 5;
const num2 = 3;

// Используем метод call для вызова add()
console.log(calculator.add.call(null, num1, num2));

// Используем метод apply для вызова subtract()
console.log(calculator.subtract.apply(null, [num1, num2]));

// Используем метод call для вызова multiply()
console.log(calculator.multiply.call(null, num1, num2));

//4 Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.

// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Persone {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Persone("Alex", 22);
person.introduce();
