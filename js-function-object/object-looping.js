// OBJECT LOOPING :::::::::::::::::::::::::::::::::::::::::::::::::
var shopping_Cart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
}

// get property from object shopping_Cart (like: books, sunglass etc.)
const keys = Object.keys(shopping_Cart);
// console.log (keys);

// get values from object shopping_Cart (like: 3, 1, 5 etc.)
const values = Object.values(shopping_Cart);
// console.log(values);

// Looping
// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i=0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shopping_Cart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shopping_Cart){
    const value = shopping_Cart[propertyName];
    console.log(propertyName, value);
}