/**
 * 1405. Longest Happy String
 *
 * A string s is called happy if it satisfies the following conditions:
 *
 * s only contains the letters 'a', 'b', and 'c'.
 * s does not contain any of "aaa", "bbb", or "ccc" as a substring.
 * s contains at most a occurrences of the letter 'a'.
 * s contains at most b occurrences of the letter 'b'.
 * s contains at most c occurrences of the letter 'c'.
 * Given three integers a, b, and c, return the longest possible happy string.
 * If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 *
 *
 * Example 1:
 *
 * Input: a = 1, b = 1, c = 7
 * Output: "ccaccbcc"
 * Explanation: "ccbccacc" would also be a correct answer.
 */

let longestDiverseString = function(a, b, c) {
    let longestStr = '';
    let hashMap = {a, b, c};
    let total = a + b + c;

    if (!a) { delete hashMap['a']; }
    if (!b) { delete hashMap['b']; }
    if (!c) { delete hashMap['c']; }

    let prevItem = '';
    for (let i = 0; i < total; i++) {

        let values = Object.values(hashMap).sort((a, b) => b - a);
        let first = values[0];
        let second = values[1];
        let keys = Object.keys(hashMap);

        loop2:
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < keys.length; k++) {
                if (hashMap[keys[k]] === values[j]) {
                    if (prevItem !== keys[k]) {
                        if (hashMap[keys[k]] >= 2 && (j === 0 || (j === 1 && second >= first))) {
                            longestStr = longestStr + keys[k] + keys[k];
                            hashMap[keys[k]] = hashMap[keys[k]] - 2;
                            prevItem = keys[k];
                        } else {
                            longestStr = longestStr + keys[k];
                            hashMap[keys[k]] = hashMap[keys[k]] - 1;
                            prevItem = keys[k];
                        }

                        if (hashMap[keys[k]] === 0) {
                            delete hashMap[keys[k]];
                        }

                        break loop2;
                    }
                }
            }
        }

    }

    return longestStr;
};

let result = longestDiverseString(0, 8, 11);
console.log(result);
