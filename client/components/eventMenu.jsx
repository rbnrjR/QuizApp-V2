import React from 'react'
import { Divider,Card,Icon,Grid, Menu, Segment,Header,Reveal,Image,Statistic,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import request from 'superagent';


export default class EventMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem : 'bio' ,
      displayArea : '',
      topics:[]
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount(){
    request.get('/loadTopics').end((err,res)=>{
             if(err || res.status!=200){
                console.log('Err in eventMenu Did Mount : ',err);
              }
              else{
                this.setState({topics : JSON.parse(res.text).topics});
              }
           });
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    var events = this.state.topics.map((item,i)=>{
      return(
        <Grid.Column key={i}>
          <Card >
            <Image
              src={item.topicImgURL}
              size='large' />
            <Card.Content>
              <Card.Header>
                {item.topic}
              </Card.Header>
            </Card.Content>
            <Link to={'/subTopic/'+item.topic+'/'+this.props.uid}>
              <Button attached='bottom' color='olive'>Explore</Button>
            </Link>
          </Card>
          <Divider />
        </Grid.Column>
      );
    });

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' block textAlign='center' inverted>
              Events
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row  columns={4}>
          {events}
        </Grid.Row>
      </Grid>
    )
  }
}
