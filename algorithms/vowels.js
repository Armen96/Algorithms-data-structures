const assert = require('assert');
// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function vowels(str) {

    let matchedItem = str.match(/[aeiou]/gi);

    return matchedItem && matchedItem.length || 0

}

describe("Vowels", () => {
    it("gets correct vowel count", () => {
        assert.strictEqual(vowels("What"), 1);
        assert.strictEqual(vowels("Why"), 0);
    });
    it("is case insensitive. vowels('aEiOu') should return 5", () => {
        assert.strictEqual(vowels("aEiOu"), 5);
        assert.strictEqual(vowels("I am a world-class developer using iterations"), 16);
    });
});
