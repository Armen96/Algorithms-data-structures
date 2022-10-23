/**
 * 1832. Check if the Sentence Is Pangram
 *
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 *
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
 * Output: true
 * Explanation: sentence contains at least one of every letter of the English alphabet.
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
let checkIfPangram = function(sentence) {
    let hashMap = {};
    let count = 0;
    let status = false;
    for (let i = 0; i < sentence.length; i++) {
        if (!hashMap[sentence[i]]) {
            count += 1;
        }

        if (count >= 26) {
            status = true;
            break;
        }
        hashMap[sentence[i]] = true;
    }
    return status;
};

console.log(checkIfPangram('abcdefghijklmnopqrstuvwxy'));
