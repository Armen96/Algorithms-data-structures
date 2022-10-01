/**
 * 409. Longest Palindrome
 */

let longestPalindrome = function(s) {
    let memo = {};
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        memo[s[i]] = memo[s[i]] ? memo[s[i]] + 1 : 1;
    }

    let keys = Object.keys(memo);
    let isOdd = false;
    keys.forEach(key => {
        if (memo[key] %2 === 0) {
            count = count + memo[key];
        } else {
            isOdd = true;
            count = count + memo[key] - 1;
        }
    })

    return isOdd ? count + 1 : count;
};

console.log(longestPalindrome('abccccdd'));
