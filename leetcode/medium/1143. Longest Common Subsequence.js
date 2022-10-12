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



let longestCommonSubsequenceDP = function(text1, text2) {
    const dp = [];
    let min =  text1.length > text2.length ? text2 : text1;
    let max =  text1.length > text2.length ? text1 : text2;
    let row = [0, ...min.split(''), 0];
    dp.push(row);

    for (let i = 0; i <= max.length; i++) {
        let arr = new Array(min.length + 2).fill(0);
        arr[0] = max[i] ? max[i] : 0;
        dp.push(arr);
    }

    for (let i = dp.length - 2; i > 0; i--) {
        for (let j = dp[i].length - 2; j > 0 ; j--) {
            let value = 0;

            if (dp[i][0] === dp[0][j]) {
                value = 1 + dp[i + 1][j + 1];
            } else {
                value = Math.max(dp[i][j + 1], dp[i + 1][j])
            }

            dp[i][j] = value;
        }
    }

    return dp[1][1];
};
console.time()
let result2 = longestCommonSubsequenceDP(
    "fcvafurqjylclorwfoladwfqzkbepeletybmrczgtmxctuny",
    "nohgdazargvalupetizjslkbohqlknkdqjhmxsgnybsjedmzkrkhwryzan"
);
console.timeEnd();
console.log(result2);
