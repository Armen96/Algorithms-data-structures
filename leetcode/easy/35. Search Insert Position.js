/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * Example 2:
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 */


let searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let index = null;
    if (target < nums[low]) { return 0;}
    if (target > nums[high]) { return nums.length; }

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (nums[middle] === target) { return middle; }

        if (target > nums[middle]) {
            low = middle + 1;
            index = low;
        } else {
            high = middle - 1;
            index = middle;
        }
    }

    return index;
};

let result = searchInsert([1, 3], 2);
console.log(result);
