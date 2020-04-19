require('./models/db');
const express = require('express');
let config = require('./config');
const cors = require('cors');
const fs = require('fs-extra');
const fileController = require('./controllers/fileController');
const uploadController = require('./controllers/uploadController');
const busyBox = require('connect-busboy');

const app = express();
// middle ware
fs.ensureDir(config.FileHostPath);
app.use(express.static(config.FileHostPath));
app.use(cors());
app.use(busyBox({
    highWaterMark: 2 * 1024 * 1024 // 2 MB
}));

app.use('/files', fileController);
app.use('/upload', uploadController); // file upload api

app.listen(8099, () => {
    console.log('server is running at port 8099');
});
