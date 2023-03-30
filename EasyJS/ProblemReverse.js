/* Write a function that takes a two-digit number and determines
if it is the largest of the possible two-digit exchanges.*/
const numsReverse = (num) => {
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    if(num < reversed){
        return "The Num Is Less Than The Reversed";
    } else {
        return "The Num Is Greater Than The Reversed";
    }
}
console.log(numsReverse(43));
