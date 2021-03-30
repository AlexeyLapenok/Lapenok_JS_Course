// Циклы

// В строке "Я стану крутым программистом" сделать первую букву 
// каждого слова в верхнем регистре"
let stringInitial = "Я стану крутым программистом";
let everyWordBeginUpper = '';
// let i = 0;
// while (i < stringInitial.length) {
//     everyWordBeginUpper += (stringInitial[i - 1] == ' ') ?
//         stringInitial[i].toUpperCase() : stringInitial[i];
//     i++;
// }

for (i = 0; i < stringInitial.length; i++) {
    everyWordBeginUpper += (stringInitial[i - 1] == ' ') ?
        stringInitial[i].toUpperCase() : stringInitial[i];
}
console.log(everyWordBeginUpper);

// Вычислить факториал числа 9 (факториал числа - это произведение всех 
// натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

// На основе строки "теперь я мастер циклов javascript" создать новую строку, 
// где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.