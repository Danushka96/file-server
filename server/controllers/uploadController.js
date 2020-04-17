const express = require('express');
let router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const Document = mongoose.model('Document');
const configs = require('../config');
const path = require('path');

router.post('/', (req, res) => {
    req.pipe(req.busboy); // Pipe it trough busboy

    let fieldsList = {};
    let fileList = [];
    let id = makeid(16);

    let uploadpath = path.join(configs.FileHostPath, id);
    fs.mkdir(uploadpath, {recursive: true}, (error) => {
        if (error) console.log(error);
    });

    req.busboy
        .on('file', (fieldname, file, filename) => {
            fileList.push(filename);
            console.log(`Upload of '${filename}' started`);
            // Create a write stream of the new file
            const fstream = fs.createWriteStream(path.join(uploadpath, filename));
            // Pipe it trough
            file.pipe(fstream);
            // On finish of the upload
            fstream.on('close', () => {
                console.log(`Upload of '${filename}' finished`);
            });
        })
        .on('field', (field, val) => {
            fieldsList[field] = val;
        })
        .on('finish', async function() {
            let doc = new Document();
            doc.size = req.headers["content-length"];
            doc.type = fieldsList.path;
            doc.name = fieldsList.displayName;
            doc.files = fileList;
            doc.date = getCurrentDate();
            doc.folderId = id;
            console.log('finished');
            await doc.save((err, doc) => {
                if (err) console.error(err);
                else console.log('doc saved with id' + doc._id);
            });
            res.send({
                code: 200,
                message: "upload successful"
            })
        });
});

function getCurrentDate() {
    let today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}

function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = router;
