import React from 'react';
import { Segment,Table,Divider,Card,Header,Image,Grid } from 'semantic-ui-react';


export default class MobileLeaders extends React.Component
{
  render()
  {
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Leaders
        </Header>
        <Segment color='brown'>
          <Table basic='very' >
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image
                      src='https://www.kanyaanimation.com/image/avatar.png'
                      shape='rounded'
                      size='mini' />
                    <Header.Content>
                      Lena
                      <Header.Subheader>900</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image
                      src='https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png'
                      shape='rounded'
                      size='mini' />
                    <Header.Content>
                      Matthew
                      <Header.Subheader>800</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image
                      src='https://www.linux.org.ru/photos/121022:1221884225.png'
                      shape='rounded'
                      size='mini' />
                    <Header.Content>
                      Lindsay
                      <Header.Subheader>700</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image
                      src='https://68.media.tumblr.com/avatar_b752cd12914a_128.png'
                      shape='rounded'
                      size='mini' />
                    <Header.Content>
                      Mark
                      <Header.Subheader>600</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}
