function ticketPrice(ticketQty) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQty <= 100) {
        const price = ticketQty * first100Rate;
        return price;
    }
    else if (ticketQty <= 200) {
        const first100Price =100 * first100Rate;
        const restTicketQty = ticketQty - 100;
        const restTicketPrice = restTicketQty * second100Rate;
        const totalPrice = restTicketPrice + first100Price;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQty = ticketQty - 200;
        const restTicketPrice = restTicketQty * restTicketRate;
        const totalPrice = restTicketPrice + first100Price + second100Price;
        return totalPrice;
    }
}

const price = ticketPrice(201);
console.log("Your total purchase amount: ", price);