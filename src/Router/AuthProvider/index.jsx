import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const ContextAuth = createContext({ id: null, token: null });

const AuthProvider = () => {
  const [contextValue, setContextValue] = useState({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
  });

  const updateContextValue = (newValues) => {
    setContextValue((prev) => ({ ...prev, ...newValues }));
  };

  useEffect(() => {
    if (contextValue.id) localStorage.setItem('id', contextValue.id);
    if (contextValue.token) localStorage.setItem('token', contextValue.token);
  }, [contextValue.id, contextValue.token]);

  return (
    <ContextAuth.Provider
      value={{ ...contextValue, update: updateContextValue }}
    >
      <Outlet />
    </ContextAuth.Provider>
  );
};

export default AuthProvider;
