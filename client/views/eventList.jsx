import React from 'react';
import EventMenu from './../components/eventMenu.jsx'
import { Grid,Button,Icon,Popup} from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';

export default class EventList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Appbar uid={this.props.match.params.uid}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
          <EventMenu uid={this.props.match.params.uid} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      );
  }
}
