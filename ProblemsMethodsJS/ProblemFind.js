/*we have an array of objects called users and we want to check 
if the user's last name matches or is empty, if it matches print 
a welcome message using their first and last name*/
const users = [
    {name: "Julian", lastName: "Garcia"},
    {name: "Jenny", lastName: "Gomez"},
    {name: "Andres", lastName: "Mateus"},
];
const checkNameLastName = (name, lastName) => {
    const checkLastName = users.find((u) => u.lastName === lastName);
    if (checkLastName === undefined) {
        console.log("Sorry, Check The Last Name");
    } else if (checkLastName.lastName === lastName) {
        console.log( `Welcome ${name}, Your lastName is ${lastName}.` );
    } else {
        console.log("No Register");
        
    }
}


checkNameLastName("Julian", "Garci");
checkNameLastName("Julian", "Garcia");