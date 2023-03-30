/*create a function to filter the numbers greater 
than or equal to 7 from an array*/
const character = [3, 1, 7, 2, 8, 12];
const filterCharacter = (character) => {
    return character.filter(c => c >= 7 );
}
console.log(filterCharacter(character));