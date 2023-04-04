/*there is an array of objects which has a name, username and password. create a function 
which verifies that the username and password match, if they do not match, subtract 1 from 
the attempts variable (maximum 3)*/
const users = [
    {name: "Julian", userName: "Julian13", password: "12345"},
    {name: "Jenny", userName: "Jenny21", password: "23456"},
    {name: "Andres", userName: "Andres8", password: "34567"},
];
let attempts = 3;
const usersVerification = (name, userName, password) => {
    const checkUserName = users.find((u) => u.userName === userName);
    if (checkUserName === undefined) {
        console.log("Sorry, Check The Username");
        return;
    } else if (checkUserName.password === password) {
        console.log( `Welcome ${name}, Your Data Is Correct.` );
        return;
    } else {
        attempts--;
        if(attempts === 0){
            console.log("Acces Denied");
        }
    }
}

usersVerification("Julian", "Julian13", "12345");