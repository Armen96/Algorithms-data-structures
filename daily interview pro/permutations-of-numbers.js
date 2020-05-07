/**
* Hi, here's your problem today. This problem was recently asked by Facebook:
* You are given an array of integers. Return all the permutations of this array.
*
* print permute([1, 2, 3])
* # [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
*/

function permute(array) {

    // for (let i = 0; i < array.length; i++) {
    //     memo.push(bindingProcess(array))
    // }

    let memo = bindingProcess(array, 4);

    function bindingProcess(arr, number) {
        let bindArray = [];

        for (let i = 0; i < arr.length; i++) {

            // let first = [number, ...arr[i]];
            // bindArray.push(first);

            for (let j = 0; j <= arr[i].length; j++) {

                let firstNElements = arr[i].slice(0, j);
                let lastNElements = arr[i].slice(j, arr[i].length);


                // console.log('firstNElements', firstNElements);
                // console.log('lastNElements', lastNElements);

                let item = [...firstNElements, number, ...lastNElements];

                bindArray.push(item);
            }
        }

        return bindArray;
    }

    return memo;
}
let array1 = [[1, 2], [2, 1]];

let array2 = [
    [ 3, 1, 2 ],
    [ 1, 3, 2 ],
    [ 1, 2, 3 ],
    [ 3, 2, 1 ],
    [ 2, 3, 1 ],
    [ 2, 1, 3 ]
];




console.log(permute(array2, 4));
