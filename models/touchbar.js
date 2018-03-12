const mongoose = require('mongoose');

const TouchbarSchema = mongoose.Schema({
    touchbar_category:{type: String},
    touchbar_title:{type: String, required:true},
    touchbar_content:{type: String},
    touchbar_img:{type: String}
});

const Touchbar = module.exports = mongoose.model('Touchbar', TouchbarSchema);