const assert = require('assert');
/**
 * This problem was recently asked by Facebook
 *
 * You are given a list of numbers, and a target number k.
 * Return whether or not there are two numbers in the list that add up to k.
 *
 **/

function two_sum( arr, t ) {

    let exists = false;
    let hashTable = {};

    for ( let i = 0; i < arr.length; i++ ) {

        if ( hashTable.hasOwnProperty(arr[i]) ) {
            return true
        } else {
            let diff = t - arr[i];
            hashTable[diff] = t - arr[i]
        }
    }

    return exists;
}

describe('Find the longest palindromic substring', () => {
    it('two_sum(arr,t) should ', function () {
        assert.equal(two_sum([4, 7, 5 , -3, 2,95,85,99,66,1],5), true);

        assert.equal(two_sum([4, 7, 5 ],5), false);
    });
});
