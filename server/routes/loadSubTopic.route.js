const loadSubTopic = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

loadSubTopic.post('/loadSubTopic', function(req, res){
  var a = {
    subTopicDees : []
  };
  QuizSchema.find({topic:req.body.topic}, function(err, reply){
    a = {
      subTopicDees : eventSegregation(reply)
    };
    res.send(a);
  });
});

// This function segregate the object of needed values ---------->
function eventSegregation(val){
  var current = new Date();
  var eArr = [];
  val.map(function(item, i){
    if(item.date>=current){
      obj = {
        topic : item.topic,
        topicImgURL : item.topicImgURL,
        subtopic : item.subtopic,
        date : item.date
      };
      eArr.push(obj);
    }
  })
  return eArr; //returns array
}

module.exports = loadSubTopic;
