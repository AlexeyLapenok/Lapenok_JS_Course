// Числа

// Получить число Pi из Math и округлить его до двух знаков после точки
let numPi;
numPi = Math.PI.toFixed(2);
console.log("Число Пи " + numPi);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
let maxValue, minValue;
maxValue = Math.max(10, 17, 5, 12, 15, 99, 1);
minValue = Math.min(10, 17, 5, 12, 15, 99, 1);
console.log("Максимальное значение ряда: 10, 17, 5, 12, 15, 99, 1 число " + maxValue);
console.log("Минимальное значение ряда: 10, 17, 5, 12, 15, 99, 1 число " + minValue);

// С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой
let numRundom;
numRundom = Math.random().toFixed(2);
console.log(numRundom);
// получить случайное число от 0 до Х
let X = 100;
let numRundomX;
numRundomX = Math.floor(Math.random() * 100);
console.log(numRundomX);
// Получить число из строки '100$'
let numStr;
numStr = parseFloat('100$');
console.log(numStr);