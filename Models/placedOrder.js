var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placedOrderSchema = new Schema({
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
    address: {
        type:  String, 
        required: true
    },
    items: [Object],
})

module.exports = mongoose.model('placedorders', placedOrderSchema);