/**
 * 45. Jump Game II
 *
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * You can assume that you can always reach the last index.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,2,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */


let jump = function(nums) {
    let areas = [[nums[0]]];
    let target = nums.length - 1;

    if (nums.length === 1) { return 0; }
    if (nums.length === 2) { return nums[0] >= 1 ? 1 : 0; }

    loop:
    for (let i = 0; i < nums.length - 1; i++) {
        let current = [];

        for (let j = i; j < i + nums[i]; j++) {
            if (nums[j + 1] !== undefined) {
                current.push(nums[j + 1]);
                if (j + 1 >= target) {
                    areas.push(current);
                    break loop;
                }
            }
        }

        let currentHowFarCanJump = 0;
        let k = 0;
        for (let j = 0; j < current.length; j++) {
            if (currentHowFarCanJump < current[j] - current.length + j + 1) {
                currentHowFarCanJump = current[j] - current.length + j + 1;
                k = j;
            }
        }
        i = i + k;

        areas.push(current);
    }

    return areas.length - 1;
};

let result = jump([2,3,0,1,4]);
console.log(result);
