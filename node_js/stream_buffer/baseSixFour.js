/** Node.js */
const buffer = Buffer.from('Hello World!').toString('base64');
console.log(buffer);

const parse = Buffer.from(buffer, 'base64').toString();
console.log(parse);

/**
 * JS
 *
 * The btoa() method encodes a string in base-64.
 * This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string.
 *
 * Use the atob() method to decode a base-64 encoded string.
 *
 * */
// const encodedData = window.btoa("Hello, world"); // encode a string
// const decodedData = window.atob(encodedData); // decode the string
