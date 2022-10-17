/**
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    let status = true;
    let parseStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i <= Math.floor(parseStr.length / 2); i++) {
        if (parseStr[i] !== parseStr[parseStr.length - i - 1]) {
            status = false;
            break;
        }
    }

    return status;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
