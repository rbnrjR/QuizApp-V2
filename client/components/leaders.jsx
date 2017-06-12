import React from 'react';
import { Divider,Card,Header,Image,Grid } from 'semantic-ui-react';


export default class Leaders extends React.Component
{
  render()
  {
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Toppers
        </Header>

        <Card.Group >
          <Card>
            <Image  src='https://www.kanyaanimation.com/image/avatar.png' />
            <Card.Content>
              <Card.Header>
                Hulk
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  956
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png' />
            <Card.Content>
              <Card.Header>
                Ironman
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  956
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://static.tumblr.com/utoqmk2/4E5n1nrj0/hepdiyorumki.png' />
            <Card.Content>
              <Card.Header>
                Captain america
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  956
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
