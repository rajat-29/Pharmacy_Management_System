var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billing = require("./billingSchema")

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    DOB: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    billing_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "billings"
    }
})

module.exports = mongoose.model('users', userSchema);