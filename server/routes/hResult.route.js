const hResult = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

hResult.post('/hResult', function(req, res){
  QuizSchema.find({hostedBy:req.body.hostedBy}, function(err, reply){
    res.send(JSON.stringify(reply));
  });
});

module.exports = hResult;
