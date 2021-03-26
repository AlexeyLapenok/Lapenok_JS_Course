// Переменные

// Придумать название для переменных, которые описывают (let, const)
// имя (постоянное)
const name;
// фамилия (постоянное)
const lastName;
// возраст (может изменяться)
let age;
// информация о пользователе ( может изменяться)
let userInfo;

//   Что будет в консоле и почему:

// 1
console.log(test);
var test = 'string';

// undefined
// Особенность var, работает на всплытие

// 2
var x = 'string';
var x = 'string 2';
console.log(x);

// string 2
// При изменении переменной повторное обьявление в var не считаеться ошибкой

// 3
console.log(test);
let test = 'string';

// ReferenceError
// let не работает на всплытие, только var 

// 4
const x = 'string';
const x = 'string 2';
console.log(x);

// SyntaxError
// Нельзя изменить значение переменной

// 5
let num = 12;
let num = 1;
console.log(num)

  // SyntaxError
  // Второй раз объявлять переменную не нужно