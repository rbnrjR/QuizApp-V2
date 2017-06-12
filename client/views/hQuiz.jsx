import React from 'react';
import Appbar from './../components/appbar.jsx';
import { Divider,Grid,Table,Header,Image,Segment  } from 'semantic-ui-react';
import HostedQuizTable from './../components/hQuizTable.jsx';
// import HostedQuizMenu from './../components/hQuizMenu.jsx';

export default class HostedQuizResult extends React.Component{
  constructor(props){
    super(props);
    this.state={uid:'',subtopic:''}
    this.handleSubtopic = this.handleSubtopic.bind(this);
  }
  componentDidMount(){
    this.setState({uid:this.props.match.params.uid});
  }
  handleSubtopic(e){
    // this.setState({subtopic:subtopic});
    console.log('called',e);
  }
  render(){
    return(
      <div>
        <Appbar uid={this.props.match.params.uid}/>
          <Header as='h3' block textAlign='center' inverted>
            Hosted Quiz Results
          </Header>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <HostedQuizTable hostedBy={this.props.match.params.uid} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
