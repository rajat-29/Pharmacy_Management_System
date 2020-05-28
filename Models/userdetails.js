var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var userdetailsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    address: {
        type: String,
        trim: true,
        default: ""
    },
    state: {
        type: String,
        trim: true,
        default: ""
    },
    phoneno: {
        type: String,
        trim: true,
        default: ""
    },
    city: {
        type: String,
        trim: true,
        default: ""
    },
    zipcode: {
        type: String,
        trim: true,
        default: ""
    },
})

module.exports = mongoose.model('userdetails', userdetailsSchema);