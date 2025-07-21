/**
 * 1201. Ugly Number III
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Hint
 * An ugly number is a positive integer that is divisible by a, b, or c.
 *
 * Given four integers n, a, b, and c, return the nth ugly number.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 3, a = 2, b = 3, c = 5
 * Output: 4
 * Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
 * Example 2:
 *
 * Input: n = 4, a = 2, b = 3, c = 4
 * Output: 6
 * Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
 * Example 3:
 *
 * Input: n = 5, a = 2, b = 11, c = 13
 * Output: 10
 * Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
 *
 * *****/

// TODO: Optimize the solution wrong solution - use binary search
var nthUglyNumber = function(n, a, b, c) {
    if (n === 1) {
        return Math.min(a, b, c);
    }

    let dp = [1];

    let ai = 0;
    let bi = 0;
    let ci = 0;

    for (let i = 1; i <= n; i++) {
        dp[i] = Math.min(dp[ai] * a, dp[bi] * b, dp[ci] * c, i * a, i * b, i * c);

        if (dp[i] === dp[ai] * a) { ai = ai + 1; }
        if (dp[i] === dp[bi] * b) { bi = bi + 1; }
        if (dp[i] === dp[ci] * c) { ci = ci + 1; }
    }

    console.log(dp);
    return dp[n];
};

console.log(nthUglyNumber(55, 2, 3, 7)); // Output: 4
