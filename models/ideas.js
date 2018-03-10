const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({
    idea_category:{type: String},
    idea_name:{type: String, required:true},
    idea_content:{type: String},
    idea_img:{type: String}
});

const Idea = module.exports = mongoose.model('Idea', IdeaSchema);