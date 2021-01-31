const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const Stock_HANA_Schema = new Schema({
    "_id": String,
    "description": {
        "lunar": String,
        "name": String,
        "parameters": {
            "sizeOne": {
                "name": String,
                "tags": [String]
            },
            "sizeTwo": {
                "name": String,
                "tags": [String]
            },
            "sizeThree": {
                "name": String,
                "tags": [String]
            },
            "wallOne": {
                "name": String,
                "tags": [String]
            },
            "wallTwo": {
                "name": String,
                "tags": [String]
            },
            "type": {
                "name": String,
                "tags": [String]
            },
            "grade": {
                "name": String,
                "tags": [String]
            },
            "length": {
                "name": String,
                "tags": [String]
            },
            "end": {
                "name": String,
                "tags": [String]
            }
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

module.exports= Stock_HANA = mongoose.model('stocks_hanas', Stock_HANA_Schema);