/**
 * Maximum path sum I
 *
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below:
 *
 * 75
 * 95 64
 * 17 47 82
 * 18 35 87 10
 * 20 4 82 47 65
 * 19 1 23 75 3 34
 * 88 2 77 73 7 63 67
 * 99 65 4 28 6 16 70 92
 * 41 41 26 56 83 40 80 70 33
 * 41 48 72 33 47 32 37 16 94 29
 * 53 71 44 65 25 43 91 52 97 51 14
 * 70 11 33 28 77 73 17 78 39 68 17 57
 * 91 71 52 38 17 14 91 43 58 50 27 29 48
 * 63 66 4 68 89 53 67 30 73 16 69 87 40 31
 * 4 62 98 27 23 9 70 98 73 93 38 53 60 4 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
 *
 */


/**
 * Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage.
 */


/**
 * Bottom Up solution
 */
// const matrix = [
//     [3],
//     [7, 4],
//     [2, 4, 6],
//     [8, 5, 9, 3]
// ];

const testTriangleString = '75\n' +
    '95 64\n' +
    '17 47 82\n' +
    '18 35 87 10\n' +
    '20 04 82 47 65\n' +
    '19 01 23 75 03 34\n' +
    '88 02 77 73 07 63 67\n' +
    '99 65 04 28 06 16 70 92\n' +
    '41 41 26 56 83 40 80 70 33\n' +
    '41 48 72 33 47 32 37 16 94 29\n' +
    '53 71 44 65 25 43 91 52 97 51 14\n' +
    '70 11 33 28 77 73 17 78 39 68 17 57\n' +
    '91 71 52 38 17 14 91 43 58 50 27 29 48\n' +
    '63 66 04 68 89 53 67 30 73 16 69 87 40 31\n' +
    '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23';

const arrayChunks = testTriangleString.split('\n');
const matrix = [];

for (let i = 0; i < arrayChunks.length; i++) {
    let subArray = arrayChunks[i].split(' ').map(number => parseInt(number));
    matrix.push(subArray);
}


function solution(matrix) {
    for (let i = matrix.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            matrix[i][j] = Math.max(matrix[i][j] + matrix[i + 1][j], matrix[i][j] + matrix[i + 1][j + 1])
        }
    }

    return matrix[0][0];
}

console.log(solution(matrix)); // 1074
