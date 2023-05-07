import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {AboutPage} from '../pages/about/about.component';
import {HomePage} from '../pages/home/home.component';
import {VansPage, loader as vansLoader} from '../pages/vans/vans.component';
import {VanPage, loader as vanLoader} from '../pages/van/van.component';
import {HostPage} from '../pages/host/host.component';
import {Dashboard} from '../layout/dashboard/dashboard.component';
import {Income} from '../layout/income/income.component';
import {Reviews} from '../layout/Reviews/reviews.component';
import {YourVans} from '../layout/your-vans/your-vans.components';
import {DetailsVans} from '../layout/details-van/details-van.component';
import {YourVansItemInfo} from '../components/your-vans-item-info/your-vans-item-info.component';
import {YourVansItemPrice} from '../components/your-vans-item-price/your-vans-item-price.component';
import {YourVansItemPhoto} from '../components/your-vans-item-photo/your-vans-item-photo.component';
import {ErrorPage} from '../pages/error/error.component';
import {LoginPage} from '../pages/login/login.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        loader: vansLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'vans/:id',
        element: <VanPage />,
        loader: vanLoader,
      },
      {
        path: 'host',
        element: <HostPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async () => {
              return null;
            },
          },
          {
            path: 'income',
            element: <Income />,
            loader: async () => {
              return null;
            },
          },
          {
            path: 'your-vans',
            element: <YourVans />,
            loader: async () => {
              return null;
            },
          },
          {
            path: 'your-vans/:id',
            element: <DetailsVans />,
            loader: async () => {
              return null;
            },
            children: [
              {
                index: true,
                element: <YourVansItemInfo />,
                loader: async () => {
                  return null;
                },
              },
              {
                path: 'price',
                element: <YourVansItemPrice />,
                loader: async () => {
                  return null;
                },
              },
              {
                path: 'photo',
                element: <YourVansItemPhoto />,
                loader: async () => {
                  return null;
                },
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
