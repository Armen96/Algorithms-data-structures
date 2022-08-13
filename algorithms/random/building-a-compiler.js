const assert = require('assert');

/**
 This problem was recently asked by Uber:

 Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced.
 Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 An input string is valid if:
 - Open brackets are closed by the same type of brackets.
 - Open brackets are closed in the correct order.
 - Note that an empty string is also considered valid.

 Input: "((()))"
 Output: True

 Input: "[()]{}"
 Output: True

 Input: "({[)]"
 Output: False
 */


function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

let openParentheses = ['{', '(', '['];
let closeParentheses = ['}', ')', ']'];

let script = '{{}([]){}}';

function compiler(script) {

    if (script.length % 2 === 1) {
        return false
    }

    for (let i = 0; i < script.length; i++) {
        let current_parentheses = script[i];

        if (openParentheses.includes(current_parentheses)) {

            let indexOfParentheses = openParentheses.indexOf(current_parentheses);
            let accordingClosedParentheses = closeParentheses[indexOfParentheses];
            let indexOfClosedParentheses = script.indexOf(accordingClosedParentheses);

            if (indexOfClosedParentheses < 0) {
                return false;
            }

            for (let j = indexOfClosedParentheses; j >= i; j--) {
                if (script[j] === current_parentheses) {
                    let dif = indexOfClosedParentheses - j;

                    // if ( dif === 1 || dif === 3) {
                    if (dif % 2 === 1) {
                        script = replaceAt(script, indexOfClosedParentheses, '');
                        script = replaceAt(script, j, '');
                        break;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            // exeption
            // return compiler(script);
        }
    }

    if (typeof script === 'string' && script.length > 0) {
        return compiler(script);
    }

    return true
}

console.log(compiler(script));


describe("Validate Balanced Parentheses", () => {
    it('compiler("{{{}}}")', function () {
        assert.equal(compiler("{{{}}}"), true);
    });

    it('compiler("{{([])}}")', function () {
        assert.equal(compiler("{{([])}}"), true);
    })

    it('compiler("{[()")', function () {
        assert.equal(compiler("{[()"), false);
    })

    it('compiler("{[]})")', function () {
        assert.equal(compiler("{[]})"), false);
    })
})
