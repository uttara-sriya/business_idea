const mongoose = require('mongoose');

const VRSchema = mongoose.Schema({
    vr_category:{type: String},
    vr_title:{type: String, required:true},
    vr_content:{type: String},
    vr_img:{type: String}
});

const VR = module.exports = mongoose.model('VR', VRSchema);