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

// Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку.
// Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например:
// delayedMessage("Сообщение 1", 2000)
// delayedMessage("Сообщение 2", 1000)
// delayedMessage("Сообщение 3", 3000)
// После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().

let max = 0;

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
  if (delay > max) {
    max = delay;
  }
}

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
setTimeout(() => {
  console.log("Конец программы");
}, max);

// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [
  { name: "task 1", time: 1000 },
  { name: "task 2", time: 2000 },
  { name: "task 3", time: 3000 },
  { name: "task 4", time: 4000 },
  { name: "task 5", time: 5000 },
];

const interval = 1000;

function startTasks(tasks, interval) {
  for (let i = 0; i < tasks.length; i++) {
    setTimeout(() => {
      console.log(tasks[i].name);
    }, tasks[i].time);
  }
}

startTasks(tasks, interval);

// const tasks = [
//   { name: 'task 1', time: 1000 },
//   { name: 'task 2', time: 2000 },
//   { name: 'task 3', time: 3000 },
//   { name: 'task 4', time: 4000 },
//   { name: 'task 5', time: 5000 }
//   ];

//   function executeTasks(tasks) {
//   tasks.forEach((task, index) => {
//   setTimeout(() => {
//   console.log(task.name);
//   }, task.time);
//   });
//   }

//   executeTasks(tasks);

// Напишите программу, которая загружает данные с сервера с использованием функции fetch. Ваша задача — использовать предложенный шаблон запроса для получения данных и их обработки.

// Создайте функцию, которая отправляет запрос к серверу, используя fetch.
// Адрес сервера для запроса: https://api.randomdatatools.ru/?count=5 .
// В функции реализуйте обработку промиса, возвращаемого fetch. Используйте метод .then() для обработки ответа сервера.
// Проверьте свойство response.ok.
// Добавьте обработку ошибок с помощью метода .catch(). Выведите сообщение об ошибке в консоль, если в процессе выполнения запроса или обработки данных возникли проблемы.
// fetch("http://example.com/movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://api.randomdatatools.ru")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//   Разработайте простой веб-интерфейс для отображения списка пользователей, получаемого с сервера. Вам необходимо отобразить имена пользователей и их email-адреса.
// Используйте функцию fetch для отправки GET-запроса к https://jsonplaceholder.typicode.com/users . Этот запрос вернет JSON-массив объектов пользователей.
// В обработчике .then() преобразуйте полученный ответ в JSON.
// После успешного получения и преобразования ответа в JSON, отобразите на странице список пользователей. Для каждого пользователя покажите его имя и email. Для отображения можно использовать любой HTML-элемент, например, ul для списка и li для элементов списка.
// Добавьте базовую обработку ошибок, чтобы в случае неудачного запроса на странице отображалось сообщение об ошибке.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.createElement("ul");
    data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(listItem);
    });
    document.body.appendChild(userList);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
