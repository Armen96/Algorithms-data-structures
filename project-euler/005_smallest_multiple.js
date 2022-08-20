/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */


function solution() {
    let result = 1;

    let MAX_VALUE = 20;
    let MIN_Value = 2;

    let ARRAY_OF_PRIMES = {};
    let ARRAY_OF_LOCAL_PRIMES = {};

    function parser(value) {
        for (let i = 2; i <= value; i++) {
            if (value %i === 0) {

                if (value === i) {
                    ARRAY_OF_LOCAL_PRIMES[i] = ARRAY_OF_LOCAL_PRIMES[i] ? ARRAY_OF_LOCAL_PRIMES[i] + 1 : 1;
                    break;
                } else {
                    value = value / i;
                    ARRAY_OF_LOCAL_PRIMES[i] = ARRAY_OF_LOCAL_PRIMES[i] ? ARRAY_OF_LOCAL_PRIMES[i] + 1 : 1;
                    parser(value);
                    break;
                }
            }
        }

        const keys = Object.keys(ARRAY_OF_LOCAL_PRIMES);
        for (let i = 0; i < keys.length; i++) {
            if (ARRAY_OF_PRIMES[keys[i]]) {

                if (ARRAY_OF_PRIMES[keys[i]] < ARRAY_OF_LOCAL_PRIMES[keys[i]]) {
                    ARRAY_OF_PRIMES[keys[i]] = ARRAY_OF_LOCAL_PRIMES[keys[i]]
                }

            } else {
                ARRAY_OF_PRIMES[keys[i]] = ARRAY_OF_LOCAL_PRIMES[keys[i]]
            }
        }
    }

    for (let i = MIN_Value; i < MAX_VALUE; i++) {
        ARRAY_OF_LOCAL_PRIMES = {};
        parser(i);
    }

    const keys2 = Object.keys(ARRAY_OF_PRIMES);

    for (let i = 0; i < keys2.length; i++) {
        result *= Math.pow(+keys2[i], ARRAY_OF_PRIMES[keys2[i]])
    }

    return result;
}

console.log(solution()); // 232 792 560 232792560
