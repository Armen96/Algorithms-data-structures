/**
 * Insertion Sort
 *
 * Time Complexity: O(N^2)
 * Auxiliary Space: O(1)
 * @type {number[]}
 */

let arr = [45,2,66,74,55,14,21,1,452,12,6,6];

function insertionSort(arr) {
    for (let i = 1; i < arr.length ; i++) {
        let key = arr[i];

        let j = i -1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1
        }

        arr[j + 1] = key;
    }

    return arr;
}

console.time();
console.log(insertionSort(arr));
console.timeEnd();



