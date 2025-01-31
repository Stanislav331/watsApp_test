import React from 'react';
import { Outlet } from 'react-router-dom';
import ListItems from './LeftBar/ListItems';
import AddChat from './LeftBar/AddChat';
import ChatsProvider from './Providers/ChatsProvider';
import * as St from './style';

const MainPageUI = () => {
  return (
    <ChatsProvider>
      <St.MainWrapper>
        <St.LeftBar>
          <St.Title>Чаты</St.Title>
          <AddChat />
          <ListItems />
        </St.LeftBar>
        <Outlet />
      </St.MainWrapper>
    </ChatsProvider>
  );
};

export default MainPageUI;
