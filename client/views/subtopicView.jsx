import React from 'react';
import { Grid,Button,Icon,Popup} from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
import SubtopicList from './../components/subtopicList.jsx';

export default class SubtopicView extends React.Component
{
  render()
  {
    return(<Grid celled='internally'>
            <Grid.Row>
              <Grid.Column width={16}>
                <Appbar uid={this.props.match.params.uid}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column width={16}>
                <SubtopicList topic={this.props.match.params.topicName} uid={this.props.match.params.uid}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
  }
}
