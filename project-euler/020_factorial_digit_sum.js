/**
 * Factorial digit sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 *
 */


function solution(number) {
    function factorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return BigInt(number) * BigInt(factorial(number - 1));
        }
    }

    return factorial(number).toString().split('').reduce((a, b) => {
        if (!isNaN(a) && !isNaN(b)) {
            return parseInt(a) + parseInt(b);
        }
    });
}

console.log(solution(100)); // 648


/**
 * Memoized Factorial:
 * @type {{}}
 */
const memo = {};
function factorialV2(number) {
    if (number === 0) {
        return 1;
    } else if (memo[number]) {
        return memo[number];
    } else {
        const value = number * factorialV2(number - 1);
        memo[number] = value;
        return value;
    }
}

factorialV2(4);
factorialV2(4);
// console.log('m', memo);
