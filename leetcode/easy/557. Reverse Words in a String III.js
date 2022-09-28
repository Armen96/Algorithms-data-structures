/**
 * 557. Reverse Words in a String III
 */


let reverseWords = function (s) {
    let word = '';
    let output = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (output) {
                output = word + ' ' + output;
            } else {
                output = word;
            }

            word = '';
        } else {
            word += s[i];
        }

        if (i === 0) {
            if (output) {
                output = word + ' ' + output;
            } else {
                output = word;
            }
        }
    }

    return output;
};

console.log(reverseWords("Let's take LeetCode contest"));
