import { createContext, useEffect, useState } from 'react';
import useDistributionMessages from './hooks/useDistributionMessages';
import scrollChatSpaceToBottom from '../../../../utils/scrollChatSpaceToBottom';

export const ContextChatId = createContext(null);

const ChatIdProvider = ({ id, children }) => {
  const instance = `chat-${id}`;

  const [contextValue, setContextValue] = useState(
    localStorage.getItem(instance) || ''
  );

  const updateContextValue = (newValue) => {
    setContextValue((prev) => {
      const oldValue = prev ? JSON.parse(prev) : null;

      return JSON.stringify([...(oldValue || []), newValue]);
    });

    scrollChatSpaceToBottom();
  };

  useEffect(() => {
    if (contextValue) localStorage.setItem(instance, contextValue);
  }, [contextValue]);

  useEffect(() => {
    setContextValue(localStorage.getItem(instance) || '');
  }, [id]);

  useDistributionMessages({ updateContextValue, id });

  const messages = contextValue ? JSON.parse(contextValue) : null;

  return (
    <ContextChatId.Provider value={{ messages, update: updateContextValue }}>
      {children}
    </ContextChatId.Provider>
  );
};

export default ChatIdProvider;
