import React from 'react';
import { Form,Menu, Button, Segment, Header, Icon, Modal, Radio, Progress, Grid } from 'semantic-ui-react';
import { Link,Redirect } from 'react-router-dom';
// import Feedback from './../components/Feedback.jsx';
import Request from 'superagent';
export default class TakeQuiz extends React.Component {
  constructor(props) {
    super();
    this.state={
      submit : false,
      percent : 100,
      timer : 30,
      reduction : 3.333,
      ajax : true,
      quizData : [],
      selectedAnswer : {},
      obj : {},
      uid:'',
      hostedBy:''
    }
    this.handleOpenConfirmSubmit=this.handleOpenConfirmSubmit.bind(this);
    this.handleCloseConfirmSubmit=this.handleCloseConfirmSubmit.bind(this);
    this.handleFinalSubmit=this.handleFinalSubmit.bind(this);
  }
  componentDidMount() {
    setInterval(() => this.timer(),1000);
    var obj = {
      topic:this.props.match.params.topic,
      subtopic:this.props.match.params.subtopic,
      date : this.props.match.params.date
    }
    this.setState({obj:obj,uid:this.props.match.params.uid});
    if (this.state.ajax) {
      Request.post('/quiz')
            .send({topic:this.props.match.params.topic, subtopic:this.props.match.params.subtopic, date : this.props.match.params.date})
            .end((err, res)=>{
              // Below 2 variables require Bug correction
              var timer = JSON.parse(res.text).que.length * 30
                , reduction = 100/timer;
              // console.log(' ------------------- ',timer, reduction);
              this.setState({ajax:false, quizData: JSON.parse(res.text).que, hostedBy: JSON.parse(res.text).que[0].hostedBy});
              console.log('---- > ',this.state.hostedBy);
      });
    }
  }
  timer(){
    var currentTime=this.state.timer;
    var per = this.state.percent;
    var red = this.state.reduction;
    this.setState({percent:per-red,timer:currentTime-1});
  }
  handleOpenConfirmSubmit(){
    this.setState({submit:true});
  }
  handleCloseConfirmSubmit(){
    this.setState({submit:false});
  }
  handleFinalSubmit(){
    this.setState({submit:false, timer:0});
    window.location.assign('http://localhost:3000/#/takeQuiz/result/'+this.state.obj.topic+'/'+this.state.obj.subtopic+'/'+this.state.obj.date+'/'+this.state.hostedBy+'/'+JSON.stringify(this.state.selectedAnswer)+'/'+this.state.uid);
  }
  handleSelectAnswer(index,option){
    this.setState({value:option});
    var a=this.state.selectedAnswer;
    a[index]=option;
    this.setState({selectedAnswer:a});
  }
  render(){
    var topic;
    var remTime = this.state.timer+'s';
    var colorStyle={};
    if (this.state.timer<=10) {
      colorStyle = {
        backgroundColor: '#e57373'
      }
    }
    else {
      colorStyle={
        backgroundColor: '#42A4F4'
      }
    }
    var question = this.state.quizData.map((item,i)=>{
      topic = item.topic;
      return(
        item.questions.map((item,i)=>{
          return(
            <Segment.Group key={i}>
              <Segment raised style={colorStyle}>
                <h4>{item.question}</h4>
              </Segment>
              <Segment>
                <Radio label={item.options[0]} value={item.options[0]} checked={this.state.selectedAnswer[i] === item.options[0]} onClick={this.handleSelectAnswer.bind(this,i,item.options[0])} style={{paddingRight:'20px'}}/>
                <Radio label={item.options[1]} value={item.options[1]} checked={this.state.selectedAnswer[i] === item.options[1]} onClick={this.handleSelectAnswer.bind(this,i,item.options[1])} style={{paddingRight:'20px'}}/>
                <Radio label={item.options[2]} value={item.options[2]} checked={this.state.selectedAnswer[i] === item.options[2]} onClick={this.handleSelectAnswer.bind(this,i,item.options[2])} style={{paddingRight:'20px'}}/>
                <Radio label={item.options[3]} value={item.options[3]} checked={this.state.selectedAnswer[i] === item.options[3]} onClick={this.handleSelectAnswer.bind(this,i,item.options[3])} />
              </Segment>
            </Segment.Group>
          );
        })
      );
    });
    var modal=<Modal basic size='small' open={this.state.submit} >
                <Header icon='warning' content='Confirm Submit' />
                <Modal.Content>
                  <p>Are you sure you want to submit?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic color='red' inverted onClick={this.handleCloseConfirmSubmit} >
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='green' inverted onClick={this.handleFinalSubmit} >
                    <Icon name='checkmark' /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
    if (this.state.timer<=0) {
      return(
        <Redirect to={'/takeQuiz/result/'+this.state.obj.topic+'/'+this.state.obj.subtopic+'/'+this.state.obj.date+'/'+this.state.hostedBy+'/'+JSON.stringify(this.state.selectedAnswer)+'/'+this.state.uid} />
      );
    }
    else {
      return(
        <div>
          <Menu fixed='true'>
          <Grid className='takeQuizMenu'>
            <Grid.Row>
              <Grid.Column width={2}>
                <center><h1 style={{color : "#757575",marginTop:'12px'}}>{topic}</h1></center>
              </Grid.Column>
              <Grid.Column width={12}>
                  <Progress percent={this.state.percent} indicating style={{marginTop:'17px'}}/>
              </Grid.Column>
              <Grid.Column width={2} className='timer' >
                <Icon name='hourglass half' size='large'  style={{marginTop:'17px'}}/><b>{remTime}</b>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid className= 'takeQuizQue'>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
              <Segment.Group style={{backgroundColor:'#757575'}}>
                {question}
              </Segment.Group>
              <br/>
              <center>
                <Button inverted color='green' onClick={this.handleOpenConfirmSubmit} >Submit</Button>
              </center>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
          {modal}
        </Grid>
      </div>
      );
    }
  }
}
