import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useRequest from '../../Hooks/useRequest';

const MyDonationRequests = () => {
  const [request, refetch] = useRequest();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/requests/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-400">
      <h2 className="mb-4 text-2xl font-semibold leading">Donation Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-gray-700 ">
            <tr className="text-left">
              <th className="p-3">Recipient Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Date</th>
              <th className="p-3">Donor</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {request.map((item) => (
              <tr
                key={item._id}
                className="border-b border-opacity-20 border-gray-700 bg-gray-900"
              >
                <td className="p-3">
                  <p>{item.recName}</p>
                </td>
                <td className="p-3">
                  <p>
                    {item.recUpazila}, {item.recDistrict}
                  </p>
                </td>
                <td className="p-3">
                  <p>{item.time}</p>
                  <p className="text-gray-400">{item.date}</p>
                </td>
                <td className="p-3">
                  <p>{item.donorName}</p>
                  <p>{item.donorEmail}</p>
                </td>

                <td className="">
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-900">
                    <span>{item.status}</span>
                  </span>
                </td>
                <td className="p-3">
                  <details className="dropdown">
                    <summary className="m-1 btn">...</summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                      <li>
                        <a>Edit</a>
                      </li>
                      <li>
                        <a>View</a>
                      </li>
                      <li>
                        <a onClick={() => handleDelete(item._id)}>Delete</a>
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

export default MyDonationRequests;
