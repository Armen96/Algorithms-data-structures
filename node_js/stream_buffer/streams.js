/**
 * Streams types: There are 5 kinds of streams: readable, writable, transform, duplex, and "classic".
 *
 * Readable -> fs createReadStream
 * Writable -> (req, res) like res
 *
 * Pipe() source.pipe(destination); createReadStream.pipe(res);
 *
 * Duplex readable + writable
 */

const http = require('http');
const fs = require('fs');
const { pipeline } = require('stream');
const oppressor = require('oppressor')

const server = http.createServer(function (req, res) {
    // this approach loads file in server then transfer to client side
    // req and res are streams

    // fs.readFile(__dirname + '/data.txt', function (err, data) {
    //     res.end(data);
    // });

    // https://www.youtube.com/watch?v=aTEDCotcn20&t=1607s&ab_channel=CodingTech 7:15
    // How to NOT STREAM a FILE over HTTP
    // const stream = fs.createReadStream(__dirname + '/data.txt');
    // stream.pipe(res);

    // Transform
    // const stream = fs.createReadStream(__dirname + '/data.txt');
    // stream.pipe(oppressor(req)).pipe(res);

    const streamFile = fs.createReadStream(__dirname + '/data.txt');
    pipeline(streamFile, res, err => {
        if (err) console.log(err);
    })
});
server.listen(8000);
