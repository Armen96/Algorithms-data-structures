/**
 * Digit factorials
 *
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 *
 * Note: As 1! = 1 and 2! = 2 are not sums they are not included.
 */


function solution() {
    let sum = 0;
    let memo = {};
    for (let i = 0; i <= 9; i++) {
        memo[i.toString()] = factorial(i);
    }

    function factorial(number) {
        let result = 1;
        if (number === 0) { return 1; }

        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }

    function parser(number) {
        let chunks = number.toString().split('');
        let value = chunks.map(i => {
            return memo[i];
        }).reduce((a, b) => {
            return a + b;
        }, 0);

        return number === value;
    }

    for (let i = 3; i < 999999; i++) {
        if (parser(i)) {
            console.log(i)
            sum += i;
        }
    }

    return sum;
}

let result = solution();
console.log(result); // 40730
