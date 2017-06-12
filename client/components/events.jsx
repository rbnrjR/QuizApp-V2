import React from 'react';
import { Divider,Icon,Card,Header,Button,Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Request from 'superagent';

export default class Events extends React.Component{
  constructor(props){
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

  render(){
    var that = this;
    var cardContent = this.state.eventsArr.map(function(item, i){
      var st = new Date(item.st)
        , m = st.getMonth()+1
        , stt = st.getDate()+'/'+m+'/'+st.getFullYear()
        , et = new Date(item.et)
        , mm = et.getMonth()+1
        , ett = et.getDate()+'/'+mm+'/'+et.getFullYear()
        , dd = new Date()
        , mmm = dd.getMonth()+1
        , currentDate = dd.getDate()+'/'+mmm+'/'+dd.getFullYear()
        , live = '';
      if ((st<=dd)&&(et>=dd)) {
        live = <span style={{color:'red'}}><strong>Live!</strong></span>
      }
      else {
        live = <span><strong>{stt}</strong></span>;
      }
      return(
        <Card key={i}>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={item.topicImgURL}
            />
            <Card.Header>
              {item.topic}
            </Card.Header>
            <Card.Meta>
              {item.subtopic}
            </Card.Meta>
            <Card.Description>
              {live}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Link to={'/takeQuiz/confirm/'+item.topic+'/'+item.subtopic+'/'+item.date+'/'+that.props.uid}>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      );
    });
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Card.Group >
          {cardContent}
        </Card.Group>

        <br/>
        <Link to={'/eventList'+'/'+this.props.uid} ><Button
          animated='fade'
          floated='right'
          color='red'>
          <Button.Content visible>
            know more events
          </Button.Content>
          <Button.Content hidden>
            <Icon name='angle double right' />
          </Button.Content>
        </Button></Link>
        <br/>
        <br/>
        <Divider />
      </div>
    );
  }
}
