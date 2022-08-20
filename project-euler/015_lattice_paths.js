/**
 * Lattice path
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 *
 * How many such routes are there through a 20×20 grid?
 */
const gridSize = 20;
function solution(gridSize) {
    let result = 0;

    function factorial(number) {
        if (number === 1) {
            return number;
        }

        return number * factorial(number - 1);
    }

    const stepsCount = gridSize * 2;

    result = factorial(stepsCount) / (factorial(stepsCount - gridSize) * factorial(gridSize));

    return result;
}

console.log(solution(gridSize)); // 137846528820

/**
 *  (0,0) => (n,k) === (n + k)! / n!
 */
