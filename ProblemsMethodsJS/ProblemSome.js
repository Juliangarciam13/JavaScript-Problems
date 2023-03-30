/*we have an array nums and we want to check if any element 
is of type string*/
const nums = [1, "2", 3, "4", 5, 6];
const numsStrings = (nums) => {
    for(let i = 0; i < nums.lenght; i++){
    let even = nums.some((n) => typeof nums[i] === "string");
    return true;
}
}

console.log((numsStrings(nums)));

const nums1 = [1, 2, 3, 4, 5, 6];
const numsEven1 = (nums1) => {
    let even = nums1.some((n) => typeof nums1 === "string");
    return even;
}

console.log((numsEven1(nums1)));