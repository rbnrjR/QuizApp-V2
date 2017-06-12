import React from 'react';
import Request from 'superagent';
import Appbar from './appbar.jsx';
import {Grid,Image,Segment,Divider,List,Button,Menu,Label} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class QuizResult extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      uid : '',
      result : {},
      url:'http://res.cloudinary.com/myquiz/image/upload/v1496406230/',
    }
  }
  componentDidMount(){
    this.setState({uid : this.props.match.params.uid});
    Request.post('/validate')
      .send({topic:this.props.match.params.topic,
            subtopic:this.props.match.params.subtopic,
            date : this.props.match.params.date,
            hostedBy : this.props.match.params.hostedBy,
            selected : JSON.parse(this.props.match.params.selected),
            uid : this.props.match.params.uid
          })
      .end((err, res)=>{
        this.setState({result:JSON.parse(res.text)});
    });
  }
  render(){
    return(
      <div>
          <Appbar uid={this.props.match.params.uid}/> <br />
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
              </Grid.Column>
              <Grid.Column width={8}>
                <center>
                  <Image src={this.state.url + this.state.result.img} size='medium' bordered />
                </center>
                  <Divider horizontal>
                    Quiz Results
                  </Divider>
                  <center>
                    <Menu  size='massive' inverted vertical >
                      <Menu.Item name='Adid'  >
                        <Label color='teal' size='large'>{this.state.uid}</Label>
                        <span >Adid</span>
                      </Menu.Item>
                      <Menu.Item name='Quiz Score'  >
                        <Label color='teal' size='large'>{this.state.result.quizScore}</Label>
                      <span >  Quiz Score</span>
                      </Menu.Item>
                      <Menu.Item name='Total Questions Answered Right'  >
                        <Label color='teal' size='large'>{this.state.result.totalRightQues}</Label>
                        <span > Questions Answered Right</span>
                      </Menu.Item>
                      <Menu.Item name='Total Score'>
                        <Label color='teal' size='large'>{this.state.result.totalScore}</Label>
                      <span >  Total Score</span>
                      </Menu.Item>
                    </Menu>
                    <Divider />
                      <Button.Group>
                        <Link to={'/leaderboard'+'/'+this.state.uid}>
                        <Button color='teal'>Take me leaderboard</Button>
                        </Link>
                        <Button.Or />
                          <Link to={'/dashboard'+'/'+this.state.uid}>
                        <Button color='blue'>Take me dashboard</Button>
                        </Link>
                      </Button.Group>
                  </center>
              </Grid.Column>
              <Grid.Column width={4}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
