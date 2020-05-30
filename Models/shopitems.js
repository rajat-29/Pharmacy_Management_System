var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopitemsSchema = new Schema({
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
        min: 0
    },
    price: {
        type: Number,
        required: true,
    },
    boughtfrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model('shopitems', shopitemsSchema);