/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */

let longestCommonPrefix = function(strs) {
    let shortPartition = '';

    if (strs && strs.length) {
        loop:
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== strs[0][i]) {
                    break loop;
                }
            }

            shortPartition = shortPartition + '' + strs[0][i];
        }
    }

    return shortPartition;
};

let strs =  ["flower","flow","flight"];
let res = longestCommonPrefix(strs); // fl
console.log(res);
