/**
 * 1512. Number of Good Pairs
 *
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */

let numIdenticalPairs = function(nums) {
    let hashMap = {};
    let pairs = 0;

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : 1;
    }

    let keys = Object.keys(hashMap);
    for (let i = 0; i < keys.length; i++) {
        pairs += (hashMap[keys[i]] * (hashMap[keys[i]] - 1)) / 2;
    }

    return pairs;
};

let x = numIdenticalPairs([1,2,3,1,1,3]);
console.log(x);
