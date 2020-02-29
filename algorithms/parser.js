// Amazon Software Development Engineer Interview Questions

function parser(code) {
    if(!code.length) return false;

    let stack = [];
    let openBrackets = '{[(';
    let closeBrackets = '}])';

    for (let i = 0; i < code.length; i++) {

        if(openBrackets.includes(code[i])) {
            stack.push(code[i]);
        } else {
            let closeBracketIndex = closeBrackets.indexOf(code[i]);
            let openBracket = openBrackets[closeBracketIndex];

            if(stack[stack.length -1] === openBracket) {
                stack.pop();
            } else {
                return false;
            }
        }

    }

    return !stack.length;
}

console.log(parser('{{([()[{}[]()]])}}'));
