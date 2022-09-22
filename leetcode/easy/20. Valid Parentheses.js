/**
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 *
 */


let isValid = function(s) {
    if (str.length %2 === 1) { return false; }

    let open = ['(', '{', '['];
    let close = [')', '}', ']'];
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (open.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        } else if (close.indexOf(s[i]) !== -1) {
            let lastElement = stack.pop()
            if (lastElement !== open[close.indexOf(s[i])]) {
                return false;
            }
        } else {
            return false;
        }
    }

    if (stack.length) {
        return false
    }

    return true;
};

let str =  '()[]';
let res = isValid(str); //
console.log(res);
