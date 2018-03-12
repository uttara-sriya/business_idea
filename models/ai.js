const mongoose = require('mongoose');

const AISchema = mongoose.Schema({
    ai_category:{type: String},
    ai_title:{type: String, required:true},
    ai_content:{type: String},
    ai_img:{type: String}
});

const AI = module.exports = mongoose.model('AI', AISchema);