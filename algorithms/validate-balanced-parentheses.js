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

let openParentheses = ['{','(','['];
let closeParentheses = ['}',')',']'];

function compiler(script) {
    if (script.length %2 === 1 ) {
        return false
    }

    let stack = [];

    for ( let i = 0; i < script.length; i++ ) {
        if (openParentheses.includes(script[i])) {

            stack.push(script[i]);

        } else if (closeParentheses.includes(script[i])){

            let lastElementOfStack = stack[stack.length - 1];
            let indexOfLastOpenParentheses = openParentheses.indexOf(lastElementOfStack);
            let indexOfLastCloseParentheses = closeParentheses.indexOf(script[i]);

            if( indexOfLastOpenParentheses === indexOfLastCloseParentheses ) {
                stack.pop()
            } else {
                return false;
            }

        } else {
            return false;
        }
    }

    return !stack.length;
}


describe("Validate Balanced Parentheses", () => {
    it('compiler("{{{}}}")', function() {
        assert.equal(compiler("{{{}}}"), true);
    });

    it('compiler("{{([])}}")', function() {
        assert.equal(compiler("{{([])}}"), true);
    })

    it('compiler("{{([()[{}[]()]])}}")', function() {
        assert.equal(compiler("{{([()[{}[]()]])}}"), true);
    })

    it('compiler("{[()")', function() {
        assert.equal(compiler("{[()"), false);
    })

    it('compiler("{[]})")', function() {
        assert.equal(compiler("{[]})"), false);
    })
})
