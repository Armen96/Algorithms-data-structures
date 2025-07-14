const express = require('express');
const app = express();
const cors = require('cors')
const fs = require("fs");

app.use(cors())


// /image GET and HEAD endpoints

app.get('/image', (req, res) => {
  const headers = req.headers;

  if (headers && headers['content-range']) {
    const startEnd = headers['content-range'].replace('bytes=', '').split('-');
    let [start, end] = startEnd;

     start = parseInt(start, 10);
     end = parseInt(end, 10);

    const file = 'image.png';
    const fileStats = fs.statSync(file);
    const fileSize = fileStats.size;

    const chunkSize = (end || fileSize) - start;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${start + chunkSize - 1}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'image/png'
    });

    const fileStream = fs.createReadStream(file, { start, end });
    fileStream.pipe(res);
  } else {
    res.status(200).json({ message: 'No range provided' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
