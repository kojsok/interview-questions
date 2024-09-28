1. Фибоначчи через рекурсию
Напиши функцию для вычисления n-го числа Фибоначчи с использованием рекурсии.


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

2. Палиндром
Напиши функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны).


function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

3. Удаление дубликатов из массива
Напиши функцию, которая удаляет дубликаты из массива чисел.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

4. Глубокое клонирование объекта
Напиши функцию для глубокого клонирования объекта.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

5. Анаграммы
Напиши функцию, которая проверяет, являются ли две строки анаграммами (состоят ли из одинаковых букв в одинаковых количествах).

function areAnagrams(str1, str2) {
  const normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

6. Каррирование функции
Напиши функцию, которая реализует каррирование.


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]);
      };
    }
  };
}


7. Реализовать Array.prototype.map()
Напиши функцию, которая реализует метод map() для массивов.

Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

8. Промисы с последовательностью
Напиши функцию, которая принимает массив промисов и выполняет их поочередно (вне зависимости от времени завершения).

function runPromisesInSequence(promises) {
  return promises.reduce((prev, curr) => prev.then(curr), Promise.resolve());
}

9. Асинхронная задержка
Напиши функцию delay(ms), которая возвращает промис, который разрешится через ms миллисекунд.


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


10. Найти максимальную глубину вложенности объекта
Напиши функцию, которая находит максимальную глубину вложенности объекта.

function getObjectDepth(obj) {
  let depth = 1;
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        const childDepth = getObjectDepth(obj[key]);
        depth = Math.max(depth, childDepth + 1);
      }
    }
  }
  return depth;
}

11. Банкомат и купюры
Напишите функцию, которая принимает сумму денег и массив доступных купюр, и возвращает количество каждой купюры, необходимое для выдачи данной суммы.


function atmWithdraw(amount, denominations) {
  const result = {};
  denominations.sort((a, b) => b - a); // Сортируем купюры по убыванию

  for (const denom of denominations) {
    while (amount >= denom) {
      amount -= denom;
      result[denom] = (result[denom] || 0) + 1;
    }
  }
  
  return amount === 0 ? result : null; // Если не удается выдать полную сумму
}


12. Факториал
Напишите функцию для вычисления факториала числа, используя цикл и рекурсию.


function factorial(n) {
  if (n < 0) return null; // Факториал для отрицательных чисел не определен
  return n <= 1 ? 1 : n * factorial(n - 1);
}


13. Объединение отсортированных массивов
Напишите функцию, которая объединяет два отсортированных массива в один отсортированный массив.


function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

14. Проверка сбалансированности скобок
Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке.

function isBalanced(str) {
  const stack = [];
  const brackets = { '(': ')', '{': '}', '[': ']' };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (brackets[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

15. Сортировка массива по количеству вхождений
Напишите функцию, которая сортирует массив по количеству вхождений каждого элемента.


function sortByFrequency(arr) {
  const frequencyMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return arr.sort((a, b) => frequencyMap[b] - frequencyMap[a]);
}


16. Поиск дубликатов в массиве
Напишите функцию, которая находит дубликаты в массиве и возвращает их в виде нового массива.


function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

17. Реверс строки
Напишите функцию, которая реверсирует строку, не используя встроенные методы.

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

18. Проверка на простое число
Напишите функцию, которая проверяет, является ли число простым.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

19. Случайная выборка из массива
Напишите функцию, которая выбирает случайный элемент из массива.


function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

20. Преобразование строки в массив объектов
Напишите функцию, которая преобразует строку, содержащую данные, в массив объектов.


function parseStringToObjects(str) {
  return str.split(';').map(item => {
    const [key, value] = item.split(':');
    return { [key.trim()]: value.trim() };
  });
}


21. Флаттенинг (разворачивание) вложенных массивов
Напишите функцию, которая принимает вложенный массив и возвращает его плоскую версию.

function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

// Пример использования:
const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nested)); // [1, 2, 3, 4, 5, 6]


22. Реализация debounce-функции
Напишите функцию debounce, которая ограничивает частоту вызова переданной функции.

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Пример использования:
const debouncedFunc = debounce(() => console.log('Debounced!'), 300);
window.addEventListener('resize', debouncedFunc);

23. Реализация throttle-функции
Напишите функцию throttle, которая гарантирует, что переданная функция будет вызываться не чаще одного раза в указанный интервал.

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Пример использования:
const throttledFunc = throttle(() => console.log('Throttled!'), 1000);
window.addEventListener('scroll', throttledFunc);


24. Мемоизация функции
Напишите функцию memoize, которая кеширует результаты вызовов переданной функции.

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Пример использования:
const slowFunction = num => {
  // Имитация долгой операции
  for (let i = 0; i < 1e9; i++);
  return num * 2;
};

const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(10)); // Вычисляется
console.log(memoizedSlowFunction(10)); // Берется из кеша


25. Реализация паттерна Pub/Sub
Создайте простой Pub/Sub (издатель-подписчик) механизм.

class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    return () => this.unsubscribe(event, listener);
  }

  unsubscribe(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(data));
  }
}

// Пример использования:
const pubSub = new PubSub();

const unsubscribe = pubSub.subscribe('message', data => {
  console.log(`Received: ${data}`);
});

pubSub.publish('message', 'Hello World!'); // Выведет: Received: Hello World!
unsubscribe();
pubSub.publish('message', 'This will not be logged.');

26. Реализация bind метода
Напишите свою версию метода Function.prototype.bind.

Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// Пример использования:
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
const greetAlice = greet.myBind(person, 'Hello');
console.log(greetAlice('!')); // Hello, Alice!


27. Глубокое сравнение объектов
Напишите функцию, которая глубоко сравнивает два объекта на эквивалентность.

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const a = { x: 1, y: { z: 3 } };
const b = { x: 1, y: { z: 3 } };
console.log(deepEqual(a, b)); // true


28. Реализация LRU Cache
Создайте класс для реализации кэша с политикой "наименее недавно использованный" (LRU).

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

// Пример использования:
const cache = new LRUCache(2);
cache.put(1, 'A');
cache.put(2, 'B');
console.log(cache.get(1)); // 'A'
cache.put(3, 'C'); // Удаляет ключ 2
console.log(cache.get(2)); // -1


29. Реализация простого промиса
Напишите простую реализацию промиса, поддерживающую then.

class SimplePromise {
  constructor(executor) {
    this.callbacks = [];
    this.state = 'pending';
    this.value = null;

    const resolve = value => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;
      this.callbacks.forEach(cb => cb(value));
    };

    executor(resolve);
  }

  then(onFulfilled) {
    return new SimplePromise(resolve => {
      if (this.state === 'fulfilled') {
        resolve(onFulfilled(this.value));
      } else {
        this.callbacks.push(value => {
          resolve(onFulfilled(value));
        });
      }
    });
  }
}

// Пример использования:
const promise = new SimplePromise(resolve => {
  setTimeout(() => resolve('Hello'), 1000);
});

promise.then(result => {
  console.log(result); // 'Hello' через 1 секунду
});


30. Использование замыканий для создания приватных свойств
Создайте функцию-конструктор, которая использует замыкания для хранения приватных свойств.

function createPerson(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
    setName(newName) {
      _name = newName;
    },
    getAge() {
      return _age;
    },
    setAge(newAge) {
      _age = newAge;
    }
  };
}

// Пример использования:
const person = createPerson('Bob', 25);
console.log(person.getName()); // 'Bob'
person.setName('Robert');
console.log(person.getName()); // 'Robert'
