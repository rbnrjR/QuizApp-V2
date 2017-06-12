import React from 'react';
import { Divider,Label,Button,Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import request from 'superagent';

export default class ProfileStats extends React.Component
{
  constructor(props){
    super(props);
    this.state={aQuiz:'',tScore:'',rank:'',hQuiz:'',userId:''}
  }
  componentDidMount()
  {
    var resobj;
    request.post('/profileStats').send({uid:this.props.uid}).end((err,res)=>{
        if(err)
          console.log(err);
        else
        {
          resobj=JSON.parse(res.text);
          this.setState({aQuiz:resobj.id.properties.attendedQuiz,tScore:resobj.id.properties.totalScore
          ,rank:resobj.id.properties.rank,hQuiz:resobj.id.properties.hostedQuiz,userId:resobj.id.properties.userId});
        }
    })
  }
  render(){
    return(
      <div>
        <center> <Label size='huge' color='teal'>Profile Stats</Label></center>
        <br/>
        <Menu  size='small' inverted vertical style={{marginLeft:'10%'}}>
          <Menu.Item name='Quiz Attended'  >
            <Label color='teal'>{this.state.aQuiz}</Label>
            Quiz Attended
          </Menu.Item>
          <Menu.Item name='Total Score'  >
            <Label color='teal'>{this.state.tScore}</Label>
            Total Score
          </Menu.Item>
          <Menu.Item name='Your Rank'  >
            <Label color='teal'>{this.state.rank}</Label>
            Your Rank
          </Menu.Item>
          <Menu.Item name='Hosted Quiz'  >
            <Label color='teal'>{this.state.hQuiz}</Label>
            Hosted Quiz
          </Menu.Item>
        </Menu>
        <br/>
        <Divider />
          <Link to={'/createQuiz/'+this.state.userId}><center><Button primary>Create your Quiz</Button></center></Link>
          <Divider horizontal>
            Or
          </Divider>
          <Link to={'/hquizresult/'+this.state.userId}><center><Button secondary >Hosted Quiz Data</Button></center></Link>
    </div>
    );
  }
}
