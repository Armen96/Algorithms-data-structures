/**
 * Pandigital prime
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.
 * For example, 2143 is a 4-digit pandigital and is also prime.
 *
 * What is the largest n-digit pandigital prime that exists?
 */


function solution() {
    let result = null;

    function isPrime(number) {
        let status = true;

        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            if (number % i === 0) {
                status = false;
                break;
            }
        }

        return status;
    }

    function generateAllPandigitalNumbers() {
        function generateCombinations(arrayOfNumbers, pin) {
            let output = [];

            for (let i = 0; i < arrayOfNumbers.length; i++) {
                let str = arrayOfNumbers[i].toString();
                for (let j = 0; j <= str.length; j++) {
                    let subString = str.substring(0, j) + '' + pin + str.substring(j, str.length)
                    output.push(+subString)
                }
            }

            return output.sort((a, b) => b - a);
        }

        let memo = {"1": [1]};
        for (let i = 2; i <= 9; i++) {
            memo[i] = generateCombinations(memo[i - 1], i)
        }

        return memo;
    }

    const memo = generateAllPandigitalNumbers();

    for (let i = 9; i > 0; i--) {
        const array = memo[i];
        for (let j = array.length; j >= 0; j--) {
            if (isPrime(array[j])) {
                result = array[j];
            }
        }

        if (result) {
            break;
        }
    }

    return result;
}

console.time()
console.log(solution()); // 7652413
console.timeEnd()
