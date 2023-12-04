import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useState } from 'react';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const [filter, setFilter] = useState('all'); // 'all' (default), 'active', 'blocked'

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleMakeVolunteer = (user) => {
    axiosSecure.patch(`/users/volunteer/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is a Volunteer Now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleBlockUser = (user) => {
    axiosSecure.patch(`/users/blocked/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Blocked!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleUnblockUser = (user) => {
    axiosSecure.patch(`/users/active/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Active!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-start ml-16 gap-2 my-4">
        {/* Filter buttons */}
        <button
          className={`btn ${filter === 'all' ? 'btn-active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`btn ${filter === 'active' ? 'btn-active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`btn ${filter === 'blocked' ? 'btn-active' : ''}`}
          onClick={() => setFilter('blocked')}
        >
          Blocked
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                if (filter === 'all') return true;
                return (
                  user.status === (filter === 'active' ? 'active' : 'blocked')
                );
              })
              .map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photoURL} alt="User" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {user.status === 'active'
                      ? `Active(${user.role})`
                      : 'Blocked'}
                  </td>
                  <td>
                    <details className="dropdown">
                      <summary className="m-1 btn">...</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-28">
                        <li>
                          <a onClick={() => handleMakeAdmin(user)}>
                            Make Admin
                          </a>
                        </li>
                        <li>
                          <a onClick={() => handleMakeVolunteer(user)}>
                            Make Volunteer
                          </a>
                        </li>
                        <li>
                          {user.status === 'active' ? (
                            <a onClick={() => handleBlockUser(user)}>Block</a>
                          ) : (
                            <a onClick={() => handleUnblockUser(user)}>
                              Unblock
                            </a>
                          )}
                        </li>
                      </ul>
                    </details>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
