/*Tenemos un arreglo users con 5 objetos que contiene el nombre del usuario 
y su apellido y lo que se quiere es imprimir el objeto que contenga el 
apellido "Garcia"*/
const users = [
    {name: "Julian", lastName: "Garcia"},
    {name: "Jenny", lastName: "Gomez"},
    {name: "Andres", lastName: "Mateus"},
    {name: "Mariana", lastName: "Carvajal"},
    {name: "Catalina", lastName: "Lesma"}
];
const checkLastName = (name, lastName) => {
    const lastNameG = users.find((l) => l.lastName === "Garcia");
    console.log(lastNameG);
}

checkLastName(users);
