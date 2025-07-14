/**
 *
 * 136. Single Number
 *
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,2,1]
 *
 * Output: 1
 *
 * Example 2:
 *
 * Input: nums = [4,1,2,1,2]
 *
 * Output: 4
 *
 * Example 3:
 *
 * Input: nums = [1]
 *
 * Output: 1
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    if (nums.length === 0) {
        throw new Error("Input array cannot be empty");
    }

    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            delete map[nums[i]];
        } else {
            map[nums[i]] = true;
        }
    }

    let arr = Object.keys(map);

    return +arr[0];
};

console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
console.log(singleNumber([])); // Output: null
