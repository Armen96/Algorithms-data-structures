/**
 * 918. Maximum Sum Circular Subarray
 *
 * Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3.
 *
 */

// let maxSubarraySumCircular = function (nums) {
//     let generalMaxSum = -Infinity;
//
//     let i = nums.length;
//     while (i > 0) {
//         let totalMaxSum = nums[0];
//         let currentMaxSum = nums[0];
//
//         for (let i = 1; i < nums.length; i++) {
//             currentMaxSum = Math.max(nums[i], nums[i] + currentMaxSum);
//
//             if (currentMaxSum > totalMaxSum) {
//                 totalMaxSum = currentMaxSum;
//             }
//         }
//
//         if (totalMaxSum > generalMaxSum) {
//             generalMaxSum = totalMaxSum;
//         }
//
//         let firstElement = nums.shift();
//         nums.push(firstElement);
//
//         i--;
//     }
//
//     return generalMaxSum;
// };

let maxSubarraySumCircular = function (nums) {
    let totalMaxSum = -Infinity;
    let totalMinSum = Infinity;

    let currentMaxSum = -Infinity;
    let currentMinSum = Infinity;
    let totalSum = 0;


    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        currentMaxSum = Math.max(nums[i], nums[i] + currentMaxSum);
        currentMinSum = Math.min(nums[i], nums[i] + currentMinSum);

        if (currentMaxSum > totalMaxSum) { totalMaxSum = currentMaxSum; }
        if (currentMinSum < totalMinSum) { totalMinSum = currentMinSum; }
    }

    if (totalSum === totalMinSum) {
        return totalMaxSum;
    }

    return Math.max(totalMaxSum, totalSum - totalMinSum);
};

let result = maxSubarraySumCircular([5,-3,5]);
console.log(result);
