/**
 * 1137. N-th Tribonacci Number
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 */

let memo = {};
let tribonacci = function(n) {
    if (n === 0) { return 0; }
    if (n === 1 || n === 2) { return 1; }
    if (memo[n]) { return memo[n]; }


    memo[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    return memo[n];
};

console.log(tribonacci(1));
