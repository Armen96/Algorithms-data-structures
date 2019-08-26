const assert = require('assert');

function palindrome(str) {
    return str.split('').reverse().join('') === str
}

describe("Palindrome", () => {
    it('"bcb" is a palindrome', () => {
        assert.equal(palindrome("bcb"), true);
    });
    it('"   bcb" is not a palindrome', () => {
        assert.equal(palindrome(" bcb"), false);
    });
    it('"bcb   " is not a palindrome', () => {
        assert.equal(palindrome("bcb "), false);
    });
    it('"love" is not a palindrome', () => {
        assert.equal(palindrome("love"), false);
    });
    it('"699996" a palindrome', () => {
        assert.equal(palindrome("699996"), true);
    });
    it('"racecar" a palindrome', () => {
        assert.equal(palindrome("bcb"), true);
    });
    it("is case insensitive.", () => {
        assert.equal(palindrome("trunk knurt"), true);
    });
});
