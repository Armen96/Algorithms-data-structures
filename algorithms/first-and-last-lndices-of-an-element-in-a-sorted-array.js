const assert = require('assert');
/**
 This problem was recently asked by AirBNB:

 Given a sorted array, A, with possibly duplicated elements,
 find the indices of the first and last occurrences of a target element,x.
 Return -1 if the target is not found.

*/

function getFirstAndLastIndexes(arr,target) {

    let firstIndexOfTarget = arr.indexOf(target);

    if ( firstIndexOfTarget === -1 ) return [-1,-1];

    let firstIndexOfReversedArrayTarget = arr.reverse().indexOf(target);
    let lastIndexOfTarget =  (arr.length - 1 ) - firstIndexOfReversedArrayTarget;

    return [firstIndexOfTarget, lastIndexOfTarget ]

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
