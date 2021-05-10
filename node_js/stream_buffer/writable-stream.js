const Writable = require('stream').Writable;
const fs = require('fs');
const ws = Writable();

ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws)

const ws2 = fs.createWriteStream('writable-message.txt');

ws2.write('beep ');

setTimeout(function () {
    ws2.end('boop\n');
}, 1000);
