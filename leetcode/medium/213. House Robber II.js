/**
 * 213. House Robber II
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
 * All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.
 * Meanwhile, adjacent houses have a security system connected,
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
 */

let rob = function(nums) {
    if (nums.length === 1) { return nums[0]; }
    if (nums.length === 2) { return Math.max(nums[0], nums[1]); }

    let nums2 = [...nums];

    nums.push(0);
    nums[0] = 0;

    for (let i = nums.length - 4; i >= 0; i--) {
        nums[i] = Math.max(nums[i] + nums[i + 2], nums[i] + nums[i + 3]);
    }

    nums2[nums2.length - 1] = 0;
    nums2.push(0);


    for (let i = nums2.length - 4; i >= 0; i--) {
        nums2[i] = Math.max(nums2[i] + nums2[i + 2], nums2[i] + nums2[i + 3]);
    }

    return Math.max(nums[0], nums[1], nums2[0], nums2[1]);
};

console.log(rob([10,2,9,15,1]));
