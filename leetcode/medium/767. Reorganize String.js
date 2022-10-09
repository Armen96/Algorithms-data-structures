/**
 * 767. Reorganize String
 * Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
 *
 * Return any possible rearrangement of s or return "" if not possible.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: "aba"
 */


let reorganizeString = function (s) {
    let hashMap = {};
    let output = '';

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1;
    }

    function generateNextChar(lastChar) {
        let values = Object.values(hashMap).sort((a, b) => b - a);
        let keys = Object.keys(hashMap);
        let cOutput = '';

        loop2:
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < keys.length; j++) {
                if (hashMap[keys[j]] === values[i]) {
                    if (keys[j] !== lastChar) {
                        cOutput = keys[j];
                        hashMap[keys[j]] = hashMap[keys[j]] - 1;

                        if (hashMap[keys[j]] === 0) {
                            delete hashMap[keys[j]];
                        }
                        break loop2;
                    }
                }
            }
        }

        return cOutput;
    }

    for (let i = 0; i < s.length; i++) {
        let c = generateNextChar(output[output.length - 1]);

        if (c) {
            output = output + c;
        } else {
            output = '';
            break;
        }
    }

    return output;
};


let result = reorganizeString('aaacc');
console.log(result);
