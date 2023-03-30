/* Create a function that takes an array of numbers and returns 
the minimum and maximum numbers, in that order.*/
const nums = [1, 2, 4, 9, 8, 7, 3, 6];
const findMinMax = (nums) => {
  let min = nums[0];
  let max = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  
  return [min, max];
}
let result = findMinMax(nums);
console.log(result);
