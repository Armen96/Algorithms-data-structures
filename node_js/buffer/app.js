// Buffers, Streams
// A stream is like an Array but over time

const fs = require('fs');

// Sync data read
const fileContextAsync = fs.readFileSync(__dirname + '/data.txt', 'utf8');
// console.log(fileContextAsync);

// Async data read
const fileContext = fs.readFile(__dirname + '/data.txt', 'utf8', function(err, data) {
    // console.log(data);
});

// Readable and Writable Streams
const readableStream = fs.createReadStream(__dirname + '/bigData.txt', {encoding: 'utf8'});
const writableStream = fs.createWriteStream(__dirname + '/data2.txt');

readableStream.on('data', (dataChunk) => {
    // console.log('Chunk', dataChunk);

    writableStream.write(dataChunk);
})

readableStream.on('finish', function () {
    console.log('finish');
});
readableStream.on('close', function () {
    console.log('close');
});
readableStream.on('end', function () {
    console.log('end');
});

writableStream.on('finish', function () {
    console.log('writableStream finish');
});
writableStream.on('close', function () {
    console.log('writableStream close');
});
writableStream.on('end', function () {
    console.log('writableStream end');
});
