/**
 * Kadane's algorithm
 * Maximum Subarray Sum
 * @type {number[]}
 */


let arr = [2, 5, -4, -6, 7, 2, -10];

function maxSubArraySum(arr) {
    let maxSubSum = arr[0];
    let currentMaxSubSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMaxSubSum = Math.max(arr[i], currentMaxSubSum + arr[i]);

        if (currentMaxSubSum > maxSubSum) {
            maxSubSum = currentMaxSubSum;
        }
    }

    return maxSubSum;
}

console.log(maxSubArraySum(arr));
