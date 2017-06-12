const loadTopics = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

loadTopics.get('/loadTopics',(req,res)=>{
  var a = {
    topics : []
  }
  QuizSchema.find({}, function(err, reply){
    if (err) {
      // console.log('Error in Retrieving the events in {events.route.js} ',err);
    } else {
      // console.log('Events retrieved successfully in {events.route.js} ',reply);
    }
    a = {
      topics : eventSegregation(reply)
    }
    res.send(a);
  });
})

// This function segregate the object of needed values ---------->
function eventSegregation(val){
  var current = new Date();
  var eArr = [];
  val.map(function(item, i){
    if(item.date>=current){
      obj = {
        topic : item.topic,
        topicImgURL : item.topicImgURL,
        subtopic : item.subtopic
      };
      eArr.push(obj);
    }
  })
  return eArr; //returns array
}

module.exports = loadTopics;
