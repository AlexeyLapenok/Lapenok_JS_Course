document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // Переменные

  // // Придумать название для переменных, которые описывают (let, const)
  // // имя (постоянное)
  // const name;
  // // фамилия (постоянное)
  // const lastName;
  // // возраст (может изменяться)
  // let age;
  // // информация о пользователе ( может изменяться)
  // let userInfo;

  // Что будет в консоле и почему:

  // // 1
  // console.log(test);
  // var test = 'string';

  // // undefined
  // // Особенность var, работает на всплытие

  // // 2
  // var x = 'string';
  // var x = 'string 2';
  // console.log(x);

  // // string 2
  // // При изменении переменной повторное обьявление в var не считаеться ошибкой

  // // 3
  // console.log(test);
  // let test = 'string';

  // // ReferenceError
  // // let не работает на всплытие, только var 

  // // 4
  // const x = 'string';
  // const x = 'string 2';
  // console.log(x);

  // // SyntaxError
  // // Нельзя изменить значение переменной

  // // 5
  // let num = 12;
  // let num = 1;
  // console.log(num)

  // // SyntaxError
  // // Второй раз объявлять переменную не нужно


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
  console.log("Слово начинается с " + stringPlace + " символа");
  // Найти положение второго пробела
  let secondSpacebar = string.indexOf(' exam');
  console.log("Второй пробел это " + secondSpacebar + " символ");
  // Получить строку со 2-ого символа длинной 6 букв
  let sixLetters = string.substr(1, 6);
  console.log(sixLetters);
  // Получить строку с 1 по 7 символ
  let sevenLetters = string.slice(0, 8);
  console.log(sevenLetters);
  // Получить из ух переменных типа number x = 20, y = 21 получить строку '2021'
  let x = 20;
  let y = 21;
  let thisYear = x.toString() + y.toString();
  console.log(thisYear);


  // Числа
  // Получить число Pi из Math и округлить его до двух знаков после точки
  // Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
  // С помощью Math.random:
  // получить случайное число и округлить его до двух цифр после запятой
  // получить случайное число от 0 до Х
  // Получить число из строки '100$' 


});