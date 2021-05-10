# Streams

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Armen96/Algorithms-data-structures)

## Why you should use streams

I/O in node is asynchronous, so interacting with the disk and network involves passing callbacks to functions. You might be tempted to write code that serves up a file from disk like this:

```sh
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
    });
});
server.listen(8000);
```

This code works but it's bulky and buffers up the entire data.txt file into memory for every request before writing the result back to clients. If data.txt is very large, your program could start eating a lot of memory as it serves lots of users concurrently, particularly for users on slow connections.

The user experience is poor too because users will need to wait for the whole file to be buffered into memory on your server before they can start receiving any contents.

Luckily both of the (req, res) arguments are streams, which means we can write this in a much better way using fs.createReadStream() instead of fs.readFile():

```sh
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
});
server.listen(8000);
```

Here .pipe() takes care of listening for 'data' and 'end' events from the fs.createReadStream(). This code is not only cleaner, but now the data.txt file will be written to clients one chunk at a time immediately as they are received from the disk.

Using .pipe() has other benefits too, like handling backpressure automatically so that node won't buffer chunks into memory needlessly when the remote client is on a really slow or high-latency connection.

Want compression? There are streaming modules for that too!
```sh
var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(oppressor(req)).pipe(res);
});
server.listen(8000);
```

Now our file is compressed for browsers that support gzip or deflate! We can just let oppressor handle all that content-encoding stuff.

Once you learn the stream api, you can just snap together these streaming modules like lego bricks or garden hoses instead of having to remember how to push data through wonky non-streaming custom APIs.

Streams make programming in node simple, elegant, and composable.

## Basics

There are 5 kinds of streams: readable, writable, transform, duplex, and "classic".

## pipe
All the different types of streams use .pipe() to pair inputs with outputs.

.pipe() is just a function that takes a readable source stream src and hooks the output to a destination writable stream dst:

```
src.pipe(dst)
```
.pipe(dst) returns dst so that you can chain together multiple .pipe() calls together:
```
a.pipe(b).pipe(c).pipe(d)

OR

a.pipe(b);
b.pipe(c);
c.pipe(d);
```

This is very much like what you might do on the command-line to pipe programs together:
```
a | b | c | d
```

## readable streams
Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling .pipe():
```
readableStream.pipe(dst)
```

creating a readable stream
Let's make a readable stream!

```sh
var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);

$ node read0.js
beep boop
```

rs.push(null) tells the consumer that rs is done outputting data.

Note here that we pushed content to the readable stream rs before piping to process.stdout, but the complete message was still written.

This is because when you .push() to a readable stream, the chunks you push are buffered until a consumer is ready to read them.

However, it would be even better in many circumstances if we could avoid buffering data altogether and only generate the data when the consumer asks for it.

We can push chunks on-demand by defining a ._read function:

## writable streams

A writable stream is a stream you can .pipe() to but not from:

```
src.pipe(writableStream)
```
Just define a ._write(chunk, enc, next) function and then you can pipe a readable stream in:

```sh
var Writable = require('stream').Writable;
var ws = Writable();
ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);
```

The first argument, chunk is the data that is written by the producer.

The second argument enc is a string with the string encoding, but only when opts.decodeString is false and you've been written a string.

The third argument, next(err) is the callback that tells the consumer that they can write more data. You can optionally pass an error object err, which emits an 'error' event on the stream instance.

If the readable stream you're piping from writes strings, they will be converted into Buffers unless you create your writable stream with Writable({ decodeStrings: false }).

If the readable stream you're piping from writes objects, create your writable stream with Writable({ objectMode: true }).

To tell the destination writable stream that you're done writing, just call .end(). You can also give .end(data) some data to write before ending:

```sh
var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('beep ');

setTimeout(function () {
    ws.end('boop\n');
}, 1000);
```

If you care about high water marks and buffering, .write() returns false when there is more data than the opts.highWaterMark option passed to Writable() in the incoming buffer.

If you want to wait for the buffer to empty again, listen for a 'drain' event.

## transform

Transform streams are a certain type of duplex stream (both readable and writable). The distinction is that in Transform streams, the output is in some way calculated from the input.

You might also hear transform streams referred to as "through streams".

Through streams are simple readable/writable filters that transform input and produce output.

## duplex

Duplex streams are readable/writable and both ends of the stream engage in a two-way interaction, sending back and forth messages like a telephone. An rpc ( remote procedure call) exchange is a good example of a duplex stream. Any time you see something like:
```
a.pipe(b).pipe(a)
```


## License

MIT
