import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Main from '../Layout/Main';

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
]);

export default Router;
