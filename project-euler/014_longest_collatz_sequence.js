/**
 * Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

/**
 * Collatz conjecture
 * Syracuse problem
 * Ulam conjecture
 *
 * Paul Erdős said about the Collatz conjecture: Mathematics may not be ready for such problems.
 * Terence Tao
 */

function solution() {
    let chain = {'1': 1, '2': 2, '4': 3}
    let startingNumber = 3;
    let NUMBER_LIMIT = 1000000;
    let maxLength = 3;
    let maxNumber = 4;

    function parser(number, initialNumber, step = 0) {
        if (chain[number] === undefined) {
            step = step + 1;
            if (number %2 === 0) {
                parser(number / 2, initialNumber, step);
            } else {
                parser((3 * number) + 1, initialNumber, step);
            }
        } else {
            chain[initialNumber] = chain[number] + step;

            if (maxLength < chain[initialNumber]) {
                maxLength = chain[initialNumber];
                maxNumber = initialNumber
            }
            return 0;
        }
    }

    for (let i = startingNumber; i < NUMBER_LIMIT; i++) {
        parser(i, i , 0);
    }

    return [maxLength, maxNumber];
}

console.log(solution()); // [ 525, 837799 ]
