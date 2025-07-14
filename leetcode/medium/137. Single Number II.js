/**
 * 137. Single Number II
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,2,3,2]
 * Output: 3
 * Example 2:
 *
 * Input: nums = [0,1,0,1,0,1,99]
 * Output: 99
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    let u = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = map[nums[i]] + 1;
            delete u[nums[i]];
        } else {
            map[nums[i]] = 1;
            u[nums[i]] = nums[i];
        }
    }

    let value = Object.values(u);

    return value[0];

};

console.log(singleNumber([2, 2, 3, 2])); // Output: 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // Output: 99
console.log(singleNumber([1, 1, 1, 2])); // Output: 2
