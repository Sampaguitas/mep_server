const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EndSchema = new Schema({
    lunar: String,
    name: String,
    pffTypes: [String],
});

module.exports = End = mongoose.model('ends', EndSchema);