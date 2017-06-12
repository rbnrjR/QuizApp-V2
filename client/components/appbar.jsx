import React from 'react';
import {Menu,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Appbar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout()
  {
    alert('logout');
  }
  render()
  {
    return(
      <div>
        <Menu fixed='top' size='massive' inverted position='center'>
          <Link to={'/dashboard'+'/'+this.props.uid}>
            <Menu.Item size='massive' name='home' >
              <img
                className="logo"
                src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=rxVyHBwoGHQLqxcXo64h5i50ags%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVU0RMi6a-Nvlul4E5IC5DdBmnwBSO0qYrdfzerJo-WZuT4-AgJeiUJkAMtfuuhQzfkEpO0LY7pe8FwjpewLcS1NwRUPBpj0DxMvdM-PB1x5pX_VLmnZH4aiqEIIBi0I6vmWH4wDSp59_yOcpPXIlgfhFOVZ4jkIe1Mcb5I27cL8ld5hOfNFu09waNj4kFc0nft0rDTJREB_4WRKGboLlgXE2eTCvB_7Z2L6BWmhlLRqEXQqb2HBqT6R6EH4C7m4vrybz27rihShk5H8QwJ0eN7N2nutP810GCZYeIDdkukh9DyYkuH65ke1DUdj_WRGjKvU1ZjnA1HTpKAl2M2A4P72wnm-y9yQeoJFFpAsca4R9qi9F-KcVkwfG2SdhYPuMbv5oCzM4ZFSsE3sek8U-gGXgApRNQVGQGOgNIPKmhdnJwNfyPaJQGBq_DbG4ZudalIc1VgYLTQEqtF_5pT2AXotBpoIPhaeqt15XI1SvQWo7fCk8yuhctbkipkczD0nsDVDingpZPHtpoVfX6SQxZ7CrVREyUxivQV6JpRvDJaB5SbSm1S-17yvrjgOyFCTrgvnJIe21Oii4hw1_KRQt6y-d5r_XxcCd4GP1Z57dk-nBIgD4i2jeNLzewcK7xRdA29Bm9D6UJ1eoVwQUKbsnFG3UFbkQ"/>
            </Menu.Item>
          </Link>
          <Link to={'/dashboard'+'/'+this.props.uid}>
            <Menu.Item  name='myQuiz' />
          </Link>
          <Menu.Menu size='massive' position='right'>
            <Link to={'/'}>
              <Menu.Item
                name='logout'
                onClick={this.handleLogout}>
                <Icon name='power' />
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
