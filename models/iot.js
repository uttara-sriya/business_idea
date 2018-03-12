const mongoose = require('mongoose');

const IOTSchema = mongoose.Schema({
    iot_category:{type: String},
    iot_title:{type: String, required:true},
    iot_content:{type: String},
    iot_img:{type: String}
});

const IOT = module.exports = mongoose.model('iot', IOTSchema);