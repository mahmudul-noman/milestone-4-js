const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 5 },
    { name: 'shirt', price: 2200, quantity: 4 },
    { name: 'pant', price: 3700, quantity: 3 },
    { name: 'belt', price: 700, quantity: 2 },
];

function totalCost(products) {
    let totalExpenses = 0;
    for (let i = 0; i < products.length; i++) {
        const singleProduct = products[i];
        productTotal = singleProduct.price * singleProduct.quantity;
        totalExpenses = totalExpenses + productTotal;
        // console.log(singleProduct);
    }
    return totalExpenses;
}

const expense = totalCost(shoppingCart);
console.log('Today total expenses: ', expense);