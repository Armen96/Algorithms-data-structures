/**
 * Pandigital products
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */


/**
 *
 * The product length ca not be less than 4 and more than 4
 * The first multiplier length is 1 or 2
 * The second multiplier length is 3
 */

function solution() {
    let top = 9999;
    let bottom = 1000;
    let products = [];

    let targetValue = '123456789';

    function isPandigital(string) {
        let response = string.split('').sort((a, b) => a - b).join('');
        return response === targetValue;
    }

    for (let i = bottom; i <= top; i++) {
        for (let j = 2; j <= 99; j++) {
            if (i % j === 0) {
                let k = i / j;
                let str = k + '' + i + "" + j;
                if (isPandigital(str) && products.indexOf(i) === -1) {
                    products.push(i)
                }
            }
        }
    }

    return products.reduce((a, b) => a + b, 0);
}

let result = solution();
console.log(result); // 45228
