/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    let hashMap = {};
    if (s.length !== t.length) { return false; }

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1;
        hashMap[t[i]] = hashMap[t[i]] ? hashMap[t[i]] - 1 : -1;

        if (hashMap[s[i]] === 0) { delete hashMap[s[i]]; }
        if (hashMap[t[i]] === 0) { delete hashMap[t[i]]; }
    }

    return !Object.keys(hashMap).length;
};

let result = isAnagram('anagram', 'nagaram');
console.log(result);
