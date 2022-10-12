/**
 * 416. Partition Equal Subset Sum
 * Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 */

let canPartition = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let targetValue = sum / 2;
    if (sum %2 !== 0) {
        return false;
    }

    if (nums.length === 2) {
        return nums[0] === nums[1];
    }

    function subArraySum(array, target) {
        let output = false;
        let memo = {};

        for (let i = 0; i < array.length; i++) {
            let diff = target - array[i];

            if (memo[array[i]]) {
                output = true;
                break;
            } else {
                let keys = Object.keys(memo);
                for (let j = 0; j < keys.length; j++) {
                    let diff2 = keys[j] - array[i];
                    memo[diff2] = true;
                }

                memo[diff] = true;
            }
        }

        return output;
    }

    return subArraySum(nums, targetValue);
};

console.log(canPartition([1, 5, 11, 5]));
