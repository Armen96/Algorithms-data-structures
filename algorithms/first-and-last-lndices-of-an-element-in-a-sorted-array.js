const assert = require('assert');
/**
 This problem was recently asked by AirBNB:

 Given a sorted array, A, with possibly duplicated elements,
 find the indices of the first and last occurrences of a target element,x.
 Return -1 if the target is not found.

*/

// let arr = [1,2];
//
// for (let m = 0; m < 100000; m++) {
//     arr.push(2);
// }
//
// arr.push(3);

//if the same element count more than 100000
// Use getFirstAndLastIndexes

function getFirstAndLastIndexes(arr,target) {
    let firstIndexOfTarget = arr.indexOf(target);

    if ( firstIndexOfTarget === -1 ) return [-1,-1];

    return [firstIndexOfTarget, arr.lastIndexOf(target) ]
}

function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++){
        if (arr[i] === val)
            indexes.push(i);
    }

    if(indexes.length) return [indexes[0],indexes[indexes.length -1 ]];

    return [-1,-1];
}

describe("First and Last Indices of an Element in a Sorted Array", () => {
    it('getFirstAndLastIndexes(arr,target)', function () {
        let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
        let target = 2;

        let result = getFirstAndLastIndexes(arr,target);

        assert.equal(result[0],1);
        assert.equal(result[1],4);
    })

    it('getFirstAndLastIndexes(arr,target)', function () {
        let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
        let target = 7;

        let result = getFirstAndLastIndexes(arr,target);

        assert.equal(result[0],7);
        assert.equal(result[1],7);
    })

    it('getFirstAndLastIndexes(arr,target) Wrong', function () {
        let arr = [1, 2, 2, 3, 4, 7, 8, 8];
        let target = 5;

        let result = getFirstAndLastIndexes(arr,target);

        assert.equal(result[0],-1);
        assert.equal(result[1],-1);
    })
});
