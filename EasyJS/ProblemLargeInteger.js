/* You are given a large integer represented as an array of digits integers, where
each digits[i] is the digit of the integer. The digits are ordered from most significant
to least significant in order from left to right. The big integer does not contain any initial 's.i[0]
Increment the large integer by one and return the resulting array of digits.
Input: digits = [1,2,3] Output: [1,2,4]*/
let digits = [4,3,2,1];
const sum = (digits) => {
let newNum = parseInt(digits.join(''));
    newNum = newNum + 1;
/*I think that to finish the exercise you have to use this method: let arrFinal = digits.form(digits, sum); 
but when I try it tells me that digits.form is not a function. */
    return newNum;
}
console.log(sum(digits));

/* the join() method is used to concatenate the numbers into a string and the parseInt() function
to convert the string to an integer.*/