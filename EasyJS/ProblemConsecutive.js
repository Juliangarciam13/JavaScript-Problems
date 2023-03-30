/* Your task is to find all the elements of an array that are not consecutive.
A number is not consecutive if it is not exactly one greater than the previous element.
in the matrix. The first element gets a pass and is never considered non-consecutive.
Create a function called allNonConsecutive For example, if we have an array, [1,2,3,4,6,7,8,15,16]
so 6 and 15 are not consecutive. It should return the results as an array of objects with two
values ​​i: <the index of the non-consecutive number> and n: <the non-consecutive number>.*/

const nums = [1, 2, 3, 4, 6, 7, 8, 15, 16];
const allNonConsecutive = (nums) => {
    for (let i = 0; i < nums.lenght; i++) {
        let nonConsecutives = {i, n};
        if ((nums[i] - nums[i + 1]) > 1) {
            nonConsecutives.push({i: nums[i], n: nums[i+1]});
        } 
        
    }
    return nums;
};
console.log(allNonConsecutive(nonConsecutives));
/*I don't quite understand how to return the non-consecutive numbers 
in i and n*/