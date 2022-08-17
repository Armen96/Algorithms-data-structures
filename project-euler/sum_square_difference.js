/**
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1^2 + 2^2 + .... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1+ 2 + 3 + ... + 10)^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
 *
 * 3025 - 385 = 2640
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function solution() {
    let NUMBER_SIZE = 100;

    let numbersSum = 100 * ((100 + 1) / 2);
    let numberSumSqrt = Math.pow(numbersSum, 2);

    let sqrtSum = 0;
    for (let i = 1; i <= NUMBER_SIZE; i++) {
        sqrtSum += Math.pow(i, 2);
    }

    return numberSumSqrt - sqrtSum;
}

console.log(solution()); // 25.164.150 25164150
