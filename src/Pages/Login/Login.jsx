import { useContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
  const [loginError, setLoginError] = useState('');

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log('state in the location login page', location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        axios
          .post('https://blad-server.vercel.app/jwt', user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              // navigate after login
              navigate(from, { replace: true });
              navigate(location?.state ? location.state : '/');
            }
          });

        // get access  token
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="text-center flex justify-center items-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-7">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-900 text-gray-100 mt-28 mb-10">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleLogin}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="text-left text-gray-400">
                  Username or Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="text-left text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-800 focus:border-violet-400"
                />
              </div>

              {loginError && <p className="text-red-600 my-5">{loginError}</p>}

              <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-red-600">
                Log in
              </button>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">
              New here?
              <a
                rel="noopener noreferrer"
                href="/register"
                className="underline text-gray-100"
              >
                Create an account
              </a>
            </p>
          </div>

          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/give-blood-background_1057-1029.jpg?w=740&t=st=1701170932~exp=1701171532~hmac=1de3bacd9d01d64d572c7d9f74d2f66ce977262f38c8d5a6d635bb15f4d4d36c"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
