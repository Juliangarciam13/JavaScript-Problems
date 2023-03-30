/* Given an array of integers nums where each element appears n times, identify
What is the element that is repeated the most */

const nums = [1, 1, 2, 1, 2, 3, 2, 2];
function mostRepeatedElement(nums) {
    let count = {};
    let maxCount = 0;
    let maxElement = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in count) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
        if (count[nums[i]] > maxCount){
            maxCount = count[nums[i]];
            maxElement = nums[i];
        }
    }
    return maxElement;
}
console.log(mostRepeatedElement(nums));
