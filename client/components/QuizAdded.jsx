import React from 'react';
import {Message, Button, Icon} from 'semantic-ui-react';
import Appbar from './appbar.jsx';
import {Link} from 'react-router-dom';

export default class QuizAdded extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : '',
      time : ''
    };
  }
  componentDidMount(){
    this.setState({
      date : this.props.match.params.date,
      time : this.props.match.params.time
    });
  }
  render(){
    var d = new Date(this.state.date);
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var a = date+'/'+month+'/'+year;

    return(
      <div>
        <Appbar uid={this.props.match.params.uid}/>
        <br />
        <br />
        <center>
          <img src='http://www.freeiconspng.com/uploads/success-icon-19.png'
              alt='successfully launched'
              style={{width:'200px', height:'200px'}}/>
        </center>
        <Message>
          <Message.Header>
            <Icon name='calendar'/>
            Quiz Launched!
          </Message.Header>
          <p>
            Your quiz has been successfully launched. It will available for live on <b>{a}</b>
          </p>
        </Message>
        <center>
          <Link to={'/dashboard/'+this.props.match.params.uid}>
            <Button style={{color:'#00796B'}}>Take me back to dashboard</Button>
          </Link>
        </center>
      </div>
    );
  }
}
