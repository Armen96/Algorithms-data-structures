/**
 * Double-base palindromes
 *
 * The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
 *
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

function solution() {
    let sum = 0;

    function convertToBinary(number) {
        let binary = '';

        while (number > 0) {
            let reminder = number % 2;
            number = Math.floor(number / 2);

            binary = reminder + '' + binary;
        }

        return binary
    }

    function isPalindrome(number) {
        let reverse = number.toString().split('').reverse().join('');

        return reverse === number.toString();
    }

    for (let i = 1; i <= 1000000 ; i++) {
        if (isPalindrome(i)) {
            if (isPalindrome(convertToBinary(i))) {
                sum += i;
            }
        }
    }

    return sum;
}

let result = solution();
console.log(result); // 872187
