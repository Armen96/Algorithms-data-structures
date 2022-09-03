/**
 * Circular primes
 *
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 *
 * How many circular primes are there below one million?
 */


function solution(LIMIT) {
    function isPrime(number) {
        let status = true;

        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            if ( number %i === 0) {
                status = false;
                break;
            }
        }

        return status;
    }

    function isContainsEvenNumber(number) {
        let status = false;
        let chunks = number.toString().split('');
        for (let i = 0; i < chunks.length; i++) {
            if (['0', '2', '4', '6', '8'].indexOf(chunks[i]) !== -1) {
                status = true;
                break;
            }
        }
        return status;
    }

    function getCircles(number) {
        let output = [];
        let numberSrr = number.toString();
        let chunks = numberSrr.split('');

        for (let i = 0; i < numberSrr.length - 1; i++) {
            chunks.push(chunks.shift());
            output.push(+chunks.join(''))
        }

        return output;
    }

    let primeListArray = [2, 3];
    for (let i = 4; i <= LIMIT; i++) {
        if (!isContainsEvenNumber(i) && isPrime(i)) {
            primeListArray.push(i);
        }
    }

    let circlePrimes = [];
    for (let i = 0; i < primeListArray.length; i++) {
        let circles = getCircles(primeListArray[i]);
        let status = true;

        for (let j = 0; j < circles.length; j++) {
            if (primeListArray.indexOf(circles[j]) === -1) {
                status = false;
                break
            }
        }

        if (status) {
            circlePrimes.push(primeListArray[i])
        }
    }

    return circlePrimes.length;
}


console.time();
let result = solution(1000000);
console.log(result); // 55
console.timeEnd()
