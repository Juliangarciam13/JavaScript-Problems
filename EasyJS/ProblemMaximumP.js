/*Given an array of integers nums,
find the maximum product and return it*/

const nums = [15, 5, 8, 9];
const greatestProduct = (nums) => {
    let maxProduct = 0;
    for (let i = 0; i < nums.length; i++) {
        let product = nums[i] * nums[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}
console.log(greatestProduct(nums));

