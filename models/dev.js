const mongoose = require('mongoose');

const DevSchema = mongoose.Schema({
    dev_category:{type: String},
    dev_title:{type: String, required:true},
    dev_content:{type: String},
    dev_img:{type: String}
});

const Dev = module.exports = mongoose.model('Dev', DevSchema);