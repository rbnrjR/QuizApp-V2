import React from 'react';
import { Segment,List,Divider,Icon,Card,Header,Button,Image } from 'semantic-ui-react';
import Request from 'superagent';
import {Link} from 'react-router-dom';

export default class MbileEvents extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      eventsArr : []
    };
  }

  componentDidMount(){
    var that = this;
    Request.get('/events').end(function(err, res){
      that.setState({eventsArr : JSON.parse(res.text).eventsArr});
    });
  }


  render()
  {
    var that = this;
    var eventList = this.state.eventsArr.map((item,i)=>{
      var d = new Date(item.date);
      var month = d.getMonth()+1;
      var date = d.getDate()+'/'+month+'/'+d.getFullYear();
      return (
        <List.Item key={i}>

          <List.Content floated='right'>
            <Link to={'/takeQuiz/confirm/'+item.topic+'/'+item.subtopic+'/'+item.date+'/'+that.props.uid}>
              <Button basic color='green'>
                Take Quiz
              </Button>
            </Link>
          </List.Content>

          <Image
            avatar
            src={item.topicImgURL} />

          <List.Content>
            <List.Header as='a'>
              {item.topic+' , '+item.subtopic}
            </List.Header>
            <List.Header size='small'>  {date} </List.Header>
          </List.Content>
          <br />
        </List.Item>
      );
    });
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Segment color='brown' >
          <List divided verticalAlign='middle' >
            {eventList}

          </List>
        </Segment>
      </div>
    );
  }
}
