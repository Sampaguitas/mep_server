const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
    lunar: String,
    nps: String,
    dn: String,
    mm: Number,
    in: Number,
});

//size: mongoose.SchemaTypes.ObjectId

module.exports = Size = mongoose.model('sizes', SizeSchema);