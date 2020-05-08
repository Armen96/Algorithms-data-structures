/**
 * Hi, here's your problem today. This problem was recently asked by Amazon:
 * You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.
 *
 * For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence
 * 1, 2, 3, 4, and thus, you should return its length, 4.
 */

function longestConsecutive(array) {
    let lengths = [];
    let sortedArray = array.sort((a, b) => a -b);

    let initialItem = array[0];
    let initialLength = 1;

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === initialItem + 1) {
            initialLength++
        } else {
            lengths.push(initialLength);
            initialLength = 1;
        }

        initialItem = sortedArray[i];
    }

    return lengths
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
