import React from 'react';
import Appbar from './../components/appbar.jsx';
import { Divider,Grid,Segment,Table,Header,Image,Progress  } from 'semantic-ui-react';
import request from 'superagent';


export default class Leaderboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      leaders : []
    };
  }
  componentDidMount(){
    request.get('/fetchleaders').end((err,res)=>{
      if(err){
        console.log(err);
      }
        else{
          this.setState({leaders:JSON.parse(res.text)});
        }
    })
  }
  render(){
    var me = this.state.leaders.map((item, i)=>{
      if (item.id.properties.userId===this.props.match.params.uid) {
        return(
          <Table.Row >
            <Table.Cell>
              {item.id.properties.totalScore}
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png' shape='rounded' size='mini' />
                <Header.Content style={{color:'#dce1ea'}}>
                  {item.id.properties.userId}
                  <Header.Subheader style={{color:'#dce1ea'}}>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
        );
      }
    });
    var all = this.state.leaders.map((item,i)=>{
      return(
        <Table.Row >
          <Table.Cell>
            {item.id.properties.totalScore}
          </Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png' shape='rounded' size='mini' />
              <Header.Content style={{color:'#dce1ea'}}>
                {item.id.properties.userId}
                <Header.Subheader style={{color:'#dce1ea'}}>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
      );
    });
    return(
      <div>
        <Grid only='tablet computer'>
        <Appbar uid={this.props.match.params.uid}/>
        <Grid celled='internally'>
          <Grid.Row only='tablet computer'>
            <Grid.Column width={16}>
              <Segment>
                <Header as='h3' block textAlign='center' inverted>
                  <span style={{color:'#dce1ea'}} className='leaderboardHeader'>Our Leaders</span>
                </Header>
                <Divider horizontal>
                  Your Position
                </Divider>
                <Table singleLine inverted>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={1}>Score</Table.HeaderCell>
                      <Table.HeaderCell width={15}>Name</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {me}
                  </Table.Body>
                </Table>
                <Divider />
                  <Table singleLine inverted>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell width={1}>Score</Table.HeaderCell>
                        <Table.HeaderCell width={15}>Name</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {all}
                    </Table.Body>
                  </Table>
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <Grid.Row only='mobile'>
          <Grid.Column width={16}>
            <Segment>
              <Header as='h3' block textAlign='center' inverted>
                <span style={{color:'#dce1ea'}} className='leaderboardHeader'>Our Leaders</span>
              </Header>
              <Divider horizontal>
                Your Position
              </Divider>
              <Table singleLine inverted>

                <Table.Body>
                  {me}
                </Table.Body>
              </Table>
              <Divider />
                <Table singleLine inverted>
                  <Table.Body>
                    {all}
                  </Table.Body>
                </Table>
              </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
