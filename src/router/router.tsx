import {
  createBrowserRouter,
  LoaderFunction,
  Params,
  redirect,
} from 'react-router-dom';
import App from '../App';
import {AboutPage} from '../pages/about/about.component';
import {HomePage} from '../pages/home/home.component';
import {VansPage, loader as vansLoader} from '../pages/vans/vans.component';
import {VanPage, loader as vanLoader} from '../pages/van/van.component';
import {HostPage} from '../pages/host/host.component';
import {Dashboard , loader as dashboardLoader} from '../layout/dashboard/dashboard.component';
import {Income} from '../layout/income/income.component';
import {Reviews} from '../layout/Reviews/reviews.component';
import {
  YourVans,
  loader as yourVansLoader,
} from '../layout/your-vans/your-vans.components';
import {
  DetailsVans,
  loader as detailsVansLoader,
} from '../layout/details-van/details-van.component';
import {YourVansItemInfo} from '../components/your-vans-item-info/your-vans-item-info.component';
import {YourVansItemPrice} from '../components/your-vans-item-price/your-vans-item-price.component';
import {YourVansItemPhoto} from '../components/your-vans-item-photo/your-vans-item-photo.component';
import {ErrorPage} from '../pages/error/error.component';
import {
  LoginPage,
  loader as loginLoader,
  action as loginAction,
} from '../pages/login/login.component';
import {requireAuth} from '../utils/requireAuth';

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
        errorElement: <ErrorPage />,
        loader: vansLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: loginLoader,
        action: loginAction,
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
            loader:dashboardLoader,
          },
          {
            path: 'income',
            element: <Income />,
            loader: async ({request}: {request: Request}) =>
              await requireAuth(request),
          },
          {
            path: 'your-vans',
            element: <YourVans />,
            loader: yourVansLoader,
          },
          {
            path: 'your-vans/:id',
            element: <DetailsVans />,
            loader: detailsVansLoader,
            children: [
              {
                index: true,
                element: <YourVansItemInfo />,
                loader: async ({request}: {request: Request}) =>
                  await requireAuth(request),
              },
              {
                path: 'price',
                element: <YourVansItemPrice />,
                loader: async ({request}: {request: Request}) =>
                  await requireAuth(request),
              },
              {
                path: 'photo',
                element: <YourVansItemPhoto />,
                loader: async ({request}: {request: Request}) =>
                  await requireAuth(request),
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
