/**
 * 75. Sort Colors
 */


var sortColors = function(nums) {
    function quickSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        let pivot = arr[Math.floor(Math.random() * arr.length)];

        let lessThanPivot = arr.filter(i => i < pivot);
        let greaterThanPivot = arr.filter(i => i > pivot);
        let equalPivot = arr.filter(i => i === pivot);

        return [...quickSort(lessThanPivot), ...equalPivot, ...quickSort(greaterThanPivot)];
    }

    return quickSort(nums)
};

console.log(sortColors([2,0,2,1,1,0]));
