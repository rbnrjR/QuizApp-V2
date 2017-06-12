import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginPage from './client/views/loginPage.jsx';
import Dashboard from './client/views/dashboard.jsx';
import EventList from './client/views/eventList.jsx';
import SubtopicView from './client/views/subtopicView.jsx';
import confirmTakeQuiz from './client/views/confirmTakeQuiz.jsx';
import TakeQuiz from './client/views/TakeQuiz.jsx';
import Feedback from './client/components/Feedback.jsx';
import CreateQuiz from './client/views/CreateQuiz.jsx';
import QuizAdded from './client/components/QuizAdded.jsx';
import Leaderboard from './client/views/leaderBoard.jsx';
import QuizResult from './client/components/QuizResult.jsx';
import HostedQuizResult from './client/views/hQuiz.jsx';

injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard/:uid' component={Dashboard} />
        <Route path='/eventList/:uid' component={EventList} />
        <Route path='/subTopic/:topicName/:uid' component={SubtopicView} />
        <Route path='/createQuiz/:uid' component={CreateQuiz} />
        <Route path='/quizAdded/:date/:time/:uid' component={QuizAdded} />
        <Route path='/takeQuiz/confirm/:topic/:subtopic/:date/:uid' component={confirmTakeQuiz} />
        <Route path='/takeQuiz/quiz/:topic/:subtopic/:date/:uid' component={TakeQuiz} />
        <Route path='/takeQuiz/result/:topic/:subtopic/:date/:hostedBy/:selected/:uid' component={QuizResult} />
        <Route path='/leaderboard/:uid' component={Leaderboard} />
        <Route path='/hquizresult/:uid' component={HostedQuizResult} />
      </div>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("content")
);
