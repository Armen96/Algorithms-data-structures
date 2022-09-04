/**
 * 12. Integer to Roman
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 */

function solution(num) {
    let output = '';
    let romanCombinations = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM'
    };

    let numberChunks = [];

    let i = num.toString().length - 1;
    while (i >= 0) {
        let chunk = Math.floor(num / 10 ** i) * 10 ** i;
        num = num - chunk;

        if (chunk) { numberChunks.push(chunk) }

        i--;
    }

    for (let j = 0; j < numberChunks.length; j++) {
        if (romanCombinations[numberChunks[j]]) {
            output = output + '' + romanCombinations[numberChunks[j]];
        } else {
            if (numberChunks[j] > 1000) {
                let tLength = numberChunks[j] / 1000;
                output = output + '' + romanCombinations[1000].repeat(tLength);
            } else if (numberChunks[j] > 500) {
                output = output + '' + romanCombinations[500]
                let hLength = (numberChunks[j] - 500) / 100;
                output = output + '' + romanCombinations[100].repeat(hLength)
            } else if (numberChunks[j] > 100) {
                let hLength = numberChunks[j] / 100;
                output = output + '' + romanCombinations[100].repeat(hLength)
            } else if (numberChunks[j] > 50) {
                output = output + '' + romanCombinations[50]
                let hLength = (numberChunks[j] - 50) / 10;
                output = output + '' + romanCombinations[10].repeat(hLength)
            } else if (numberChunks[j] > 10) {
                let hLength = numberChunks[j] / 10;
                output = output + '' + romanCombinations[10].repeat(hLength)
            } else if (numberChunks[j] > 5) {
                output = output + '' + romanCombinations[5]
                let hLength = (numberChunks[j] - 5) / 1;
                output = output + '' + romanCombinations[1].repeat(hLength)
            } else if (numberChunks[j] > 1) {
                let hLength = numberChunks[j] / 1;
                output = output + '' + romanCombinations[1].repeat(hLength)
            }
        }
    }

    return output;
}

// Input: num = 1994
// Output: "M CM XC IV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
let r = solution(1994);
console.log(r);
