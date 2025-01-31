import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextAuth } from '../AuthProvider';
import checkStatus from '../../requests/getAuthStatus';
import Loader from '../../components/Loader';
import * as St from './style';

const logOut = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('token');
};

const getUIofStatus = (status) => {
  switch (status) {
    case null:
      return (
        <St.Wrapper>
          <Loader />
        </St.Wrapper>
      );
    case true:
      return (
        <St.Wrapper>
          <Outlet />
        </St.Wrapper>
      );
    case false:
      logOut();

      return <Navigate to={'/'} />;
  }
};

const AuthGuard = () => {
  const [status, setStatus] = useState(null);
  const { id: idInstance, token: apiTokenInstance } = useContext(ContextAuth);

  useEffect(() => {
    (async () => {
      const isAuthenticated = await checkStatus({
        idInstance,
        apiTokenInstance,
      });

      isAuthenticated ? setStatus(true) : setStatus(false);
    })();
  }, [idInstance, apiTokenInstance, setStatus]);

  return getUIofStatus(status);
};

export default AuthGuard;
