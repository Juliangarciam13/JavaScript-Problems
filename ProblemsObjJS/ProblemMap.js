/*Tenemos un arreglo de objetos*/
const fruits = [
    {name: "apple", color: "red", price: 25},
    {name: "banana", color: "yellow", price: 30},
    {name: "orange", color: "orange", price: 20}
];

const fruitNames = fruits.map((f) => f.name);
console.log(fruitNames);

const fruitColor = fruits.map((c) => c.color);
console.log(fruitColor);

const fruitPrice = fruits.map((p) => p.price);
console.log(fruitPrice);
