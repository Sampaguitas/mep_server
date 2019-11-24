const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
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
    sup_name: {
        type: String,
        required: true           
    },
    lead_time: {
        type: Number,
        required: true        
    },
    incoterm: {
        type: String,
        required: true          
    },
    del_point: {
        type: String,
        required: true            
    },
    sup_ref: {
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

module.exports = mongoose.model('items', ItemSchema);
