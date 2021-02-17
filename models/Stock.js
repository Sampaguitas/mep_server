const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");

const OpcoSchema = new Schema({
    "name": { 
        type: String, 
        required: true 
    },
    "qty": Number,
    "price": {
        "gip": Number,
        "rv": Number,
    },
    "purchase": {
        "supplier": String,
        "qty": Number,
        "firstInStock": Number,
        "deliveryDate": Date
    },
    "supplier": {
        "names": [String],
        "qtys": [String]
    },
    "lastUpdate": Date
});

const StockSchema = new Schema({
    "artNr": { 
        type: String, 
        required: true 
    },
    "description": String,
    "vlunar": String,
    "weight": Number,
    "uom": String,
    "opcos": [OpcoSchema],
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
});

module.exports= Stock = mongoose.model("stocks", StockSchema);