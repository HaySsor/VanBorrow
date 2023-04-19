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
import {YourVans} from '../layout/your-vans/your-vans.components';
import {DetailsVans} from '../layout/details-van/details-van.component';
import {YourVansItemInfo} from '../components/your-vans-item-info/your-vans-item-info.component';
import {YourVansItemPrice} from '../components/your-vans-item-price/your-vans-item-price.component';
import {YourVansItemPhoto} from '../components/your-vans-item-photo/your-vans-item-photo.component';

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
            path: 'your-vans',
            element: <YourVans />,
          },
          {
            path: 'your-vans/:id',
            element: <DetailsVans />,
            children: [
              {
                index: true,
                element: <YourVansItemInfo />,
              },
              {
                path: 'price',
                element: <YourVansItemPrice />,
              },
              {
                path: 'photo',
                element: <YourVansItemPhoto />,
              },
            ],
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
