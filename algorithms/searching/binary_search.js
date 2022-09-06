/**
 * Binary search
 *
 * Complexity = O(logN)
 * If N=8 we can find the number in worst case by using 3 steps
 *
 * The array have to be sorted
 * We are tracking low and high values until we get target value
 */

function binary_search(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (target === array[middle]) {
            return middle;
        }

        if (target > array[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return null;
}

let r = binary_search([2, 4, 5, 7, 9, 23, 65, 107], 23);
console.log(r);
