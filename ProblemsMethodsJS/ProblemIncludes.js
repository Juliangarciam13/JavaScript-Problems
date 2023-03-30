/*create a function to check if the band name includes "The" 
or not, if it does return true and if not return false*/
const checkNameBand = (nameBand) => {
    if(nameBand.includes("The")){
        return true;
    } else {
        return false;
    }
}
console.log(checkNameBand("Beatles"));
console.log(checkNameBand("The Beatles"));