const launchQuiz = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js')
    , GoogleImages = require('google-images')
    , neodb = require('./../connections/db.neo4j.js')
    , client = new GoogleImages('006703518498526470931:fbn-v7xsm2g', 'AIzaSyCtP850ZXwm0vrHeaQzqd6wq6uuxw1qV8s');

//Post the quiz into MongoDB ---------->
launchQuiz.post('/saveLaunchQuiz', function(req, res){
  //Image Search in Google ---------->
  client.search(req.body.topic+' logo')
    .then(function(images){
     var link=images[0].url;
     var topic = req.body.topic
       , subtopic = req.body.subtopic
       , hostedBy = req.body.hostedBy
       , startDate = req.body.startDate
       , startTime = req.body.startTime
       , endTime = req.body.endTime
       , topicImgURL = link
       , questions = req.body.questions
       , d = ''
       , m = ''
       , y = '';

     //Shuffling the options array ---------->
     questions.map(function(item,i){
       item.options = shuffle(item.options);
     });

     //setting the chosen date to the start and end time ---------->
     var a = new Date(startDate);
     d = a.getDate();
     m = a.getMonth();
     y = a.getFullYear();
     var st = new Date(startTime);
     st.setDate(d);
     st.setMonth(m);
     st.setFullYear(y);
     var et = new Date(endTime);
     et.setDate(d);
     et.setMonth(m);
     et.setFullYear(y);

     //Query to save launched quiz ---------->
     QuizSchema.update({topic:topic,subtopic:subtopic,hostedBy:hostedBy,date:startDate},
                       {$set:{topic:topic,
                               subtopic:subtopic,
                               hostedBy:hostedBy,
                               topicImgURL:topicImgURL,
                               date:startDate,
                               startTime:st,
                               endTime:et,
                               questions:questions}},
                       {upsert:true},
     function(err, reply){
       if (err) {
         console.log('Oops! Error in saving quiz to DB', err);
       } else {
         console.log('Quiz saved to DB', reply);
         //fetching data from neo4j
         neodb.cypher({
           query:"match (id:users {userId:{adid}}) return *",
           params:{
             adid:req.body.hostedBy,
           }
         },function(err,result){
             if(err)
               console.log(err);
             else{
               console.log('----rank---',result[0].id.properties.rank);
               neodb.cypher({
                 query:"match (id:users {userId:{adid}}) set id.hostedQuiz = {hQuiz} return id",
                 params:{
                   adid:req.body.hostedBy,
                   hQuiz:parseInt(result[0].id.properties.rank) + 1,
                 }
               },function(err,result){
                 if(err)
                    console.log('error in updating hQuiz',err);
                  else {
                    neodb.cypher({
                      query:"match (node1:users {userId:{adid}}) return node1",

                      params:{
                        adid:req.body.hostedBy,
                        topic:req.body.topic,
                        subtopic:req.body.subtopic,
                      }
                    },function(err,result){
                        if(err)
                          console.log('error in creating relationship' , err);
                        else {
                          console.log(result);
                          res.send('success');
                        }
                    })
                  }
               })
                  }
         })
       }
     });
  });
});

// function to shuffle the option order ---------->
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


module.exports = launchQuiz;
