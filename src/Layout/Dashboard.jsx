import {
  FaHome,
  FaList,
  FaRegNewspaper,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';

import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useVolunteer from '../Hooks/useVolunteer';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-58 min-h-screen bg-red-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaUser></FaUser>
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/all-donation-requests">
                  <FaList></FaList>
                  All Donation Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/content-management">
                  <FaRegNewspaper></FaRegNewspaper>
                  Content Management
                </NavLink>
              </li>
            </>
          ) : isVolunteer ? (
            <>
              <li>
                <NavLink to="/dashboard/volunteer-home">
                  <FaUser></FaUser>
                  Volunteer Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/all-donation-requests">
                  <FaList></FaList>
                  All Donation Requests
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/donor-home">
                  <FaUser></FaUser>
                  Donor Home
                </NavLink>
              </li>
            </>
          )}
          {/* shared */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
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
