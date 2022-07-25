const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    titre : { type: String, required : true},
    category : { type: String, required : true},
    author : { type: String, required : true},
    content : { type: String},
});

module.exports = mongoose.model('Note', noteSchema)