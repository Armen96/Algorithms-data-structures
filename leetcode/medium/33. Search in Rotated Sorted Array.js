/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 */



let search = function(nums, target) {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (nums[middle] === target) { return middle; }
        if (nums[low] === target) { return low; }
        if (nums[high] === target) { return high; }

        if (nums[low] < nums[high]) {
            if (target < nums[middle]) {
                high = middle - 1;
            } else {
                low = middle + 1;
            }
        } else {
            if (nums[low] > nums[middle]) {
                if (target < nums[middle] || target > nums[low]) {
                    high = middle - 1;
                } else {
                    low = middle + 1;
                }
            } else if (nums[low] < nums[middle]) {
                if (target < nums[low] || target > nums[middle]) {
                    low = middle + 1;
                } else {
                    high = middle - 1;
                }
            } else {
                return -1;
            }
        }
    }

    return -1;
};


let array = [4,5,6,7,8,1,2,3];
let result = search(array, 8);
console.log(result);
