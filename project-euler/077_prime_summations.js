/**
 * Prime summations
 *
 * It is possible to write ten as the sum of primes in exactly five different ways:
 *
 * 7 + 3
 * 5 + 5
 * 5 + 3 + 2
 * 3 + 3 + 2 + 2
 * 2 + 2 + 2 + 2 + 2
 *
 * What is the first value which can be written as the sum of primes in over five thousand different ways?
 */


function solution(LIMIT) {
    let primeListArray = [2, 3];
    function primeList(n) {
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

        for (let i = primeListArray[primeListArray.length - 1] + 1; i <= n; i++) {
            if (isPrime(i)) {
                primeListArray.push(i);
            }
        }
    }

    function recursionApproach(array, target, i, memo) {
        let key = target + ':' + i;

        if (memo[key]) {
            return memo[key];
        }

        let toReturn = null;
        if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        } else if (i < 0) {
            return 0;
        } else if (target < array[i]) {
            toReturn = recursionApproach(array, target, i - 1, memo);
        } else {
            toReturn = recursionApproach(array, target - array[i], i, memo) + recursionApproach(array, target, i - 1, memo)
        }

        memo[key] = toReturn;
        return toReturn;
    }

    let result = 0;
    let target = 10;
    let memo = {};

    while (result < LIMIT) {
        primeList(target);

        result = recursionApproach(primeListArray, target, primeListArray.length - 1, memo)
        target++
    }

    return  target - 1;
}


console.time();
let result = solution(5000);
console.log(result); // 71
console.timeEnd()
