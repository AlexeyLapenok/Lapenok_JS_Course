document.addEventListener('DOMContentLoaded', function () {
  console.clear();

  // Создать функцию которая принимает два. Функция проверяет является ли 
  // первый элемент родителям для второго элемента 
  // isParent(parent, child) => true || false
  function isParent(parent, child) {
    let result = parent.contains(child);
    return result;
  }
  console.log('Is parent? ' + isParent(document.documentElement, document.body));
  console.log('Is parent? ' + isParent(document.querySelector('article'), document.querySelector('div')));

  // Найти элемент который находится перед списком ul
  console.log('Element before unordered list is ' + document.querySelector('ul').previousElementSibling);

  // Найти параграф и получить его текстовые содержимое
  let text = document.querySelector('p').textContent;
  console.log(text);

  // Создать функцию, которая принимает в качестве аргумента узел DOM 
  // и возвращает информацию виде объекта о типе узла, имени узла 
  // и количестве дочерних узлов.
  function getInfo(arg) {
    let infoNode = new Object();
    infoNode.type = arg.nodeType;
    infoNode.name = arg.nodeName;
    infoNode.quantityChildNodes = arg.childNodes;
    return infoNode;
  }
  console.log(getInfo(document.body.firstChild));

  // Найти список и добавить ему класс "list"
  document.querySelector('ul').classList.add('list');

});