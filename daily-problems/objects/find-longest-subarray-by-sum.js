/**
 * Given an array arr[] of size n containing integers.
 * The problem is to find the length of the longest sub-array having sum equal to the given value k.
 */


function findLongestSubarrayBySum(array, target) {

    let subArrayLength = 0;
    let sum = 0;

    let rightPointer = 0;
    let leftPointer = 0;

    while (rightPointer < array.length) {
        sum += array[rightPointer]

        while (leftPointer < rightPointer && sum > target) {
            sum -= array[leftPointer]
            leftPointer++;
        }

        if(sum === target) {
            if(subArrayLength < rightPointer - leftPointer) {
                subArrayLength = rightPointer - leftPointer;
            }
        }

        rightPointer += 1;
    }

    subArrayLength = subArrayLength + 1;

    return subArrayLength;
}


// array [1, 2, 3, 4, 5, 2, 6]; target 6 => [1, 2, 3]

console.log(findLongestSubarrayBySum([1, 2, 3, 0, 0, 4, 5, 2, 6], 6)); // 5
