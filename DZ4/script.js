// Домашнее задание

// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

//=======================================================================

//1 ""Получение данных о пользователе""

function getUserData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("User not found");
      }
    })
    .then((data) => {
      console.log(data.userId);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
const id = 1;
getUserData(`https://api.randomdatatools.ru/${id}`);

//2 ""Отправка данных на сервер""

const products = {
  id: 12234,
  title: "John Smith",
  age: 30,
  email: "john@example.com",
};
function saveUserData() {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  })
    .then((response) => {
      if (response.ok) {
        console.log("User data saved successfully");
      } else {
        throw new Error("Failed to save user data");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

//3 ""Изменение стиля элемента через заданное время""

function changeStyleDelayed(elementId, delayTime) {
  setTimeout(() => {
    const element = document.querySelector("#" + elementId);
    if (element) {
      element.style.color = "aqua";
    } else {
      console.error("Element not found");
    }
  }, delayTime);
}

changeStyleDelayed("content", 2000);
