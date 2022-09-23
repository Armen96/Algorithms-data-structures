/**
 * 8. String to Integer (atoi)
 *
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 *
 * The algorithm for myAtoi(string s) is as follows:
 *
 * Read in and ignore any leading whitespace.
 * Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
 * Return the integer as the final result.
 * Note:
 *
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 */

let myAtoi = function (s) {
    let validChars = '';
    let isSpecified = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '+' && validChars.length === 0) {
            if (isSpecified) {
                break;
            } else {
                isSpecified = true;
                continue;
            }
        }

        if (s[i] !== ' ') {
            if (s[i] === '-') {
                if (isSpecified || validChars.length) {
                    break;
                } else {
                    isSpecified = true;
                    validChars += s[i];
                }
            } else {
                if (!isNaN(s[i])) {
                    validChars += s[i];
                } else {
                    break;
                }
            }
        } else {
            if (isSpecified || validChars.length) {
                break;
            }
        }
    }

    let number = Math.abs(validChars);
    if (isNaN(number)) { return 0; }


    let isNegativeNumber = validChars[0] === '-';
    if (isNegativeNumber) {
        number = -1 * number;
    }

    if (number > Math.pow(2, 31) -1) {
        return Math.pow(2, 31) -1;
    }

    if (number < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }

    return number;
};
// "words and 987"
let result = myAtoi("   ++0 2312");
console.log(result);
