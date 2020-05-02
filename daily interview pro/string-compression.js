const assert = require('assert');
/**
 * Hi, here's your problem today. This problem was recently asked by Twitter:
 *
 * Given an array of characters with repeats, compress it in place.
 * The length after compression should be less than or equal to the original array.
 */

function stringCompression(array) {
    const response = [];
    const memo = {};

    for (let i = 0; i < array.length; i++) {
        memo[array[i]] = memo[array[i]] + 1 || 1;
    }

    const uniqueArraySet = new Set(array);
    const uniqueArray = [...uniqueArraySet];


    for (let i = 0; i < uniqueArray.length; i++) {
        response.push(uniqueArray[i]);

        const count = memo[uniqueArray[i]];

        if(count > 1) {
            response.push(memo[uniqueArray[i]]);
        }
    }

    return response;
}

describe('String compression', () => {
    it('stringCompression(array) should work ', function () {
        assert.equal(stringCompression(['a', 'a', 'b', 'c', 'c', 'c'])[1], 2);
        assert.equal(stringCompression(['a', 'a', 'b', 'c', 'c', 'c'])[2], 'b');
        assert.equal(stringCompression(['a', 'a', 'b', 'c', 'c', 'c'])[4], 3);
    });

    it('stringCompression(array2) should work ', function () {
        assert.equal(stringCompression(['v', 'f', 'b', 'c', 'c', 'c', 'c'])[3], 'c');
        assert.equal(stringCompression(['v', 'f', 'b', 'c', 'c', 'c', 'c'])[4], 4);
    });
});
