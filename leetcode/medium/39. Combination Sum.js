/**
 * 39. Combination Sum
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 *
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 *
 *
 * Example 1:
 *
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
 * 7 is a candidate, and 7 = 7.
 * These are the only two combinations.
 * Example 2:
 *
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 * Example 3:
 *
 * Input: candidates = [2], target = 1
 * Output: []
 *
 * ****/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
    let result = [];
    let path = [];
    let sortedCandidates = candidates.sort((a, b) => a - b);

    let index = 0;

    backtrack(sortedCandidates, index, target, path, result);

    return result;
}

function backtrack(array, index, target, path, result) {
    if (target === 0) {
        result.push([...path]);
    }

    if (target < 0) {
        return;
    }

    for (let i = index; i < array.length; i++) {
        if (target - array[i] < 0) {
            break;
        }

        path.push(array[i]);
        backtrack(array, i, target - array[i], path, result);
        path.pop();
    }
}

console.log(combinationSum([8,7,4,3], 11)); // [[2,2,3],[7]]

