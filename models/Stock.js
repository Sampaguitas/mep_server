const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const StockSchema = new Schema({
    _id: String,
    desc: {
        lunar: String,
        name: String,
        tags: {
            sizeOne: [String],
            sizeTwo: [String],
            sizeThree: [String],
            wallOne: [String],
            wallTwo: [String],
            type: [String],
            grade: [String],
            length: [String],
            end: [String]
        }
    },
});

module.exports= Stock = mongoose.model('stocks', StockSchema);