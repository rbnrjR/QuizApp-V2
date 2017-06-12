import React from 'react';
import { Divider,Label,Image } from 'semantic-ui-react';
import request from 'superagent';

export default class Avatar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={url:'',userId:''}
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
          this.setState({url:url,userId:resobj.id.properties.userId});
        }
    })
  }
  render()
  {
    return(
      <div>
          <center>
            <Image src={this.state.url} style={{marginLeft:'8%'}} />
          </center>
            <br/>
            <br/>
          <center >
            <Label style={{marginLeft:'10%'}} size='huge' color='brown'>{this.state.userId}</Label>
          </center>
            <br/>
          <Divider/>
      </div>
    );
  }
}
