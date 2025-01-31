import { useEffect } from 'react';
import ChatIdProvider from '../Providers/ChatIdProvider';
import { useParams } from 'react-router-dom';
import ChatSpace from './ChatSpace';
import ChatInput from './ChatInput';
import scrollChatSpaceToBottom from '../../../utils/scrollChatSpaceToBottom';
import * as St from './style';

const Content = () => {
  const { id } = useParams();

  useEffect(() => {
    scrollChatSpaceToBottom();
  }, [id]);

  return (
    <ChatIdProvider id={id}>
      <St.MainWrapper>
        <St.Title>{id}</St.Title>
        <ChatSpace />
        <ChatInput />
      </St.MainWrapper>
    </ChatIdProvider>
  );
};

export default Content;
