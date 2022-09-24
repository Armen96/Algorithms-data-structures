/**
 * 3. Longest Substring Without Repeating Characters
 */

function solution(str) {
    let longestSubStringLength = 1;
    for (let i = 0; i < str.length; i++) {
        let localLength = 1;
        let memo = [str[i]];

        for (let j = i + 1; j < str.length; j++) {
            if (memo.indexOf(str[j]) !== -1) {
                break;
            } else {
                memo.push(str[j]);
                localLength = localLength + 1;
            }
        }

        if (localLength > longestSubStringLength) {
            longestSubStringLength = localLength;
        }
    }

    return longestSubStringLength;
}

let result = solution('bbbb');
console.log(result);
