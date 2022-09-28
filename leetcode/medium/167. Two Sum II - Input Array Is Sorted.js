/**
 * 167. Two Sum II - Input Array Is Sorted
 */

let twoSum = function(numbers, target) {
    let memo = {};
    let output = [];

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];

        if (memo.hasOwnProperty(numbers[i].toString())) {
            output[0] = memo[numbers[i]] + 1;
            output[1] = i + 1;
            break;
        }

        memo[diff] = i;
    }

    return output;
};

console.log(twoSum([2,7,11,15], 9));
