// Объекты

// Создать объект с полем 'notebook' равным 'MacBook'
let notebookInfo = {
    notebook: 'MacBook'
};

// Добавить в объект из предыдущей задачи поле 'price', равное 1500
//  и поле currensy, равная 'dollar'
notebookInfo = {
    notebook: 'MacBook',
    price: '1500',
    currensy: 'dollar'
};

// Добавить поле details, которое будет содержать объект с полями model
//  и color (значения этих полей задайте сами)
notebookInfo = {
    notebook: 'MacBook',
    price: 1500,
    currensy: 'dollar',
    details: {
        model: '1307',
        color: 'space-gray'
    }
};
console.log(notebookInfo);
