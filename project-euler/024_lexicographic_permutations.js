/**
 * Lexicographic permutations
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

/**
 * 012   021   102   120   201   210
 * So there are numberLength! cases if it's [0,1,2] then all cases number is 6 == 3!
 *
 * Okay now we need to find first char by index
 * FirstChar = Math.floor index/(numberLength - 1)!
 * e.g index = 4 4/2 = 2 | 3/2 = 1.5 so Math.floor = 1
 *
 *
 * @type {number}
 */
const TARGET_INDEX = 1000000 - 1;

function solution() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function factorial(n) {
        let product = 1;

        for (let i = 2; i <= n; i++) {
            product = product * i;
        }

        return product;
    }


    function getPermutations(index, list) {
        if (list.length === 0) { return ''; }

        const firstDigitOccurrences = factorial(list.length - 1);
        const firstDigitIndex = Math.floor(index / firstDigitOccurrences)
        const firstIndexFirstDigitIndex = firstDigitOccurrences * firstDigitIndex

        const firstDigit = list[firstDigitIndex];
        const recursiveIndex = index - firstIndexFirstDigitIndex;
        const recursiveSeq = list.filter(i => i !== firstDigit);

        return `${firstDigit}` + getPermutations(recursiveIndex, recursiveSeq)
    }

    return getPermutations(TARGET_INDEX, array);
}

console.log(solution()); // 2783915460
