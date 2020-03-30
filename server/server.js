const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');

const app = express();

// middle ware
app.use(express.static('public'));
app.use(cors());
app.use(fileUpload());

// file upload api
app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    let response = [];
    let path = `${__dirname}\\public\\${req.body.path}`;
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
    for (let filesKey in req.files) {
        let file = req.files[filesKey];
        file.mv(`${path}/${file.name}`, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).send({ msg: "Error occured" });
            }
            // returing the response with file path and name
            response.push({name: file.name, path: `/${file.name}`});
        });
    }
    return res.send(response);
});


app.listen(4500, () => {
    console.log('server is running at port 4500');
});
