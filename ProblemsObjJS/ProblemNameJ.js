/*Tenemos un arreglo de usuarios cada uno con 2 atributos: nombre y 
apellido y lo que queremos es imprimir los usuarios que contengan J.*/
const users = [
    {name: "Julian", lastName: "Garcia"},
    {name: "Jenny", lastName: "Gomez"},
    {name: "Andres", lastName: "Mateus"},
    {name: "Mariana", lastName: "Carvajal"},
    {name: "Catalina", lastName: "Lesma"}
];
const checkName = (name) => {
    const namesJ = users.find((n) => n.name.includes("J"));
    console.log(namesJ);
}
checkName(users);