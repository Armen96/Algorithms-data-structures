/**
 * 931. Minimum Falling Path Sum
 *
 * Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
 *
 * A falling path starts at any element in the first row and chooses the element in the next row that is either directly below
 * or diagonally left/right. Specifically, the next element from
 * position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 */

//

let minFallingPathSum = function(matrix) {
    if (matrix.length === 1) {
        return Math.min(...matrix[0]);
    }

    for (let i = matrix.length - 2; i >= 0 ; i--) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.min(
                matrix[i][j] + matrix[i + 1][j],
                matrix[i + 1][j - 1] !== undefined ? matrix[i][j] + matrix[i + 1][j - 1] : Infinity,
                matrix[i + 1][j + 1] !== undefined ? matrix[i][j] + matrix[i + 1][j + 1] : Infinity
            );
        }
    }

    return Math.min(...matrix[0]);
};

console.log(minFallingPathSum([[-19,57],[-40,-5]]));
