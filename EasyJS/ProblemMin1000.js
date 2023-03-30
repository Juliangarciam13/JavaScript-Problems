/*we have an array of numbers and we want the numbers greater than 1000 to appear 
first in the array*/
let numbersGreaterThan1000 = [800, 5000, 84, 2031, 65, 80, 6200, 1015, 90, 500];
numbersGreaterThan1000.sort((a) => {
    if (a <= 1000) {
        return 1;
    } 
    return -1;
});
console.log(numbersGreaterThan1000);
