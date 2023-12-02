import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import Profile from '../Pages/Dashboard/Profile';
import MyDonationRequests from '../Pages/Dashboard/MyDonationRequests';
import CreateDonationRequest from '../Pages/Dashboard/CreateDonationRequest';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/my-donation-requests',
        element: <MyDonationRequests></MyDonationRequests>,
      },
      {
        path: '/dashboard/create-donation-request',
        element: <CreateDonationRequest></CreateDonationRequest>,
      },
    ],
  },
]);

export default Router;
