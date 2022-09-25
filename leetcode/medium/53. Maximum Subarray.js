/**
 * 53. Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

let maxSubArray = function(nums) {
    let totalMaxSum = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], nums[i] + currentMax);

        if (currentMax > totalMaxSum) {
            totalMaxSum = currentMax;
        }
    }

    return totalMaxSum;
};

console.log(maxSubArray([4,-1,2,1]));

let minSubArray = function(nums) {
    let totalMinSum = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMin = Math.min(nums[i], nums[i] + currentMin);

        if (currentMin < totalMinSum) {
            totalMinSum = currentMin;
        }
    }

    return totalMinSum;
};

console.log(minSubArray([-2,9,-3,4,-3,2,-1,-5,4]));
