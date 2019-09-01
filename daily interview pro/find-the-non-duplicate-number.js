const assert = require('assert');
/**
 * This problem was recently asked by Facebook
 *
 *
 * Given a list of numbers, where every number shows up twice except for one number, find that one number.
 * Challenge: Find a way to do this using O(1) memory.
 */

function singleNumber(nums) {
    let obj = {};

    for ( let i = 0; i < nums.length; i++ ) {
        if( !obj[nums[i]] ) {
            obj[nums[i]] = obj[nums[i]] + 1 || 1
        } else {
            delete obj[nums[i]]
        }
    }

    return +Object.keys(obj)[0];
}

describe('Find the non-duplicate number', () => {
    it('singleNumber(arr) should ', function () {
        assert.strictEqual(singleNumber([4, 3, 2, 4, 1, 3, 2]), 1);
    });

    it('singleNumber(arr) should 1', function () {
        assert.strictEqual(singleNumber([5, 3, 5, 3, 2]), 2);
    });

    it('singleNumber(arr) should 2', function () {
        assert.notStrictEqual(singleNumber([4,2,2,4,1]), 3);
    });
});
