// readable process.stdin is directly echoed back to writable process.stdout

process.stdin.pipe(process.stdout);
