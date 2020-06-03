const assert = require('assert');
/**
 * Recursive
 * @param n
 * @returns {*}
 */
function fibonacci_recursive(n) {
    if( n === 1 || n === 2 ) {
        return 1;
    }

    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
}

console.time();
fibonacci_recursive(30);
console.timeEnd();


/**
 * Recursive Fibonacci memoization
 * @type {{}}
 */
let memo = {};
function fibonacci_memorize(n) {

    if( n === 1 || n === 2 ) return 1;

    if( memo.hasOwnProperty(n) ) return memo[n];

    memo[n] = fibonacci_memorize(n-1) + fibonacci_memorize(n-2);

    return memo[n]
}

console.time();
fibonacci_memorize(30);
console.timeEnd();


/**
 * Bottom to up
 * @param n
 * @returns {*}
 */
function fibonacci_bottom_up(n) {

    if( n === 1 || n === 2 ) return 1;

    let fibonacci_numbers = {};
    fibonacci_numbers[0] = 1;
    fibonacci_numbers[1] = 1;

    for ( let i = 2; i <= n; i++ ) {
        fibonacci_numbers[i] = fibonacci_numbers[i-1] + fibonacci_numbers[i-2]
    }

    return fibonacci_numbers[n];
}

console.time();
fibonacci_bottom_up(30);
console.timeEnd();


describe("Fibonacci numbers", () => {
    it('fibonacci_memorize(6) should return 8', function () {
        assert.strictEqual(fibonacci_memorize(6),8)
    });

    it('fibonacci_memorize(8) should return 21', function () {
        assert.strictEqual(fibonacci_memorize(8),21)
    });

    it('fibonacci_memorize(10) should return 55', function () {
        assert.strictEqual(fibonacci_memorize(10),55)
    });
});
