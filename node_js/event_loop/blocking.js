const fs = require('fs');

const readFile = fs.readFileSync('./file.txt');
console.log('Blocking sync') // will run after console.log
console.log(readFile);


fs.readFile('./file.txt', (err, data) => {
    if (err) { throw err; }

    console.log(data)
})
console.log('Non-Blocking async') // will run before console.log
