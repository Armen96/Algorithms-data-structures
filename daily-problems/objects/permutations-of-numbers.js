/**
* Hi, here's your problem today. This problem was recently asked by Facebook:
* You are given an array of integers. Return all the permutations of this array.
*
* print permute([1, 2, 3])
* # [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
*/

function permute(array) {
    let initialArray = [[array[0]]];

    for (let i = 1; i < array.length; i++) {
        initialArray = bindingProcess(initialArray, array[i]);
    }

    function bindingProcess(arr, number) {
        let bindArray = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j <= arr[i].length; j++) {

                let firstNElements = arr[i].slice(0, j);
                let lastNElements = arr[i].slice(j, arr[i].length);
                let item = [...firstNElements, number, ...lastNElements];

                bindArray.push(item);
            }
        }

        return bindArray;
    }

    return initialArray;
}

console.log(permute([1, 2, 3])); // [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
