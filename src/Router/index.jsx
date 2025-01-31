import React from 'react';
import { lazy } from 'react';
import AuthGuard from './AuthGuard';
import AuthProvider from './AuthProvider';
import Error from '../components/Error';
import NotFound from '../Pages/Main/Content/NotFound';

export const MainPage = lazy(() => import('../Pages/Main'));
export const AuthPage = lazy(() => import('../Pages/Auth'));
export const MainPageContent = lazy(() => import('../Pages/Main/Content'));

const mainRouter = [
  {
    path: '/',
    errorElement: <Error />,
    element: <AuthProvider />,
    children: [
      {
        index: true,
        element: <AuthPage />,
        errorElement: <Error />,
      },
      {
        element: <AuthGuard />,
        errorElement: <Error />,
        children: [
          {
            path: '/main',
            element: <MainPage />,
            errorElement: <Error />,
            children: [
              {
                index: true,
                element: <NotFound />,
                errorElement: <Error />,
              },
              {
                path: '/main/:id',
                element: <MainPageContent />,
                errorElement: <Error />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default mainRouter;
