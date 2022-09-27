/**
 * 205. Isomorphic Strings
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 * Example 2:
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 */

let isIsomorphic = function(s, t) {
    if (s.length !== t.length) { return false; }

    let memo = {};
    let memo2 = {};
    let status = true;
    for (let i = 0; i < t.length; i++) {
        if (memo[t[i]]) {
            if (memo[t[i]] !== s[i]) {
                status = false;
                break;
            }
        }

        if (memo2[s[i]]) {
            if (memo2[s[i]] !== t[i]) {
                status = false;
                break;
            }
        }

        memo[t[i]] = s[i];
        memo2[s[i]] = t[i];
    }

    return status;
};

console.log(isIsomorphic('egg', 'avd'));
