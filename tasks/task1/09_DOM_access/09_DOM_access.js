// Получить и вывести в консоль:
// head
console.log(document.head);

// body
console.log(document.body);

// все дочерние элементы body
console.log(document.body.children);

// первый div и все его дочерние узлы 
console.log(document.body.firstElementChild.childNodes);

// 4.1 вывести все дочерние узлы в консоль 
console.log(document.documentElement.childNodes);

// 4.2 вывести все дочерние узлы в консоль кроме первого
if (document.documentElement.childNodes) {
    const child = document.documentElement.childNodes;
    for (var i = 1; i < child.length; ++i) {
        console.log(child[i]);
    }
};