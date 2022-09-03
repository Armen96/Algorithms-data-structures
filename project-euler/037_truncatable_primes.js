/**
 * Truncatable primes
 *
 * The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
 *
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
 *
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
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
            if (['0', '4', '6', '8'].indexOf(chunks[i]) !== -1) {
                status = true;
                break;
            }
        }
        return status;
    }

    function getTruncatables(number) {
        let output = [];
        let numberSrr = number.toString();
        let chunksLeftToRight = numberSrr.split('');
        let chunksRightToLeft = numberSrr.split('');

        for (let i = 0; i < numberSrr.length - 1; i++) {
            chunksLeftToRight.shift();
            output.push(+chunksLeftToRight.join(''))
        }

        for (let i = 0; i < numberSrr.length - 1; i++) {
            chunksRightToLeft.pop();
            output.push(+chunksRightToLeft.join(''))
        }

        return output;
    }

    let primeListMemo = {"2": true, "3": true, "5": true, "7": true};
    let truncatablesList = [];
    let i = 10;
    while (truncatablesList.length < LIMIT) {
        if (!isContainsEvenNumber(i) && isPrime(i)) {
            primeListMemo[i] = true;


            let truncatables = getTruncatables(i);
            let status = true;
            for (let j = 0; j < truncatables.length; j++) {
                if (!primeListMemo[truncatables[j]]) {
                    status = false;
                    break;
                }
            }

            if (status) {
                truncatablesList.push(i);
            }
        }
        i++;
    }

    return truncatablesList.reduce((a, b) => a + b, 0);
}


console.time();
let result = solution(11);
console.log(result); // 748317
console.timeEnd()
