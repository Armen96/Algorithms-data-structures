/**
 * Counting summations
 *
 * It is possible to write five as a sum in exactly six different ways:
 *
 * 4 + 1
 * 3 + 2
 * 3 + 1 + 1
 * 2 + 2 + 1
 * 2 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 + 1
 *
 * How many different ways can one hundred be written as a sum of at least two positive integers?
 */

function solution(n) {
    function recursionFn(array, target, i) {
        if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        } else if (i < 0) {
            return 0;
        } else if (array[i] > target) {
            return recursionFn(array, target, i -1)
        } else {
            return recursionFn(array, target - array[i], i) + recursionFn(array, target, i - 1)
        }
    }

    let arrayList = Array.from(Array(n).keys()).map(i => i + 1)

    return recursionFn(arrayList, n, arrayList.length - 1);
}

let result = solution(10);
console.log(result); // 190569292
