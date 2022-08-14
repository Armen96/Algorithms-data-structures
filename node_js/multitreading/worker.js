const { workerData, parentPort } = require('worker_threads')

console.log(' worker js', workerData);
parentPort.on('message', (data) => {
    console.log(' Listener data', data);
})

setTimeout(() => {
    parentPort.postMessage('From child to parent');
}, 2000)

