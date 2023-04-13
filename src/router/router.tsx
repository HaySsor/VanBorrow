import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {AboutPage} from '../pages/about/about.component';
import {HomePage} from '../pages/home/home.component';
import {VansPage} from '../pages/vans/vans.component';
import {VanPage} from '../pages/van/van.component';
import {HostPage} from '../pages/host/host.component';
import {Dashboard} from '../layout/dashboard/dashboard.component';
import {Income} from '../layout/income/income.component';
import {Reviews} from '../layout/Reviews/reviews.component';

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
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'vans',
        element: <VansPage />,
      },
      {
        path: 'vans/:id',
        element: <VanPage />,
      },
      {
        path: 'host',
        element: <HostPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'income',
            element: <Income />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);
