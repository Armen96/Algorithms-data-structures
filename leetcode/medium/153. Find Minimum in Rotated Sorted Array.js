/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 time
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {
    if (nums.length === 1) { return nums[0]; }
    if (nums.length === 2) { return Math.min(nums[0], nums[1]); }

    let low = 0;
    let high = nums.length - 1;
    let smallValue = Number.MAX_VALUE;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (smallValue > nums[middle]) {
            smallValue = nums[middle];
        }
        if (smallValue > nums[low]) {
            smallValue = nums[low];
        }

        if (nums[low] <= nums[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return smallValue;
};

console.log(findMin([4,5,6,7,0]));
