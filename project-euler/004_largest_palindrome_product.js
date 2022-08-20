/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const VALID_LENGTH = 3;
const MAX_DIGIT = 999;
const MIN_DIGIT = 100;

function solution() {
    let result;
    let number1;
    let number2;

    palindrome:
    for (let i = MAX_DIGIT * MAX_DIGIT; i >= MIN_DIGIT * MIN_DIGIT; i--) {
        if (i.toString() === i.toString().split("").reverse().join("")) {
            for (let j = MAX_DIGIT; j > MIN_DIGIT; j--) {
                if (i % j === 0 && (i/j).toString().length === VALID_LENGTH) {
                    result = i;
                    number1 = j;
                    number2 = i / j;
                    break palindrome;
                }
            }
        }
    }

    return result;
}

// 906609 993 * 913
solution(); // 906609
