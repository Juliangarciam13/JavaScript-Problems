/*we have an array of objects that contain ice cream flavors, price, and quantity. 
create a function in which an order is taken (flavor and quantity) and check if the 
flavor and quantity is available and if it is available that will total the value of the order*/
let ourIceCram = [
    { flavor: "Brownie", price: 1500, stock: 6 },
    { flavor: "Chocolate", price: 1800, stock: 4 },
    { flavor: "Strawberry", price: 1600, stock: 0 },
    { flavor: "Lemon", price: 1300, stock: 2 }
];

const buyIceCream = (flavor, amount) => {
    const selectedFlavor = ourIceCram.find((f) => f.flavor === flavor);
    if (!selectedFlavor) {
        console.log("Sorry, we don't have that flavor.");
        return;
    } else if (selectedFlavor.stock <= amount) {
        console.log( `Sorry, we only have ${selectedFlavor.stock} scoops of ${flavor} left.` );
        return;
    }
    const totalPrice = selectedFlavor.price * amount;
    console.log(`The total price for ${amount} scoops of ${flavor} is $${totalPrice}.`);
    selectedFlavor.stock -= amount;
    console.log(`We now have ${selectedFlavor.stock} scoops of ${flavor} left.`);
}

buyIceCream("Brownie", 3);
buyIceCream("Chocolate", 3);
buyIceCream("Strawberry", 3);