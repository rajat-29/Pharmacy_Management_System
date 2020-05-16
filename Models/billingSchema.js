var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    address: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    phoneno: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    zipcode: {
        type: String,
        trim: true,
    },
})

module.exports = mongoose.model('billings', billingSchema);