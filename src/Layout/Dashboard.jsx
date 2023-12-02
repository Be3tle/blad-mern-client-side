import { FaHome, FaList, FaUser, FaUsers } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';

import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-58 min-h-screen bg-red-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/profile">
              <FaUser></FaUser>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-donation-requests">
              <FaList></FaList>
              My Donation Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create-donation-request">
              <IoCreate />
              Request a Donation
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
