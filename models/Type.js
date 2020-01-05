const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    lunar: String,
    name: String,
    tags: [String],
    pffType: String,
    specs: [String]
});

module.exports = Type = mongoose.model('types', TypeSchema);