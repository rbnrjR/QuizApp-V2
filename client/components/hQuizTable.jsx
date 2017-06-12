import React from 'react';
import { Divider,Grid,Table,Header,Image,Segment  } from 'semantic-ui-react';
import Request from 'superagent';

export default class HostedQuizTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results : []
    };
  }
  componentDidMount(){
    Request.post('/hResult')
          .send({hostedBy : this.props.hostedBy})
          .end((err, res)=>{
            if (err) {
              console.log(err);
            } else {
              this.setState({results : JSON.parse(res.text)});
            }
          });
  }
  render(){
    var display = this.state.results.map((item,i)=>{
      var topic = item.topic
        , subtopic = item.subtopic;
      if(item.participants.length!=0){
        return(
          item.participants.map((item, i)=>{
            return(
              <Table.Row>
                <Table.Cell>{topic}</Table.Cell>
                <Table.Cell>{subtopic}</Table.Cell>
                <Table.Cell>{item.userId}</Table.Cell>
                <Table.Cell>{item.score}</Table.Cell>
              </Table.Row>
            );
          })
        );
      }
    });
    return (
      <Segment>
        <Table fixed inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>Topic</Table.HeaderCell>
              <Table.HeaderCell width={4}>Sub Topic</Table.HeaderCell>
              <Table.HeaderCell width={4}>Participants</Table.HeaderCell>
              <Table.HeaderCell width={4}>Scores</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {display}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
