/*Given a List [] of n integers , find minimum number to be 
inserted in a list, so that sum of all elements of list should 
equal the closest prime number .*/
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const minimumNumber = (numbers) => {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let diff = 0;
    while (!isPrime(sum + diff)) {
        diff++;
    }
    return diff;
}

console.log(minimumNumber([3,1,2]));
/*Since , the sum of the list's elements equal to (6) , the minimum 
number to be inserted to transform the sum to prime number is (1) , 
which will make the sum of the List equal the closest prime number (7) .*/
console.log(minimumNumber([2,12,8,4,6]));
/*Since , the sum of the list's elements equal to (189) , the minimum number 
to be inserted to transform the sum to prime number is (2) , which will make 
the sum of the List equal the closest prime number (191) .*/

/*NOTE: I didn't understand the exercise very well so I looked it up on the 
internet and I didn't understand: i <= Math.sqrt(num) 
and numbers.reduce((acc, curr) => acc + curr, 0)*/