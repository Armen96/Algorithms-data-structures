/**
 * 704. Binary Search
 * Solved
 * Easy
 * Topics
 * premium lock icon
 * Companies
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * Example 2:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 * ***/


let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    let mid = Math.floor((left + right) / 2);
    let position = -1;

    while (position === -1 && left <= right) {
        if (nums[mid] > target) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else if (nums[mid] < target) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        } else {
            position = mid;
            break;
        }
    }

    return position;
};


console.log(search([-1,0,3,5,9,12], 9)); // Output: 4
