import { useState, createContext, useEffect } from 'react';

export const ContextChats = createContext(null);

const ChatsProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState(
    localStorage.getItem('chats')
  );

  const updateContextValue = (newValues) => {
    setContextValue(JSON.stringify(newValues));
  };

  useEffect(() => {
    if (contextValue) localStorage.setItem('chats', contextValue);
  }, [contextValue]);

  const chats = contextValue ? JSON.parse(contextValue) : null;

  return (
    <ContextChats.Provider value={{ chats, update: updateContextValue }}>
      {children}
    </ContextChats.Provider>
  );
};

export default ChatsProvider;
