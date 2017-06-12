//import Statements
const expressInstance = require('express')
    , myQuizServer = expressInstance()
    , bodyParser = require('body-parser')
    , MonDB = require('./connections/db.mongo.js');

//routers --->
const authenticate = require('./routes/authentication.js')
    , launchQuiz = require('./routes/launchQuiz.route.js')
    , events = require('./routes/events.route.js')
    , loadTopics = require('./routes/loadTopics.route.js')
    , loadSubTopic = require('./routes/loadSubTopic.route.js')
    , quiz = require('./routes/quiz.route.js')
    , validate = require('./routes/validateQuiz.route.js')
    , profileStats = require('./routes/fetchProfileDetails.route.js')
    , leaderboard = require('./routes/leaderboard.route.js')
    , hResult = require('./routes/hResult.route.js');

//MongoDB Connection ---------->
MonDB.on('error', console.error.bind(console, 'connection error:'));
MonDB.once('open', function() {
    // we're connected!
});

//request parsers
myQuizServer.use(bodyParser.json());
myQuizServer.use(bodyParser.urlencoded({
  extended: true
}));

//loading the static file
myQuizServer.use(expressInstance.static('./../'));

//routes
myQuizServer.use('/',(req,res,next)=>{
  next();
},authenticate, launchQuiz, events, loadTopics, loadSubTopic, quiz, validate, profileStats, leaderboard, hResult);

//Server will be live on port 3000
myQuizServer.listen(3000,()=>{
  console.log('myQuizServer is on');
});
