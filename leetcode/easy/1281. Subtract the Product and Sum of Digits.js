/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 *
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 *
 *
 * Example 1:
 *
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 */

let subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0
    let str = n.toString();

    for (let i = 0; i < str.length; i++) {
        product = product * Number(str[i]);
        sum = sum + Number(str[i]);
    }

    return product - sum;
};

console.log(subtractProductAndSum(234));
