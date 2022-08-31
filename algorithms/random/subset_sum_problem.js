// recursion
let array = [1, 2, 3, 4, 5, 6];
let target = 7;

function countSubSetSum(array, target) {
    function recursionFn(array, target, i) {
        if (target === 0) {
            return 1;
        } else if (target < 0) {
            return 0;
        } else if (i < 0) {
            return 0;
        } else if (array[i] > target) {
            return recursionFn(array, target, i -1)
        } else {
            return recursionFn(array, target - array[i], i) + recursionFn(array, target, i - 1)
        }
    }

    return recursionFn(array, target, array.length - 1);
}

console.log(countSubSetSum(array, target));



