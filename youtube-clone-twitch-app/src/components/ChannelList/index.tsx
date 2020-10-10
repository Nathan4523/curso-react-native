import React from 'react';

import { List, ChannelContainer, LeftSide, Avatar, Column, Username, Info, RightSIde, WhiteCircle, } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>golart</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSIde>
        <WhiteCircle />
      </RightSIde>
    </ChannelContainer> 
  )
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
