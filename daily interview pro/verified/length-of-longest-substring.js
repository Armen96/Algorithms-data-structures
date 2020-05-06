/**
 * Hi, here's your problem today. This problem was recently asked by Microsoft:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * lengthOfLongestSubstring('abrkaabcdefghijjxxx') output #10 abcdefghij
 */

function lengthOfLongestSubstring(str) {
    let arrayOfSubstrings = [];

    for (let i = 0; i < str.length; i++) {

        let subStringStart = str[i];

        for (let j = i + 1; j < str.length; j++) {

            if (!subStringStart.includes(str[j])) {
                subStringStart = subStringStart + str[j];

                if (j === str.length - 1) {
                    arrayOfSubstrings.push(subStringStart);
                    i = j - 1;
                    break;
                }
            } else {
                arrayOfSubstrings.push(subStringStart);
                i = j - 1;
                break;
            }
        }
    }

    arrayOfSubstrings = arrayOfSubstrings.map(item => {
        return item.length;
    });

    return Math.max(...arrayOfSubstrings);
}

console.log(lengthOfLongestSubstring('aaaa')); // 1
console.log(lengthOfLongestSubstring('aaba')); // 2
console.log(lengthOfLongestSubstring('aabc')); // 3
console.log(lengthOfLongestSubstring('abcd')); // 4
console.log(lengthOfLongestSubstring('abrkaabcdefghijjxxx')); // 10

