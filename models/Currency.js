const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    _id: String,
    name: String,
    unitPerUsd: Number,
    usdPerUnit: Number,
    updatedAt: Date
});
// , {timestamps: true});

module.exports = Currency = mongoose.model('currencies', CurrencySchema);