const assert = require('assert');
// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[@!#$%^&*()_+]/,'').toLowerCase().trim();
    stringB = stringB.toLowerCase().trim();

    let strALength = stringA.length;
    let strBLength = stringB.length;

    if( strALength !== strBLength ) return false;

    let objA = {};
    let objB = {};

    for ( let i = 0; i < strALength; i++ ) {
        objA[stringA[i]] = objA[stringA[i]] + 1 || 1;

        objB[stringB[i]] = objB[stringB[i]] + 1 || 1;
    }

    let objKeys = Object.keys(objA);

    for ( let i = 0; i < objKeys.length; i++ ) {
       if( objA[objKeys[i]] !== objB[objKeys[i]] ) {
           return false;
       }
    }

    return true;
}

describe("Anagrams", () => {
    it("works if case sensitivity and non word characters NOT taken into account", () => {
        assert.equal(anagrams("earth", "heart"), true);

        assert.equal(anagrams("love", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
    it("is case insensitive. 'HEART' and 'earth' should return true", () => {
        assert.equal(anagrams("HEART", "earth"), true);
        assert.equal(anagrams("heart", "EARTH"), true);

        assert.equal(anagrams("love", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
    it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
        assert.equal(anagrams("love!", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
});
