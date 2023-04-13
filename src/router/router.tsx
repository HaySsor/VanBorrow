import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {AboutPage} from '../pages/about/about.component';
import {HomePage} from '../pages/home/home.component';
import {VansPage} from '../pages/vans/vans.component';
import {VanPage} from '../pages/van/van.component'
import '../server/server.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/vans',
        element: <VansPage />,
      },
      {
        path:'/vans/:id',
        element: <VanPage />
      }
    ],
  },
]);
