const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/data.txt');

const toString = buffer.toString();
console.log(toString);

const bufferFrom = Buffer.from([1, 2, 3, 4, 5, 6], 'utf8');
console.log('bufferFrom', bufferFrom.toString());
