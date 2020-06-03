/**
 * This problem was recently asked by Google:
 *
 * Given a list of numbers with n unique numbers (1, 2, 3, ... ,n), sort the list in O(n) time.
 */



let arr = [3, 3, 2, 1, 3, 2, 1];

function sortNums (arr) {

    let obj = {};

    for ( let i = 0; i < arr.length; i++ ) {
        obj[arr[i]] = obj[arr[i]]+1 || 1
    }

    let sortedArray = [];
    let keys = Object.keys(obj);

    for ( let i = 0; i < keys.length; i++ ) {
        sortedArray = [...sortedArray,...new Array(obj[keys[i]]).fill(keys[i])];
    }

    return sortedArray;
}


sortNums(arr);
