const assert = require('assert');
// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
    return str.toLowerCase()
            .split(' ')
            .map(function (value) {
                return value.charAt(0).toUpperCase() + value.slice(1)
            })
            .join(' ');
}

describe("Capitalization", () => {
    it("capitalizes the first letter of each word", () => {
        assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
    });
    it("lowercases the rest of the word", () => {
        assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
    });
});
