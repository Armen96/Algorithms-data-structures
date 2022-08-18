/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

const MAX_ORDER_NUMBER = 10001
function solution() {
    let primeNumbers = [];

    function isPrime(number) {
        let status = true;
        if (number === 2 || number === 3) {
            return true;
        }

        // number/2   vs  Math.sqrt(number)
        // 789.888ms  =>   24.075ms
        for (let j = 2; j <= Math.ceil(Math.sqrt(number)); j++) {
            if (number %j === 0) {
                status = false;
                break
            }
        }

        return status;
    }

    let i = 2;
    while (primeNumbers.length < MAX_ORDER_NUMBER) {
        const result = isPrime(i);

        if (result) {
            primeNumbers.push(i);
        }

        i = i + 1;
    }

    return primeNumbers[primeNumbers.length - 1];
}

console.log(solution()); // 104743

