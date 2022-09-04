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
        1000: 'M'
    };

    let numberChunks = [];

    let i = num.toString().length - 1; // 4 1000 100 10
    while (i >= 0) {
        let chunk = Math.floor(num / 10 ** i) * 10 ** i;
        num = num - chunk;

        if (chunk) {
            numberChunks.push(chunk)
        }

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
                if (numberChunks[j] === 900) {
                    output = output + '' + romanCombinations[100] + '' + romanCombinations[1000]
                } else {
                    output = output + '' + romanCombinations[500]

                    let hLength = (numberChunks[j] - 500) / 100;
                    output = output + '' + romanCombinations[100].repeat(hLength)
                }
            } else if (numberChunks[j] > 100) {
                if (numberChunks[j] === 400) {
                    output = output + '' + romanCombinations[100] + '' + romanCombinations[500]
                } else {
                    let hLength = numberChunks[j] / 100;
                    output = output + '' + romanCombinations[100].repeat(hLength)
                }
            } else if (numberChunks[j] > 50) {
                if (numberChunks[j] === 90) {
                    output = output + '' + romanCombinations[10] + '' + romanCombinations[100]
                } else {
                    output = output + '' + romanCombinations[50]

                    let hLength = (numberChunks[j] - 50) / 10;
                    output = output + '' + romanCombinations[10].repeat(hLength)
                }
            } else if (numberChunks[j] > 10) {
                if (numberChunks[j] === 40) {
                    output = output + '' + romanCombinations[10] + '' + romanCombinations[50]
                } else {
                    let hLength = numberChunks[j] / 10;
                    output = output + '' + romanCombinations[10].repeat(hLength)
                }
            } else if (numberChunks[j] > 5) {
                if (numberChunks[j] === 9) {
                    output = output + '' + romanCombinations[1] + '' + romanCombinations[10]
                } else {
                    output = output + '' + romanCombinations[5]

                    let hLength = (numberChunks[j] - 5) / 1;
                    output = output + '' + romanCombinations[1].repeat(hLength)
                }
            } else if (numberChunks[j] > 1) {
                if (numberChunks[j] === 4) {
                    output = output + '' + romanCombinations[1] + '' + romanCombinations[5]
                } else {
                    let hLength = numberChunks[j] / 1;
                    output = output + '' + romanCombinations[1].repeat(hLength)
                }
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
