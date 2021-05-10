const { promisify } = require('util');
const sleep = promisify(setTimeout);

async function * generator() {
    yield 'hello';
    await sleep(100);

    yield ' ';
    await sleep(100)

    yield 'world';
}

async function consume(iterator) {
    let string = '';

    for await (let chunk of iterator) {
        string += chunk;
    }

    return string;
}

consume(generator()).then((data) => {
    console.log(data);
})
