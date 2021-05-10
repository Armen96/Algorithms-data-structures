const Readable = require('stream').Readable;

const rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

// Detect end of file (EOF) error
// rs.push('ASD'); // stream.push() after EOF
rs.pipe(process.stdout);

const rs2 = new Readable;
let c = 97;
rs2._read = function () {
    rs2.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs2.push(null);
};

rs2.pipe(process.stdout);
