import React from 'react';
import * as St from './style';

const Item = ({ active, chatId }) => (
  <St.ChatItem active={active ? 'true' : undefined} to={`/main/${chatId}`}>
    {chatId}
  </St.ChatItem>
);

export default Item;
