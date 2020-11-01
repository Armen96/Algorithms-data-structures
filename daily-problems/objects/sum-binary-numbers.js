const assert = require('assert');

/**
 * Hi, here's your problem today. This problem was recently asked by Facebook:
 * Given two binary numbers represented as strings,
 * return the sum of the two binary numbers as a new binary represented as a string.
 * Do this without converting the whole binary string into an integer.
 *
 * Here's an example and some starter code.
 *
 * print(sum_binary("11101", "1011")) # 101000
 */
function sumBinaryNumbers (a, b) {
    let sum = '';
    const aSplit = a.split('').reverse();
    const bSplit = b.split('').reverse();
    const numberMaxLength = Math.max(a.length, b.length);
    let nextStep = 0;

    for (let i = 0; i < numberMaxLength; i++) {
        if (aSplit[i] === undefined) {aSplit[i] = 0} else {aSplit[i] = +aSplit[i]}
        if (bSplit[i] === undefined) {bSplit[i] = 0} else {bSplit[i] = +bSplit[i]}

        if (aSplit[i] === 0 && bSplit[i] === 0) {
            if (nextStep) {
                sum = '1' + sum; nextStep = 0;
            } else {
                sum = '0' + sum;
            }
        }

        if ((aSplit[i] === 1 && bSplit[i] === 0) || (aSplit[i] === 0 && bSplit[i] === 1)) {
            if (nextStep) {
                sum = '0' + sum; nextStep = 1;
            } else {
                sum = '1' + sum;
            }
        }

        if (aSplit[i] === 1 && bSplit[i] === 1) {
            if (nextStep) {
                nextStep = 1; sum = '1' + sum;
            } else {
                nextStep = 1; sum = '0' + sum;
            }
        }
    }

    if (nextStep) { sum = '1' + sum; }

    return sum;
}

describe("Sum Binary Numbers", () => {
    it('sum binary numbers: ex', function () {
        assert.strictEqual(sumBinaryNumbers("11101", "1011"), '101000');

        assert.strictEqual(sumBinaryNumbers("1101", "100"), '10001');

        assert.strictEqual(sumBinaryNumbers("11", "1"), '100');
    });
});
