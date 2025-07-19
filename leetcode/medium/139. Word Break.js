/**
 * 139. Word Break
 * Medium
 * Topics
 * premium lock icon
 * Companies
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 * Example 2:
 *
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 *
 * *******/


var wordBreak = function(s, wordDict) {
    let status = false;
    const dead = new Set();

    function finder(string, words, memo) {
        if (status) return true;

        if (string === '') {
            status = true;
            return true;
        }

        if (dead.has(string)) return false;

        for (let i = 0; i < words.length; i++) {
            if (string.substring(0, words[i].length) === words[i]) {
                let remainingString = string.substring(words[i].length);

                finder(remainingString, words, memo);
            }
        }

        dead.add(string);
        return false;
    }

    finder(s, wordDict);

    return status;
};


console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // true
