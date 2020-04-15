require('./models/db');
const express = require('express');
const fileUpload = require('express-fileupload');
var config = require('./config');
const cors = require('cors');
const fileController = require('./controllers/fileController');
const uploadController = require('./controllers/uploadController');

const app = express();
// middle ware
app.use(express.static(config.FileHostPath));
app.use(cors());

app.use(fileUpload());

app.use('/files', fileController);
app.use('/upload', uploadController); // file upload api

app.listen(8099, () => {
    console.log('server is running at port 8099');
});
