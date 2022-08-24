/**
 * Non-abundant sums
 *
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 *
 */

const LIMIT = 28123;

function solution() {
    const arrayOfAbundantNumbers = [];
    let totalSum = 0;

    function isAbundant(number) {
        let sum = 1;

        for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number %i === 0) {
                sum += i;

                if (i !== number / i) {
                    sum += number / i;
                }
            }
        }

        return sum > number;
    }

    function canBeReproducedBy2AbundantNumbers(array, target) {
        let status = false;
        const storageHash = {};

        for (let i = 0; i < array.length; i++) {
            storageHash[array[i]] = true;
            let value = target - array[i];

            if (storageHash[value.toString()]) {
                status = true;
                break
            }
        }

        return status;
    }


    for (let i = 1; i <= LIMIT; i++) {
        if (isAbundant(i)) {
            arrayOfAbundantNumbers.push(i);
        }

        if (!canBeReproducedBy2AbundantNumbers(arrayOfAbundantNumbers, i)) {
            totalSum = totalSum + i
        }
    }

    return totalSum;
}

console.log(solution()); // 4179871
// https://www.geeksforgeeks.org/check-exist-two-elements-array-whose-sum-equal-sum-rest-array/
