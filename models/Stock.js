const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const StockSchema = new Schema({
    "artNr": String,
    "location": String, 
    "description": {
        "lunar": String,
        "name": String,
        "tags": {
            "sizeOne": [String],
            "sizeTwo": [String],
            "sizeThree": [String],
            "wallOne": [String],
            "wallTwo": [String],
            "type": [String],
            "grade": [String],
            "length": [String],
            "end": [String]
        }
    },
    "price": {
        "metric": {
            "value": Number,
            "toEur": Number,
            "uom": String,
            
        },
        "imperial": {
            "value": Number,
            "toEur": Number,
            "uom": String
        },
        "currency": String
    },
});

module.exports= Stock = mongoose.model('stocks', StockSchema);