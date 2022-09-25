/**
 * 704. Binary Search
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
 *
 */

let search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (nums[middle] === target) { return middle; }
        if (nums[low] === target) { return low; }
        if (nums[high] === target) { return high; }

        if (target > nums[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return -1;
};

let array = [-1,0,3,5,9,12];
let result = search(array, 11);
console.log(result);
