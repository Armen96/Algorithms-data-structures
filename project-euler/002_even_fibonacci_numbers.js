/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

const limit = 4000000;
let sum = 0;
function solution(a, b) {
    while (b < limit) {
        if (b%2 === 0) {
            sum += b;
        }

        let c = b;
        b = a + b;
        a = c;
    }

    return sum;
}

console.log(solution(1, 2)); // 4.613.732 | 4613732
