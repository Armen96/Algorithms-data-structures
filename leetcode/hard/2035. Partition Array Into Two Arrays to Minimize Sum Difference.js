/**
 * 2035. Partition Array Into Two Arrays to Minimize Sum Difference
 * You are given an integer array nums of 2 * n integers.
 * You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays.
 * To partition nums, put each element of nums into one of the two arrays.
 *
 * Return the minimum possible absolute difference.
 *
 *
 *
 * Example 1:
 *
 * example-1
 * Input: nums = [3,9,7,3]
 * Output: 2
 * Explanation: One optimal partition is: [3,9] and [7,3].
 * The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.
 */

let minimumDifference = function (nums) {
    if (nums.length === 2) {
        return Math.abs(nums[0] - nums[1]);
    }

    let sum = nums.reduce((a, b) => a + b, 0);
    let targetValue = Math.floor(sum / 2);

    function subArraySum(array, target) {
        let output = {status: false, diff: 0}
        let memo = {};

        for (let i = 0; i < array.length; i++) {
            let diff = target - array[i];

            if (memo[array[i]]) {
                output.status = true;
                output.diff = target;
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

    let status = false;
    let output = 0;
    while (!status) {
        let value = subArraySum(nums, targetValue);
        if (value.status) {
            status = true;
            output = value.diff;
            return sum - output - output;
        }

        targetValue = targetValue - 1;
    }

    return sum - output - output;
};

let result = minimumDifference([76,8,45,20,74,84,28,1]);
console.log(result);
