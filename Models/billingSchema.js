var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billingSchema = new Schema({
    custname: {
        type:  String, 
        required: true
    },
    docname: {
        type:  String, 
        required: true
    },
    contact: {
        type:  String, 
        required: true
    },
    items: [Object],
    total: {
        type: Number, 
        required: true
    },
})

module.exports = mongoose.model('billings', billingSchema);