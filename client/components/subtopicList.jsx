import React from 'react';
import {Grid,Segment,Button,Icon,Popup,Card,Image,Header,Divider} from 'semantic-ui-react';
import Request from 'superagent';
import {Link} from 'react-router-dom';

export default class SubtopicList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sbtList : []
    };
  }

  componentDidMount(){
    Request.post('/loadSubTopic').send({topic:this.props.topic}).end((err, res)=>{
      this.setState({sbtList : JSON.parse(res.text).subTopicDees})
    });
  }

  render(){
    var sbt = this.state.sbtList.map((item,i)=>{
      var d = new Date(item.date);
      var month = d.getMonth()+1;
      var date = d.getDate()+'/'+month+'/'+d.getFullYear();
      return(
        <Grid.Column  key={i}>
          <Card color='brown'>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src= {item.topicImgURL}
              />
              <Card.Header>
                {item.subtopic}
              </Card.Header>
              <Card.Meta>
                {item.topic}
              </Card.Meta>
              <Card.Description>
                <strong>{date}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={'/takeQuiz/confirm/'+item.topic+'/'+item.subtopic+'/'+item.date+'/'+this.props.uid}><Button color='google plus'>
                Take Quiz
              </Button>
            </Link>
            </Card.Content>
          </Card>
          <Divider />
        </Grid.Column>
      )
    });
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Grid>
          <Grid.Row  columns={4}>
            {sbt}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
