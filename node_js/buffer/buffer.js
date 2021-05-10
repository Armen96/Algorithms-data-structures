const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/data.txt');

const toString = buffer.toString();
console.log(toString);
