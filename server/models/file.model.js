const mongoose = require('mongoose');

let fileScheme = new mongoose.Schema({
    fileName: {
        type: String,
        required: 'This field is required.'
    },
    path: {
        type: String,
        required: 'This field is required.'
    },
    mediaURL: {
        type: String,
        required: 'This field is required.'
    },
    type: {
        type: String,
        required: 'This field is required.'
    }
});


mongoose.model('File', fileScheme);
