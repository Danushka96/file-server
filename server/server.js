require('./models/db');
const express = require('express');
const fileUpload = require('express-fileupload');

const cors = require('cors');
const fileController = require('./controllers/fileController');
const uploadController = require('./controllers/uploadController');
const mediaController = require('./controllers/mediaController');

const app = express();
// middle ware
app.use(express.static('public'));
app.use(cors());

app.use(fileUpload());

app.use('/files', fileController);
app.use('/upload', uploadController); // file upload api
app.use('/media', mediaController);

app.listen(8099, () => {
    console.log('server is running at port 8099');
});
