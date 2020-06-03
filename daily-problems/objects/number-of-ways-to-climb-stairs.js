let assert = require('assert');
/**
 * This problem was recently asked by LinkedIn:
 *
 * You are given a positive integer N which represents the number of steps in a staircase.
 * You can either climb 1 or 2 steps at a time.
 * Write a function that returns the number of unique ways to climb the stairs.
 * */

/**
 * if N = 4
 *
 * How we can reach 4 stairs ? We have 2 options from 2 or from 3.
 * So f(4) = f(3) + f(2);
 * So f(n) = f(n-1) + f(n-2);
 *
 */

let memo = {};

function staircase(n) {

    if ( n === 0 || n === 1 ) {
        return 1;
    }

    if( memo[n] !== undefined ) {
        return memo[n]
    }

    memo[n] = staircase(n - 1) + staircase(n - 2);

    return memo[n];
}

describe("Number of Ways to Climb Stairs", () => {
    it("staircase(4) should be 5", () => {
        assert.strictEqual(staircase(4),5);
        assert.strictEqual(staircase(5),8);
        assert.strictEqual(staircase(7),21);
        assert.strictEqual(staircase(10),89);
    })
});
