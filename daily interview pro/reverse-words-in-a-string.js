/**
 * This problem was recently asked by Facebook: Given a string,
 * you need to reverse the order of characters in each word within
 * a sentence while still preserving whitespace and initial word order.
 */

function reverseWords(str) {

    const catchWords = str.split(' ');

    catchWords.forEach( (value, index) => {
        catchWords[index] = value.split('').reverse().join('');
    });

    return catchWords.join(' ');
}


console.log(reverseWords("The cat in the hat"));
