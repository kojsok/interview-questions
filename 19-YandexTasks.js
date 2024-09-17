// ========================================== Задача 1
// Нужно реализовать банкомат с функционалом пополнения и выдачи

class ATM {
  vault = {
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0, 
    100: 0,
    50: 0
  }
  
  deposit(bills) {
    // реализуй метод
  }
  
  whithdrow(amount) {
    // реализуй метод
  }
  
  // возвращает массив купюр который доступен на прием/выдачу
  get accept() {
    // реализуй геттер
  }
  
  // возвращает сколько всего денег во внутреннем хранилище
  get total() {
    // реализуй геттер
  }
  
  // возвращает касету с деньгами в виде объекта при инкассации
  get collect() {
    // реализуй геттер
  }
}

const atm = new ATM();
atm.accept; // [ 50, 100, 500, 1000, 2000, 5000 ]
atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно средств
atm.deposit([]); // Error: Положите деньги в купюроприемник
atm.deposit([5000, 1000, 5000, 500, 100, 50, 50]); // Внесено 11700
atm.deposit([500, 10, 5]); // Внесено 500, Заберите нераспознанные купюры [10, 5]
atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно купюр
atm.whithdrow(2100); // [1000, 500, 500, 100]
atm.whithdrow(0); // Error: Укажите корректную сумму
atm.total; //10100
atm.collect; // { '50': 2, '100': 0, '500': 0, '1000': 0, '2000': 0, '5000': 2 }
// ========================================== Задача 2

/**
 * Дан массив билетов:
   [
    { from: 'Astana', to: 'Bali' },
    { from: 'Moscow', to: 'Astana' },
    { from: 'Bali', to: 'SPb' },
   ]
 
   Нужно расположить их один за другим чтобы получился непрерывный маршрут:
  [
    { from: 'Moscow', to: 'Astana' },
    { from: 'Astana', to: 'Bali' },
    { from: 'Bali', to: 'SPb' }
  ]
 */
const getRoute = (tickets) => {
  // реализуй функцию getRoute
}

console.log(
  getRoute([
    { from: 'Astana', to: 'Bali' },
    { from: 'Moscow', to: 'Astana' },
    { from: 'Bali', to: 'SPb' },
  ])
);
/*
  [
    { from: 'Moscow', to: 'Astana' },
    { from: 'Astana', to: 'Bali' },
    { from: 'Bali', to: 'SPb' }
  ]
*/
// ========================================== Задача 3
function sum(a, b, c) { // Функция суммирования трех чисел
  return a + b + c;
}

// Написать функция каррирования для сложения чисел
function curry(fn) { 
 
}

console.log(curry(sum)(1, 2, 3));    // 6
console.log(curry(sum)(1, 2)(3));    // 6
console.log(curry(sum)(1)(2)(3));    // 6



// 1 ================== С бекенда приходит массив такого вида:
const arr = [
    { name: "width", value: 10 },
    { name: "height", value: 20 },
    // ...
];
// Нужно получить объект такого вида:
/*
{
width: 10,
height: 20,
...
}
*/
function objFromArr(arr) {
    if (!arr || !arr.length) return {};
    const mapa = {};
    arr.forEach((el) => {
        mapa[el.name] = el.value;
    });
    return mapa;
}

// 2 ================== 
/**
 * Нужно написать функцию get. На вход функция принимает объект и путь до поля объекта.
 * Путь – это строка, разделенная точкой. Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */
function get(obj, path) {
    if (!obj) return undefined;
    const keys = path.split(".");
    let result = obj;
    for (let i = 0; i < keys.length; i++) {
        const currKey = keys[i];
        const curr = result?.[currKey];
        if (curr === undefined) return undefined;
        if (curr === null && i === keys.length - 1) return null;
        result = result[currKey];
    }
    return result;
}

const obj = {
    a: {
        b: {
            c: "d",
        },
        x: null,
        e: null,
    },
};

get(obj, "a.b"); // { c : 'd' }
get(obj, "a.b.c"); // 'd'
get(obj, "a.e"); // null
get(obj, "a.x.e"); // undefined


// 3 ==================
// Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет.
// Примеры:
// [1, 2, 3] - true
// [6, 3, 2, 1] - true
// [5, 5] - true
// [1, 2, 5, 5, 5, 8, 9] - true
// [1, 2, 5, 5, 5, 2, 1] - false
// [1, 10, 6] - false
// [5, 5, 5, 1] - true
// [1] - true
const isMono = (arr) => {
    let isGoingUp;

    for (let i = 0; i < arr.length - 1; i++) {
        const cur = arr[i];
        const next = arr[i + 1];
        if (curr === next) continue;
        if (cur < next && isGoingUp === false) {
            return false;
        } else if (cur > next && isGoingUp) {
            return false;
        }
    }
    return true;
};

// 4 ==================
// У нас есть функция asyncAuth(callback) , которая принимает функцию-обработчик, которой можно передать ошибку (1-й аргумент) или необходимые данные (2-й аргумент).
// Часть 1. Написать функцию auth , которая выполняет asyncAuth , но возвращает Promise .
import asyncAuth from ".";
// /**
//  * `asyncAuth()` function receives a callback into which
//  * an error may be passed (argument 1) or
//  * data from backend (argument 2).
//  *
//  * You need to implement an `auth()` function
//  * which executes `asyncAuth()`, but returns Promise.
//  *
//  * @returns {Promise}
//  */
function auth() {
    return new Promise((resolve, reject) =>
        asyncAuth((error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        })
    );
}
