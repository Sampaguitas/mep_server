const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    // _id: {
    //     type: mongoose.SchemaTypes.ObjectId,
    // },    
    opco: {
        type: String,
        required: true
    },
    opcoRef: {
        type: String,
        required: true
    },
    line: {
        type: Number,
        required: true
    },
    lunar: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true        
    },
    supName: {
        type: String,
        required: true           
    },
    leadTime: {
        type: Number,
        required: true        
    },
    incoterm: {
        type: String,
        required: true          
    },
    delPoint: {
        type: String,
        required: true            
    },
    supRef: {
        type: String,
        required: true          
    },
    date: {
        type: Date,
        required: true            
    },
    validity: {
        type: Number,
        required: true          
    }
});

module.exports = mongoose.model('quotes', QuoteSchema);
