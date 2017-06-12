const events = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

//Retrieving the events from quiz data in db
events.get('/events', function(req, res){
  var a = {
    eventsArr : []
  };
  QuizSchema.find({}, function(err, reply){
    if (err) {
      // console.log('Error in Retrieving the events in {events.route.js} ',err);
    } else {
      // console.log('Events retrieved successfully in {events.route.js} ',reply);
    }
    a = {
      eventsArr : eventSegregation(reply)
    }
    res.send(a);
  });
});

// This function segregate the object of needed values ---------->
function eventSegregation(val){
  var current = new Date();
  var eArr = [];
  val.map(function(item, i){
    var a=new Date(item.date);
    date = a.getDate();
    month=a.getMonth();
    year=a.getFullYear();
    // Quiz Start Time
    var st=new Date(item.startTime);
    st.setDate(date);
    st.setMonth(month);
    st.setFullYear(year);
    // Quiz End Time
    var et = new Date(item.endTime);
    et.setDate(date);
    et.setMonth(month);
    et.setFullYear(year);
    // Date validation variables
    var m = st.getMonth()+1;
    var stt = st.getDate()+'/'+m+'/'+st.getFullYear();
    var mmm = current.getMonth()+1;
    var currentDate = current.getDate()+'/'+mmm+'/'+current.getFullYear()

    if(stt>=currentDate){
      obj = {
        st : st,
        et : et,
        date : item.date,
        topic : item.topic,
        subtopic : item.subtopic,
        topicImgURL : item.topicImgURL
      };
      eArr.push(obj);
    }
  })
  return eArr;
}

module.exports = events;
