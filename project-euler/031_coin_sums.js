/**
 * Coin sums
 *
 * In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
 *
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 * It is possible to make £2 in the following way:
 *
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * How many different ways can £2 be made using any number of coins?
 *
 */

function solution(limit, choices) {
    function recursionFn(array, target, i) {
        if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        } else if (i < 0) {
            return 0;
        } else if (array[i] > target) {
            return recursionFn(array, target, i -1)
        } else {
            return recursionFn(array, target - array[i], i) + recursionFn(array, target, i - 1)
        }
    }

    return recursionFn(choices, limit, choices.length - 1);
}

let result = solution(200, [1, 2, 5, 10, 20, 50, 100, 200]);
console.log(result);  // 73682
