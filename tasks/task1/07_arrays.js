// Массивы

// Используя функцию, найти последний элемент массива, не изменяя его.
function returnLastItem(arr) {
    return arr[arr.length - 1];
}
console.log(returnLastItem([1, 3, 6]));

// Создать такую функцию, которая принимала бы массив [1,3,6],
//  а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
function returnDoubleItem(myArray) {
    return myArray.concat(myArray);
}
console.log(returnDoubleItem([1, 3, 6]));

// Создать такую функцию, которая принимала бы любое число,
//  а возвращала массив, заполненный числами от 1 до n.
function returnAnyNumber(anyNumber) {
    let getNewArray = [];
    for (let i = 1; i <= anyNumber; i++) {
        getNewArray.push(i);
    }
    return getNewArray;
}
console.log(returnAnyNumber(5));

// Создать такую функцию, которая принимала бы любое число массивов и
//  удаляла из каждого массива первый элемент, а возвращала массив оставшихся
//   значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
function deleteFirstItem(...arg) {
    let result = [];
    for (let i = 0; i < arg.length; i++) {
        arg[i].shift();
        result.push(arg[i]);
    }
    return result;
}
console.log(deleteFirstItem([1, 2, 3], ['x', 'y', 'z']));


// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в
//  алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
function sortString(str) {
    return str.split('').sort((a, b) => a.localeCompare(b)).reverse().join('');
}
console.log(sortString('екважбигёзд'));


// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function sortNumbers(arr) {
    return arr.sort().reverse();
}
console.log(sortNumbers([5, 2, -1, 6, 9, -9, 3]));

// Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный 
// номер элемента в массиве конечный номер
// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива 
// согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]),
//  не изменяя исходный массив и не используя циклы.
function getNewArray(arr, first, last) {
    return arr.slice(first, last + 1);
}
console.log(getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1, 3));

// Удвоить элементы массива, не используя циклы.,
const numbers = [1, 2, 3, 4];
const doubles = numbers.map(num => num * 2)
console.log(doubles);


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
const array1 = [1, 2, 3, 4, 5];
const deleteSecondThird = array1.splice(1, 2)
console.log(array1);


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место 
// вставить “три” и “четыре” соответственно.
const array2 = [1, 2, 3, 4, 5];
const pasteThirdFourth = array2.splice(1, 2, "три", "четыре")
console.log(array2);

// Вставить в произвольный массив любое значение после второго элемента.
const array3 = [1, 2, 3, 4, 5];
array3.splice(2, 0, "any value");
console.log(array3);

// Отсортировать массив массив таким образом, чтобы вначале шли массивы с
//  наименьшей длиной. Создать копию произвольного массив"
function sortCopy(arg) {
    let clone = arg.slice(0);
    return clone.sort((a, b) => a.length > b.length ? 1 : -1);
}
console.log(sortCopy([[1, 2, 3, 4], [2, 3], [4, 4, 5]]));


// Отсортировать массив объектов по возрастающему количеству ног животных:
//  [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", 
//  info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, 
//  {kind: "lobster", info: {legs: 10, eyes: 2}},]
function sortByAge(arr) {
    return arr.sort((a, b) => a.info.legs > b.info.legs ? 1 : -1);
}
let tarantula = { kind: "tarantula", info: { legs: 8, eyes: 8 } };
let frenchBulldog = { kind: "french bulldog", info: { legs: 4, eyes: 2 } };
let human = { kind: "human", info: { legs: 2, eyes: 2 } };
let lobster = { kind: "lobster", info: { legs: 10, eyes: 2 } };

let arr = [tarantula, frenchBulldog, human, lobster];

console.log(sortByAge([tarantula, frenchBulldog, human, lobster]));


// Написать функцию, которая принимает массив услуг и два числа, представляющих 
// собой время исполнения услуг, а также возвращает все услуги, находящиеся 
// в диапазоне времени исполнения и отсортированные от меньшего времени исполнения 
// к большему. 
const services = [{ service: "service1", executionTime: 56 },
{ service: "service2", executionTime: 97 },
{ service: "service3", executionTime: 23 }, { service: "service4", executionTime: 65 },
{ service: "service5", executionTime: 2 }, { service: "service6", executionTime: 73 },
{ service: "service7", executionTime: 82 }, { service: "service8", executionTime: 19 },
{ service: "service9", executionTime: 33 }, { service: "service10", executionTime: 42 },];
// Например, filterServices(services, 20, 60).
function filterServices(arr, before, after) {
    return arr.sort((a, b) => a.executionTime > b.executionTime ? -1 : 1)
        .sort((a, b) => (a.executionTime > before && a.executionTime < after)
            > (b.executionTime > before && b.executionTime < after) ? 1 : -1)
        .splice(6, arr.length);
}
console.log(filterServices(services, 20, 60));