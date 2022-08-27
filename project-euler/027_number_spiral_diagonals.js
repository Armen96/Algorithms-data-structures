/**
 * Number spiral diagonals
 *
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 * 21 22 23 24 25
 * 20  7  8  9 10
 * 19  6  1  2 11
 * 18  5  4  3 12
 * 17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

const SIZE = 1001; // 1001;
let INITIAL_DISTANCE = SIZE - 1;
function solutions() {
    let startNumber = SIZE * SIZE;
    let sum = BigInt(startNumber);
    let iteration = 0;
    while (INITIAL_DISTANCE > 0) {
        if (iteration === 4) {
            iteration = 0;
            INITIAL_DISTANCE = INITIAL_DISTANCE - 2;
        }

        startNumber = startNumber - INITIAL_DISTANCE;

        if (startNumber > 0 && INITIAL_DISTANCE > 0) {
            sum = sum + BigInt(startNumber);
        }

        iteration = iteration + 1;
    }

    return sum;
}


let result = solutions(); // 669171001
console.log(result.toString());
