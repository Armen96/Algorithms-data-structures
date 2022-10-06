/**
 * 64. Minimum Path Sum
 *
 * [1,3,1],
 * [1,5,1],
 */

let minPathSum = function(grid) {
    let lastItemLength = grid[grid.length - 1].length;
    grid.unshift(Array(lastItemLength).fill(Infinity));

    for (let i = 0; i < grid.length; i++) {
        grid[i].unshift(Infinity);
    }

    for (let i = 1; i <= grid.length - 1; i++) {
        for (let j = 1; j <= grid[i].length - 1; j++) {
            if (i === 1 && j === 1) {
                //
            } else {
                let val = Math.min(grid[i][j] + grid[i][j - 1], grid[i][j] + grid[i - 1][j]);
                grid[i][j] = val;
            }
        }
    }

    let lastChunk = grid[grid.length - 1];
    return lastChunk[lastChunk.length - 1];
};

let result = minPathSum([[1,3,1],[1,5,1]]);
console.log(result);
