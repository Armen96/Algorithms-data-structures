/**
 * 1143. Longest Common Subsequence
 *
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 *
 *
 * Example 1:
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 */

let memo = {};
let longestCommonSubsequence = function(text1, text2) {
    let maxCommonStrLength = 0;

    if (text1.length === 0 || text2.length === 0) {
        return maxCommonStrLength;
    }

    if (memo[text1 + '-' + text2]) {
        return memo[text1 + '-' + text2];
    }

    if (text1[0] === text2[0]) {
        maxCommonStrLength = 1 + longestCommonSubsequence(text1.substring(1, text1.length), text2.substring(1, text2.length));
    } else {
        maxCommonStrLength = Math.max(
            longestCommonSubsequence(text1, text2.substring(1, text2.length)),
            longestCommonSubsequence(text1.substring(1, text1.length), text2)
        )
    }

    memo[text1 + '-' + text2] = maxCommonStrLength;
    return maxCommonStrLength;
};
console.time()
let result = longestCommonSubsequence(
    "fcvafurqjylclorwfoladwfqzkbepeletybmrczgtmxctuny",
    "nohgdazargvalupetizjslkbohqlknkdqjhmxsgnybsjedmzkrkhwryzan"
);
console.timeEnd();
console.log(result);
