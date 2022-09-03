// recursion
let array = [1, 2, 3, 4];
let target = 7;

function countSubSetSum(array, target) {
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

    return recursionFn(array, target, array.length - 1);
}

console.log(countSubSetSum(array, target));

// tabulation
function solution(array, target) {
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

// console.log(solution(array, target));
