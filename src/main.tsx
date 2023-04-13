import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/router';
import './index.css';
import {makeServer} from './server/server.js';

if (process.env.NODE_ENV === 'development') {
  makeServer({environment: 'development'});
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
