const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RateSchema = new Schema({
    _id: String,
    name: String,
    unitPerUsd: Number,
    usdPerUnit: Number,
    updatedAt: Date
});
// , {timestamps: true});

module.exports = Rate = mongoose.model('rates', RateSchema);