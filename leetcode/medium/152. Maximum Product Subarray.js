/**
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 */


let maxProduct = function(nums) {
    let totalMaxProduct = nums[0];
    let currentMaxProduct = nums[0];
    let currentMinProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentMaxProduct = 0;
            currentMinProduct = 0;
        } else {
            if (currentMinProduct === 0) { currentMinProduct = 1; }
            if (currentMaxProduct === 0) { currentMaxProduct = 1; }

            let max = nums[i] * currentMaxProduct;
            let min = nums[i] * currentMinProduct;

            currentMaxProduct = Math.max(nums[i], max, min)
            currentMinProduct = Math.min(nums[i], min, max);
        }

        totalMaxProduct = Math.max(currentMinProduct, currentMaxProduct, totalMaxProduct)
    }

    return totalMaxProduct;
};
console.log(maxProduct([-1,-2,-9,-6]));
