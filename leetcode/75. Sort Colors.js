/**
 * 75. Sort Colors
 */


var sortColors = function(nums) {
    function quickSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        let pivot = arr[Math.floor(Math.random() * arr.length)];
        let lessThanPivot = [];
        let greaterThanPivot = [];
        let equalPivot = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                lessThanPivot.push(arr[i]);
            } else if (arr[i] > pivot) {
                greaterThanPivot.push(arr[i]);
            } else {
                equalPivot.push(arr[i]);
            }
        }

        return [...quickSort(lessThanPivot), ...equalPivot, ...quickSort(greaterThanPivot)];
    }

    return quickSort(nums)
};

console.time();
console.log(sortColors([2,0,2,1,1,0,0,1]));
console.timeEnd();
