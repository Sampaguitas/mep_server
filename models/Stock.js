const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");

const StockSchema = new Schema({
    "artNr": {
        type: String, 
        required: true 
    },
    "opco": { 
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
    }
});

module.exports= Stock = mongoose.model("stocks", StockSchema);