/**
 * 198. House Robber
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
 * it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 */

let rob = function(nums) {
    if (nums.length === 1) { return nums[0]; }
    if (nums.length === 2) { return Math.max(nums[0], nums[1]); }

    nums.push(0);

    for (let i = nums.length - 4; i >= 0; i--) {
        nums[i] = Math.max(nums[i] + nums[i + 2], nums[i] + nums[i + 3])
    }

    return Math.max(nums[0], nums[1]);
};

console.log(rob([10,2,9,15,1]));
