const express = require('express');
let router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const File = mongoose.model('File');

console.log(process.env.INIT_CWD)

router.post('/', (req, res) => {

    if (!req.files) {
        return res.status(500).send({msg: "file is not found"})
    }
    // accessing the file
    let response = [];
    let path = `${process.env.INIT_CWD}\\public\\${req.body.path}`;
    console.log(path)
    if (!fs.existsSync(path)) {
        fs.mkdir(path, {recursive: true}, (error) => {
            if (error) console.log(error)
        });
    }
    for (let filesKey in req.files) {
        let file = req.files[filesKey];
        file.mv(`${path}\\${file.name}`, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            let fileObj = new File();
            fileObj.fileName = file.name;
            fileObj.mediaURL = `${process.env.INIT_CWD}\\public\\media\\${req.body.bannerUrl}`;
            fileObj.type = req.body.path.split('\\')[0];
            fileObj.path = path + '\\' + file.name;
            insertFile(fileObj);
            response.push({name: file.name, path: `/${file.name}`});
        });
    }

    return res.status(200).send(response);
});

function insertFile(file) {
    file.save((err, doc) => {
        if (!err) {
            console.log("Document Inserted" + doc._id);
        } else {
            console.log("Error " + err);
        }
    })
}

module.exports = router;
