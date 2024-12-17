const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {type: String},
    reg: {type: String}
});

const list = mongoose.model('list', dataSchema);
module.exports = list;