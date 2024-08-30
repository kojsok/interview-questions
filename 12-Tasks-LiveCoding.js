Задачи с лайвкодинга
Проверка на палиндром
Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково вперед и назад).
function isPalindrome(str) {

}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Вывод: true
console.log(isPalindrome("hello")); // Вывод: false
​
Ответ 1 - цикл
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Вывод: true
console.log(isPalindrome("hello")); // Вывод: false
​
Реализация myMap
Реализуйте функцию myMap точно копирующую map метод
Ответ 1 - прототип
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.myMap(x => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]
​
Ответ 1 - функция
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];

const mappedArr = myMap(arr, x => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]
​
Задачи на THIS
Каким будет вывод этого фрагмента кода?
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f();
​
Ответ:
Вася
Каким будет вывод этого фрагмента кода?
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test );
​
Ответ:
undefined, Результатом работы bind является другой объект. У него уже нет свойства test.


Каким будет вывод этого фрагмента кода?
function greetWaitAndAgain() {
  console.log(`Hello, ${this.name}!`)
  setTimeout(() => {
    console.log(`Hello again, ${this.name}!`)
  })
}

const user = { name: 'Alex' }

user.greetWaitAndAgain = greetWaitAndAgain;
user.greetWaitAndAgain()
​
Ответ:
Hello, Alex!, Hello again, Alex!


Задачи на Event loop
Каким будет вывод этого фрагмента кода?
console.log(1); 

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
​
Ответ:
1, 7, 3, 5, 2, 6 4

Каким будет вывод этого фрагмента кода?
console.log(1); 

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7),0);
​
Ответ:
1, 6, 3, 5, 2, 4, 7 

Задачи на Promise
У вас есть функция fetchData, которая принимает URL и колбэк, который вызывается с данными после получения ответа. Промисифицируйте эту функцию, чтобы она возвращала промис.
function fetchData(url, callback) {
    setTimeout(() => {
        callback(`Data from ${url}`);
    }, 2000);
}

// Промисифицируйте функцию fetchData так, чтобы она возвращала промис.
// Пример вызова: fetchDataPromise('https://api.example.com').then(data => console.log(data));
​
Ответ:
function fetchDataPromise(url) {
    return new Promise((resolve) => {
        fetchData(url, (data) => {
            resolve(data);
        });
    });
}
​
Создайте функцию, которая будет возвращать результат первой завершившейся асинхронной операции из двух. Пусть будут две функции slowPromise и fastPromise, которые возвращают промисы с разным временем выполнения.
function slowPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Slow Promise'), 3000);
    });
}

function fastPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fast Promise'), 1000);
    });
}
​
Ответ:
function racePromises() {
    return Promise.race([slowPromise(), fastPromise()]);
}

// Пример вызова:
racePromises().then(result => console.log(result)); // "Fast Promise"
​
React
Реализовать функциональность запроса на сервер и отображения имени 
const url = 'someurl'
// Данные приходят: {name: 'Ivan', age: 25}

const Component = () => {
  return <div>{'Нужно отобразить имя'}</div>;
};

​
Ответ 1 - Полный
import React, { useState, useEffect } from 'react';

const url = 'someurl';

const Component = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция для выполнения запроса и обработки ответа
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Имя: {name}</div>;
};

export default Component;
​
Ответ 2 - Короткий
import React, { useState, useEffect } from 'react';

const url = 'someurl';

const Component = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Имя: {name}</div>;
};

export default Component;
