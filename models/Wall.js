const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WallSchema = new Schema({
    lunar: String,
    idt: String,
    sch: String,
    schS: String,
    mm: Number,
    in: Number,
    pffTypes: [String],
    sizeId: Schema.Types.ObjectId,
    
});

//sizeId: mongoose.SchemaTypes.ObjectId

module.exports = Wall = mongoose.model('walls', WallSchema);