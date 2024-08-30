Задача №1:
Сложность: Easy
Написать функцию sleep, которая принимает продолжительность в миллисекундах и возвращает Promise, который разрешается после указанной задержки.

function sleep(duration) {
    // ваш код здесь
}


Задача №2:
Сложность: Easy
Написать функцию myJoin, которая имитирует работу метода Array.prototype.join. Функция принимает разделитель и любое количество аргументов, а затем соединяет их в строку.

const myJoin = (separator, ...args) => {
    // ваш код здесь
}

myJoin('.', 'a', 'b', 'c'); // 'a.b.c'
myJoin('-', 'a', 'b', 'c', 'd'); // 'a-b-c-d'


Задача №3:
Сложность: Medium
Написать имплементацию Promise.any. Функция должна принимать массив промисов и возвращать новый промис, который разрешается, если хотя бы один из переданных промисов разрешен. В случае, если все промисы отклонены, должен быть вызван reject с ошибкой AggregateError.

function any(promises) {
    // ваш код здесь
}


Задача №4:
Сложность: Hard
Написать функцию-декоратор, которая ограничивает число вызовов исходной функции. Декоратор принимает три аргумента:
- Исходную функцию
- Лимит вызовов
- Callback, который должен быть вызван при достижении лимита.
У возвращаемой функции должен быть метод reset, который сбрасывает счетчик вызовов.

function limitedCalls(fn, limit, callback) {
    // ваш код здесь
}

// Примеры использования:
function log(name) {
    return `Hello, ${name}!`;
}

function limitReached(name) {
    return `Sorry, ${name}, the function can no longer be called.`;
}

const limitedLog1 = limitedCalls(log, 2, limitReached);
limitedLog1('Alice'); // "Hello, Alice!"
limitedLog1('Alice'); // "Sorry, Alice, the function can no longer be called."

limitedLog1.reset();
