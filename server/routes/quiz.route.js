const quiz = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

quiz.post('/quiz', function(req, res){
  QuizSchema.find({topic:req.body.topic, subtopic:req.body.subtopic, date:req.body.date}, function(err, reply){
    var quizData = {
      que : reply
    };
    res.send(quizData);
  });
});

module.exports = quiz;
