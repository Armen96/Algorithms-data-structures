const express = require('express');
const { Worker } = require('worker_threads');
const app = express();
const port = 3000;

app.get('/non-blocking', (req, res) => {
    res.status(200).send('Non-blocking');
});


app.get('/blocking', async (req, res) => {
    const worker = new Worker('./worker2.js');

    worker.on('message', (data) => {
        res.status(200).send(data);
    });

    worker.on('error', (error) => {
        console.log(' Error', error);
        res.status(500).send('Error');
    });

    // res.status(200).send('Blocking ' + counter);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
