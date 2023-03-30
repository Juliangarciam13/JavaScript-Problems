/* My friend wants a new band name for her band. He likes bands that use the formula: "The" + a noun
with the first letter capitalized, for example: "dolphin" -> "The Dolphin" However, when a noun BEGINS and ENDS
with the same letter, she likes to repeat the noun twice and connect them with the first and last letters, combined
in a single word (WITHOUT "The" before it), like this: "alaska" -> "Alaskalaska" Complete the function that takes a noun as a string
and returns the name of your preferred band written as a string.*/

const newNameBand = (nameBand) => {
        let totalString = nameBand.lenght;
        if (nameBand === " ") {
            return 'The Name Band Is Empty';
        } else if (nameBand.charAt(0) === nameBand.charAt(totalString - 1)) {
            let newName = nameBand.repeat(2).toLowerCase();     
            return newName;
        } else if (!nameBand.includes("The")) {
            nameBand = `The ${nameBand}`;
            return nameBand;
        }
}
console.log(newNameBand("Alaska"));
/*The program is still not meeting all the conditions of the problem, 
I am working on it if it meets everything.*/

