/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 *
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let hashMap = {};

    for (let i = 0; i < strs.length; i++) {
        let ordered = strs[i].split('').sort().join('');

        if (hashMap[ordered]) {
            hashMap[ordered].push(strs[i]);
        } else {
            hashMap[ordered] = [strs[i]]
        }
    }

    return Object.values(hashMap);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
