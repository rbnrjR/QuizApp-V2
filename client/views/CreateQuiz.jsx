import React from 'react';
import {Link} from 'react-router-dom';
import { Form, TextArea, Input, Segment, Accordion, Label, Message,
  Menu, Modal, Header, Icon, Button, Divider } from 'semantic-ui-react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import AttachFile from 'material-ui/svg-icons/editor/attach-file';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Snackbar from 'material-ui/Snackbar';
//Components ---->
import StepperHeader from './../components/StepperHeader.jsx';
import QuestionPreview from './../components/QuestionPreview.jsx';
import Request from 'superagent';


export default class HorizontalTransition extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      stepIndex: 0,
      snack:false,
      topic: '',
      subtopic: '',
      questions: [],
      que : '',
      correctoption : '',
      option2:'',
      option3:'',
      option4:'',
      startDate:'',
      startTime:'',
      endTime:''
    };
    this.dummyAsync=this.dummyAsync.bind(this);
    this.handleNext=this.handleNext.bind(this);
    this.handlePrev=this.handlePrev.bind(this);
    this.handleLaunch=this.handleLaunch.bind(this);
    this.getStepContent=this.getStepContent.bind(this);
    this.handleTopic=this.handleTopic.bind(this);
    this.handleSubTopic=this.handleSubTopic.bind(this);
    this.handleAddQuestions=this.handleAddQuestions.bind(this);
    this.handleQuestion=this.handleQuestion.bind(this);
    this.handleCorrectOption=this.handleCorrectOption.bind(this);
    this.handleOption2=this.handleOption2.bind(this);
    this.handleOption3=this.handleOption3.bind(this);
    this.handleOption4=this.handleOption4.bind(this);
    this.handleSnackClose=this.handleSnackClose.bind(this);
    this.handleEditQuestion=this.handleEditQuestion.bind(this);
    this.handleDeleteQuestion=this.handleDeleteQuestion.bind(this);
    this.handleDateChange=this.handleDateChange.bind(this);
    this.handleStartTime=this.handleStartTime.bind(this);
    this.handleEndTime=this.handleEndTime.bind(this);
  }

  dummyAsync(cb){
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext(){
    var a = this.state.stepIndex;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: a + 1,
        finished: a >= 2
      }));
    }
  };

  handlePrev(){
    var a = this.state.stepIndex;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: a - 1
      }));
    }
  };

  handleLaunch(){
    Request.post('/saveLaunchQuiz')
            .send({topic:this.state.topic,subtopic:this.state.subtopic,hostedBy:this.props.match.params.uid,questions:this.state.questions,startDate:this.state.startDate,startTime:this.state.startTime,endTime:this.state.endTime})
            .end(function(err, res){
              console.log('Error in launching - > ',err);
            })
  }

  handleTopic(e){
    var topic = e.target.value;
    this.setState({topic: topic});
  }

  handleSubTopic(e){
    var subtopic = e.target.value;
    this.setState({subtopic:subtopic});
  }

  handleQuestion(e){
    var que = e.target.value;
    this.setState({que:que});
  }

  handleCorrectOption(e){
    var corOpt = e.target.value;
    this.setState({correctoption:corOpt});
  }

  handleOption2(e){
    var opt = e.target.value;
    this.setState({option2:opt});
  }

  handleOption3(e){
    var opt = e.target.value;
    this.setState({option3:opt});
  }

  handleOption4(e){
    var opt = e.target.value;
    this.setState({option4:opt});
  }

  handleAddQuestions(e){
    var questions = this.state.questions;
    var optArr = [];
    optArr.push(this.state.correctoption);
    optArr.push(this.state.option2);
    optArr.push(this.state.option3);
    optArr.push(this.state.option4);
    var obj = {
        question : this.state.que,
        options : optArr,
        correctoption : this.state.correctoption
    };
    questions.push(obj);
    this.setState({questions:questions, que:'',correctoption:'',option2:'',option3:'',option4:'',snack:true});

  }
  handleEditQuestion(item, i){
    var arr = this.state.questions;
    arr.splice(i,1);
    this.setState({questions:arr,
      que:item.question,
      correctoption:item.options[0],
      option2:item.options[1],
      option3:item.options[2],
      option4:item.options[3]
    });
  }
  handleDeleteQuestion(i){
    var arr = this.state.questions;
    arr.splice(i, 1);
    this.setState({questions:arr});

  }


  handleSnackClose(){
    this.setState({snack:false});
  }

  handleDateChange(e, date){
    this.setState({startDate: date});
  }

  handleStartTime(e, time){
    this.setState({startTime:time});
  }

  handleEndTime(e, time){
    this.setState({endTime:time});
  }

  getStepContent(stepIndex) {
    var prev=null;
    if(stepIndex>0){
      prev=<RaisedButton style={{margin:"20px",marginTop:"40px"}} label="Prev" onClick={this.handlePrev}/>
  }

    var controls=<div>
                  {prev}
                  <RaisedButton style={{margin:"20px",marginTop:"40px"}} primary={true} label="Next" onClick={this.handleNext}/>
                </div>

   switch (stepIndex) {
     case 0:
       return (
         <div>

         <center style={{marginTop:"10px"}}>
         <Form.Field>
         <Input placeholder='Topic' onChange={this.handleTopic} />
         </Form.Field>
           {controls}
           </center>
         </div>
       );
     case 1:
       return (
         <div>
           <Menu widths={2} style={{backgroundColor:'#37474F'}}>
             <Menu.Item>
               <span style={{color:'#0097A7'}}>Topic : </span>
               <span style={{color:'white'}}>{this.state.topic}</span>
             </Menu.Item>
             <Menu.Item></Menu.Item>
           </Menu>
           <Divider/>
           <center style={{marginTop:"10px"}}>
             <Form.Field>
               <Input placeholder='Sub Topic' onChange={this.handleSubTopic} />
             </Form.Field>
             {controls}
           </center>
         </div>
       );
     case 2:
       return (
         <div>
           <Menu widths={2} style={{backgroundColor:'#37474F'}}>
             <Menu.Item>
               <span style={{color:'#0097A7'}}>Topic : </span>
               <span style={{color:'white'}}>{this.state.topic}</span>
             </Menu.Item>
             <Menu.Item>
               <span style={{color:'#0097A7'}}>Sub Topic : </span>
               <span style={{color:'white'}}>{this.state.subtopic}</span>
             </Menu.Item>
           </Menu>
           <Divider/>
           <Form style={{padding:"10px"}} >
             <TextArea placeholder='Question' value={this.state.que} autoHeight onChange={this.handleQuestion} />
           </Form>
           <IconButton style={{float:"right"}}><AttachFile/></IconButton>
           <Header>Options</Header>
           <Input style={{padding:"10px"}} value={this.state.correctoption} placeholder='Correct Option' onChange={this.handleCorrectOption} />
           <Input style={{padding:"10px"}} value={this.state.option2} placeholder='Option' onChange={this.handleOption2}/>
           <Input style={{padding:"10px"}} value={this.state.option3} placeholder='Option' onChange={this.handleOption3}/>
           <Input style={{padding:"10px"}} value={this.state.option4} placeholder='Option' onChange={this.handleOption4}/>
           <RaisedButton style={{marginLeft:"10px"}} label="Add" primary={true} onTouchTap={(e)=>this.handleAddQuestions(e)}/>
           <center>{controls}</center>
           <Snackbar
             open={this.state.snack}
             message="Question has been added!"
             autoHideDuration={2000}
             onRequestClose={this.handleSnackClose}
           />
         </div>
       );
     case 3:
       return(
         <div>
           <Header><span style={{color:'white'}}>Launch</span></Header>
           <Divider/>
           <center>
             <DatePicker onChange={this.handleDateChange} hintText="Quiz Date" floatingLabelText='Quiz Date' mode="landscape" />
             <TimePicker onChange={this.handleStartTime} hintText="Start Time" floatingLabelText='Start Time' autoOk={true}/>
             <TimePicker onChange={this.handleEndTime} hintText="End Time" floatingLabelText='End Time' autoOk={true}/>
             <RaisedButton style={{margin:"20px",marginTop:"40px"}} primary={true} label="Prev" onClick={this.handlePrev}/>
             <Link to={'/quizAdded/'+this.state.startDate+'/'+this.state.startTime+'/'+this.props.match.params.uid}><RaisedButton style={{margin:"20px",marginTop:"40px"}} primary={true} label="Launch" onClick={this.handleLaunch}/></Link>
           </center>
          </div>
       )
     default:
       return 'Create Your Question';
    }
  }

  render() {
    return(
      <div>
        <StepperHeader stepIndex={this.state.stepIndex} />
        <Segment raised style={{margin:"20px",backgroundColor:'#e57373'}}>
          <ExpandTransition loading={this.state.loading} open={true}>
            {this.getStepContent(this.state.stepIndex)}
          </ExpandTransition>
        </Segment>
        <QuestionPreview questions={this.state.questions}
          handleEditQuestion={this.handleEditQuestion}
          handleDeleteQuestion={this.handleDeleteQuestion} />
      </div>
    );
  }
}
