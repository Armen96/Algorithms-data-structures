const assert = require('assert');
// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function maxChar(str) {
    let obj = {};

    for ( let i = 0; i < str.length; i++ ) {
        obj[str[i]] = obj[str[i]] +1 || 1
    }

    let maxCount = Math.max(...Object.values(obj));

    return getKeyByValue(obj,maxCount)
}

describe("Max Character", () => {
    it("maxChar() finds the most frequently used character", () => {
        assert.equal(maxChar("a"), "a");
        assert.equal(maxChar("test"), "t");
        assert.equal(maxChar("I loveeeeee noodles"), "e");
        assert.equal(maxChar("1337"), "3");
    });
});
