const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const File = mongoose.model('File');

router.get('/', (req, res) => {
    File.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in retrieving the files ' + err)
        }
    })
});

router.get("/:id", (req, res) => {
    File.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error on retrieving the document ' + err);
        }
    })
});

router.delete('/delete/:id', (req, res) => {
    File.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error on deleting the document ' + err)
        }
    })
});

module.exports = router;
