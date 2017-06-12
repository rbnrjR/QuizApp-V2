import React from 'react';
import {Menu,Icon,Image,Dropdown,Label,Segment} from 'semantic-ui-react';
import request from 'superagent';

export default class MobileAppbar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={aQuiz:'',tScore:'',rank:'',hQuiz:'',userId:'',url:'',userId:''}
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount()
  {
    var url = 'http://res.cloudinary.com/myquiz/image/upload/v1496406230/',resobj;
    request.post('/profileStats').send({uid:this.props.uid}).end((err,res)=>{
        if(err)
          console.log(err);
        else
        {
          resobj = JSON.parse(res.text);
          url+=resobj.id.properties.image
          resobj=JSON.parse(res.text);
          this.setState({url:url,userId:resobj.id.properties.userId,aQuiz:resobj.id.properties.attendedQuiz,tScore:resobj.id.properties.totalScore
          ,rank:resobj.id.properties.rank,hQuiz:resobj.id.properties.hostedQuiz,userId:resobj.id.properties.userId});
        }
    })
  }
  handleLogout()
  {
    alert('logout');
  }

  render()
  {

    return(
      <Menu size='massive' inverted position='center'>
        <Menu.Item size='massive' name='home' >
          <img
            className="logo"
            src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=rxVyHBwoGHQLqxcXo64h5i50ags%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVU0RMi6a-Nvlul4E5IC5DdBmnwBSO0qYrdfzerJo-WZuT4-AgJeiUJkAMtfuuhQzfkEpO0LY7pe8FwjpewLcS1NwRUPBpj0DxMvdM-PB1x5pX_VLmnZH4aiqEIIBi0I6vmWH4wDSp59_yOcpPXIlgfhFOVZ4jkIe1Mcb5I27cL8ld5hOfNFu09waNj4kFc0nft0rDTJREB_4WRKGboLlgXE2eTCvB_7Z2L6BWmhlLRqEXQqb2HBqT6R6EH4C7m4vrybz27rihShk5H8QwJ0eN7N2nutP810GCZYeIDdkukh9DyYkuH65ke1DUdj_WRGjKvU1ZjnA1HTpKAl2M2A4P72wnm-y9yQeoJFFpAsca4R9qi9F-KcVkwfG2SdhYPuMbv5oCzM4ZFSsE3sek8U-gGXgApRNQVGQGOgNIPKmhdnJwNfyPaJQGBq_DbG4ZudalIc1VgYLTQEqtF_5pT2AXotBpoIPhaeqt15XI1SvQWo7fCk8yuhctbkipkczD0nsDVDingpZPHtpoVfX6SQxZ7CrVREyUxivQV6JpRvDJaB5SbSm1S-17yvrjgOyFCTrgvnJIe21Oii4hw1_KRQt6y-d5r_XxcCd4GP1Z57dk-nBIgD4i2jeNLzewcK7xRdA29Bm9D6UJ1eoVwQUKbsnFG3UFbkQ"/>
        </Menu.Item>
        <Menu.Item  name='myQuiz' />
        <Menu.Menu size='massive' position='right'>
          <Menu.Item>
            <Image size='mini' src={this.state.url}/>
            <Dropdown size='large' color='red'>
            <Dropdown.Menu >
              <Dropdown.Item inverted color='red'>
              <center>  <Label color='brown'>{this.state.userId} </Label> </center>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
              <center>  <Label color='teal'>Profile Stats </Label> </center>
              </Dropdown.Item>

            <center>  <Dropdown.Item name='total score'>
                <Label color='brown'>Total Score </Label>
                <Label color='teal'> {this.state.tScore} </Label>
              </Dropdown.Item>
            </center>
            <center>  <Dropdown.Item>
                <Label color='brown'>Your Rank</Label>s
                <Label color='teal'>{this.state.rank}</Label>
              </Dropdown.Item>
            </center>
              <center>
                <Dropdown.Item>
                <Label color='brown'>Hosted Quiz</Label>
                <Label color='teal'>{this.state.hQuiz}</Label>
              </Dropdown.Item>
            </center>
            </Dropdown.Menu>

          </Dropdown>
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.handleLogout}>
            <Icon name='power' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
