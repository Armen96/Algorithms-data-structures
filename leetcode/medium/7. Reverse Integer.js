/**
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 *
 *
 * Example 1:
 *
 * Input: x = 123
 * Output: 321
 * Example 2:
 *
 * Input: x = -123
 * Output: -321
 * Example 3:
 *
 * Input: x = 120
 * Output: 21
 */


let reverse = function(x) {
    let reserveValue = +String(Math.abs(x).toString().split('').reverse().join(''));

    if (reserveValue > 0x7FFFFFFF) { // 2^32
        return 0;
    }

    if (x < 0) {
        return reserveValue * -1;
    }

    return reserveValue;
};

let result = reverse('-129');
console.log(result);
