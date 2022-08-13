let openParentheses = ['(', '[', '<'];
let closeParentheses = [ ')', ']', '>'];

function compiler(text) {
    const stack = [];
    let isValid = true;

    // if (text.length % 2 === 1) { return false; }

    for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];

        if (openParentheses.includes(currentChar)) {
            stack.push(currentChar)
        } else if (closeParentheses.includes(currentChar)) {

            let indexOfParentheses = closeParentheses.indexOf(currentChar);
            let accordingOpenParentheses = openParentheses[indexOfParentheses];

            if (stack[stack.length - 1] === accordingOpenParentheses) {
                stack.pop();
            } else {
                isValid = false;
                break;
            }
        } else {
            // isValid = false;
            // break;
        }
    }

    if (stack.length) {
        isValid = false;
    }

    return isValid;
}


console.log(' hello [] hi', compiler('hello [] hi')); // true

