/**
 * This problem was recently asked by Google:
 *
 * Write an efficient program to find the sum of contiguous subarray within
 * a one-dimensional array of numbers which has the largest sum.
 *
 *
 * Kadane’s Algorithm
 */

let arr = [2,5,-4,-6,7,2,-10];

function maxSubArraySum(arr) {
    let max_glob = arr[0];
    let max_curr = arr[0];

    for ( let i = 1; i < arr.length; i++ ) {
        max_curr = Math.max(arr[i],max_curr + arr[i]);

        if(max_curr > max_glob ) max_glob = max_curr
    }

    return max_glob
}

console.log(maxSubArraySum(arr));
