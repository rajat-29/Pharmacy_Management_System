var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    medicineType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "medicines"
    },
    no_of_stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('stocks', stockSchema);