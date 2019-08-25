const assert = require('assert');

function reverseString(str) {

    return str.split('').reverse().join('');

    /*
        // Solution 2
        let strChars = str.split('');
        let reverseOrder = '';

        for (let i = strChars.length -1 ; i >= 0; i--) {
            reverseOrder += strChars[i];
        }

       return reverseOrder;
   */
}

describe("String Reversal", () => {
    it("reverseString() correctly reverses string", () => {
        assert.equal(reverseString("ffaa"), "aaff");
        assert.equal(reverseString("  aaff"), "ffaa  ");
    });
});
