const express = require('express');
const router = express.Router();

const Idea = require('../models/ideas');
const Game = require('../models/games');
const AI = require('../models/ai');
const Analytics = require('../models/analytics');
const Book = require('../models/books');
const Dev = require('../models/dev');
const IOT = require('../models/iot');
const Touchbar = require('../models/touchbar');
const VR = require('../models/vr');

//Retrieving
router.get('/ideas', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Idea.find(function(err, ideas){
        res.json(ideas);
    });

});
//Save
router.post('/idea', (req, res, next)=>{
    // res.send("Retrieving ideas");
    let newIdea = new Idea({
        idea_category: req.body.idea_category,
        idea_name: req.body.idea_name,
        idea_content: req.body.idea_content,
        idea_img: req.body.idea_img
    });
    newIdea.save((err, idea)=>{
        if(err){
            res.json({msg:'failed to add idea'});
        }else{
            res.json({msg:'Idea saved!'});
        }
    });
});
//Delete
router.delete('/idea/:id', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Idea.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete idea'});
        }else{
            res.json({msg:'Idea deleted!'});
        }
    });
});

//Retrieving
router.get('/games', (req, res, next)=>{
    // res.send("Retrieving games");
    Game.find(function(err, games){
        res.json(games);
    });

});
//Save
router.post('/game', (req, res, next)=>{
    // res.send("Retrieving games");
    let newGame = new Game({
        game_category: req.body.game_category,
        game_title: req.body.game_title,
        game_content: req.body.game_content,
        game_img: req.body.game_img
    });
    newGame.save((err, game)=>{
        if(err){
            res.json({msg:'failed to add game'});
        }else{
            res.json({msg:'game saved!'});
        }
    });
});
//Delete
router.delete('/game/:id', (req, res, next)=>{
    // res.send("Retrieving game");
    Game.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete game'});
        }else{
            res.json({msg:'Game deleted!'});
        }
    });
});


//Retrieving
router.get('/ais', (req, res, next)=>{
    // res.send("Retrieving ais");
    Idea.find(function(err, ais){
        res.json(ais);
    });

});
//Save
router.post('/ai', (req, res, next)=>{
    // res.send("Retrieving ais");
    let newAi = new AI({
        ai_category: req.body.ai_category,
        ai_name: req.body.ai_name,
        ai_content: req.body.ai_content,
        ai_img: req.body.ai_img
    });
    newAi.save((err, ai)=>{
        if(err){
            res.json({msg:'failed to add ai'});
        }else{
            res.json({msg:'AI saved!'});
        }
    });
});
//Delete
router.delete('/ai/:id', (req, res, next)=>{
    // res.send("Retrieving ais");
    AI.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete ai'});
        }else{
            res.json({msg:'AI deleted!'});
        }
    });
});

//Retrieving
router.get('/analytics', (req, res, next)=>{
    // res.send("Retrieving analytics");
    Idea.find(function(err, analytics){
        res.json(analytics);
    });

});
//Save
router.post('/analytic', (req, res, next)=>{
    // res.send("Retrieving analytics");
    let newAnalytic = new Analytics({
        analytics_category: req.body.analytics_category,
        analytics_name: req.body.analytics_name,
        analytics_content: req.body.analytics_content,
        analytics_img: req.body.analytics_img
    });
    newAnalytic.save((err, analytics)=>{
        if(err){
            res.json({msg:'failed to add analytics'});
        }else{
            res.json({msg:'analytics saved!'});
        }
    });
});
//Delete
router.delete('/analytic/:id', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Analytics.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete analytics'});
        }else{
            res.json({msg:'Analytics deleted!'});
        }
    });
});
//Retrieving
router.get('/books', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Book.find(function(err, books){
        res.json(books);
    });

});
//Save
router.post('/book', (req, res, next)=>{
    // res.send("Retrieving books");
    let newBook = new Book({
        book_category: req.body.book_category,
        book_name: req.body.book_name,
        book_content: req.body.book_content,
        book_img: req.body.book_img
    });
    newBook.save((err, idea)=>{
        if(err){
            res.json({msg:'failed to add book'});
        }else{
            res.json({msg:'Books saved!'});
        }
    });
});
//Delete
router.delete('/book/:id', (req, res, next)=>{
    // res.send("Retrieving books");
    Book.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete book'});
        }else{
            res.json({msg:'Books deleted!'});
        }
    });
});

