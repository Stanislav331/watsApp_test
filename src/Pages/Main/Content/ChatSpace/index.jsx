import { useContext } from 'react';
import { ContextChatId } from '../../Providers/ChatIdProvider';
import * as St from './style';

const ChatSpace = () => {
  const { messages } = useContext(ContextChatId);

  return (
    <St.ChatSpace id={'chat-container'}>
      {messages?.map((message, index) => (
        <St.Message
          ismymessage={message.isMyMessage ? 'true' : undefined}
          key={index}
        >
          {message.value}
        </St.Message>
      ))}
    </St.ChatSpace>
  );
};

export default ChatSpace;
