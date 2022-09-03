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

// TODO IMPROVEMENT NEEDS
function solution(n) {
    function recursionFn(array, target, i, memo) {
        let key = target + ':' + i;

        if (memo[key]) {
            return memo[key];
        }

        let toReturn = null;
        if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        } else if (i < 0) {
            return 0;
        } else if (array[i] > target) {
            toReturn = recursionFn(array, target, i -1, memo)
        } else {
            toReturn = recursionFn(array, target - array[i], i, memo) + recursionFn(array, target, i - 1, memo)
        }

        memo[key] = toReturn;
        return toReturn;
    }

    let arrayList = Array.from(Array(n - 1).keys()).map(i => i + 1)

    return recursionFn(arrayList, n, arrayList.length - 1, {});
}


function solution2(array, target) {
    let matrix = [];
    for (let i = 0; i <= array.length; i++) {
        matrix.push(new Array(target + 1).fill(0))
    }
    matrix[0][0] = 1;
    // *  0  1  2  3  4  5  6  7
    // 0 [1, 0, 0, 0, 0, 0, 0, 0]
    // 1 [1, 1, 0, 0, 0, 0, 0, 0]
    // 2 [1, 1, 1, 1, 0, 0, 0, 0]
    // 3 [1, 1, 1, 2, 1, 0, 0, 0]
    // 4 [1, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i-1].length; j++) {

            if (array[i - 1] > j) {
                matrix[i][j] = matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i -1][j] + matrix[i-1][j - array[i - 1]]
            }
        }
    }

    let lasRow = matrix[matrix.length - 1];
    return lasRow[lasRow.length - 1];
}

let n = 100;
let arrayList = Array.from(Array(n - 1).keys()).map(i => i + 1)
let result = solution2([1,2,5], 4);
console.log(result); // 190569291
