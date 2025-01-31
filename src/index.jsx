import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import mainRouter from './Router';
import './style.css';

const element = document.getElementById('app');
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);

root.render(<RouterProvider router={routers} />);
