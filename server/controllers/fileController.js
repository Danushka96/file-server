const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Document = mongoose.model('Document');

router.get('/', (req, res) => {
    Document.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in retrieving the files ' + err)
        }
    })
});

router.get("/:id", (req, res) => {
    Document.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error on retrieving the document ' + err);
        }
    })
});

router.delete('/delete/:id', (req, res) => {
    Document.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error on deleting the document ' + err)
        }
    })
});

module.exports = router;
