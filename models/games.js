const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    game_category:{type: String},
    game_title:{type: String, required:true},
    game_content:{type: String},
    game_img:{type: String}
});

const Game = module.exports = mongoose.model('Game', GameSchema);