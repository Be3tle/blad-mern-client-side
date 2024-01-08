import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import MyDonationRequests from '../Pages/Dashboard/MyDonationRequests';
import CreateDonationRequest from '../Pages/Dashboard/CreateDonationRequest';
import MyDashboard from '../Pages/Dashboard/MyDashboard';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AllUsers from '../Pages/Dashboard/AllUsers';
import DonorHome from '../Pages/Dashboard/DonorHome';
import AdminHome from '../Pages/Dashboard/AdminHome';
import AllDonationRequests from '../Pages/Dashboard/AllDonationRequests';
import UpdateRequest from '../Pages/Dashboard/UpdateRequest';
import SharedRoute from './SharedRoute';
import DonationRequests from '../Pages/DonationRequests.jsx/DonationRequests';
import AddBlog from '../Pages/Dashboard/ContentManagement.jsx';
import ContentManagement from '../Pages/Dashboard/ContentManagement.jsx';
import Donors from '../Pages/Donors/Donors.jsx';

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
      {
        path: 'donation-requests',
        element: <DonationRequests></DonationRequests>,
      },
      {
        path: 'search-donors',
        element: (
          <PrivateRoute>
            <Donors></Donors>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/dashboard',
        element: <MyDashboard></MyDashboard>,
      },
      {
        path: '/dashboard/donor-home',
        element: <DonorHome></DonorHome>,
      },
      {
        path: '/dashboard/my-donation-requests',
        element: <MyDonationRequests></MyDonationRequests>,
      },
      {
        path: '/dashboard/create-donation-request',
        element: <CreateDonationRequest></CreateDonationRequest>,
      },
      {
        path: '/dashboard/update-request/:id',
        element: <UpdateRequest></UpdateRequest>,
        loader: ({ params }) =>
          fetch(`https://blad-server.vercel.app/requests/${params.id}`),
      },

      // admin routes
      {
        path: '/dashboard/admin-home',
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/all-users',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/all-donation-requests',
        element: (
          <SharedRoute>
            <AllDonationRequests></AllDonationRequests>
          </SharedRoute>
        ),
      },
      {
        path: '/dashboard/content-management',
        element: <ContentManagement></ContentManagement>,
      },
    ],
  },
]);

export default Router;
