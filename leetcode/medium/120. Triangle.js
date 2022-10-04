/**
 * 120. Triangle
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 *
 *
 *
 * Example 1:
 *
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 */


let minimumTotal = function(triangle) {
    if (triangle.length === 1) {
        return Math.min(...triangle[0]);
    }

    for (let i = triangle.length - 2; i >= 0 ; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = Math.min(
                triangle[i][j] + triangle[i + 1][j],
                triangle[i][j] + triangle[i + 1][j + 1],
            )
        }
    }

    return triangle[0][0];
};


console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
