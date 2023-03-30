/*We have an array nums and we want to store in a new array 
the sum of the elements in position nums[i] with that of 
position nums[ i+1].*/
const nums = [2, 4, 6, 8, 10];
const result = [];

nums.forEach((num,i) => {
  if(i < nums.length -1){
   let sum = nums[i] + nums[i+1];
   result.push(sum);
  };
});

console.log(result);

