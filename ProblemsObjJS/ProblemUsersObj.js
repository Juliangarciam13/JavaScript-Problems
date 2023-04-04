/*Tenemos un arreglo users con 4 objetos y cada uno tiene 3 atributos: nombre,
id y edad y lo que se quiere es filtrar las personas que son mayores de edad 
y que se imprima todo el objeto*/
const users = [
    {name: "Julian", id: 12345, age: 25},
    {name: "Andres", id: 22334, age: 16},
    {name: "Estefania", id: 57824, age: 35},
    {name: "Sara", id: 98765, age: 17},
];

const userAdult = (age) => {
    const adult = users.filter((u) => u.age >= 18);
    console.log(adult);
}
userAdult(users);

const userNameJ = users.filter((n) => n.name.includes("J"));
console.log(userNameJ);