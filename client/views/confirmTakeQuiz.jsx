import React from 'react';
import {Button, Message, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Appbar from './../components/appbar.jsx';

export default class confirmTakeQuiz extends React.Component{
  render(){
    return(
      <div>
        <Appbar uid={this.props.match.params.uid}/>
        <br/>
        <center>
          <Message visible  header='Confirm Start!'
            content='Click the start button below to start the quiz.
            Note: Once the quiz gets started you can not cancel.'/>
          <Segment>
            Only team entries are eligible. <br /> <br />
A team shall consist of max two persons <br /> <br />
The decision of the quiz-master will be final and will not be subjected to any change. <br /> <br />
The participants shall not be allowed to  use mobile or other electronic instruments. <br /> <br />
The questions shall be in the form of multiple choice, True / False statement, Specific-answer question etc. <br /> <br />
Audience  shall  not give any hints or clues to the competitors. <br /> <br />
Replacement of any participant  of a team is not allowed after registration  <br /> <br />
Teams selected for the final rounds  will be allowed to give themselves an appropriate name related to the competition by which they may want to be known
          </Segment>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Link to={'/takeQuiz/quiz/'+this.props.match.params.topic+'/'+this.props.match.params.subtopic+'/'+this.props.match.params.date+'/'+this.props.match.params.uid}><Button positive>Start</Button></Link>
          </Button.Group>
        </center>
      </div>
    );
  }
}
