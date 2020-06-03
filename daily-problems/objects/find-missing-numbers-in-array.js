/**
 * Hi, here's your problem today. This problem was recently asked by Twitter:
 * Given an array of integers of size n, where all elements are between 1 and n inclusive,
 * find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.
 *
 */

function findDisappearedNumbers(nums) {
    let initialValue = 1;
    let maxValue = Math.max(...nums);
    let missedElements = [];

    for (let i = initialValue; i < maxValue; i++) {
        if (nums.indexOf(i) === -1) {
            missedElements.push(i);
        }
    }

    return missedElements;
}

function findDisappearedNumbersOptimal(nums) {
    let initialValue = 1;
    let maxValue = Math.max(...nums);
    let missedElements = [];
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = true;
    }

    for (let i = initialValue; i < maxValue; i++) {
        if (!obj.hasOwnProperty(i)) {
            missedElements.push(i);
        }
    }

    return missedElements;
}

let nums = [4,5,2,6,8,2,1];

findDisappearedNumbersOptimal(nums); // [3, 7] // Big O time complexity less
findDisappearedNumbers(nums); // [3, 7]
