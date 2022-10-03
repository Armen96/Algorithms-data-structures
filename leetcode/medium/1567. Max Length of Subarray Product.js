/**
 * 1567. Maximum Length of Subarray With Positive Product
 *
 * Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.
 *
 * A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
 *
 * Return the maximum length of a subarray with positive product.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,-2,-3,4]
 * Output: 4
 * Explanation: The array nums already has a positive product of 24.
 */

let getMaxLen = function(nums) {
    let maxLength = 0;
    let numsFromBeginning = 0;
    let after1stNegative = 0;
    let isEvenNegatives = true;

    for (let i = 0; i < nums.length; i++) {
        ++numsFromBeginning;

        if (nums[i] > 0) {
            after1stNegative = after1stNegative === 0 ? 0 : after1stNegative + 1;
        } else if (nums[i] < 0) {
            after1stNegative++;
            isEvenNegatives = !isEvenNegatives;
        } else {
            after1stNegative = 0;
            numsFromBeginning = 0;
            isEvenNegatives = true;
        }

        if (isEvenNegatives) {
            maxLength = Math.max(maxLength, numsFromBeginning)
        } else {
            maxLength = Math.max(maxLength, after1stNegative - 1)
        }
    }

    return maxLength;
};

let result = getMaxLen([1,-2,-3,4]);
console.log(result);
