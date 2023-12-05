import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyDonationRequests from './MyDonationRequests';
import useRequest from '../../Hooks/useRequest';

const MyDashboard = () => {
  const { user } = useContext(AuthContext);
  const [request, refetch] = useRequest();
  return (
    <div>
      <div className="p-6 py-12 bg-vilet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <h2 className="text-center text-6xl font-bold pb-4">
            Welcome, {user.displayName}
          </h2>

          {request.length > 0 ? (
            <MyDonationRequests></MyDonationRequests>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
