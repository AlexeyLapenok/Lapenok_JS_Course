// Функции

// Создать функцию multiply, которая будет принимать любое количество чисел
//  и возвращать их произведение: multiplay(1,2,3) = 6. 
//  Если нет ни одного аргумента вернуть ноль.
function multiple(...args) {
    return args.length == 0 ? 0 : args.reduce((a, b) => a * b);
}

console.log(multiple(1, 2, 3));

// С помощью ри курсе вычислить факториал числа 10.
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
console.log("Факториал 10 = " + factorial(10));

// Создать функцию, которая принимает строку и возвращает
//  перевернутую строку ('test') = 'tset'.
function reverseTest(str) {
    return str.split('').reverse().join('');
}
console.log("('test') = " + reverseTest('test'));

// Написать функцию, которая проверяет является ли слово палиндромом
function palindrome(str) {
    return Array.prototype.reverse.call(str.split(''))
        .join('').toLowerCase() == str.toLowerCase();
}
console.log("is polindrom? " + palindrome('Texet'));


// Создать функцию, которая в качестве аргумента принимает
//  строку из букв и возвращает строку, где каждый символ разделен
//   пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
function getUniCodes(str) {
    return (Array.prototype.map.call(str, function (char) {
        return char.charCodeAt(0);
    })).join(" ");
}
console.log(getUniCodes("hello"));

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль 
// ('test') => 't' 'e' 's' 't'
function stringRecourse(str) {
    let i = 0;
    console.log(str.charAt(i));
    if (str.length > 1) {
        return stringRecourse(str.slice(1, str.length));
    }
}
stringRecourse('test');

// Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и callback, возвращая строку из обработанного массива.
// вторая функция (callback) обрабатывает каждый элемент массива
function returnStringFromArray(arr, callback) {
    let str = "";
    str = arr.join("");
    return str;
}
function getItemArray(arr) {
    return arr.map(callback(arr));
}
console.log(returnStringFromArray(["test", "test", "test"], getItemArray));

// function returnStringFromArray(array, callback) {
//     console.log(array);
//     callback(array);
// }

// returnStringFromArray(arr, function getItemArray(arr) {
//     let str = "";
//     for (let i = 0; i < arr.length; i++) {
//         let t = arr[i];
//         str += t;
//     }
//     console.log(str);
// })