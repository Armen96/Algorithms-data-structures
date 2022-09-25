/**
 * 740. Delete and Earn
 *
 * You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
 *
 * Pick any nums[i] and delete it to earn nums[i] points.
 * Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 * Return the maximum number of points you can earn by applying the above operation some number of times.
 */

let deleteAndEarn = function(nums) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + nums[i] : nums[i];
    }

    let keys = Object.keys(hashMap);
    let calculate = [hashMap[keys[0]]];

    for (let i = 1; i < keys.length; i++) {
        if (Number(keys[i]) === Number(keys[i -1]) + 1) {
            let value = Math.max(hashMap[keys[i]], calculate[calculate.length - 1]);

            if (calculate[calculate.length - 2]) {
                value = Math.max(hashMap[keys[i]] + calculate[calculate.length - 2], calculate[calculate.length - 1]);
            }

            calculate.push(value)
        } else {
            calculate.push(hashMap[keys[i]] + calculate[calculate.length - 1])
        }
    }

    return calculate[calculate.length - 1];
};


let nums = [2,3,4];
console.log(deleteAndEarn(nums));
