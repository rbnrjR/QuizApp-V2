import React from 'react';
import {Message, Segment, Icon, Header, Radio, Button,Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default class Feedback extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:''
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e, value){
    this.setState({value : value})
  }
  render(){
    return(
      <div>
        <Message visible  header='Submitted!'
          content='Your Quiz has been submitted successfully. Provide your valuable feedback below' icon='info' />
        <Segment.Group >
          <Segment>
            <Header as='h1'>
              <Icon name='talk' size='small'/>
              <Header.Content>
                Feedback
              </Header.Content>
            </Header>
          </Segment>
          <Segment.Group>
            <center>
            <Segment>
              <h4>The questions are relevent to the topic</h4>
              <Divider />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'Strongly Disagree'} onClick={this.handleChange.bind(this, 'Strongly Disagree')}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'Disagree'} onClick={this.handleChange.bind(this, 'Disagree')} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'Neutral'} onClick={this.handleChange.bind(this, 'Neutral')} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'Agree'} onClick={this.handleChange.bind(this, 'Agree')} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'Strongly Agree'} onClick={this.handleChange.bind(this, 'Strongly Agree')} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment>
              <h4>The questions covers most of the portion in the topic</h4>
              <Divider />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'Strongly Disagree'}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'Disagree'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'Neutral'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'Agree'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'Strongly Agree'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment>
              <h4>The questions are tougher to answer</h4>
              <Divider />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment>
              <h4>The time allocated for the quiz is sufficient</h4>
              <Divider />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment>
              <h4>The quiz increased your technical confidence</h4>
              <Divider />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            </center>
          </Segment.Group>
        </Segment.Group>
        <center>
          <Link to={'/takeQuiz/result/'+this.props.obj.topic+'/'+this.props.obj.subtopic+'/'+this.props.obj.date+'/'+JSON.stringify(this.props.selected)+'/'+this.props.uid}>
          <Button inverted color='green'>Submit and View Scores</Button>
        </Link>
      </center>
      </div>
    );
  }
}
