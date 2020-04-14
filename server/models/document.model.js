const mongoose = require('mongoose');

let documentScheme = new mongoose.Schema({
    date: {
        type: String,
        required: 'The Created date is required'
    },
    name: {
        type: String,
        required: 'Document name is required'
    },
    type: {
        type: String,
        required: 'The file Type is required'
    },
    size: {
        type: Number,
        required: 'The Size is required'
    },
    files: []
});


mongoose.model('Document', documentScheme);
