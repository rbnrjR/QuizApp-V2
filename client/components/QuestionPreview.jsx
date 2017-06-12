import React from 'react';
import { Segment, Button, Icon, Divider } from 'semantic-ui-react';

export default class QuestionPreview extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    var QuePreview = '';
    var that = this;
    var preview = this.props.questions.map(function(item, i){
      return(
        <Segment.Group horizontal key={i}>
          <Segment style={{backgroundColor:'#37474F', color:'white', width:'40%'}}>{item.question}</Segment>
          <Segment style={{backgroundColor:'#C5E1A5', width:'15%'}}>{item.options[0]}</Segment>
          <Segment style={{backgroundColor:'#ffcdd2',width:'12%'}}>{item.options[1]}</Segment>
          <Segment style={{backgroundColor:'#ffcdd2',width:'12%'}}>{item.options[2]}</Segment>
          <Segment style={{backgroundColor:'#ffcdd2',width:'12%'}}>{item.options[3]}</Segment>
          <Segment style={{backgroundColor:'#37474F',width:'12%'}}>
            <Button icon floated='left' onClick={()=>{that.props.handleEditQuestion(item, i)}}><Icon name='write'/></Button>
            <Button icon floated='right' onClick={()=>{that.props.handleDeleteQuestion(i)}}
              ><Icon name='delete'/></Button>
          </Segment>
        </Segment.Group>
      );
    });
    if (this.props.questions.length>0) {
      QuePreview =  <div>
                      <Divider horizontal>Question Preview</Divider>
                      <Segment style={{backgroundColor:'#0097A7',margin:'20px'}}>
                        {preview}
                      </Segment>
                    </div>
    }
    return(
      <div>
        {QuePreview}
      </div>
    );
  }
}
