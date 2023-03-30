/* Given a mixed matrix of numbers and strings of representations
 of integers, add the non-string integers and subtract the total from
 the string integers. Returns as a number.*/
const x = [2, 4, "3", 5, 10,"5"];
const numString = (x) => {
    let totalSum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number' ) {
            totalSum += x[i];
        } else if (typeof x[i] === 'string'){
            totalSum -=  parseInt(x[i]);
        }
    }
    return totalSum
};
console.log(numString(x));