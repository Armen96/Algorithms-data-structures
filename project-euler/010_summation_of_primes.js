/**
 * Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

const MAX_NUMBER = 2000000;
function solution() {
    let sum = 0;

    function primeParser(number) {
        let status = true;
        if (number === 2 || number === 3) {
            return true;
        }

        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            if (number %i === 0) {
                status = false;
                break;
            }
        }

        return status;
    }

    for (let i = 2; i < MAX_NUMBER; i++) {
        let isPrime = primeParser(i);
        if (isPrime) {
            sum += i;
        }
    }

    return sum;
}

console.log(solution()); // 142913828922
