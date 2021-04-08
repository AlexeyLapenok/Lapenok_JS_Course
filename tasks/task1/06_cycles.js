// Циклы

// В строке "Я стану крутым программистом" сделать первую букву 
// каждого слова в верхнем регистре"
let stringInitial = "Я стану крутым программистом";
let everyWordBeginUpper = '';
for (i = 0; i < stringInitial.length; i++) {
    everyWordBeginUpper += (stringInitial[i - 1] == ' ') ?
        stringInitial[i].toUpperCase() : stringInitial[i];
}
console.log(everyWordBeginUpper);

// Вычислить факториал числа 9 (факториал числа - это произведение всех 
// натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .
let total = 1;
let n = 9;
for (let i = n; i > 1; i--) {
    total *= i;
}
console.log("9! = " + total);

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
let stringLight = 'Просветление наступит через: ';
let stringCountdown = "";
for (let i = 10; i > 1; i--) {
    stringCountdown += i + ", ";
}
console.log(stringLight + stringCountdown + "1");

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
let oddNumber = "";
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        oddNumber += i + " ";
    }
}
console.log("Нечётные числа : " + oddNumber);

// На основе строки "теперь я мастер циклов javascript" создать новую строку, 
// где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.
// let stringMasterCycles = "теперь я мастер циклов javascript";
// let stringWithoutSpaces = '';
// stringMasterCycles = stringMasterCycles[0].toUpperCase() +
//     stringMasterCycles.slice(1, stringMasterCycles.length);
// for (i = 0; i < stringMasterCycles.length; i++) {
//     stringWithoutSpaces += (stringMasterCycles[i - 1] == ' ') ?
//         stringMasterCycles[i].toUpperCase() : stringMasterCycles[i];
// }
// if (true) {
//     stringWithoutSpaces = stringWithoutSpaces.replace(/\s+/g, '');
// }
// console.log(stringWithoutSpaces);

let stringMasterCycles = "теперь я мастер циклов javascript";
let stringWithoutSpaces = '';
for (i = 0; i < stringMasterCycles.length; i++) {
    stringWithoutSpaces += (stringMasterCycles[i - 1] == ' ') || (i === 0)
        ? stringMasterCycles[i].toUpperCase() : stringMasterCycles[i]
            .split(" ").join("");
}
console.log(stringWithoutSpaces);