//Retrieving
router.get('/devs', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Dev.find(function(err, devs){
        res.json(devs);
    });

});
//Save
router.post('/dev', (req, res, next)=>{
    // res.send("Retrieving ideas");
    let newDev = new Dev({
        dev_category: req.body.dev_category,
        dev_name: req.body.dev_name,
        dev_content: req.body.dev_content,
        dev_img: req.body.dev_img
    });
    newDev.save((err, dev)=>{
        if(err){
            res.json({msg:'failed to add dev'});
        }else{
            res.json({msg:'Dev saved!'});
        }
    });
});
//Delete
router.delete('/dev/:id', (req, res, next)=>{
    // res.send("Retrieving devs");
    Dev.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete dev'});
        }else{
            res.json({msg:'dev deleted!'});
        }
    });
});

//Retrieving
router.get('/iots', (req, res, next)=>{
    // res.send("Retrieving ideas");
    IOT.find(function(err, iots){
        res.json(iots);
    });

});
//Save
router.post('/iot', (req, res, next)=>{
    // res.send("Retrieving ideas");
    let newIOT = new IOT({
        iot_category: req.body.iot_category,
        iot_name: req.body.iot_name,
        iot_content: req.body.iot_content,
        iot_img: req.body.iot_img
    });
    newIOT.save((err, iot)=>{
        if(err){
            res.json({msg:'failed to add iot'});
        }else{
            res.json({msg:'Iot saved!'});
        }
    });
});
//Delete
router.delete('/iot/:id', (req, res, next)=>{
    // res.send("Retrieving iots");
    IOT.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete iot'});
        }else{
            res.json({msg:'iot deleted!'});
        }
    });
});

//Retrieving
router.get('/touchbars', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Touchbar.find(function(err, touchbars){
        res.json(touchbars);
    });

});
//Save
router.post('/touchbar', (req, res, next)=>{
    // res.send("Retrieving ideas");
    let newTouchbar = new Touchbar({
        touchbar_category: req.body.touchbar_category,
        touchbar_name: req.body.touchbar_name,
        touchbar_content: req.body.touchbar_content,
        touchbar_img: req.body.touchbar_img
    });
    newTouchbar.save((err, touchbar)=>{
        if(err){
            res.json({msg:'failed to add touchbar'});
        }else{
            res.json({msg:'touchbar saved!'});
        }
    });
});
//Delete
router.delete('/touchbar/:id', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Touchbar.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete Touchbar'});
        }else{
            res.json({msg:'Touchbar deleted!'});
        }
    });
});

//Retrieving
router.get('/vrs', (req, res, next)=>{
    // res.send("Retrieving ideas");
    Idea.find(function(err, vrs){
        res.json(vrs);
    });

});
//Save
router.post('/vr', (req, res, next)=>{
    // res.send("Retrieving ideas");
    let newVR = new VR({
        vr_category: req.body.vr_category,
        vr_name: req.body.vr_name,
        vr_content: req.body.vr_content,
        vr_img: req.body.vr_img
    });
    newVR.save((err, vr)=>{
        if(err){
            res.json({msg:'failed to add vr'});
        }else{
            res.json({msg:'vr saved!'});
        }
    });
});
//Delete
router.delete('/vr/:id', (req, res, next)=>{
    // res.send("Retrieving vrs");
    VR.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:'failed to delete vr'});
        }else{
            res.json({msg:'vr deleted!'});
        }
    });
});

module.exports = router;
