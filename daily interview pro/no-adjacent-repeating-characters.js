/**
 * Hi, here's your problem today. This problem was recently asked by LinkedIn:
 *
 * Given a string, rearrange the string so that no character next to each other are the same.
 * If no such arrangement is possible, then return None.
 */
const assert = require('assert');

function rearrangeString(str) {
    if(!str.length) return str;

    let response = '';
    const memo = {};

    for (let i = 0; i < str.length; i++) {
        memo[str[i]] = memo[str[i]] +1 || 1;
    }

    const objKeys = Object.keys(memo);
    let keyNumber = 0;
    let previousValue = '';


    for (let i = 0; i < str.length; i++) {
        // Previous value should not be equal to current value
        let currentValue = objKeys[keyNumber];
        if (previousValue === currentValue) {
            response = 'None';
            break;
        }
        previousValue = currentValue;

        response += currentValue;

        mutateCharObject(keyNumber);
        keyNumber = generateKeyNumber(keyNumber);
    }

    /**
     * Decrease the number of used char
     *
     * And check if it's 0 then remove that property from objKeys array;
     * Because there is not specific character any more;
     * @param keyNumber
     */
    function mutateCharObject (keyNumber) {
        memo[objKeys[keyNumber]] = memo[objKeys[keyNumber]] - 1;

        if(memo[objKeys[keyNumber]] === 0) {
            let index = objKeys.indexOf(objKeys[keyNumber]);
            objKeys.splice(index, 1);
        }
    }

    /**
     * Get the next keyNumber;
     * @param keyNumber
     * @returns {*}
     */
    function generateKeyNumber(keyNumber) {
        if (keyNumber >= objKeys.length - 1) {
            keyNumber = 0;
        } else {
            keyNumber++;
        }

        return keyNumber;
    }

    return response;
}

describe('No Adjacent Repeating Characters', () => {
   it('should work: empty string', () => {
       assert.equal(rearrangeString(''), '');
   });

    it('should work: abc string', () => {
        assert.equal(rearrangeString('abc'), 'acb');
    });

    it('should work: abcc string', () => {
        assert.notEqual(rearrangeString('abcc'), 'None');
    });

    it('should work: abccccc string', () => {
        assert.equal(rearrangeString('abccccc'), 'None');
    });
});
