/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */


function solution(nums, target) {
    const hashNumbers = {};
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (hashNumbers[nums[i].toString()] !== undefined) {
            output = [hashNumbers[nums[i].toString()], i];
            break;
        }

        hashNumbers[diff.toString()] = i;
    }

    return output;
}

let result = solution([2,7,3,4], 9);
console.log(result);
