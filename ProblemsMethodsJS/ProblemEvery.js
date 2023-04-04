/*we have a names array and we want to check if all the elements include 
the character "j"*/
const names = ["Julia", "Juliana", "Jose", "Juan", "Jina"];
const namesStartWithJ = (names) => {
    if(names.every(n => names.includes("J"))){
    return namesStartWithJ;
} else {
    return false;
}
}
console.log(namesStartWithJ(names));

const names1 = ["Julia", "Juliana", "Jose", "Juan", "Juana"];
const namesStartWithJ1 = (names1) => {
    if(names1.every(n => names1.includes("J"))){
    return namesStartWithJ1;
} 
}
console.log(namesStartWithJ1(names1));