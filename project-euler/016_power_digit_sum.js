/**
 * Power digit sum
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

const DEGREE =  1000;
const NUMBER = 2;

function solution(number, degree) {
    let targetValue = BigInt(number)
    for (let i = 1; i < degree; i++) {
        targetValue = targetValue * BigInt(number.toString());
    }

    let chunks = targetValue.toString().split('');

    return chunks.reduce((a, b) => {
        if (!isNaN(a) && !isNaN(b)) {
            return parseInt(a) + parseInt(b);
        }
    })
}

const result = solution(NUMBER, DEGREE);
console.log(result) // 1366
