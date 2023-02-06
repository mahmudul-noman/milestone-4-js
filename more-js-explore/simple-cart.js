const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 700 }
];

function totalCost(products) {
    let totalExpenses = 0;
    for (let i = 0; i < products.length; i++) {
        const singleProduct = products[i];
        totalExpenses = totalExpenses + singleProduct.price;
        // console.log(singleProduct);
    }
    return totalExpenses;
}

const expense = totalCost(shoppingCart);
console.log('Today total expenses: ', expense);