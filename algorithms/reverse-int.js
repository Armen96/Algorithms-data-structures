const assert = require('assert');

function reverseInt(n) {

    let reverseString = parseInt(n.toString().split('').reverse().join(''));

    if( n < 0) {
        return reverseString * -1
    }
    return reverseString;
}


describe("Integer Reversal", () => {
    it("reverseInt() works on positive numbers", () => {
        assert.equal(reverseInt(3), 3);
        assert.equal(reverseInt(13), 31);
        assert.equal(reverseInt(100), 1);
        assert.equal(reverseInt(1408), 8041);
    });

    it("reverseInt() works on negative numbers numbers", () => {
        assert.equal(reverseInt(-3), -3);
        assert.equal(reverseInt(-13), -31);
        assert.equal(reverseInt(-100), -1);
        assert.equal(reverseInt(-1408), -8041);
    });
});
