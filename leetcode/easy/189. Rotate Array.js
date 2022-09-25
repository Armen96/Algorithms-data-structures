/**
 * 189. Rotate Array
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * Example 2:
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 */

let rotate = function (nums, k) {
    let arraySize = nums.length;
    let kk = k;
    if (k >= arraySize) {
        let m = Math.floor(k / arraySize);
        kk = k - (arraySize * m)
    }
    // k = k % nums.length;

    let firstChunk = nums.slice(0, arraySize - kk);
    let lastChunk = nums.slice(arraySize - kk, arraySize);
    nums.splice(0, kk, ...lastChunk);
    nums.splice(kk, arraySize, ...firstChunk);

    return nums;

    // Time Limit Exceeded
    //  for (let i = 0; i < kk; i++) {
    //      let last = nums.pop();
    //      nums.unshift(last);
    //  }
};

let arr = [1, 2, 3, 4];
console.time();
console.log(rotate(arr, 2));
console.timeEnd();
