// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

//1.
console.log(Math.min(...[1, 5, 7, 9]));

//2.
function createCounter() {
  let count = 1;
  return {
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.decrement();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

//3.
function findElementByClass(element, className) {
  if (element.className.includes(className)) {
    return element;
  }
  if (element.children.length > 0) {
    for (let i = 0; i < element.children.length; i += 1) {
      const result = findElementByClass(element.children[i], className);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

const element = document.querySelector(".list-item");
console.log(findElementByClass(element, "list-item"));
