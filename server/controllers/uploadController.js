const express = require('express');
let router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const Document = mongoose.model('Document');

console.log(process.env.INIT_CWD)

router.post('/', (req, res) => {

    if (!req.files) {
        return res.status(500).send({msg: "file is not found"})
    }
    // accessing the file
    let response = [];
    let documentEarly = new Document();
    documentEarly.date = getCurrentDate();
    documentEarly.size = Object.keys(req.files)
        .map(key => Math.round(req.files[key].size / 1024))
        .reduce((a, b) => a + b, 0);
    documentEarly.type = req.body.path;
    documentEarly.name = req.body.displayName;
    documentEarly.files = Object.keys(req.files).map(key => req.files[key].name);
    documentEarly.save((err, doc) => {
        if (!err) {
            let document = doc;
            let path = `${process.env.INIT_CWD}\\public\\${req.body.path}\\${document._id}`;
            fs.mkdir(path, {recursive: true}, (error) => {
                if (error) console.log(error)
            });
            for (let filesKey in req.files) {
                let file = req.files[filesKey];
                file.mv(`${path}\\${file.name}`, function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    response.push({name: file.name, path: `/${file.name}`});
                });
            }
            return res.status(200).send(response);
        } else {
            console.log("Error " + err);
        }
    });
});

function getCurrentDate() {
    let today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}

module.exports = router;
