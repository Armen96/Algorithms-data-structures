const fs = require('fs');
const zlib = require('zlib')

const readStream = fs.createReadStream('./data2.txt');
const writeStream = fs.createWriteStream('./data2-v2.txt');
const compressStream = zlib.createGzip();

// Error handler
const errorHandler = () => {
    readStream.destroy();
    writeStream.end('Finishing with error...')
}

// Solution 1
readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
})

// This function is Duplex type because we use and read and write operations
// It's the same as using pipe function
// Solution 2
readStream
    .on('error', errorHandler) // for reading error
    .pipe(compressStream) // Compress to unreadable chars! Later we need to decompress*
    .pipe(writeStream)
    .on('error', errorHandler) // for writing error

