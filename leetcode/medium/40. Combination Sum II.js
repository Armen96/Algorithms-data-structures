/**
 * 40. Combination Sum II
 * Solved
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 *
 *
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * Example 2:
 *
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 * ****/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
    let result = {};
    let path = [];
    let sortedCandidates = candidates.sort((a, b) => a - b);

    let index = 0;

    backtrack(sortedCandidates, index, target, path, result);

    function backtrack(array, index, target, path, result) {
        if (target === 0) {
            result[path.toString()] = [...path];
            return;
        }

        if (target < 0) {
            return;
        }

        for (let i = index; i < array.length; i++) {
            if (i > index && array[i] === array[i - 1]) {
                break;
            }

            path.push(array[i]);
            backtrack(array, i + 1, target - array[i], path, result);
            path.pop();
        }
    }

    return Object.values(result);
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // [[2,2,3],[7]]

