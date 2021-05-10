const http = require('http');
const map = require('through2-map');

if (process.argv.length !== 3) {
    console.log('Please provide a port number ', process.argv.length);
    process.exit(1)
}

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('must be POST\n');
    }

    req.pipe(map(chunk => {
        let text = chunk.toString()
        text = text.replace(/happy/gi, ':)');
        text = text.replace(/sad/gi, ':(');
        text = text.replace(/meh/gi, ':|');
        text = text.replace(/shrug/gi, '¯\\_(ツ)_/¯');

        return text
    })).pipe(res);

    req.on('error', function(err) {
        res.end(err)
    })
});

server.listen(port);
