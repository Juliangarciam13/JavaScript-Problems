/* Create a function that takes an array of integers and
non-negative strings and return a new array without the integers.*/
const character = ["a", 1, "b", 2, "c", 3];
const filterChararter = (character) => {
    return character.filter(c => typeof c === "string");
}
console.log(filterChararter(character));
