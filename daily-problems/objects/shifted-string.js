/**
 * Hi, here's your problem today. This problem was recently asked by Apple:
 * You are given two strings, A and B. Return whether A can be shifted some number of times to get B.
 *
 * Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.
 */

function is_shifted(a, b) {
    let currentString = a;
    let status = false;

    for (let i = 0; i < a.length; i++) {
        currentString = currentString.substr(1, a.length) + currentString.substr(0, 1);

        if (currentString === b) {
            status = true;
            break
        }
    }

    return status;
}

console.log(is_shifted('asd', 'das')); // true
console.log(is_shifted('abcde', 'cdeab')); // true
console.log(is_shifted('abc', 'acb')); // false
