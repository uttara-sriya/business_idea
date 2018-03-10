const express = require('express');
const router = express.Router();

const Idea = require('../models/ideas');

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

module.exports = router;
