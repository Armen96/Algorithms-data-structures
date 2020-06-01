/**
 * Hi, here's your problem today. This problem was recently asked by AirBNB:
 * Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.
 *
 * Input: [1, 2, 3, 8, 9, 10]
 * Output: 7
 */

/**
 * Logic
 * Loop over 0 to square of last element of array
 * Create function that returns true if sum of subset array equal to element
 *
 * Return element it above function returns false
 * */

/**
 * Brut force technique
 *
 * @param array
 * @param memoSums
 */
function generateSubSetSumOfElement(array, memoSums) {
    for (let i = 0; i < array.length; i++) {
        let arrayOfNewItems = [];

        for (let [key] of memoSums) {
            let generateKey = Number(key) + array[i];

            arrayOfNewItems.push(generateKey);
        }

        for (let j = 0; j < arrayOfNewItems.length; j++) {
            if (!memoSums.has(arrayOfNewItems[j])) {
                memoSums.set(arrayOfNewItems[j], true);
            }
        }

        if (!memoSums.has(array[i])) {
            memoSums.set(array[i], true);
        }
    }
}

function findSmallest(array) {
    let memoSums = new Map();

    let smallestNumber = 1;
    let lastElementOfArray = array[array.length - 1];
    generateSubSetSumOfElement(array, memoSums);

    for (let i = 1; i < lastElementOfArray * lastElementOfArray; i++) {

        if(!memoSums.has(i)) {
            smallestNumber = i;
           break;
        }
    }

    return smallestNumber;
}

console.log(findSmallest([1, 2, 3, 8, 10])); // 7
console.log(findSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 56
