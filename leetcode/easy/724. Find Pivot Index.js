/**
 * 724. Find Pivot Index
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 */

let pivotIndex = function(nums) {
    let hashMap = {"-1": 0}
    let pivot = -1;
    let totalSum = nums.reduce((a, b) => a + b, 0);

    for (let i = 0; i < nums.length; i++) {
        hashMap[i] = hashMap[i - 1] + nums[i];

        if (totalSum - hashMap[i] === hashMap[i - 1]) {
            pivot = i;
            break;
        }
    }

    return pivot;
};

let arr = [2, 1, -1, 4];
let res = pivotIndex(arr);
console.log(res);
