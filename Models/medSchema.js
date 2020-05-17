var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('medicines', medSchema);