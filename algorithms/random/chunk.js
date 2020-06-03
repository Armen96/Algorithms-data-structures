const assert = require('assert');
// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

function chunk(array, size) {
    let chunkArray = [];
    for ( let i = 0; i < array.length; i += size ) {
        chunkArray.push(array.slice(i,i + size))
    }

    return chunkArray;
}

describe("Array Chunking", () => {
    it("chunk() works", () => {
        let arr = ["a", "b", "c", "d"];
        let chunked = chunk(arr, 2);
        assert.deepEqual(chunked, [["a", "b"], ["c", "d"]]);

        arr = [0, 1, 2, 3, 4, 5];
        chunked = chunk(arr, 4);
        assert.deepEqual(chunked, [[0, 1, 2, 3], [4, 5]]);
    });
});

