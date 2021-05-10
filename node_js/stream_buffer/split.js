const split = require('split');
const fs = require('fs')
const through = require('through2')

fs.createReadStream('data.txt')
    .pipe(split())
    .pipe(through(function(chunk, _, next) {
        this.push(`---${chunk.toString()}---\n`)
        next()
    }))
    .pipe(process.stdout)
