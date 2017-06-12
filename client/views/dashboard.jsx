import React from 'react';
import { Divider,Popup,Icon,Card,Header,Label,Button,Menu,Segment,Grid,Image } from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
import Avatar from './../components/avatar.jsx';
import ProfileStats from './../components/profile_stats.jsx';
import Events from './../components/events.jsx';
import Leaders from './../components/leaders.jsx';
import MobileAppbar from './../components/mobileAppbar.jsx';
import MobileEvents from './../components/mobileEvents.jsx';
import MobileLeaders from './../components/mobileLeaderboard.jsx';

export default class Dashboard extends React.Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return(
      <div>
        <Grid >
            <Grid.Row only='mobile' >
              <Grid.Column>
                <MobileAppbar  uid={this.props.match.params.uid} />
              </Grid.Column>
            </Grid.Row>
              <Grid.Row only='mobile' >
                  <Grid.Column width={16}>
                    <MobileEvents />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row only='mobile'>
                  <Grid.Column >
                    <Divider />
                    <MobileLeaders />
                  </Grid.Column>
                </Grid.Row>



          <Grid.Row only='tablet computer'>
            <Grid.Column >
            <Appbar uid={this.props.match.params.uid}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet computer'  streched>
            <Grid.Column tablet={5} computer={3} >
              <Avatar uid={this.props.match.params.uid}/>
              <center>
                <ProfileStats uid={this.props.match.params.uid}/>
              </center>
            </Grid.Column>
            <Grid.Column  tablet={11} computer={13} >
                <Events uid={this.props.match.params.uid}/>
                <Leaders />
            </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
