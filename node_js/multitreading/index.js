const { Worker } = require('worker_threads')

const data = {
    source_thread: 'main',
    target: 'worker',
    status: true
}

console.log('Start main thread');
const worker = new Worker('./worker.js', {workerData: data});
console.log('End main thread');


worker.postMessage('hello world');

worker.on('message', (data) => {
    console.log(' Child data', data);
})
