/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

const primeNumber = 600851475143;

let largestPrimeFactor = primeNumber;
function solution() {
    for (let i = 2; i <  Math.floor(largestPrimeFactor / 2); i++) {
        if (largestPrimeFactor %i === 0) {
            largestPrimeFactor = largestPrimeFactor / i;

            if (largestPrimeFactor !== i) {
                solution(largestPrimeFactor)
            } else {
                break;
            }
        }
    }

    return largestPrimeFactor;
}

// 600851475143 = 6857 * 1471 *839 *71
solution(primeNumber); // 6857
