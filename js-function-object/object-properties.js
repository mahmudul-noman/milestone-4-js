var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// Alernate system
var penCount = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);

// when we want check properties value using by property Name
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log (propertyValue);

// console.log (propertiesValues);
// console.log (properties);


console.log (shoppingCart);
// 1. sysyem 1 for set new value in object properties
shoppingCart.mouse = 20;
console.log (shoppingCart);

// 2. sysyem 2 for set new value in object properties
shoppingCart['mouse'] = 50;
console.log (shoppingCart);

// 3. sysyem 3 for set new value in object properties
shoppingCart[propertyName] = 75;
console.log (shoppingCart);