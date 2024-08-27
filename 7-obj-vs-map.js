Сравнение объектов и Map в JavaScript

📌 Тип ключей:
Объект: Ключи приводятся к строкам. Любой нестроковый ключ, например объект, будет преобразован в строку.

Map: Ключи могут быть любого типа, включая объекты, функции и числа.


const obj = {};
const map = new Map();

const keyObj = {};
obj[keyObj] = 'value'; // Ключ преобразуется в "[object Object]"
map.set(keyObj, 'value'); // Ключ остается объектом

console.log(obj[keyObj]); // 'value'
console.log(map.get(keyObj)); // 'value'


📌  Порядок ключей:
Объект: Порядок ключей не гарантирован.

Map: Порядок ключей сохраняется в том порядке, в котором они были добавлены.


const obj = { b: 2, a: 1 };
const map = new Map([['b', 2], ['a', 1]]);

console.log(Object.keys(obj)); // ['b', 'a'] (порядок не гарантирован)
console.log([...map.keys()]); // ['b', 'a'] (порядок гарантирован)


📌  Итерация:
Объект: Нужно использовать Object.keys(), Object.values(), или Object.entries() для итерации.

Map: Поддерживает методы для итерации по умолчанию, включая map.keys(), map.values(), и map.entries().


const obj = { a: 1, b: 2 };
const map = new Map([['a', 1], ['b', 2]]);

for (const key in obj) {
  console.log(key, obj[key]);
}

for (const [key, value] of map) {
  console.log(key, value);
}


📌  Дополнительные методы:
Объект: Ограниченные возможности, требует использования Object.keys(), Object.values(), и других вспомогательных функций для работы с данными. Для очистки свойств нужно явно удалять каждое свойство.

Map: Обладает множеством удобных методов:
set(key, value): Добавляет элемент.
get(key): Получает значение по ключу.
has(key): Проверяет наличие ключа.
delete(key): Удаляет элемент.
clear(): Удаляет все элементы.
