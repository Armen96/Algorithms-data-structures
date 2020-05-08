/**
 * Hi, here's your problem today. This problem was recently asked by Uber:
 * Given a number of integers, combine them so it would create the largest number.
 */
const assert = require('assert');

function largestNum(array) {
    let maxNumberLength = (Math.max(...array)).toString().length;
    let arrayWithTheSameLengthOfItems = [];
    let memo = {};
    let response = '';

    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length === maxNumberLength) {
            arrayWithTheSameLengthOfItems.push(array[i]);

            if(memo.hasOwnProperty(array[i])) {
                memo[array[i]] = Number(memo[array[i]].toString() + '' + array[i].toString());
            } else {
                memo[array[i]] = array[i];
            }

        } else {
            let item = array[i].toString().repeat(maxNumberLength);
            let number = Number(item.substr(0, maxNumberLength));


            if(memo.hasOwnProperty(number)) {
                memo[number] = Number(memo[number].toString() + '' + array[i].toString());
            } else {
                memo[number] = array[i];
            }

            arrayWithTheSameLengthOfItems.push(number)
        }
    }

    let sortedArray = new Set(arrayWithTheSameLengthOfItems.sort((a, b) => b - a));
    sortedArray = [...sortedArray];


    sortedArray.forEach(item => {
     response += memo[item].toString();
    });

    return response;
}

describe('Make the Largest Number', () => {
    it('should work: [17, 7, 2, 45, 72]', () => {
        assert.equal(largestNum([17, 7, 2, 45, 72]), '77245217');
    });

    it('should work: [1, 2 ,3]', () => {
        assert.equal(largestNum([1, 2, 3]), '321');
    });

    it('should work: [92, 10 ,902]', () => {
        assert.equal(largestNum([92, 10 ,902]), '9290210');
    });

    it('should work: [7, 2, 77]', () => {
        assert.equal(largestNum([7, 2, 77]), '7772');
    });
});
