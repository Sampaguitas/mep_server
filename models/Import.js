const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const ImportSchema = new Schema({
    "user": String,
    "import_type": String,
    "location": String, 
    "status": {
        type: Number,
        default: 0
    },
    "message": String
},
{
    timestamps: true 
});

module.exports= Import = mongoose.model('imports', ImportSchema);