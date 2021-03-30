// Объекты

// Создать объект с полем 'notebook' равным 'MacBook'
let macbookIs = {
    notebook: 'MacBook'
};
console.log(macbookIs);

// Добавить в объект из предыдущей задачи поле 'price', равное 1500
//  и поле currensy, равная 'dollar'
let macbookPrice = {
    notebook: 'MacBook',
    price: '1500',
    currensy: 'dollar'
};
console.log(macbookPrice);

// Добавить поле details, которое будет содержать объект с полями model
//  и color (значения этих полей задайте сами)
let macbookDetails = {
    notebook: 'MacBook',
    price: 1500,
    currensy: 'dollar',
    details: {
        model: '1307',
        color: 'space-gray'
    }
};
console.log(macbookDetails);
