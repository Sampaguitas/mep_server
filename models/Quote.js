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
    qty: {
        type: Number,
        required: true
    },
    desc: {
        sizeOne: {
            nps: {
                type: String,
            },
            dn: {
                type: String,
            },
            mm: {
                type: Number,
            },
            in: {
                type: Number,
            },
            lunar: {
                type: String,
            }
        },
        sizeTwo: {
            nps: {
                type: String,
            },
            dn: {
                type: String,
            },
            mm: {
                type: Number,
            },
            in: {
                type: Number,
            },
            lunar: {
                type: String,
            }
        },
        sizeThree: {
            nps: {
                type: String,
            },
            dn: {
                type: String,
            },
            mm: {
                type: Number,
            },
            in: {
                type: Number,
            },
            lunar: {
                type: String,
            } 
        },
        wallOne: {
            mm: {
                type: Number,
            },
            in: {
                type: Number,
            },
            idt: {
                type: String,
            },
            sch: {
                type: String,
            },
            schS: {
                type: String,
            },
            lunar: {
                type: String,
            } 
        },
        wallTwo: {
            mm: {
                type: Number,
            },
            in: {
                type: Number,
            },
            idt: {
                type: String,
            },
            sch: {
                type: String,
            },
            schS: {
                type: String,
            },
            lunar: {
                type: String,
            }
        },
        type: {
            name: {
                type: String,
            },
            tags: [
                String
            ],
            pffType: {
                type: String,
            },
            lunar: {
                type: String,
            }
        },
        grade: {
            name: {
                type: String,
            },
            tags: [
                String
            ],
            steelType: {
                type: String,
            },
            lunar: {
                type: String,
            }
        },
        end: {
            name: {
                type: String,
            },
            lunar: {
                type: String
            }
        }

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
