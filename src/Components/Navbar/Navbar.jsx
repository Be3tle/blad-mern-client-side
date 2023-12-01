import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="navbar md:fixed z-10 bg-opacity-70 md:bg-opacity-30  bg-black text-white max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/dashboard/my-donation-requests">Donation Requests</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a>Funding</a>
              </li>
              <li>
                <a href="login">Login</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-xl ml-32 md:ml-0 text-red-600"
          >
            BLAD
          </a>
        </div>
        {/* <div className="navbar-end hidden lg:flex"></div> */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/dashboard/my-donation-requests">Donation Requests</a>
            </li>

            <li>
              <a>Blog</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a>Funding</a>
            </li>
          </ul>
          {user ? (
            <a
              onClick={handleLogOut}
              className="border-red-600 bg-transparent border-2 hover:bg-transparent hover:border-red-700 px-3 py-1 text-white font-normal rounded-md"
            >
              Logout
            </a>
          ) : (
            <a
              href="login"
              className="border-red-600 bg-transparent border-2 hover:bg-transparent hover:border-red-700 px-3 py-1 text-white font-normal rounded-md"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
