// Строки
let string = 'string test example'
// не производить подсчетов вручную

// Получить первую и последнюю букву строки
let firstLetter = string[0];
let lastLetter = string[string.length - 1];
console.log("Первая буква: " + firstLetter + " Последняя буква " + lastLetter);

// Сделать первую и последнюю буквы в верхнем регистре
let upperCase = string[0].toLocaleUpperCase() + string.slice(1, string.length - 1)
    + string[string.length - 1].toLocaleUpperCase();
console.log(upperCase);

// Найти положение слова string в строке
let stringPlace = string.indexOf('string');
console.log("Слово начинается с " + stringPlace + " индекса");

// Найти положение второго пробела
function findSecondSpace(str) {
    let index = str.indexOf(' ', str.indexOf(' ') + 1);
    return index;
}
console.log("Второй пробел находиться под индексом " + findSecondSpace('string test example'));

// Получить строку со 2-ого символа длинной 6 букв
let sixLetters = string.substr(1, 7);
console.log(sixLetters);

// Получить строку с 1 по 7 символ
let sevenLetters = string.slice(0, 8);
console.log(sevenLetters);

// Получить из ух переменных типа number x = 20, y = 21 получить строку '2021'
let x = 20;
let y = 21;
let thisYear = x.toString() + y.toString();
console.log(thisYear);