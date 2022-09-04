/**
 * 5. Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 */
//
// function solution(str) {
//     if (str.length < 2) { return str; }
//
//     let longestSubSet = '';
//
//     function isPalindrome(string) {
//         return string === string.split('').reverse().join('');
//     }
//
//
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             let stringSub = str.substring(i, j)
//             if (isPalindrome(stringSub) && stringSub.length > longestSubSet.length) {
//                 longestSubSet = stringSub;
//             }
//         }
//     }
//
//     return longestSubSet;
// }
//
// let result = solution('asd');
// console.log(result);


function solution(s) {
    if (s.length < 2) { return s; }

    let longestSubSet = s[0];

    function getDrome(start, end, string) {
        let i = 0;
        while (string[start - i] && string[start - i] === string[end + i]) { i++ }
        i--;
        return string.substring(start - i, end + i + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = getDrome(i, i, s);
        let even = getDrome(i - 1, i, s)

        if (longestSubSet.length < odd.length) {
            longestSubSet = odd;
        }

        if (longestSubSet.length < even.length) {
            longestSubSet = even;
        }
    }

    return longestSubSet;
}

let result = solution('asd');
console.log(result);
