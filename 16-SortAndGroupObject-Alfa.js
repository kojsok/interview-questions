Задача из Альфа Банк: Сортировка и группировка операций по дате

Позиция: Мидл/Мидл+/Сеньор

Вилка: 250к-350к

Опыт в резюме: 4 года

У вас есть массив объектов operations, представляющих операции с датами и суммами. Необходимо:

1. Отсортировать массив операций по датам.
2. Сгруппировать операции по году.
3. Представить результат в виде объекта, где ключи — это годы, а значения — массивы строк с датами в формате MM-DD, отсортированные по возрастанию.

Пример ожидаемого результата:

const result = {
  "2017": [
    "01-31",
    "03-31",
    "05-31",
    "07-31",
    "08-22",
    "09-30",
    "12-31"
  ],
  "2018": [
    "02-28",
    "03-31",
    "04-14",
    "07-31",
    "11-30"
  ]
};


Стартовый код:

const operations = [
   { "date": "2017-07-31", "amount": "5422" },
   { "date": "2017-03-31", "amount": "5220" },
   { "date": "2017-05-31", "amount": "5365" },
   { "date": "2017-08-22", "amount": "5451" },
   { "date": "2017-09-30", "amount": "5303" },
   { "date": "2017-01-31", "amount": "5545" },
   { "date": "2018-07-31", "amount": "5589" },
   { "date": "2018-11-30", "amount": "5567" },
   { "date": "2017-12-31", "amount": "5597" },
   { "date": "2018-03-31", "amount": "5359" },
   { "date": "2018-02-28", "amount": "5082" },
   { "date": "2018-04-14", "amount": "2567" }
];

function sortOperations(operations) {
  // Ваша реализация здесь
}

//============решение========================
function sortOperations(operations) {
  const result = {};
  const sortedOperations = [...operations].sort((a, b) => {
      const timestampA = new Date(a.date).getTime();
      const timestampB = new Date(b.date).getTime();
      
      return timestampA - timestampB;
  });
  
  for(const operation of sortedOperations) {
      const [year, month, day] = operation.date.split('-');
      
      if(!(year in result)) {
          result[year] = [];
      }
      
      result[year].push(`${month}-${day}`);
  }
  
  return result;
}

