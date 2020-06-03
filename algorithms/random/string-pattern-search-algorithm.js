const assert = require('assert');
// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

function stringPatternSearch(text, pattern) {
    let count = 0;

    for ( let i = 0 ; i < text.length; i++ ) {
        count++;
        for ( let j = 0; j < pattern.length; j++ ) {
            if(pattern[j] !== text[i + j]) {
                count--; break;
            }
        }
    }

   return count;
}

describe("stringPatternSearch()", () => {
    it("works.", () => {
        assert.equal(stringPatternSearch("lollipop", "lol"), 1);
        assert.equal(stringPatternSearch("lolol", "lol"), 2);
    });
});
