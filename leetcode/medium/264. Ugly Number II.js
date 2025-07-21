/**
 * 264. Ugly Number II
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Hint
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 *
 * Given an integer n, return the nth ugly number.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 10
 * Output: 12
 * Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
 * Example 2:
 *
 * Input: n = 1
 * Output: 1
 * Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 * ***/


var nthUglyNumberSlow = function(n) {
    let primeMap = {};
    let uglyNumber = 1;

    let status = true;
    let number = 1;
    let uglyNumberCount = 0;
    while (status) {
        let isUglyNumber = isUgly(number, primeMap);

        if (isUglyNumber) {
            uglyNumberCount++;

            if (uglyNumberCount === n) {
                status = false;
                uglyNumber = number;
                return uglyNumber;
            }
        }

        number++;
    }

    return uglyNumber;
};

function isUgly(num, primeMap) {
    if (num === 1) {
        return true;
    }

    let status = true;
    let isPrime = true;

    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            if (i !== 2 && i !== 3 && i !== 5) {
                if (primeMap[i]) {
                    status = false;
                    primeMap[num] = true;
                    isPrime = false;

                    break;
                }
            } else {
                let div = num / i;
                if (primeMap[div]) {
                    status = false;
                    primeMap[num] = true;
                    isPrime = false;

                    break;
                }
            }

            isPrime = false;
        }
    }

    if (isPrime && (num !== 2 && num !== 3 && num !== 5)) {
        primeMap[num] = true;
        status = false;
    }

    return status;
}

console.time();
console.log(nthUglyNumberSlow(300)); // Output: 12
console.timeEnd();


var nthUglyNumber = function(n) {
    let uglyNumbers = [1];
    let i = 0;
    let j = 0;
    let k = 0;

    for (let l = 1; l < n; l++) {
        uglyNumbers[l] = Math.min(uglyNumbers[i] * 2, uglyNumbers[j] * 3, uglyNumbers[k] * 5);

        if (uglyNumbers[l] === uglyNumbers[i] * 2) { i = i + 1; }
        if (uglyNumbers[l] === uglyNumbers[j] * 3) { j = j + 1; }
        if (uglyNumbers[l] === uglyNumbers[k] * 5) { k = k + 1; }
    }

    return uglyNumbers[n - 1];
};

console.time();
console.log(nthUglyNumber(300)); // Output: 12
console.timeEnd();
