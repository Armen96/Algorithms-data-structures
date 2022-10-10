/**
 * Rod Cutting
 */

/**
 * Recursion
 *
 * @param a
 * @param b
 * @param memo
 * @returns {number|*}
 */
let maxCost = (a, b, memo) => {
    let maxValue = 0;
    if (memo[a]) {
        return memo[a];
    }

    for (let i = 0; i < a; i++) {
        maxValue = Math.max(maxValue, b[i] + maxCost(a-i-1, b, memo))
    }

    memo[a] = maxValue;
    return maxValue;
}

console.time();
let result = maxCost(21, [1, 5, 8, 9, 10, 17, 17, 20, 21, 22, 23, 24, 25, 26, 27, 31, 32, 33, 34, 42, 43], {});
console.timeEnd();
console.log(result);
