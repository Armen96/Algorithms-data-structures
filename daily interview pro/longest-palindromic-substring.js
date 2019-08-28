const assert = require('assert');

/**
 * This problem was recently asked by Twitter:
 *
 *
 * A palindrome is a sequence of characters that reads the same backwards and forwards.
 * Given a string, s, find the longest palindromic substring in s.
 */
function longestPalindrome(str) {
    let palindromes = [];
    for ( let i = 0; i <= str.length; i++ ) {
        for ( let j = i; j <= str.length; j++ ) {
            let subString = str.substring(i, j);
            let subStringReverse = subString.split('').reverse().join('');

            if( subString === subStringReverse ) {
                palindromes.push(subString)
            }
        }
    }

    let palindromeLength = Math.max(...palindromes.map(function (value) {
        return value.length
    }));

    let LongestPalindrome = palindromes.filter((val) => {
        return val.length === palindromeLength
    });

    return [LongestPalindrome,palindromeLength];
}

describe('Find the longest palindromic substring', () => {
    it('longestPalindrome(million) should ', function () {
        assert.equal(longestPalindrome('million')[1], 4);
    });

    it('longestPalindrome(tracecars) should ', function () {
        assert.equal(longestPalindrome('tracecars')[1], 7);
    });

    it('longestPalindrome(asdfds) should ', function () {
        assert.equal(longestPalindrome('asdfds')[1], 5);
    });

    it('longestPalindrome(asdfgh) should ', function () {
        assert.equal(longestPalindrome('asdfgh')[1], 1);
    });
});
