
/**
 *
 * This problem was recently asked by Amazon:
 *
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 *
 */

let arr = [7,8,22,12,1,14,23,9];
let target = 24;

function minSubArrayLength (arr,target) {
    arr.sort(function (a,b) {
        return b - a;
    });

    let count = 0, total = 0, complete = false;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        count++;

        if(total >= target) {
            complete = true;
            break;
        }
    }

    return complete ? count : 0;
}


console.log(minSubArrayLength(arr, target));
